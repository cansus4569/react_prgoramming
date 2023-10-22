/*
    현재 코드는 useState 끼리 묶어주고
    useEffect 끼리 묵어준 형태이다.

    이러한 방식보다는 서로 연관된 코드끼리 묶는것이 좋다.
    즉, 아래와 같이 user 끼리 / width 끼리 

        const [user, setUser] = useState(null);
        useEffect(() => {
            getUserApi(userId).then(data => setUser(data));
        }, [userId]);

        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
            const onResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', onResize);
            return () => {
                window.removeEventListener('resize', onResize);
            };
        }, []);
*/

function Profile({ userId }) {
  const user = useUser(userId); // 커스텀 훅으로 관리 할 수도 있다.
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //     getUserApi(userId).then(data => setUser(data));
  // }, [userId]);

  const width = useWindowWidth(); // 커스텀 훅으로 관리 할 수도 있다.
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const onResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', onResize);
  //   return () => {
  //     window.removeEventListener('resize', onResize);
  //   };
  // }, []);
  // ...
}
