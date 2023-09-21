console.log("Hello Three.js");

const canvas = document.querySelector(".webgl");

console.log(THREE);

// To create our scene and produce something on the screen.
// We need 3 things: Scene, Objects, Camera, Renderer, 

// Scene is like a container, you place your objects, models, particles, lights, etc, in it, and at some point, you ask Three.js to render that entire scene.

// Scene
const scene = new THREE.Scene();

// Objects can be many things, you can have primitive geometries, imported models, particles, lights and so on.

// Starting with a red cube, we will need to create a type of object named Mesh. 

// A Mesh is the combination of a geometry (the shape) and a material (how it looks).

// Keeping things simple for now, we'll create a BoxGeometry (cube) and a MeshBasicMaterial (red).

// To create the geometry, we use the BoxGeometry class with the first 3 parameters that correspond to the box's size.

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);

// To create the material, we use the MeshBasicMaterial class with one parameter: an object {} containing all the options.

// There are many ways to specify a color in Three.js, we can send it as a JS hexadecimal `0xff0000`, you can send it as a string hexadecimal, `#ff0000`, you can use color names like `red`, or you can send an instance of the Color class.

// Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// To create the final mesh, we use the Mesh class and send the geometry and the material as parameters.

const mesh = new THREE.Mesh(geometry, material);

// You can now add your mesh to the scene by using the `add(...) method.

scene.add(mesh);

// If you don't add the mesh to the scene, it won't be rendered.

// The camera is not visible. It's like your eyes, you can't see them, but you see through them. It's more like a theoretical point of view, when we will do a render of your scene, it will be from that camera's point of view.

// You can have multiple cameras just like a movie set, and you can switch between those cameras as you please. Usually, we only use one camera.

// There are different types of cameras, and we will talk about these in a future lesson. For now, we simply need a camera that handles perspecive (making close objects look more prominent than far objects.)

// To create the camera, we use the `PerspectiveCamera` camera.

// There are two essential parameters we need to provide.

// The field of view.

// The field of view is how large your vision angle is. If you use a very large angle, you'll be able to see in every direction at once but with much distortion, because the result will be drawn on a small rectangle. If you use a small angle, you'll have a very narrow vision angle. 

// The field of view (or fov) is expressed in degrees and corresponds to the vertical vision angle. For this exercise, we'll use 75 degrees angle.

// The aspect ratio.

// In most cases, the aspect ratio is the width of the canvas divided by its height. We haven't specified any width or height for now, but we will need to later. In the meantime, we will create an object with temporary values that we can re-use.

// / Don't forget to add your camera to the scene. Everything should work without adding the camera to the scene, but it might result in bugs later.

// Sizes
const sizes = { 
    width: 800,
    height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer

// The renderer's job is to do the render. 

// We will simply ask the renderer to render our scene from the camera point of view, and the result will be drawn into a canvas. 

// You can create the canvas by yourself, or let the renderer generate it and the add it to your page. 

// Create the canvas element before you load the scripts and give it a class:

// To create the renderer, we use the WebGLRenderer class with one parameter: an object {} containing all the options.

// We need to specify the canvas property corresponding to the canvas we added to the page.

// We also need to update the size of your renderer with the setSize method using the sizes object we created earlier. The setSize() method will automatically resize our canvas accordingly.

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);


// It's time to work on our first render. Call the render() method on the renderer and send it the scene and the camera as parameters.

renderer.render(scene, camera);

// The issue up till now is that we haven't specified our object's position, nor our camera's position.

// Both are in default position, which is the center of the scene and we can't see an object from it's inside (by default). We need to move things.

// To do that, we have access to multiple properties on each object, such as position, rotation, and scale. For now, use the position property to move the camera backward.

// The position property is an object with three relevant properties: x, y, and z. By default, Three.js considers the forward/backward axis to be z.


