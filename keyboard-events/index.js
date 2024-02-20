
function runOnKeys (callback, ...keys) {
    pressed = new Map()
    for (key of keys) {
        pressed.set(key,false)
    }
    document.onkeydown = function (e) {
        pressed.set(e.key, true)
        for (key of pressed) {
            if (!pressed.get(key)) {
                return
            }
            callback()
        }
    }
    document.onkeyup = function (e) {
        pressed.set(e.key, false)
    }
}


runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
  );