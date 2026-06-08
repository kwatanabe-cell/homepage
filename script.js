const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const globalNav = document.getElementById('globalNav');
const savedTheme = localStorage.getItem('kst-theme');

if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
}

if (header) {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.type = 'button';
  themeToggle.setAttribute('aria-label', 'テーマを切り替える');
  themeToggle.setAttribute('aria-pressed', String(document.body.classList.contains('light-theme')));
  themeToggle.innerHTML = '<span class="theme-dot"></span><span class="theme-label">White</span>';
  header.appendChild(themeToggle);

  const syncThemeLabel = () => {
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.querySelector('.theme-label').textContent = isLight ? 'Black' : 'White';
  };

  syncThemeLabel();

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('kst-theme', isLight ? 'light' : 'dark');
    syncThemeLabel();
  });
}

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });
}

if (navToggle && globalNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '送信処理は未接続です';
    setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
}
