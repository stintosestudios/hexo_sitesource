---
title: Hexo Themes.
date: 2017-01-10 19:58:00
tags: [Hexo,js]
layout: post
categories: Hexo
---

# Hexo Themes how to

I thought I would put togeather a little something to help remind me on how to go about putting togeather a hexo.io theme. As of this writing I have put togeather my first hexo theme for this site called "dark_and_cool", and I would like to rmemeber how to do this as I will like to keep making more themes now and then until I get something I like. 

<!-- more -->

# getting started

You will start by creating a folder that is the name of your theme in the theme folder of your hexo root path. Inside that folder you will have a layout folder, as well as a _config.yml file.

# layout.ejs

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