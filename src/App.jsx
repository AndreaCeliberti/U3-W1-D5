import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/Mynav";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <MyNav />
      <Gallery />

      <MyFooter />
    </>
  );
}

export default App;
