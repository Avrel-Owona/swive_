export interface registerForm {
    firstname : string,
    lastname : string,
    email : string,
    phone : string,
    password : string,
    confirm_password : string,
}

export interface loginForm {
    email : string
    password_min: string
}