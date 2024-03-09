document.getElementById('applyStyle').addEventListener('click', () => {
  const customCSS = document.getElementById('customCSS').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { customCSS });
  });
});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: 'inject'});
});
