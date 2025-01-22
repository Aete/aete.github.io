import { css } from "goober";
import { textColor, highlightColor } from "../utils/colors";

const introduceTextStyle = css`
  font-weight: 300;
  font-size: 20px;
  line-height: 180%;
  color: ${textColor};
  @media (max-width: 960px) {
    font-size: 18px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const introduceBoldStyle = css`
  font-weight: 700;
`;

const introduceHighlightStyle = css`
  color: ${highlightColor};
  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

export default function introduceText(): Element {
  const $introduceText = document.createElement("div");
  $introduceText.className = introduceTextStyle;
  $introduceText.innerHTML = `<p class="${introduceHighlightStyle} ${introduceTextStyle}">Data visualization specialist <br/></p>
<p class="${introduceTextStyle}">Interested in <span class="${introduceBoldStyle}">visualizing urban data through interactive interface and storytelling.</span></p>
<p class="${introduceTextStyle}">Majored applied urban informatics and architecture.</p>`;

  return $introduceText;
}
