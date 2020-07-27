window.onload = () => {
    var Renderer=new THREE.WebGLRenderer();
    var Scene=new THREE.Scene();
    var Camera=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var Controls;
    var group = new THREE.Group();

    init();
    animate();

    function init(){
        Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        document.getElementById("render").appendChild(Renderer.domElement);
        Camera.position.z=500;
        Controls = new THREE.TrackballControls(Camera);
        Controls.addEventListener('change', render);
        Scene.add(Camera);
        load_model();
    }

    function load_model(){
        var points = ["point_po", "point_or", "point_n", "point_a"]
        line_po_or=new THREE.Geometry();
        line_n_a=new THREE.Geometry();
        line_or_na=new THREE.Geometry();

        var po_geometry = new THREE.SphereGeometry( 6, 32, 32 );
        var po_ball_material = new THREE.MeshBasicMaterial( {color: 0x00BFFF} );
        var po_sphere = new THREE.Mesh( po_geometry, po_ball_material);
        var or_geometry = new THREE.SphereGeometry( 6, 32, 32 );
        var or_ball_material = new THREE.MeshBasicMaterial( {color: 0xFFD700} );
        var or_sphere = new THREE.Mesh( or_geometry, or_ball_material);
        var n_geometry = new THREE.SphereGeometry( 6, 32, 32 );
        var n_ball_material = new THREE.MeshBasicMaterial( {color: 0x32CD32} );
        var n_sphere = new THREE.Mesh( n_geometry, n_ball_material);
        var a_geometry = new THREE.SphereGeometry( 6, 32, 32 );
        var a_ball_material = new THREE.MeshBasicMaterial( {color: 0xFF4500} );
        var a_sphere = new THREE.Mesh( a_geometry, a_ball_material);

        var spheres = [po_sphere, or_sphere, n_sphere, a_sphere];

        

        for (var i = 0; i < points.length; i++){
            point = document.getElementById(points[i]).innerText;
            x = point.slice(point.indexOf("x: ")+3,point.indexOf(','));
            y = point.slice(point.indexOf("y: ")+3);
            v = new THREE.Vector3(x,y,0);
            spheres[i].position.x = x;
            spheres[i].position.y = y;
            spheres[i].position.z = 0;
            group.add(spheres[i]);
            if (i < 2){
                line_po_or.vertices.push(v);
                if (i == 1){
                    new_x = parseFloat(x) + x/2;
                    new_y = y - (line_po_or.vertices[0].getComponent(1) - y)/2;
                    new_v = new THREE.Vector3(new_x,new_y,0);
                    line_or_na.vertices.push(v);
                    line_or_na.vertices.push(new_v);
                }
            }else{
                line_n_a.vertices.push(v);
            }
        }
        
        Material=new THREE.ParticleBasicMaterial({color:0XFF0000});
        Material2=new THREE.ParticleBasicMaterial({color:0X0000FF});
        
        Figure_po_or=new THREE.Line(line_po_or,Material);
        group.add(Figure_po_or);
        Figure_or_na=new THREE.Line(line_or_na,Material2);
        group.add(Figure_or_na);
        Figure_n_a=new THREE.Line(line_n_a,Material);
        group.add(Figure_n_a);
        // console.log(parseFloat(line_n_a.vertices[0].getComponent(1)));
        group.position.x = -600;
        group.position.y = -400;
        Scene.add(group);
    }

    function animate(){
        requestAnimationFrame(animate);
        Controls.update();
    }

    function render(){
        // Controls.update();
        // group.rotation.y=group.rotation.y+0.01;
        // group.lookAt(0,0,0);
        // console.log(group.position);
        Renderer.render(Scene,Camera);
    }
}