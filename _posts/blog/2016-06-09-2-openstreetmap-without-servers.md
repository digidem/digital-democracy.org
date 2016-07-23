---
categories: blog
author: Gregor MacLennan
excerpt: "We’ve built mapping tools based on OpenStreetMap that work offline and without any server, which indigenous communities in the Amazon are using to create territory maps to defend their ancestral rainforest home from oil drilling, mining and logging."
image: "/assets/mapeo-ceibo-secoya-trip-1.jpg"
tags:
  - front-page
published: true
permalink: "/blog/openstreetmap-without-servers/"
title: "OpenStreetMap Without Servers [Part 1]"
---
At Digital Democracy we are working with indigenous communities in the Amazon to create maps of their own neighbourhoods, their territory: farms, fishing sites and hunting trails essential to feeding the family; old village sites where grandparents lie buried; sacred spaces for reflection and healing. Armed with maps they themselves create, our partners are fighting to protect their ancestral rainforest home and hold oil, mining and logging companies accountable for contamination and deforestation of their territory.

[OpenStreetMap][1] (OSM) is a free, editable map of the world created by volunteers. Easy to learn tools make it simple for anybody to map their house, their street, their neighbourhood, and collaborate with thousands of other users around the world to create a global map that rivals Google Maps for accuracy and detail.

OpenStreetMap tools are a great fit for our partners: they allow anybody in the community to learn and collaborate to create a map, and OSM makes no assumptions about what is mapped or how. However, collaborating on OSM requires an internet connection, and the global OSM database is not the appropriate place for more sensitive community information.

That is why we have created [osm-p2p][2], an OpenStreetMap database that does not require a server or central source of truth. Every device -- laptop, phone or tablet -- can have its own database with a copy of the map. Users can synchronize edits with other users over the internet, a local network connection, or synchronize edits to a USB drive and send it on a canoe downriver to the next village.

<div class="full-width">
<img alt="Map editor with Waorani" src="/assets/mapeo-ceibo-waorani-screencast.gif">
</div>

We've built an [experimental map-editor][4] as an installable offline application, based on [iD Editor][3]. All it takes to start working on your own, custom OSM database is to download the app and start creating and editing data.

We built osm-p2p in response to the needs of the indigenous communities we work with:

* Editing and collaborating on map data should not require an internet connection.
* Every community should have a full copy of the data to inform the local political process and to increase redundancy[^1]
* Decisions about what data to share with whom are up to the local communities, not the software nor a remote hosting provider
* Collecting and editing map data should not require specialized expert skills

However, we hope that osm-p2p will be useful beyond our work with indigenous territory mapping. We are working on import of regions from the global public OSM database and export of osm-p2p edits back to [openstreetmap.org][1]. We hope this will have applications for the [Humanitarian OpenStreetMap Team][5] and other situations where teams need to collaborate on OSM edits in areas with little or no internet connectivity.

If you are a developer, read more details about [how to get started with osm-p2p][2] and if you can, hop-in and help us improve the tool and increase compatibility with the OSM ecosystem. If you are keen to start using osm-p2p for your own mapping projects, stay tuned for tutorials about how to start mapping with your own, private OpenStreetMap.

[Read more][2] about osm-p2p in this [blog post][2] by our lead programmer, [James Halliday][8].

> osm-p2p development was supported by [a grant][6] from the [Knight Prototype Fund][7]


[^1]: Redundancy is similar to having backups, but in a peer-to-peer system every peer has a complete replica of the data, so any one peer can loose their database and recover by connecting to another peer. Redundancy means that more than one person has a replica of the database.

[1]: https://www.openstreetmap.org
[2]: /blog/osm-p2p/
[3]: https://www.mapbox.com/blog/new-map-editor-launches-openstreetmap/
[4]: https://github.com/digidem/mapeo-desktop
[5]: https://hotosm.org
[6]: http://www.digital-democracy.org/blog/open-maps-for-everyone/
[7]: http://www.knightfoundation.org/funding-initiatives/knight-prototype-fund/
[8]: /team/substack/
