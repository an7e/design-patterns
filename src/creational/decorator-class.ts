export interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

@nullUser
@oneUserAdvanced
export class UserSerice implements IUserService {
    users = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

export function nullUser(target: Function) {
    target.prototype.users = 0;
}

export function oneUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 1;
    };
}

console.log(new UserSerice().getUsersInDatabase());
