const form = document.querySelector('form');
const nom = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail() {

    const contenu = `Nom : ${nom.value}
    <br> Email: ${email.value}
    <br> Message : ${message.value}`

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "m.paisible7@gmail.com",
        Password: "2C0086A004B48F7F58BB456348953EA74EB1",
        To: "m.paisible7@gmail.com",
        From: 'm.paisible7@gmail.com',
        Subject: "MESSAGE DE CONTACT",
        Body: contenu
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Terminé !",
                    text: "Message envoyé avec succès",
                    icon: "success"
                });
            }
        }
    );
}

// function checkInput(){
//     const items = document.querySelectorAll()
// }


form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
})