---
title: Hexo Source.
date: 2017-01-09 12:54:00
tags: [Hexo,js]
layout: post
categories: Hexo
---

# So hexo is kindof cool.

I just started useing the node.js powered static site generater called [hexo](https://hexo.io/). I have been running into a few bugs with it, but over all it seems to work well for what I want it to do. I thought I would write a quick blog post about the hexo source folder, and how I am handlying my source and deployment. Even if noone reads it, it is important to write about stuff like this for my one note sort of speak.

<!-- more -->

# About the hexo source folder

Hexo builds a static web site based off of content that is stored in a source folder. I write my blog posts in markdown, and then run a command that processes the content there into a collection of html files, and assests that are copyed over into a public folder. The root contents of that folder is what will then need to be hosted by some means. As of this writing I am just copying the files over to my [github pages reposatory](https://github.com/stintosestudios/stintosestudios.github.io).

# Pulling the source away from the deployment.

I first thought that it would be great to just have everything togearther in a single reposatory. That way both the source and public html will all be togeather in one nice neet little package. However I have desited to keep things seperate into source, and deplyment reposatories.

* hexo_sitesource (the source)
* stintosestudios.github.io (the deployment)
