import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize); // 이벤트 핸들러 등록
    console.log('부수 효과 함수 실행');
    return () => {
      window.removeEventListener('resize', onResize); // 이벤트 핸들러 해제
      console.log('부수 효과 반환 실행');
    };
  }, []);

  return width;
}
