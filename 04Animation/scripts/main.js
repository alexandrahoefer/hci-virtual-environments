

// changing individual properties with code and using setInterval
var rotationSpeed = 0.005; //change speed - the higher the number the faster it rotates
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed; // change to -= to have it rotate counter clockwise 
    myOtherBox.object3D.rotation.y -= rotationSpeed; //rotation on y axis
    myOtherBox.object3D.rotation.z -= rotationSpeed; //rotation on z axis
	console.log(myOtherBox.object3D.rotation.x.y.z); //rotates around all axis's 
}

setInterval(spin, 16); //equivalent to 60 fps
