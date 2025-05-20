import { lazy,Suspense } from "react";
import Contact from "./Component8/Contact";
import Home from "./Component8/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
const LazyAbout = lazy(() => import("./Component8/About"));

function App() {
  return (
    <>
      {/* todo list--- useReducer------------ */}
      {/* <Todolist/>
     <Counter/> */}

      {/* <UseContest>
  <Component/>
  <ComponentOne/>
</UseContest> */}

      {/* callback and usememo */}
      {/* <ItemsList/> */}

      {/* usecontext with reducer */}
      {/* <Context>
<Buttons/>
</Context> */}

      {/* usecallback examples */}
      {/* <Child/> */}

      {/* react.memo examples */}
      {/* <ChildT/> */}

      {/* usememo examples */}
      {/* <SimpleCart/> */}

      {/* lazy loading examples----------------------------------------------------------- */}

      <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </nav>

 <Suspense fallback={<h1>loading...............</h1>} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
