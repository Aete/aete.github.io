import { css } from "goober";
import { textColor, highlightColor } from "../utils/colors";

const introduceTextStyle = css`
  font-weight: 300;
  font-size: 20px;
  line-height: 180%;
  color: ${textColor};
  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const introduceBoldStyle = css`
  font-weight: 700;
`;

const introduceHighlightStyle = css`
  color: ${highlightColor};
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

export const $introduceText = document.createElement("p");
$introduceText.className = introduceTextStyle;
$introduceText.innerHTML = `<span class="${introduceHighlightStyle}">Data visualization specialist <br/></span>
Interested in <span class="${introduceBoldStyle}">visualizing urban data through interactive interface and storytelling.</span> <br/>
Majored applied urban informatics and architecture.   <br/>`;
