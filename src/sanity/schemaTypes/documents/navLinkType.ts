import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const navLinkType = defineType({
  name: "navLinkType",
  title: "Navigation Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "string",
    }),
    defineField({
        name: "isActive",
        type: "boolean",
      }),
      defineField({
        name: "openInNewTab",
        type: "boolean",
      }),
  ],
});