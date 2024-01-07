
import { useEffect, useState } from 'react';
import './App.css';
import CardForm from './components/CardForm';
import DataTable from './components/DataTable';

function App() {


const [cardDataArray, setCardDataArray] = useState([]);

const handleCardData = (newCardData) => {
  const updatedCardDataArray = [...cardDataArray, newCardData];
  setCardDataArray(updatedCardDataArray);
  localStorage.setItem('CardData', JSON.stringify(updatedCardDataArray));
};


useEffect(() => {
  const storedData = localStorage.getItem('CardData');
  if(storedData){
    setCardDataArray(JSON.parse(storedData))
  }
}, [])
  return (
    <div>
      <div>
      <CardForm onCardData={handleCardData} />
      <DataTable  data={cardDataArray}/>
    </div>
    </div>
  );
}

export default App;
