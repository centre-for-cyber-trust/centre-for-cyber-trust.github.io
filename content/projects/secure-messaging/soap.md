---
title: "SOAP: A Social Authentication Protocol"
description: "SOAP is an OpenID Connect-based authentication protocol, which we applied to messaging applications."
date: 2023-11-13T09:26:28+01:00
---

SOAP is an OpenID Connect-based Social Authentication Protocol, which we applied to messaging applications.
When performing social authentication, users verify that their chat partner controls accounts at different identity providers (IdPs) which they know are controlled by their intended chat partner.
Using social authentication, users can verify, for example, that their messaging application chat is not intercepted by a MITM.
By building on top of the popular OpenID Connect protocol, SOAP automates the authentication ceremony and does not require adoption from any OpenID Connect-IdP.
SOAP is currently under submission for academic publishing.
The paper contains four contributions.

* We formally define the notion of *Social Authentication* as a security property.
* We present the protocol design of SOAP.
* We formally verify SOAP's security using the Tamarin model checker.
* We implement SOAP in two prototypes: a [web-based prototype](https://soap-proto.net), and an extension of the Signal Android application.
A video demo of the Signal prototype is shown below.

You can find all sources related to this project [on its project webpage](https://soap-wg.github.io/sources/).

{{< youtube Ip_RAF8PRrM >}}

## Project Members

* David Basin (ETH Zürich)
* Felix Linker (ETH Zürich)
