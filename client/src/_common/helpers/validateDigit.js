const validate = (e) => {
    var ASCIICode = e.which ? e.which : e.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        e.preventDefault();
    return true;
}

export default validate
