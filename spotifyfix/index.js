const { storage } = vendetta.plugin;
const { before, findByProps } = vendetta.patcher;

// Default settings
const defaultSettings = {
    noSpotifyAutoPause: true,
    keepSpotifyActivityOnIdle: false,
};

// Initialize settings with defaults
storage.settings = storage.settings || defaultSettings;

export default {
    onLoad: function () {
        this.unpatches = []; // Initialize an array to store unpatch functions

        const SpotifyStore = findByProps("dispatch", "getProfile");

        // Patch Spotify auto-pause
        if (storage.settings.noSpotifyAutoPause) {
            this.unpatches.push(
                before("dispatch", SpotifyStore, ([action]) => {
                    if (
                        action.type === "SPOTIFY_PROFILE_UPDATE" &&
                        action.payload?.isPremium === undefined
                    ) {
                        action.payload.isPremium = true; // Force premium
                    }
                })
            );
        }

        // Patch Spotify activity while idle
        if (storage.settings.keepSpotifyActivityOnIdle) {
            const shouldShowActivity = findByProps("shouldShowActivity");
            this.unpatches.push(
                before("shouldShowActivity", shouldShowActivity, (args) => {
                    const [original] = args;
                    if (original?.isIdle) {
                        original.isIdle = false; // Override idle status
                    }
                })
            );
        }
    },
    onUnload: function () {
        // Unload all patches
        if (this.unpatches) {
            this.unpatches.forEach((unpatch) => unpatch());
            this.unpatches = null;
        }
    },
};
