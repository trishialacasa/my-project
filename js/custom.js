const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    if(!form.checkValidity()){

        event.preventDefault();
        event.stopPropagation();

    } else {

        event.preventDefault();
        alert("Form submitted successfully!");

    }

    form.classList.add("was-validated");

});