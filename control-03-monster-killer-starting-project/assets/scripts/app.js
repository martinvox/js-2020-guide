//small git config test

const attack_value = 10;
const strong_attack_value = 15;
const monster_attack_value = 12;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'attack') {
        maxDamage = attack_value;
    } else if (mode === 'strong_attack') {
        maxDamage = strong_attack_value;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
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

function attackHandler() {
    attackMonster('attack');
}

function strongAttackHandler () {
    attackMonster('strong_attack');
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);