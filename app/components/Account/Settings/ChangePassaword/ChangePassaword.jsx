import { Form } from 'semantic-ui-react'
import styles from './ChangePassaword..module.scss'
import { useFormik } from 'formik'
import { initialValues, validateSchema } from './ChangePassword.form'
import { User } from '../../../../api/user'
import { useAuth } from '../../../../hook/useAuth'


const userCtrl = new User()

export default function ChangePassaword() {

  const {user, logout} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, {password: formValue.password})
        logout()
      } catch (error) {
        throw error
      }
    }
  })

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Cambiar Contraseña</label>
      <Form.Input
        name='password'
        placeholder='Nueva Contraseña'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        name='repeatPassword'
        placeholder='Repetir Contraseña'
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatPassword}
      />
      <Form.Button type='submit' loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  )
}
