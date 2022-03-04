import './App.css';
import img from './img2.jfif'
function App() {
  return (
    <section style={{ border: "1px solid black", maxWidth: "100vw" }}>
      <h1 className='name'>oumayma saddouri</h1>
      <div>
        <img src='/img1.jpg' alt='icon' /><br></br>
        <img src={img} alt='zadazd' />
        <video width="320" height="240" controls> <source src="/vid.mp4" type="video/mp4"></source></video>
      </div>
    </section>
  )
}

export default App;
