class BlackWhiteFilter extends ImageFilter {

    constructor() {
      super();
    }
  
    getFragmentShader() {
      return '\
      precision mediump float;\
      uniform sampler2D texture;\
      uniform float amount = 0.5;\
      varying vec2 texCoord;\
      float rand(vec2 co) {\
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
      }\
      void main() {\
          vec4 color = texture2D(texture, texCoord);\
          \
          float diff = (rand(texCoord) - 0.5) * amount;\
          color.r += diff;\
          color.g += diff;\
          color.b += diff;\
          \
          gl_FragColor = color;\
      }\
  '
    }
  }