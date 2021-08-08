import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TypesWork from './components/TypesWork';
import SpacesWork from './components/SpacesWork';
import Summery from './components/Summery';
import {useState} from 'react';
function App() {
  let [sumTotal, setTotal] = useState(0);
  let [sumRecur, setRecur] = useState(0);
  let [eClick, seteClick] = useState(0);
const addSpace = (addVal) => {
  setTotal((prevSumTotal)=> prevSumTotal += addVal);
  setRecur((prevSumRecur)=> prevSumRecur +=addVal);
}

const addActiveClass = (e) => {
  console.log(e);
  console.log("active class added");
}
  return (
    <div className="App">
      <Header />
      <div className="type-wrap">
      <TypesWork typeName={"Weekly Clean"} clickEvent={addActiveClass} />
      <TypesWork typeName={"Fortnightly Clean"}/>
      <TypesWork typeName={"One Off Spring Clean"}/>
      <TypesWork typeName={"New / Final Home Clean"}/>
      <TypesWork typeName={"Optional Extra Only"}/>
      </div>
      <div className="space-wrap">
      <SpacesWork addSpace={addSpace} SpaceType={"First One"} TypeClass={"show-class"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Second One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Thrid One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Fourth One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Fifth One"}/>
      </div>
      
      <Summery DataTotal={sumTotal} DataRecur={sumRecur}/>
      <Footer />
    </div>
  );
}

export default App;


