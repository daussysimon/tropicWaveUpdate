export const article = {
  name: "articles",
  label: "Article",
  folder: "src/content/blog/articles",
  create: true,
  slug: "{{fields.slugPerso}}",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "blog-post",
    },
    { label: "Title", name: "title", widget: "string" },
    { label: "SLug", name: "slugPerso", widget: "string" },
    { label: "Publish Date", name: "date", widget: "datetime" },
    { label: "Description", name: "description", widget: "text" },
    {
      name: "informations",
      label: "Infos Utiles",
      widget: "list",
      fields: [
        { label: "title", name: "title", widget: "string" },
        { label: "valeur", name: "valeur", widget: "string" },
        { label: "lien", name: "lien", widget: "string", required: false },
      ],
    },
    {
      label: "Featured Image",
      name: "featuredImage",
      widget: "object",
      fields: [
        { label: "Balise Alt", name: "altPicutre", widget: "string" },
        { label: "Photo", name: "picture", widget: "image" },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
    {
      name: "pays",
      label: "Pays",
      widget: "relation",
      collection: "pays",
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
