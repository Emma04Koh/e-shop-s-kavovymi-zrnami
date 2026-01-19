export type CoffeeBean = {
  name: string
  slug: string
  image: string
  price: number
  stock: number
  taste_notes: string
  description: string
  grind_options: string[]
  quantity?: number
}

export type Coffee = {
  name: string
  slug: string
  image: string
  id: number
  description: string
  region_info: string
  beans: CoffeeBean[]
}
