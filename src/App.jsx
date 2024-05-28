import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

function App() {

  return (
    <>
      <AnimatedCursor
        showSystemCursor
        innerSize={0}
        outerSize={20}
        color="255, 255, 255"
        outerAlpha={100}
        innerScale={0.2}
        outerScale={3}
        trailingSpeed={13}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[  
          {
            target: '.nama-hover',
            options: {
              outerSize: 25
            }
          },
          {
            target: '.nav-menu-hover',
            options: {
              outerSize: 25,
              innerSize: 30
            }
          },
          {
            target: '.hover',
            options: {
              outerScale: 25,
              innerScale: 0.2
            }
          }
        ]}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspage" element={<WorksPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
