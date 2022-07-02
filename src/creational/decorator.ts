interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

class UserSerice implements IUserService {
    users = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function nullUser(obj: IUserService) {
    obj.users = 0;
    return obj;
}

function logUsers(obj: IUserService) {
    console.log('Users: ' + obj.users);
    return obj;
}

console.log(new UserSerice().getUsersInDatabase());
console.log(nullUser(new UserSerice()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserSerice())).getUsersInDatabase());
