import { AuthStore } from "./auth/auth.model";
import { ErrorStore } from "./error/error.model";
import { AdminStore } from "./admin/admin.model";
import { MenuStore } from "./menu/menu.model";

export interface AppState {
  auth: AuthStore;
  error: ErrorStore;
  admin: AdminStore;
  menu: MenuStore;
}
