import {NavLink} from "react-router-dom";

export const Start = () => {
  //clickしたときにtrainのページにいくようにする
  const handleClick = () => {
    window.location.href = "/train";
  }
  //表示されるもの
  return (
    <div className="start">
      <img src={`${process.env.PUBLIC_URL}/start/dummy.png`} alt="start"/>
     
      <h1>開始ページ</h1>
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick} id="hai" width="100"/>
    </div>
  );
};