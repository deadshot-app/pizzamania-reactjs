import "./App.css";
import image2 from "./images/grill.jpg";
import image1 from "./images/roast.jpg";
import image3 from "./images/fried.jpg";
import image4 from "./images/sour.jpg";
import image5 from "./images/fries.jpg";
import image6 from "./images/chick.jpg";
import image7 from "./images/fries.jpg";
import image8 from "./images/sour.jpg";

function App() {
  return (
    <>
      <nav className="navbar navbar-default navbar-home">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              CHICKEN REPUBLIC
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Chicken</a>
              </li>
              <li>
                <a href="#">Chicken Types</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
              ></li>
            </ol>

            <div className="carousel-inner carousel-content" role="listbox">
              <div className="item active">
                <img src={image1} alt="grils" />
              </div>
              <div className="item">
                <img src={image3} alt="chicken" className="img-responsive" />
              </div>
              <div className="item">
                <img src={image4} alt="chicken" className="img-responsive" />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container About">
        <div className="row">
          <h2 className="text-center">About Chicken</h2>
          <div className="col-md-6">
            <img src={image2} alt="About chicken" className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h3>Chicken is awesome</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irured
            </p>
          </div>
        </div>
      </div>
      <div className="container chicken">
        <div className="row">
          <h3 className="text-center">Chicken Types</h3>
          <div className="col-md-3">
            <div className="thumbnail">
              <img src={image5} alt="fries" />
              <div className="caption">
                <h3>chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <img src={image6} alt="fries" />
              <div className="caption">
                <h3>chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <img src={image7} alt="fries" />
              <div className="caption">
                <h3>chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <img src={image8} alt="fries" />
              <div className="caption">
                <h3>chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <p className="text-center">
              &copy: 2019 chicken republic all rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
