const avengers = [
    { name: 'Iron Man', power: 'armor', strength: 50, planet: 'Earth', alive: false },
    { name: 'Black Widow', power: 'stealth', strength: 25, planet: 'Earth', alive: false },
    { name: 'Thor', power: 'hammer', strength: 100, planet: 'Asgard', alive: true },
    { name: 'Scarlet Witch', power: 'magic', strength: 102, planet: 'Earth', alive: true },
    { name: 'Hulk', power: 'durability', strength: 101, planet: 'Earth', alive: true },
    { name: 'Captain Marvel', power: 'energy', strength: 100, planet: 'Earth', alive: true },
    { name: 'Gamora', power: 'assasin', strength: 80, planet: 'Zen-Whoberi', alive: false }
]   
// Agrupa los superheroés por estado de vida
Object.groupBy(avengers, hero => 'alive:${hero.alive}')

// El uso del Symbol() sirve para mantener un dato único e innacesible
const HUMAN_LEVEL_POWER = Symbol()
const SUPERHUMAN_LEVEL_POWER = Symbol ()
const GOD_LEVEL_POWER = Symbol ()
// Agrupa los superheroés por el nivel de poder
const groupByPower = Object.groupBy(avengers, hero => {
        if (hero.strength > 100) return GOD_LEVEL_POWER
        if (hero.strength > 70) return SUPERHUMAN_LEVEL_POWER
        return HUMAN_LEVEL_POWER
    }
)
console.log(groupByPower[HUMAN_LEVEL_POWER])
console.log(groupByPower[GOD_LEVEL_POWER])
console.log(groupByPower[SUPERHUMAN_LEVEL_POWER])