document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  const copyBtn = document.getElementById('copyBtn');
  const bibtex = document.getElementById('bibtex');
  if (copyBtn && bibtex) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bibtex.textContent);
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        setTimeout(() => { copyBtn.innerHTML = original; }, 1600);
      } catch (e) {
        // clipboard API unavailable — no-op
      }
    });
  }
});
