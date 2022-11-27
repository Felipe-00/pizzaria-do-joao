function logar() {

    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (email == "felipe@gmail.com" && senha == "123") {
        location.href = "index.html";
    }
    else {
        alert('Email ou senha incorretos!')
    }
}