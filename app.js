(() => {
  'use strict';

  const LANGUAGE_KEY = 'te-amo-language';
  const THEME_KEY = 'te-amo-theme';
  const CUSTOM_KEY = 'te-amo-custom-theme';
  const PHRASE_KEY = 'te-amo-phrase-index';
  const TRACK_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  const messages = {
    pt: {
      yourSpace: 'SEU ESPAÇO', libraryNav: 'Biblioteca', surprise: 'Surpreenda-me', yourLibrary: 'SUA BIBLIOTECA',
      catalogLabel: 'Catálogo Suno', catalogCopy: 'Faixas publicadas junto com o aplicativo.', onlineCatalog: 'Catálogo disponível em todos os dispositivos',
      madeForYou: 'UM CANTINHO FEITO PARA VOCÊ', welcomeTitle: 'Sua trilha, seu mundo.', language: 'Idioma',
      littleNote: 'UM BILHETE PARA VOCÊ', phraseCaption: 'Pequenos lembretes, sempre de coração.', officialPlayer: 'PLAYER OFICIAL', yourMoment: 'Seu momento', yourSoundtrack: 'SUA TRILHA SONORA',
      chooseTrack: 'Escolha uma música', embedHint: 'O player oficial do Suno aparecerá aqui.', openOnSuno: 'Abrir no Suno', sunoCredit: 'Reprodução incorporada pelo player oficial do',
      trackCount: (n) => `${n} ${n === 1 ? 'faixa' : 'faixas'}`, sourceSuno: 'Player oficial Suno', frameTitle: (title) => `Player oficial do Suno: ${title}`,
      makeItYours: 'DO SEU JEITO', themeStudio: 'Estúdio de temas', cuteTheme: 'Fofo pastel', cuteDesc: 'Doce e aconchegante', gothicTheme: 'Tenebroso', gothicDesc: 'Marrom, sombras e gotas', cyberTheme: 'Country cyberpunk', cyberDesc: 'Velho oeste encontra neon', customTheme: 'Meu tema', customDesc: 'Crie sua combinação',
      studioHint: 'Ajustes organizados que atualizam as cores e formas da página em tempo real.', pageColor: 'Fundo', accentColor: 'Cor principal', cardColor: 'Cartões', roundness: 'Arredondamento', typeface: 'Tipografia', fontRounded: 'Arredondada', fontEditorial: 'Editorial', fontTech: 'Tecnológica', saveTheme: 'Salvar meu tema',
      footerLine: 'Feito com carinho, para acompanhar o que você sente.', themeSaved: 'Seu tema foi salvo neste dispositivo.', nextSurprise: 'Uma frase escolhida para você.',
      phrases: [
        'Eu te amo.', 'Amo você.', 'Amo estar com você.', 'Amo ter você por perto.', 'Você faz bem.', 'Você faz falta.', 'Você faz diferença.', 'Você é especial.', 'Você é importante.', 'Você faz tudo valer a pena.', 'Gosto de nós.', 'Gosto de estar com você.', 'Gosto quando é você.', 'Gosto de ter você por perto.', 'Quero você por perto.', 'Quero continuar com você.', 'Quero viver isso com você.', 'Quero mais de nós.', 'Quero ficar com você.', 'Quero você na minha vida.', 'Você me faz sorrir.', 'Você me faz bem.', 'Você traz paz.', 'Você traz felicidade.', 'Você deixa tudo melhor.', 'Você faz os dias melhores.', 'Você torna tudo especial.', 'Você faz o coração sorrir.', 'Pensar em você faz sorrir.', 'Estar com você é bom demais.', 'Estar com você faz sentido.', 'Ficar com você parece certo.', 'Eu escolheria você.', 'Eu escolheria nós.', 'Eu escolheria ficar.', 'Eu continuo escolhendo você.', 'Eu quero continuar escolhendo você.', 'Você é uma parte importante da minha vida.', 'Você ocupa um espaço especial em mim.', 'Você está nos meus melhores pensamentos.', 'Você está nos meus melhores momentos.', 'O coração fica feliz com você.', 'O coração reconhece você.', 'Tem algo especial em nós.', 'Existe amor aqui.', 'Existe algo muito bonito entre nós.', 'É bom amar você.', 'É bom ter você na vida.', 'Se for com você, eu quero.', 'Entre tantas possibilidades, ainda escolho você.'
      ]
    },
    en: {
      yourSpace: 'YOUR SPACE', libraryNav: 'Library', surprise: 'Surprise me', yourLibrary: 'YOUR LIBRARY',
      catalogLabel: 'Suno catalog', catalogCopy: 'Tracks published with the app.', onlineCatalog: 'Catalog available on every device',
      madeForYou: 'A LITTLE SPACE JUST FOR YOU', welcomeTitle: 'Your soundtrack, your world.', language: 'Language',
      littleNote: 'A LITTLE NOTE FOR YOU', phraseCaption: 'Small reminders, always from the heart.', officialPlayer: 'OFFICIAL PLAYER', yourMoment: 'Your moment', yourSoundtrack: 'YOUR SOUNDTRACK',
      chooseTrack: 'Choose a song', embedHint: 'The official Suno player will appear here.', openOnSuno: 'Open in Suno', sunoCredit: 'Embedded playback from the official',
      trackCount: (n) => `${n} ${n === 1 ? 'track' : 'tracks'}`, sourceSuno: 'Official Suno player', frameTitle: (title) => `Official Suno player: ${title}`,
      makeItYours: 'MAKE IT YOURS', themeStudio: 'Theme studio', cuteTheme: 'Soft pastel', cuteDesc: 'Sweet and cozy', gothicTheme: 'Gothic', gothicDesc: 'Brown, shadows and drips', cyberTheme: 'Country cyberpunk', cyberDesc: 'The Wild West meets neon', customTheme: 'My theme', customDesc: 'Make your own mix',
      studioHint: 'Simple controls update the page colors and shapes in real time.', pageColor: 'Background', accentColor: 'Accent', cardColor: 'Cards', roundness: 'Roundness', typeface: 'Typeface', fontRounded: 'Rounded', fontEditorial: 'Editorial', fontTech: 'Tech', saveTheme: 'Save my theme',
      footerLine: 'Made with care to accompany whatever you feel.', themeSaved: 'Your theme was saved on this device.', nextSurprise: 'A little note picked just for you.',
      phrases: [
        'I love you.', 'I adore you.', 'I love being with you.', 'I love having you close.', 'You do me good.', 'I miss you.', 'You make a difference.', 'You are special.', 'You matter.', 'You make it all worthwhile.', 'I love us.', 'I love being with you.', 'I like it when it’s you.', 'I love having you close.', 'I want you near.', 'I want to keep being with you.', 'I want to live this with you.', 'I want more of us.', 'I want to stay with you.', 'I want you in my life.', 'You make me smile.', 'You make me feel good.', 'You bring peace.', 'You bring happiness.', 'You make everything better.', 'You make the days brighter.', 'You make everything special.', 'You make my heart smile.', 'Thinking of you makes me smile.', 'Being with you feels so good.', 'Being with you makes sense.', 'Staying with you feels right.', 'I would choose you.', 'I would choose us.', 'I would choose to stay.', 'I keep choosing you.', 'I want to keep choosing you.', 'You are an important part of my life.', 'You have a special place in me.', 'You are in my happiest thoughts.', 'You are in my best moments.', 'My heart is happy with you.', 'My heart knows you.', 'There is something special about us.', 'There is love here.', 'There is something beautiful between us.', 'It feels good to love you.', 'It feels good to have you in my life.', 'If it’s with you, I want it.', 'With all the possibilities, I still choose you.'
      ]
    },
    ja: {
      yourSpace: 'あなたのスペース', libraryNav: 'ライブラリ', surprise: 'サプライズ', yourLibrary: 'あなたのライブラリ',
      catalogLabel: 'Suno カタログ', catalogCopy: 'アプリと一緒に公開された曲です。', onlineCatalog: 'すべての端末で利用できるカタログ',
      madeForYou: 'あなたのための小さな場所', welcomeTitle: 'あなたの音楽、あなたの世界。', language: '言語',
      littleNote: 'あなたへのメッセージ', phraseCaption: '心からの、小さなメッセージ。', officialPlayer: '公式プレイヤー', yourMoment: 'あなたの時間', yourSoundtrack: 'あなたのサウンドトラック',
      chooseTrack: '曲を選んでください', embedHint: 'ここにSuno公式プレイヤーが表示されます。', openOnSuno: 'Sunoで開く', sunoCredit: '公式プレイヤーで再生：',
      trackCount: (n) => `${n} 曲`, sourceSuno: 'Suno公式プレイヤー', frameTitle: (title) => `Suno公式プレイヤー：${title}`,
      makeItYours: 'あなたらしく', themeStudio: 'テーマスタジオ', cuteTheme: 'パステル', cuteDesc: '優しくて居心地のよい', gothicTheme: 'ダーク', gothicDesc: 'ブラウン、影、したたる雫', cyberTheme: 'カントリー・サイバーパンク', cyberDesc: '西部劇とネオンの融合', customTheme: 'マイテーマ', customDesc: '好きな色で作成',
      studioHint: '色や形を調整すると、ページにすぐ反映されます。', pageColor: '背景', accentColor: 'アクセント', cardColor: 'カード', roundness: '角の丸み', typeface: '書体', fontRounded: '丸み', fontEditorial: 'エディトリアル', fontTech: 'テクノロジー', saveTheme: 'テーマを保存',
      footerLine: 'あなたの気持ちに寄り添う音楽を、心を込めて。', themeSaved: 'テーマをこの端末に保存しました。', nextSurprise: 'あなたに選んだ、小さなメッセージ。',
      phrases: [
        '愛しています。', 'あなたが大好きです。', 'あなたと一緒にいるのが好きです。', 'そばにいてくれるのが嬉しいです。', 'あなたがいると元気になります。', 'あなたがいなくて寂しいです。', 'あなたはかけがえのない存在です。', 'あなたは特別です。', 'あなたは大切な人です。', 'あなたのおかげで頑張れます。', '二人でいるのが好きです。', 'あなたと一緒にいるのが好きです。', 'あなたがいいと思う瞬間があります。', 'そばにいてくれるのが好きです。', 'そばにいてほしいです。', 'これからも一緒にいたいです。', 'あなたとこの時間を生きたいです。', '二人の時間をもっと過ごしたいです。', 'あなたと一緒にいたいです。', 'あなたに人生のそばにいてほしいです。', 'あなたは私を笑顔にします。', 'あなたがいると心地よいです。', 'あなたは安らぎをくれます。', 'あなたは幸せをくれます。', 'あなたはすべてを素敵にします。', 'あなたがいると毎日が明るくなります。', 'あなたはすべてを特別にします。', 'あなたは心を笑顔にします。', 'あなたを思うと笑顔になります。', 'あなたといると最高に幸せです。', 'あなたといるとしっくりきます。', 'あなたと一緒にいるのが自然に思えます。', 'あなたを選びます。', '二人でいることを選びます。', 'ここにいることを選びます。', '今もあなたを選び続けています。', 'これからもあなたを選び続けたいです。', 'あなたは私の人生の大切な一部です。', 'あなたは私の心の特別な場所にいます。', 'あなたは私の素敵な思い出の中にいます。', 'あなたは私の最高の瞬間にいます。', 'あなたがいると心が幸せです。', '心があなたのことを知っています。', '私たちには特別な何かがあります。', 'ここには愛があります。', '私たちの間には美しいものがあります。', 'あなたを愛せて幸せです。', 'あなたが人生にいてくれて嬉しいです。', 'あなたとなら、そうしたいです。', 'たくさんの可能性の中から、やっぱりあなたを選びます。'
      ]
    }
  };

  const byId = (id) => document.getElementById(id);
  const rawCatalog = Array.isArray(window.SUNO_CATALOG) ? window.SUNO_CATALOG : [];
  const seenIds = new Set();
  const catalog = rawCatalog.filter((track) => {
    if (!track || !TRACK_ID_PATTERN.test(track.id) || seenIds.has(track.id)) return false;
    if (track.embedUrl !== `https://suno.com/embed/${track.id}` || track.externalUrl !== `https://suno.com/song/${track.id}`) return false;
    seenIds.add(track.id);
    return true;
  });
  const savedPhraseIndex = Number.parseInt(localStorage.getItem(PHRASE_KEY) ?? '-1', 10);
  const state = {
    language: messages[localStorage.getItem(LANGUAGE_KEY)] ? localStorage.getItem(LANGUAGE_KEY) : 'pt',
    theme: localStorage.getItem(THEME_KEY) || 'cute',
    currentId: null,
    phraseIndex: Number.isInteger(savedPhraseIndex) && savedPhraseIndex >= 0 ? savedPhraseIndex % messages.pt.phrases.length : -1,
    lastPhraseTime: 0,
    toastTimer: null
  };

  function tr(key, ...args) {
    const value = messages[state.language]?.[key] ?? messages.pt[key] ?? key;
    return typeof value === 'function' ? value(...args) : value;
  }

  function titleFor(track) {
    const index = catalog.indexOf(track) + 1;
    if (state.language === 'en') return `Track ${index}`;
    if (state.language === 'ja') return `音楽 ${index}`;
    return track.title || `Música ${index}`;
  }

  function renderPhrase() {
    const text = messages[state.language].phrases[state.phraseIndex] || messages.pt.phrases[state.phraseIndex];
    const phrase = byId('lovePhrase');
    phrase.textContent = text;
    phrase.style.animation = 'none';
    void phrase.offsetWidth;
    phrase.style.animation = '';
  }

  function nextPhrase() {
    state.phraseIndex = (state.phraseIndex + 1) % messages.pt.phrases.length;
    localStorage.setItem(PHRASE_KEY, String(state.phraseIndex));
    renderPhrase();
  }

  function showToast(text) {
    const toast = byId('toast');
    toast.textContent = text;
    toast.classList.add('visible');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
  }

  function renderTracks() {
    const list = byId('trackList');
    list.replaceChildren();
    byId('trackCount').textContent = tr('trackCount', catalog.length);
    catalog.forEach((track, index) => {
      const title = titleFor(track);
      const row = document.createElement('button');
      row.type = 'button';
      row.className = `track-row suno-track-row${track.id === state.currentId ? ' is-active' : ''}`;
      row.dataset.trackId = track.id;
      row.setAttribute('aria-label', title);
      row.setAttribute('aria-current', String(track.id === state.currentId));

      const number = document.createElement('span');
      number.className = 'track-thumb';
      number.textContent = String(index + 1).padStart(2, '0');
      number.setAttribute('aria-hidden', 'true');

      const detail = document.createElement('span');
      const name = document.createElement('span');
      name.className = 'track-name';
      name.textContent = title;
      const source = document.createElement('span');
      source.className = 'track-sub';
      source.textContent = tr('sourceSuno');
      detail.append(name, source);

      const indicator = document.createElement('span');
      indicator.className = 'track-play';
      indicator.textContent = track.id === state.currentId ? '♫' : '▶';
      indicator.setAttribute('aria-hidden', 'true');
      row.append(number, detail, indicator);
      row.addEventListener('click', () => selectTrack(track.id));
      list.append(row);
    });
  }

  function selectTrack(id) {
    const track = catalog.find((item) => item.id === id);
    if (!track) return;
    state.currentId = id;
    const title = titleFor(track);
    byId('nowTitle').textContent = title;
    byId('nowSubtitle').textContent = tr('sourceSuno');
    byId('sunoTrackNumber').textContent = String(catalog.indexOf(track) + 1).padStart(2, '0');

    const externalLink = byId('externalLink');
    externalLink.href = track.externalUrl;
    externalLink.hidden = false;

    const frame = document.createElement('iframe');
    frame.className = 'suno-embed';
    frame.id = 'sunoIframe';
    frame.src = track.embedUrl;
    frame.title = tr('frameTitle', title);
    frame.loading = 'lazy';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; web-share';
    frame.setAttribute('allowfullscreen', '');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    byId('sunoEmbedContainer').replaceChildren(frame);
    renderTracks();
  }

  function setLanguage(language) {
    if (!messages[language]) return;
    state.language = language;
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    byId('languageSelect').value = language;
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = tr(element.dataset.i18n); });

    const themeNames = { cute: `♡ ${tr('cuteTheme')}`, gothic: `☾ ${tr('gothicTheme')}`, cyber: `✦ ${tr('cyberTheme')}`, custom: `✿ ${tr('customTheme')}` };
    Array.from(byId('themeSelect').options).forEach((option) => { option.textContent = themeNames[option.value]; });
    byId('trackList').setAttribute('aria-label', tr('yourLibrary'));
    byId('trackCount').textContent = tr('trackCount', catalog.length);
    renderTracks();
    if (state.currentId) {
      const current = catalog.find((track) => track.id === state.currentId);
      if (current) {
        byId('nowTitle').textContent = titleFor(current);
        byId('nowSubtitle').textContent = tr('sourceSuno');
        const frame = byId('sunoIframe');
        if (frame) frame.title = tr('frameTitle', titleFor(current));
      }
    }
    if (state.phraseIndex < 0) nextPhrase(); else renderPhrase();
  }

  const defaultCustom = { page: '#fff5f7', accent: '#b55272', card: '#ffffff', radius: 22, font: 'rounded' };
  const customFonts = {
    rounded: { body: "'Trebuchet MS', 'Segoe UI', sans-serif", display: "'Georgia', 'Times New Roman', serif" },
    editorial: { body: "'Palatino Linotype', 'Book Antiqua', Georgia, serif", display: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" },
    tech: { body: "'Bahnschrift', 'Arial Narrow', Arial, sans-serif", display: "'Bahnschrift', 'Arial Narrow', 'Segoe UI', sans-serif" }
  };

  function rgbFromHex(hex) {
    const value = /^#[0-9a-f]{6}$/i.test(hex) ? hex.slice(1) : 'ffffff';
    return [0, 2, 4].map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255);
  }
  function luminance(hex) {
    const channels = rgbFromHex(hex).map((channel) => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  }
  function contrastRatio(first, second) {
    const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
    return (values[0] + .05) / (values[1] + .05);
  }
  function readableForeground(background) {
    const dark = '#30232b';
    return contrastRatio(background, '#ffffff') >= contrastRatio(background, dark) ? '#ffffff' : dark;
  }
  function getCustom() {
    try { return { ...defaultCustom, ...JSON.parse(localStorage.getItem(CUSTOM_KEY) || '{}') }; }
    catch { return { ...defaultCustom }; }
  }
  function setCustomControls(custom) {
    byId('bgColor').value = custom.page;
    byId('accentColor').value = custom.accent;
    byId('cardColor').value = custom.card;
    byId('roundness').value = custom.radius;
    byId('themeFont').value = customFonts[custom.font] ? custom.font : 'rounded';
    byId('roundnessValue').value = `${custom.radius}px`;
    byId('roundnessValue').textContent = `${custom.radius}px`;
  }
  function applyCustom() {
    const font = customFonts[byId('themeFont').value] ? byId('themeFont').value : 'rounded';
    const custom = { page: byId('bgColor').value, accent: byId('accentColor').value, card: byId('cardColor').value, radius: Number(byId('roundness').value), font };
    const body = document.body;
    body.style.setProperty('--custom-page', custom.page);
    body.style.setProperty('--custom-accent', custom.accent);
    body.style.setProperty('--custom-card', custom.card);
    body.style.setProperty('--custom-radius', `${custom.radius}px`);
    body.style.setProperty('--user-font', customFonts[font].body);
    body.style.setProperty('--user-display', customFonts[font].display);
    body.style.setProperty('--custom-accent-dark', contrastRatio(custom.accent, custom.card) >= 4.5 ? custom.accent : readableForeground(custom.card));
    body.style.setProperty('--custom-button-ink', readableForeground(custom.accent));
    byId('roundnessValue').value = `${custom.radius}px`;
    byId('roundnessValue').textContent = `${custom.radius}px`;
    return custom;
  }
  function setTheme(theme, persist = true) {
    if (!['cute', 'gothic', 'cyber', 'custom'].includes(theme)) theme = 'cute';
    state.theme = theme;
    document.body.dataset.theme = theme;
    document.documentElement.dataset.theme = theme;
    byId('themeSelect').value = theme;
    document.querySelectorAll('[data-theme-choice]').forEach((button) => {
      const selected = button.dataset.themeChoice === theme;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    if (theme === 'custom') applyCustom();
    const themeColors = { cute: '#fff9f6', gothic: '#241d1b', cyber: '#171e1c', custom: byId('bgColor').value };
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColors[theme]);
    if (persist) localStorage.setItem(THEME_KEY, theme);
  }

  function wireEvents() {
    byId('languageSelect').addEventListener('change', (event) => setLanguage(event.target.value));
    byId('themeSelect').addEventListener('change', (event) => setTheme(event.target.value));
    document.querySelectorAll('[data-theme-choice]').forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.themeChoice)));
    byId('studioToggle').addEventListener('click', () => {
      const controls = byId('studioControls');
      const expanded = controls.hidden;
      controls.hidden = !expanded;
      byId('studioToggle').textContent = expanded ? '−' : '＋';
      byId('studioToggle').setAttribute('aria-expanded', String(expanded));
      if (expanded) { setCustomControls(getCustom()); setTheme('custom'); }
    });
    ['bgColor', 'accentColor', 'cardColor', 'roundness'].forEach((id) => byId(id).addEventListener('input', () => { setTheme('custom', false); applyCustom(); }));
    byId('themeFont').addEventListener('change', () => { setTheme('custom', false); applyCustom(); });
    byId('saveCustomTheme').addEventListener('click', () => {
      const custom = applyCustom();
      localStorage.setItem(CUSTOM_KEY, JSON.stringify(custom));
      setTheme('custom');
      showToast(tr('themeSaved'));
    });
    byId('surpriseButton').addEventListener('click', () => { nextPhrase(); showToast(tr('nextSurprise')); });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('button, select, a')) return;
      if (event.target.closest('#surpriseButton')) return;
      const now = Date.now();
      if (now - state.lastPhraseTime < 1800) return;
      state.lastPhraseTime = now;
      nextPhrase();
    });
    document.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('button')) {
        const now = Date.now();
        if (now - state.lastPhraseTime >= 1800) { state.lastPhraseTime = now; nextPhrase(); }
      }
    });
  }

  function init() {
    setLanguage(state.language);
    setCustomControls(getCustom());
    setTheme(state.theme, false);
    wireEvents();
    if (catalog.length) selectTrack(catalog[0].id);
  }

  init();
})();
