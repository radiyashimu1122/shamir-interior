document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
}

  function toggleContent(postNumber) {
      const content = document.getElementById(`more-content-${postNumber}`);
      const button = document.getElementById(`read-more-${postNumber}`);
      
      if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          button.textContent = 'Read Less';
      } else {
          content.classList.add('hidden');
          button.textContent = 'Read More';
      }
  }

