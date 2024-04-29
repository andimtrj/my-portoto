import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Cursor
        isGelly={false}
        cursorSize={20}
        gellyAnimationAmount={50}
        animationDuration={0.5}
        sizeAnimationEase={[0.165, 0.84, 0.44, 1]}
        sizeAnimationDuration={0.35}
        textAnimationEase={[0.165, 0.84, 0.44, 1]}
        textAnimationDuration={0.4}
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
