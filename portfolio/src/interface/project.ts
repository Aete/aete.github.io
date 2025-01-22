export interface Project {
  title: string;
  year: number;
  image: string;
  url: string;
  tag: ProjectTag;
}

enum ProjectTag {
  "Data viz - urban",
  "Data viz - others",
  "dataScienceUrban",
  "archiDesign",
  "programming",
  "profile",
}
