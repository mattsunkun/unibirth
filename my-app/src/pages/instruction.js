import {NavLink} from "react-router-dom";
export const Instruction = () => {
  const handleClick1 = () => {
    window.location.href = "/start";
  }
  //背景画像指定
  const backImagePath = `${process.env.PUBLIC_URL}/torisetuBack.png`
  return (
    <div className="instruction"
    style={
      { backgroundImage: `url(${backImagePath})`,
        backgroundRepeat: 'no-repeat',
        height: '1020px',
        width: '1440px'
        }
    }
    >
      <img src={`${process.env.PUBLIC_URL}/backBotton.png`} alt="instruction" onClick={handleClick1}/>
      <h1> </h1>
      <p></p>
    </div>
  );
};