function validateForm() {
  const name = document.getElementById("name").value.trim;
  const email = document.getElementById("email").value.trim;
  const message = document.getElementById("message").value.trim;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thanks for reaching out! " + name +  "I'll get back to you soon.");
  return false;// Prevent real form submission for demo purposes
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});