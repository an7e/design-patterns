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

const user = new UserHistory('user@example.com', 'User');
const user2 = user.clone();
user2.email = 'user2@example.com';
console.log(user);
console.log(user2);
