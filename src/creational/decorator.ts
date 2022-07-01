interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

class UserSerice implements IUserService {
    users: number;
    getUsersInDatabase(): number {
        throw new Error('Method not implemented.');
    }
}
