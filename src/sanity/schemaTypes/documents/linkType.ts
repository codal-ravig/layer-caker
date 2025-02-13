import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
    }),
    defineField({
      name: 'openInNewTab',
      type: 'boolean',
    }),
  ],
  initialValue: {
    openInNewTab: false,
  },
});