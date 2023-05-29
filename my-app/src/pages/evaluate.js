import {NavLink} from "react-router-dom";

export const Evaluate = () => {
  return (
    <div className="evaluate">
      <img src={`${process.env.PUBLIC_URL}/evaluate/dummy.png`} alt="evaluate"/>
      <NavLink to="/start">もう一度</NavLink>
      <br/>
      <NavLink to="/">ホームに戻る</NavLink>
      <h1>評価</h1>
    </div>
  );
};