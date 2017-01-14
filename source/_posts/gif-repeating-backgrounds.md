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

This is what I wrote to help with this.

```js
var backgroundData = function (state) {
 
    var sx,
    draws = [];
 
    // find source x pointer, and scaled version
    sx = (state.source.tw - state.source.vw) - state.source.tw * state.percent;
    x = sx * (state.drawTo.tw / state.source.tw);
 
    // if sx is greater then 0, then we only need one ctx.drawImage call
    if (sx > 0) {
 
        // just part 1
        draws.push({
 
            sx : sx,
            sy : 0,
            sw : state.source.vw,
            sh : state.source.vh,
 
            dx : 0,
            dy : 0,
            dw : state.drawTo.vw,
            dh : state.drawTo.vh
 
        });
 
    } else {
 
        // else we need two draw operations
 
        // part 1
        draws.push({
 
            sx : 0,
            sy : 0,
            sw : state.source.vw + sx,
            sh : state.source.vh,
 
            dx : Math.abs(x),
            dy : 0,
            dw : state.drawTo.vw + x,
            dh : state.drawTo.vh
 
        });
 
        // part 2
        draws.push({
 
            sx : state.source.tw + sx,
            sy : 0,
            sw : Math.abs(sx),
            sh : state.source.vh,
 
            dx : 0,
            dy : 0,
            dw : Math.abs(x),
            dh : state.drawTo.vh
 
        });
 
    };
 
    return draws;
 
};
```