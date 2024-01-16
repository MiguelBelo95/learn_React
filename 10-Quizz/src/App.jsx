import Header from "./components/Header.jsx";
import Quiz from './components/Quiz.jsx'
import { StrictMode } from "react";

function App() {
  return <StrictMode>
    <Header />
    <main>
      <Quiz />
    </main>
  </StrictMode>
}

export default App;
