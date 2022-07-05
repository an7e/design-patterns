export interface IUserService {
    users: number;
    getUsersInDatabase(): void;
}

export class UserSerice implements IUserService {
    @Max(100)
    users = 1000;

    getUsersInDatabase(): void {
        console.log('get users');
    }
}

export function Max(max: number) {
    return (target: Object, propertyKey: string) => {
        console.log(target, propertyKey);
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log(max);
            } else {
                value = newValue;
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}

const userSerice = new UserSerice();
userSerice.users = 1;
console.log(userSerice.users);
userSerice.users = 1000;
console.log(userSerice.users);
