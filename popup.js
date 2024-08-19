document.getElementById('checkStatus').addEventListener('click', () => {
  chrome.storage.local.get(['loginStatus'], function(result) {
    document.getElementById('status').textContent = result.loginStatus || 'Status not available';
  });
});
S