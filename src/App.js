import './App.scss';
import Form from './components/form/Form';
import Information from './components/info/Information';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="text">
          <h1>IP Address Tracker</h1>

          <Form />

          <Information />
        </div>
        <div>map</div>
      </div>
    </div>
  );
}

export default App;
