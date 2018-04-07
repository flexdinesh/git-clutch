const focus = (elem) => elem.focus();

const blur = (elem) => elem.blur();

const preventPageScroll = (e) => {
  // prevent scroll on arrow keys and space
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
};

export {
  focus,
  blur,
  preventPageScroll
};
