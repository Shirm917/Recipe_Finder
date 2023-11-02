import Navbar from "./nav/Navbar";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  return (
    <main className="container">
      <Navbar />
      <RecipeContainer />
    </main>
  );
}

export default App;
