// db.ts
//import "fake-indexeddb/auto";
import Dexie, { type EntityTable } from 'dexie';

interface Note {
    id: number;
    title: string;
    timestamp: number;
    content: string;

}

const db = new Dexie('FriendsDatabase') as Dexie & {
  notes: EntityTable<Note,'id'>;  // primary key "id" (for the typings only)
};

// Schema declaration:
db.version(1).stores({
  notes: '++id, title, timestamp, content' // primary key "id" (for the runtime!)
});

//db.delete().then (()=>db.open());

export type { Note };
export { db };
