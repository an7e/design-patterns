export class Form {
    constructor(public name: string) {}
}

export abstract class SaveForm<T> {
    save(form: Form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }

    protected abstract fill(form: Form): T;
    protected log(data: T): void {
        console.log(data);
    }
    protected abstract send(data: T): void;
}

export class FirstAPI extends SaveForm<string> {
    protected fill(form: Form): string {
        return form.name;
    }
    protected send(data: string): void {
        console.log(`FirstAPI send ${data}`);
    }
}

export class SecondAPI extends SaveForm<{ fio: string }> {
    protected fill(form: Form): { fio: string } {
        return { fio: form.name };
    }
    protected send(data: { fio: string }): void {
        console.log(`SecondAPI send ${data}`);
    }
}

const form1 = new FirstAPI();
form1.save(new Form('Name'));

const form2 = new SecondAPI();
form2.save(new Form('Name'));
