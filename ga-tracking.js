var gaTracker = (function() {

    // Push the object to the dataLayer
    // Parameters:
    // eventName, category, action, label, Type String
    // value Type Number (int)
    var pushEventToDataLayer = function(eventName, category, action, label, value) {

        if (typeof window.dataLayer === 'object') {
            window.dataLayer.push({
                'event': eventName, // on GTM this would be the event that triggers the tag.
                'category': category,
                'action': action,
                'label': label,
                'value': value
            });
        } else {
            console.log('dataLayer not defined');
        }

    };

    var isUniversalAnalytics = function(ga) {
        return typeof ga.getAll === 'function' ? true : false;
    };

    var isClassicAnalytics = function(_gat) {
        return typeof _gat._getTrackers === 'function' ? true : false;
    };

    // decorate target URL for cross domain tracker.
    var decorateLink = function(url) {
        var trackers;
        var linker;

        if (typeof window.ga !== 'undefined' && isUniversalAnalytics(window.ga)) {
            trackers = window.ga.getAll();
            if (trackers.length) {
                linker = new window.gaplugins.Linker(trackers[0]);
                url = linker.decorate(url);
            }
        } else if (typeof window._gat !== 'undefined' && isClassicAnalytics(window._gat)) {
            trackers = window._gat._getTrackers();
            if (trackers.length) {
                url = trackers[0]._getLinkerUrl(url);
            }
        }

        return url;
    };

    return {
        pushEvent: pushEventToDataLayer,
        decorateLink: decorateLink
    };

})();
