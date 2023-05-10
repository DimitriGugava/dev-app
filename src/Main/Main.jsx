import "./Main.css";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import MoreFilter from "../icons/morefilter.svg";
import SearchButton from "../icons/searchbutton.svg";
import Content from "../Content/Content";
import { useState, useEffect } from "react";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main_Container">
      <div className="header_Container">
        <div className="header_Content_Box">
          <h1 className="header_Content_Text">devjobs</h1>
          <div className="header_Switch_Box">
            <img className="sun" src={sun} />
            <label className="switch" htmlFor="toggle">
              <input type="checkbox" className="checkbox" id="toggle" />
              <span className="slider"></span>
            </label>
            <img className="moon" src={moon} />
          </div>
        </div>
      </div>
      <div className="filter_Container">
        <input
          type="text"
          className="filter_Input"
          placeholder="Filter by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img className="moreFilter" src={MoreFilter} />
        <img className="searchButton" src={SearchButton} />
      </div>
      <Content searchTerm={searchTerm} />
      {/* <SubContent /> */}
    </div>
  );
};

export default Main;
