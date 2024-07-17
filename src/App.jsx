import { Home } from "./components/Home";
import { Ratings } from "./components/Ratings";
import { StorageSelection } from "./components/Storage";
import { StoreWithUs } from "./components/StoreWithUs";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Ratings />
      <StorageSelection />
      <StoreWithUs />
    </>
  );
}

export default App;
