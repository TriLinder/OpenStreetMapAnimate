import { browser } from "$app/environment";
import { UserRenderer } from "../lib/map/user_renderer";

if (browser) {
    const userRenderer = new UserRenderer();
}