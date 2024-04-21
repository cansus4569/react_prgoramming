// useOnMounted.js
// 별도의 훅을 만들어서 사용하는 방법

export default function useOnMounted(effect) {
    useEffect(effect, []);
}


// App.js
import useOnMounted from './useOnMounted';

export default function App() {
    return (
        <div>
            실전 리액트 <Profile />
        </div>
    )
}

function Profile({ userId }) {
    const [user, setUser] = useState();
    useOnMounted(() => {
        fetchUser(userId).then(data => setUser(data));
    })
    console.log(user);
    return null;
}

function fetchUser() { }