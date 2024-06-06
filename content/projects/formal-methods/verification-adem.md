---
title: "Verification^2 of ADEM"
description: "Verifying the verification code for ADEM"
date: 2024-06-06T11:42:11+02:00
categories:
  - project
draft: true
---

[ADEM](/projects/internet-arch/adem) is a proposal for a digital emblem and was developed at the Centre for Cyber Trust.
A digital emblem is the digital equivalent to the protective, physical emblems of the red cross, red crescent, and red crystal.
Follow the link of ADEM to learn more.

Digital emblems are cryptographically signed objects and as such must be verified.
We implemented [prototypes](https://github.com/adem-wg) doing just that.
The Programming Methodology and Information Security groups, both members of the Centre, collaboratively supervised a student thesis in which we formally verified the prototype's verification code.
This establishes that no matter what input an adversary provides to our code, the verification will always return correct results.

This project combines two aspects of our Centre's research: (i) [proving protocol implementations](/projects/formal-methods/protocol-verification) secure using [Gobra](/projects/formal-methods/gobra), and (ii) [ADEM](/projects/internet-arch/adem), our proposal for a digital emblem.

## Project Members
- Felix Linker
- Lasse Meinen
- Linard Arquint
