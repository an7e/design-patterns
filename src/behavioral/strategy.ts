export class User {
    githubToken: string;
    jwtToken: string;
}

export interface AuthStrategy {
    auth(user: User): boolean;
}

export class Auth {
    constructor(private strategy: AuthStrategy) {}

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;
    }

    public authUser(user: User): boolean {
        return this.strategy.auth(user);
    }
}

export class JWTStrategy implements AuthStrategy {
    auth(user: User): boolean {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}

export class GitHubStrategy implements AuthStrategy {
    auth(user: User): boolean {
        if (user.githubToken) {
            return true;
        }
        return false;
    }
}

const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));
