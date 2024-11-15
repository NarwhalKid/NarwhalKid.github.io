(function (context, common, patcher) {
    "use strict";

    // Accessing the correct AudioManager module from NativeModules
    const audioManager = common.ReactNative.NativeModules.AudioManager === null
        ? common.ReactNative.NativeModules.RTNAudioManager
        : common.ReactNative.NativeModules.AudioManager;

    // Apply the "instead" patch to the "setCommunicationModeOn" function
    const unpatch = patcher.instead("setCommunicationModeOn", audioManager, () => {
        // Empty function for the patch
    });

    // Attach the unpatch function to be called during onUnload
    context.onUnload = unpatch;

    return context;
})({}, vendetta.metro.common, vendetta.patcher);



// export const MMKVManager = nmp.MMKVManager;
// const { ReactNative: RN } = vendetta.metro.common;
// const { instead } = vendetta.patcher;

// export default {
//     onLoad: () => {
//         try {
//             const audioManager = RN.NativeModules.AudioManager || RN.NativeModules.RTNAudioManager;

//             if (!audioManager) {
//                 console.error("AudioManager or RTNAudioManager not found.");
//                 return;
//             }

//             console.log("AudioManager found:", audioManager);

//             this.unpatch = instead("setCommunicationModeOn", audioManager, () => {
//                 console.log("Patched setCommunicationModeOn");
//             });
//         } catch (error) {
//             console.error("Error in onLoad:", error);
//         }
//     },
//     onUnload: () => {
//         if (this.unpatch) {
//             this.unpatch();
//             this.unpatch = null;
//         }
//     }
// };
