const {fetch: originalFetch} = window;
const originalHttpRequest = XMLHttpRequest.prototype.open;
const {sendBeacon: originalSendBeacon} = navigator

function observeRequests() {
    window.fetch = async (...args) => {
        let [resource, config] = args;
        // request interceptor here
        console.log("fetch", args)
        const response = await originalFetch(resource, config);
        // response interceptor here
        return response;
    };

    XMLHttpRequest.prototype.open = function () {
        console.log('xhr request', arguments);
        originalHttpRequest.apply(this, arguments);
    };

    navigator.sendBeacon = (...params) => {
        console.log("send beacon", params)
        originalSendBeacon(...params)
    }

    observeOtherRequests()
}

function observeOtherRequests() {
    const observer = new PerformanceObserver((entries) => {
        entries.getEntriesByType("resource")
            .map(res => res.toJSON())
            .forEach(val => console.log("resource", val.name))
    });
    observer.observe({entryTypes: ["resource"]});
}

observeRequests()