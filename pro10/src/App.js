import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense } from 'react';
const Home = React.lazy(() => import("./component/home/Home"))
const Single = React.lazy(() => import("./component/single/Single"))

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Suspense><Home /></Suspense>} />
      <Route path={"/:slug"} element={ <Suspense> <Single /> </Suspense>} />
    </Routes>
  )

}

export default App;