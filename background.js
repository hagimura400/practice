chrome.runtime.onInstalled.addListener(() => {
  const parent = chrome.contextMenus.create({
    id: 'parent',
    title: 'コメントを挿入',
    contexts:["link"],
  });
});  
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const Cid = info.menuItemId
  if (Cid === "parent") { 　//ここから右クリックされたときに実行したいコード
    chrome.windows.create({url:'https://www.tv-copyright.jp/offer/youtube/index.html'},
    function (w) {//wにはwindowオブジェクトが格納される
      chrome.tabs.executeScript(w.tabs[0].id,{code:"document.getElementById('site_name').value =" + '\"'+info.linkUrl+'\"'}) 
     }
   )
}
});
