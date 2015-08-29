Game = function () {
    
    var WIDTH = 800;
    var HEIGHT = 800;

    Game.prototype.start = function() {
        
    };
    
    function Game(viewport) {
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize($(viewport).width(), $(viewport).height());
        $(viewport).append( renderer.domElement );

        var scene = new THREE.Scene();
        
        var camera = new THREE.OrthographicCamera(0, WIDTH, 0, HEIGHT);

        var geometry = new THREE.BoxGeometry( 50, 50, 50 );
        var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(30, HEIGHT / 2, -1);
        scene.add( mesh );

        var light = new THREE.PointLight( 0xFFFF00 );
        light.position.set( 10, 20, -200 );
        scene.add( light );


        var map = THREE.ImageUtils.loadTexture("../assets/img/pers.png");
        var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
        var sprite = new THREE.Sprite(material);
        scene.add(sprite);

        renderer.setClearColor( 0xdddddd, 1);

        var render = function () {
            requestAnimationFrame( render );

            mesh.position.x += 1;
            mesh.rotation.x += 0.1;

            renderer.render(scene, camera);
        };

        render();
        
    }

    return Game;

}();