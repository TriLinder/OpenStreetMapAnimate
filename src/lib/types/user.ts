import { OsmProfile } from "./osm_profile";
import { Track } from "./track";
import { ChangesetCollection } from "./changeset_collection";

export class User {
    public osmProfile: OsmProfile;
    public track: Track;
    public changesetCollection: ChangesetCollection;

    public addedToMap: boolean;

    constructor() {
        this.osmProfile = new OsmProfile();
        this.track = new Track();
        this.changesetCollection = new ChangesetCollection();

        this.addedToMap = false;
    }
}