class GrainyFilter extends ImageFilter {
  constructor() {
    super();
  }

  getFragmentShader() {
    return "\
      precision highp float;\
      varying highp vec2 v_texCoord;\
      uniform sampler2D texture;\
      float rand(vec2 co) {\
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
      }\
      void main() {\
          vec4 color = texture2D(texture, v_texCoord);\
          \
          float diff = (rand(v_texCoord) - 0.5) * 0.6;\
          color.r += diff;\
          color.g += diff;\
          color.b += diff;\
          \
          gl_FragColor = color;\
      }\
  ";
  }
}
