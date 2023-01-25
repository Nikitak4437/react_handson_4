import { useState } from "react";
import "./App.css";
import Forms from "./forms";
function App() {
  const [detailsList, setDetailsList] = useState([]);
  const [handelDiv, setHandelDiv] = useState(false);
  const add_details = (details) => {
    console.log(details);
    setDetailsList([...detailsList, details]);
    setHandelDiv(true);
  };
  return (
    <div className="App">
      {handelDiv ? (
        <>
          <h1>EMPLOYEE FEED BACK DATA</h1>
          <div className="row">
            {detailsList.map((details, i) => (
              <p key={i}>
                Name : {details.name} | Department {details.department} | Rating
                :{details.rating}
              </p>
            ))}
          </div>
          <button
            onClick={() => {
              setHandelDiv(false);
            }}
            type="button"
          >
            GO BACK
          </button>
        </>
      ) : (
        <>
          <Forms add_details={add_details} />
        </>
      )}
    </div>
  );
}
export default App;
