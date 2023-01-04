import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Form from "./components/Form";

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
      load();
    }
  }, [currentPostcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <Form setCurrentPostcode={setCurrentPostcode} />
      {areas.length !== 0 ? (
        <h2>{`Areas for ${currentPostcode}: ${areas.length}`}</h2>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
