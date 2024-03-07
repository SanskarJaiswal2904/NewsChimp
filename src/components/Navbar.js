import React, { Component} from "react";
import { Link } from "react-router-dom";
import NewsComponent from "./NewsComponent";

export class Navbar extends Component {
  
  render() {
    // let searchItem;

    const sendtoNewsComp = (event) => {
      // searchItem = event.target.value;
      
    }
    const goSearch = () => {
      // <NewsComponent query={searchItem}/>
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand active" to="/">
            {this.props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              
            </ul>
            {/* <div className="d-flex justify-content-end">
                <form className="d-flex justify-content-end">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    onChange={sendtoNewsComp}
                    aria-label="Search"
                  />
                  <button className="btn btn-success" type="submit" onClick={goSearch}>
                    Search
                  </button>
                </form>
              </div> */}
          </div>
        </div>
      </nav>
    );
    
  }
}

export default Navbar;
// export { getSearchText }; // Exporting the getSearchText function
