// One-Click Consumption Logger Bookmarklet
// Drag this to your bookmarks bar to log any page with one click!

javascript:(function(){
  const GITHUB_REPO = 'PseudoDarwinist/whatIconsume';
  const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE'; // You'll need to add your token
  
  // Extract page information
  const pageTitle = document.title;
  const pageUrl = window.location.href;
  const pageHost = window.location.hostname;
  
  // Detect content type
  let contentType = 'website';
  let icon = '🌐';
  let creator = pageHost;
  let duration = 'Unknown';
  
  if (pageHost.includes('youtube.com') || pageHost.includes('youtu.be')) {
    contentType = 'YouTube';
    icon = '🎥';
    const channelEl = document.querySelector('ytd-channel-name yt-formatted-string');
    creator = channelEl ? channelEl.textContent.trim() : 'YouTube';
    const durationEl = document.querySelector('.ytp-time-duration');
    duration = durationEl ? durationEl.textContent : 'Unknown';
  } else if (pageHost.includes('twitter.com') || pageHost.includes('x.com')) {
    contentType = 'X/Twitter';
    icon = '🐦';
    const authorEl = document.querySelector('[data-testid="User-Name"]');
    creator = authorEl ? authorEl.textContent : 'X User';
  } else if (pageHost.includes('reddit.com')) {
    contentType = 'Reddit';
    icon = '💬';
    const subredditEl = document.querySelector('a[data-testid="community-name"]');
    creator = subredditEl ? subredditEl.textContent : 'Reddit';
  } else if (pageHost.includes('medium.com') || document.querySelector('article')) {
    contentType = 'Article';
    icon = '📰';
    const authorEl = document.querySelector('[rel="author"]') || document.querySelector('.author');
    creator = authorEl ? authorEl.textContent.trim() : pageHost;
    const readTimeEl = document.querySelector('[data-testid="storyReadTime"]') || document.querySelector('.reading-time');
    duration = readTimeEl ? readTimeEl.textContent : '5-10 min read';
  }
  
  // Get current IST time
  const now = new Date();
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const timeStr = istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateStr = istTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  // Create entry
  const entry = `
${icon} **${contentType}** | ${timeStr} IST
- **Title**: ${pageTitle}
- **Creator/Source**: ${creator}
- **Duration/Reading Time**: ${duration}
- **Link**: [Visit Here](${pageUrl})
- **Tags**: #to-review

---
`;
  
  // Show preview modal
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:20px;right:20px;width:400px;background:white;border:2px solid #24292e;border-radius:8px;padding:20px;z-index:999999;box-shadow:0 8px 24px rgba(0,0,0,0.3);font-family:system-ui,-apple-system,sans-serif';
  
  modal.innerHTML = `
    <h3 style="margin:0 0 15px 0;color:#24292e">📚 Log to whatIconsume?</h3>
    <div style="background:#f6f8fa;padding:12px;border-radius:4px;margin-bottom:15px;max-height:200px;overflow-y:auto;font-size:12px;white-space:pre-wrap">${entry}</div>
    <div style="display:flex;gap:10px">
      <button id="logBtn" style="flex:1;background:#2ea44f;color:white;border:none;padding:10px;border-radius:6px;cursor:pointer;font-weight:600">✓ Log It</button>
      <button id="copyBtn" style="flex:1;background:#0969da;color:white;border:none;padding:10px;border-radius:6px;cursor:pointer;font-weight:600">📋 Copy</button>
      <button id="cancelBtn" style="background:#d1d5da;color:#24292e;border:none;padding:10px 15px;border-radius:6px;cursor:pointer">✕</button>
    </div>
    <div id="status" style="margin-top:10px;font-size:12px;color:#666"></div>
  `;
  
  document.body.appendChild(modal);
  
  // Copy to clipboard function
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(entry);
    document.getElementById('status').innerHTML = '✓ Copied! Paste it into CONSUMPTION_LOG.md';
    document.getElementById('status').style.color = '#2ea44f';
    setTimeout(() => modal.remove(), 2000);
  };
  
  // Cancel button
  document.getElementById('cancelBtn').onclick = () => modal.remove();
  
  // Log button (requires GitHub token)
  document.getElementById('logBtn').onclick = () => {
    document.getElementById('status').innerHTML = '⚠️ Setup required: Add your GitHub token to the bookmarklet code, or click "Copy" instead';
    document.getElementById('status').style.color = '#d29922';
  };
  
})();
