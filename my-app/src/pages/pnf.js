import {NavLink} from "react-router-dom";

export const Pnf = () => {
  return (
    <div className="pnf">
      <img src={`${process.env.PUBLIC_URL}/other/pnf.png`} alt="pikmin"/>
      <h1>ページが見つかりません</h1>
      <NavLink to="/">ホームに戻る</NavLink>

    </div>
  );
};