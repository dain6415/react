import apeach from './assets/apeach.webp'
import chon from './assets/chon.webp'
import JayG from './assets/Jay-G.webp'
import ryan from './assets/ryan.webp'
import "./styles/index.css"

function App() {
  return (
    <div className='card'>
      <div className='profile'>
        <img src={apeach} alt="" />
        <h2>어피치</h2>
        <p>카카오프렌즈 최고 잔망구러기 복숭아</p>
      </div>
      <div className='profile'>
        <img src={chon} alt="" />
        <h2>춘식이</h2>
        <p>안냥. 난 라이언과 동거 중인 춘식이다냥!
        고구마 너무 좋아🍠</p>
      </div>
      <div className='profile'>
        <img src={JayG} alt="" />
        <h2>제이지</h2>
        <p>Yo! 나는 힙합을 좋아하는 비밀 요원 두더지 제이지 G</p>
      </div>
      <div className='profile'>
        <img src={ryan} alt="" />
        <h2>라이언</h2>
        <p>갈기가 없는 것이 콤플렉스인 수사자</p>
      </div>
    </div>
  )
  }


export default App;
