export class OsmProfile {
    public username: string;
    public color: string;

    constructor() {
        this.username = "";
        this.color = "#ffffff";

        this.setColorFromUsername();
    }

    public setColorFromUsername() {
        let hash = 5381;
        for (let i = 0; i < this.username.length; i++) {
            const char = this.username.charCodeAt(i);
            hash = (hash * 33) ^ char;
        }
        const positiveHash = hash >>> 0;
        const hex = (positiveHash & 0xffffff).toString(16).padStart(6, '0');
        
        this.color = `#${hex}`;
    }
}