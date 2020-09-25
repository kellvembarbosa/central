import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import style from '../style.module.scss'

const mapStateToProps = ({ user }) => ({ user })

const Lockscreen = ({ dispatch, user }) => {
  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const logout = e => {
    // e.preventDefault()
    console.log(e)
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-24 mb-4">
          <strong>Tela de administração</strong>
        </div>
        <div className="text-center">
          <div className="kit__utils__avatar kit__utils__avatar--size64 d-inline-block mb-2">
            <img
              src={user?.avatar ? user.avatar : 'resources/images/avatars/avatar.png'}
              alt="Mary Stanform"
            />
          </div>
          <div className="font-size-18 text-dark mb-4">
            <strong>{user.name}</strong>
          </div>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor insira seu endereço de e-mail' }]}
          >
            <Input size="large" placeholder="Senha" />
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="text-center w-100">
            <strong>Desbloquear acesso</strong>
          </Button>
        </Form>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Não é você?</span>
        <Link to="/auth/login" onClick={logout} className="kit__utils__link font-size-16">
          Sair
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Lockscreen)
