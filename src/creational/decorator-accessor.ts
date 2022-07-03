export interface IUserService {
    getUsersInDatabase(): void;
}

export class UserSerice implements IUserService {
    private _users: number;

    @Log()
    public set users(num: number) {
        this._users = num;
    }

    public get users() {
        return this._users;
    }

    getUsersInDatabase(): void {
        console.log('get users');
    }
}

export function Log() {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, descriptor);
        const set = descriptor.set;
        descriptor.set = (...args: any) => {
            console.log(args);
            set?.apply(target, args);
        };
    };
}

const userSerice = new UserSerice();
userSerice.users = 1;
console.log(userSerice.users);
