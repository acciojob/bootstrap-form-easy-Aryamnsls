//your code here
// Bootstrap form validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('intern-form');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
});
