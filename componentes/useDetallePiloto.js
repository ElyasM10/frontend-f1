import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

export function useDetallePiloto() {
  const route = useRoute()
  const piloto = ref(null)

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

  const formatearFecha = (fechaIso) => {
    const fecha = new Date(fechaIso)
    const dia = String(fecha.getDate()).padStart(2, '0')
    const mes = String(fecha.getMonth() + 1).padStart(2, '0')
    const año = fecha.getFullYear()
    return `${dia}-${mes}-${año}`
  }

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

  return {
    piloto,
    formatearFecha
  }
}
