
(function(){
    emailjs.init("u1XLHV7CRKz9x4IFJ");  // Replace with your actual public key
})();

document.getElementById("contact-form").addEventListener("submit", function(event){
event.preventDefault();

let form = document.getElementById("contact-form");

let params = {
    receiver: "officewithnoroof@gmail.com",
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
};

emailjs.send("service_8496cer", "template_jg4tvqi", params)
.then(response => {
    Swal.fire({
        title: "Office with no roof",
        text: "Mail sent successfully!",
        icon: "success",
        confirmButtonText: "OK"
    });
       form.reset();  // Clear the form inputs after sending
})
.catch(error => {
    Swal.fire({
        title: "Office with no roof",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonText: "OK"
    });
});
});
