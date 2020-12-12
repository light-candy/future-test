import { Data } from './Data';
import { Details } from './Details';
import { AddRecord } from './AddRecord';
import { Filter } from './Filter';
import { ChooseDataset } from './ChooseDataset';
import { Pagination } from './Pagination';
import { Table } from './Table';
import './App.css';

function App() {
  return (
    <>
   <ChooseDataset />
   <div className="inputs__panel">
   <AddRecord />
   <Filter />
    </div>
   <Data />
   <Table />
   <Pagination />
   <Details />
      </>
  );
}

export default App;
