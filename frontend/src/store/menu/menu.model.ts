export interface MenuStore {
  allDishs: Dish[];
  menuCategoryListe: MenuCategory[];
}

export interface Dish {
  name: String;
  ingredients: String;
  image: string;
  price: string;
  catigory: String;
}

export interface MenuCategory {
  id: String;
  value: String;
}
