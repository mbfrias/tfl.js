module.exports = function (appKey) {
    return {
        search: require('./search')(appKey),
        journey: require('./journey')(appKey),
        mode: require('./mode')(appKey),
        line: require('./line')(appKey),
        stoppoint: require('./stoppoint')(appKey)
    }
}