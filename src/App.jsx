import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/actuator/health")
      .then((res) => res.json())
      .catch(() => {
        // Health check failure should not break the first render.
      });
  }, []);

  return (
    <>
      <div>modi</div>
    </>
  );
}

export default App;
