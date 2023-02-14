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
    let endTime;
    const startTime = performance.mark("start-time").startTime;
    const observer = new PerformanceObserver((entries) => {
        entries.getEntriesByType("resource")
            .map(res => res.toJSON())
            .filter(val => val.startTime >= startTime && val.startTime <= endTime)
            .forEach(val => console.log(val))
    });
    observer.observe({entryTypes: ["resource"]});
    return () => {
        endTime = performance.mark("end-time").startTime
        // observer.disconnect()
    }
}
