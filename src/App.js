import { useEffect, useState } from "react";
import { getCharacters } from "./services";

const App = () => {
  const [char, setChar] = useState([]);
  console.log(char);

  useEffect(() => {
    getCharacters().then((res) => {
      setChar(res.data.data.results);
    });
  }, []);

  return <></>;
};

export default App;
