import React from 'react';

// Ui Kit
import IndexHeader from "components/Header.js";
import DarkFooter from "components/DarkFooter.js";
import Body from "components/Body.js";

function Main() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
    return (
        <>
            <div className="wrapper">
                <IndexHeader />
                <div className="main">
                    <Body />
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default Main;