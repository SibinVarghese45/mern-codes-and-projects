import './App.css';
import NavBar from './components/NavBar'
import Courses from './components/Courses'
import {filterData, apiUrl} from './data'
function App() {
  return (
    <div className="App">
      <h1>Top Courses</h1>
      {/* {console.log(filterData)} */}
      <NavBar filterData={filterData}></NavBar>
      <Courses filterData={filterData} apiUrl={apiUrl}></Courses>
    </div>
  );
}

export default App;
