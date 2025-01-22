import { css } from "goober";
import { textColor } from "../../utils/colors";

const modalDescriptionStyle = css`
  width: 100%;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  p {
    font-size: 16px;
    line-height: 140%;
    margin: 10px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  img {
    width: 100%;
  }
`;

export function modalDescription(description: string): Element {
  const $modalDescription = document.createElement("div");
  $modalDescription.className = modalDescriptionStyle;
  $modalDescription.innerHTML = description;

  return $modalDescription;
}
