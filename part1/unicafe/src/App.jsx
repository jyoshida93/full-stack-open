import { useState } from "react";
import Statistics from "./Statistics";
import IncrementButton from "./IncrementButton";
function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <IncrementButton
          state={goodCount}
          setter={setGoodCount}
          text={"good"}
        />
        <IncrementButton
          state={neutralCount}
          setter={setNeutralCount}
          text={"neutral"}
        />
        <IncrementButton state={badCount} setter={setBadCount} text={"bad"} />
      </div>

      <h2>statistics</h2>
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </>
  );
}

export default App;
