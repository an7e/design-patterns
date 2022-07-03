import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

export interface IUserService {
    getUsersInDatabase(): void;
}

export class UserSerice implements IUserService {
    private _users: number;

    getUsersInDatabase(): number {
        return this._users;
    }

    @Validate()
    setUsersInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

export function Positive() {
    return (target: Object, propertyKey: string, parameterIndex: number) => {
        console.log(target, propertyKey, parameterIndex);
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
        const existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}

export function Validate() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => {
        const method = descriptor.value;
        descriptor.value = function (...args: any) {
            const positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if (positiveParams) {
                for (const index of positiveParams) {
                    if (args[index] < 0) {
                        console.log('args[index] < 0');
                    }
                }
            }
            return method?.apply(this, args);
        };
    };
}

const userSerice = new UserSerice();
console.log(userSerice.setUsersInDatabase(10));
console.log(userSerice.setUsersInDatabase(-1));
