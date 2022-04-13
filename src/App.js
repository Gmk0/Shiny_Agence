import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Error from "./Components/Error";

import Freelances from "./Pages/Freelance/Freelances";
import Home from "./Pages/Home/Home";
import Survey from "./Pages/Survey/Survey";
import Results from "./Pages/Resultat/Results";
import { SurveyProvider, ThemeProvider } from "./StyleGlobal";
import Footer from "./Components/Footer/footer";
import GlobalStyle2 from "./StyleGlobal/GlobalStyle2";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <SurveyProvider>
            <GlobalStyle2 />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Survey/:questionNumber" element={<Survey />} />
              <Route path="*" element={<Error />} />
              <Route path="/Freelances" element={<Freelances />} />
              <Route path="/Results" element={<Results />} />
            </Routes>
            <Footer />
          </SurveyProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
