import React,{Fragment,useEffect} from 'react';
import Searchbar from './components/layout/Searchbar'
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'


import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'


//const App = () =>{}

function App() {
        useEffect( ()=> {M.AutoInit();} );


  return (
  <Fragment>
    <Searchbar/>
    <div className="container">
      <AddBtn/>
      <AddLogModal/>
      <EditLogModal/>
      <AddTechModal/>
      <TechListModal/>
      <Logs/>
    </div>

  </Fragment>

  );
}

export default App;
