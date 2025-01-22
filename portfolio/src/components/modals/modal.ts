import { css } from "goober";

const modalStyle = css`
  position: absolute;
  top: 0;
  left: calc(50% - 50vw);
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-x: hidden;
`;

export default function Modal(): Element {
  const $modal = document.createElement("div");
  $modal.className = modalStyle;

  $modal.addEventListener("click", () => {
    $modal.remove();
  });
  return $modal;
}
