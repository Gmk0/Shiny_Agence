import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Error from "./Components/Error";

import Freelances from "./Pages/Freelance/Freelances";
import Home from "./Pages/Home/Home";
import Survey from "./Pages/Survey/Survey";
import Results from "./Pages/Resultat/Results";
import { GlobalStyle } from "./StyleGlobal/GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
          <Route path="/Freelances" element={<Freelances />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
