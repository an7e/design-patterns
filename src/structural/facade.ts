export class Notify {
    send(template: string, to: string) {
        console.log(`send ${template} ${to}`);
    }
}

export class Log {
    log(message: string) {
        console.log(message);
    }
}

export class Template {
    private templates = [{ name: 'other', template: '<h1>Template</h1>' }];
    getByName(name: string) {
        return this.templates.find((t) => t.name === name);
    }
}

export class NotificationFacade {
    private notify: Notify;
    private log: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.log = new Log();
    }

    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.log.log('Template not found');
            return;
        }
        this.notify.send(data.template, to);
        this.log.log('Template sent');
    }
}

const s = new NotificationFacade();
s.send('user@example.com', 'other');
