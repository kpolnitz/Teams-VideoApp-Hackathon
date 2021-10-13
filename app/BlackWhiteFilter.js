class BlackWhiteFilter extends ImageFilter {

    constructor() {
      super();
  
    }
  
    getFragmentShader() {
      return `
      uniform sampler2D texture;
      varying vec2 texCoord;
      float rand(vec2 co) {
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }
      void main() {
          vec4 color = texture2D(texture, texCoord);
          
          float diff = (rand(texCoord) - 0.5) * 0.5;
          color.r += diff;
          color.g += diff;
          color.b += diff;
          
          gl_FragColor = color;
      }
        `
    }
  }