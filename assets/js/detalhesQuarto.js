let currentSlide = 0;

const roomData = {
    quarto1: {
        title: "Quarto Casal",
        description: "Ideal para uma estadia relaxante.",
        price: "R$ 170,00",
        images: ["assets/img/quartoPorto.jpeg", "assets/img/quarto2.jpeg"]
    },
    quarto2: {
        title: "Casal Frente Mar",
        description: "Com vista incrível e todo o conforto para sua estadia.",
        price: "R$ 260,00",
        images: ["assets/img/quarto2Porto.jpeg", "assets/img/quarto3.jpeg"]
    },
    quarto3: {
        title: "Quarto Triplo",
        description: "Espaçoso e aconchegante, perfeito para famílias ou grupos.",
        price: "R$ 240,00",
        images: ["assets/img/quartoPorto.jpeg", "assets/img/quarto4.jpeg"]
    },
    quarto4: {
        title: "Triplo Frente Mar",
        description: "Espaço, conforto e uma vista deslumbrante.",
        price: "R$ 320,00",
        images: ["assets/img/quarto2Porto.jpeg", "assets/img/quarto5.jpeg"]
    },
    quarto5: {
        title: "Quarto Quadruplo",
        description: "Amplo e confortável, ideal para famílias ou grupos maiores.",
        price: "R$ 300,00",
        images: ["assets/img/quarto2Porto.jpeg", "assets/img/quarto6.jpeg"]
    },
    quarto6: {
        title: "Quadruplo Frente Mar",
        description: "Desperte com a brisa do mar. Espaçoso, perfeito para momentos inesquecíveis.",
        price: "R$ 380,00",
        images: ["assets/img/quarto3Porto.jpeg", "assets/img/quarto7.jpeg"]
    }
};

function showDetails(roomId) {
    const modal = document.getElementById('roomModal');
    const room = roomData[roomId];

    // Set room data
    document.getElementById('roomTitle').textContent = room.title;
    document.getElementById('roomDescription').textContent = room.description;
    document.getElementById('roomPrice').textContent = room.price;

    // Set images for slider
    const slider = document.getElementById('imageSlider');
    slider.innerHTML = ''; // Clear any existing images
    room.images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Imagem do ${room.title} ${index + 1}`;
        slider.appendChild(img);
    });

    modal.style.display = "block";
    currentSlide = 0;
    showSlide(currentSlide);
}

function closeModal() {
    document.getElementById('roomModal').style.display = "none";
}

function moveSlider(step) {
    currentSlide += step;
    const roomId = document.getElementById('roomTitle').textContent.toLowerCase().replace(/\s/g, '');
    const room = roomData[roomId];
    if (currentSlide < 0) {
        currentSlide = room.images.length - 1;
    } else if (currentSlide >= room.images.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function showSlide(slideIndex) {
    const slider = document.getElementById('imageSlider');
    const slides = slider.getElementsByTagName('img');
    Array.from(slides).forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

// Impede que o evento de clique no botão "Reservar" abra o modal
function reserveRoom(event) {
    event.stopPropagation(); // Impede que o evento se propague e o modal seja aberto
    alert("Quarto reservado com sucesso!");
}
