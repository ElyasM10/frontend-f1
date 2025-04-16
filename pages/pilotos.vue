<script setup>
const { data: pilotos, error } = await useFetch('http://localhost:8080/pilotos')
</script>

<template>
  <div>
    <h2>Pilotos</h2>
    <ul>
      <li v-for="piloto in pilotos" :key="piloto.id">
        {{ piloto.nombre }} {{ piloto.apellido }}
      </li>
    </ul>
  </div>
</template