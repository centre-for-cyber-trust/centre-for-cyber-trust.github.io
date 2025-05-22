---
title: "Formal Analysis of Apple's iMessage PQ3 Protocol"
description: "iMessage PQ3 is Apple's new, quantum-secure end-to-end encryption protocol, and we formally verified its security."
date: 2025-05-22T09:42:50+02:00
categories:
  - project
---

In 2024, Apple presented their new [iMessage PQ3 end-to-end encryption protocol](https://security.apple.com/blog/imessage-pq3/) (PQ3 for short).
PQ3 is a highly performant, device-to-device messaging protocol offering strong security guarantees against an adversary with quantum computing capabilities.

We formally modeled PQ3 and formally verified its fine-grained security properties using the Tamarin prover.
Particularly novel is our analysis of integrating post-quantum secure KEMs into the relevant protocol phases and of the detailed security claims.
Our analysis covers PQ3 in its full complexity, including PQ3's unbounded loops, which was believed by some to be out of scope of symbolic provers like Tamarin.
We show that it is not!

Our work was published at [USENIX Security 2025](https://www.usenix.org/conference/usenixsecurity25/presentation/linker).
Follow the link for our full paper.
