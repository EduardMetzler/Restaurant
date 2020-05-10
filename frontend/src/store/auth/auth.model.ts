export interface AuthStore {
  token: String | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  // firstName: String;
  // lastName: String;
  user: UserDaten;
}

export interface UserDaten {
  firstName: String;
  lastName: String;
  // isAdmin: boolean;
  status: String;
}
