import ReactDOM from "react-dom/client";
import "./css/style.css";
import Header from "./layout/header";

import Footer from "./layout/footer";
import MainBody from "./mainbody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
