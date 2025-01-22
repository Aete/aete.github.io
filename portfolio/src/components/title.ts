import { css } from "goober";
import { textColor } from "../utils/colors";

const headerStyle = css`
  font-size: ${48}px;
  font-weight: 300;
  color: ${textColor};
  margin-bottom: 33px;
`;

export const $title = document.createElement("h1");
$title.className = headerStyle;
$title.textContent = "Seunggyun Han";
