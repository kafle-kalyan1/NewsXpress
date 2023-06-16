import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const navigate = useNavigate();

  const handleCountryChange = (event) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
    navigate(`/${newCountry}`);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={`/`}>
          {/* <a className="navbar-brand" href={`/${selectedCountry}`}> */}
            NewsXpress
          </a>
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
                <a className="nav-link active" aria-current="page" href={`/`}>
                {/* <a className="nav-link active" aria-current="page" href={`/${selectedCountry}`}> */}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/business`}>
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/entertainment`}>
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/general`}>
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/health`}>
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/science`}>
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/sports`}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${selectedCountry}/technology`}>
                  Technology
                </a>
              </li>
            <select
              className="form-select"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="us">United States</option>
              {/* <option value="in">India</option> */}
            </select>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
