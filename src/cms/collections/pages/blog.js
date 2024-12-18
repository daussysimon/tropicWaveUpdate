export const blog = {
  name: "homePage",
  label: "Home",
  file: "/content/blog/index.md",
  description: "Home page informations",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "blog",
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
        { name: "title", label: "titre", widget: "string" },
        { name: "subtitle", label: "sous-titre", widget: "string" },
      ],
    },
    {
      name: "abousUs",
      label: "A propos",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Titre",
          widget: "string",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
        {
          name: "picture",
          label: "Image",
          widget: "object",
          fields: [
            { name: "alt", label: "Alt", widget: "string" },
            { name: "picture", label: "Image", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "travel",
      label: "Voyage avec nous",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Titre",
          widget: "string",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
        {
          name: "button",
          label: "button",
          widget: "object",
          fields: [
            {
              name: "titre",
              label: "Titre",
              widget: "string",
            },
            { name: "link", label: "Lien", widget: "string" },
          ],
        },
        {
          name: "picture",
          label: "Image",
          widget: "object",
          fields: [
            { name: "alt", label: "Alt", widget: "string" },
            { name: "picture", label: "Image", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "agency",
      label: "L'agence",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Titre",
          widget: "string",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
        {
          name: "button",
          label: "button",
          widget: "object",
          fields: [
            {
              name: "titre",
              label: "Titre",
              widget: "string",
            },
            { name: "link", label: "Lien", widget: "string" },
          ],
        },
        {
          name: "picture",
          label: "Image",
          widget: "object",
          fields: [
            { name: "alt", label: "Alt", widget: "string" },
            { name: "picture", label: "Image", widget: "image" },
          ],
        },
      ],
    },
  ],
};
