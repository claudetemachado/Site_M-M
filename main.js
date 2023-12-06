document.addEventListener("DOMContentLoaded", function(){
    const loginform = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message-cadastro");

    loginform.addEventListener("submit", function (e) {
        e.preventDefault();
        const password = loginform.password.value;
        const confirpassword = loginform.confirmarPassaword.value;

        if (password === confirpassword) {
            errorMessage.textContent = "Cadastro realizado com sucesso!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Senhas estão diferentes!";
            errorMessage.style.color = "red";
        }
    });
});
