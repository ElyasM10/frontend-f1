<script setup>
import oscarImg from '~/assets/Mclaren/oscarPiastri.png'
import landoImg from '~/assets/Mclaren/landoNorris.png'
import MclarenLogo from  '~/assets/Mclaren/mclarenLogo.png'
import maxImg from '~/assets/Redbull/maxVerstappen.png'
import yukiImig from '~/assets/Redbull/yukiTsunoda.png'
import redBullLogo from '~/assets/Redbull/redbullLogo.png'
import leclercImg from '~/assets//Ferrari/charlesLeclerc.png'
import hamiltonImg from '~/assets//Ferrari/lewisHamilton.png'
import ferrariLogo from '~/assets//Ferrari/ferrari.png'
import rusellImg from '~/assets/Mercedes/georgeRusell.png'
import kimiImg from '~/assets/Mercedes/kimi.png'
import mercedesLogo from '~/assets/Mercedes/mercedesLogo.png'
import alonsoImg from '~/assets/AstonMartin/alonso.png'
import strollImig from '~/assets/AstonMartin/stroll.png'
import AstonMartin from '~/assets/AstonMartin/astonMartinLogo.png'
import gaslyImg from '~/assets/Alpine/gasly.png'
import doohanimg from  '~/assets/Alpine/doohan.png'
import alpineLogo from  '~/assets/Alpine/alpine.png'
import lawsonPng from   '~/assets/RB/lawson.png'
import haddjarImg from    '~/assets/RB/hadjar.png'
import rbLogo from  '~/assets/RB/rb.png' 
import bearmanImg from   '~/assets/Hass/bearman.png'
import oconImg from  '~/assets/Hass/ocon.png' 
import haasLogo from '~/assets/Hass/haasLogo.png'
import sainzImg from  '~/assets/Wiliiams/sainz.png'
import albonImg from   '~/assets/Wiliiams/albon.png'
import wiliamsLogo from '~/assets/Wiliiams/WilliamsLogo.png'
import hulkImg  from   '~/assets/Sauber/hulkenberg.png'
import borImg  from   '~/assets/Sauber/bortoleto.png'
import sauberLogo from   '~/assets/Sauber/sauberLogo.png'

