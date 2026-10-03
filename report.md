# Overwatch: Government surveillance, explained through evidence

Edition 2.0 | Reviewed 3 October 2026

A selected public-record review. Historical descriptions are not current legal advice or individual risk estimates.

## 01. The FBI has used malware to identify people using Tor.
**Supported** | Court record | 2015 operation; 2019 opinion

A court opinion documents an FBI technique that made computers send identifying information.

**Established:** In the Playpen investigation, the NIT collected information including IP addresses from computers that accessed the site. [ganzer]

**Not established:** This does not establish a universal Tor bypass or that every investigative tool is a keylogger.

**Conditions:** The finding concerns a specific investigation and deployed code, not all Tor users.

## 02. Antivirus companies are required to ignore government malware.
**Not established** | Evidence gap | Broad claim in the previous edition

The sources reviewed here do not establish a general requirement to whitelist government malware.

**Established:** The Ganzer opinion establishes FBI malware use, but it does not establish antivirus-company cooperation. [ganzer]

**Not established:** Evasion, voluntary cooperation and a legal obligation are separate claims. Evidence for one cannot stand in for the others.

**Conditions:** A defensible assessment needs a named vendor, tool, date and policy or legal document. This verdict is limited to the reviewed evidence.

## 03. Intel ME and AMD PSP are proven NSA backdoors.
**Not established** | Vendor documentation | Intel article 2023; AMD documentation reviewed 2026

The components exist. Their existence does not establish that the NSA ordered a backdoor.

**Established:** Intel describes an embedded controller with independent power states. AMD describes a security processor used for secure boot and a hardware root of trust. [intel] [amd]

**Not established:** Neither cited document establishes an NSA mandate. The two components should not be treated as identical.

**Conditions:** Intel describes operation while power is available; this is not operation without electricity. Features depend on the platform.

## 04. Dual_EC_DRBG was removed after backdoor concerns.
**Supported** | Official publication | 2013-2015

NIST withdrew this random-number algorithm from its final revised recommendation in 2015.

**Established:** NIST announced a draft removing Dual_EC_DRBG in 2014; the final SP 800-90A revision followed in June 2015. [nist14] [nist15]

**Not established:** The removal establishes a standards decision. It does not by itself prove every claim about NSA exploitation or payments to vendors.

**Conditions:** The conclusion concerns this algorithm, not all encryption or every random-number generator.

## 05. An implanted device can move data without an internet connection.
**Supported** | Leaked document | 2008-era catalog; published 2014

The COTTONMOUTH-I entry describes a USB implant with a radio link.

**Established:** The leaked entry describes wireless communication between implanted hardware and other equipment, including a bridge across an air gap. [cottonmouth]

**Not established:** This does not mean an ordinary disconnected computer can automatically transmit its files, or that every USB cable is implanted.

**Conditions:** The described design requires modified hardware and a working radio path. The catalog does not establish how widely it was deployed.

## 06. NSA implant documents describe modifying equipment through interdiction.
**Supported** | Leaked document | 2008-era catalog; published 2014

The IRONCHEF entry explicitly describes installing hardware and software through interdiction.

**Established:** The catalog describes a server implant designed to maintain access through firmware and associated hardware. [ironchef]

**Not established:** A catalog is evidence of a described capability, not a count of intercepted shipments or proof that every delivered device is altered.

**Conditions:** The entry names a particular server platform and requires an opportunity to install implants. It cannot be generalized to all hardware.

## 07. The cited surveillance documents prove ordinary microwaves are used to spy.
**Not established** | Evidence gap | Claim assessed against this source set

The reviewed implant documents do not establish this claim about microwave ovens.

**Established:** The cited catalog entries concern computer equipment. A separate leaked guide describes an implant for particular smart TVs. [cottonmouth] [extending]

**Not established:** An unsupported claim is not proof that every possible appliance attack is impossible. A TV implant does not establish a microwave-oven program.

**Conditions:** A specific appliance claim needs a model, mechanism and attributable evidence of the alleged capability or operation.

## 08. NSA-linked attacks targeted Tor users through browser vulnerabilities.
**Supported** | Leaked document + first-party response | 2011 document; 2013 response

The cited record concerns attacks on users and their software, not proof of a universal break of Tor.

**Established:** The Tor Project described browser exploitation in its 2013 response. The archived FOXACID document describes exploitation infrastructure. [tor] [foxacid]

**Not established:** These historical sources do not establish that current Tor versions are vulnerable to the same attacks, or that anonymity is guaranteed.

**Conditions:** Successful exploitation depends on the target software and an opportunity to deliver the attack.

## 09. Governments may retain knowledge of vulnerabilities instead of immediately disclosing them.
**Supported** | Official publication | 2014 policy explanation

A White House explanation acknowledges weighing disclosure against temporary retention.

**Established:** The 2014 account describes a decision process that considers both security risks and intelligence value. [vep]

**Not established:** It does not establish that vendors routinely supply the NSA with every flaw before a patch. PRISM is a different subject.

**Conditions:** This is a historical policy statement; it does not reveal individual retention decisions or establish present policy.

## 10. Vault 7 proves the CIA could carry out untraceable car assassinations.
**Not established** | Leaked planning document | October 2014 notes; released 2017

The underlying notes list vehicle systems as a potential mission area, not a demonstrated assassination capability.

**Established:** The meeting notes include vehicle systems among possible firmware targets. [vehicles]

**Not established:** The notes do not demonstrate a working vehicle-control tool, a deployment, an assassination or untraceability.

