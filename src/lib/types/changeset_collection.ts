import type { Changeset } from "./changeset";

export class ChangesetCollection {
    public changesets: Changeset[];

    constructor() {
        this.changesets = [];
        
        this.reset();
    }

    public reset() {
        this.changesets = [];
    }

    public addChangeset(changeset: Changeset) {
        this.changesets.push(changeset);
    }

    public getTotalChangeCount() {
        let count = 0;

        this.changesets.forEach(function(changeset) {
            count += changeset.changes.length;
        });

        return count;
    }
}