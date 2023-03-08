import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;
