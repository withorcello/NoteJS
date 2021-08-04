import React from 'react'

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        const { onLogin } = this.props
        const { email, password } = this.state
        return (
            <div className="login">
                <div className="login-container">
                    <div className="login_title">
                        <h1>Login</h1>
                    </div>
                    <div className="login_body">
                        <div>
                            <h3 className="login_body-text">Email</h3>
                            <input type="email" className="login_body-input" placeholder="Insira o email..."
                                value={email}
                                onChange={event => {
                                    this.setState({
                                        email: event.target.value
                                    })
                                }}
                            ></input>
                        </div>
                        <div>
                            <h3 className="login_body-text">Password</h3>
                            <input type="password" className="login_body-input" placeholder="Insira a senha..."
                                value={password}
                                onChange={event => {
                                    this.setState({
                                        password: event.target.value
                                    })
                                }}
                            ></input>
                        </div>
                        <div className="login_body_late">
                            <button className="login_body_late-button"
                                onClick={
                                    event => {
                                        onLogin(this.state.email, this.state.password);
                                        this.setState({
                                            email: "",
                                            password: ""
                                        })
                                    }
                                }
                            >Entrar</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login