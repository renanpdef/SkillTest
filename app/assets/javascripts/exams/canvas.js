// var Render=new THREE.WebGLRenderer();
// var Scene=new THREE.Scene();
// var Camera=new THREE.PerspectiveCamera();
// var Figure;

// inicio();

// function inicio(){
//   Render.setSize(600,600);
//   document.getElementById('render').appendChild(Render.domElement);
//   Camera.position.z=2000;
//   Scene.add(Camera);
//   load_model();
//   Render.render(Scene,Camera);
// }

// function load_model(){
//     line_po_or=new THREE.Geometry();
//     v_po=new THREE.Vector3(exam.point_po.x,exam.point_po.y,0);
//     line_po_or.vertices.push(v_po);
//     v_or=new THREE.Vector3(exam.point_or.x,exam.point_or.y,0);
//     line_po_or.vertices.push(v_or);
    
//     line_n_a=new THREE.Geometry();
//     v_n=new THREE.Vector3(exam.point_n.x,exam.point_n.y,0);
//     line_n_a.vertices.push(v_n);
//     v_a=new THREE.Vector3(exam.point_a.x,exam.point_a.x,0);
//     line_n_a.vertices.push(v_a);
    
//     Material=new THREE.ParticleBasicMaterial({color:0XFF0000});
    
//     Figure_po_or=new THREE.Line(line_po_or,Material);
//     Scene.add(Figure_po_or);
//     Figure_n_a=new THREE.Line(line_n_a,Material);
//     Scene.add(Figure_n_a);
//  }