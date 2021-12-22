import * as yup from 'yup'
let schemas = {
    firstname : yup.string().required('You must enter your firstname').min(3),
    lastname : yup.string().required('You must enter your firstname').min(3),
    email : yup.string().email().required('You must provide your email'),
    phone : yup.string().min(9).max(24).required('You must provide your phone number'),
    password : yup.string().min(8).max(20).required('You must provide your password').matches(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        "Should have at least 8 characters, with one capital letter and one number."
    ),
    confirm_password : yup.string().oneOf([yup.ref('password'), null], 'Password must match')
}
const  {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirm_password
} = schemas

export const registerSchema = yup.object().shape({
    firstname,
    lastname,
    email,
    phone,
    password,
    confirm_password,
})