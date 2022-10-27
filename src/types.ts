export interface montre {
  bracelet?: string;
  ecran?: string;
  boitier?: string;
}

export const colors = {
  "#000000": "Noir",
  "#AE4BD0": "Rose",
  "#A42890": "Magenta",
  "#821342": "RoseFoncé",
  "#FF0000": "Rouge",
  "#E36028": "Orange",
  "#FFFFFF": "Blanc",
  "#2B379E": "Bleu",
  "#1E878D": "Cyan",
  "#255329": "VertFoncé",
  "#379220": "Vert",
  "#FFFF00": "Jaune",
};

export const materiaux = [
  {
    value: "src/assets/Cuir.jpg",
    label: "Cuir",
  },
  {
    value: "src/assets/Métal.jpg",
    label: "Metal",
  },
];