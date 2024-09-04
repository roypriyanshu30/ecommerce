
import './App.css';
import Header from "./components/Header";
import Dataprovider from './context/Dtaprovider';
function App() {
  return (
     <Dataprovider>
     <Header/>
     </Dataprovider>
  );
}

export default App;
