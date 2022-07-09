export class DocumentItem {
    public text: string;
    private state: DocumentState;

    constructor() {
        this.setState(new DraftDocumentState());
    }

    getState() {
        return this.state;
    }

    setState(state: DocumentState) {
        this.state = state;
        this.state.setContext(this);
    }

    publishDoc() {
        this.state.publish();
    }

    deleteDoc() {
        this.state.delete();
    }
}

export abstract class DocumentState {
    public name: string;
    public item: DocumentItem;

    public setContext(item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;
    public abstract delete(): void;
}

export class DraftDocumentState extends DocumentState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    public publish(): void {
        console.log(`DraftDocument publish ${this.item.text}`);
        this.item.setState(new PublishDocumentState());
    }
    public delete(): void {
        console.log('DraftDocument delete');
    }
}

export class PublishDocumentState extends DocumentState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    public publish(): void {
        console.log('PublishDocument publish');
    }
    public delete(): void {
        console.log('PublishDocument delete');
        this.item.setState(new DraftDocumentState());
    }
}

const item = new DocumentItem();
item.text = 'DocumentItem';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.deleteDoc();
console.log(item.getState());
