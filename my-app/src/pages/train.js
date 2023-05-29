import {NavLink} from "react-router-dom";

export const Train = () => {
  return (
    <div className="train">
      <img src={`${process.env.PUBLIC_URL}/train/dummy.png`} alt="train"/>
      <NavLink to="/evaluate">評価</NavLink>
      <h1>育成</h1>
    </div>
  );
};