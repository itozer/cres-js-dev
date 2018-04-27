const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

const createH1 = text => {
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode(text));
  return h1;
};

export { ready, createH1 };
