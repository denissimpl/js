function preloadImages(sources, callback) {
    let length = sources.length
    let currentLength = 0
    for (source of sources) {
        let img = document.createElement("img")
        img.src = source
        img.onload = function () {
            currentLength += 1
        }
        img.onerror = function () {
            currentLength += 1
        }
    }
    if (currentLength == length) {
        callback()
    }
}