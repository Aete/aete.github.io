import { css } from "goober";
import { bgColor, gridColor, textColor } from "../../utils/colors";

const modalHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  margin: 0 20px;
  border-bottom: 1px solid ${textColor};
  box-sizing: border-box;
`;

const modalTitleStyle = css`
  font-size: 24px;
  font-weight: 700;
`;

const modalBtnStyle = css`
  background-color: transparent;
  border: 1px solid ${textColor};
  color: ${textColor};
  font-size: 16px;
  width: 60px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${textColor};
    color: ${bgColor};
  }
`;

export const ModalHeader = (title: string) => {
  const $modalHeader = document.createElement("div");
  $modalHeader.className = modalHeaderStyle;

  const $title = document.createElement("h2");
  $title.className = modalTitleStyle;
  $title.textContent = title;

  const $closeButton = document.createElement("button");
  $closeButton.textContent = "close";
  $closeButton.className = modalBtnStyle;
  $closeButton.addEventListener("click", () => {
    $modalHeader.parentElement?.parentElement?.remove();
  });

  $modalHeader.appendChild($title);
  $modalHeader.appendChild($closeButton);
  return $modalHeader;
};

const modalCreditStyle = css`
  margin-top: 20px;
  font-size: 14px;
  line-height: 140%;
  color: ${textColor};
  margin: 10px 20px;
  border-bottom: 1px solid ${gridColor};
  p {
    margin-bottom: 5px;
  }
`;

export const ModalCredit = (people: string[], awarded: string | null) => {
  const $modalCredit = document.createElement("div");
  $modalCredit.className = modalCreditStyle;

  const $people = document.createElement("p");
  $people.textContent = `${people.join(", ")}`;

  const $awarded = document.createElement("p");
  $awarded.textContent = `${awarded}`;

  $modalCredit.appendChild($people);
  $modalCredit.appendChild($awarded);
  return $modalCredit;
};
