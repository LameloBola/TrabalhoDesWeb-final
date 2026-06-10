document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';

  document.querySelectorAll('.nav-texts a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = btn.dataset.next;
    });
  });

  document.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = btn.dataset.prev;
    });
  });

  const disabledNote = document.querySelector('.disabled-note');
  if (disabledNote && !disabledNote.textContent.trim()) {
    disabledNote.textContent = 'Login desabilitado temporariamente para este projeto.';
  }
});
