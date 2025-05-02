import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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

import MclarenLogo from '~/assets/Mclaren/mclarenLogo.png'
import redBullLogo from '~/assets/Redbull/redbullLogo.png'
import ferrariLogo from '~/assets/Ferrari/ferrari.png'
import mercedesLogo from '~/assets/Mercedes/mercedesLogo.png'
import AstonMartin from '~/assets/AstonMartin/astonMartinLogo.png'
import alpineLogo from '~/assets/Alpine/alpine.png'
import rbLogo from '~/assets/RB/rb.png'
import haasLogo from '~/assets/Hass/haasLogo.png'
import wiliamsLogo from '~/assets/Wiliiams/WilliamsLogo.png'
import sauberLogo from '~/assets/Sauber/sauberLogo.png'

export function usePilotos() {
  const router = useRouter()
  const pilotos = ref([])
  const isLoading = ref(true)

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
    'Sauber': sauberLogo
  }

  const ordenEquipos = [
    'McLaren',
    'Ferrari',
    'Red Bull Racing',
    'Mercedes',
    'Aston Martin',
    'Alpine',
    'Haas',
    'Racing Bulls',
    'Williams',
    'Sauber'
  ]

  const irADetalles = (id) => {
    router.push(`/detallesPilotos/${id}`)
  }

  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8080/pilotos')
      if (!response.ok) throw new Error('Error al obtener pilotos')
  
      const data = await response.json()
  
      pilotos.value = data
        .map(piloto => {
          const nombreCompleto = `${piloto.nombre} ${piloto.apellido}`
          return {
            ...piloto,
            imagen: imagenesPilotos[nombreCompleto] || null,
            logoEquipo: logosEquipos[piloto.equipo] || null
          }
        })
        .sort((a, b) => {
          return ordenEquipos.indexOf(a.equipo) - ordenEquipos.indexOf(b.equipo)
        })
  
      // Si no se ha recargado aún, recarga una vez
      if (!window.location.href.includes('recargado')) {
        const nuevaUrl = window.location.href + (window.location.href.includes('?') ? '&' : '?') + 'recargado=true'
        window.location.replace(nuevaUrl)
      }
    } catch (error) {
      console.error('Error al obtener pilotos:', error)
    } finally {
      // Esperar al menos 1 segundo antes de quitar el loading
      setTimeout(() => {
        isLoading.value = false
      }, 10000) 
    }
  })
  return {
    pilotos,
    irADetalles,
    isLoading
  }
}
