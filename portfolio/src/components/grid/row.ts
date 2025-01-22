import { css } from "goober";
import { Project } from "../../interface/project";
import { cell, cellHeader } from "./cell";

const rowStyle = css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
`;

export function initRow(
  projects: Project[],
  header: "year" | "tag",
  value: string | number
) {
  const filteredProjects = projects.filter(
    (project) => project[header] === value
  );

  const $row = document.createElement("div");
  $row.className = rowStyle;

  const $header = cellHeader(value);
  $row.appendChild($header);

  filteredProjects.forEach((project) => {
    const $cell = cell(project);
    $row.appendChild($cell);
  });

  return $row;
}
