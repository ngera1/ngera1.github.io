function showEmail() {
    // based on this Stack Overflow
    // post: https://stackoverflow.com/questions/18429595/how-can-i-obscure-email-addresses-on-websites-to-prevent-spam
    var parts = ["29", "nkg", 64, ".edu", "cornell"];
    document.getElementById("email-secret").textContent = parts[1] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3];
    document.getElementById("email-secret").href = "mailto:" + parts[1] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3];
    $('#email-button').show();
}