// Récupération des éléments HTML
const car = document.getElementById('car');
const scoreElement = document.getElementById('score');

let score = 0;
const winningScore = 10; // Score nécessaire pour gagner

// Fonction de détection de collision entre la voiture et les pierres
function checkCollision(stone) {
    const carRect = car.getBoundingClientRect();
    const stoneRect = stone.getBoundingClientRect();

    return !(carRect.right < stoneRect.left || 
             carRect.left > stoneRect.right || 
             carRect.bottom < stoneRect.top || 
             carRect.top > stoneRect.bottom);
}

// Fonction de mouvement de la voiture
function moveCar(direction) {
    // Logique de mouvement ici
}

// Fonction de génération de pierres
function generateStones() {
    // Logique de génération de pierres ici
}

// Boucle pour faire descendre les pierres
function update() {
    // Logique de descente des pierres ici
    // Vérifier les collisions et mettre à jour le score ici

    // Vérification du score pour déterminer la victoire
    if (score >= winningScore) {
        scoreElement.textContent = 'Win!';
        return; // Sortir de la boucle, partie gagnée
    }

    requestAnimationFrame(update);
}

// Lancer le jeu au chargement de la page
window.onload = () => {
    generateStones();
    update();
};

// Gestion des contrôles de la voiture
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveCar('left');
    } else if (event.key === 'ArrowRight') {
        moveCar('right');
    }
});