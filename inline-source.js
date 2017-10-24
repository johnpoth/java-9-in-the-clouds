var inline = require('inline-source')
  , fs = require('fs')
  , path = require('path')
  , htmlpath = path.resolve('project/src/html/index.html');

inline('/home/jpoth/dev/git/java9-dzslides/java9-dzslides-jpoth.html', {
  compress: true
  // Skip all css types and png formats
  // ignore: ['css', 'png']
}, function (err, html) {
    fs.writeFile('./jdk9-in-the-clouds.html',html,null);
});