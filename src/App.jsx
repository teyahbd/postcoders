import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Form from "./components/Form";
import ResultsList from "./components/ResultsList";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [currentPostcode, setCurrentPostcode] = useState(null);

  const load = async () => {
    try {
      const areaData = await getAreaData(currentPostcode);
      setAreas(areaData);
    } catch (error) {
      setCurrentPostcode(null);
      window.alert(
        "Please check this postcode exists and is in the correct format."
      );
    }
  };

  useEffect(() => {
    if (currentPostcode !== null) {
      if (currentPostcode in localStorage) {
        const areaData = JSON.parse(localStorage.getItem(currentPostcode));
        setAreas(areaData);
      } else {
        load();
      }
    }
  }, [currentPostcode]);

  useEffect(() => {
    if (!(currentPostcode in localStorage)) {
      localStorage.setItem(currentPostcode, JSON.stringify(areas));
    }
  }, [areas]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <Form setCurrentPostcode={setCurrentPostcode} />
      {areas.length !== 0 ? (
        <div id="results">
          <h2>{`Areas for ${currentPostcode}: ${areas.length}`}</h2>
          <ResultsList areas={areas} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
