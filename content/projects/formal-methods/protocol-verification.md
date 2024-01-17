---
title: "Protocol Verification"
description: "Proving protocol implementations secure"
date: 2023-11-13T09:37:12+01:00
---

Security protocol implementations are obiquitious.
We use them daily to perform electronic payments, communicate with friends and coworkers, and they are even present in our electronic passports.

However, designing and implementing security protocols is notoriously difficult.
Since security protocols aim to secure communication against malicious attackers, usually active ones, all possible attacks have to be considered at design and implementation time.
Subtle bugs, like forgetting a simple comparison check, can render an implementation completely insecure.
Additionally, these issues might not manifest themselves with classical testing as specially crafted messsages might be needed to exploit, e.g., the missing comparison check.
Thus, we need formal verification to reason about the correctness of security protocol implementations that consider all possible attacks.

We have developed two different approaches to verifying the correctness of security protocol implementations, each having different advantages.
The main distinguishing factor is whether an approach requires an accurate abstract protocol model.


## Approach 1: Protocol Model Refinement

{{< paige/figure float="end" >}}
{{< paige/image src="/homepage/images/protocolVerification/tamarin-refinement.jpg" width="30rem" maxwidth="100%" >}}
{{< /paige/figure >}}

The first approach requires an accurate abstract protocol model and reasons about security properties on the level of this model using the [Tamarin](https://tamarin-prover.com) protocol verifier (1).
Once the protocol model is proven secure, Tamarin generates so called I/O specification for each protocol role (2).
This specification describes the *permitted* I/O operations a particular protocol role is allowed to execute.
Off-the-shelf program verifiers can then be used to prove that an implementation satisfies a I/O specification, i.e., refines a protocol role (3).
Successful verification implies that security properties proven about the protocol model also hold for the implementations without having to re-prove them on the code-level.

This approach achieves a clear separation of concern between the protocol model and implementations as code-level verification can focus on proving that I/O operations performed by the implementation are indeed permitted by the I/O specification, without having to directly consider security properties at the code-level.

More information can be found in the related publication:
> **Sound Verification of Security Protocols: From Design to Interoperable Implementations**. L. Arquint, F. A. Wolf, J. Lallemand, R. Sasse, C. Sprenger, S. N. Wiesner, D. Basin, and P. Müller. In 2023 IEEE Symposium on Security and Privacy (SP), [[PDF](https://pm.inf.ethz.ch/publications/ArquintWolfLallemandSasseSprengerWiesnerBasinMueller23.pdf)] [[Publisher](https://doi.org/10.1109/SP46215.2023.10179325)].


## Approach 2: Code-Level Security Proofs

Our second approach reasons about security properties directly on the code-level and in off-the-shelf program verifiers.
Thus, no abstract protocol model is required.
This is particularly beneficial if no protocol model exists yet, an existing protocol model has not been updated to reflect the evolved protocol, or it turns out that proving that a particular concurrency pattern in the implementation refines the abstract protocol model is difficult.

{{< paige/figure float="end" >}}
{{< paige/image src="/homepage/images/protocolVerification/trace-dynamic.jpg" width="20rem" maxwidth="100%" >}}
{{< /paige/figure >}}

As illustrated in the figure, the implementations of protocol roles, such as Alice and Bob, are instantiated at runtime.
There can be possibly unboundedly many such instances, e.g., Alice 1, Alice 2, Bob 1, ... that communicate with each other via a network.
We consider this network to be under full attacker controlled.
Additionally, our attacker model can create and inject messages into the network and corrupt protocol role instances to obtain long-term and session-specific key material.
We assume that our attacker cannot break cryptography, i.e., that a ciphertext does not leak any information unless the correct decryption key is known.

One of our key observations is that we can model this distributed system of protocol role instances and the attacker as a program with concurrent threads.
Each thread corresponds to a protocol role instance or the attacker.
The thread representing the attacker is a non-terminating loop that, in each iteration, non-deterministically picks and executes one of the operations available to the attacker.

To express and prove security properties, we make the so-called global trace explicit in implementations, which allows us to reuse existing formalizations of security properties from the literature.
The global trace records all protocol-relevant operations performed by protocol role instances and the attacker, such as which messages are sent to the network.
Whenever a protocol role instance or the attacker performs a protocol-relevant operation, the implementation appends a new trace entry to the global trace recording this operation.

We model the global trace as a *ghost concurrent data structure*.
*Ghost* means that this data structure is only used for verification purposes and does not influence the runtime behavior.
Therefore, we can safely erase the global trace before compilation such that there is no runtime overhead.
Treating the global trace as a *concurrent* data structure ensures that we correctly consider all possible interleavings of protocol-relevant operations, since all threads concurrently interact with the same global trace.

To modularly reason about implementations and there effect on the global trace, we use a trace invariant.
This trace invariant must hold for the empty trace and must be maintained by each append operation performed by protocol role instances and the attacker.
We then use the trace invariant to prove that the invariant implies the desired security properties.

Our approach can not only reason about heap manipulating and concurrent protocol role implementations but is, to the best of our knowledge, the first modular and invariant-based verification technique for reasoning about injective agreement, a strong security property expressing that two protocol roles not only agree on their identities and certain values at the end of a protocol run but also that there are no replay attacks.

More information can be found in the related publication:
> **A Generic Methodology for the Modular Verification of Security Protocol Implementations**. L. Arquint, M. Schwerhoff, V. Mehta, and P. Müller. In Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security (CCS), 2023, [[PDF](https://pm.inf.ethz.ch/publications/ArquintSchwerhoffMehtaMueller23.pdf)] [[Publisher](https://doi.org/10.1145/3576915.3623105)].

## Project Members

- Linard Arquint (ETH Zurich)
- David Basin (ETH Zurich)
- Peter Müller (ETH Zurich)
- Malte Schwerhoff (ETH Zurich)
- Felix Wolf (ETH Zurich)
