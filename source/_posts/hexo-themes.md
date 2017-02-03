---
title: Hexo Themes.
date: 2017-01-10 19:58:00
tags: [hexo,js]
layout: post
categories: Hexo
---

I thought I would put togeather a little something to help remind me on how to go about putting togeather a hexo.io theme. As of this writing I have put togeather my first hexo theme for this site called "dark_and_cool", and I would like to rmemeber how to do this as I will like to keep making more themes now and then until I get something I like.

<!-- more -->

## Getting started

I will start by creating a folder that is the name of my theme in the theme folder of my hexo root path. Inside that folder I will have a _config.yml file, as well as a layout folder. I will also want some additional folders and files in there as well but for now I will just cover the most importent stuff needed to get just get started.

## The _config.yml file

The name should say it all, and yes this is where I will be setting up my configuration for the theme.

```yml
# Header Menu
menu:
  Home: /
  Blog: /archives
  GIF: /forframe
  Github: https://github.com/stintosestudios
 
# disable banner
use_header_cover: true
 
# URL of the banner image at source/img/
index_cover: /img/banner_320_branded.png
 
widgets:
- category
- tag
- archive
 
# widget behavior
archive_type: 'monthly'
show_count: false
 
# favicon
favicon: /favicon.png
 
# Google Analytics Tracking ID
google_analytics: UA-90092106-1
```

## The layout folder.

This is where I will have all my *ejs file's that are used for rendering all the pages in the static site.

### layout.ejs

So the most important ejs file that will be placed in the layout folder is the layout.ejs file. This is the ejs that will be used accross all pages.

```html
<!DOCTYPE html>
 
<html>
 
<head>
   <meta charset="utf-8">
   <title><%= config.title %></title>
   <!-- global css -->
   <%- css('css/global.css') %>
</head>
<body>
   <div class="container_main">
   <%
      var headerStyle = '';
        if (theme.use_header_cover) {
            headerStyle = 'background-image: url(' + theme.index_cover + ')';
        }
    %>
        <div class="container_header" style="<%= headerStyle %>">
            <!-- menu links -->
            <p class="menu_navbar">
            <% for (var i in theme.menu){ %>
                <a class="menu_link" href="<%- url_for(theme.menu[i]) %>" ><%= i %></a>
            <% } %>
            </p>
        </div>
        <div class="container_content">
            <%- body %>
        </div>
    </div>
    <%- partial('_partial/google-analytics') %>
</body>
</html>
```

### index.ejs

This is what will be rendered on the main root namesapce of the site.

```html
<div>
    <% if(config.author){ %>
       <h1><%= config.author %></h1>
    <% } %>
    <% if(config.subtitle){ %>
    <p><%= config.subtitle %></p>
    <% } %>
 
</div>
<div>
    <ul>
    <% page.posts.each(function(post){ %>
        <li>
            <h3>
                <a href="<%- url_for(post.path) %>">
                    <%= post.title %>
                </a>
            </h3>
            <div>
                <%= date(post.date, config.date_format) %> 
            </div>
 
            <% if(post.excerpt) { %>
                <p>
                    <%- post.excerpt %>
                </p>
            <% } %>
        </li>
    <% }) %>
    </ul>
</div>
```

### archive.ejs

```html
<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
 
    <% page.posts.each(function(post){ %>
 
        <div class="archive-item">
 
            <a href="<%- url_for(post.path) %>" class="post-title">
 
                <%= post.title || __('untitled_post') %>
 
            </a>
 
            <div class="date text-muted">Posted on <%= full_date(post.date) %></div>
 
        </div>
 
    <% }) %>
 
</div>
```

### page.ejs

```html
<div>
    <%- page.content %>
</div>
```

### post.ejs

```html
<div>
    <h1 class="text_post_title" ><%- page.title %></h1>
    <div>
        <%= date(page.date, config.date_format) %> 
    </div>
    <%- page.content %>
</div>
```

```css
## The source folder
 
body{
 
    background:#000000;
    color: #00afaf;
 
}
 
.container_main{
 
    width:80%;
    margin-left:10%;
    background:#0f0f0f;
 
}
 
.container_header{
 
    background-size:100% 200px;
 
    display:table;
    height:200px;
    width:100%;
    background-color:#2a2a2a;
 
}
 
.container_content{
 
    padding:50px;
 
}
 
.container_footer{
 
    background:#1a1a1a;
    text-align:center;
    padding: 20px;
 
}
 
.menu_navbar{
 
    text-align:center;
    display: table-cell;
    vertical-align: bottom;
 
}
 
.menu_link{
 
    font-family:arial;
    font-size:20pt;
    background:#000000;
    margin:5px;
 
}
 
.text_post_title{
 
    font-size:24pt;
 
}
 
/* forframe */
 
.forframe_thumb_container{
 
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    width:320px;
 
}
 
.forframe_thumb_link{}
.forframe_thumb_img{
 
    padding:5px;
 
}
 
a:link{color:#00ffff;}
a:visited{color:#00ffff;}
a:hover{color:#ffffff;}
```