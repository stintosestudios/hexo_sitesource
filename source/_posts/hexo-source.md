---
title: Hexo Source.
date: 2017-01-09 12:54:00
tags: [Hexo,js]
layout: post
categories: Hexo
---

# So hexo is kindof cool.

I just started useing the node.js powered static site generater called [hexo](https://hexo.io/). I have been running into a few bugs with it, but over all it seems to work well for what I want it to do. I thought I would write a quick blog post about the hexo source folder, and how I am handlying my source and deployment. Even if no one reads it, it is important to write about stuff like this for my own notes sort of speak.

<!-- more -->

# About the hexo source folder

Hexo builds a static web site based off of content that is stored in a source folder. I write my blog posts in markdown, and then run a command that processes the content there into a collection of html files, and assests that are copyed over into a public folder. The root contents of that folder is what will then need to be hosted by some means. As of this writing I am just copying the files over to my [github pages reposatory](https://github.com/stintosestudios/stintosestudios.github.io).

# Pulling the source away from the deployment.

I first thought that it would be great to just have everything togearther in a single reposatory. That way both the source and public html will all be togeather in one nice neet little package. However I have desited to keep things seperate into source, and deplyment reposatories.

So I have to reposatories:

* [hexo_sitesource](https://github.com/stintosestudios/hexo_sitesource) (the source)
* [stintosestudios.github.io](https://github.com/stintosestudios/stintosestudios.github.io) (the deployment)

This is the way I am handleing it for now, for better or worse.

# step one : clone in the source

Assuming I have both node.js, and git installed the first thing I will want to do is have an up to date copy of the sites source code. I should always have an up to date local copy on my computer, but if not I will want to clone it in.

```bash
$ git clone https://github.com/stintosestudios/hexo_sitesource
```

# step two : install the dependencies

I do not store copys of the node dependencies in the reposatorie, however I do store a package.json file that can be used to quickly install eveything that is needed.

```bash
$ cd hexo_sitesource
$ npm install
```

# step three : generate the public folder

Assuming that the git folder is up to date, and all the dependencies are installed in the node_modules folder, I should now be able to generate my site.

```bash
$ hexo generate
```

If all goes well there should be a public folder now.

# Running the generated site locally

it is sometimes nice to be able to view the site locally via the http:// protocal rather then file:// to make sure that everything is looking good before deployment. To do this in my source folder I have wrote a simple server.js that can be used to host the site locally via node.js. To use it I just need to cd into the public folder, and fire it up with node.

```bash
$ cd public
$ node server.js
```

# updaing the source