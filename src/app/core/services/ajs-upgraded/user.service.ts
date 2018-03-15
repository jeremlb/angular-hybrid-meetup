import { User } from "../../models/user.interface";

export abstract class UserService {
  abstract getLoggedUser(): Promise<User>;
}

export const createUserService = (i: any): any => i.get('UserService');

export const UserServiceProvider = {
  provide: UserService,
  useFactory: createUserService,
  deps: ['$injector'],
};
