import { useEffect } from "react";
import { Button } from "@nextui-org/react";

function App() {
  useEffect(() => {
    fetch("/api/hello")
      .then((r) => {
        console.log(`API Status was: ${r.status}`);
        return r.text();
      })
      .then((t) => console.log(`Backend says "${t}" (staus) `));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button color="primary">Button</Button>
      </div>
    </>
  );
}

export default App;
