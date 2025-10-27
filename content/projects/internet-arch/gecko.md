---
title: "GECKO: Geo-Enabled Cryptographic Key Oracle"
description: "Securing Digital Assets Through the Physical World"
date: 2023-09-13T13:00:00+02:00
categories:
  - project
---

Although our lives are increasingly transitioning into the digital world,
many digital assets still relate to objects or places in the physical world,
examples being websites of shops or restaurants, digital documents claiming property ownership,
or digital identifiers encoded in QR codes for mobile payments in shops.

**We developed GECKO**, an efficient implementation of a Geographical PKI,
which allows users to leverage trust built in the physical world to enhance the trust-
worthiness of digital objects associated with the physical world.

Through the bidirectional translation of trust between the
physical and digital world, users can verify which assets are supposed to exist at their current location,
as well as verify which physical space is claimed by a digital entity.
GECKO protects against payment fraud by fake ATMs, car parking metres,
or mobile payment systems, e.g., TWINT and Google/Samsung/Apple Pay.
It can detect fake stores, such as stores selling fake brand products,
and fake services, such as WiFi hotspots in malls and airports that steal confidential user information,
e.g., credit card information.

Our implementation of the GECKO server was tested holding millions of assets,
and serving cryptographic material based on precise location queries within 11 ms
at a rate of over 19,000 queries per second on a single server.


## Project Members

- Adrian Perrig (ETH Zürich)
- Nico Hauser (ETH Zürich)
- Cyrill Krähenbühl (ETH Zürich)
- Juan A. García-Pardo (ETH Zürich)
- Christelle Gloor (ETH Zürich)
