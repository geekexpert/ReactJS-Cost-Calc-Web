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

const addSpace = (addVal) => {
  setTotal((prevSumTotal)=> prevSumTotal += addVal);
  setRecur((prevSumRecur)=> prevSumRecur +=addVal);
}

  return (
    <div className="App">
      <Header />
      <TypesWork typeName={"Type Name"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"First One"} TypeClass={"show-class"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Second One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Thrid One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Fourth One"}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Fifth One"}/>
      <Summery DataTotal={sumTotal} DataRecur={sumRecur}/>
      <Footer />
    </div>
  );
}

export default App;


