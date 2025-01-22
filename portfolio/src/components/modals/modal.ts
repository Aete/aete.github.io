import { css } from "goober";
import { textColor } from "../../utils/colors";
import { modalData } from "../../utils/modalData";
import { ModalInterface } from "../../types/modals";
import { ModalHeader, ModalCredit } from "./header";
import { modalDescription } from "./description";

const modalBgStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-x: hidden;
`;

const modalStyle = css`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${"#fff"};
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 700px;
  max-height: 85%;
  color: ${textColor};
  overflow-y: auto;
`;

export default function Modal(title: string): Element {
  const selectedModal = modalData.find(
    (modal) => modal.title === title
  ) as ModalInterface;
  const $modalContainer = document.createElement("div");
  $modalContainer.className = modalBgStyle;

  const $modal = document.createElement("div");
  $modal.className = modalStyle;

  const $modalHeader = ModalHeader(title);
  $modal.appendChild($modalHeader);

  const $modalCredit = ModalCredit(
    selectedModal.people,
    selectedModal.awarded ? selectedModal.awarded : null
  );
  $modal.appendChild($modalCredit);

  const $modalDescription = modalDescription(selectedModal.description);
  $modal.appendChild($modalDescription);

  $modalContainer.appendChild($modal);

  $modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  $modalContainer.addEventListener("click", () => {
    $modalContainer.remove();
  });

  return $modalContainer;
}
