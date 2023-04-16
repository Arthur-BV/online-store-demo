import "./App.css"
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import MainPage from "./pages/MainPage";


function App() {
    // const handleClick2 = (e) => { //data-value="apply clicked"
    //     console.log(e.currentTarget.getAttribute("data-value"));
    // };

    return (
        <div className="App">
            <Header/>
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;
