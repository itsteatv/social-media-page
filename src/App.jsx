import "./App.css";
import Card from "./components/Card/Card";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <>
      {/* Background */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        {/* Main Section */}
        <section className="button-section">
          <Card />
        </section>
      </div>
    </>
  );
}

export default App;
