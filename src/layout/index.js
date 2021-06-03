import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";
import { HashRouter} from "react-router-dom";
// import Routes from "../Routes/Routes";

const Layout = () => {
  return(
  <>
    <HashRouter>
      <div>
        <Header />
        <main>
          {/* <Routes /> */}
        </main>
        <Footer />
      </div>
    </HashRouter>
  </>
  );
};
export default Layout;
