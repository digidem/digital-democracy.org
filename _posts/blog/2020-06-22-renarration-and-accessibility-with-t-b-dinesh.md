---
categories: blog
title: "Renarration and Accessiblity: T B Dinesh on Localized Knowledge in Rural
  India"
published: true
date: 2020-06-22T21:21:39.565Z
excerpt: Dinesh is a community media activist and the recent focus of his work
  is on storytelling methods and encouraging people from marginalised
  communities to tell their own stories and document their ways of life.
author: Karissa McKelvey
image: /assets/dinesh3.png
tags:
  - front-page
  - featured
---
*T B Dinesh has Computer Science background and is a founder of Janastu in Bangalore, India. Janastu has been providing free and open source (FOSS) solutions and support to small not-for-profit and non-governmental organizations (NPOs/NGOs) since 2002. Dinesh is a community media activist and the recent focus of his work is on storytelling methods and encouraging people from marginalised communities to tell their own stories and document their ways of life.*

**Karissa** 

**Really nice to be able to catch up after we met last year in person. What are you working on these days?**

**Dinesh**

Our big slow-moving project is focused on local knowledge and local Wi-Fi mesh networks. There is a lot of work going on in this space, but we’re focusing on rural and remote areas in India. 60-70% of India is illiterate -- for all practical purposes, they cannot read or write -- that defines most of the population.

We’re focused on how to make local knowledge tools that do not expect any kind of literacy. We are building an audio internet where most of the publications are audio/video, stories and visuals. The term ‘hypermedia’ means linking one piece of knowledge to another, like HTML does. We are taking this concept and doing it with audio/visual. 

We give the village girls a community radio device. If she has a geometry equipment box, we put a Raspberry Pi inside, do group recordings, retransmit, this is what the whole work is about. If you have a phone you can use it to transmit, but it doesn't require a phone. The radios encourage group activity while phones are personal.

You just need to hit a button and talk, you don't need to print, put it on a palm leaf or paper or inscribe on a rock. Two generations later someone can listen to it. It does not ask who you are -- if you are a rural person or tribal or educated. It's an amazing new equality.

