import { css } from "goober";
import { Project } from "../../interface/project";
import { gridColor, textColor } from "../../utils/colors";

const cellStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${textColor};
  text-decoration: none;
  cursor: pointer;
`;

const cellHeaderStyle = css`
  box-sizing: border-box;

  width: 125px;
  min-height: 125px;

  font-weight: 700;
  font-size: 20px;

  border-right: 1px solid ${gridColor};
  padding: 10px 20px;
  margin-right: 10px;
`;

const cellContainerStyle = css`
  box-sizing: border-box;

  width: 125px;
  min-height: 125px;

  margin: 8px 4px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const cellImageStyle = css`
  width: 100%;
`;

const cellTextStyle = css`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 1.2;
  margin-top: 5px;
`;

export const cellHeader = (text: number | string) => {
  const $cellHeader = document.createElement("div");
  $cellHeader.className = `${cellStyle} ${cellHeaderStyle}`;
  $cellHeader.innerHTML = `${text === -1 ? "profile" : text}`;
  return $cellHeader;
};

export const cell = (project: Project) => {
  const $cell = document.createElement("a");
  $cell.className = cellStyle;
  $cell.href = project.url;
  $cell.target = "_blank";

  const $container = document.createElement("div");
  $container.className = cellContainerStyle;

  const $image = document.createElement("img");
  $image.className = cellImageStyle;
  $image.src = project.image;
  $image.alt = project.title;

  const $text = document.createElement("p");
  $text.className = cellTextStyle;
  $text.innerHTML = project.title;

  $container.appendChild($image);
  $container.appendChild($text);

  $cell.appendChild($container);
  return $cell;
};
