import { useContext } from 'react';
import './App.css';
import Dogak from './component/Dogak';
import Urlap from './component/Urlap';
import { ApiContext } from './contexts/ApiContext';
import {Row, Col} from 'react-bootstrap'


function App() {
  const {szakdogaLista}=useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Row>
        <Col xs={6} md={6} lg={12}>
          <article>
            <Dogak szakdogaLista={szakdogaLista}/>
          </article>
        </Col>
        <Col xs={6} md={6} lg={12}>
          <aside>
            <Urlap />
          </aside>
        </Col>
      </Row>
    </div>
  );
}

export default App;
