import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Random from "./Random/Random";
import Search from "./Search/Search";
import Pick from "./Pick/Pick";
import Me from "./Me/Me";
 



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-400 sticky top-0 z-50 h-20 flex justify-center items-center">
          <ul className="flex gap-20 w-full justify-center p-4 text-white font-bold uppercase rounded-4xl min-h-30">
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/search"}> Search for your dish</Link>
            </li>
            <li>
              <Link to={"/pick"}>Our top picks </Link>
            </li>
            <li>
              <Link to={"/random"}>Find Random recipes</Link>
            </li>
            <li>
              <Link to={"/me"}>About me</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<h1 className="text-center text-8xl hover:shadow-lg font-bold uppercase m-auto text-blue-800">Welcome to ReciX</h1>} />
            <Route path="/random" element={<Random></Random>} />
            <Route path="/search" element={<Search></Search>} />
            <Route path="/pick" element={<Pick></Pick>} />
            <Route path="/me" element={<Me></Me>} />
          </Routes>
        </div>
        <footer className="bg-blue-400 text-white p-4 mt-5 text-center">
          Thank you
        </footer>
      </div>
    </Router>
  );
}

export default App;
