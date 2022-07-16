import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pic from "./assets/icon-ellipsis.svg";
import Person from "./assets/image-jeremy.png";
import axios from "axios";
function App() {
  const daily = async () => {
    const { data } = await axios.get(
      "https://wookie.codesubmit.io/time-tracking"
    );
    console.log(data);
  };

  return (
    <body>
      <main>
        <section className="profile card--style">
          <div className="profile__header--container">
            <div className="profile__image--container">
              <img
                className="profile__image--style"
                src={Person}
                alt="young african american male"
              />
            </div>
            <div className="profile__name--container">
              <p className="name__top--style">Report for</p>
              <h1 className="name__bottom--style">Jeremy Robson</h1>
            </div>
          </div>
          <div className="profile__time--container">
            <ul className="time--container">
              <li>
                <button
                  className="time__button-style"
                  type="button"
                  onClick={daily}
                >
                  Daily
                </button>
              </li>
              <li>
                <button
                  className="time__button-style time--highlight"
                  type="button"
                >
                  Weekly
                </button>
              </li>
              <li>
                <button className="time__button-style" type="button">
                  Monthly
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="work dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Work</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="work-current" className="hours">
                32hrs
              </p>
              <p id="work-previous">Last Week - 36hrs</p>
            </div>
          </div>
        </section>
        <section className="play dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Play</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="play-current" className="hours">
                10hrs
              </p>
              <p id="play-previous">Last Week - 8hrs</p>
            </div>
          </div>
        </section>
        <section className="study dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Study</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="study-current" className="hours">
                4hrs
              </p>
              <p id="study-previous">Last Week - 7hrs</p>
            </div>
          </div>
        </section>

        <section className="exercise dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Exercise</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="exercise-current" className="hours">
                4hrs
              </p>
              <p id="exercise-previous">Last Week - 5hrs</p>
            </div>
          </div>
        </section>
        <section className="social dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Social</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="social-current" className="hours">
                5hrs
              </p>
              <p id="social-previous">Last Week - 10hrs</p>
            </div>
          </div>
        </section>
        <section className="selfCare dashboard--style card--style">
          <div className="dashboard__inner--container">
            <div className="dashboard__top--container">
              <h2>Self Care</h2>
              <img
                className="dashboard__image--style"
                src={Pic}
                alt="three dots"
              />
            </div>
            <div className="dashboard__bottom--container">
              <p id="selfcare-current" className="hours">
                2hrs
              </p>
              <p id="selfcare-previous">Last Week - 2hrs</p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
