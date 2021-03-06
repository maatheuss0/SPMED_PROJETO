import { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-login', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/');
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Email e/ou senha inválidos!", isLoading: false });
            })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }

    render() {
        return (
            <div>
                <header>
                    <div class="container container_header">
                        <h2 class="login">LOGIN </h2>
                    </div>
                </header>
                <main>
                    <div class="principal">
                        <div>
                            <form method="POST" class="formulario">
                                <h1 class="faça_login">Faça login com seus dados</h1>
                                <div class="formulario_e_s">
                                    <input class="caixa_texto" type="" id="" name="" value="" placeholder="Nome de usuário "><br>
                                        <input class="caixa_texto" type="password" id="senha" name="senha" value=""
                                            placeholder="Senha"><br><br>
                                            </div>
                                                <div class="lembre">
                                                    <label for="Senha">Mantenha-me conectado</label>
                                                    <button></button>
                                                </div>
                                                <div class="cadastrar">
                                                    <button type="submit">Entre</button>
                                                    <label for="Cadastrar">Não possui conta?</label>
                                                    <button type="submit">Cadastrar</button>
                                                </div>
                                                <div class="ou">
                                                    <hr>
                                                    <h1 class ="opçoes_cadastro">ou</h1>
                                                    <hr>
                                                    </div>
                                                    <div class ="opcoes_acesso">
                                                    <label class ="opçoes_cadastro" for="Cadastrar">Você pode acessar sua conta utlizando</label>
                                                    <div class ="imagem">
                                                    <input class ="imagem1" type =image src="./assets/img/sinal_mais.png" width="130px"
                                                    height="130px">
                                                    <input class ="imagem2" type =image src="./assets/img/sinal_google.png" width="90px"
                                                    height="90px">
                                                    </div>
                                                    </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                        <footer>
                                        </footer>
                                        )
        
    }
}