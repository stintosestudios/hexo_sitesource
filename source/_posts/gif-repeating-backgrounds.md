---
title: GIF Repeating backgrounds.
date: 2017-01-11 12:51:00
tags: [gif,forframe,js]
layout: post
categories: GIF
---

# Repating Backgrounds

Something that comes up allot when making a GIF of mine is to have a looping background. You Often see this kind of thing in about every cartoon ever made right? After making a few gifs I was able to get this simple, but timeless animation trick somewhat solid, and have found that one method of getting it done is perhaps a bit more profeshonal then the other.

<!-- more -->


# The crude, but effective way.

When it comes to making my animations I don't care that much if things are done in a crude yet effective way. All I care about is that my collection of frames comes out the way that I want it. Once the finished product is furnished to GIF, or whatever container format, slopy code is fine as long as it gets the job done.

So the crude yet effetive way is to just make it so the background image is for the most part seemless but with an additional part at the begining or end that is the same as the other side of the image. In other words, I make it so I can just simply loop around with the same square area with the use of just one ctx.drawImage call.

# The complacated, but more elagent way

<!-- ![repeating background](/img/footback_1_320.gif) -->
{% forframe_gif collection_1_5_3 footback 320 %}

The above gif should illastrates why this approche is a bit more complacted, but is a little more elagent. It allows for me to work dirrectly with a single seamless image that does not have the beginning part appened to the end of it as I do with the crude yet effective way that I have described earler. To pull this off I need to make use of two ctx.drawImage calls.

For the most part I just grab whatever the current part of the background is, however things get a little complacted when it comes to looping around back to the begining.