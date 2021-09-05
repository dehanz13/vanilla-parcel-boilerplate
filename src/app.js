import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import User from "./components/User";

import "./scss/app.scss";

console.log("Feel free to use this boilerplate!");

const app = async () => {
  document.getElementById("navbar-content").innerHTML = Navbar();
  document.getElementById("hero").innerHTML = Hero();
  // document.getElementById("user").innerHTML = await User();
};

// Init app
app();
