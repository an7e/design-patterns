export interface Observer {
    update(subject: Subject): void;
}

export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

export class Lead {
    constructor(public name: string, public phone: string) {}
}

export class NewLead implements Subject {
    private observers: Observer[] = [];
    public state: Lead;

    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

export class NotificationService implements Observer {
    update(subject: Subject): void {
        console.log('NotificationService');
        console.log(subject);
    }
}

export class LeadService implements Observer {
    update(subject: Subject): void {
        console.log('LeadService');
        console.log(subject);
    }
}

const subject = new NewLead();
subject.state = new Lead('User', '1');
const s1 = new NotificationService();
const s2 = new LeadService();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.detach(s2);
subject.notify();
