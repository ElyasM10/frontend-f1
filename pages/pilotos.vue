<script setup>
import oscarImg from '~/assets/Mclaren/oscarPiastri.png'
import landoImg from '~/assets/Mclaren/landoNorris.png'
import maxImg from '~/assets/Redbull/maxVerstappen.png'

const pilotos = [
  {
    id: 1,
    nombre: "Lando",
    apellido: "Norris",
    nacionalidad: "Británico",
    numero: 4,
    puntos: 77,
    equipo: "McLaren",
    bandera: "🇬🇧",
    imagen: landoImg
  },
  {
    id: 2,
    nombre: "Oscar",
    apellido: "Piastri",
    nacionalidad: "Australiano",
    numero: 81,
    puntos: 74,
    equipo: "McLaren",
    bandera: "🇦🇺",
    imagen: oscarImg
  },
  {
    id: 3,
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "Holandés",
    numero: 1,
    puntos: 69,
    equipo: "Red Bull Racing",
    bandera: "🇳🇱",
    imagen: maxImg
  }
]
</script>

<template>
  <div class="contenedor">
    <h1>Pilotos 2025</h1>
    <div class="grid-pilotos">
      <div
      class="card"
      :class="{
        mclaren: piloto.equipo.toLowerCase().includes('mclaren'),
        redbull: piloto.equipo.toLowerCase().includes('red bull')
      }"
      v-for="(piloto, index) in pilotos"
      :key="piloto.id"
    >
        <div class="posicion">{{ index + 1 }}</div>
        <div class="puntos">
          <span class="numero-puntos">{{ piloto.puntos }}</span>
          <span class="pts">PTS</span>
        </div>
        <div class="contenido">
          <div class="datos">
            <div class="nombre">
              <span class="nombre-chico">{{ piloto.nombre.toUpperCase() }}</span>
              <span class="nombre-grande">{{ piloto.apellido.toUpperCase() }}</span>
            </div>
            <div class="bandera">{{ piloto.bandera }}</div>
          </div>
          <div class="equipo">{{ piloto.equipo }}</div>
          <div class="imagen">
            <img
              v-if="piloto.imagen"
              :src="piloto.imagen"
              alt="Foto del piloto"
              class="imagen-piloto"
            />
            <div v-else class="imagen-placeholder">IMG</div>
          </div>
          <div class="numero-grande">{{ piloto.numero }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  padding: 30px 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #e10600;
  text-align: center;
  text-transform: uppercase;
}

.grid-pilotos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  display: flex;
  align-items: center;
  padding: 0px 30px; /* Alto de la tarjeta */
  border-radius: 12px;
  background-color: #111;
  border-left: 8px solid #444;
  position: relative;
  min-height: 80px;
  width: 480px; /* Ancho de la tarjeta */
}

.card.mclaren {
  border-left-color: #f77c00;
  background: linear-gradient(to right, #1a1a1a, #f77c0010);
}

.card.redbull {
  border-left-color: #1e2a78;
  background: linear-gradient(to right, #1a1a1a, #1e2a7810);
}

.imagen {
  flex: 0 0 65px;
}

.imagen-piloto {
  width: 65px;
  height: 85px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
}

.contenido {
  flex: 1;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nombre {
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-bottom: -50px;
}

.nombre-chico {
  color: #aaa;
  font-size: 11px;
}

.nombre-grande {
  font-size: 16px;
  font-weight: bold;
}

.bandera {
  font-size: 18px;
  margin-top: 2px;
}

.equipo {
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
}

.puntos {
  text-align: right;
  font-size: 14px;
}

.numero-puntos {
  font-size: 18px;
  font-weight: bold;
}

.pts {
  font-size: 11px;
  color: #999;
}

.posicion {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #e10600;
}

.numero-grande {
  font-size: 36px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  bottom: 4px;
  right: 10px;
}

</style>
