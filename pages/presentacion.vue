<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Lista de slides
const slides = ref([
  {
    breadcrumb: 'Presentación > Inicio',
    title: 'Introducción a Nuxt',
    content: `<p>Por Elias Maldonado.</p>`,
    logo: true
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Qué es?',
    content: `
      <ul>
        <li>Nuxt es un framework de desarrollo web moderno basado en Vue.js...</li>
        <li>Fue creado por Sébastien y Alexandre Chopin en 2016.</li>
      </ul>`
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Para qué sirve?',
    content: `
      <ul>
        <li>Sirve para construir aplicaciones web bien estructuradas...</li>
      </ul>`
  },
  {
    breadcrumb: 'Introducción',
    title: '¿Qué problema intenta resolver?',
    content: `
      <ul>
        <li>Nuxt simplifica el desarrollo eliminando configuraciones complejas...</li>
      </ul>`
  },
  {
    breadcrumb: 'Popularidad',
    title: '¿Es utilizada popularmente?',
    content: `
      <ul>
        <li>Sí, tiene más de 50k estrellas en GitHub y una comunidad activa.</li>
      </ul>`
  },
  {
    breadcrumb: 'Popularidad',
    title: 'Herramientas Similares',
    content: `
      <ul>
        <li>Next.js es el competidor más cercano basado en React.</li>
      </ul>`
  },
  {
    breadcrumb: 'Instalación',
    title: 'Cómo Empezar',
    content: `
      <p>Instalación de Nuxt con npm:</p>
      <div class="code">npm create nuxt@latest mi-proyecto</div>
      <div class="code">cd mi-proyecto</div>
      <div class="code">npm run dev</div>`
  },
  {
    breadcrumb: 'Estructura',
    title: 'Estructura del Proyecto',
    content: `
      <ul>
        <li>├── app.vue</li>
        <li>├── pages/</li>
        <li>├── components/</li>
        <li>├── layouts/</li>
        <li>├── plugins/</li>
        <li>├── composables/</li>
        <li>├── public/</li>
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
    content: `<ul><li>Mostrar una demo en vivo del proyecto</li></ul>`
  },
  {
    breadcrumb: 'Aprendizaje',
    title: '¿Es simple de aprender?',
    content: `<ul><li>Curva de aprendizaje amigable si ya sabes Vue.</li></ul>`
  },
  {
    breadcrumb: 'Aprendizaje',
    title: '¿Interesa incorporar en el futuro?',
    content: `<ul><li>Sí. Es útil para proyectos personales y profesionales.</li></ul>`
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

<style>
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

   body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, 
    #00dc82 0%, 
        #020420 50%,   /* azul oscuro ocupa hasta 80% */
        #020420 100%   /* verde brillante solo en el 20% final */
);
    min-height: 100vh;
     display: block;
    justify-content: center;
    align-items: flex-start; /* Cambiado de center a flex-start */
    padding-top: 50px;        /* Espacio desde arriba */
    overflow-x: hidden;
}
.presentation-container {
    width: 100%;
    max-width: 1600px;
    padding: 0 40px;
    position: relative;
      margin: 0 auto; 
}
        .slide {
background: linear-gradient(135deg, 
        #020420 0%, 
        #020420 30%,   /* azul oscuro ocupa hasta 80% */
        #00dc82 100%   /* verde brillante solo en el 20% final */
);
            min-height: 80vh;
            border-radius: 20px;
            padding: 60px 40px;
            text-align: center;
            display: none;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            width: 100%;
        }

        .slide.active {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .slide::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.1; }
        }

        .breadcrumb {
            color: #00ff88;
            font-size: 22px;
            margin-bottom: 30px;
            font-weight: 500;
            z-index: 2;
            position: relative;
        }

        .slide h1 {
            color: white;
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 40px;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            z-index: 2;
            position: relative;
        }

        .slide h2 {
            color: white;
            font-size: 4rem;
            font-weight: 600;
            margin-bottom: 30px;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            z-index: 2;
            position: relative;
        }

        .slide p {
            color: #b8c6db;
            font-size: 2rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto 40px;
            z-index: 2;
            position: relative;
        }

        .slide ul {
            color: #b8c6db;
            font-size: 1.8rem;
            line-height: 1.8;
            text-align: left;
            max-width: 600px;
            margin: 0 auto;
            z-index: 2;
            position: relative;
        }

        .slide li {
            margin-bottom: 15px;
            padding-left: 20px;
            position: relative;
        }

        .slide li::before {
            content: '▶';
            color: #00ff88;
            position: absolute;
             left: -10px; 
        }

        .logo {
            position: absolute;
            bottom: 40px;
            left: 80%;
            transform: translateX(-50%);
            z-index: 2;
        }

        .logo svg {
            width: 60px;
            height: 60px;
            fill: #00ff88;
        }

        .navigation {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            gap: 15px;
            z-index: 100;
        }

        .nav-btn {
            background: rgba(0, 255, 136, 0.2);
            border: 2px solid #00ff88;
            color: #00ff88;
            padding: 12px 24px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
            background: #00ff88;
            color: #0f2027;
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }

        .nav-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .slide-counter {
            position: fixed;
            top: 30px;
            right: 30px;
            color: #00ff88;
            font-size: 18px;
            font-weight: 600;
            z-index: 100;
        }

        @media (max-width: 768px) {
            .slide {
                padding: 40px 20px;
            }
            
            .slide h1 {
                font-size: 2.5rem;
            }
            
            .slide h2 {
                font-size: 2rem;
            }
            
            .slide p {
                font-size: 1.2rem;
            }
            
            .navigation {
                bottom: 20px;
                right: 20px;
            }
        }
</style>