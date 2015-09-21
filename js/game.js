Game = function () {
    
    var WIDTH = 800;
    var HEIGHT = 800;

    Game.prototype.start = function() {
    };
    
    
    function Game(viewport) {
        
        $(document).keypress(function(event) {
            alert(event.which);
        });
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize($(viewport).width(), $(viewport).height());
        $(viewport).append( renderer.domElement );

        var scene = new THREE.Scene();
        
        var camera = new THREE.OrthographicCamera(0, WIDTH, 0, HEIGHT);

        var geometry = new THREE.BoxGeometry(50, 50, 50);
        var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(30, HEIGHT / 2, -1);
        scene.add(mesh);

        var light = new THREE.PointLight( 0xFFFF00 );
        light.position.set( 10, 20, -200 );
        scene.add(light);
        
        var map = THREE.ImageUtils.loadTexture("assets/img/pers.png");
        var material = new THREE.SpriteMaterial(
          { map: map, color: 0xff0000, fog: true } 
        );
        var sprite = new THREE.Sprite(material);
        
        scene.add(sprite);

        sprite.position.set(50,50,-1);

        renderer.setClearColor( 0xdddddd, 1);

        var material = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(100, 0, 0));
        geometry.vertices.push(new THREE.Vector3(0, 100, 0));
        geometry.vertices.push(new THREE.Vector3(1000, 0, 0));
        var line = new THREE.Line(geometry, material);
        scene.add(line);

        var render = function () {
            requestAnimationFrame(render);
            mesh.position.x += 1;
            mesh.rotation.x += 0.1;
            renderer.render(scene, camera);
        };
        render();
    }
    return Game;
}();