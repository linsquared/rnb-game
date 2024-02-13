import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// pages & components
// import Button from "./components/Button/Button";
import Add from "./pages/Add";
import View from "./pages/View";
import Play from "./pages/Play";
import Home from "./pages/Home";


function App() {

  const [allQuestions, setAllQuestions] = useState('')


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewall')
        console.log(response.data)
        setAllQuestions(response.data)
      } catch (error) {
        console.log('error fetching', error)
      }

    }

    fetchData()

  }, [])

  return (
    <BrowserRouter>
      {/* <Home /> */}
      {/* <Link to={'/play'}><Button value={'Play'} /></Link>
      <Link to={'/add'}><Button value={'Add'} /></Link>
      <Link to={'/viewall'}><Button value={'View'} /></Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play allQuestions={allQuestions} />} />
        <Route path="/add" element={<Add />} />
        <Route path="/viewall" element={<View allQuestions={allQuestions} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
