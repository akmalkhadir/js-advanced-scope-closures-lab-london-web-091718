function produceDrivingRange (range) {
  return function (start, finish) {
    const parsedStart = parseInt(start.slice(0, -2))
    const parsedFinish = parseInt(finish.slice(0, -2))
    const distance = (parsedFinish - parsedStart)
    if (distance < range) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator (percentage) {
  return function (amount) {
    return percentage * amount
  }
}

function createDriver () {
  let driverId = 0
  return class {
    constructor (name) {
      this.id = driverId++
      this.name = name
    }
  }
}
