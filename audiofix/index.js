(function (context, metro) {
    "use strict";

    const patch = () => {
        if (metro.findByProps("setCommunicationModeOn").setCommunicationModeOn) {
            metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup = metro.findByProps("setCommunicationModeOn").setCommunicationModeOn
            delete metro.findByProps("setCommunicationModeOn").setCommunicationModeOn
        }
    }

    const unpatch = () => {
        metro.findByProps("setCommunicationModeOn").setCommunicationModeOn = metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup
    }
    

    context.onUnload = unpatch;
    context.onLoad = patch;

})({}, vendetta.metro);