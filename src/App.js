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
  let [defaultV, setdefualtVal] = useState(null);
const addSpace = (addVal) => {
  setTotal((prevSumTotal)=> prevSumTotal += defaultV * addVal.defValue);
  setRecur((prevSumRecur)=> prevSumRecur += defaultV * addVal.defValue);
}

const getDetails = (event, defaultValue) => {
  setdefualtVal(defaultValue);
  let allEventDivs = document.querySelectorAll('.type-work-item');
  let eventDiv = event.currentTarget;
if(eventDiv.classList.contains('active')) {
eventDiv.classList.remove('active');
}
else{
  allEventDivs.forEach(element => {
    element.classList.remove('active');
  });
  eventDiv.classList.add('active');
};
}
  return (
    <div className="App">
      <Header />
      <TypesWork typeName={"Type Name:100"} getDetails={getDetails} defaultValue={1}/>
      <TypesWork typeName={"Type Name:200"} getDetails={getDetails} defaultValue={2}/>
      <TypesWork typeName={"Type Name:300"} getDetails={getDetails}  defaultValue={3}/>
      <SpacesWork addSpace={addSpace} SpaceType={"First One"}  defValue={100}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Second One"}  defValue={200}/>
      <SpacesWork addSpace={addSpace} SpaceType={"Thrid One"}  defValue={300}/>

      <Summery DataTotal={sumTotal} DataRecur={sumRecur}/>
      <Footer />
    </div>
  );
}

export default App;


