import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import User from "./components/User";

import "./scss/app.scss";

console.log("Feel free to use this boilerplate!");

const App = async () => {
  // const template = document.createElement("template");
  // template.innerHTML = `
  // 		<div class="container">
  // 			${Header()}
  // 			${await User()}
  // 		</div>
  // 	`;
  // // Return a new node from template
  // return template.content.cloneNode(true);

  document.getElementById("navbar-content").innerHTML = Navbar();
  document.getElementById("hero").innerHTML = Hero();
  // document.getElementById("user").innerHTML = await User();
};

// Init App
App();
