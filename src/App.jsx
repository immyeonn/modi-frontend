import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/actuator/health")
      .then((res) => res.json())
      .catch(() => {});
  }, []);

  return (
    <>
      <div>여운</div>
    </>
  );
}

export default App;
