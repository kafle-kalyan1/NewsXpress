import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter,Switch , Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [progress, setProgress] = useState(0);
  const pageSize = 12;
  // apiKey =" 3f4157ed3e2b468ba8ef6ed10521eb4e"

  return (
    <div>
      <BrowserRouter>
        <NavBar
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Routes>

          <Route
            exact
            // path={`/${selectedCountry}/`}
            path={`/`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={selectedCountry}
                category="general"
                />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/business`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={selectedCountry}
                category="business"
              />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/entertainment`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={selectedCountry}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/general`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={selectedCountry}
                category="general"
              />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/health`}
            element={
              <News
              setProgress={setProgress}
                //apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={selectedCountry}
                category="health"
              />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/science`}
            element={
              <News
              setProgress={setProgress}
              //apiKey={apiKey}
              key="science"
              pageSize={pageSize}
                country={selectedCountry}
                category="science"
              />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/sports`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={selectedCountry}
                category="sports"
                />
            }
          />
          <Route
            exact
            path={`/${selectedCountry}/technology`}
            element={
              <News
                setProgress={setProgress}
                //apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={selectedCountry}
                category="technology"
              />
            }
          />
<Route path={`*`} element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};
const NotFound = () => {
  return <h1>404 - Page Not Found</h1>
}

export default App;
