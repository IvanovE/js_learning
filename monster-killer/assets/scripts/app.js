const ATTACK_VALUE = 10
const STRONG_VALUE_ATTACK = 15
const MONSTER_ATTACK_VALUE = 15
const HEAL_VALUE = 10
const chosenMaxLife = 100

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true
let battleLog = []

adjustHealthBars(chosenMaxLife)

function reset() {
    currentPlayerHealth = chosenMaxLife
    currentMonsterHealth = chosenMaxLife
    resetGame(chosenMaxLife)
}

function consumeResults() {
    const initialPlayerHealth = currentPlayerHealth
    damageToPlayer()
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHealth
        setPlayerHealth(currentPlayerHealth)
        alert('Bonus life activated')
        return
    }

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('YOU LOST')
        battleLog.push(`YOU LOST`)
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('YOU WON')
        battleLog.push(`YOU WON`)
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('DRAW')
        battleLog.push(`DRAW`)
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset()
    }
}

function damageToMonster(attack) {
    const damage = dealMonsterDamage(attack)
    battleLog.push(`You attacked the monster with damage: ${damage}`)
    currentMonsterHealth -= damage
}

function damageToPlayer() {
    const damage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    battleLog.push(`Monster attacked you with damage: ${damage}`)
    currentPlayerHealth -= damage
}

function healPlayer() {
    const healValue = increasePlayerHealth(HEAL_VALUE)
    battleLog.push(`You healed yourself: ${healValue}`)
    currentPlayerHealth += healValue
}

function attackHandler() {
    damageToMonster(ATTACK_VALUE)
    consumeResults()
}

function strongAttackHandler() {
    damageToMonster(STRONG_VALUE_ATTACK)
    consumeResults()
}

function healHandler() {
    healPlayer()
    consumeResults()
}

function logHandler() {
    console.log(battleLog)
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healHandler)
logBtn.addEventListener('click', logHandler)
