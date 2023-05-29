import {NavLink} from "react-router-dom";

export const Start = () => {
  return (
    <div className="start">
      <img src={`${process.env.PUBLIC_URL}/start/dummy.png`} alt="start"/>
      <NavLink to="/train">育成</NavLink>
      <h1>開始ページ</h1>
    </div>
  );
};