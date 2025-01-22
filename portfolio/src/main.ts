import { css } from "goober";
import Title from "./components/title";
import { bgColor } from "./utils/colors";
import introduceText from "./components/introduceText";
import { initGrid } from "./components/grid/grid";

const appStyle = css`
  width: 960px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 80px 10px;
  display: flex;
  flex-direction: column;
  background-color: ${bgColor};
  position: relative;

  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  @media (max-width: 960px) {
    width: 100%;
    padding: 50px 50px;
  }
`;

function initApp(app: Element): void {
  app.innerHTML = "";
  app.className = appStyle;

  const $intro = introduceText();
  const $title = Title();

  app.appendChild($title);
  app.appendChild($intro);

  const $grid = initGrid("year");
  app.appendChild($grid);
}

initApp(document.getElementById("app") as Element);
