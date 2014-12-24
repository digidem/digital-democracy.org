---
author: Mark Belinsky
date: 2010-07-27 17:32:26+00:00
slug: iraq-tech-training
title: Iraq Tech Training
wordpress_id: 1968
categories:
- archive
image: http://farm5.static.flickr.com/4124/4832159628_69c14465c0.jpg
---

> "Saddam tried to use the indictment of Bill Clinton over the Monica Lewinsky scandal to show how shameful and perverse the United States is. The message that Iraqis heard was that in America, no one is above the law. Not even the President." ~Anes (trainee)


I recently returned from a trip to Erbil, Iraq, a city in the north stationed in semi-autonomous Kurdistan. I was invited by [Small World News](http://smallworldnews.tv/) to join them as technical trainer in a project they were performing for [IREX](http://www.irex.org/) on new media and technology.  My own question was whether these tools actually matter in a war zone.

Erbil currently exists as an anomaly in an otherwise dangerous country. I saw no major military presence, no hummers, and even found myself bowling one night. However, the trainees had driven by car from other parts of the country not nearly as quiet like Basra, Kirkuk and Baghdad. Reminders of the war mainly took the form of rolling electrical blackouts and foreign investors from China. All said, not much different from a developing world context.

I was paired with [Louis Abelman](http://twitter.com/louis_abelman), a web producer at [The New York Times](http://atwar.blogs.nytimes.com/author/louis-abelman/). Between his knowing how to innovate within an old hierarchical structure and my technical skills within a closed society developing context, we made for a good pair. He also made a beautiful film, [Lumo](http://www.gomafilmproject.org/), on rape as a tool of war in Congo.

Quickly we ran into problems unique to the country. For instance, there are three mobile providers with minimal interoperability. Having several SIM cards and or phones is common. Until a few months ago, Kurdistan was actually a long-distance call from the rest of Iraq, given it's autonomous standing. A picture of the power lines (below) should give a sense that power is generally unreliable as well, failing often with rolling blackouts. Generators are rare and fuel surprisingly expensive.

Problems with the mobile provider proved to be a good lesson for our training on [FrontlineSMS](http://www.frontlinesms.com/). After installing the system and showing it's Arabic version, the demonstration failed when messages couldn't be sent or received. After some head scratching, one of the participants realized that SIM cards get canceled after a certain amount of time, and replaced the SIM in the USB modem with the one in his own phone. Problem solved. The whole group jumped to celebrate an Arabic SMS sent through gateway also translated in Arabic. For me as a trainer, I'm going to purposely make sure the SIM is expired or doesn't have money to encourage the solution coming from the trainees.

[![image](http://farm5.static.flickr.com/4124/4832159628_69c14465c0.jpg)](http://www.flickr.com/photos/digitaldemocracy/4832159628/)

Our [Ushahidi](http://ushahidi.com/) training was similarly greeted with intrigue. The simple complexity of a text to map interface captured their imaginations. We first taught the, about [GitHub](https://github.com/) and social coding. I'm a big fan of using this to explain transparency and accountability through code. And it puts the power into the users hand where they can fix problems rather than waiting for the company to release an update. Installing it as a  web app offline using [XAMPP](http://www.apachefriends.org/en/xampp.html) demoed this further.  While fairly complicated, everyone got it to work, some after tweaking the MySql database a few times, others after going into the PHP and adjusting a time zone error. While the group was technical, some even with programming experience, none had a good PHP editor. [Syn](http://sourceforge.net/projects/syn/) was a good and quick FOSS solution. And of course [FileZilla](http://filezilla-project.org/) as a free FTP application.

A game to create the best looking and most interesting crisis map held over one half of the group while the others hacked the code to get it to work. After demoing Small World News projects like [Alive in Afghanistan](http://aliveinafghanistan.org/) and Digital Democracy ones like [Handheld Human Rights](http://handheldhumanrights.org/) and [Future Now](http://handheldhumanrights.org/nyc). What they came back with was pretty astounding, from documenting instances of stolen oil and mapping media centers throughout the country, to loading layers showing green zone borders and tracking instances of violence.

An added benefit to installing a web app like Ushahidi means a small learning curve to learning other web app installs like Wordpress and [Drupal](http://drupal.org/). To go over the details of blogging, we initially set up [techiraq.wordpress.com](http://techiraq.wordpress.com) after talking about the benefited and detractors to some of the other blogging tools. A wide consensus kept coming back to the issue of localization being crucial to adoption. While many trainees were of Kurdish descent, I was surprised that there wasn't more knowledge of the system since word press actually exists in Kurdish (though they don't speak the Sorany dialect).

My favorite thing about installing web apps in Iraq was shouting LAMP stack! Explaining the Linux - Apache - MySql - PHP stack that makes up so much of the web these days was particularly fun in the land of The Book of One Thousand and One Nightsbecause I could keep referencing Aladdin's magic LAMP. Mnemonic devices are different depending on context and this one certainly makes me smile.

[Freedom Fone](http://freedomfone.org/) is an interactive audio programming system that allows for info dissemination beyond the barrier that some groups face: illiteracy. Unfortunately we ran into an additional barrier that prevented us from demoing a full-on install: Windows 7. How does one get to the root or boot from an external drive? I still have no idea.

I can't stress the importance of having an integrated approach to trainings and explaining the various aspects of these tools, such as security. Handing over these systems without going into protection from the dangers in addition to leveraging the opportunities is irresponsible. We were able to cover the basics of security and anonymity, explaining how internet systems are structured and how to use the knowledge of that system to get to content that matters or hide oneself from being targeted. I was surprised that most had not used Proxies nor VPNs and did not even have a sense of SSL encryption. Their IPs are hopefully a little safer, and those with android phones feel a bit safer knowing about the [Guardian Project](http://guardianproject.info/).


> "But there is no censorship."
"We don't have security issues."


Two popular refrains that are unfortunately more lip service than reality. After a bit of prodding, people started to talk about a famous case from the previous year of a Kurdish blogger, Sardasht Osman, who [was killed for speaking out](http://www.iwpr.net/report-news/concern-over-kurdish-journalists-unsolved-killing). Despite writing under the pseudonym Sardo Zardasht, this didn't protect him. His [final words](http://kurdistanpost.info/kurdistanpost-english/May2010/10_5_10_I%20heard%20the%20first%20ring%20of%20death.htm) are a haunting testament to the process of democratization, a place where one can be [killed over a poem](http://www.mideastyouth.com/2010/05/16/die-for-your-words-a-farewell-to-sardasht-osman/).  In a transitioning society it is always important to remind people that a relative lack of problems doesn't mean that they don't exist. When describing our work in other closed societies and the reasons why open source is important for security, there were many nods of understanding throughout the group.

Low bandwidth is another issue like security that is rarely addressed in contexts where they're most important. While lecturing and walking around the classroom, I noticed people looking at CNN, YouTube, Al Jazeera. 15 people feeding off one WiFi node in a hotel with one connection. And the IP of that connect was listed in Somalia at that. Needless to say it was crawling. The USB modems that were handed out didn't help either. Introducing RSS feeds, readers & podcasts are key. Download in the background, overnight when Internet is fastest, and without ads. Plus, RSS can be useful for other sites, such as Ushahidi.

Our [Twitter](http://twitter.com/digidem) for techies overview included signing everyone up mostly to explain API architecture, how desktop apps function, and interoperability with other systems. One of the nice things about Ushahidi is that it takes and spits out info through the system. But what about a plant with a USB stick in the soil that is connected to Twitter and let's you know that it needs to be watered. I said this referencing a conversation with [John Tolva](http://www.ascentstage.com/) from IBM who noted in a recent talk that by 2012 we'll have more sensors online than humans. At mention of this, a collective hush fell over the crowd. Something I look for in trainings as a sign that I'm doing something right. How else can it be used? Synapses started firing. We started the hash tag [#iraqtech](http://twitter.com/#search?q=%23iraqtech) to keep the conversation going

One of the participants, Saad, brought up an interesting challenge.  He has website that has no domain name, just IP address. The reason being a mafia-type system whereby since most Iraqis don't have access to credit cards, they need to go through go-between who can order an international domain. One of the problems is extra charges but another quickly becomes security and efficiency. Want to create an independent citizen election monitoring site? Good luck explaining that one to a local man running a business. And Iraqi domains (.IQ) are currently tangled in a big web of state controlled bureaucracy (yes I will be buying MyBelinsky.IQ for a hilarious new startup once it changes. Think Myers-Briggs meets tongue-in-cheek).

To demo the social power of Twitter, I sent a message about the domain problem on my own Twitter account:


> [@mbelinsky: Hosting sites in Iraq: pay a local in cash to use their credit card for Swedish host. Profit by then holding it hostage #iraqtech](http://twitter.com/mbelinsky/status/18908104731)


The response I received was from a friend doing [MapKibera](http://mapkibera.org/) in Kenya:


> [@mikel: @mbelinsky same  ridiculous problem here in Kenya. we're waiting for mpesa integration  for domain registration](http://twitter.com/mikel/status/18908393211)


The fact that a potential answer to an obstacle came almost instantly from halfway around the world was a powerful (and unplanned) testament to the new ways that the world works. Overall, the #iraqtech conversation that I started was joined by people in Netherlands, Morocco, USA, Egypt, and Italy, and followed by many others.

A key part of our training of trainers program was to push a Do It Yourself (DIY) model. Introducing "[Let Me Google That For You](http://ar.lmgtfy.com/)" (Arabic version) was a fun way of taking tech support people and showing them that they can be so much more by applying their technical skills to more than just doing search queries for the people in their company. We disseminated some coding cheat sheets to better acquaint them with HTLM & PHP and introduced [http://W3schools.com/](http://W3schools.com/) for easy web tutorials that the group can use to test themselves.

Overall it was a fantastic start and I'm excited to see what these initial seeds will sprout into. With elections coming in October and the US military (eventually) pulling out, I'm hoping that tech can be one of the factors that leads to increased stability, sustainability and peace for the people of Iraq.

[![image](http://farm5.static.flickr.com/4095/4830190440_ac6c975008.jpg)](http://www.flickr.com/photos/stevieflamingo/4830190440/in/set-72157624583217186/)

********

Special Bonus:

I came to learn about Small World News through their amazing [Alive in Baghdad](http://aliveinbaghdad.org/) project which employed Iraqi journalists to produce video packages each week about a variety of topics on daily life in Iraq during the war. If you haven't seen it, the short episodes will surely make an impression on you. Some of my personal favorites are:



	
  * [Liquor Shops Open for Business](http://aliveinbaghdad.org/2009/03/30/liquor-shops-open-for-business/)

	
  * [Fake Pharmacies Plague Iraq](http://aliveinbaghdad.org/2009/01/27/fake-pharmacies-plague-iraq/)

	
  * [After Saddam, Building Amarah](http://aliveinbaghdad.org/2008/12/29/after-saddam-building-amarah/)


