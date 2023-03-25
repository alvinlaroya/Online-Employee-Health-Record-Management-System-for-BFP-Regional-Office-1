const validate = (e) => {
    let char = String.fromCharCode(e.keyCode); // Get the character
    if (/^[A-Za-z]+$/.test(char)) return true;
    // Match with regex
    else e.preventDefault(); // If not match, don't add to input text
}

export default validate