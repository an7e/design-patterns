export interface Prototype<T> {
    clone(): T;
}

export class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        const target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

const user = new UserHistory('user@github.com', 'User');
const user2 = user.clone();
user2.email = 'user2@github.com';
console.log(user);
console.log(user2);
