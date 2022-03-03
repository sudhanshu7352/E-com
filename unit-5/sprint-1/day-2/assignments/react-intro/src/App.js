// import logo from './logo.svg';
import "./App.css";

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const company = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <div>
        <h2>Mobile Operating System</h2>
        <div>{os.map((el) => com1(el))}</div>
      </div>
      <div>
        <h2>Mobile Manufactures</h2>
        <div>{company.map((el)=> com2(el))}</div>
      </div>
    </div>
  );
}
function com1(name) {
  return (
    // <h2>f</h2>
    <div>
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  );
}
function com2(e){
  return(
    <div>
     
        <ul id="list">
          <li>{e}</li>
        </ul>
     
    </div>
  )
}
export default App;
