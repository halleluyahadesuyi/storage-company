import { Home } from "./components/Home";
import { Ratings } from "./components/Ratings";
import { StorageSelection } from "./components/StorageSelection";
import { StoreWithUs } from "./components/StoreWithUs";
import { History } from "./components/History";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Ratings />
      <StorageSelection />
      <StoreWithUs />
      <History />
    </>
  );
}

export default App;
