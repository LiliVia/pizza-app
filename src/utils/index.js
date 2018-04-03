const URL_PARAM_REGEXP = /:\w+/g;
const urlToRegExp = url => RegExp(`^${url.replace(URL_PARAM_REGEXP, '(.*)')}$`);
const isUrlParam = path => URL_PARAM_REGEXP.test(path);

export const isEqualPaths = (template, url) => {
  console.log(urlToRegExp(template));
  console.log(url);
  console.log(urlToRegExp(template).test(url));
  return urlToRegExp(template).test(url);
};

export const extractUrlParams = (template, url) => {
  const values = url.split('/');
  const params = {};

  if (!values) {
    return params;
  }
  return template.split('/').reduce((acc, param, index) => {
    if (!isUrlParam(param)) {
      return acc;
    }
    acc[param.slice(1)] = values[index];
    return acc;
  }, params);
};


export const toHtml = string => {
  const template = document.createElement('template');
  template.innerHTML = string.trim();

  return template.content;
};

export const clearChildren = node => {
  node.innerHTML = '';
  return node;
};

export const appendChildren = (node, child) => {
  if (Array.isArray(child)) {
    node.append(...child);
  } else {
    node.append(child);
  }
  return node;
};

export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};
