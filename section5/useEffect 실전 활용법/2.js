/**
 * 부수효과 함수에 의존성 배열에 상태변수를 지정하였기에, userId가 변경될때 마다 부수효과 함수가 실행된다.
 */

function Profile({ userId }) {
    const [user, setUser] = useState();
    const [needDetail, setNeedDetail] = useState(false);
    useEffect(() => {
        fetchUser(userId, needDetail).then(data => setUser(data));
    }, [userId]);;
    // ...
}