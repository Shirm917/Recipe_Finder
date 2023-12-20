import Navbar from "./nav/Navbar";
import PageRoutes from "./routes/PageRoutes";
import "./App.css";

function App() {
  return (
    <main className="app-container">
      <Navbar />
      <PageRoutes />
    </main>
  );
}

export default App;
