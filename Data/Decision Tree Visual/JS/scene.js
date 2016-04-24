    var scene, camera, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight - 124) / 2, 1, 10000 );
        camera.position.z = 1000;

        //light here 
        var directionalLight = new THREE.DirectionalLight(0x99ff33);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);

        //load obj
        var manager = new THREE.LoadingManager();
        manager.onProgress = function(){
            console.log(item,loaded,total);
        }

        var loader = new THREE.OBJLoader(manager);
        loader.load('teapot.obj',function(object){
            object.traverse(function(child){
                //use texture here
            });
            object.position.x = 0;
            object.position.y = 0;
            object.scale.x = 100;
            object.scale.y = 100;
            object.scale.z = 100;
            obj = object;
            scene.add(obj);
        });

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( window.innerWidth /2, window.innerHeight - 124 );

        document.getElementById("canvas").appendChild( renderer.domElement );

    }

    function animate() {

        requestAnimationFrame( animate );

        obj.rotation.y += 0.02;

        renderer.render( scene, camera );

    }

    window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize(){

    	camera.aspect = window.innerWidth / (window.innerHeight - 124) / 2;
    	camera.updateProjectionMatrix();

    	renderer.setSize( window.innerWidth / 2, window.innerHeight - 124 );

	}