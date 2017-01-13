
// where to look for the collection of images

// raw git
//var baseUrl = 'https://raw.githubusercontent.com/stintosestudios/';

// local
var baseUrl = '/img/';

// the tag
hexo.extend.tag.register('forframe_collection', function (args) {

    var projectUrl = 'https://raw.githubusercontent.com/stintosestudios/forFrame_' + args[0] + '/master/projects/' + args[1] + '/',
    thumUrl = projectUrl + 'thum_128.png',
    gifUrl = projectUrl + 'gif/gif_1_320.gif';

    return '<a href="' + gifUrl + '"><img src="' + thumUrl + '"></a>';

});

hexo.extend.tag.register('forframe_thumbs', function (args) {

    var collectionName = args[0],
    projects = args[1].split(';'),
    projectUrl,
    thumUrl,
    gifUrl,
    html;

    html = '<div class="forframe_thumb_container">';
    html += '<h2><a href=\"forframe\/'+collectionName+'.html\">'+collectionName+'</a><\/h2>';
    projects.forEach(function (projectName) {

        projectUrl = baseUrl + 'forFrame_' + collectionName + '/master/projects/' + projectName + '/',
        thumUrl = projectUrl + 'thum_128.png';
        gifUrl = projectUrl + 'gif/gif_1_320.gif';

        html += '<a class="forframe_thumb_link" href="' + gifUrl + '"><img class=\"forframe_thumb_img\" src="' + thumUrl + '"></a>'

    });

    return html + '<\/div>';

});
