import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header";
import { Estate } from "../components/Estate";

const pathname = window.location.pathname;
let apiURL = "";

if (pathname === "/" || pathname === "/index.html") {
  window.location.pathname = "/dum01.html";
} else if (pathname === "/dum01.html") {
  apiURL = "https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01";
} else if (pathname === "/dum02.html") {
  apiURL = "https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02";
} else if (pathname === "/dum03.html") {
  apiURL = "https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03";
} else if (pathname === "/dum04.html") {
  apiURL = "https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04";
} else {
  console.error("Unknown page:", pathname);
}

const response = await fetch(apiURL);
const data = await response.json();
const { title, text, price, city, contact, photo } = data;
const { name, email, phone } = contact;

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <Header />
    <Estate
      title={title}
      text={text}
      price={price}
      city={city}
      photo={photo}
      name={name}
      email={email}
      phone={phone}
    />
  </div>
);
