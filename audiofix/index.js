export default {
    
    onLoad() {
      // Hook into the WebRTC API or any relevant audio-related function
      const audioModule = vendetta.metro.findByProps("setCommunicationModeOn");
  
      if (audioModule && audioModule.setAudioType) {
        const originalSetAudioType = audioModule.setAudioType;
  
        audioModule.setAudioType = function (type, ...args) {
          // Prevent setting 'in_call' audio type
          if (type === "in_call") {
            console.log("Blocked 'in_call' audio type.");
            return;
          }
          return originalSetAudioType.apply(this, [type, ...args]);
        };
  
        console.log("Patched setAudioType!");
      } else {
        console.warn("Audio module not found. Plugin might not work as expected.");
      }
    },
  
    onUnload() {
      // Restore original behavior
      const audioModule = vendetta.metro.findByProps("setCommunicationModeOn");
      if (audioModule && audioModule.setAudioType) {
        delete audioModule.setAudioType;
      }
    }
  };


// (function (context, common, patcher) {
//     "use strict";

//     // Accessing the correct AudioManager module from NativeModules
//     const audioManager = common.ReactNative.NativeModules.AudioManager === null
//         ? common.ReactNative.NativeModules.RTNAudioManager
//         : common.ReactNative.NativeModules.AudioManager;

//     // Apply the "instead" patch to the "setCommunicationModeOn" function
//     const unpatch = patcher.instead("setCommunicationModeOn", audioManager, () => {
//         // Empty function for the patch
//     });

//     // Attach the unpatch function to be called during onUnload
//     context.onUnload = unpatch;

//     return context;
// })({}, vendetta.metro.common, vendetta.patcher);





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
