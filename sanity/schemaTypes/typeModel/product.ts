export const productType = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "Category",
        },
      ],
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      validation: (Rule: any) => Rule.max(4), 
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
