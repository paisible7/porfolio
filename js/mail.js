function sendMail() {
    (function () {
        emailjs.init('R31gjkmJSyQEj-C3T');
    })();

    var serviceID = 'service_ljg3pyd';
    var templateID = 'template_nqzm3ib';
    var autoReplyTemplateID = 'template_6hqzhrn';

    var params = {
        sendername: document.getElementById('name').value,
        senderemail: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: 'MESSAGE DE CONTACT'
    }

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            emailjs.send(serviceID, autoReplyTemplateID, {
                sendername: params.sendername,
                senderemail: params.senderemail,
                message: params.message,
            })
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Succès!',
                        text: 'Merci, ' + params['sendername'] + '! Votre message a été envoyé avec succès.',
                        confirmButtonText: 'OK'
                    });
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erreur !',
                        text: "Une erreur est survenue lors de l'envoi de la réponse",
                        confirmButtonText: 'OK'
                    });
                });
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Erreur !',
                text: "Une erreur est survenue lors de l'envoi.",
                confirmButtonText: 'OK'
            });
        });
}