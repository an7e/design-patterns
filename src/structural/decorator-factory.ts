export interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

@setUsers(2)
@log()
export class UserSerice implements IUserService {
    users = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

export function nullUser(target: Function) {
    target.prototype.users = 0;
}

export function setUsers(users: number) {
    console.log('setUsers init');
    return (target: Function) => {
        console.log('setUsers run');
        target.prototype.users = users;
    };
}

export function log() {
    console.log('log init');
    return (target: Function) => {
        console.log('log run');
    };
}

export function setUserAdvanced(users: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        };
    };
}

export function oneUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 1;
    };
}

console.log(new UserSerice().getUsersInDatabase());
