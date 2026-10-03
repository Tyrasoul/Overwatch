'use strict';
(() => {
  const $ = (selector) => document.querySelector(selector);
  const config = window.OVERWATCH_CONFIG || {};
  const data = window.OVERWATCH_DATA;
  const read = (key) => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const themeButton = $('#theme-toggle');
  function syncThemeButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.querySelector('span').textContent = dark ? 'Light mode' : 'Dark mode';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (themeButton) {
    themeButton.hidden = false;
    syncThemeButton();
    themeButton.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      write('overwatch-theme', theme);
      syncThemeButton();
    });
  }

  const search = $('#search');
  const verdict = $('#verdict');
  if (search && verdict && data) {
    document.querySelectorAll('[data-enhanced]').forEach(el => el.hidden = false);
    const cards = [...document.querySelectorAll('.claim')];
    let topic = 'All topics';
    const searchable = new Map(data.claims.map(c => [c.id, [c.title, c.agency, c.topic, c.summary, c.established, c.limits, c.conditions, c.terms, ...c.sources.map(id => data.sources.find(s => s.id === id)?.title || '')].join(' ').normalize('NFKC').toLowerCase()]));
    function filter() {
      const words = search.value.trim().normalize('NFKC').toLowerCase().split(/\s+/).filter(Boolean);
      let visible = 0;
      for (const card of cards) {
        const matches = (topic === 'All topics' || card.dataset.topic === topic) &&
          (verdict.value === 'all' || card.dataset.verdict === verdict.value) &&
          words.every(word => searchable.get(card.id).includes(word));
        card.hidden = !matches;
        if (matches) visible++;
      }
      $('#result-count').textContent = `${visible} of ${cards.length} assessments`;
      $('#empty-state').hidden = visible !== 0;
      $('#clear-filters').hidden = !words.length && verdict.value === 'all' && topic === 'All topics';
    }
    function reset() {
      search.value = '';
      verdict.value = 'all';
      topic = 'All topics';
      document.querySelectorAll('.topic-button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.topic === topic)));
      filter();
    }
    document.querySelectorAll('.topic-button').forEach(button => button.addEventListener('click', () => {
      topic = button.dataset.topic;
      document.querySelectorAll('.topic-button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      filter();
    }));
    search.addEventListener('input', filter);
    verdict.addEventListener('change', filter);
    $('#clear-filters').addEventListener('click', reset);
    $('#empty-reset').addEventListener('click', () => { reset(); search.focus(); });
    function openHash() {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
      const card = cards.find(c => c.id === id);
      if (card) {
        if (card.hidden) reset();
        card.querySelector('details').open = true;
        requestAnimationFrame(() => card.scrollIntoView({block:'start', behavior:'instant'}));
      }
    }
    window.addEventListener('hashchange', openHash);
    filter();
    openHash();
  }

  // No external analytics request is made before explicit consent.
  let analyticsLoaded = false;
  function loadAnalytics() {
    if (analyticsLoaded || !/^G-[A-Z0-9]+$/.test(config.analyticsId || '')) return;
    analyticsLoaded = true;
    window['ga-disable-' + config.analyticsId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', config.analyticsId);
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(config.analyticsId);
    document.head.append(script);
  }
  function syncAnalytics() {
    const enabled = read('overwatch-analytics') === 'yes';
    if ($('#analytics-status')) $('#analytics-status').textContent = enabled ? 'Optional analytics: enabled on this browser.' : 'Optional analytics: off.';
    if ($('#analytics-enable')) $('#analytics-enable').disabled = enabled;
    if ($('#analytics-disable')) $('#analytics-disable').disabled = !enabled;
  }
  if (config.analyticsId) {
    document.querySelectorAll('[data-analytics]').forEach(el => el.hidden = false);
    if (read('overwatch-analytics') === 'yes') loadAnalytics();
    $('#analytics-enable')?.addEventListener('click', () => { write('overwatch-analytics','yes'); loadAnalytics(); syncAnalytics(); });
    $('#analytics-disable')?.addEventListener('click', () => {
      write('overwatch-analytics','no');
      window['ga-disable-' + config.analyticsId] = true;
      syncAnalytics();
      $('#analytics-status').textContent = 'Optional analytics: off. Earlier data and cookies are not removed by this setting.';
    });
    syncAnalytics();
  }

  const form = $('#feedback-form');
  if (form && config.feedbackEndpoint) {
    form.hidden = false;
    $('#feedback-unavailable').hidden = true;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('button[type=submit]');
      if (button.disabled) return;
      const status = $('#feedback-status');
      button.disabled = true;
      button.textContent = 'Sending…';
      status.textContent = '';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        // text/plain avoids an unnecessary preflight while preserving the old JSON payload.
        const response = await fetch(config.feedbackEndpoint, {
          method:'POST', headers:{'Content-Type':'text/plain;charset=UTF-8'},
          body:JSON.stringify({type:$('#feedback-type').value, message:$('#feedback-message').value.trim()}),
          signal:controller.signal, credentials:'omit', redirect:'follow'
        });
        if (!response.ok) throw new Error('HTTP failure');
        const body = (await response.text()).trim();
        let acknowledged = /^(success|ok)$/i.test(body);
        try { const value=JSON.parse(body); acknowledged = acknowledged || value.success === true || value.status === 'success' || value.result === 'success'; } catch (_) {}
        if (acknowledged) {
          status.textContent = 'Your feedback was received. Thank you.';
          form.reset();
        } else {
          status.textContent = 'The service responded, but did not confirm receipt. Your text is preserved; it may already have been received.';
        }
      } catch (_) {
        status.textContent = 'Receipt could not be confirmed. Your text is preserved. The service may have received it; check before sending again.';
      } finally {
        clearTimeout(timeout);
        button.disabled = false;
        button.textContent = 'Send feedback';
      }
    });
  }
})();
