// chrome.runtime.onInstalled.addListener(function () {

// });

chrome.contextMenus.create({ "id": "send-url-some", "title": "Send To Telegram", "contexts": ["all"] });

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info.pageUrl, tab)
  fetch(`https://send-to-telegram--nikit_singh.repl.co/send?data=${info.pageUrl}`,{
      mode: "no-cors"
    }
  )
});