**Conditions:** Research interest, development, successful testing and operational use require different evidence. Only the planning reference is established here.

## 11. A compromised smart TV could record while appearing switched off.
**Supported** | Leaked document | 2014 guide; released 2017

A leaked guide describes recording on specific Samsung F-series TVs, including a fake-off mode.

**Established:** The EXTENDING guide describes microphone recording and USB or nearby Wi-Fi retrieval. WikiLeaks links the tool to Weeping Angel. [extending] [vault]

**Not established:** This does not establish that all televisions are affected or that a particular household was monitored.

**Conditions:** The documented version requires close-access USB installation on a compatible TV. Fake-off still requires electrical power.

## 12. The NSA has collected communications through internet-backbone providers.
**Supported** | Official oversight report | 2014 oversight account

PCLOB describes upstream collection with assistance from backbone providers.

**Established:** The report distinguishes collection in transit from communications supplied by a service provider. [pclob]

**Not established:** This source does not establish universal capture of every message or the current legal rules.

**Conditions:** This entry describes a historical collection method. A broad collection system and an implant targeting one device are different forms of surveillance.

## 13. PRISM was a program for obtaining communications from service providers.
**Supported** | Official oversight report | 2014 oversight account

PCLOB describes providers supplying communications associated with tasked selectors such as email addresses.

**Established:** This is a communications-collection process, distinct from acquiring software vulnerabilities. [pclob]

**Not established:** The account does not establish unrestricted access to every company database or every user account.

**Conditions:** This is a historical description, not a statement of current surveillance law.

## Sources

[ganzer] U.S. Court of Appeals, Fifth Circuit (via Justia). United States v. Ganzer. 2019-04-24. https://law.justia.com/cases/federal/appellate-courts/ca5/17-51042/17-51042-2019-04-24.html
Opinion, factual background: the Playpen NIT and information collected.

[intel] Intel. What is Intel Management Engine?. 2023-09-26. https://www.intel.com/content/www/us/en/support/articles/000008927/software/chipset-software.html
Article 000008927; independent power states and embedded microcontroller.

[amd] AMD. AMD PRO Technologies. Undated; reviewed 2026-10-03. https://www.amd.com/en/products/processors/technologies/pro-technologies.html
Footnote GD-72: AMD Secure Processor and hardware root of trust.

[nist14] NIST. NIST removes cryptography algorithm from random number generator recommendations. 2014-04-21. https://www.nist.gov/news-events/news/2014/04/nist-removes-cryptography-algorithm-random-number-generator-recommendations
Announcement of the draft revision removing Dual_EC_DRBG.

[nist15] NIST. NIST revises key computer security publication on random number generation. 2015-06-25. https://www.nist.gov/news-events/news/2015/06/nist-revises-key-computer-security-publication-random-number-generation
Final SP 800-90A Revision 1 removes Dual_EC_DRBG.

[cottonmouth] NSA catalog, reproduced by Schneier on Security. COTTONMOUTH-I catalog entry. 2008-era entry; published 2014-03-05. https://www.schneier.com/?p=5246
Reproduced catalog text and linked page image, excluding reader comments.

[ironchef] NSA catalog, reproduced by Schneier on Security. IRONCHEF catalog entry. 2008-era entry; published 2014-01-03. https://www.schneier.com/blog/archives/2014/01/nsa_exploit_of_1.html/
Reproduced catalog text: installation through interdiction; excludes reader comments.

[tor] The Tor Project / Roger Dingledine. Yes, we know about the Guardian article. 2013-10-04. https://blog.torproject.org/yes-we-know-about-guardian-article/
Opening statement about browser exploitation; excludes the archived comments.

[foxacid] NSA document, hosted by National Security Archive. FOXACID standard operating procedure. 2011-01-01. https://nsarchive.gwu.edu/document/22038-document-03
Archived document and linked OCR describe exploitation infrastructure.

[vep] White House / Michael Daniel. Heartbleed: understanding when we disclose cyber vulnerabilities. 2014-04-28. https://obamawhitehouse.archives.gov/blog/2014/04/28/heartbleed-understanding-when-we-disclose-cyber-vulnerabilities
Historical explanation of the disclosure-versus-retention decision process.

[vehicles] CIA-attributed document published by WikiLeaks. Branch Direction Meeting notes. 2014-10-23; released 2017. https://wikileaks.org/ciav7p1/cms/page_13763790.html
Reference section: Potential Mission Areas for EDB, then Firmware Targets.

[extending] MI5-attributed guide published in Vault 7. EXTENDING User Guide. 2014-04-29; released 2017-04-21. https://wikileaks.org/vault7/document/EXTENDING_User_Guide/EXTENDING_User_Guide.pdf
Printed pp. 2-4: supported TVs, close access, recording and retrieval; pp. 26-27: limits.

[vault] WikiLeaks. Vault 7: Weeping Angel release. 2017-04-21. https://wikileaks.org/vault7/#Weeping%20Angel
Weeping Angel release identifies its relationship to EXTENDING and the CIA/MI5.

[pclob] Privacy and Civil Liberties Oversight Board. Report on the surveillance program operated pursuant to Section 702 of FISA. 2014-07-02. https://documents.pclob.gov/prod/Documents/OversightReport/ba65702c-3541-4125-a67d-92a7f974fc4c/702-Report-2%20-%20Complete%20-%20Nov%2014%202022%201548.pdf
Printed pp. 7 and 33-35 (PDF pp. 12 and 38-40): PRISM and upstream. Historical account, not current law.
