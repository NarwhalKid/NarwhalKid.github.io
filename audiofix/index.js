const { ReactNative: RN } = vendetta.metro.common;
const { instead } = vendetta.patcher;

export default {
    onLoad: () => {
        const audioManager = RN.NativeModules.AudioManager || RN.NativeModules.RTNAudioManager;
        if (audioManager) {
            this.unpatch = instead("setCommunicationModeOn", audioManager, () => {});
        }
    },
    onUnload: () => {
        if (this.unpatch) {
            this.unpatch();
            this.unpatch = null;
        }
    }
};
