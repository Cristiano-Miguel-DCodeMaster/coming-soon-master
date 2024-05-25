document.getElementById('button')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const alertsms = document.querySelector('.alertsms0');
        const error = document.querySelector('.error0');
          if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alertsms.classList.remove('alertsms0');
            alertsms.classList.add('alertsms');
            error.classList.remove('error0');
            error.classList.add('error');
            alertsms.innerHTML = "Please provide a valid email";
        }
    });