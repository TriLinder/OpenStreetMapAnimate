import { OsmProfile } from "./osm_profile";
import { Track } from "./track";
import { ChangesetCollection } from "./changeset_collection";

export class User {
    public osmProfile: OsmProfile;
    public track: Track;
    public changesets: ChangesetCollection;

    constructor() {
        this.osmProfile = new OsmProfile();
        this.track = new Track();
        this.changesets = new ChangesetCollection();
    }
}