export interface Lesson {
  title: string;
  link: string;
  description: string;
  type:
    | "Pre-Work"
    | "Educator/Influencer"
    | "Design"
    | "HTML/CSS/Javascript"
    | "Typescript/Node"
    | "General"
    | "Linux"
    | "Devops"
    | "Electron and Desktop Apps"
    | "React Native";
  level: 0 | 1 | 2 | 3 | 4;
  image?: any; //TODO: find the real type for an image
}

export const lessons: Array<Lesson> = [
  {
    title: "Free Typing Practice",
    link: "https://www.keybr.com/#!game",
    type: "Pre-Work",
    description:
      "Learn to type faster with a simple interface and 5 minutes a day. A Great place for a warm up.",
    level: 0
  },
  {
    title: "Best Free Certifications For Software Engineers",
    link:
      "https://preettheman.medium.com/best-free-certifications-for-software-engineers-f525f8d6a4d3",
    type: "Pre-Work",
    description:
      "Do you want a stamp to prove you've got the guts? Then Pop over here and see what certs are out there.",
    level: 0
  },
  {
    title: "...30 high-paying fast-growing jobs that are set to boom...",
    link:
      "https://medium.com/business-insider/30-high-paying-jobs-tha t-are-set-to-boom-over-the-next-decade-9f791b7533e0",
    type: "Pre-Work",
    description: "",
    level: 0
  },
  {
    title: "Vim Adventures",
    link: "https://vim-adventures.com/",
    type: "Pre-Work",
    description:
      "A cute little game that helps you learn the tool VIM for editing files in the command line. A must try for anyone who wants to be a linux cowboy.",
    level: 0
  },
  // Educator/Influencer
  // Educator/Influencer
  // Educator/Influencer
  // Educator/Influencer
  {
    title: "Passive income: bcome a coach",
    link:
      "https://medium.com/swlh/this-is-how-to-make-a-passive-income-machine-in-12-months-c4aed24d3746",
    type: "Educator/Influencer",
    description: "One way to build passive income",
    level: 4
  },
  {
    title: "Best Times to Post on Social Media in 2021",
    link:
      "https://sproutsocial.com/insights/best-times-to-post-on-social-media/",
    type: "Educator/Influencer",
    description:
      "Might be a bit dated, but still an insight to the human psyche with Social Media.",
    level: 0
  },
  {
    title: "Best Times to Post on Social Media in 2021",
    link:
      "https://sproutsocial.com/insights/best-times-to-post-on-social-media/",
    type: "Educator/Influencer",
    description:
      "Might be a bit dated, but still an insight to the human psyche with Social Media.",
    level: 0
  }
];
