import { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';
import NewCard from './components/cards';
import {BallTriangle} from '@agney/react-loading';

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://coronavirus-map.p.rapidapi.com/v1/summary/latest", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a9500b4c25msh1c6e462bfe9c887p1a2de3jsn2f4d0bc9e858",
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setData(result.data.summary);
          console.log(result.data.summary)
        },
    
        (error) => {
          setLoading(true);
          setError(error);
        }
      )

  }, [])

  if(error){
    return <div>Error: {error.message}</div>; }
  else if (!loading){
    return <div className="text-center mt-5">
        <BallTriangle width="120"/>
        <h1 className="mt-3">Loading...</h1>
      </div>;}
  else {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-5">COVID-19 Reports</h1>
      </header>
      <main className="main">
        <Container fluid>
          <Row>
            <Col><NewCard variant="secondary" header="TOTAL CASES" title="🌎" text={data ? data.total_cases : ''} /></Col>
            <Col><NewCard variant="primary" header="ACTIVE CASES" title="➕" text={data ? data.active_cases : ''} /></Col>
            <Col><NewCard variant="danger" header="DEATHS" title="❌" text={data ? data.deaths : ''} /></Col>
            <Col><NewCard variant="success" header="RECOVERED" title="✔️" text={data ? data.recovered : ''} /></Col>
            <Col><NewCard variant="warning" header="CRITICAL" title="⚠️" text={data ? data.critical : ''} /></Col>
            <Col><NewCard variant="info" header="TESTED" title="🧪" text={data ? data.tested : ''} /></Col>
          </Row>
        </Container>
      </main>
      <Container className="mt-5">
        <Alert variant='secondary' style={{fontSize:'1.3em'}}>
          Click{' '}
          <Alert.Link href="#">here</Alert.Link> to get the source code from Github.
        </Alert>
      </Container>
    </div>     
    );
  }
}

export default App;
