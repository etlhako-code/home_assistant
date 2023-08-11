const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(button => {
    const indicator = button.nextElementSibling.nextElementSibling;

    button.addEventListener('click', () => {
      indicator.classList.toggle('active');
    });
  });