
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.textContent.toLowerCase().includes(id) || (id === 'home' && l.textContent.toLowerCase() === 'home')) {
      l.classList.add('active');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function submitForm() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  if (!name || !email) {
    alert('Please fill in your name and email.');
    return;
  }
  document.getElementById('formSuccess').classList.add('show');
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cPhone').value = '';
  document.getElementById('cMsg').value = '';
  document.getElementById('cProduct').value = '';
}

// Set active nav link on load
document.querySelectorAll('.nav-link')[0].classList.add('active');
