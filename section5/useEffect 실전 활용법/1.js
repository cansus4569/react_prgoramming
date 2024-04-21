/**
 * 문제점 
 * 부수효과 함수에 의존성 배열이 비어있기 때문에, 부수효과 함수는 한 번만 실행된다.
 */

function Profile({ userId }) {
    const [user, setUser] = useState();
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, []);;
    // ...
}