import { Cursor } from "react-creative-cursor";
import AnimatedCursor from "react-animated-cursor";
import "react-creative-cursor/dist/styles.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

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
          }
        ]}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
