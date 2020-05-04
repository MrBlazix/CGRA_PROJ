/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, deltaY, initSpeed, xPos, yPos, zPos){
        super(scene);
        this.body = new MyCylinder(scene, 200);
        this.front = new MySphere(scene, 300, 10);
        this.back = new MySphere(scene, 300, 10);
        this.deltaY = deltaY;
        this.initSpeed = initSpeed;
        this.speed = initSpeed;
        this.xPos = xPos;
        this.yPos = yPos;
        this.zPos = zPos;
        this.initBuffers();
	    this.speedFactor = 1;
    }

    update(){
        this.xPos += (this.speed) * Math.sin(this.deltaY) * this.speedFactor;
        this.zPos += (this.speed) * Math.cos(this.deltaY) * this.speedFactor;
    }

    accelerate(val){
        this.speed = this.speed + val;
    }

    turn(val){
        this.deltaY = this.deltaY + val;
    }

    reset(){
        this.deltaY = 0;
        this.initSpeed = 0;
        this.speed = 0;
        this.xPos = 0;
        this.yPos = 0;
        this.zPos = 0;
    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.xPos, this.yPos, this.zPos);
        this.scene.rotate(this.deltaY, 0, 1, 0);
        this.scene.scale(this.scene.scaleFactor,this.scene.scaleFactor,this.scene.scaleFactor);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.body.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.back.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2);
        this.front.display();
        this.scene.popMatrix();
        this.scene.popMatrix(); 
    }

}


