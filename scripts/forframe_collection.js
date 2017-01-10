
// process forFrame source folder
//hexo.source.addProcessor('forframe/*.md', function (file) {

//    console.log(file);

//});

// the tag
hexo.extend.tag.register('forframe_collection', function (args) {

    var projectUrl = 'https://raw.githubusercontent.com/stintosestudios/forFrame_' + args[0] + '/master/projects/' + args[1] + '/',
    thumUrl = projectUrl + 'thum_128.png',
    gifUrl = projectUrl + 'gif/gif_1_320.gif';

        return '<a href="'+gifUrl+'"><img src="'+thumUrl+'"></a>';

});
