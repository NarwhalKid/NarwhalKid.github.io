export const MMKVManager = nmp.MMKVManager;
const { ReactNative: RN } = vendetta.metro.common;
const { instead } = vendetta.patcher;

export default {
    onLoad: () => {
        try {
            const audioManager = RN.NativeModules.AudioManager || RN.NativeModules.RTNAudioManager;

            if (!audioManager) {
                console.error("AudioManager or RTNAudioManager not found.");
                return;
            }

            console.log("AudioManager found:", audioManager);

            this.unpatch = instead("setCommunicationModeOn", audioManager, () => {
                console.log("Patched setCommunicationModeOn");
            });
        } catch (error) {
            console.error("Error in onLoad:", error);
        }
    },
    onUnload: () => {
        if (this.unpatch) {
            this.unpatch();
            this.unpatch = null;
        }
    }
};
