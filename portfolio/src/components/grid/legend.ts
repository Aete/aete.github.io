import { css } from "goober";

import { textColor } from "../../utils/colors";

const legendStyle = css`
  font-size: 15px;
  color: ${textColor};
  margin: 20px 0 30px 0;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0 20px 0;
  }
`;

const legendItemStyle = css`
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

interface LegendItem {
  name: string;
  shape: string;
}

export const Legend = (): Element => {
  const $legend = document.createElement("div");
  $legend.className = legendStyle;

  const legendItems: LegendItem[] = [
    {
      name: "data viz - urban",
      shape: "●", // black circle unicode
    },
    {
      name: "data viz - others",
      shape: "▲", // black triangle unicode
    },
    {
      name: "architectural design",
      shape: "■", // black square unicode
    },
    {
      name: "others",
      shape: "◆", // black diamond unicode
    },
  ];

  legendItems.forEach((item) => {
    const $legendItem = document.createElement("div");
    $legendItem.className = legendItemStyle;
    $legendItem.innerHTML = `${item.shape}&nbsp; ${item.name}`;
    $legend.appendChild($legendItem);
  });

  return $legend;
};
