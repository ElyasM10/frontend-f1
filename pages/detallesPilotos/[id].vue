<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const piloto = ref(null)

// Importación manual de imágenes
import oscarImg from '~/assets/Mclaren/oscarPiastri.png'
import landoImg from '~/assets/Mclaren/landoNorris.png'
import maxImg from '~/assets/Redbull/maxVerstappen.png'
import yukiImg from '~/assets/Redbull/yukiTsunoda.png'
import leclercImg from '~/assets/Ferrari/charlesLeclerc.png'
import hamiltonImg from '~/assets/Ferrari/lewisHamilton.png'
import rusellImg from '~/assets/Mercedes/georgeRusell.png'
import kimiImg from '~/assets/Mercedes/kimi.png'
import alonsoImg from '~/assets/AstonMartin/alonso.png'
import strollImg from '~/assets/AstonMartin/stroll.png'
import gaslyImg from '~/assets/Alpine/gasly.png'
import doohanImg from '~/assets/Alpine/doohan.png'
import lawsonImg from '~/assets/RB/lawson.png'
import haddjarImg from '~/assets/RB/hadjar.png'
import bearmanImg from '~/assets/Hass/bearman.png'
import oconImg from '~/assets/Hass/ocon.png'
import sainzImg from '~/assets/Wiliiams/sainz.png'
import albonImg from '~/assets/Wiliiams/albon.png'
import hulkImg from '~/assets/Sauber/hulkenberg.png'
import borImg from '~/assets/Sauber/bortoleto.png'

//Equipos
import MclarenLogo from  '~/assets/Mclaren/mclarenLogo.png'
import redBullLogo from '~/assets/Redbull/redbullLogo.png'
import ferrariLogo from '~/assets//Ferrari/ferrari.png'
import mercedesLogo from '~/assets/Mercedes/mercedesLogo.png'
import AstonMartin from '~/assets/AstonMartin/astonMartinLogo.png'
import alpineLogo from  '~/assets/Alpine/alpine.png'
import rbLogo from  '~/assets/RB/rb.png' 
import haasLogo from '~/assets/Hass/haasLogo.png'
import wiliamsLogo from '~/assets/Wiliiams/WilliamsLogo.png'
import sauberLogo from   '~/assets/Sauber/sauberLogo.png'

// Mapeo nombre completo => imagen
const imagenesPilotos = {
  'Oscar Piastri': oscarImg,
  'Lando Norris': landoImg,
  'Max Verstappen': maxImg,
  'Yuki Tsunoda': yukiImg,
  'Charles Leclerc': leclercImg,
  'Lewis Hamilton': hamiltonImg,
  'George Russell': rusellImg,
  'Andrea Kimi Antonelli': kimiImg,
  'Fernando Alonso': alonsoImg,
  'Lance Stroll': strollImg,
  'Pierre Gasly': gaslyImg,
  'Jack Doohan': doohanImg,
  'Liam Lawson': lawsonImg,
  'Isack Hadjar': haddjarImg,
  'Oliver Bearman': bearmanImg,
  'Esteban Ocon': oconImg,
  'Carlos Sainz': sainzImg,
  'Alexander Albon': albonImg,
  'Nico Hülkenberg': hulkImg,
  'Gabriel Bortoleto': borImg
}

const logosEquipos = {
  'McLaren': MclarenLogo,
  'Red Bull Racing': redBullLogo,
  'Ferrari': ferrariLogo,
  'Mercedes': mercedesLogo,
  'Aston Martin': AstonMartin,
  'Alpine': alpineLogo,
  'Racing Bulls': rbLogo,
  'Haas': haasLogo,
  'Williams': wiliamsLogo,
  'Sauber ': sauberLogo
}

const pilotos = ref([])
onMounted(async () => {
  const id = route.params.id
  try {
    const response = await fetch(`http://localhost:8080/pilotos/${id}`)
    if (!response.ok) throw new Error('Error al obtener piloto')

    const data = await response.json()
    const nombreCompleto = `${data.nombre} ${data.apellido}`

    piloto.value = {
      ...data,
      imagen: imagenesPilotos[nombreCompleto] || null,
      logoEquipo: logosEquipos[data.equipo] || null
    }
  } catch (error) {
    console.error('Error al obtener el piloto:', error)
  }
})

function formatearFecha(fechaIso) {
  const fecha = new Date(fechaIso)
  const dia = String(fecha.getDate()).padStart(2, '0')
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const año = fecha.getFullYear()
  return `${dia}-${mes}-${año}`
}

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
  <div class="contenedor" v-if="piloto">
  <h1>Detalles del Piloto</h1>
  <div class="contenedor-piloto">
    <div class="card" :class="piloto.equipo.toLowerCase()">
      <img :src="piloto.imagen" :alt="`${piloto.nombre} ${piloto.apellido}`" class="piloto-img" />
    </div>
    <div class="piloto-info">
      <h5 class="card-title">
        {{ piloto.nombre }} {{ piloto.apellido }}
        <span style="color: #ccc;">#{{ piloto.numero }}</span>
      </h5>
      <p class="card-text"><strong>Pais:</strong> {{ piloto.nacionalidad }}</p>
      <p class="card-text">
        <strong>Fecha de nacimiento:</strong>
        {{ formatearFecha(piloto.fechaNacimiento) }}
        </p>
        <p class="card-text"><strong>Equipo:</strong> {{ piloto.equipo }}</p>
      <p class="card-text"><strong>Descripción:</strong> {{ piloto.descripcion }}</p>
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
  background-color: #c01111;
  font-family: 'F1', sans-serif;   
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
.card.redbull {
border-left-color: #1c297e;
background: linear-gradient(to right, #1a1a1a, #1e2a7810);
}

.card.ferrari {
border-left-color: #e10600;
background: linear-gradient(to right, #1a1a1a, #e1060010);
}

.card.mercedes {
border-left-color: #00d2be;
background: linear-gradient(to right, #1a1a1a, #00d2be10);
}

.card.astonmartin {
border-left-color: #00665e;
background: linear-gradient(to right, #1a1a1a, #00665e10);
}

.card.alpine {
border-left-color: #2293d1;
background: linear-gradient(to right, #1a1a1a, #2293d110);
}

.card.rb {
border-left-color: #5e1cb7;
background: linear-gradient(to right, #1a1a1a, #5e1cb710);
}

.card.haas {
border-left-color: #b6babd;
background: linear-gradient(to right, #1a1a1a, #b6babd10);
}

.card.williams {
border-left-color: #005aff;
background: linear-gradient(to right, #1a1a1a, #005aff10);
}

.card.sauber {
border-left-color: #52e252;
background: linear-gradient(to right, #1a1a1a, #52e25210);
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
