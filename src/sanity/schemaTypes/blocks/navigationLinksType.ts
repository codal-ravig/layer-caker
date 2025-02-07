import { defineField, defineType } from "sanity";

export const navigationLinksType = defineType({
  name: "navigationLinksType",
  title: "Navigation Links ",
  type: "object",
  fields: [
    defineField({
      name: "links",
      title:'Links',
      type: "array",
      of: [{ type: "reference", to: [{ type: "navLinkType" }] }]
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Links",
      };
    },
  },
});