import logo from "./assets/images/logo.svg";
import appImage from "./assets/images/productimage.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="app__logo">
        <img src={logo} alt="" />
        <p>Mmekut</p>
      </div>
      <div className="coming__soon-cnt">
        <div className="coming__soon-left">
          <div className="coming__soon-leftchild">
            <p className="coming__soon-text">Coming Soon</p>
            <p className="coming__soon-title">Task management in a new age.</p>
            <p className="coming__soon-paragraph">
              Mmekut App is task management software that provides a smart
              solution to prioritize tasks, manage time, and meet deadlines.
            </p>
            <p className="coming__soon-paragraph">
              You can enjoy the benefit below and so much more in one platform.
              Click the button below to join waitlist and be the first to know
              when Mmekut is launched, how to get Mmekut and take control of
              your tasks
            </p>

            <p className="coming__soon-bethefirst">
              Be the first to know when we launch
            </p>
            <form className="waitlistform">
              <input type="text" placeholder="johndoe@gmail.com" />
              <button>Join Waitlist</button>
            </form>
          </div>
        </div>

        <div className="coming__soon-right">
          <img src={appImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
