export interface IProvider {
    sendMessage(message: string): void;
    connect(config: string): void;
    disconnect(): void;
}

export class TelegramProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('disconnect TelegramProvider');
    }
}

export class WhatsAppProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('disconnect WhatsAppProvider');
    }
}

export class NotificationSender {
    constructor(private provider: IProvider) {}
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

export class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
        super(provider);
    }
    sendDelayed() {
        console.log('sendDelayed');
    }
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsAppProvider());
sender2.send();
