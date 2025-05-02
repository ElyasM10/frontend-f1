<script setup>
import '~/pages/estilos/detallesPiloto.css'
import { useDetallePiloto } from '~/componentes/useDetallePiloto'
import Navbar from '~/componentes/NavBar.vue'
import Footer from '~/componentes/Footer.vue'

const { piloto, formatearFecha } = useDetallePiloto()
</script>
<template>
  <!-- Navbar -->
  <Navbar/>
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
  <Footer/>
</template>
