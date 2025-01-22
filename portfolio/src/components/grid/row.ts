import { css } from "goober";
import { Project } from "../../types/project";
import { CellHeader, CellBody } from "./cell";

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

  const $header = CellHeader(value);
  $row.appendChild($header);

  const $cellBody = CellBody(filteredProjects);
  $row.appendChild($cellBody);

  return $row;
}
