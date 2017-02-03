---
title: Hexo Tags.
date: 2017-01-14 19:17:00
tags: [hexo,js]
layout: post
categories: Hexo
---

A Hexo tag allows for me to quickly insert javascript generated html code into my markdown posts. Once I have a nice little tag written I can just call the tag from within my markdown, pass it a few arguments, and the html will be inserted when generating the public file.

<!-- more -->

My first hexo tag helps me with inserting GIF's from my forFrame.js collections into a post in which I might be writing about it.

Here is the js of that tag:

```js
var baseUrl = 'https://raw.githubusercontent.com/stintosestudios/';
 
hexo.extend.tag.register('forframe_gif', function (args) {
 
    var collectionName = [args[0]],
    projectName = [args[1]],
    size = 320,
    projectUrl = baseUrl + 'forFrame_' + collectionName + '/master/projects/' + projectName + '/',
    gifUrl = projectUrl + 'gif/gif_1_' + size + '.gif';
 
    if (args[2]) {
 
        size = args[2];
 
    }
 
    return '<img class="forframe_lone_gif" src=\"' + gifUrl + '\">';
 
});
```


I save this in the scripts folder in my hexo root name space. When hexo generates files it registers this tag then will use it to generate html code for all posts that use it.

To use it I just have to call it when writing a post. The call in my markdown that I write in my posts looks like this:

```
{% forframe_gif collection_1_0_42 the_canvas 320 %}
```

This can me very helpful compared to just manually writing markdown, or html links. Say I have a few hundred posts, and I go to park my files at someplace other then raw.githubusercontent.com, or the way I organize my files changes. If that is the case I would have to go threw and edit a whole bunch of files by hand, or find a way to automate doing that. However this way all I have to do is make the necessary change to this tag, and then just generate the public folder again.