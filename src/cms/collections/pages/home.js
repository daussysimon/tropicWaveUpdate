export const home = {
  name: "homePage",
  label: "Home",
  file: "/content/index.md",
  description: "Home page informations",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "index-page",
    },
    {
      name: "header",
      label: "Header",
      // summary: "{{fields.title}}: {{fields.description}}",
      widget: "object",
      fields: [
        {
          name: "backgroundImage",
          label: "Image de fond",
          widget: "image",
        },
        {
          name: "headerButton",
          label: "Bouton ",
          widget: "object",
          fields: [
            {
              name: "visible",
              label: "Visible",
              widget: "boolean",
            },
            {
              name: "title",
              label: "Titre",
              widget: "string",
            },
            {
              name: "link",
              label: "lien vers",
              widget: "string",
            },
          ],
        },
        { name: "title", label: "titre", widget: "string" },
        { name: "subtitle", label: "sous-titre", widget: "string" },
      ],
    },
    {
      name: "services",
      label: "Services",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Titre",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "list",
          fields: [
            { name: "label", label: "Label", widget: "string" },
            { name: "picture", label: "Image", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "aboutUs",
      label: "Qui nous somme",
      widget: "object",
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
      ],
    },
    {
      name: "ourServices",
      label: "Nos services",
      widget: "list",
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        {
          name: "descriptions",
          label: "Description",
          widget: "string",
        },
      ],
    },
    {
      name: "ourProjects",
      label: "Nos projets",
      widget: "object",
      fields: [{ name: "title", label: "Titre", widget: "string" }],
    },
    {
      name: "boutique",
      label: "La boutique",
      widget: "object",
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        { name: "subtitle", label: "Sous-titre", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "logo", label: "Logo", widget: "image" },
      ],
    },
  ],
};
