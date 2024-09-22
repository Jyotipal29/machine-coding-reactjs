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
// import Input from "./components/input/Input";
// import List from "./components/list/List";
import Counter from "./components/undoablecounter/Counter";
import Table from "./components/generatetable/Table";
// import Like from "./components/like/Like";
import Star from "./components/star-rating/Star";

import Debounce from "./components/debounce/Debounce";
// import Real from "./components/debounce/Real";
// import componentList from "./pages/card";
import Folder from "./components/folderstructure";
import TicTacToe from "./components/tictactoe";
import SearchFilterPagination from "./components/sort-filter-pagination";
import ProgressBar from "./components/progressbar/index";
import DragAndDrop from "./components/draganddrop/index";
import Like from "./components/likebutton/index";
import Password from "./components/passwordgenerator/index";
import GridLight from "./components/gridlights";
import Jobpost from "./components/jobpost";
import BreadCrum from "./components/breadcrum";
import OtpLogin from "./components/otplogin";
import MultiSelectSearch from "./components/multiselectsearch";
import Stepper from "./components/stepper";
import Dropdown from "./components/dropdown";
import Paginate from "./components/paginate";
import Trello from "./components/trello";
import StopWatch from "./components/stopwatch";
import Typeahead from "./components/typeahed";
import Trafic from "./components/trafic";
import Comments from "./components/nestedcomments";
import Quiz from "./components/quize";
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
          <Route exact path="/folder" element={<Folder />} />
          <Route exact path="/tic" element={<TicTacToe />} />
          <Route exact path="/ProgressBar" element={<ProgressBar />} />
          <Route exact path="/DragAndDrop" element={<DragAndDrop />} />
          <Route exact path="/Like" element={<Like />} />
          <Route exact path="/Password" element={<Password />} />
          <Route exact path="/gridlight" element={<GridLight />} />
          <Route exact path="/jobpost" element={<Jobpost />} />
          <Route exact path="/breadcrum" element={<BreadCrum />} />
          <Route exact path="/otplogin" element={<OtpLogin />} />
          <Route exact path="/stepper" element={<Stepper />} />
          <Route
            exact
            path="/multiselectsearch"
            element={<MultiSelectSearch />}
          />
          <Route
            exact
            path="/SearchFilterPagination"
            element={<SearchFilterPagination />}
          />
          <Route exact path="/dropdown" element={<Dropdown />} />
          <Route exact path="/paginate" element={<Paginate />} />
          <Route exact path="/trello" element={<Trello />} />
          <Route exact path="/stopwatch" element={<StopWatch />} />
          <Route exact path="/trafic" element={<Trafic />} />
          <Route exact path="/typeahead" element={<Typeahead />} />
          <Route exact path="/comment" element={<Comments />} />
          <Route exact path="/quize" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
