---
date: 2019-08-09
categories: blog
published: true
title: "Mapeo Update on Samsung NEXT Stack Zero Grant"
author: noffle
tags:
  - front-page
image: /assets/vector-tiles-offline.jpg
excerpt: "In January 2019, Digital Democracy received a grant from SamsungNEXT to help build components for local-first peer-to-peer mapping technology. This is a brief summary of what we've been focused on using this grant."
---

In January 2019, Digital Democracy [received a grant from Samsung NEXT](https://samsungnext.com/whats-next/category/podcasts/decentralization-samsung-next-stack-zero-grant-recipients/). With this grant, we aimed to further develop important features and bug fixes on Mapeo, a peer-to-peer collaborative mapping program. This is a brief summary of what we've been focused on using this grant.

# Development of core components

Most notably, the grant helped fund the remaining work on building our new backend peer-to-peer technology stack:

- [Mapeo Core](https://github.com/digidem/mapeo-core)
- [Kappa OSM](https://github.com/digidem/kappa-osm)
- [Kappa DB](https://github.com/kappa-db)

Compared to our previous iteration, [osm-p2p-db](https://github.com/digidem/osm-p2p-db), this new backend provides major new features & improvements, including a more than 2x read/write performance speed-up, new cryptographic primitives for security, and a flexible "materialized view" mechanism that makes it easy to extend the core map data with new data types and indexes.

KappaDB has quickly gained the awareness of the peer-to-peer community, and is being used in several major decentralized projects:

- [Peermaps](https://peermaps.org): a distributed, offline-friendly alternative to commercial map providers
- [Wireline](https://www.wireline.io): a decentralized network for peer-to-peer and serverless cloud computing
- [Cabal](https://cabal.chat): an experimental p2p community
chat platform
- [CoBox](https://cobox.cloud): building blocks for a
co-operative cloud
- ..and of course [Mapeo Desktop](https://github.com/digidem/mapeo-desktop) & [Mapeo Mobile](https://github.com/digidem/mapeo-mobile)

# Initial vector tiles support

![Screenshot of a vector tile view of map data gathered via Mapeo Mobile](/assets/vector-tiles-offline.jpg)

Mapeo Desktop's editor interface is based off the popular OpenStreetMap editor, [iD](https://github.com/openstreetmap/iD). This helped us get a working peer-to-peer map editor in place very quickly. However, its default renderer uses SVG for editing content, which we found struggled to efficiently render highly dense map data like the kind our partners collect. iD supports rendering vector tile background layers, so we'd like to be able to render collected data as a vector tile layer, which are significantly more efficient to render with even commodity graphics hardware.

To start off this process, an [initial experiment](https://github.com/digidem/mapeo-print-preview) was written, which enabled us to create a fully offline interactive WebGL map of the data collected in Mapeo. We used [geojson-vt](https://github.com/mapbox/geojson-vt) to export map data from Mapeo into GeoJSON, which is then converted to vector tiles that [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) can render.

This is a very important first step, because it demonstrates that Mapeo data can readily be converted into an efficient vector tile format. Beyond making general map editing render much more quickly, having vector tile support will also enable a _Print Preview_-like feature, which would let partners preview a region to print before committing the ink & paper to producing it.


# Documentation & Resources

We built -- with the help of [@mafintosh](https://github.com/mafintosh) -- an extensive [introductory workshop](https://github.com/kappa-db/workshop) to Kappa DB and the underlying Dat stack. It was used at [NodeConf EU](https://nodeconf.eu) in November 2018 and has since been used by many other developers interested in peer-to-peer development.

Mapeo now also has a (beta) [documentation site](https://hopeful-dijkstra-45ba69.netlify.com/), helping new users learn how to install, configure, and use the software.

In May 2019, Karissa and noffle spoke at [DTN](https://dtn.is), a conference of developers working with decentralized technology -- about Digital Democracy and the underlying p2p technology that powers it.

# Security Features

Moving from our old backend technology, [osm-p2p-db](https://github.com/digidem/osm-p2p-db) has brought security features that come from the [Dat](https://dat.foundation) stack. In particular, [hypercore](https://github.com/mafintosh/hypercore), provides

1. Cryptographic user identities, using ED25519 elliptic curve key-pairs
2. All data is digitally signed by the user that created it (this provides stable & verifiable identity, but need not identify an actual person)
3. End-to-end (E2E) encryption between peers syncing map data (not yet audited)

We're very excited about all of these developments, and look forward to continuing to be able to build quality tools for peer-to-peer & local-first applications for our partners!
