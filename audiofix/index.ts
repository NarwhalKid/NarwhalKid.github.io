export default {
    onLoad: () => {
        if (vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOn) {
            vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup = vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOn
            delete vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOn
        }
    },
    onUnload: () => {
        vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOn = vendetta.metro.findByProps("setCommunicationModeOn").setCommunicationModeOnBackup
    },
    settings: Settings,
}
