const { before } = vendetta.patcher;
const { findByProps } = vendetta.metro;

export default {
    onLoad: function () {
        this.unpatches = []; // Initialize an array to store unpatch functions

        const SpotifyStore = findByProps("dispatch", "getProfile");

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
    },
    onUnload: function () {
        // Unload all patches
        if (this.unpatches) {
            this.unpatches.forEach((unpatch) => unpatch());
            this.unpatches = null;
        }
    },
};
