'use client'

import { useEffect, useRef } from 'react'
import * as twgl from 'twgl.js'

interface ASCIIArtProps {
  videoSrc: string
  width?: number
  height?: number
  className?: string
}

const vertexShader = `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = vec4( position );
}
`

const fragmentShader = `#version 300 es
#if __VERSION__ < 130
#define TEXTURE2D texture2D
#else
#define TEXTURE2D texture
#endif
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_video;
  
#define R u_resolution
#define T u_time

float character(int n, vec2 p) {
    p = floor(p*vec2(-4., 4.) + 2.5);
    if (clamp(p.x, 0., 4.) == p.x) {
        if (clamp(p.y, 0., 4.) == p.y) {
            int a = int(round(p.x) + 5. * round(p.y));
                if (((n >> a) & 1) == 1) return 1.;
            }    
    }
    return 0.;
}

void main(){ 
    vec2 F = gl_FragCoord.xy;
    vec2 uv = (2.*F.xy-R.xy)/max(R.x,R.y);
    
    float size = 5.;
    float srez = size*2.;
    vec3 col = texture(u_video, floor(F.xy/srez)*srez/R.xy).rgb;    
    float gray = (.3 * col.r + .6 * col.g + .1 * col.b) * 2.0; // Brighten by 2x

    int n =  0000;

    if (gray > 0.0233) n = 4096;     // .
    if (gray > 0.0465) n = 131200;   // :
    if (gray > 0.0698) n = 4329476;  // !
    if (gray > 0.0930) n = 459200;   // =
    if (gray > 0.1163) n = 4591748;  // 1
    if (gray > 0.1395) n = 12652620; // 3
    if (gray > 0.1628) n = 14749828; // 7
    if (gray > 0.1860) n = 18393220; // y
    if (gray > 0.2093) n = 15239300; // ?
    if (gray > 0.2326) n = 17318431; // l
    if (gray > 0.2558) n = 32641156; // t
    if (gray > 0.2791) n = 18393412; // v
    if (gray > 0.3023) n = 18157905; // x
    if (gray > 0.3256) n = 17463428; // 4
    if (gray > 0.3488) n = 14954572; // 5
    if (gray > 0.3721) n = 13177118; // 2
    if (gray > 0.3953) n = 18405034; // w
    if (gray > 0.4186) n = 16269839; // c
    if (gray > 0.4419) n = 15018318; // 0 
    if (gray > 0.4651) n = 18400814; // u
    if (gray > 0.4884) n = 33081316; // q
    if (gray > 0.5116) n = 15255086; // o
    if (gray > 0.5349) n = 32045584; // p
    if (gray > 0.5581) n = 6566222;  // 6
    if (gray > 0.5814) n = 15022158; // 9
    if (gray > 0.6047) n = 18444881; // k
    if (gray > 0.6279) n = 16272942; // g
    if (gray > 0.6512) n = 18415153; // h
    if (gray > 0.6744) n = 32641183; // i
    if (gray > 0.6977) n = 32540207; // j
    if (gray > 0.7209) n = 18732593; // m
    if (gray > 0.7442) n = 18667121; // n
    if (gray > 0.7674) n = 16267326; // s
    if (gray > 0.7907) n = 32575775; // z
    if (gray > 0.8140) n = 15022414; // 8
    if (gray > 0.8372) n = 15255537; // a
    if (gray > 0.8605) n = 32032318; // d
    if (gray > 0.8837) n = 32045617; // r
    if (gray > 0.9070) n = 33061392; // f
    if (gray > 0.9302) n = 33061407; // e 
    if (gray > 0.9535) n = 32045630; // b
    if (gray > 0.9767) n = 11512810; // #

    vec2 p = mod(F.xy/size, 2.) - vec2(1);
    col = col*character(n, p) * 2.5; // Brighten the final output
    fragColor = vec4(col, 1);
}
`

export default function ASCIIArt({ 
  videoSrc, 
  width = 280, 
  height = 380, 
  className = '' 
}: ASCIIArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl2')
    
    if (!gl) {
      console.error('WebGL2 not supported')
      return
    }

    // Create video element
    const video = document.createElement('video')
    video.src = videoSrc
    video.crossOrigin = 'anonymous'
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.playbackRate = 1.5 // Speed up by 1.5x
    
    // Set video dimensions
    video.width = width
    video.height = height
    
    video.play().catch(e => console.warn('Video autoplay failed:', e))

    let programInfo: any
    let bufferInfo: any
    let textures: any

    const initWebGL = () => {
      try {
        programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader])
        
        const arrays = {
          position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
          texcoord: { numComponents: 2, data: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1] }
        }

        bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays)
        textures = twgl.createTextures(gl, {
          video: { src: video, min: gl.LINEAR, wrap: gl.REPEAT }
        })
      } catch (error) {
        console.error('WebGL initialization failed:', error)
      }
    }

    const render = (time: number) => {
      if (!gl || !programInfo) return

      twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement, 1.0)

      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        gl.bindTexture(gl.TEXTURE_2D, textures.video)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video)
      }

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
      gl.useProgram(programInfo.program)
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo)
      twgl.setUniforms(programInfo, {
        u_time: time * 0.001,
        u_video: textures.video,
        u_resolution: [gl.canvas.width, gl.canvas.height]
      })
      twgl.drawBufferInfo(gl, bufferInfo)

      animationRef.current = requestAnimationFrame(render)
    }

    // Initialize WebGL when video can play
    video.addEventListener('canplay', () => {
      initWebGL()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      animationRef.current = requestAnimationFrame(render)
    })

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      video.pause()
      video.src = ''
    }
  }, [videoSrc, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundColor: '#0B0B0C' // Match landing page background
      }}
    />
  )
}