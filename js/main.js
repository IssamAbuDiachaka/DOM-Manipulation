// DOM Element Selection
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const btnView1 = document.getElementById("btnView1");
const btnView2 = document.getElementById("btnView2");
const starsContainer = document.getElementById("stars");
const cosmicCards = document.querySelectorAll(".cosmic-card");
const cosmicContainer = document.getElementById("cosmicContainer");

// Create Starfield Background
function createStars() {
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        starsContainer.appendChild(star);
    }
}

// Create Floating Orbs
function createFloatingOrbs() {
    const colors = ["#8a2be2", "#da70d6", "#ff69b4", "#9370db"];
    for (let i = 0; i < 5; i++) {
        const orb = document.createElement("div");
        orb.className = "floating-orb";
        orb.style.width = Math.random() * 200 + 100 + "px";
        orb.style.height = orb.style.width;
        orb.style.background = colors[Math.floor(Math.random() * colors.length)];
        orb.style.left = Math.random() * 100 + "%";
        orb.style.top = Math.random() * 100 + "%";
        orb.style.animationDelay = Math.random() * 3 + "s";
        document.body.appendChild(orb);
    }
}

// Animate Cosmic Cards on Load
cosmicCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    
    setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 100);

    // Add click interaction
    card.addEventListener("click", function() {
        this.style.animation = "pulse 0.5s ease";
        setTimeout(() => {
            this.style.animation = "";
        }, 500);
    });

    // Add hover glow effect
    card.addEventListener("mouseenter", function() {
        this.style.boxShadow = "0 15px 50px rgba(138, 43, 226, 0.8), 0 0 50px rgba(138, 43, 226, 0.4)";
    });

    card.addEventListener("mouseleave", function() {
        this.style.boxShadow = "0 8px 32px rgba(138, 43, 226, 0.3)";
    });
});

// Create Dynamic Cosmic Panels for View 2
function createCosmicPanels() {
    const panelData = [
        { title: "🌟 Stellar Data", content: "Exploring the vast cosmos with real-time stellar information." },
        { title: "🪐 Planetary Systems", content: "Discover exoplanets and their fascinating characteristics." },
        { title: "🌌 Galaxy Clusters", content: "Navigate through billions of galaxies in the observable universe." },
        { title: "☄️ Cosmic Events", content: "Track supernovas, black holes, and other celestial phenomena." },
        { title: "🛸 Space Missions", content: "Follow humanity's journey to explore the final frontier." },
        { title: "🔭 Observatory Data", content: "Access data from telescopes around the world and in orbit." }
    ];

    panelData.forEach((data, index) => {
        const panel = document.createElement("div");
        panel.className = "cosmic-panel";
        panel.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.content}</p>
        `;
        panel.style.opacity = "0";
        panel.style.transform = "scale(0.8)";
        cosmicContainer.appendChild(panel);

        // Animate panels when view2 is shown
        setTimeout(() => {
            panel.style.transition = "all 0.5s ease";
            panel.style.opacity = "1";
            panel.style.transform = "scale(1)";
        }, index * 150);
    });
}

// View Switching with Smooth Transitions
btnView1.addEventListener("click", () => {
    view2.style.display = "none";
    view1.style.display = "flex";
    view1.style.animation = "fadeIn 0.5s ease";
});

btnView2.addEventListener("click", () => {
    view1.style.display = "none";
    view2.style.display = "flex";
    view2.style.animation = "fadeIn 0.5s ease";
});

// Add fade-in animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Mouse Trail Effect
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const trail = document.createElement("div");
    trail.style.position = "fixed";
    trail.style.width = "10px";
    trail.style.height = "10px";
    trail.style.borderRadius = "50%";
    trail.style.background = "rgba(138, 43, 226, 0.5)";
    trail.style.left = mouseX + "px";
    trail.style.top = mouseY + "px";
    trail.style.pointerEvents = "none";
    trail.style.zIndex = "999";
    trail.style.transition = "all 0.5s ease";
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(2)";
    }, 10);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Initialize Everything
createStars();
createFloatingOrbs();
createCosmicPanels();

console.log("🌌 Cosmic UI Initialized!");
console.log("View 1:", view1);
console.log("View 2:", view2);
console.log("Cosmic Cards:", cosmicCards);
