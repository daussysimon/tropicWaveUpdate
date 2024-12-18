export const pays = {
  name: "pays",
  label: "Pays",
  folder: "src/content/blog/pays",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "blog-country",
    },
    { label: "titre", name: "title", widget: "string" },
    { label: "Sous-titre", name: "subtitle", widget: "string" },
    {
      label: "Featured Image",
      name: "featuredImage",
      widget: "object",
      fields: [
        { label: "Balise Alt", name: "altPicutre", widget: "string" },
        { label: " Photo", name: "picture", widget: "image" },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
    {
      name: "continent",
      label: "Continent",
      widget: "relation",
      collection: "continent",
      searchFields: "title",
      valueField: "title",
    },

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
