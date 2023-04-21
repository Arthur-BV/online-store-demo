import "./App.css"
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import Error404 from "./pages/Error404";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";

const TITLE = "Online Shop, Demo";

function App() {
    document.title = TITLE;

    // const handleClick2 = (e) => { //data-value="apply clicked"
    //     console.log(e.currentTarget.getAttribute("data-value"));
    // };

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
