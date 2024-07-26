import { Home } from "./components/Home";
import { Ratings } from "./components/Ratings";
import { StorageSelection } from "./components/StorageSelection";
import { StoreWithUs } from "./components/StoreWithUs";
import { History } from "./components/History";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Ratings />
      <StorageSelection />
      <StoreWithUs />
      <History />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
