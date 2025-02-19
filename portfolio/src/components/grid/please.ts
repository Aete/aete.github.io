import { css } from "goober";
import { textColor } from "../../utils/colors";

const pleaseStyle = css`
  color: ${textColor};
  font-weight: 300;
  margin-top: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export default function Please() {
  const text = "Please click project thumbnails to see more details.";
  const $please = document.createElement("div");
  $please.className = pleaseStyle;
  $please.innerHTML = text;
  return $please;
}
