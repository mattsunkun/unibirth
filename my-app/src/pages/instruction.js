import {NavLink} from "react-router-dom";

export const Instruction = () => {
  return (
    <div className="instruction">
      <img src={`${process.env.PUBLIC_URL}/instruction/dummy.png`} alt="instruction"/>
      <NavLink to="/start">開始</NavLink>
      <h1>説明</h1>
    </div>
  );
};