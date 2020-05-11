export interface AdminStore {
  userListe: UserListeDaten[];
  isLoading: boolean;
  uploadedImages: string;
  //   newDish: DishCreate[];
  //   newDish: DishCreate;
}

export interface UserListeDaten {
  _id?: String;
  email?: String;
  firstName?: String;
  lastName?: String;
  status?: String;
  password?: String;
}

// export interface DishCreate {
//   name: String;
//   ingredients: String;
//   image: String;
// }
