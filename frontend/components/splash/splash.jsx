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

    componentWillMount() {
        const bgs = 
            ["https://wallpapercave.com/wp/oThITm6.png", 
            "https://pbs.twimg.com/media/DEcdX4-W0AEpVHL.jpg",
			"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/48om2T3Se/the-integral-is-gaussian-also-known-as-euler-poissons-integral_swswok6ix_thumbnail-full15.png",
			"http://xahlee.info/math/algorithmic_math_art/InfernoFull.jpg",
			"https://farm1.static.flickr.com/50/128824672_0bd2d1a4da_b.jpg",
			"http://www.jwillott.com/wp-content/uploads/Songs-of-Pythagoras.jpg",
			"https://cdn.hipwallpaper.com/i/79/57/nVquQ8.png",
			"http://41.media.tumblr.com/6c33b036be440cfde585986938bab77e/tumblr_ng2bwgneqT1rqpa8po3_1280.jpg",
			"https://wallpapersite.com/images/wallpapers/spiral-3840x2160-orbit-cgi-4k-12124.jpg",
			"https://www.wallpaperup.com/uploads/wallpapers/2014/01/30/243322/f822c4667c8fd7a7181ddfe45886c0e2.jpg",
			"https://c.pxhere.com/photos/ed/c9/classroom_math_chalkboard_school_education_mathematics_blackboard_learning-595223.jpg!d",
			"https://upload.wikimedia.org/wikipedia/commons/0/0e/Blackboard1257.jpg",
			"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SImAn91gin31gtxk/videoblocks-stock-market-financial-statistics-on-screen-share-pricing-online-trading-data-electronic-chart-with-stock-market-fluctuations_byprwtkrx_thumbnail-full12.png",
			"https://c1.staticflickr.com/4/3890/14766460825_eb6525767e_b.jpg",
			"http://i.imgur.com/ENHGk.jpg",
			"http://math.ucr.edu/home/baez/roots/polynomialroots1.png",
			"https://upload.wikimedia.org/wikipedia/en/d/d1/Algebraicszoom.png",
			"https://i.imgur.com/S1hoM8w.jpg",
			"https://external-preview.redd.it/pehFkauv-DtzaPMlQEKxEI39OzZzcH6YWvDTJfju-J0.jpg?auto=webp&s=34f793dc94906594092a46452412f8bbb4cfaa96",
			"https://www.desktopbackground.org/download/960x544/2014/07/17/794611_wallpapers-mathematics-math-pi-hd-general-1280x800_1280x800_h.png",
        ];
        const idx = Math.floor(Math.random()*bgs.length);
        const bg = bgs[idx];
        const app = document.getElementById("app");
        app.style.backgroundImage = `url(${bg})`;
    }

    componentWillUnmount() {
        const app = document.getElementById("app");
        app.style.backgroundImage = "none";
        const nav = document.getElementById("nav-container");
        nav.style.borderBottom = "1px solid gray";
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
        const nav = document.getElementById("nav-container");
        nav.style.borderBottom = "none";
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