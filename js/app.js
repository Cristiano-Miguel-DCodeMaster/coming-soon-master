document.getElementById('button')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const alertsms = document.querySelector('.alertsms0');
        const error = document.querySelector('.error0');
        if (email == []) {
            alertsms.classList.remove('alertsms0');
            alertsms.classList.add('alertsms');
            alertsms.innerHTML = "Please, type your email.";
            error.classList.remove('error0');
            error.classList.add('error');
        } else if (email != []) {
            this.submit();
        }
    });