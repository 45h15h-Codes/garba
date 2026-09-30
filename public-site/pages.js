(() => {
  if (document.body?.dataset.page !== 'install') return;

  const ua = navigator.userAgent || '';
  const isIPadDesktopMode = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const platformHint = navigator.userAgentData?.platform || '';
  const platform = /iPhone|iPad|iPod/i.test(ua) || isIPadDesktopMode || /iOS/i.test(platformHint)
    ? 'ios'
    : /Android/i.test(ua) || /Android/i.test(platformHint)
      ? 'android'
      : 'desktop';
  const browser = navigator.brave || /Brave/i.test(ua)
    ? 'brave'
    : /Edg(e|A|iOS)?\//i.test(ua)
      ? 'edge'
      : /CriOS/i.test(ua)
        ? 'chrome-ios'
        : /Chrome\//i.test(ua)
          ? 'chrome'
          : /Safari\//i.test(ua) && !/Chrome\//i.test(ua)
            ? 'safari'
            : 'other';

  document.documentElement.dataset.platform = platform;
  document.documentElement.dataset.browser = browser;

  const readout = document.getElementById('platformReadout');
  const title = document.getElementById('platformTitle');
  const copy = document.getElementById('platformCopy');
  const badge = document.getElementById('platformBadge');
  const tabs = Array.from(document.querySelectorAll('[data-platform-tab]'));
  const cards = Array.from(document.querySelectorAll('.device-card[data-device]'));
  const guidance = {
    ios: {
      title: 'iPhone or iPad steps',
      copy: 'Use Brave for background listening. Use Safari to add PlayGarba to your Home Screen.',
      badge: 'Suggested for iPhone / iPad',
    },
    android: {
      title: 'Android steps',
      copy: 'Use Brave to install PlayGarba and listen with the screen off.',
      badge: 'Suggested for Android',
    },
    desktop: {
      title: 'Computer steps',
      copy: 'Choose the install option in Chrome or Edge, or Add to Dock in Safari on Mac.',
      badge: 'Suggested for computer',
    },
  };

  function selectPlatform(kind, manual) {
    const selected = guidance[kind] ? kind : 'desktop';
    tabs.forEach((tab) => {
      const active = tab.dataset.platformTab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    cards.forEach((card) => {
      const active = card.dataset.device === selected;
      card.hidden = !active;
      card.setAttribute('role', 'tabpanel');
      card.setAttribute('aria-labelledby', `tab-${selected}`);
      card.dataset.recommended = String(active && !manual);
    });
    const message = guidance[selected];
    title.textContent = manual ? `${message.title} selected` : message.title;
    copy.textContent = message.copy;
    badge.textContent = manual ? 'Chosen by you' : message.badge;
    document.documentElement.dataset.platform = selected;
  }

  function deviceForHash() {
    if (!location.hash) return null;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return null; }
    return document.getElementById(id)?.closest('[data-device]')?.dataset.device || null;
  }

  if (readout && title && copy && badge && tabs.length && cards.length) {
    const tablist = document.getElementById('deviceTabs');
    document.documentElement.classList.add('has-device-tabs');
    tablist.hidden = false;
    readout.hidden = false;
    selectPlatform(deviceForHash() || platform, false);
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectPlatform(tab.dataset.platformTab, true));
      tab.addEventListener('keydown', (event) => {
        const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
        const backward = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
        const target = event.key === 'Home' ? 0
          : event.key === 'End' ? tabs.length - 1
            : forward ? (index + 1) % tabs.length
              : backward ? (index + tabs.length - 1) % tabs.length
                : -1;
        if (target < 0) return;
        event.preventDefault();
        tabs[target].focus();
        selectPlatform(tabs[target].dataset.platformTab, true);
      });
    });
    window.addEventListener('hashchange', () => {
      const linkedDevice = deviceForHash();
      if (linkedDevice) selectPlatform(linkedDevice, false);
    });
  }
})();
