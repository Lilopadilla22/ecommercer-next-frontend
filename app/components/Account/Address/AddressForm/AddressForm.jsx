'use client'
import { useFormik } from "formik"
import { Form } from "semantic-ui-react"
import {initialValues, validationSchema} from '../AddressForm/AddressForm.Form'
import { Address } from "../../../../api"
import { useAuth } from "../../../../hook"

const addresCtrl = new Address()

export default function AddressForm({onClose}) {

    const { user } = useAuth()
    const userId = user.id

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await addresCtrl.create(formValue, userId)
                onClose()
            } catch (error) {
                console.error(error)
            }
        }
    })

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input 
            name='title' 
            placeholder= 'Titulo de la Dirección'
            value={formik.values.title} 
            onChange={formik.handleChange} 
            error={formik.errors.title}
        />

        <Form.Group widths="equal">
            <Form.Input 
                name='name' 
                placeholder='Nombre y Apellido'
                value={formik.values.name} 
                onChange={formik.handleChange} 
                error={formik.errors.name}
            />
            <Form.Input 
                name='address' 
                placeholder='Direccion'
                value={formik.values.address} 
                onChange={formik.handleChange} 
                error={formik.errors.address}                
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input 
                name='state' 
                placeholder='Departamento'
                value={formik.values.state} 
                onChange={formik.handleChange} 
                error={formik.errors.state}   
            />
            <Form.Input 
                name='city' 
                placeholder='Ciudad'
                value={formik.values.city} 
                onChange={formik.handleChange} 
                error={formik.errors.city} 
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input 
                name='postal_code' 
                placeholder='Codigo Postal' 
                value={formik.values.postal_code} 
                onChange={formik.handleChange} 
                error={formik.errors.postal_code}
            />
            <Form.Input 
                name='phone' 
                placeholder='Telefono'
                value={formik.values.phone} 
                onChange={formik.handleChange} 
                error={formik.errors.phone}
            />
        </Form.Group>

        <Form.Button type='submit' fluid loading={formik.isSubmitting}>
            Enviar
        </Form.Button>
    </Form>
  )
}
