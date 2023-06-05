import { Change } from "./change";

export class Changeset {
    public id: number;
    public changes: Change[];

    constructor(id: number) {
        this.id = id;
        this.changes = [];
    }

    public async loadChanges() {
        const url = `https://www.openstreetmap.org/api/0.6/changeset/${this.id}/download`;

        const response = await fetch(url);
        const xmlString = await response.text();

        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(xmlString, 'text/xml');

        // https://wiki.openstreetmap.org/wiki/Elements
        const ways = xmlDocument.getElementsByTagName("way");
        const nodes = xmlDocument.getElementsByTagName("node");

        for (const node of nodes) {
            // Parse the node's info
            const id = Number(node.getAttribute("id"));
            const lon = Number(node.getAttribute("lon"));
            const lat = Number(node.getAttribute("lat"));
            const timestamp = new Date(String(node.getAttribute("timestamp"))).getTime();

            // Add the change
            const change = new Change(`${this.id}-node-${id}-${Math.random()*10**16}`, lon, lat, timestamp);
            this.changes.push(change);
        }

        // Ways are a set of nodes and don't have their own coordinates. Therefore we must handle them differently
        for (const way of ways) {
            // All we really know about the way right now
            const id = Number(way.getAttribute("id"));
            const timestamp = new Date(String(way.getAttribute("timestamp"))).getTime();

            // Find the way's start node
            const startNode = way.getElementsByTagName("nd")[0];
            const startNodeId = Number(startNode.getAttribute("ref"));

            // Get the node's location
            const url = `https://www.openstreetmap.org/api/0.6/node/${startNodeId}.json`;
            
            const response = await fetch(url);
            const data = await response.json();

            let lon: number = data["elements"][0]["lon"];
            let lat: number = data["elements"][0]["lat"];

            // Finally add the change
            const change = new Change(`${this.id}-way-${id}-${Math.random()*10**16}`, lon, lat, timestamp);
            this.changes.push(change);
        }
    }
}