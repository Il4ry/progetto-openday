import {Cubo} from './cubo.js'

const cubo = new Cubo();

//visione 3D
function creaCubo(){
    const spazio= document.getElementById(("cubo3D"));
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(100, spazio.clientWidth / spazio.clientHeight, 0.1, 1000);
}


var renderer = new THREE.WebGLRenderer();
renderer.setSize( spazio.clientWidth, spazio.clientHeight ); //definisce lo spazio(canvas) dove inserire il disegnio
document.body.appendChild( renderer.domElement );