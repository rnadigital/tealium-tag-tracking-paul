const originalTrigger = utag.o["woolworths.supermarkets"].handler.trigger;

const handler = utag.o["woolworths.supermarkets"].handler

handler.trigger = (...triggerParams) => {
    console.log(triggerParams)

    const originalSends = Object.entries(utag.sender).map(([key, sender]) => {
        const originalSend = sender.send
        sender.send = (...sendParams) => {
            const closeObserver = observeRequests()
            console.log("test", sendParams)
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

function observeRequests() {
    const {fetch: originalFetch} = window;

    window.fetch = async (...args) => {
        let [resource, config] = args;
        // request interceptor here
        console.log("fetch", args)
        const response = await originalFetch(resource, config);
        // response interceptor here
        return response;
    };

    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        console.log('xhr request', arguments);
        origOpen.apply(this, arguments);
    };

    const {sendBeacon: originalSendBeacon} = navigator
    navigator.sendBeacon = (...params) => {
        console.log("send beacon", params)
        originalSendBeacon(...params)
    }

    const disconnectMutations = observeElementMutations()

    return () => {
        navigator.sendBeacon = originalSendBeacon;
        XMLHttpRequest.prototype.open = origOpen
        window.fetch = originalFetch
        disconnectMutations()
    }
}

function observeElementMutations() {
    const targetNode = document

    const config = {childList: true, subtree: true};

    const urls = new Set()
    const callback = (mutationList, observer) => {
        const matches = mutationList.flatMap(({addedNodes}) => [...addedNodes])
            .map(node => node.outerHTML)
            .filter(html => !!html)
            .flatMap(html => [...html.matchAll(/src="([^"]*)"/g)].map(x => x[1]))
        matches.forEach(url => urls.add(url))
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    return () => {
        console.log("result", [...urls])
        observer.disconnect()
    }
}
