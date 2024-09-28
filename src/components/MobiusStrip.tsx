"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function MobiusStrip() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // 렌더러 저장을 위한 ref 추가

  useEffect(() => {
    if (!containerRef.current) return;

    // 이전 렌더러가 있으면 삭제
    if (rendererRef.current) {
      containerRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose(); // 메모리 해제
    }

    // 씬, 카메라, 렌더러 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // aspect ratio를 1로 고정

    const renderer = new THREE.WebGLRenderer();
    const containerWidth = 300; // 원하는 너비
    const containerHeight = 300; // 원하는 높이
    renderer.setSize(containerWidth, containerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 렌더러를 ref에 저장
    rendererRef.current = renderer;
    // 뫼비우스 띠의 좌표 계산을 위한 수학적 함수
    const mobius = (u: number, t: number) => {
      u *= Math.PI * 2;
      t = t * 2 - 1;
      const major = 1.5; // 뫼비우스 띠의 주요 반지름
      const x = Math.cos(u) * (major + t * Math.cos(u / 2));
      const y = Math.sin(u) * (major + t * Math.cos(u / 2));
      const z = t * Math.sin(u / 2);
      return new THREE.Vector3(x, y, z);
    };
    // 파라메트릭 지오메트리를 BufferGeometry로 변환
    const segments = 200;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i <= segments; i++) {
      const u = i / segments;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const vertex = mobius(u, t);
        vertices.push(vertex.x, vertex.y, vertex.z);
      }
    }
    // BufferGeometry에 데이터를 추가
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    // Material 설정 (wireframe으로 띠가 보이게)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    // 뫼비우스 띠 Mesh 생성
    const mobiusStrip = new THREE.Mesh(geometry, material);
    scene.add(mobiusStrip);
    // 카메라 위치 설정
    camera.position.z = 5;
    // 애니메이션 함수
    const animate = () => {
      requestAnimationFrame(animate);
      mobiusStrip.rotation.x += 0.01;
      mobiusStrip.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // 컴포넌트 언마운트 시 렌더러 제거
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
        containerRef.current?.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }
    };
  }, []);
  return <div ref={containerRef} style={{ width: "300px", height: "300px" }} />;
}
