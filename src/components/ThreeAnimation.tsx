'use client'

import { useEffect, useRef, useState } from 'react'

interface ThreeAnimationProps {
  className?: string
}

export default function ThreeAnimation({ className }: ThreeAnimationProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const animationIdRef = useRef<number>()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mountRef.current) return

    // Dynamic import of Three.js to avoid SSR issues
    const initThreeJs = async () => {
      try {
        const THREE = await import('three')
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls')

        const mount = mountRef.current
        if (!mount) return

        // Scene setup
        const scene = new THREE.Scene()
        
        const camera = new THREE.PerspectiveCamera(
          60, 
          mount.clientWidth / mount.clientHeight, 
          1, 
          1000
        )
        camera.position.set(0, 4, 21)
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(mount.clientWidth, mount.clientHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0) // Transparent background
        mount.appendChild(renderer.domElement)
        
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enablePan = false
        controls.enableZoom = false // Keep zoom disabled for scroll
        
        const gu = {
          time: { value: 0 }
        }
        
        // Particle system setup - exact copy from original
        const sizes: number[] = []
        const shift: number[] = []
        const pushShift = () => {
          shift.push(
            Math.random() * Math.PI, 
            Math.random() * Math.PI * 2, 
            (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
            Math.random() * 0.9 + 0.1
          )
        }
        
        const pts = new Array(50000).fill(null).map(() => {
          sizes.push(Math.random() * 1.5 + 0.5)
          pushShift()
          return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5)
        })
        
        for(let i = 0; i < 100000; i++){
          const r = 10, R = 40
          const rand = Math.pow(Math.random(), 1.5)
          const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r)
          pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2 ))
          sizes.push(Math.random() * 1.5 + 0.5)
          pushShift()
        }
        
        const g = new THREE.BufferGeometry().setFromPoints(pts)
        g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1))
        g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4))
        
        const m = new THREE.PointsMaterial({
          size: 0.125,
          transparent: true,
          depthTest: false,
          blending: THREE.AdditiveBlending,
        })
        
        // Custom shader - exact copy from original
        m.onBeforeCompile = (shader: any) => {
          shader.uniforms.time = gu.time
          shader.vertexShader = `
            uniform float time;
            attribute float sizes;
            attribute vec4 shift;
            varying vec3 vColor;
            ${shader.vertexShader}
          `.replace(
            `gl_PointSize = size;`,
            `gl_PointSize = size * sizes;`
          ).replace(
            `#include <color_vertex>`,
            `#include <color_vertex>
              float d = length(abs(position) / vec3(40., 10., 40));
              d = clamp(d, 0., 1.);
              vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
            `
          ).replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
              float t = time;
              float moveT = mod(shift.x + shift.z * t, 6.28318530718);
              float moveS = mod(shift.y + shift.z * t, 6.28318530718);
              transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
            `
          )
          
          shader.fragmentShader = `
            varying vec3 vColor;
            ${shader.fragmentShader}
          `.replace(
            `vec4 diffuseColor = vec4( diffuse, opacity );`,
            `float d = length(gl_PointCoord.xy - 0.5);
             vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`
          )
        }
        
        const p = new THREE.Points(g, m)
        p.rotation.order = "ZYX"
        p.rotation.z = 0.2
        scene.add(p)
        
        const clock = new THREE.Clock()
        
        // Animation loop - exact copy from original
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate)
          
          controls.update()
          const t = clock.getElapsedTime() * 0.5
          gu.time.value = t * Math.PI
          p.rotation.y = t * 0.05
          
          renderer.render(scene, camera)
        }
        
        animate()
        
        // Handle resize
        const handleResize = () => {
          if (!mount) return
          
          camera.aspect = mount.clientWidth / mount.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(mount.clientWidth, mount.clientHeight)
        }
        
        window.addEventListener('resize', handleResize)
        
        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize)
          
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current)
          }
          
          if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
            mount.removeChild(renderer.domElement)
          }
          
          g.dispose()
          m.dispose()
          renderer.dispose()
        }
      } catch (error) {
        console.error('Failed to initialize Three.js:', error)
      }
    }

    initThreeJs()
  }, [isClient])

  if (!isClient) {
    return <div className={className} style={{ width: '100%', height: '100%' }} />
  }

  return (
    <div 
      ref={mountRef} 
      className={className}
      style={{ 
        width: '100%', 
        height: '100%',
        touchAction: 'pan-y'
      }}
    />
  )
}