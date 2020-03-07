const attack_value = 10;
const strong_attack_value = 15;
const monster_attack_value = 12;
const heal_value = 13;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(monster_attack_value);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won bitch');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost bitch');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('Empate perro');
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'attack') {
        maxDamage = attack_value;
    } else if (mode === 'strong_attack') {
        maxDamage = strong_attack_value;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster('attack');
}

function strongAttackHandler () {
    attackMonster('strong_attack');
}

function healPlayerHander() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - heal_value) {
        alert("No te podes curar más de tu vida inicial");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = heal_value;
    }
    increasePlayerHealth(heal_value);
    currentPlayerHealth += heal_value;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHander);