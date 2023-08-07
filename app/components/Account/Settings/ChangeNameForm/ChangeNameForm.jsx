'use client'
import { Form } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'
import { useFormik } from 'formik'
import { initialValues, validateSchema } from './ChangeNameForm.Form'
import { useAuth } from '../../../../hook/useAuth'
import { User } from '../../../../api/user'


const userCtrl = new User()

export default function ChangeNameForm() {

  const {user} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validateSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.error(error)
      }
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input 
          name='firstname' 
          placeholder='Nombre'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <Form.Input 
          name='lastname' 
          placeholder='Apellido'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <Form.Button 
          type='submit'
          loading={formik.isSubmitting}
        >
          Enviar
        </Form.Button>
      </div>
    </Form>
  )
}
