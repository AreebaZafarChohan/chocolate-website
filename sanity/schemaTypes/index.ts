import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './typeModel/product'
import { categoryType } from './typeModel/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],
}
