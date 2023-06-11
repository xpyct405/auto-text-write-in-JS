const text = 'What is Music? How do you define it? Music is a calm moonlit night, the rustle of leaves in Summer. Music is the far off peal of bells at dusk! Music comes straight from the heart and talks only to the heart: it is Love! Music is the Sister of Poetry and her Mother is sorrow!'

let container = document.querySelector('.container');

let index = 0;

function writeText() {
    container.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100)