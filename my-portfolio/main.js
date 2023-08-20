import React from 'react';

const App = () => {
  return (
    <html lang="en-us">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* css files will be here */}
        <link rel="stylesheet" href="./css/reset.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <title>Home</title>
      </head>
      <body>
        <header>
          <li>
            <ul className="dropdown">
              <li>
                <h2>Data Science Projects:</h2>
                <select id="dataScienceDropdown">
                  <option
                    value="https://github.com/seneubauer/extract-transform-load"
                    target="_blank"
                  >
                    Data Science Project 1
                  </option>
                  <option
                    value="https://github.com/codere109/SupervisedLearning"
                    target="_blank"
                  >
                    Data Science Project 2
                  </option>
                  <option
                    value="https://github.com/codere109/matplotlib"
                    target="_blank"
                  >
                    Data Science Project 3
                  </option>
                </select>
              </li>
              <li>
                <h2>Full-Stack Projects:</h2>
                <select id="fullStackDropdown">
                  <option
                    value="https://github.com/Cat-Scratch-Feev/Catterday"
                    target="_blank"
                  >
                    Full-Stack Project 1
                  </option>
                  <option
                    value="https://github.com/Cat-Scratch-Feev/somniary"
                    target="_blank"
                  >
                    Full-Stack Project 2
                  </option>
                  <option value="#">Pending</option>
                </select>
              </li>
            </ul>
          </li>
          {/* Nav-links */}
          <nav id="navbar">
            <div id="nav-links">
              <ul>
                <li>
                  <a href="mailto:moeroberts183@gmail.com" target="_blank">
                    Contact Me
                  </a>
                </li>
                <li>
                  <a href="./static/about.html" target="_blank">
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mauvonte-roberts-bb1b259a/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/codere109" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container">{/* Content goes here */}</div>
        <footer>
          <div className="contact">
            <h3>Contact Number:</h3>
            <p>443-652-2266</p>
          </div>
          <br />
          <div className="trademark">
            Made by Mauvonte Roberts &copy; 2023
          </div>
        </footer>
        <script src="/home.js"></script>
      </body>
    </html>
  );
};

export default main;
