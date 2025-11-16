<script>
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки
    
    const { email, password } = form.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Перевірка на порожні поля
    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
    }

    // Формуємо об’єкт даних
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    form.reset(); // очищаємо форму
  });
</script>

