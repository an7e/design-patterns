export interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

export class UserSerice implements IUserService {
    users = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

export function nullUser(obj: IUserService) {
    obj.users = 0;
    return obj;
}

export function logUsers(obj: IUserService) {
    console.log('Users: ' + obj.users);
    return obj;
}

console.log(new UserSerice().getUsersInDatabase());
console.log(nullUser(new UserSerice()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserSerice())).getUsersInDatabase());
console.log(nullUser(logUsers(new UserSerice())).getUsersInDatabase());
