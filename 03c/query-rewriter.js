const queryRewriter = (patternMap) => {
  return (req, res, next) => {
    for(let name in req.query){
      patternMap.forEach(item => {
        const originalPattern = item[0];
        const defaultPattern = item[1];
        const reg = new RegExp(originalPattern);
        if (reg.test(name)) {
          const _name = name.replace(reg, defaultPattern);
          req.query[_name] = req.query[name];
        }
      });
    }
    next();
  }
};
module.exports = queryRewriter;
