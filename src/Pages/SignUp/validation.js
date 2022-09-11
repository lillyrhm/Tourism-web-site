export default function validation(values) {
    let errors = {};
    if (!values.fullName) {
        errors.fullName = 'FullName Is required';
    }

    if (!values.email) {
        errors.email = ' email Is required ';
    } else if (!/\s+@\s+\.\s+/.test(values.email)) {
        errors.email = 'Invalid Email ';
    }

    if (!values.password) {
        errors.password = 'password Is required'
    } else if (values.password.length < 5) {
        errors.password = ' Password is more than 5 character '
    }

    return (
        errors
    );
}
