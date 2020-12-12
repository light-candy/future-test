import { Data } from './components/Data';
import { Details } from './components/Details';
import { AddRecord } from './components/AddRecord';
import { Filter } from './components/Filter';
import { ChooseDataset } from './components/ChooseDataset';
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';
import './App.css';

function App() {
  return(
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
