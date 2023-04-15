import logo from "./assets/images/logo.svg";
import "./App.css"
import XButton from "./components/Button/XButton";

function App() {
    const handleClick = (props) => {
        console.log(props);
        alert(props);
    };

    // const handleClick2 = (e) => { //data-value="apply clicked"
    //     console.log(e.currentTarget.getAttribute("data-value"));
    // };

    return (
        <div className="App">
            <header className="App-header">
                <br/>
                <XButton id="login_btn" text="Login" name="login_btn" icon="icon-basic" clickHandler={() => handleClick('Login Click!')} />
                <br/>
                <XButton id="register_btn" text="Register" name="register_btn"  clickHandler={() => handleClick('Register Click!')} isDisabled />
                <br/>
                <XButton id="sample_btn" text="Sample Button" name="sample_btn"  clickHandler={() => handleClick('Sample Click!')} />
                <br/>
                <img src={logo} className="App-logo" alt="logo" width={300}  />
                <br/>
                <XButton id="btn_with_img" text="Image Button" name="image_btn" icon="icon-basic" />
                <br/>
                <span className="feature-box__icon icon-basic"></span>
            </header>
        </div>
    );
}

export default App;
