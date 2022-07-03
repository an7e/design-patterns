export interface IUserService {
    getUsersInDatabase(): void;
}

export class UserSerice implements IUserService {
    private _users: number;

    getUsersInDatabase(): number {
        return this._users;
    }

    setUsersInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

export function Positive() {
    return (target: Object, propertyKey: string, parameterIndex: number) => {
        console.log(target, propertyKey, parameterIndex);
    };
}

const userSerice = new UserSerice();
console.log(userSerice);
