import {NavLink} from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/home/dummy.png`} alt="home"/>
      <NavLink to="/instruction">説明</NavLink>
      <h1>ホーム</h1>
    </div>
  );
};