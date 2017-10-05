const path = require('path');
const fs = require('fs-extra');

const resourceCollector = (basePath, cb) => {

  // ディレクトリか？
  if (fs.statSync(basePath).isDirectory()) {

    // カレントディレクトリにあるファイルや子ディレクトリを順次読み込みする
    const routeJson = fs.readdirSync(basePath).reduce((buf, name) => {
      const currentPath = path.join(basePath, name);

      // JSONなら集約し、ディレクトリなら再帰的に自身の関数を呼ぶ
      path.extname(name) === '.json' ?
        Object.assign(buf, fs.readJsonSync(currentPath)) :
        resourceCollector(currentPath, cb);
      return buf;
    }, {});

    // 階層単位のパスと集約したJSONを返す
    const vPath = path.join('/', basePath);
    cb(vPath, routeJson);
  }
};
module.exports = resourceCollector;
