import validateString from "./validateString";
import validateDigit from "./validateDigit";

const validate = (e, stringLength) => {
    if (stringLength < 6) {
        if (stringLength < 1) {
            validateString(e)
        } else {
            validateDigit(e)
        }
    } else {
        e.preventDefault();
    }
}

export default validate