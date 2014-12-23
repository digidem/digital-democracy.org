---
categories: blog
layout: video
published: true
title: We Built A Drone
author: Gregor MacLennan
tags:
  - featured
  - "front-page"
  - Remote Access
  - Amazon
image: /assets/guyana-ron-drone.jpg
video: https://player.vimeo.com/video/114816953
---
Can drones be a tool for positive change in the hands of indigenous communities? Can communities use them to create maps and monitor illegal logging and deforestation? To answer these questions I travelled to Guyana in October and together with the local Wapichana monitoring team we built a drone and made a map. <a class="play-link">Watch the video</a> to find out how we did.

Drones, or "Unmanned Aerial Vehicles" (UAVs) have a bad reputation, and [rightly so](http://drones.pitchinteractive.com/). But they are no longer just tools of the military; the cilivian drone market is rapidly growing, with applications from film-making to precision agriculture to mining. Anybody can now buy a quadrocopter online that you can fly with your cellphone for under $500.

This technology has huge potential for humanitarian and conservation goals: drones can rapidly create high resolution up-to-date imagery at a fraction of the cost of satellite imagery. In Guyana we are [working with the Wapichana people](/ourwork/guyana) to help them monitor a vast territory of 7 million acres of savannah and rainforest. We saw the potential for drones to monitor and map deforestation, from mapping the changing size of bush islands on the savannah to catching illegal logging deep in the forest.

We didn't want to just fly into Guyana and fly a drone over the local villages. Our interest was whether this technology could be something that can be used and controlled by the communities themselves, and become a tool of empowerment for helping them have more of a say in their own future. We wanted the Wapichana to be able to repair it themselves, fly it themselves, and process the images to use for their own means.

## Building a drone together

![Tessa soldering a drone](/assets/guyana-tessa-soldering.jpg)

I arrived in Guyana with a bag of foam, wires, glue and tools. The Wapichana monitoring team arrived, five men and one woman from villages throughout Wapichana territory. We worked under the leaf roof of the "benab" -- the community house -- and together learnt how to build a drone, from ironing laminate to strengthen the wings to soldering a live video transmission system.

I was amazed at how quick the team learned, and their initiative at solving engineering problems with the limited tools we had available. When the motor mount broke, the team scoured the village for different types of plastic, and fashioned a new mount from an old beer crate. The drone was no longer a foreign, mysterious piece of technology, but something that they understood and was owned and built by them.

## Flight testing

![Flight simulator training](/assets/guyana-flight-simulator.jpg)

We chose a fixed-wing drone for Guyana. A quadrocopter is much easier to fly, but it has limited range and is much harder to fix when it breaks. But flying a plane is hard, and landing is harder. We connected the remote control to a flight simulator and the team stayed up late into the night practicing flying and learning the controls.

We built two drones. The first was not strictly a drone since it had no autopilot, and was really just a remote control plane. This was our practice plane, for learning how to put it together and learning to fly. And just as well: as you can see from the <a class="play-link">video above</a> our first flights did not go well.

Our second drone was much more complex and fragile, filled with cameras and an autopilot. The practice paid off and it took off smoothly on its first launch. The autopilot made it much easier to fly, and from the live video feed we could watch the "drone-eye-view" as we flew. We also had a wireless data-link with the pilot, with a tablet and laptop showing a live flight path, airspeed, altitude, and remaining battery.

## Making a map

To make a map with a drone you need to fly a fixed flight path back and forth in strips across the area you want to map, taking multiple overlapping photographs. We used open-source mission control software called [Mission Planner](http://planner.ardupilot.com/) to create flightplans and monitor the flight in progress. We also tested similar [software for a tablet](https://github.com/DroidPlanner/droidplanner). We mounted a [GoPro](http://gopro.com/) (generously donated by GoPro) into the drone and set the shutter to take a photo every two seconds.

The entire process was automated: we pulled back the drone on our home-made bungee launcher, and flicked on the autopilot. The motor spun up, we crossed our fingers, and let go. We watched nervously as it gained altitude, our eyes on the live video and flight path as it flew back and forth over the village. Incredibly, it worked! After 20 minutes it finished its flightpath and came back and flew in circles overhead, waiting for us to bring it in to land manually.

The GoPro shot about 500 images, which we processed using [Pix4Dmapper](http://pix4d.com/products/). This incredible software builds a 3D model just from the images, using image analysis to detect features and calculate camera angles. The full version costs $8,700 but the free version is fully functional but only exports video. Processing took about 6 hours on a fast laptop, but was a point-and-click process that will be easy for the local mapping team to complete. The resulting 3D model of Sholinab village is spectacular:

<div class="embed-container"><iframe src="//player.vimeo.com/video/109484074" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

## Lessons learned





