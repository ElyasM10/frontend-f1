<script setup>
import '~/pages/estilos/pilotos.css'
import { usePilotos } from '~/componentes/usePilotos'
import Navbar from '~/componentes/NavBar.vue'
import Footer from '~/componentes/Footer.vue'

const { pilotos, irADetalles } = usePilotos()
</script>

<template>
<!-- Navbar -->
  <Navbar/>

<div class="contenedor">
    <h1>Pilotos 2025</h1>
    <div class="grid-pilotos">
      <div
        class="card"
        :class="piloto.equipo.toLowerCase()"
        v-for="piloto in pilotos"
        :key="piloto.id"
        @click="irADetalles(piloto.id)"
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
  <Footer/>

</template>