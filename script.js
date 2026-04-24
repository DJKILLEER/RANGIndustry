
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
  let name = document.getElementById("cName").value;
  let email = document.getElementById("cEmail").value;
  let phone = document.getElementById("cPhone").value;
  let product = document.getElementById("cProduct").value;
  let message = document.getElementById("cMsg").value;

  if(!name || !email || !phone){
    alert("Please fill all required fields");
    return;
  }

  let whatsappMessage = 
`New Inquiry Received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${product}
Message: ${message}`;

  let encodedMessage = encodeURIComponent(whatsappMessage);

  // Replace with your WhatsApp number (with country code, no +)
  let phoneNumber = "917359826325";

  let url = `https://wa.me/${7359826325}?text=${encodedMessage}`;

  window.open(url, "_blank");
}

// Set active nav link on load
document.querySelectorAll('.nav-link')[0].classList.add('active');
