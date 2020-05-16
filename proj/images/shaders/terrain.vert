attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float scaleFactor;
uniform float timeStep;

uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
    /*vec3 offset = vec3(0.0, 0.0, 0.0);

    float filter = 0.1;

    vec2 newCoord = aTextureCoord;

    newCoord.x += timeStep;
    newCoord.y += timeStep;

    vec4 tex = texture2D (uSampler2, newCoord);

    offset = 0.5*aVertexNormal*tex.b*filter;*/

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = newCoord;
}