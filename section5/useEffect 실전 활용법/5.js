function Profile({ userId }) {
    const [user, setUser] = useState();

    // 부수함수 안에 정의한 함수를 밖으로 뺐다. => button 태그의 onClick 이벤트에서 사용하기 위함
    // 하지만 문제점이 발생한다. => Profile 컴포넌트가 렌더링될 때마다 fetchAndSetUser 함수가 새로 생성된다.
    // 부수효과 함수의 의존성 배열의 내용이 항상 변하게되어, 랜더링될 때마다 부수효과 함수가 실행된다.
    // 이를 해결하기 위해 useCallback 훅을 사용한다. 
    // async function fetchAndSetUser() {
    //     const data = await fetchUser(userId);
    //     setUser(data);
    // }

    // userId가 변경될 때에만 이 함수가 새로 생성되도록 한다.
    const fetchAndSetUser = useCallback(async function (needDetail) {
        const data = await fetchAndSetUser(userId, needDetail);
        setUser(data);
    }, [userId]);

    useEffect(() => {
        // async function fetchAndSetUser() {
        //     const data = await fetchUser(userId);
        //     setUser(data);
        // }
        fetchAndSetUser(false);
    }, [fetchAndSetUser]); // 의존성 배열에는 함수를 입력해야 한다.

    if (!user) {
        return <h1>로딩중...</h1>
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            {/** 부수효과 안에 있는 fetchAndSetUser 함수를 밖에서 사용하려면...? */}
            <button onClick={() => fetchAndSetUser(true)}>더보기</button>
        </div>
    )
}



