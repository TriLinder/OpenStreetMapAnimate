import { OsmProfile } from "./osm_profile";
import { Track } from "./track";

export class User {
    public osmProfile: OsmProfile;
    public track: Track;

    constructor() {
        this.osmProfile = new OsmProfile();
        this.track = new Track();
    }
}