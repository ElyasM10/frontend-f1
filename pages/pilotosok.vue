<script setup>
import { ref, onMounted } from 'vue'

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
  try {
    const response = await fetch('http://localhost:8080/pilotos')
    if (!response.ok) throw new Error('Error al obtener pilotos')

    const data = await response.json()

    pilotos.value = data.map(piloto => {
    const nombreCompleto = `${piloto.nombre} ${piloto.apellido}`
    return {
        ...piloto,
        imagen: imagenesPilotos[nombreCompleto] || null,
        logoEquipo: logosEquipos[piloto.equipo] || null
    }
    })
  } catch (error) {
    console.error('Error al obtener pilotos:', error)
  }
})
</script>

<template>

<!-- Navbar Bootstrap -->
<nav class="navbar navbar-expand-lg navbar-dark f1-navbar">
    <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="/assets/f1-75.png" alt="Logo F1" width="200" height="24" marginLeft="20" class="d-inline-block me-2" />

            <!-- Imagen de la próxima carrera -->
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
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
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

<div class="contenedor">
    <h1>Pilotos 2025</h1>
    <div class="grid-pilotos">
        <div
            class="card"
            :class="piloto.equipo.toLowerCase()"
            v-for="piloto in pilotos"
            :key="piloto.id"
        >
            <div class="imagen">
                <img
                    v-if="piloto.imagen"
                    :src="piloto.imagen"
                    alt="Foto del piloto"
                    class="imagen-piloto"
                />
                <div v-else class="imagen-placeholder">IMG</div>
            </div>

            <div class="contenido">
                <div class="datos">
                    <div class="nombre">
                        <span class="nombre-chico">{{ piloto.nombre.toUpperCase() }}</span>
                        <span class="nombre-grande">{{ piloto.apellido.toUpperCase() }}</span>
                    </div>
                </div>
            
            </div>

            <div class="equipo">
            <img v-if="piloto.logoEquipo" :src="piloto.logoEquipo" alt="Logo equipo" class="logo-equipo" />
            </div>

            <div class="numero-grande">{{ piloto.numero }}</div>
        </div>
    </div>
</div>

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

.contenedor {
padding: 30px 20px;
background: linear-gradient(to bottom, #2c2c2c, #1a1a1a);
color: white;
min-height: 100vh;
font-family: 'F1', sans-serif;
}

h1 {
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
color: #e10600;
text-align: center;
text-transform: uppercase;
letter-spacing: 1px;
}

.grid-pilotos {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
justify-items: center;
}

.card {
display: flex;
align-items: center;
padding: 10px 16px;
border-radius: 12px;
background-color: #111;
border-left: 6px solid #444;
position: relative;
min-height: 90px;
width: 400px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
transform: scale(1.03);
box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
z-index: 2;
}

.card.mclaren {
border-left-color: #f77c00;
background: linear-gradient(to right, #1a1a1a, #f77c0010);
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

.imagen {
flex: 0 0 70px;
}

.imagen-piloto {
width: 70px;
height: 90px;
object-fit: cover;
border-radius: 8px;
box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
margin-right: 300px;
}

.contenido {
flex: 1;
padding-left: 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
}

.nombre {
font-size: 13px;
font-weight: bold;
display: flex;
flex-direction: column;
margin-left: -10px;
margin-bottom: -50px;
margin-top: -40px;
}

.nombre-chico {
color: #aaa;
font-size: 10px;
font-family: 'F1', sans-serif;
text-transform: uppercase;
margin-bottom: 2px;
}

.nombre-grande {
font-size: 14px;
font-family: 'F1', sans-serif;
color: #ffffff;
}

.numero-grande {
font-size: 20px;
font-weight: bold;
color: white;
position: absolute;
top: 80%;
margin-left: 300px;
transform: translateY(-50%);
}

.footer {
  background-color: #c01111;
  color: #ffffff; 
}

.footer a {
  color: #ffffff; 
}

.footer a:hover {
  color: #f1f1f1; 
}
.logo-equipo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-top: -150px; /* Mover hacia arriba */
  margin-bottom: 10px;
  margin-left:310px;
}


</style>