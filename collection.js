const {fetch: originalFetch} = window;

window.fetch = async (...args) => {
    let [resource, config] = args;
    // request interceptor here
    console.log("fetch", args)
    const response = await originalFetch(resource, config);
    // response interceptor here
    return response;
};

(function () {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        console.log('xhr request', arguments);
        origOpen.apply(this, arguments);
    };
})();

const {sendBeacon: originalSendBeacon} = navigator
navigator.sendBeacon = (...params) => {
    console.log("send beacon", params)
    originalSendBeacon(...params)
}

const observer2 = new PerformanceObserver((entries) => {
    entries.getEntriesByType("resource").forEach(res => console.log(res.toJSON()))
});
observer2.observe({ entryTypes: ["resource"] });