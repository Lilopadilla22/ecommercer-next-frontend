'use client'
import {Form} from 'semantic-ui-react'

export function RegisterForm() {
  return (
    <Form>
        <Form.Group widths="ed">
            <Form.Input name="email" type="text" placeholder="Correo Electronico"/>
            <Form.Input name="username" type="text" placeholder="Nombre de Usuario"/>
        </Form.Group>
        
        <Form.Group widths="ed">
            <Form.Input name="name" type="text" placeholder="Nombre y apellido"/>
            <Form.Input name="password" type="password" placeholder="contraseña"/>
        </Form.Group>

        <Form.Button type='submit' fluid>
            Registrarse
        </Form.Button>
    </Form>
  )
}
