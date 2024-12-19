import { home, blog, article, continent, pays } from "./collections";

const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  locale: "fr",
  media_folder: "static/img",
  public_folder: "/img",
  logo_url: "https://sejaluzbeaute.netlify.app/img/logo.png",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    max_file_size: 10240000,
    folder_support: false,
  },
  collections: [
    {
      name: "page",
      label: "Pages",
      delete: false,
      editor: {
        preview: false,
        frame: true,
      },
      files: [home, blog],
    },
    article,
    continent,
    pays,
  ],
};

export default config;
