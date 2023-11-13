---
title: "F-PKI: The Flexible Public Key Infrastructure"
description: "Strengthening the web PKI through flexible trust"
date: 2023-06-30T15:17:34+02:00
---

Our new Flexible Public-Key Infrastructure (F-PKI) allows users to define which certificate authorities (CAs) they consider highly trusted based on their individual trust preference.
F-PKI mitigates the problem that all CAs are omnipotent in today’s Internet PKI, by preventing attacks by less trusted CAs on the certificates created by highly trusted CAs.
This notion of trustworthiness also depends on the actual domain that is being validated, allowing users to also define the scope in which a CA is highly trusted (e.g., highly trusting a Swiss CA for issuing certificates to .ch domains).

Additionally, F-PKI provides a critically missing interface in today's CT logs in an efficient way: using sparse Merkle-Hash trees (a highly compressible data structure used to implement a verifiable key-value store), F-PKI can provide efficient absence proofs, which allows for an interface that fetches all valid (i.e., unexpired) certificates for a given domain name while ensuring that all certificates for this domain have been served.
This property allows all web PKI users and domain owners (even small domain owners) to verifiably monitor their address space.

However, what happens if a highly trusted CA starts to misbehave, for example because it was compromised and an adversary managed to request a fake certificate? In the earlier version of F-PKI, although such an attack was detected through a public append-only log, the attack could not be prevented. By introducing a cool-off period (typically a few days long) during which a newly issued certificate is publicly visible, but not yet valid, domain owners can detect such bogus certificates and react accordingly to prevent attacks even from highly trusted CAs.
We published our design at the top-tier security conference NDSS 2022 (see our [Publications](/homepage/publications/2022)).

## Project Members

- Adrian Perrig (ETH Zürich)
- Cyrill Krähenbühl (ETH Zürich)
- Christelle Gloor (ETH Zürich)
- Juan A. García-Pardo (ETH Zürich)
- Matthew Smith (University of Bonn)
- Maximilian Häring (University of Bonn)
