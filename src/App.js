import { Route, Routes } from "react-router-dom";
import Home from "./components";
import Contact from "./components/Contact/Contact";
import Item from "./components/Item/Item";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:itemId" element={<Item />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
