
// the tag
/*
hexo.extend.tag.register('google_analytics', function () {

return '<!-- google analytics --><script>' +
  '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){' +
  '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
  'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
  '})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');'+
  'ga(\'create\', \'UA-90092106-1\', \'auto\');'+
  'ga(\'send\', \'pageview\');'+
'</script>';

});
*/

// the helper
hexo.extend.helper.register('google_analytics', function (id) {

return '<!-- google analytics --><script>' +
  '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){' +
  '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
  'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
  '})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');'+
  'ga(\'create\', \''+id+'\', \'auto\');'+
  'ga(\'send\', \'pageview\');'+
'</script>';

});