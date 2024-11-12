// Include the EmailJS SDK (CDN)
const emailJSScript = document.createElement('script');
emailJSScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(emailJSScript);

emailJSScript.onload = function () {
    emailjs.init("pkXTZ-Pug1-N5CXX5");
    window.onload = function () {
        document.getElementById('Inqiry_form').addEventListener('submit', function (event) {
            event.preventDefault();
            openFormModal()
            //these IDs from the previous steps
            emailjs.sendForm('service_ttby8if', 'template_blomqna', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        });
    }
}



