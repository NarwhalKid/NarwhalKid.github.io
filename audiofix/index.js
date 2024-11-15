// (function (context, metro) {
//     "use strict";

//     const patch = () => {
//         if (metro.findByProps("setCommunicationModeOn").setCommunicationModeOn) {
//             metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup = metro.findByProps("setCommunicationModeOn").setCommunicationModeOn
            
//         }
//     }

//     const unpatch = () => {
//         metro.findByProps("setCommunicationModeOn").setCommunicationModeOn = metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup
//     }
    

//     context.onUnload = unpatch;
//     context.onLoad = patch;

// })({}, vendetta.metro);

(function (context, metro) {
    "use strict";

    // Apply the "instead" patch to the "setCommunicationModeOn" function
    const unpatch = delete metro.findByProps("setCommunicationModeOn").setCommunicationModeOn

    // Attach the unpatch function to be called during onUnload
    context.onUnload = unpatch;

    return context;
})({}, vendetta.metro.common);