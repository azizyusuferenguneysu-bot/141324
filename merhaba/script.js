document.getElementById('container').addEventListener('click', function(e) {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '♥';

    // Tıklanan yerin koordinatlarını al
    const x = e.clientX;
    const y = e.clientY;

    // Kalbi tıklanan yere konumlandır
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Rastgele bir başlangıç hue (renk tonu) değeri belirle
    const randomHue = Math.floor(Math.random() * 360);
    // Bu hue değerini kalbin rengi olarak ata (HSL formatı kullanarak)
    // Daha canlı bir görünüm için saturation ve lightness değerlerini yüksek tuttuk
    heart.style.color = `hsl(${randomHue}, 100%, 70%)`;

    // Animasyonun başlangıç hue değerini CSS değişkeni olarak ata
    heart.style.setProperty('--initial-hue', randomHue);


    document.getElementById('container').appendChild(heart);

    heart.addEventListener('animationend', function() {
        heart.remove();
    });
});