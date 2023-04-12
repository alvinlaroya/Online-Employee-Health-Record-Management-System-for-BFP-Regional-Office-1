import validateDigit from "./validateDigit";

const validate = (e, len) => {
    if (len < 9) {
        validateDigit(e)
    } else {
        e.preventDefault();
    }
}

export default validate