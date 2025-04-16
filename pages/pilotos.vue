<script setup>
    const pilotos = [
      {
        id: 1,
        nombre: "Lando",
        apellido: "Norris",
        nacionalidad: "Británico",
        numero: 4,
        puntos: 77,
        equipo: "McLaren",
        bandera: "🇬🇧"
      },
      {
        id: 2,
        nombre: "Oscar",
        apellido: "Piastri",
        nacionalidad: "Australiano",
        numero: 81,
        puntos: 74,
        equipo: "McLaren",
        bandera: "🇦🇺"
      },
      {
        id: 3,
        nombre: "Max",
        apellido: "Verstappen",
        nacionalidad: "Holandés",
        numero: 1,
        puntos: 69,
        equipo: "Red Bull Racing",
        bandera: "🇳🇱"
      }
    ];
    </script>
    
    <template>
      <div class="contenedor">
        <h1>Pilotos 2025</h1>
        <div class="grid-pilotos">
          <div class="card" v-for="(piloto, index) in pilotos" :key="piloto.id">
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
              <!-- Imagen del piloto -->
              <div class="imagen">
                <!-- Acá podés reemplazar por una imagen real -->
                <div class="imagen-placeholder">IMG</div>
              </div>
              <div class="numero-grande">{{ piloto.numero }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <style scoped>
    .contenedor {
      padding: 40px;
      background-color: white;
      color: black;
    }
    
    h1 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    
    .grid-pilotos {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .card {
      border: 2px solid #ccc;
      border-radius: 12px;
      width: 280px;
      padding: 20px;
      position: relative;
      background-color: #fff;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    }
    
    .posicion {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 24px;
      font-weight: bold;
    }
    
    .puntos {
      position: absolute;
      top: 10px;
      right: 10px;
      text-align: right;
    }
    
    .numero-puntos {
      font-size: 20px;
      font-weight: bold;
    }
    
    .pts {
      font-size: 12px;
      font-weight: bold;
      display: block;
    }
    
    .contenido {
      margin-top: 40px;
      text-align: center;
    }
    
    .datos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
    }
    
    .nombre-chico {
      display: block;
      font-size: 12px;
      color: gray;
    }
    
    .nombre-grande {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }
    
    .equipo {
      margin-top: 4px;
      font-size: 13px;
      color: #666;
    }
    
    .imagen {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    .imagen-placeholder {
      width: 100px;
      height: 130px;
      margin: 0 auto;
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: bold;
      color: #aaa;
    }
    
    .numero-grande {
      font-size: 32px;
      font-weight: bold;
      color: #f77c00;
      margin-top: 10px;
    }
    </style>
    