import "./App.css";
// import Prac from "./components/practice/Prac";
import Search from "./components/serach/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./components/lazyloading/About";
// import Contact from "./components/lazyloading/Contact";
// import Home from "./components/lazyloading/Home";
// import Navbar from "./components/lazyloading/Navbar";
// import React, { Suspense } from "react";
// const Home = React.lazy(() => import("./components/lazyloading/Home"));
// const About = React.lazy(() => import("./components/lazyloading/About"));
// const Contact = React.lazy(() => import("./components/lazyloading/Contact"));
// import Lazyloading from "./components/lazyloading/Lazyloading";
import Loader from "./components/loader/Loader";
import Accordian from "./components/accordian/Accordian";
import Carausel from "./components/carausel/Carausel";
import Model from "./components/model/Model";
import Input from "./components/input/Input";
import List from "./components/list/List";
import Counter from "./components/undoablecounter/Counter";
import Table from "./components/generatetable/Table";
import Like from "./components/like/Like";
import Star from "./components/star-rating/Star";

import Debounce from "./components/debounce/Debounce";
import Real from "./components/debounce/Real";
import componentList from "./pages/card";
function App() {
  return (
    <>
      {/* <Star /> */}
      {/* <Like /> */}
      {/* <Table /> */}
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <Input /> */}
      {/* <Model /> */}
      {/* <Accordian /> */}
      {/* <Carausel /> */}

      {/* <Loader /> */}

      {/* <Lazyloading /> */}

      {/* <div>
        
      </div> */}

      {/* <Debounce /> */}
      {/* <Real /> */}

      {/* <Search /> */}

      {/* <Prac /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/accodian" element={<Accordian />} />
          <Route exact path="/carausel" element={<Carausel />} />
          <Route exact path="/debounce" element={<Debounce />} />
          <Route exact path="/generateTable" element={<Table />} />
          <Route exact path="/like" element={<Like />} />
          <Route exact path="/loader" element={<Loader />} />
          <Route exact path="/model" element={<Model />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/start-rating" element={<Star />} />
          <Route exact path="/tab" element={<Accordian />} />
          <Route exact path="/undo-counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
