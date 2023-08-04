'use client'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { useRouter } from "next/navigation"
import { Auth } from '@/app/api/auth'
import { validationSchema, initialValues } from "./RegisterForm.form"

const authCtrl = new Auth()

export function RegisterForm() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue)
                router.push('/join/sign-in')
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input 
                    name="email" 
                    type="text" 
                    placeholder="Correo Electronico" 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    error={formik.errors.email}
                />
                <Form.Input 
                    name="username" 
                    type="text" 
                    placeholder="Nombre de Usuario" 
                    value={formik.values.username} 
                    onChange={formik.handleChange} 
                    error={formik.errors.username}
                />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input 
                    name="name" 
                    type="text" 
                    placeholder="Nombre y apellido" 
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                    error={formik.errors.name}
                />
                <Form.Input 
                    name="password" 
                    type="password" 
                    placeholder="contraseña" 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    error={formik.errors.password}
                />
            </Form.Group>

            <Form.Button type='submit' fluid loading={formik.isSubmitting}>
                Registrarse
            </Form.Button>
        </Form>
    )
}
