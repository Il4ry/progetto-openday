import {CuboRubik} from './cubo.js'

const cubo = new CuboRubik();

function inizializzaCubo3D() {
    const spazio = document.getElementById('cubo3D');

    // Scena
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    let camera = new THREE.PerspectiveCamera(50,spazio.clientWidth / spazio.clientHeight,0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(spazio.clientWidth, spazio.clientHeight);
    spazio.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Crea i 27 cubetti
    creaCubetti();

    // Animazione quando il cubo è fermo
    animate();

    // Rotazione automatica
    let rotationX = 0.3;
    let rotationY = 0.5;

    function animate() {
        requestAnimationFrame(animate);

        if (!animating) {
            scene.rotation.x += 0.002;
            scene.rotation.y += 0.003;
        }

        renderer.render(scene, camera);
    }

    // Responsive
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}