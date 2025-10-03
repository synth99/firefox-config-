// performance tweaks

user_pref("gfx.webrender.all", true);
// GPU RENDERING 
user_pref("layers.acceleration.force-enabled", true);
// HARDWARE ACCELERATION
user_pref("media.hardware-video-decoding.enabled", true);
// VIDEO DECODE
user_pref("network.http.max-connections", 1800);
// MAX CONNECTIONS
user_pref("network.http.max-persistent-connections-per-server", 10);
// MORE CONNCECTION
user_pref("network.dns.disablePrefetch", true);
// REDUCE LOOKUPS
user_pref("network.prefetch-next", false);
// SAVES BANDWIDTH&PREVENT TRACKING
user_pref("browser.sessionstore.interval", 300000);
// Saves session data less often → less disk writes.
user_pref("signon.rememberSignons", false);
// Stops firefox asking for save passwords
user_pref("clipboard.events.enabled", false");
// Stop websites of messing your clipboard
user_pref("network.http.referer.trimmingPolicy", 2);
//Strips sensitive referrer data.


//  Privacy & Security

user_pref("privacy.resistFingerprinting", true);
//ANTI FINGERPRINTING
user_pref("privacy.trackingprotection.enabled", true);
//BLOCK ADS&TRACKERS
user_pref("privacy.firstparty.isolate", true);
//COOKIES ISOLATE PER DOMAIN
user_pref("network.cookie.cookieBehavior", 1);
//BLOCK THIRD PARTY COOKIES
user_pref("geo.enabled", false);
//DISABLE GEO LOCATION
user_pref("dom.battery.enabled", false);
//DISABLE BATTERY INFO
user_pref("media.peerconnection.enabled", false);
//DISABLE WEBRTC
user_pref("network.cookie.lifetimePolicy", 2);
// Auto-delete cookies when Firefox closes.
user_pref("beacon.enabled", false);
// Blocks background “beacon” tracking pings.

// Personal Preferences

user_pref("browser.tabs.closeWindowWithLastTab", false);
//WONT CLOSE LAST TAB
user_pref("middlemouse.paste", false);
//DISABLE MIDDLE MOUSE PASTE
user_pref("findbar.highlightAll", true);
//HIGHLIGHT ALL 
user_pref("ui.key.menuAccessKeyFocuses", false);
//PREVENT ALT IN FOCUS
user_pref("accessibility.force_disabled", 1);
//DISABLE ACCESSIBILITY SERVICES
