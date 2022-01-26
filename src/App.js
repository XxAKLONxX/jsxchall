import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

          <h1 className="title red" style={{color:'red'}} >Your name here</h1>
          <br />
          <img src="/imageInSrc.jpg" />
          <br />
          <img src="/imageInPublic.jpg" />
    </div>
          <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
          </video>
          <div>
            <img src='.C:\createdApp\jsxchall\src\ImageInSrc.jpg' alt='profileimg'></img>
          </div>
    </div>
  );
}

export default App;
