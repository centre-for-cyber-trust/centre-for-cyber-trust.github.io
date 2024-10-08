---
title: "ADEM: An Authentic Digital Emblem"
description: "How can we transfer the physical red cross into the digital world?"
date: 2023-06-30T15:16:22+02:00
categories:
  - project
# we list URLs from the old webpage as aliases such that Hugo creates permanent redirects to this page:
aliases:
    - /2021/12/signaling-legal-protection-during-cyber-warfare-an-authenticated-digital-emblem
    - /2022/11/icrc-publishes-report-on-a-digital-emblem
---

<p>{{% paige/image class="object-fit-cover rounded-4" fetchpriority="high" height="24rem" loading="eager" src="/images/digital_emblem.jpg" width="100%" %}}</p>

In times of armed conflict, the emblems of the red cross, red crescent, and red crystal are used to mark physical infrastructure. This enables military units to identify assets as protected under international humanitarian law to avoid attacking them. In 2020, we challenged ourselves with the novel security problem of how to extend such protection to digital, network-connected infrastructure through a digital emblem. In 2021, we finalized a first version proposal for a digital emblem, that we call ADEM: An Authentic Digital Emblem. Since 2021, our design has been evaluated by domain experts, in a series of meetings at the invitation of the International Committee of the Red Cross, and our design was finalized and accepted for publication at the top-tier security conference ACM CCS 2023 (see our [Publications](/publications)).

ADEM provides a unique combination of security requirements, namely, authentication, accountability, and a property that we call covert inspection. Covert inspection states that those wishing to authenticate assets as protected must be able to do so without revealing that they may attack unprotected entities. Moreover, ADEM was designed to fit the context of international diplomacy as it allows nation states to make sovereign decisions through a decentralized design.

In 2023, we also initiated the knowledge transfer phase of this research project, by developing ADEM prototypes in collaboration with the ICRC. Currently, we are working on deploying ADEM in the ICRC’s network to showcase that ADEM is both practical and scales to large organizations. We are optimistic that the ICRC’s network can present the digital emblem to anyone interacting with it by the end of 2023.

We are also exploring how we can reduce ADEM's trust assumptions and make it secure even if a malicious actor compromises the operating system of a device. Our aim is to give authenticating entities a method to check that an emblem resides on a specific hardware device. This will make ADEM robust enough to directly deploy on less secure devices such as laptops and mobile phones.

## Read More

Visit our [project website](https://emblem.felixlinker.de/)!

- Read [our paper](https://dl.acm.org/doi/10.1145/3576915.3616578)!
- We wrote about ADEM on the [ICRC's Law & Policy blog](https://blogs.icrc.org/law-and-policy/2021/09/21/legal-protection-cyber-warfare-digital-emblem/).
- ADEM's publication is available [here](https://doi.org/10.1145/3576915.3616578) (link active around November 2023).
- ADEM's design is open-source. You find the specification [here](https://adem-wg.github.io/adem-spec/) and all code [here](https://github.com/adem-wg).
- A follow-up student project [formally verified ADEM's prototype codebase](/projects/formal-methods/verification-adem/)!

## Project Members

- David Basin (ETH Zürich)
- Felix Linker (ETH Zürich)
- Lisa Geierhaas (University of Bonn)
- Matthew Smith (University of Bonn)
- Mihael Liskij (ETH Zürich)
