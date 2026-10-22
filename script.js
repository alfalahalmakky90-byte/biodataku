/* Reset & Styling Dasar Tema Spider-Man */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
    transition: all 0.3s ease;
}

body {
    background-color: #0d1117;
    background-image: radial-gradient(#21262d 1px, transparent 1px);
    background-size: 20px 20px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Kartu Biodata */
.card-container {
    background: #161b22;
    border: 3px solid #e62429; /* Merah khas Marvel/Spidey */
    border-radius: 16px;
    padding: 30px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-shadow: 0 0 20px rgba(230, 36, 41, 0.4);
    position: relative;
}

.badge {
    background: #e62429;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 12px;
    display: inline-block;
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.avatar-box {
    margin: 0 auto 15px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #0055ff; /* Biru Spider-Man */
    overflow: hidden;
}

.avatar-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.alias {
    color: #0088ff;
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 20px;
}

.bio-section {
    background: #21262d;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 0.9rem;
    border-left: 4px solid #e62429;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin: 15px 0 25px;
}

.skill-tag {
    background: #0055ff;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
}

/* Tombol Aksi */
.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}

.btn-warning {
    background-color: #ffcc00;
    color: #000;
}

.btn-primary {
    background-color: #e62429;
    color: #fff;
}

.btn:hover {
    transform: scale(1.03);
}

/* Efek Spider-Sense (Animasi Bergetar + Glow) */
.spider-sense-active {
    animation: pulse-glow 0.4s infinite alternate;
    border-color: #ffcc00 !important;
}

@keyframes pulse-glow {
    0% {
        box-shadow: 0 0 15px #ffcc00;
        transform: translateY(-2px);
    }
    100% {
        box-shadow: 0 0 35px #ffcc00;
        transform: translateY(2px);
    }
}
