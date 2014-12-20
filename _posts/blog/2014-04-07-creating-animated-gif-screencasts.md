---
categories: blog
published: false
title: Creating animated GIF screencasts
author: Gregor MacLennan
tags: 
  - Tech
---

For [ClearWater's blog post](http://www.giveclearwater.org/2014/04/clearwaters-online-map-mad-genius/) about our new [map collaboration](http://www.giveclearwater.org/map/), we created some simple screencasts as animated GIFs. Animated GIFs are a simple way to demonstrate functionality in a blog post. Creating them was a little tricky, here are the tools I used (on a mac -- would welcome tips about how to do this on Windows):

[Screencastify](https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn) (free) Chrome extension to record the screencasts as webm.

[Handbrake](http://handbrake.fr/) (free) to convert the webm to mp4 so it could be used in the next step. I used the highest settings to preserve quality - file size does not matter, since this is just an intermediate step.

[Gif Brewery](http://gifbrewery.com/) ($4.99) to convert the mp4 into a GIF. You can resize, trim the video, and select framerate. I chose automatic / 10fps to match the original video.

[GifQuickMaker](https://itunes.apple.com/us/app/gifquickmaker/id411431426?mt=12) ($0.99) for fine-tuning the GIF frame-by-frame. In this case I added a pause to the first and last frame.

And the final result:

![Screencast 2 sm.gif](/assets/Screencast 2 sm.gif)

An easier way to do this would be to upload to Youtube directly from Screencastify and convert to GIF using [yt2gif](http://yt2gif.com/) or similar, but this would now allow the same control over the output in terms of framerate, size, and timing.
