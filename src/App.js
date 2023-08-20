import FoodAdvisor from "./foodadvisor";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
  <div className="container">
      <Routes>
      <Route path="/"         element={<Navigate to="/foodadvisor/home"/>}/>
      <Route path="/foodadvisor/*" element={<FoodAdvisor/>}/>
    </Routes>
  </div>
</HashRouter>
  );
}
export default App;
