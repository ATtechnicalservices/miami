const myPhotos = [];
for (let i = 1; i <= 37; i++) {
    myPhotos.push(`m1 (${i}).jpeg`);
}

const container = document.getElementById('photo-flow-container');

function spawnPhoto(imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('floating-photo');
    const randomY = Math.floor(Math.random() * 70) + 10;
    img.style.top = `${randomY}%`;
    const duration = Math.random() * 10 + 15;
    img.style.animationDuration = `${duration}s`;
    container.appendChild(img);
    setTimeout(() => { img.remove(); }, duration * 1000);
}

let photoIndex = 0;
setInterval(() => {
    if (myPhotos.length > 0) {
        spawnPhoto(myPhotos[photoIndex]);
        photoIndex = (photoIndex + 1) % myPhotos.length;
    }
}, 2500);


const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('card');
const noContainer = document.getElementById('no-button-container');

function moveButton() {

    const maxWidth = noContainer.clientWidth - noBtn.offsetWidth;
    const maxHeight = noContainer.clientHeight - noBtn.offsetHeight;

    const margin = 25; 

    const newX = Math.max(margin, Math.floor(Math.random() * (maxWidth - margin)));
    const newY = Math.max(margin, Math.floor(Math.random() * (maxHeight - margin)));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}


window.onload = () => {
    noBtn.style.left = '55%';
    noBtn.style.top = '50%';
};

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', (e) => {           
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    card.innerHTML = `
        <h1 style="color: #ff4081;">
        <p>I knew you would say yes my sweet cute heart, i luv you <3 and always will luv you 7abibti ya 3asal, QUACK 😋.</p>
        </h1>
        
       
    `;
    noBtn.style.display = 'none';
});

const music = document.getElementById('bg-music');

const tryPlayMusic = () => {
    music.play().catch(() => {

        ['click', 'touchstart', 'mousemove'].forEach(evt => {
            document.addEventListener(evt, () => music.play(), { once: true });
        });
    });
};


window.addEventListener('load', tryPlayMusic);
