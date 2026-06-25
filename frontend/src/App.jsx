import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedPosts from "./pages/SavedPosts";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/saved">Post salvati</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/saved" element={<SavedPosts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;