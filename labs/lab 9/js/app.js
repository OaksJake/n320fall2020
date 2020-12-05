var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, ball;

scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
})

function createScene() {
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0,0,-15), scene);
    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1), scene);

    var gravityVector = BABYLON.Vector3(0, -9.81, 0);
    var physicsPlug = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlug);

    ball = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: .5}, scene);

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height:20, width:20, subdivisions:4}, scene);
    ground.position.y = -3;
    ground.position.z = 9;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: .9}, scene);

    return scene;
}

window.addEventListener("click", function() {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    if(selectedObject) {
        var pushDir = pickResult.getNormal(true);
        var forceDirection = pushDir.scale(-1000);

        selectedObject.physicsImpostor.applyForce(
            forceDirection,
            selectedObject.getAbsolutePosition()
        )
    }
})