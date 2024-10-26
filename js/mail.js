function sendMail() {
    (function () {
        emailjs.init('R31gjkmJSyQEj-C3T');
    })();

    var serviceID = 'service_ljg3pyd';
    var templateID = 'template_nqzm3ib';

    var params = {
        sendername: document.getElementById('name').value,
        senderemail: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: "MESSAGE DE CONTACT"
    }

    emailjs.send(serviceID, templateID, params, this)
    .then( res => {
        alert('Merci, ' + params['sendername']  + ' ! Votre message a été envoyé avec succès.')
    })

    .catch()
}