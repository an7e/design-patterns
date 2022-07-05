export interface IUserService {
    users: number;
    getUsersInDatabase(): void;
}

export class UserSerice implements IUserService {
    users = 1000;

    @Log
    getUsersInDatabase(): void {
        console.log('get users');
    }
}

export function Log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
    console.log(target, propertyKey, descriptor);
    descriptor.value = () => {
        console.log('log users');
    };
}

export function LogFactory() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => {
        console.log(target, propertyKey, descriptor);
        descriptor.value = () => {
            console.log('log factory users');
        };
    };
}

console.log(new UserSerice().getUsersInDatabase());
