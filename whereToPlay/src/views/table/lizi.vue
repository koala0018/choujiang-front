
<script>
import { ref } from "vue";
import {tsParticles} from "tsparticles";
// export default {
//   setup() {
//     const count = ref(0);
//     const inc = () => {
//       count.value++;
//     };
//     return {
//       count,
//       inc
//     };
//   }
// };
//tsParticles library - https://github.com/matteobruni/tsparticles

//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true
  },
  fpsLimit: 60,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 5000
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 75
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 25
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 10
        }
      }
    },
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 3
    },
    links: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      angle: {
        value: 10,
        offset: 0
      },
      enable: true,
      speed: 5,
      direction: "right",
      random: false,
      straight: true,
      outModes: {
        default: "out"
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4,
        groups: ["z5000", "z7500", "z2500", "z1000"]
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  emitters: {
    position: {
      y: 55,
      x: -30
    },
    rate: {
      delay: 7,
      quantity: 1
    },
    size: {
      width: 0,
      height: 0
    },
    particles: {
      shape: {
        type: "images",
        options: {
          images: [
            {
              src: "https://particles.js.org/images/amongus_blue.png",
              width: 205,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_cyan.png",
              width: 207,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_green.png",
              width: 204,
              height: 266
            },
            {
              src: "https://particles.js.org/images/amongus_lime.png",
              width: 206,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_orange.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_pink.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_red.png",
              width: 204,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_white.png",
              width: 205,
              height: 267
            }
          ]
        }
      },
      size: {
        value: 40
      },
      move: {
        speed: 10,
        outModes: {
          default: "destroy",
          left: "none"
        },
        straight: true
      },
      zIndex: {
        value: 0
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 10,
          sync: true
        }
      }
    }
  }
});

</script>
<template>
  <!-- tsParticles container -->
  <div id="tsparticles"></div>

<!--  <Particles-->
<!--      id="tsparticles"-->
<!--      :options="{-->
<!--                                           background: {-->
<!--                                             color: {-->
<!--                                               value: '#0d47a1'-->
<!--                                             }-->
<!--                                           },-->
<!--                                           fpsLimit: 60,-->
<!--                                           interactivity: {-->
<!--                                             detectsOn: 'window',-->
<!--                                             events: {-->
<!--                                               onClick: {-->
<!--                                                 enable: true,-->
<!--                                                 mode: 'push'-->
<!--                                               },-->
<!--                                               onHover: {-->
<!--                                                 enable: true,-->
<!--                                                 mode: 'repulse'-->
<!--                                               },-->
<!--                                               resize: true-->
<!--                                             },-->
<!--                                             modes: {-->
<!--                                               bubble: {-->
<!--                                                 distance: 400,-->
<!--                                                 duration: 2,-->
<!--                                                 opacity: 0.8,-->
<!--                                                 size: 40,-->
<!--                                                 speed: 3-->
<!--                                               },-->
<!--                                               push: {-->
<!--                                                 quantity: 4-->
<!--                                               },-->
<!--                                               repulse: {-->
<!--                                                 distance: 200,-->
<!--                                                 duration: 0.4-->
<!--                                               }-->
<!--                                             }-->
<!--                                           },-->
<!--                                           particles: {-->
<!--                                             color: {-->
<!--                                               value: '#ffffff'-->
<!--                                             },-->
<!--                                             links: {-->
<!--                                               color: '#ffffff',-->
<!--                                               distance: 150,-->
<!--                                               enable: true,-->
<!--                                               opacity: 0.5,-->
<!--                                               width: 1-->
<!--                                             },-->
<!--                                             collisions: {-->
<!--                                               enable: true-->
<!--                                             },-->
<!--                                             move: {-->
<!--                                               direction: 'none',-->
<!--                                               enable: true,-->
<!--                                               outMode: 'bounce',-->
<!--                                               random: false,-->
<!--                                               speed: 6,-->
<!--                                               straight: false-->
<!--                                             },-->
<!--                                             number: {-->
<!--                                               density: {-->
<!--                                                 enable: true,-->
<!--                                                 value_area: 800-->
<!--                                               },-->
<!--                                               value: 80-->
<!--                                             },-->
<!--                                             opacity: {-->
<!--                                               value: 0.5-->
<!--                                             },-->
<!--                                             shape: {-->
<!--                                               type: 'circle'-->
<!--                                             },-->
<!--                                             size: {-->
<!--                                               random: true,-->
<!--                                               value: 5-->
<!--                                             }-->
<!--                                           },-->
<!--                                           detectRetina: true-->
<!--                                         }"-->
<!--  />-->
  <div>
    <n-button>
      sss
    </n-button>
  </div>
</template>

<style scoped>
/*#tsparticles {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background: #000000;*/
/*  z-index: -10;*/
/*}*/

/* ---- reset ---- */
body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}
canvas {
  display: block;
  vertical-align: bottom;
}

</style>