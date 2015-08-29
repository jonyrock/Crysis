Game = function () {
    
    
    Game.prototype.start = function() {
        
    };
    
    function Game(viewport) {
        var renderer = new THREE.WebGLRenderer();
        alert($(viewport).width());
        renderer.setSize($(viewport).width(), $(viewport).height());
        $(viewport).append( renderer.domElement );

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(
            35,         // Field of view
            $(viewport).width() / $(viewport).height(),  // Aspect ratio
            .1,         // Near
            10000       // Far
        );
        camera.position.set( -15, 10, 15 );
        camera.lookAt(scene.position);

        var geometry = new THREE.BoxGeometry( 5, 5, 5 );
        var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        var light = new THREE.PointLight( 0xFFFF00 );
        light.position.set( 10, 0, 10 );
        scene.add( light );

        renderer.setClearColor( 0xdddddd, 1);

        renderer.render( scene, camera );
        
    }

    return Game;

}();