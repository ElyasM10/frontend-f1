<template>
<nav class="navbar navbar-expand-lg navbar-dark f1-navbar">
    <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center" to="/pilotosok">
        <img src="/assets/f1-75.png" alt="Logo F1" width="200" height="24" class="d-inline-block me-2" />
        <div class="ms-3">
            <img src="/assets/fia.png" alt="GP Miami" class="fia-img" />
        </div>
        </router-link>
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
            <a class="nav-link active" href="#">Inicio</a>
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
</template>
<style scoped>
.f1-navbar {
    background-color: #c01111 !important; 
    border-bottom: 3px solid #c01111;     
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
</style>