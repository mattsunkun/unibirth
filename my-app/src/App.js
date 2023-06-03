// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Rocation} from "react-router-dom";

import { Pnf } from "./pages/pnf";
import { Home } from "./pages/home";
import { Instruction } from "./pages/instruction";
import { Start } from "./pages/start";
import { Train } from "./pages/train";
import { Evaluate, UniEvaluation } from "./pages/evaluate";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ul>
        </ul>
        <Routes>
          <Route activeClassName="active" path="*"element={<Pnf />}/>
          <Route activeClassName="active" path="/"element={<Start />}/>
          <Route activeClassName="active" path="/start"element={<Start />}/>
          <Route activeClassName="active" path="/train"element={<Train />}/>
          <Route activeClassName="active" path="/evaluate"element={<UniEvaluation />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
