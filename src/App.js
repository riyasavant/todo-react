import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todos from "./components/Todos/Todos";
import { todosData } from "./constants.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Todos data={todosData}/>
      <Footer />
    </>
  );
}

export default App;
