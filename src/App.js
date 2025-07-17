import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksInfo from "./pages/Bookinfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />}/>
          <Route path="books/1" element={<BooksInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

