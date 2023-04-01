import { TRootState } from "../..";


export const getIsLoggedIn = (store: TRootState) => store.user.activeUser;