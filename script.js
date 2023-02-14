const originalTrigger = utag.o["woolworths.supermarkets"].handler.trigger;

const handler = utag.o["woolworths.supermarkets"].handler

handler.trigger = (...triggerParams) => {
    console.log("trigger", triggerParams)

    const originalSends = Object.entries(utag.sender).map(([key, sender]) => {
        const originalSend = sender.send
        sender.send = (...sendParams) => {
            console.log("send")
            const closeObserver = observeRequests()
            originalSend(...sendParams)
            closeObserver()
        }
        return [key, originalSend]
    })

    originalTrigger.call(handler, ...triggerParams)

    originalSends.forEach(([key, originalSend]) => {
        utag.sender[key].send = originalSend
    })
}

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

    const disconnectOtherRequests = observeOtherRequests()

    return () => {
        navigator.sendBeacon = originalSendBeacon;
        XMLHttpRequest.prototype.open = originalHttpRequest
        window.fetch = originalFetch
        disconnectOtherRequests()
    }
}

function observeOtherRequests() {
    let endTime;
    const startTime = performance.mark("start-time").startTime;
    const objects = new Set()
    const observer = new PerformanceObserver((entries) => {
        entries.getEntriesByType("resource")
            .map(res => res.toJSON())
            .filter(val => val.startTime >= startTime && (!endTime || val.startTime <= endTime))
            .forEach(val => objects.add(val.value.name))
    });
    observer.observe({entryTypes: ["resource"]});
    return () => {
        endTime = performance.mark("end-time").startTime
        setTimeout(() => {
            console.log([...objects])
            observer.disconnect();
        }, 5000)
    }
}
