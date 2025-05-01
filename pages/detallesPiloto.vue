<script setup>
import oscarImg from '~/assets/Mclaren/oscarPiastri.png'
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark f1-navbar">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/assets/f1-75.png" alt="Logo F1" width="200" height="24" class="d-inline-block me-2" />
        <div class="ms-3">
          <img src="/assets/fia.png" alt="GP Miami" class="fia-img" />
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Equipos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pilotos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Calendario</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Contenido -->
  <div class="contenedor">
    <h1>Detalles del Piloto</h1>
    <div class="contenedor-piloto">
      <div class="card mclaren">
        <img :src="oscarImg" alt="Oscar Piastri" class="piloto-img" />
      </div>
      <div class="piloto-info">
        <h5 class="card-title">Oscar Piastri <span style="color: #ccc;">#81</span></h5>
        <p class="card-text"><strong>Nacionalidad:</strong> Australiano</p>
        <p class="card-text"><strong>Fecha de nacimiento:</strong> 06/04/2001</p>
        <p class="card-text"><strong>Descripción:</strong> Piloto de McLaren desde 2023. Campeón de F2 en 2021.</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer text-white text-center py-4">
    <div class="container">
      <p class="mb-0">© 2025 Fórmula 1 - Todos los derechos reservados</p>
      <p class="mb-0">Elias Maldonado</p>
      <div class="mt-3">
        <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
@font-face {
  font-family: 'F1';
  src: url('@/assets/Fonts/Formula1-Wide.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
.f1-navbar {
  background-color: #c01111 !important; /* rojo oscuro tipo Ferrari */
  border-bottom: 3px solid #c01111;     /* rojo vibrante como el de F1 */
  font-family: 'F1', sans-serif;   
  height: 100px;
}

.f1-navbar .nav-link {
  color: #ddd !important;
  transition: color 0.3s ease;
}

.f1-navbar .nav-link:hover,
.f1-navbar .nav-link.active {
  color: #ffffff !important;
  text-shadow: 0 0 5px #e10600;
}
.fia-img{
  width: 90px;
  margin-left: 650px;
}
.footer {
  background-color: #7d0b0b;
}

.contenedor {
  padding: 50px 40px;
  background: linear-gradient(to bottom, #2c2c2c, #1a1a1a);
  color: white;
  min-height: 100vh;
  font-family: 'F1', sans-serif;
  width:100%;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #e10600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.contenedor-piloto {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 60px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 14px;
  background-color: #111;
  border-left: 8px solid #444;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: fit-content;
  height: 350px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
}

.card.mclaren {
  border-left-color: #f77c00;
  background: linear-gradient(to right, #1a1a1a, #f77c0015);
}

.piloto-img {
  width: 220px;
  border-radius: 12px;
}

.piloto-info {
  max-width: 500px;
  color: white;
  font-size: 1.25rem;
  padding-top: 10px;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.card-text {
  font-size: 1.25rem;
  margin: 10px 0;
}
</style>
