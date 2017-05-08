export const pick = (obj, ...properties) =>
  properties.reduce(
    (pv, prop) =>
      (Array.isArray(prop)
        ? Object.assign({}, pv, pick(obj, ...prop))
        : Object.assign({}, pv, { [prop]: obj[prop] })),
    {}
  );

export const omit = (obj, ...properties) => {
  properties = properties.reduce((pv, cv) => pv.concat(cv), []);
  return pick(obj, Object.keys(obj).filter(p => !properties.includes(p)));
};

export const get = (baseObj, propPath = [], defaultIfUndefined = false) => {
  // first, convert propPath to a form we can use.
  if (!Array.isArray(propPath) && typeof propPath === "string") {
    propPath = propPath.split(".");
  }
  propPath = propPath.reduce((pv, cv) => pv.concat(cv.split(".")), []);

  const recGet = (base, pPath, def) => {
    if (pPath.length === 1) {
      if (base[pPath[0]] === undefined) {
        return def;
      }
      return base[pPath[0]];
    }
    if (base[pPath[0]] === undefined) {
      return def;
    }
    return recGet(base[pPath[0]], pPath.slice(1), def);
  };

  return recGet(baseObj, propPath, defaultIfUndefined);
};

export const range = (num = 0, init = 0, by = 1) => {
  let out = []; 
  for(let i = init; i < init + num; i+=by){
    out.push(i);
  }
  return out; 
};