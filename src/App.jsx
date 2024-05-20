import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

function App() {
  return (
    <>
      {/* <Cursor
        isGelly={false}
        cursorSize={20}
        gellyAnimationAmount={50}
        animationDuration={0.5}
        sizeAnimationEase={[0.165, 0.84, 0.44, 1]}
        sizeAnimationDuration={0.35}
        textAnimationEase={[0.165, 0.84, 0.44, 1]}
        textAnimationDuration={0.4}
      /> */}
      <AnimatedCursor
        showSystemCursor
        innerSize={0}
        outerSize={20}
        color="255, 255, 255"
        outerAlpha={100}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={13}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          'span',
          'li',
          {
            target: '.nama-hover',
            options: {
              outerSize: 50
            }
          },
          {
            target: '.nav-menu-hover',
            options: {
              outerSize: 25,
              innerSize: 10
            }
          },
          {
            target: '.btn',
            options: {
              outerSize: 25,
              innerSize: 10
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
