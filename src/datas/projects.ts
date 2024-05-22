type Project = {
  name: string;
  websiteUrl?: string;
  downloadUrl?: string;
  repositoryUrl?: string;
};

const projects: Project[] = [
  {
    name: "Make Me Forget",
    websiteUrl: "https://makemeforget.vercel.app/",
  },
  {
    name: "Low Poly City",
    websiteUrl: "https://aquapaka.github.io/three-ts-city/",
    repositoryUrl: "https://github.com/aquapaka/three-ts-city",
  },
  // {
  //   name: "SuGarden web",
  //   websiteUrl: "https://aquapaka.github.io/sugarden-webapp/",
  //   downloadUrl: "",
  //   repositoryUrl: "",
  //   // repositoryUrl: "https://github.com/aquapaka/sugarden-webapp",
  // },
  {
    name: "Dotfiles",
    repositoryUrl: "https://github.com/aquapaka/dotfiles",
  },
  {
    name: "PixelCraft Font",
    repositoryUrl: "https://github.com/aquapaka/Pixelcraft",
  },
  // {
  //   name: "Svelte 5 Todos Demo",
  //   websiteUrl: "https://svelte-5-todo-app.vercel.app/",
  //   downloadUrl: "",
  //   repositoryUrl: "https://github.com/aquapaka/svelte-5-todo-app",
  // },
  // {
  //     name: "Flappy Boat Game",
  //     websiteUrl: "",
  //     downloadUrl:
  //         "https://github.com/aquapaka/flappy-boat-javafx/releases/download/release/flappy-boat-javafx-1.0.jar",
  //     repositoryUrl: "https://github.com/aquapaka/flappy-boat-javafx",
  // },
];

export default projects;
