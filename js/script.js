function validateForm() {
        var name = document.getElementById("YourName").value;
        var email = document.getElementById("Email").value;
        var address = document.getElementById("Address").value;
        var city = document.getElementById("City").value;
        var isValid = true;

        // Validasi nama
        if (name.trim() === "") {
            document.getElementById("nameError").innerText = "Nama tidak boleh kosong";
            isValid = false;
        } else {
            document.getElementById("nameError").innerText = "";
        }

        // Validasi email
        if (email.trim() === "") {
            document.getElementById("emailError").innerText = "Email tidak boleh kosong";
            isValid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        // Validasi alamat
        if (address.trim() === "") {
            document.getElementById("addressError").innerText = "Alamat tidak boleh kosong";
            isValid = false;
        } else {
            document.getElementById("addressError").innerText = "";
        }

        // Validasi kota
        if (city === "") {
            document.getElementById("cityError").innerText = "Kebutuhan perlu diisi";
            isValid = false;
        } else {
            document.getElementById("cityError").innerText = "";
        }

        return isValid;
    }

    // Slide Animation

    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}