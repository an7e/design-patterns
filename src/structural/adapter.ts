export class KVDatabase {
    private db: Map<string, string> = new Map();
    save(key: string, value: string) {
        this.db.set(key, value);
    }
}

export class PersistentDB {
    savePersistent(data: Object) {
        console.log(data);
    }
}

export class PersistentDBAdapter extends KVDatabase {
    constructor(public database: PersistentDB) {
        super();
    }
    override save(key: string, value: string) {
        this.database.savePersistent({ key, value });
    }
}

export function run(base: KVDatabase) {
    base.save('key', 'value');
}

run(new PersistentDBAdapter(new PersistentDB()));
