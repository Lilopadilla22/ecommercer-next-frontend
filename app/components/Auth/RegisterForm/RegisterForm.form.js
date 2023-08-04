import * as Yup from "yup"


export function initialValue() {
  return {
    email: "",
    username: "",
    name: "",
    password: ""
  }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        name: Yup.string().required(true),
        password: Yup.string().required(true)
    })
}


