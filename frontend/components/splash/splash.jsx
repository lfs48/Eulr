import React from 'react';
import { Link } from 'react-router-dom'; 
import RegisterForm from './register/register_form_container';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleOpenRegister = this.handleOpenRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            content: (<></>)
        }
    }

    handleDemoLogin() {
        const demoUser = {
            email: "leuler@mathmail.com",
            password: "123456789"
        };
        this.props.demoLogin(demoUser).then(
            this.props.history.push("/dashboard")
        );
    }

    handleLogin() {
        this.props.history.push("/login");
    }

    handleOpenRegister() {
        this.setState({
            content: (
                <div key={1} className="splash-container">
                    <h1 className="eulr-header">eulr</h1>
                    <p className="splash-text">An infinite series of possibilities converges here.</p>
                    <RegisterForm />
                    <Link className="splash-explore-link" to="/explore">
                        <i className="far fa-compass"></i>
                        Here's what's trending
                    </Link>
                </div>
            )
        })
    }

    componentDidMount() {
        this.props.navToggleClear();
        this.setState({
            content: (
                <div key={1} className="splash-container">
                    <h1 className="eulr-header">eulr</h1>
                    <p className="splash-text">An infinite series of possibilities converges here.</p>
                    <button className="register-button" onClick={this.handleOpenRegister}>Get Started</button>
                    <button className="splash-login" onClick={this.handleLogin}>Login</button>
                    <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
                    <Link className="splash-explore-link" to="/explore">
                        <i className="far fa-compass"></i>
                        Here's what's trending
                    </Link>
                </div>
            )
        })
    }

    render() {
        return(
            <ReactCSSTransitionGroup
                transitionName="auto"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={0}
            >
                {this.state.content}
            </ReactCSSTransitionGroup>
        );
    }
}

export default Splash;