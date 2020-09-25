import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Login = ({ dispatch, user, logo }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  // const changeAuthProvider = value => {
  //   dispatch({
  //     type: 'settings/CHANGE_SETTING',
  //     payload: {
  //       setting: 'authProvider',
  //       value,
  //     },
  //   })
  // }

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="mb-5 px-3">
          <strong>Bem-vindo a {logo}</strong>
        </h1>
      </div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-3">
          <strong>Faça login em sua conta</strong>
        </div>
        {/* <div className="mb-4">
          <Radio.Group onChange={e => changeAuthProvider(e.target.value)} value={authProvider}>
            <Radio value="firebase">Firebase</Radio>
            <Radio value="jwt">JWT</Radio>
            <Tooltip title="Read Docs Guide">
              <Radio value="Auth0" disabled>
                Auth0
              </Radio>
            </Tooltip>
            <Tooltip title="Read Docs Guide">
              <Radio value="Strapi" disabled>
                Strapi
              </Radio>
            </Tooltip>
          </Radio.Group>
        </div> */}
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
          // initialValues={{ email: '', password: '' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Por favor insira seu endereço de e-mail' }]}
          >
            <Input size="large" placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor insira sua senha' }]}
          >
            <Input size="large" type="password" placeholder="Senha" />
          </Form.Item>
          <Button
            type="primary"
            size="large"
            className="text-center w-100"
            htmlType="submit"
            loading={user.loading}
          >
            <strong>Entrar</strong>
          </Button>
        </Form>
        <Link to="/auth/forgot-password" className="kit__utils__link font-size-16">
          Recuperar senha?
        </Link>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Não possui uma conta?</span>
        <Link to="/auth/register" className="kit__utils__link font-size-16">
          Registrar
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
