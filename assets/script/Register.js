document.querySelector('.register-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const fullname = document.querySelector('#fullname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const phoneNumber = document.querySelector('#phone').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    axios.post('https://localhost:7049/api/Users', {
        fullname: fullname,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
    })
    .then(function (response) {
        alert('User registered successfully!');
        document.querySelector('#fullname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#confirmPassword').value = '';
        document.querySelector('#phone').value = '';
    })
    .catch(function (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
    });
});
