'use client'
import {Form} from 'semantic-ui-react'
import { useFormik } from 'formik'
import {validationSchema, initialValue} from "./RegisterForm.form"

export function RegisterForm() {

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log('formulario enviado')
            console.log({formValue})
        }
    })


    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="ed">
                <Form.Input name="email" type="text" placeholder="Correo Electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
                <Form.Input name="username" type="text" placeholder="Nombre de Usuario" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>
            </Form.Group>

            <Form.Group widths="ed">
                <Form.Input name="name" type="text" placeholder="Nombre y apellido" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
                <Form.Input name="password" type="password" placeholder="contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
            </Form.Group>

            <Form.Button type='submit' fluid loading={formik.isSubmitting}>
                Registrarse
            </Form.Button>
        </Form>
    )
}
