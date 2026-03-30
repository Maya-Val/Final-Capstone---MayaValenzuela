import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Findbooks from "./pages/Findbooks";
import Suggestions from "./pages/Suggestions";
import Booklook from "./pages/Booklook";
import BookList from "./pages/BookList";
import "./index.css"


function App() {
// const blue = "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5";
 
return (
    <BrowserRouter>
      <nav class="text-center">
        <br></br>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/findbooks">Find Books</Link> |{" "}
        <Link to="/suggestions">Suggestions</Link> |{""}
        <Link to="/booklook">Book</Link> |{""}
        <Link to="/booklist">BookList</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findbooks" element={<Findbooks />} /> 
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/booklook" element ={<Booklook />} />
        <Route path="/booklist" element ={<BookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
