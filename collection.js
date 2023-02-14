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
observer2.observe({entryTypes: ["resource"]});

function observeElementMutations() {
    const targetNode = document

    const config = {childList: true, subtree: true};

    const callback = (mutationList, observer) => {
        const matches = mutationList.flatMap(({addedNodes}) => [...addedNodes])
            .map(node => node.outerHTML)
            .filter(html => !!html)
            .flatMap(html => [...html.matchAll(/src="([^"]*)"/g)].map(x => x[1]))
        console.log(matches)
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    return observer.disconnect
}