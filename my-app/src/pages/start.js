import useSound from 'use-sound';
export const Start = () => {
  //clickしたときにtrainのページにいくようにする
  const handleClick1 = () => {
    window.location.href = "/train?money=10000";
  }
  const handleClick2 = () => {
    window.location.href = "/instruction";
  }
  const [playBgm,{pause}] = useSound(`${process.env.PUBLIC_URL}/MusMus-BGM-033.mp3`)
  //表示されるもの
  return (
    <div className="start">
      <img src={`${process.env.PUBLIC_URL}/start/dummy.png`} alt="start"/>
      <h1>開始ページ</h1>
      <img src={`${process.env.PUBLIC_URL}/torisetu.jpg`} onClick={handleClick2} id="hai" width="100"/>
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick1} id="hai" width="100"/>
      <img src={`${process.env.PUBLIC_URL}/Sound (1).png`} alt="" width="50" onClick={() => playBgm()} id="hai" />
      <img src={`${process.env.PUBLIC_URL}/SoundStop.png`} alt="" width="50" onClick={() => pause()} id="hai" />
    </div>
  );
};









