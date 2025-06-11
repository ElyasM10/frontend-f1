<script setup>
import '~/pages/estilos/presentacion.css'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import sebastienChoppin from '~/assets/presentacion/SebastienChopin.jpg'
import nuxtLogo from '~/assets/presentacion/nuxtlogo.png'
import empresas from '~/assets/presentacion/empresas.png'
import gitNuxt from '~/assets/presentacion/gitNuxt.png'
import Next from '~/assets/presentacion/next.png'
// Lista de slides
const slides = ref([
{
    breadcrumb: 'Presentación > Inicio',
    title: 'Introducción a Nuxt',
    content: `
      <p>Por Elias Maldonado.</p>
    `,
    logo: true
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Qué es?',
    content: `
      <ul>
        <li>Nuxt es un framework de desarrollo web moderno basado en Vue.js que proporciona una estructura clara, modular y productiva para crear aplicaciones del lado del cliente (SPA), del lado del servidor (SSR) o generadas estáticamente (SSG). </li>
        <li>Nuxt fue creado por Sébastien Chopin y su hermano. Lo lanzaron por primera vez en octubre de 2016.</li>     
      </ul>
     <img 
    src="${sebastienChoppin}" 
    alt="Sébastien Chopin" 
    style="
     position: absolute;
    top: 50%;
      right: 120px;
    transform: translateY(-50%);
    max-width: 250px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    " 
  />
  <img 
      src="${nuxtLogo}" 
      alt="Logo de Nuxt" 
      style="
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        max-width: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      " 
    />
    `
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Para qué sirve?',
    content: `
      <ul>
         <li>Nuxt sirve para construir aplicaciones web robustas y bien estructuradas, sin necesidad de configurar todo desde cero. Permite renderizar contenido en el servidor para mejorar el SEO y el rendimiento, generar sitios estáticos listos para ser desplegados fácilmente, y crear APIs con su sistema de rutas del lado del servidor. </li>
      </ul>`
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Qué problema intenta resolver?',
    content: `
      <ul>
        <li>Nuxt busca simplificar el desarrollo de aplicaciones modernas al eliminar configuraciones repetitivas y técnicas complejas como el renderizado del lado del servidor, manejo del SEO, generación estática y organización del proyecto. Al integrar todas estas funcionalidades desde el inicio, ayuda a los desarrolladores a enfocarse en la lógica y experiencia del usuario.
                </li>
      </ul>`
  },
  {
    breadcrumb: 'Popularidad',
    title: '¿Es utilizada popularmente?',
    content: `
      <ul>
         <li>Sí, Nuxt es ampliamente utilizada y tiene una comunidad muy activa. Esto se refleja en su gran número de estrellas en GitHub (más de 50k), su uso en empresas conocidas y su presencia en conferencias y meetups especializados. 
                </li>
      </ul>
          <img 
  src="${empresas}" 
  alt="Empresas que usan Nuxt" 
  style="
    position: absolute;
       bottom: 60px;            
    left: 50%;              
    transform: translateX(-50%);
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  " 
/>
  <img 
      src="${gitNuxt}" 
      alt="git de Nuxt" 
      style="
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        max-width: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      " 
    />
      `
  },
  {
    breadcrumb: 'Popularidad',
    title: 'Herramientas Similares',
    content: `
      <ul>
       <li>Next.js es el competidor más directo, pero está basado en React. Ambas herramientas siguen un enfoque similar en cuanto a renderizado híbrido, rutas automáticas y generación estática. A nivel global, Next.js tiene mayor adopción debido a la popularidad de React, pero en la comunidad Vue, Nuxt es claramente la opción preferida. 
                    </li>
      </ul>
       <img 
      src="${Next}" 
      alt="Nextjs" 
      style="
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        max-width: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      " 
    />
      `
  },
  {
    breadcrumb: 'Instalación',
    title: 'Cómo Empezar',
    content: `
      <p>Instalación de Nuxt con npm:</p>
       <div class="code-block">npm create nuxt@latest mi-proyecto</div>
      <div class="code-block">cd mi-proyecto</div>
      <div class="code-block">npm run dev</div>`
  },
  {
    breadcrumb: 'Estructura',
    title: 'Estructura del Proyecto',
    content: `
      <ul>
        <li>├── app.vue</li>
        <li>├── nuxt.config.ts</li>
        <li>├── pages/</li>
        <li>├── components/</li>
        <li>├── layouts/</li>
        <li>├── composables/</li>
        <li>├── plugins/</li>
        <li>├── assets/</li>
      </ul>`
  },
  {
    breadcrumb: 'Estructura',
    title: 'Estructura del Código',
    content: `<ul><li>Ejemplo comparativo con Next.js</li></ul>`
  },
  {
    breadcrumb: 'Estructura',
    title: 'Navegación',
    content: `<ul><li>Explicación del sistema de rutas automático</li></ul>`
  },
  {
    breadcrumb: 'Demostración',
    title: 'Demo Práctica',
    content: `<ul><li>Mostrar una demo en vivo del proyecto</li>
      </ul>`
  },
  {
    breadcrumb: 'Aprendizaje',
    title: '¿Es simple de aprender?',
    content: `<ul>
        <li>
                            Nuxt tiene una curva de aprendizaje amigable, especialmente para quienes ya conocen Vue. Su estructura de carpetas clara, el sistema de rutas basado en archivos y el uso de script setup hacen que empezar sea rápido y sencillo. 
                            Aunque se debe tener un conocimiento previo  de HTML JavaScript para CSS sino puede llevar un poco mas de tiempo el adaptarse al framework.
                        </li>
      </ul>`
  },
  {
    breadcrumb: 'Aprendizaje',
    title: '¿Interesa incorporar en el futuro?',
    content: `<ul>
     <li>
                            Definitivamente sí. Nuxt representa una solución moderna y completa para muchos tipos de proyectos, desde landing pages estáticas hasta aplicaciones web complejas con backend incluido. Me interesa incorporarla en futuros desarrollos, especialmente en aquellos que necesiten buena performance, posicionamiento en buscadores (SEO), o un frontend escalable con un ecosistema robusto. También es ideal para proyectos personales 
                        </li>
      </ul>`
  },
  {
    breadcrumb: 'Conclusión > Siguiente Paso',
    title: '¡Listo para comenzar!',
    content: `<p>Con Nuxt puedes crear apps modernas y escalables.</p>`,
    logo: true
  }
])

// Estado reactivo
const currentSlide = ref(0)
const totalSlides = computed(() => slides.value.length)

// Navegación
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

// Navegación con teclado
const handleKeydown = (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault()
    nextSlide()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    previousSlide()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="presentation-container">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="slide"
      :class="{ active: index === currentSlide }"
    >
      <div class="breadcrumb">{{ slide.breadcrumb }}</div>
      <h2>{{ slide.title }}</h2>
      <div v-html="slide.content" />
      <div v-if="slide.logo" class="logo">
        <svg viewBox="0 0 100 100">
          <polygon points="50,20 80,70 20,70" fill="#00ff88" />
        </svg>
      </div>
    </div>
  </div>

  <div class="slide-counter">
    <span>{{ currentSlide + 1 }}</span> / <span>{{ totalSlides }}</span>
  </div>

  <div class="navigation">
    <button class="nav-btn" @click="previousSlide">← Anterior</button>
    <button class="nav-btn" @click="nextSlide">Siguiente →</button>
  </div>
</template>
