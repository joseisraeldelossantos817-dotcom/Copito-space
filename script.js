import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

// ==========================
// ESCENA
// ==========================

const scene = new THREE.Scene();

// ==========================
// CÁMARA
// ==========================

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 8;

// ==========================
// RENDER
// ==========================

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.toneMappingExposure = 0;

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

document.body.appendChild(
  renderer.domElement
);

// ==========================
// ESTRELLAS
// ==========================

const starsGeometry =
  new THREE.BufferGeometry();

const starsCount = 6000;

const positions = [];

for (let i = 0; i < starsCount; i++) {

  positions.push(
    (Math.random() - 0.5) * 200
  );

  positions.push(
    (Math.random() - 0.5) * 200
  );

  positions.push(
    (Math.random() - 0.5) * 200
  );
}

starsGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    positions,
    3
  )
);

const starsMaterial =
  new THREE.PointsMaterial({

    color: 0xffffff,

    size: 0.07,

    transparent: true,

    opacity: 0.9,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const stars =
  new THREE.Points(
    starsGeometry,
    starsMaterial
  );

scene.add(stars);

// ==========================
// ESTRELLAS DORADAS
// ==========================

const goldenGeometry =
  new THREE.BufferGeometry();

const goldenPositions = [];

for (let i = 0; i < 500; i++) {

  goldenPositions.push(
    (Math.random() - 0.5) * 200
  );

  goldenPositions.push(
    (Math.random() - 0.5) * 200
  );

  goldenPositions.push(
    (Math.random() - 0.5) * 200
  );
}

goldenGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    goldenPositions,
    3
  )
);

const goldenMaterial =
  new THREE.PointsMaterial({

    color: 0xffdd88,

    size: 0.12,

    transparent: true,

    opacity: 0.8,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const goldenStars =
  new THREE.Points(
    goldenGeometry,
    goldenMaterial
  );

scene.add(goldenStars);
// ==========================
// CORAZÓN DE ESTRELLAS
// ==========================

const heartGeometry =
  new THREE.BufferGeometry();

const heartPositions = [];

for (let i = 0; i < 2000; i++) {

  const t =
    Math.random() * Math.PI * 2;

  const x =
    16 * Math.pow(Math.sin(t), 3);

  const y =
    13 * Math.cos(t)
    - 5 * Math.cos(2 * t)
    - 2 * Math.cos(3 * t)
    - Math.cos(4 * t);

  heartPositions.push(x * 0.15);

  heartPositions.push(y * 0.15);

  heartPositions.push(
    (Math.random() - 0.5) * 0.5
  );
}

heartGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    heartPositions,
    3
  )
);

const heartMaterial =
  new THREE.PointsMaterial({

    color: 0xffcc66,

    size: 0.08,

    transparent: true,

    opacity: 0.9,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const heart =
  new THREE.Points(
    heartGeometry,
    heartMaterial
  );

heart.position.z = -8;

scene.add(heart);

// ==========================
// NEBULOSAS
// ==========================

const nebulaGeometry =
  new THREE.BufferGeometry();

const nebulaCount = 2000;

const nebulaPositions = [];

for (let i = 0; i < nebulaCount; i++) {

  nebulaPositions.push(
    (Math.random() - 0.5) * 100
  );

  nebulaPositions.push(
    (Math.random() - 0.5) * 100
  );

  nebulaPositions.push(
    (Math.random() - 0.5) * 100
  );
}

nebulaGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    nebulaPositions,
    3
  )
);

const nebulaMaterial =
  new THREE.PointsMaterial({

    color: 0x4455aa,

    size: 0.3,

    transparent: true,

    opacity: 0.18

  });

const nebulaParticles =
  new THREE.Points(
    nebulaGeometry,
    nebulaMaterial
  );

scene.add(nebulaParticles);

// Segunda nebulosa

const nebulaMaterial2 =
  new THREE.PointsMaterial({

    color: 0xaa66ff,

    size: 0.25,

    transparent: true,

    opacity: 0.06

  });

const nebulaParticles2 =
  new THREE.Points(
    nebulaGeometry,
    nebulaMaterial2
  );

scene.add(nebulaParticles2);

// ==========================
// PLANETA DE ESTRELLAS
// ==========================

const planetGeometry =
  new THREE.BufferGeometry();

const planetPositions = [];

const planetCount = 8000;

for (let i = 0; i < planetCount; i++) {

  const radius = 2;

  const theta =
    Math.random() * Math.PI * 2;

  const phi =
    Math.acos(
      (Math.random() * 2) - 1
    );

  const x =
    radius *
    Math.sin(phi) *
    Math.cos(theta);

  const y =
    radius *
    Math.sin(phi) *
    Math.sin(theta);

  const z =
    radius *
    Math.cos(phi);

  planetPositions.push(x);
  planetPositions.push(y);
  planetPositions.push(z);
}

planetGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    planetPositions,
    3
  )
);

const planetMaterial =
  new THREE.PointsMaterial({

    color: 0xffffff,

    size: 0.03,

    transparent: true,

    opacity: 0.95,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const planet =
  new THREE.Points(
    planetGeometry,
    planetMaterial
  );

scene.add(planet);

// ==========================
// ANILLO DE ESTRELLAS
// ==========================

const ringGeometry =
  new THREE.BufferGeometry();

const ringPositions = [];

const ringCount = 5000;

for (let i = 0; i < ringCount; i++) {

  const angle =
    Math.random() * Math.PI * 2;

  const radius =
    3.2 + Math.random() * 0.6;

  const x =
    Math.cos(angle) * radius;

  const z =
    Math.sin(angle) * radius;

  const y =
    (Math.random() - 0.5) * 0.08;

  ringPositions.push(x);
  ringPositions.push(y);
  ringPositions.push(z);
}

ringGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    ringPositions,
    3
  )
);

