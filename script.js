const justFood = pocetHostu => {
    const cena = pocetHostu * 50
    return `catering od Just Food pro ${pocetHostu} lidí za ${cena} Kč`
}

console.log(justFood(100))

const yourMama = pocetHostu => {
    const cena = pocetHostu * 100
    return `catering od Your Mama pro ${pocetHostu} lidí za ${cena} Kč`
}

console.log(yourMama(100))

const flavourHaven = pocetHostu => {
    const cena = pocetHostu * 200
    return `catering od Flavour Haven pro ${pocetHostu} lidí za ${cena} Kč`
}

console.log(flavourHaven(100))

const createEvent = (nazevAkce, pocetHostu, funkceCatering) => {
    const cateringZprava = funkceCatering(pocetHostu)
    return `Událost ${nazevAkce} s ${cateringZprava}`
}

console.log(createEvent("Inaugurace prezidenta", 300, flavourHaven))