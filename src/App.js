import './App.scss';
import Form from './components/form/Form';
import Information from './components/info/Information';
import Map from './components/map/Map';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="text">
          <h1>IP Address Tracker</h1>

          <Form />

          <Information />
        </div>
        <Map />
      </div>
    </div>
  );
}

export default App;
