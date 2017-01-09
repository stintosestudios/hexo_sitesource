# hexo_sitesource

This is the source for my [github page](https://stintosestudios.github.io/). I make use of [Hexo.io](https://hexo.io/) that is used to generate the source into a public html folder, the root content of that folder can be copyed and pasted into the [github pages repo](https://github.com/stintosestudios/stintosestudios.github.io).

## Getting started

first clone it in

    git clone https://github.com/stintosestudios/hexo_sitesource

cd into the git folder, and run an npm install to install the dependencies including hexo from the package.json file.

    cd hexo_sitesource
    npm install

generate the public folder

    hexo generate

If all goes well, you will have a public folder that contains the static site ready for deployment.

## Run the site localy

I have placed a simple server.js file in the source folder that should copy over into the generated public folder that can be used to host the site localy with node.js. To use it just cd into the public folder, and run it with node.

    cd public
    node server.js
