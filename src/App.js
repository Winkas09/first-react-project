import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav className="App-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="App-content">
        <img className="App-content-image" src="https://via.placeholder.com/200" alt="placeholder" />
        <div className="App-content-cards">
          <div className="App-content-card">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet urna tincidunt efficitur. Nulla facilisi.</p>
          </div>
          <div className="App-content-card">
            <h2>Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet urna tincidunt efficitur. Nulla facilisi.</p>
          </div>
          <div className="App-content-card">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet urna tincidunt efficitur. Nulla facilisi.</p>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        <div className="App-footer-content">
          <h2>Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet urna tincidunt efficitur. Nulla facilisi.</p>
          <h3>Sub header</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet urna tincidunt efficitur. Nulla facilisi.</p>
        </div>
        <div className="footer-nav">
          <h2>Navigation</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
