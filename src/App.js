import { Data } from './Data';
import { Details } from './Details';
import { AddRecord } from './AddRecord';
import { Filter } from './Filter';
import { ChooseDataset } from './ChooseDataset';
import './App.css';

function App() {
  return (
    <>
   <ChooseDataset />
   <AddRecord />
   <Filter />
   <Data />
   <Details />
      </>
  );
}

export default App;
