export interface AdminStore {
  userListe: UserListeDaten[];
}

export interface UserListeDaten {
  _id?: String;
  email?: String;
  firstName?: String;
  lastName?: String;
  status?: String;
  password?: String;
}
