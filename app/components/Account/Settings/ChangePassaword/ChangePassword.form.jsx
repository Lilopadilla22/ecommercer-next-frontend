import * as Yup from 'yup'

export function initialValues() {
    return {
        password: '',
        repeatPassword: ''
    }
}

export function validateSchema() {
    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], "Las Contraseñas deben ser iguales")
    })
}