export interface ProjectInterface {
  title: string;
  year: number;
  image: string;
  imagedark?: boolean; // boolean to determine if the image is dark
  url?: string;
  tag: ProjectTag;
  modal?: boolean;
}

export enum ProjectTag {
  "Data viz - urban",
  "Data viz - others",
  "archiDesign",
  "programming",
  "profile",
}

export enum LegendShape {
  "●",
  "▲",
  "■",
  "◆",
  "○",
}