const pilotos = [
  // McLaren
  {
    id: 1,
    nombre: "Lando",
    apellido: "Norris",
    nacionalidad: "Británico",
    numero: 4,
    equipo: "mclaren",
    logo: MclarenLogo,
    bandera: "🇬🇧",
    imagen: landoImg
  },
  {
    id: 2,
    nombre: "Oscar",
    apellido: "Piastri",
    nacionalidad: "Australiano",
    numero: 81,
    equipo: "mclaren",
    logo: MclarenLogo,
    bandera: "🇦🇺",
    imagen: oscarImg
  },
  // Red Bull
  {
    id: 3,
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "Holandés",
    numero: 1,
    equipo: "redbull",
    logo: redBullLogo,
    bandera: "🇳🇱",
    imagen: maxImg
  },
  {
    id: 4,
    nombre: "Yuki",
    apellido: "Tsunoda",
    nacionalidad: "Japonés",
    numero: 22,
    equipo: "redbull",
    logo: redBullLogo,
    bandera: "🇯🇵",
    imagen: yukiImig
  },
  // Ferrari
  {
    id: 5,
    nombre: "Charles",
    apellido: "Leclerc",
    nacionalidad: "Monegasco",
    numero: 16,
    equipo: "ferrari",
    logo: ferrariLogo,
    bandera: "🇲🇨",
    imagen: leclercImg
  },
  {
    id: 6,
    nombre: "Lewis",
    apellido: "Hamilton",
    nacionalidad: "Británico",
    numero: 44,
    equipo: "ferrari",
    logo: ferrariLogo,
    bandera: "🇬🇧",
    imagen: hamiltonImg
  },
  // Mercedes
  {
    id: 7,
    nombre: "George",
    apellido: "Russell",
    nacionalidad: "Británico",
    numero: 63,
    equipo: "mercedes",
    logo: mercedesLogo,
    bandera: "🇬🇧",
    imagen: rusellImg
  },
  {
    id: 8,
    nombre: "Kimi",
    apellido: "Antonelli",
    nacionalidad: "Italiano",
    numero: 20,
    equipo: "mercedes",
    logo: mercedesLogo,
    bandera: "🇮🇹",
    imagen: kimiImg
  },
  // Aston Martin
  {
    id: 9,
    nombre: "Fernando",
    apellido: "Alonso",
    nacionalidad: "Español",
    numero: 14,
    equipo: "astonmartin",
    logo: AstonMartin,
    bandera: "🇪🇸",
    imagen: alonsoImg
  },
  {
    id: 10,
    nombre: "Lance",
    apellido: "Stroll",
    nacionalidad: "Canadiense",
    numero: 18,
    equipo: "astonmartin",
    logo: AstonMartin,
    bandera: "🇨🇦",
    imagen: strollImig
  },
  // Alpine
  {
    id: 11,
    nombre: "Pierre",
    apellido: "Gasly",
    nacionalidad: "Francés",
    numero: 10,
    equipo: "alpine",
    logo: alpineLogo,
    bandera: "🇫🇷",
    imagen: gaslyImg
  },
  {
    id: 12,
    nombre: "Jack",
    apellido: "Doohan",
    nacionalidad: "Australiano",
    numero: 19,
    equipo: "alpine",
    logo: alpineLogo,
    bandera: "🇦🇺",
    imagen: doohanimg
  },
  // RB
  {
    id: 13,
    nombre: "Liam",
    apellido: "Lawson",
    nacionalidad: "Neozelandés",
    numero: 40,
    equipo: "rb",
    logo: rbLogo,
    bandera: "🇳🇿",
    imagen: lawsonPng
  },
  {
    id: 14,
    nombre: "Isack",
    apellido: "Hadjar",
    nacionalidad: "Francés",
    numero: 17,
    equipo: "rb",
    logo: rbLogo,
    bandera: "🇫🇷",
    imagen: haddjarImg
  },
  // Haas
  {
    id: 15,
    nombre: "Oliver",
    apellido: "Bearman",
    nacionalidad: "Británico",
    numero: 50,
    equipo: "haas",
    logo: haasLogo,
    bandera: "🇬🇧",
    imagen: bearmanImg
  },
  {
    id: 16,
    nombre: "Esteban",
    apellido: "Ocon",
    nacionalidad: "Francés",
    numero: 31,
    equipo: "haas",
    logo: haasLogo,
    bandera: "🇫🇷",
    imagen: oconImg
  },
  // Williams
  {
    id: 17,
    nombre: "Carlos",
    apellido: "Sainz",
    nacionalidad: "Español",
    numero: 55,
    equipo: "williams",
    logo: wiliamsLogo,
    bandera: "🇪🇸",
    imagen: sainzImg
  },
  {
    id: 18,
    nombre: "Alex",
    apellido: "Albon",
    nacionalidad: "Tailandés",
    numero: 23,
    equipo: "williams",
    logo: wiliamsLogo,
    bandera: "🇹🇭",
    imagen: albonImg
  },
  // Sauber
  {
    id: 19,
    nombre: "Nico",
    apellido: "Hülkenberg",
    nacionalidad: "Alemán",
    numero: 27,
    equipo: "sauber",
    logo: sauberLogo,
    bandera: "🇩🇪",
    imagen: hulkImg
  },
  {
    id: 20,
    nombre: "Gabriel",
    apellido: "Bortoleto",
    nacionalidad: "Brasileño",
    numero: 77,
    equipo: "sauber",
    logo: sauberLogo,
    bandera: "🇧🇷",
    imagen: borImg
  }
]
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
      <!--
      <span>Fórmula 1</span>
    -->
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
        :class="piloto.equipo"
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
          <div class="equipo">
            <img :src="piloto.logo" alt="Logo equipo" class="logo-equipo" />
          </div>
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
  margin-right: 280px;
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
  margin-left: 30px;
  margin-bottom: -50px;
  margin-top: -50px;
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
  font-weight: bold;
  font-family: 'F1', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #aaa;
}



.equipo {
  font-size: 11px;
  color: #ccc;
  margin-top: -40px;
  margin-left: 180px;
}

.numero-grande {
  font-size: 30px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  bottom: 4px;
  right: 10px;
  font-family: 'F1', sans-serif;
}
.logo-equipo {
  width: 60px;
  height: auto;
  object-fit: contain;
  opacity: 0.8;
  margin-top: -60px;
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


@media (max-width: 400px) {
  .card {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .grid-pilotos {
    grid-template-columns: 1fr;
  }
}
</style>
<style>
html, body, #app {
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
  background: linear-gradient(to bottom, #141414, #000000);
  font-family: 'F1', sans-serif !important;
  color: white;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>

