import { css } from "goober";
import { LegendShape, ProjectInterface } from "../../types/project";
import { bgColor, gridColor, textColor } from "../../utils/colors";
import Modal from "../modals/modal";

const cellStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${textColor};
  text-decoration: none;
`;

const cellHeaderStyle = css`
  box-sizing: border-box;

  width: 125px; /* Fixed width */
  min-height: 125px;

  font-weight: 700;
  font-size: 20px;

  border-right: 1px solid ${gridColor};
  padding: 10px 20px;
  margin-right: 10px;

  flex-shrink: 0; /* Prevent CellHeader from shrinking */

  display: flex;
  align-items: flex-start;
  padding-top: 66px;

  @media (max-width: 960px) {
    width: 60px;
    font-size: 16px;
    padding: 10px 10px;
    padding-top: 66px;
  }
`;

const cellBodyStyle = css`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1; /* Allow CellBody to grow and take available space */
`;

const cellContainerStyle = css`
  box-sizing: border-box;

  width: 125px;
  height: 175px;

  margin: 12px 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const cellImageContainerStyle = css`
  position: relative;
`;

const cellImageStyle = css`
  width: 100%;
`;

const cellTextContainerStyle = css`
  display: flex;
  height: 34px;
  align-items: center; /* Center the text vertically */
`;

const cellTextStyle = css`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 1.2;
  margin-top: 5px;
`;

const legendShapeStyle = css`
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 3px;
  font-size: 12px;
  color: ${textColor};
`;

const cellHoverStyle = css`
  background-color: ${bgColor};
  width: 125px;
  height: 125px;
  position: absolute;
  z-index: 2;
  top: 0;
  display: none;
  padding: 5px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  background-color: #212121;
`;

const cellHoverTextStyle = css`
  font-size: 13px;
  line-height: 1.5;
`;

export const CellHeader = (text: number | string) => {
  const $cellHeader = document.createElement("div");
  $cellHeader.className = `${cellStyle} ${cellHeaderStyle}`;
  $cellHeader.innerHTML = `${text === -1 ? "links" : text}`;
  return $cellHeader;
};

export const CellBody = (projects: ProjectInterface[]) => {
  const $cellBody = document.createElement("div");
  $cellBody.className = cellBodyStyle;
  projects.forEach((project) => {
    $cellBody.appendChild(Cell(project));
  });
  return $cellBody;
};

const Cell = (project: ProjectInterface) => {
  const $cell = document.createElement("a");
  $cell.className = cellStyle;

  if (project.url) {
    $cell.href = project.url;
    $cell.target = "_blank";
  } else {
    $cell.addEventListener("click", () => {
      const $modal = Modal(project.title) as HTMLDivElement;
      document.getElementById("app")?.appendChild($modal);
      return;
    });
  }

  const $container = document.createElement("div");
  $container.className = cellContainerStyle;

  const $imageContainer = document.createElement("div");
  $imageContainer.className = cellImageContainerStyle;

  const $image = document.createElement("img");
  $image.className = cellImageStyle;
  $image.src = project.image;
  $image.alt = project.title;

  const $legend = document.createElement("span");
  $legend.className = legendShapeStyle;
  $legend.innerHTML = project.tag < 4 ? LegendShape[project.tag] : "";

  const $hover = document.createElement("div");
  if (project.tag !== 4) {
    $hover.className = cellHoverStyle;
  }

  if (project.summary !== undefined) {
    const $hoverText = document.createElement("p");
    $hoverText.className = cellHoverTextStyle;
    $hoverText.style.color = "#fff";
    $hoverText.innerHTML = project.summary;
    $hover.appendChild($hoverText);

    const $hoverToolText = document.createElement("p");
    $hoverToolText.className = cellHoverTextStyle;
    $hoverToolText.style.color = "#fff";
    $hoverToolText.innerHTML = project.tool ? `- ${project.tool}` : "";
    $hover.appendChild($hoverToolText);
  }

  if (project.imagedark === true) {
    $legend.style.color = "#fff";
  }

  $imageContainer.appendChild($image);
  $imageContainer.appendChild($legend);
  $imageContainer.appendChild($hover);

  $imageContainer.addEventListener("mouseenter", () => {
    $hover.style.display = "flex";
  });

  $imageContainer.addEventListener("mouseleave", () => {
    $hover.style.display = "none";
  });

  const $textContainer = document.createElement("div");
  $textContainer.className = cellTextContainerStyle;
  const $text = document.createElement("p");
  $text.className = cellTextStyle;
  $text.innerHTML = project.title;
  $textContainer.appendChild($text);

  $container.appendChild($imageContainer);
  $container.appendChild($textContainer);

  $cell.appendChild($container);
  return $cell;
};