[Listen to stories here.](https://www.namdu1radio.com/)

![alt_text](/assets/dinesh1.jpg "image_tooltip")

*A media making kiosk-studio using a mic, monitor etc*

The caste system is based on enslaving a large number of people as sacred knowledge propagators. These propagators were forced to memorize the sacred knowledge, or “Word of God”, and regurgitate it in another space and time. They came up with many creative systems to preserve knowledge that relies upon millions of people, generations upon generations, just so something could be orally replicated with precision. 

When you look at the axis at any rural school, of 100 children studying, only 5-10 will be able to read and write, go to town, and get a basic job as an errand boy or cleaner. Most others will experience an invalidation of the self as a typical school curriculum can only validate one who is comfortably literate.

They want a way to validate themselves by just talking rather than feeling like they are lesser beings by not knowing how to read and write. I’m not saying they shouldn’t be taught, but to require it invalidates a person, and it’s time to change that. 

**Karissa** 

In typical software development practice based in Europe/US, literacy isn’t really thought of as a key component of accessibility. Cell phones are designed for people who are literate.

**Dinesh**

We looked at the web accessibility guidelines, and all of them expect you to be similarly educated--even if you are blind. If you have eyes but cannot read, there is no web accessibility standard that can be used as a guide. Now if 70-80% of your country is illiterate, this is a problem. Most of these guidelines are made by western people. Most of the research is coming from the west. They try to localize (translate) something, but accessibility needs to go beyond that.

We decided why not do the thing where we don't expect any reading skills? For us accessibility means something different. It means a social semantic web. By social we mean that people contribute towards accessibility needs. By semantic I mean the first paragraph can be retold by someone, while keeping the abstract intent of the content, for another audience. The second can be retold to another's needs, and so on, establishing relations between the original and the retold parts using attributes such as the target language, identifier tags or a target community context. This network can go as big as you want, every document can be elaborated and connected.

So if it's a text heavy document, how do you make it accessible to people who can’t read? We call this *[Renarration.](http://wiki.janastu.org/wiki/Sweet_Web)* The web documents should have that kind of structural framework that facilitates alternate narrations.  That's how we started this work -- can I take a text document that's come out of your blog and take it to my village and make it a visual story for them? What are the actions that I need to take? What do I highlight?

![alt_text](/assets/dinesh2.png "image_tooltip")

*Alipi.us*

So we work with a web annotation framework. Annotations are another layer over the web. We don't assume anything is automatic in this process. But this doesn't take a lot of time. it doesn't need to be an all or nothing task - typically more likely that one provides an appropriate alternative narrative suitable for someone they want to share the document with.  If something is automatable, then we are always waiting for someone to deploy it to the community. 

For example, the minimum wage act we've worked on -- many people who need it probably can't read it. A simplified english version of the act was published 30 years later, otherwise it's in legal language. The easy to read version helps the local Indian NGOs understand it. They need a simplified version of the act to explain it to their stakeholders - ie., what it's about, that there is an act they can help there stakeholders generally understand what minimum wages mean.

**What led you to start working on local knowledge?**

**Dinesh**

We worked on making it easy for NGOs to manage the community knowledge they assimilate when we worked on platform called Pantoto - Communities managing community knowledge. Most of these NGOs were afraid someone would steal their data. We tried to explain that if they put it their work out on the Web, a reader can lookup and know that it was originally published by them and thus realise if someone was misappropriating their work .

We say for original content - it matters that you put it out there, publish it. So we started working with a lot of small groups. There are many because so much work is necessary in their villages. 

As we worked with such groups we started to work on content accessibility issues for their needs.

Now, after almost a decade, our work is an attempt to address accessibility aspects completely from the ground-up, starting with low-literate communities who find it impossible to publish on the Web. We build these Raspberry Pi based audio recorders and leave them in a craft center. For example, they record messages to the community, to the group who has access to the Pis. A community mesh-radio. It’s important that no one needs to be a coder or even literate to publish or manage their data.



![alt_text](/assets/dinesh3.png "image_tooltip")

*[Craft Cluster, Durgadahalli](https://crafts.janastu.org/),Tumkur Dist. 2018*

**What are some key challenges you’ve overcome while building out this project?**

**Dinesh**

One challenge we have is how do we store all of this information? Everyone has something to say, sing, recipes, stories, lessons … the many ways we learn. But how do we store it? We have created a Wi-Fi mesh network of archives that are locally available on the mesh. Then, all of our tools are about how people annotate stuff so it's discoverable and navigable. 

Everyone has their own Raspberry Pi, they don't need to push anything out to anywhere else. All their data will stay on their own pi. We are cheating a bit, we are syncing in the background that's encrypted, just in case they lost everything. Once it's out on the mesh archive, it's sharable, on WhatsApp, or synced with another pi in another village.

Another big question is when the Internet is available, what should be exposed to the community outside of the local mesh network? First you have a community device, it’s basically reflecting what happens in the real world. Even if it's hosted in their office, sometimes people aren't convinced it isn't hosted outside. For example, if you're opening in a browser, then it must be on the internet and accessible outside!

In the radio studios under lock and key, we don't depend on the internet. We aren't really using an internet cloud to synchronize everything, but we try our best to have multiple backups. It's encrypted but based on the source node, you can get all your data.

![alt_text](/assets/dinesh4.jpeg "image_tooltip")

*An old telephone booth device converted to record an audio or listen to community radio recordings over the wifi-mesh*

![alt_text](/assets/dinesh5.jpeg "image_tooltip")



![alt_text](/assets/dinesh6.jpeg "image_tooltip")

*A solar panel with an omni antenna serves as an always online media server for the wifi-mesh based community radio activity in a rural and remote context*

**What is a concrete example for local knowledge gathering and its impact?**

**Dinesh** 

We helped create a document about the raika bio-cultural protocol. This one group is tending to their camels with a 1000 year old protocol for living with animals and taking care of them. When there is a top-down law, someone will say 'they don’t know what they're doing.. we need to tell them.' To those at the top, if it's not written down, it doesn't exist. They think that the local community is destroying the environment.

This “BCP” work is about how some legal documents can be made with the community and written, so that the people at the top, like policy makers, can read. The document we create is written in English, it's for the top. The shepherds don't understand it, so this document also needs to be profusely re-narrated in different ways back to the community.

Now the whole page is contributed by different people, someone also contributed audio. You can add audio per paragraph, and then you can see translation. The software keeps connection to the original so you can have authenticity of original document, even if it's different and not about translation, about re-narration, it has a backlink to the original so it's a way to address this huge issue of how to tell a new story from an existing story.

After the annotations became a standard, we are trying to use the new standard to do all the new annotations. Every edit and re-narration is authored and has attribution to the people who contributed. 

**What is the tension between the global Internet and what's accessible locally?**

**Dinesh**

People want to use WhatsApp, it's a natural ambient technology. We are not competing with WhatsApp. What we are doing is likely not going to be taken over by any of these big companies. Publishing locally, to people next to you, is not what these companies are interested in doing. If you talk to a neighbor, the whole narrative is so different.

For example, if you make a computer game with your village, you're not going to get a gun and shoot all your neighbors. You see that everywhere, as soon as I am anonymous, I can use bad words to someone else I don't know, loud and clear. This relates to everything on the Internet, even the online harassment of women. Where does it come from? Disconnection? The thrill?

This is why logging in and authentication becomes important for these larger internet companies. When you go to the village it's the last thing you need, rather you can't even do it. Logging in without internet connectivity just to authenticate somebody, but why? 

**Karissa**

**Yeah it’s great that you mention that, the concept of ‘authentication’ and ‘anonymity’ does change drastically when you’re from a small community and everyone knows everyone else. It seems like also you’re engaging in an educational practice, teaching journalism and technology.**

![alt_text](/assets/dinesh7.jpeg "image_tooltip")

*Students at rural public school working together - listening to a podcast on the mesh*

**Dinesh**

To be honest, it's more educational than their school. More educational in the sense of context, their own community, very validating. When you look at the typical education they’re getting, the syllabus is set in the capital of the state, pushed down to every village without contextual knowledge, so that they have a common metric on who knows addition, multiplication, etc.

They want to know that people have actually learned this.  If they do anything that's a more flexible syllabus, they can't test them. It's the thing of the school system that's more puzzling.

What we’re doing is not about limiting them, it's about giving them access and opening them up. 

**Do they share their stories between communities?**

**Dinesh**

Our collective has a community radio van, solar roof, wifi, it can go everywhere. This van has a studio in it, can cut, edit, publish the stories. When it comes back to the community, it synchronizes. These are initially in a “raw” bucket and then moved to curated buckets to be picked up by anyone. If you record something in your pi, it syncs whenever it connects to the network. 

![alt_text](/assets/dinesh8.jpeg "image_tooltip")

*Community Radio activity center and camp setup (jaaga.in)*

We do automatic sync so people realize they are not alone in this. They realize there are other people that will help with the re-annotations. In the radio editing studio, it’s a more powerful pi, some box that is a little more powerful. Whatever comes out of this box is published and shareable. Otherwise, it's private. We don't share names other than what's coming out of the audio.

![alt_text](/assets/dinesh9.png "image_tooltip")

*Papad http://papad.pantoto.org/*

We ask the community to contribute tags, and suggest tags for these audio files. There are lots of pieces like this, just scratching the surface of what we are doing. Most of all, it's about using the non-typical approach. We don't insist on web forms, for example. It's contributed metadata, it's not self-proclaimed metadata, added after the fact by many people.

If they do that, they become something, and get an understanding of how the world works. If something isn't handed down, they can change the world. 

**Read more about these projects**

<http://a11y.in>

<http://wiki.janastu.org/wiki/Sweet_Web> 

<https://iruway.janastu.org/> 

<http://wiki.janastu.org> 

<http://j.mp/janastu-mesh> 

<https://crafts.janastu.org> 

<http://followsheep.pantoto.org/>