import React from "react";
import Home from "../../Pages/Home";
import Categories from "../Categories/Categories";

function Tabs() {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift w-full">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-tr-[16px] checked:bg-warning not-checked:border-b-blue-700 checked:border-blue-700"
          aria-label="Home"
          defaultChecked
        />
        <div className="tab-content bg-warning border border-blue-700 p-4">
          <Home />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-tr-[16px] checked:bg-info not-checked:border-b-blue-700 checked:border-blue-700"
          aria-label="Categories"
        />
        <div className="tab-content bg-info/75 border border-blue-700 p-4 min-h-[200px]">
          <Categories/>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-tr-[16px] checked:bg-error not-checked:border-b-blue-700 checked:border-blue-700"
          aria-label="Best Sellers"
        />
        <div className="tab-content bg-error border  border-blue-700 p-4 min-h-[200px]">
          Best Sellers
        </div>

        <div className="theme absolute right-0 mt-2">
          <label className="mb-2 text-sm">Toggle</label>
          <label className="toggle text-base-content ml-2 mb-1">
            <input type="checkbox" value="synthwave" className="theme-controller" />
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}

export default Tabs;