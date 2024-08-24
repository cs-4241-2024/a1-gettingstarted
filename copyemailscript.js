function copyemail() {
    const email="cgwelcher@wpi.edu";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard: " + email);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert("Failed to copy email.");
    });
}