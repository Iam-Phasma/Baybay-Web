// Alpha scramble animation
// ===== THEME TOGGLE =====
(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem('baybay-theme');
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  function getEffectiveTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() {
      btn.setAttribute('data-current', getEffectiveTheme());
    }

    sync();

    btn.addEventListener('click', function () {
      var next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('baybay-theme', next);
      sync();
    });

    // Also react if OS preference changes while page is open and no explicit choice
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!localStorage.getItem('baybay-theme')) sync();
    });
  });
}());

// ===== SCREENSHOT PEEK CAROUSEL =====
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('screenshotCarousel');
  if (!carousel) return;

  var items = Array.prototype.slice.call(carousel.querySelectorAll('.carousel-item'));
  if (items.length < 2) return;

  function getActiveIndex() {
    var activeIndex = items.findIndex(function (item) {
      return item.classList.contains('active');
    });

    return activeIndex === -1 ? 0 : activeIndex;
  }

  function syncPeekClasses() {
    var activeIndex = getActiveIndex();
    var prevIndex = (activeIndex - 1 + items.length) % items.length;
    var nextIndex = (activeIndex + 1) % items.length;

    items.forEach(function (item, index) {
      item.classList.remove('peek-prev', 'peek-active', 'peek-next', 'peek-hidden');

      if (index === activeIndex) {
        item.classList.add('peek-active');
      } else if (index === prevIndex) {
        item.classList.add('peek-prev');
      } else if (index === nextIndex) {
        item.classList.add('peek-next');
      } else {
        item.classList.add('peek-hidden');
      }
    });
  }

  syncPeekClasses();
  carousel.addEventListener('slid.bs.carousel', syncPeekClasses);
});

// ===== ALPHA SCRAMBLE ANIMATION =====
document.addEventListener("DOMContentLoaded", function () {
  const alphaAnimation = document.getElementById("alphaAnimation");
  const word = "Current Release";
  let counter = 0;
  let scramble = setInterval(() => {
    let randomText = Math.random().toString(36).substring(7).toUpperCase();
    alphaAnimation.textContent =
      word.substring(0, counter) +
      randomText.substring(0, word.length - counter);
  }, 50);

  let reveal = setInterval(() => {
    if (counter < word.length) {
      counter++;
    } else {
      clearInterval(scramble);
      clearInterval(reveal);
    }
  }, 70);
});
