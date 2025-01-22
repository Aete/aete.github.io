import { projectData } from "../../utils/data";
import { Legend } from "./legend";
import { initRow } from "./row";
import { css } from "goober";

const gridStyle = css`
  margin-top: 20px;
  @media (max-width: 960px) {
    margin-top: 0;
  }
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

  const $legend = Legend();
  $grid.appendChild($legend);

  headers.forEach((value) => {
    const $row = initRow(sortedProject, header, value);
    $grid.appendChild($row);
  });
  return $grid;
}
