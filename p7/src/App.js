import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://covid-results-api.herokuapp.com/api/cases"
      );
      setData(response.data);
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Track-19</h1>
      
      {/* <form onSubmit={handleSubmit}>
      <h3>Name</h3>
        <input className="name-in" type="text" value={name} onChange={handleChange}/>
      </form> */}

      {data.map(item => (
      
        <div className="case">
          <h3>{`Name: ${item.name}`}</h3>
        <div>{`Status: ${item.status ? 'Positive': 'Negative'}`}</div>
          <div>{`Age: ${item.age}`}</div>
      </div>
      
      ))}



    </div>
  );
}

export default App;
