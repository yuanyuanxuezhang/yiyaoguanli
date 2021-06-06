var login1 = document.getElementById('login1');
var useid = document.getElementById("useid");
var password = document.getElementById("password");

login1.onclick = function () {
    // alert(useid.value);
    if (useid.value == 1 && password.value == 1) {
        self.location = 'in.html';
    }
    if (useid.value == 2 && password.value == 2) {
        self.location = 'chuku.html';
    }
    if (useid.value == 3 && password.value == 3) {
        self.location = 'doctor.html';
    }
}