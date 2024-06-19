import "./App.css";
// import Prac from "./components/practice/Prac";
// import Search from "./components/serach/Search";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/lazyloading/About";
// import Contact from "./components/lazyloading/Contact";
// import Home from "./components/lazyloading/Home";
// import Navbar from "./components/lazyloading/Navbar";
// import React, { Suspense } from "react";
// const Home = React.lazy(() => import("./components/lazyloading/Home"));
// const About = React.lazy(() => import("./components/lazyloading/About"));
// const Contact = React.lazy(() => import("./components/lazyloading/Contact"));
// import Lazyloading from "./components/lazyloading/Lazyloading";
// import Loader from "./components/loader/Loader";
// import Accordian from "./components/accordian/Accordian";
import Carausel from "./components/carausel/Carausel";
// import Model from "./components/model/Model";
// import Input from "./components/input/Input";
// import List from "./components/list/List";
// import Counter from "./components/undoablecounter/Counter";
// import Table from "./components/generatetable/Table";
// import Like from "./components/like/Like";
// import Star from "./components/star-rating/Star";

// import Debounce from "./components/debounce/Debounce";
// import Real from "./components/debounce/Real";

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
      <Carausel />

      {/* <Loader /> */}

      {/* <Lazyloading /> */}

      {/* <div>
        <Router>
          <Navbar />
          <Suspense fallback={<div>loading..</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </div> */}

      {/* <Debounce /> */}
      {/* <Real /> */}

      {/* <Search /> */}

      {/* <Prac /> */}
    </>
  );
}

export default App;
