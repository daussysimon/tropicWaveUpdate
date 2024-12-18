export const continent = {
  name: "continent",
  label: "Continent",
  folder: "src/content/blog/continent",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "blog-continent",
    },
    { label: "titre", name: "title", widget: "string" },
    { label: "Sous-titre", name: "subtitle", widget: "string" },
    {
      label: "Featured Image",
      name: "featuredImage",
      widget: "object",
      fields: [
        { label: "Balise Alt", name: "altPicutre", widget: "string" },
        { label: "Photo", name: "picture", widget: "image" },
      ],
    },
    { labl: "Body", name: "body", widget: "markdown" },
    {
      label: "Seo",
      name: "seo",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
      ],
    },
  ],
};
