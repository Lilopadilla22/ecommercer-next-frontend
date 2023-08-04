'use client'
import { Form } from 'semantic-ui-react'

export default function LoginForm() {
  return (
    <Form>
      <Form.Input name='identifier' type='text' placeholder='Correo electrico o usuario'/>
      <Form.Input name='password' type='password' placeholder='Contraseña'/>
      <Form.Button type='submit' fluid>
        Entrar
      </Form.Button>
    </Form>
  )
}
