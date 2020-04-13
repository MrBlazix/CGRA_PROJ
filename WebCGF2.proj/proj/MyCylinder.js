class MyCylinder extends CGFobject {
    /**
     * 
     * @param {*} scene - MyScene
     * @param {*} slices - "Sides" of the cylinder
     */

    constructor(scene, slices) {
        super(scene);
        this.sides = slices;
        this.initBuffers();
      }

    initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alpha = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++) {
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.texCoords.push(ang/(2*Math.PI),0);
            this.texCoords.push(ang/(2*Math.PI),0);
            ang+=alpha;
        }

        this.vertices.push(1, 0, 0);
        this.vertices.push(1, 1, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.texCoords.push(alpha, 0);
        this.texCoords.push(alpha, 1);

        for(var i = 0; i < this.slices; i++) {
            this.indices.push(2*i, 2*i+2, 2*i+1);
            this.indices.push(2*i+1, 2*i+2, 2*i+3);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    
}













}