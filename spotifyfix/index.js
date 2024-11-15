import { storage } from "@vendetta/plugin";
import { before, findByProps } from "@vendetta/patcher";
import { plugins } from "@vendetta";

// Default settings
const defaultSettings = {
    noSpotifyAutoPause: true,
    keepSpotifyActivityOnIdle: false,
};

// Initialize settings with defaults
storage.settings = storage.settings || defaultSettings;

export const onLoad = () => {
    const SpotifyStore = findByProps("dispatch", "getProfile");

    // Patch Spotify auto-pause
    if (storage.settings.noSpotifyAutoPause) {
        before("dispatch", SpotifyStore, ([action]) => {
            if (
                action.type === "SPOTIFY_PROFILE_UPDATE" &&
                action.payload?.isPremium === undefined
            ) {
                action.payload.isPremium = true; // Force premium
            }
        });
    }

    // Patch Spotify activity while idle
    if (storage.settings.keepSpotifyActivityOnIdle) {
        const shouldShowActivity = findByProps("shouldShowActivity");
        before("shouldShowActivity", shouldShowActivity, (args) => {
            const [original] = args;
            if (original?.isIdle) {
                original.isIdle = false; // Override idle status
            }
        });
    }
};

export const onUnload = () => {
    // Unload all patches
    plugins.clearPatches();
};
