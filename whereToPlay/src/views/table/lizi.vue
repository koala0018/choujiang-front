
<script setup>
import { ref } from "vue";
import { loadFull } from "tsparticles";
import {loadBigCirclesPreset} from "tsparticles-preset-big-circles";
const particlesInit = async engine => {
  // await loadFull(engine);
  await loadBigCirclesPreset(engine);
};
const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};
const particlesOptions = {
  preset: "big-circles", // also "big-circles" is accepted
};
const option = {
  background: {
    color: {
      value: '#0d47a1'
    }
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}
</script>
<template>
  <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
  />
  <div>
    <n-button>
      sss
    </n-button>
  </div>


</template>

<style scoped>
</style>