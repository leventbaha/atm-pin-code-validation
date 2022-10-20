function validatePIN(pin) {
    if (pin.length != 4 && pin.length != 6) {
        return false
    }
    for (let i = 0; i < pin.length; i++) {
        if (isNaN(pin[i])) {
            return false
        }
    }
    return true
}

module.exports = validatePIN
