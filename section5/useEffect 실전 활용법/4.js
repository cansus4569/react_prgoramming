/**
 * 부수 효과 함수를 async await 함수로 작성할 수 없다.
 * 부수 효과 함수는 함수 타입을 리턴해야한다.
 * async await 함수는 프로미스를 리턴하기 때문이다.
 */

useEffect(async () => {
    const data = await fetchUser(userId);
    setUser(data);
}, [userId]);

/**
 * 만약 async await를 사용하고 싶다면
 * 함수를 하나 만들어서 호출해 주는 방식을 사용해야 한다.
 */

useEffect(() => {
    async function fetchAndSetUser() {
        const data = await fetchUser(userId);
        setUser(data);
    }
    fetchAndSetUser();
}, [userId]);