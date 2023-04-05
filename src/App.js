import logo from "./logo.svg";
import "./App.css"
import XButton from "./componenst/Button/XButton";

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
                <img src={logo} className="App-logo" alt="logo" />
                <XButton>
                    <img src={logo} width="100" height={60} alt="my"/>
                </XButton>
            </header>
        </div>
    );
}

export default App;
