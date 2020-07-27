window.onload = () => {
    var Renderer=new THREE.WebGLRenderer();
    var Scene=new THREE.Scene();
    var Camera=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var Controls;

    init();
    animate();

    function init(){
        Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        document.getElementById("render").appendChild(Renderer.domElement);
        Camera.position.z=1000;
        Controls = new THREE.TrackballControls(Camera);
        Controls.addEventListener('change', render);
        Scene.add(Camera);
        load_model();
    }

    function load_model(){
        var points = ["point_po", "point_or", "point_n", "point_a"]
        line_po_or=new THREE.Geometry();
        line_n_a=new THREE.Geometry();

        for (var i = 0; i < points.length; i++){
            point = document.getElementById(points[i]).innerText;
            console.log(point);
            x = point.slice(point.indexOf("x: ")+3,point.indexOf(','));
            y = point.slice(point.indexOf("y: ")+3);
            v = new THREE.Vector3(x,y,0);
            if (i < 2){
                line_po_or.vertices.push(v);
            }else{
                line_n_a.vertices.push(v);
            }
        }
        
        Material=new THREE.ParticleBasicMaterial({color:0XFF0000});
        
        Figure_po_or=new THREE.Line(line_po_or,Material);
        Scene.add(Figure_po_or);
        Figure_n_a=new THREE.Line(line_n_a,Material);
        Scene.add(Figure_n_a);
    }

    function animate(){
        requestAnimationFrame(animate);
        Controls.update();
    }

    function render(){
        Renderer.render(Scene,Camera);
    }
}