import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Head from '../../components/Head'

export default function Login() {
    useEffect(() => {
        document.body.className = 'login';

        return () => document.body.className = document.body.className.replace("login", "");
    }, [])


    return (
        <>
            <Head title="Login"></Head>

            <div class="wrapper wrapper-login wrapper-login-full p-0">
                <div class="login-aside w-50 d-flex flex-column align-items-center justify-content-center text-center bg-secondary-gradient">
                    <h1 class="title fw-bold text-white mb-3">Central de Anúncios</h1>
                    <p class="subtitle text-white op-7">Publique, gerêncie e acompanhe seus anúncios!</p>
                </div>
                <div class="login-aside w-50 d-flex align-items-center justify-content-center bg-white">
                    <div class="container container-login container-transparent animated fadeIn">
                        <h3 class="text-center">Entrar para administrar</h3>
                        <div class="login-form">
                            <div class="form-group">
                                <label  class="placeholder"><b>Usuário</b></label>
                                <input id="username" name="username" type="text" class="form-control" required />
                            </div>
                            <div class="form-group">
                                <label  class="placeholder"><b>Senha</b></label>
                                <a href="#" class="link float-right">Recuperar senha?</a>
                                <div class="position-relative">
                                    <input id="password" name="password" type="password" class="form-control" required />
                                    <div class="show-password">
                                        <i class="icon-eye"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-action-d-flex mb-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rememberme" />
                                    <label class="custom-control-label m-0" for="rememberme">Lembrar</label>
                                </div>
                                <a href="#" class="btn btn-secondary col-md-5 float-right mt-3 mt-sm-0 fw-bold">Entrar</a>
                            </div>
                            <div class="login-account">
                                <span class="msg">Não possui conta?</span>
                                <a href="#" id="show-signup" class="link"> Criar conta</a>
                            </div>
                        </div>
                    </div>

                    <div class="container container-signup container-transparent animated fadeIn">
                        <h3 class="text-center">Cadastro</h3>
                        <div class="login-form">
                            <div class="form-group">
                                <label for="fullname" class="placeholder"><b>Nome completo:</b></label>
                                <input id="fullname" name="fullname" type="text" class="form-control" required />
                            </div>
                            <div class="form-group">
                                <label for="email" class="placeholder"><b>E-mail</b></label>
                                <input id="email" name="email" type="email" class="form-control" required />
                            </div>
                            <div class="form-group">
                                <label for="passwordsignin" class="placeholder"><b>Senha</b></label>
                                <div class="position-relative">
                                    <input id="passwordsignin" name="passwordsignin" type="password" class="form-control" required />
                                    <div class="show-password">
                                        <i class="icon-eye"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="confirmpassword" class="placeholder"><b>Confirme a senha</b></label>
                                <div class="position-relative">
                                    <input id="confirmpassword" name="confirmpassword" type="password" class="form-control" required />
                                    <div class="show-password">
                                        <i class="icon-eye"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row form-sub m-0">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" name="agree" id="agree" />
                                    <label class="custom-control-label" for="agree">Concordo com os termos e condições.</label>
                                </div>
                            </div>
                            <div class="row form-action">
                                <div class="col-md-6">
                                    <a href="#" id="show-signin" class="btn btn-danger btn-link w-100 fw-bold">Cancelar</a>
                                </div>
                                <div class="col-md-6">
                                    <a href="#" class="btn btn-secondary w-100 fw-bold">Cadastrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer disabledFooter="true" />
        </>
    )
}