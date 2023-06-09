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
        backgroundPosition: "center" ,
        height:'900px',
        width:'',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }
    }
    >
      <img src={`${process.env.PUBLIC_URL}/backBotton.png`} alt="instruction" onClick={handleClick1}/>
      <h1> </h1>
      <p></p>
    </div>
  );
};