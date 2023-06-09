import useSound from 'use-sound';
export const Start = () => {
  //clickしたときにtrainのページにいくようにする
  const handleClick1 = () => {
    window.location.href = "/train?money=10000";
  }
  const handleClick2 = () => {
    window.location.href = "/instruction";
  }
  //BGM設定
  const [playBgm,{pause}] = useSound(`${process.env.PUBLIC_URL}/MusMus-BGM-033.mp3`)

  //背景画像指定
  const backImagePath = `${process.env.PUBLIC_URL}/title_logo.jpg`
  //表示されるもの
  return (
    <div className="start"
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
      <label>
      <img src={`${process.env.PUBLIC_URL}/torisetu.png`} onClick={handleClick2} id="hai" width="100px"/>
      <img src={`${process.env.PUBLIC_URL}/Sound (1).png`} alt="" width="50" onClick={() => playBgm()} id="hai" />
      <img src={`${process.env.PUBLIC_URL}/SoundStop.png`} alt="" width="50" onClick={() => pause()} id="hai" />
     
      </label>
      <br/>
      <div style={{margin:'35% 0 38% 38%',
             }}>
        <img src={`${process.env.PUBLIC_URL}/start.png`} onClick={handleClick1} id="hai" width="350px" />
      </div>

    </div>
  );
};