const ringMaterial =
  new THREE.PointsMaterial({

    color: 0xffdd88,

    size: 0.035,

    transparent: true,

    opacity: 0.9,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const ring =
  new THREE.Points(
    ringGeometry,
    ringMaterial
  );

ring.rotation.x =
  Math.PI / 2.8;

ring.rotation.z =
  0.4;

scene.add(ring);

// ==========================
// LUZ DORADA
// ==========================

const glowLight =
  new THREE.PointLight(
    0xffdd88,
    4,
    30
  );

glowLight.position.set(
  0,
  0,
  5
);

scene.add(glowLight);
// ==========================
// ESTRELLA FUGAZ
// ==========================

const shootingGroup =
  new THREE.Group();

// Núcleo

const shootingCore =
  new THREE.Mesh(

    new THREE.SphereGeometry(
      0.08,
      16,
      16
    ),

    new THREE.MeshBasicMaterial({

      color: 0xffffff

    })
  );

shootingGroup.add(
  shootingCore
);

// Cola luminosa

const tailGeometry =
  new THREE.BufferGeometry();

const tailPositions = [];

for (let i = 0; i < 40; i++) {

  tailPositions.push(
    -i * 0.12,
    0,
    0
  );
}

tailGeometry.setAttribute(

  'position',

  new THREE.Float32BufferAttribute(
    tailPositions,
    3
  )
);

const tailMaterial =
  new THREE.PointsMaterial({

    color: 0xffeeaa,

    size: 0.12,

    transparent: true,

    opacity: 0.7,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });

const tail =
  new THREE.Points(
    tailGeometry,
    tailMaterial
  );

shootingGroup.add(tail);

scene.add(shootingGroup);

let shootingActive = false;

// ==========================
// MOVIMIENTO MOUSE
// ==========================

let mouseX = 0;
let mouseY = 0;

window.addEventListener(
  'mousemove',
  (event) => {

    mouseX =
      (event.clientX /
      window.innerWidth - 0.5);

    mouseY =
      (event.clientY /
      window.innerHeight - 0.5);
  }
);

// ==========================
// MÚSICA Y BOTÓN
// ==========================

const button =
  document.getElementById(
    'startButton'
  );

const music =
  document.getElementById(
    'music'
  );
button.addEventListener(
  'click',
  () => {

    music.volume = 0;

    music.play();

    let fadeAudio =
      setInterval(() => {

        if (music.volume < 0.2) {

          music.volume += 0.01;

        } else {

          clearInterval(fadeAudio);
        }

      }, 200);

    const overlay =
      document.getElementById(
        'overlay'
      );

    overlay.style.transition =
      '1s';

    overlay.style.opacity = 0;

    setTimeout(() => {

      overlay.style.display =
        'none';

    }, 1000);
  }
);


// ==========================
// ANIMACIÓN
// ==========================

function animate() {

  requestAnimationFrame(
    animate
  );
  
  // Fade del universo

if (
  renderer.toneMappingExposure < 1
) {

  renderer.toneMappingExposure += 0.003;
}


 // Movimiento profundo estrellas

stars.rotation.y +=
  0.00015;

goldenStars.rotation.y +=
  0.00035;


    heart.rotation.y += 0.003;
    // Latido del corazón

const pulse =
  1 + Math.sin(Date.now() * 0.003) * 0.08;

heart.scale.set(
  pulse,
  pulse,
  pulse
);

  // Movimiento nebulosas

  nebulaParticles.rotation.y +=
    0.0002;
    // Cambio suave de color nebulosas

const colorShift =
  (Math.sin(Date.now() * 0.0003) + 1) / 2;

nebulaMaterial.color.setRGB(

  0.2 + colorShift * 0.4,

  0.3,

  0.7 + colorShift * 0.2

);

  nebulaParticles2.rotation.x +=
    0.0001;

  // Rotación planeta

  planet.rotation.y +=
    0.002;

  // Rotación anillo

  ring.rotation.y +=
  0.001;

  // Movimiento cámara

  camera.position.x += (

    mouseX * 3 -
    camera.position.x

  ) * 0.02;

  camera.position.y += (

    -mouseY * 2 -
    camera.position.y

  ) * 0.02;
  // Acercamiento lento

if (camera.position.z > 5.5) {

  camera.position.z -= 0.002;
}

  camera.lookAt(
    scene.position
  );
  // ==========================
// ESTRELLA FUGAZ MOVIMIENTO
// ==========================

if (!shootingActive &&
    Math.random() < 0.002) {

  shootingActive = true;

  shootingGroup.position.set(

    -20,

    10 + Math.random() * 10,

    -10

  );
}

if (shootingActive) {

  // Movimiento diagonal elegante

  shootingGroup.position.x += 0.7;

  shootingGroup.position.y -= 0.25;

  // Inclinación tipo película

  shootingGroup.rotation.z = -0.5;

  // Reinicio

  if (
    shootingGroup.position.x > 25
  ) {

    shootingActive = false;
  }
}

renderer.render(
  scene,
  camera
);

}
// Mostrar final después de tiempo

setTimeout(() => {

  document
    .getElementById('finalMessage')
    .style.opacity = '1';

}, 25000);

animate();

// ==========================
// RESPONSIVE
// ==========================

window.addEventListener(
  'resize',
  () => {

    camera.aspect =

      window.innerWidth /
      window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

      window.innerWidth,
      window.innerHeight

    );
  }
);