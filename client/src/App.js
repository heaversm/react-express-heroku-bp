import React, { useRef, useState } from "react";
import "./App.scss";

function App() {
  const [data, setData] = React.useState(null);
  const [inputVal, setInputVal] = useState("");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/getExternalEndpoint/${inputVal}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setData(data.error);
          console.log(data.details);
        } else {
          console.log(data);
          setData("Displaying Results");
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="inputVal"
          placeholder="inputVal"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="analyze-submit analyze-el">
          Analyze
        </button>
      </form>
    </div>
  );
}

export default App;
