---
title: "Cyclic Induction in Tamarin"
date: 2023-11-13T09:37:06+01:00
description: "How can Tamarin handle loops automatically?"
---

{{< paige/figure float="end" >}}
{{< paige/image class="object-fit-cover rounded-4" src="/homepage/images/maze.jpg" width="20rem" >}}
{{< /paige/figure >}}

Tamarin is a state-of-the art, automated protocol verifier that was used to prove real-world and complex protocols secure, for example, [TLS 1.3](https://tls13tamarin.github.io/TLS13Tamarin/docs/tls13tamarin-draft21.pdf) or [5G](https://people.cispa.io/cas.cremers/downloads/papers/CrDe2018-5G.pdf).
Nevertheless, Tamarin only supports a limited induction mechanism.
Induction is required to handle loops and unbounded data structures, which become more and more common in modern protocols such as in Signal and Certificate Transparency.

In the Centre for Cyber Trust, we currently explore a new induction mechanism for Tamarin that implements so-called *cyclic proofs*.
In cyclic proof systems, one can reuse a previous proof state as an axiom, provided the proof adheres to a global well-formedness condition.
We aim to enhance Tamarin such that we can prove **more properties** with **more automation**.

## Project Members

- David Basin (ETH Zurich)
- Cas Cremers (CISPA)
- Felix Linker (ETH Zurich)
- Christoph Sprenger (ETH Zurich)
