// importing the sytlesheet and the navbar and login components 
import './App.css'
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";

export default function App() {
  // JSX structured app that is styled with a bootstrap grid with two rows and columns that renders the component 
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navigation />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
