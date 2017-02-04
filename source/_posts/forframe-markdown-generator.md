---
title: forFrame.js makdown file generator.
date: 2017-02-3 9:43:00
tags: [forframe,hexo,js]
layout: post
categories: forframe
---

So I have been having a lot of fun with my animation framework that I call forframe.js. A lot of my time is spent making new animations with it, nothing too interesting, just simple little exercises to test out the framework. However when I am not making a new animation I am looking into ways that I can improve the framework itself. In addition I write additional software that helps to reduce the amount of time that I am spending preforming mundane repetitive tasks that eat up time that I could spend making a new animation.

<!-- more -->

One such task is updating my website to display an up to date collection of thumbnail images for all the animations that exist in a certain animation collection I have as a repository on hosted on github.

# The Script.

So I wanted to make a tool that...

* Preforms a call to github's API for data on my repositories.
* Uses that data to build a list of repositories that are forframe animation collections.
* Also builds a list of each project in each collection.
* Uses the data gained to build a bunch of markdown files for each collection.
* Each makrdown file calls a hexo tag that will make a collection of links for each each project in the collection when I build my site using hexo.
* when done the tool also makes an index.md, using another hexo tag of mine that is intended for a collection link, using the latest project thumb image in the link to the collection page.
* the collection of files are stored in a folder called "forframe" inside another folder called "source" which is consistent with the way things are structured in a hexo.io working project tree.

The current state of the tool does just that. So now from the command line I just call it and give it a github access token like this:

```
$ node hexo_markdown.js [githubaccesstoken]
```

And just like that my handy little tool automates the process of making a collection of makdown files that I use to have to maintain manually. Saving me a great deal of time that will continue to grow with the count of my collections, and projects.

# Some code for you

Here is some code form the tool.

```js
var build = function (repoNames) {
 
    log('Ready to build source files');
 
    var fi = 0,
 
    writeDone = function () {
 
        log('build done.');
 
    },
 
    writeNext = function () {
 
        var projects = '',
        text = '';
 
        repoNames[fi][2].forEach(function (project, index, names) {
 
            projects += project;
 
            if (index < names.length - 1) {
 
                projects += ';';
 
            }
 
        });
 
        log('projectNames: ' + projects);
 
        // write title
        text = '---' + os.EOL +
            'title: ' + repoNames[fi][0] + ' GIF collection' + os.EOL +
            'layout: page' + os.EOL +
            '---' + os.EOL + os.EOL;
 
        // write hexo tag call
        text += '{% forframe_thumbs ' +
        repoNames[fi][0].substr(9, repoNames[fi][0].length) +
        ' ' + projects + ' %}';
 
        fs.writeFile('./source/forframe/' + repoNames[fi][0] + '.md', text, function (err) {
 
            if (err) {
 
                log('error writing file for ' + repoNames[fi][0] + '.');
                ifFail(err);
 
            } else {
 
                log(repoNames[fi][0] + ' file create.');
 
                fi += 1;
 
                if (fi < repoNames.length) {
 
                    writeNext();
 
                } else {
 
                    // building of collecton files is now done, build/update the index.
                    buildIndex(repoNames, function () {
 
                        writeDone();
 
                    });
 
                }
 
            }
 
        });
 
    };
 
    writeNext();
 
};
```

# Future plans.

So far I love my little tool. However it could use some polish, and some more features as well.

## collection.json

I might want to get into the habit of having a collection.json file for each of my animation collections. Such a file will contain instructions, and data for my tool. What comes to mind for now is a Boolean value that is assumed to be true by default, but if set false will indicate that I do not want the collection indexed. It would also be nice to set a description that could be used in the building of the index.md file. In addition I would like to be able to set a project name that is to be used as the thumb image for the link to the collection in the index. In any collection there is an animation that I like the best out of all the others, so that would be nice.

## project.json

Just like the collection.json file, but as you would expect this one would be in a project folder. For now the most pressing reason for this is to have it so my tool can build a markdown file for the collection but skip over projects that are in the works sort of speak. I am sure I can think of other things I might like to have associated with the project such as maybe links to blog posts about it maybe.

## project pages

As it stands now on a collection index a link to a single project just goes directly to a gif of the project for viewing. It might be nice to instead have it go to a page that can contain other information about the project, such as descriptions, links to blog posts or source code. It could also contain JavaScript that can be used to track which animations are more popular than others. For starters I am using google analytics, that alone is fine for now.

# End of line

This tool is just one of many other ideas that I have in mind for my quest to get to the point where all I have to worry about is the development of my content. Everything else I want automated, but I want it automated my way. As such doing so my take some time.