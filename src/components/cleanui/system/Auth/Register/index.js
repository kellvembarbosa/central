import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const Register = ({ dispatch, user }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/REGISTER',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>Crie sua conta</strong>
        </div>
        <div className="mb-4">
          <p>
            E comece a gastar mais tempo em seus projetos e menos tempo gerenciando sua
            infraestrutura.
          </p>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor insira seu nome completo' }]}
          >
            <Input size="large" placeholder="Nome completo" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Por favor insira seu endereço de e-mail' }]}
          >
            <Input size="large" placeholder="Endereço de e-mail" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor insira seu endereço de e-mail' }]}
          >
            <Input type="password" size="large" placeholder="Senha" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="text-center w-100"
            loading={user.loading}
          >
            <strong>Registrar</strong>
          </Button>
        </Form>

        <div>
          <span className="mr-1">Ao se inscrever, você concorda com os</span>
          <a href="#" onClick={e => e.preventDefault()} className="kit__utils__link">
            Termos de serviço
          </a>{' '}
          and{' '}
          <a href="#" onClick={e => e.preventDefault()} className="kit__utils__link">
            Política de Privacidade
          </a>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Já tem uma conta?</span>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Entrar
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Register)
