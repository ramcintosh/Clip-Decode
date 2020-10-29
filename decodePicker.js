browser.contextMenus.create({
  id: "binary",
  title: "Decode using Binary"
});
browser.contextMenus.create({
  id: "b64",
  title: "Decode using Base64"
});

browser.contextMenus.create({
  id: "reverse",
  title: "Decode using Reverse"
});

browser.contextMenus.onClicked.addListener(function(info, tab){
  browser.tabs.sendMessage(tab.id, {greeting: info.menuItemId});
});
