---
title: "Trusted Introductions for the Signal messenger"
description: "A more convenient way to keep devils off the line"
date: 2023-11-13T10:00:00+02:00
categories:
  - project
---

We entrust our digital devices with many of our intimate secrets. We likewise assume that these stay confidential as we send them to our friends through private messaging apps. Russian users now learned that this assumption is fragile. 

In a [suspected government wiretap](https://therecord.media/jabber-ru-alleged-government-wiretap-expired-tls-certificate) , an actor inserted itself between them and the servers. The trust users had in the messaging application was betrayed and sensitive conversations exposed.

<p>{{% paige/image class="object-fit-cover rounded-4" fetchpriority="high" loading="eager" src="/images/trustedIntros/DevilOnTheLine.png" width="100%" %}}</p>

While such stories seem rare, consider that only the ones caught are reported. How sure are you that there’s no devil on your line?

Given the scope and impact of these invasions of privacy, we are studying the Signal protocol. The initial version designed a decade ago, the Signal protocol has become the de facto standard for end-to-end encrypted messaging. Employed by big players such as Whatsapp, Facebook Messenger<sup>1</sup> or Threema<sup>1</sup>, the protocol is responsible for delivering confidential messages to billions of users. 

With one caveat: the protocol does not give any guarantees w.r.t the identity of the users that are communicating with each other. If left unchecked, the devil may still be listening in.
These checks are left as a responsibility of the users, which can typically verify each other in person by performing a ceremony, e.g., scanning QR codes on each other’s devices.


{{< paige/figure
    caption=""
    float=""
    height=""
    horizontal="center"
    maxwidth=""
    number=0
    numbered=false
    vertical=""
    width="" >}}
<p>{{% paige/image class="object-fit-cover rounded-4" fetchpriority="high" loading="eager" src="/images/trustedIntros/QR_edited_cropped.png" width="50%" float="right" %}}</p>
{{< /paige/figure >}}


Anecdotally, not many people are aware and care to take the verification precautions. After all, not many devils get caught. Additionally, these ceremonies are tedious, and the messaging applications tend not to emphasize the consequences of their omission.

With this project, we aim to improve the usability of this process and maximize the utility of each verification for the messaging system as a whole. To this end, we study and modify the open-source Signal messaging application. 

We define the concept of a *trusted introduction*, where a user, after first verifying the recipient, forwards the verification(s) he has done in the past. This way, spreading additional trust after a verification is as easy as forwarding a contact is today. 

{{< paige/figure
    caption=""
    float=""
    height=""
    horizontal="center"
    maxwidth=""
    number=0
    numbered=false
    vertical=""
    width="" >}}
<p>{{% paige/image class="object-fit-cover rounded-4" fetchpriority="high" loading="eager" src="/images/trustedIntros/Android-Initiate-Introduction.png" width="75%" float="right" %}}</p>   <p>{{% paige/image class="object-fit-cover rounded-4" fetchpriority="high" loading="eager" src="/images/trustedIntros/Android-introduce-contacts.png" width="75%" float="right" %}}</p>  
{{< /paige/figure >}}

We are thus moving towards a more intuitive understanding of these mechanisms that mirror the behavior of people in everyday life.

A prototype application for the Signal Android and desktop client were developed and we are currently in the process of preparing the infrastructure for a user study with to evaluate the new mechanism.


## Read More

You can read the [position paper](https://netsec.ethz.ch/publications/papers/2023_spw_trusted_introductions.pdf) which was published at the Cambridge International Workshop on Security Protocols 2023, or visit the landing page for our upcoming [user study](https://trusted-introductions.github.io/) for more information.


## Project Members

- Adrian Perrig (ETH Zürich)
- Christelle Gloor (ETH Zürich)
- Andrea Byku (ETH Zürich) 
- Adrian Cucoș (ETH Zürich) 


<sup>1: Both Facebook Messenger and Threema offer end-to-end encryption, but it is an opt-in feature, not enabled by default.</sup>