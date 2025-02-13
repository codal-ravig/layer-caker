import { defineArrayMember, defineField, defineType } from 'sanity';

export const linksBlockType = defineType({
  name: 'linksBlock',
  title: 'Links Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'link' } })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Links',
      };
    },
  },
});
