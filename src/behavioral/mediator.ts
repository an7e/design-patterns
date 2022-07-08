export interface Mediator {
    notify(sender: string, event: string): void;
}

export abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

export class Notification {
    send() {
        console.log('Notification');
    }
}

export class Log {
    log(message: string) {
        console.log(message);
    }
}

export class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}

export class NotificationMediator implements Mediator {
    constructor(public notification: Notification, public logger: Log, public handler: EventHandler) {}

    notify(sender: string, event: string): void {
        switch (event) {
            case 'myEvent':
                this.notification.send();
                this.logger.log('send');
                break;

            default:
                break;
        }
    }
}

const handler = new EventHandler();
const logger = new Log();
const notification = new Notification();

const m = new NotificationMediator(notification, logger, handler);
handler.setMediator(m);
handler.myEvent();
