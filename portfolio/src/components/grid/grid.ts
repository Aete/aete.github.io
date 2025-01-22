import { projectData } from "../../utils/data";
import { initRow } from "./row";
import { css } from "goober";

const gridStyle = css`
  margin-top: 50px;
`;

export function initGrid(header: "year" | "tag") {
  const sortedProject = [...projectData];
  if (header === "year") {
    sortedProject.sort((a, b) => b["year"] - a["year"]);
  } else {
    sortedProject.sort((a, b) => b["tag"] - a["tag"]);
  }
  const headers = sortedProject
    .map((project) => project[header])
    .filter((value, index, self) => self.indexOf(value) === index);

  const $grid = document.createElement("div");
  $grid.className = gridStyle;
  headers.forEach((value) => {
    const $row = initRow(sortedProject, header, value);
    $grid.appendChild($row);
  });
  return $grid;
}
