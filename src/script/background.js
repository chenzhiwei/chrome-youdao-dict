"use strict";

let defaultOptions = {
  dblclick: false,
  shortcut: false,
  shortcut1: 17,
  shortcut2: null,
  wordbook: false,
  selectoToTranslate: false
};

let init = (details) => {
  if (Object.is(details.reason, 'install'))
    chrome.storage.sync.set(defaultOptions);
};

chrome.runtime.onInstalled.addListener(init);
