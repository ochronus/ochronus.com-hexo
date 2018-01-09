const path = require('path');
const hasha = require('hasha');
const Promise = require('bluebird');
const streamToArray = require('stream-to-array');
const streamToArrayAsync = Promise.promisify(streamToArray);
const revPath = require('rev-path');


hexo.log.info('Asset versioning script active');

hexo.extend.filter.register('after_generate', function () {
    const routes = hexo.route.list();
    let htmlContents = {};
    let versionedAssets = {};

    return Promise.mapSeries(routes, function (generatedPath) {
        const stream = hexo.route.get(generatedPath);
        return streamToArrayAsync(stream)
            .then(function (arr) {
                if (typeof arr[0] === 'string') {
                    return arr[0];
                } else {
                    return Buffer.concat(arr);
                }
            })
            .then(function (buffer) {
                const ext = path.extname(generatedPath);
                if (ext.match(/(\.html|\.htm)/)) {
                    htmlContents[generatedPath] = buffer.toString('utf8');
                }
                if (ext.match(/(\.js|\.css)/)) {
                    const hash = hasha(buffer, {
                        algorithm: 'md5'
                    });
                    const revvedPath = revPath(generatedPath, hash);
                    versionedAssets[generatedPath] = {
                        path: revvedPath,
                        content: buffer.toString('utf8'),
                    }
                }
            });
    })
    .then(function() {
        for (var originalPath in versionedAssets) {
            const elem = versionedAssets[originalPath];
            hexo.route.set(elem.path, elem.content);
            console.log(elem.path);
        }
    });
});