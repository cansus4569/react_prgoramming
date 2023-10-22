function Greeting({ isLogin, name, cash }) {
  // 삼항 연산자를 이용한 방식보단, && 연산자를 활용하여 보여주는 것이 좋다.
  /*
    < 삼항 연산자를 활용한 방식 > 
        {isLogin ? (
            <div>
                <p>{name}님 안녕하세요.</p>
                <p>현재 보유하신 금액은 {cash}원입니다.</p>
            </div>
        ) : null}
    */
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
      {!isLogin && isLogin2 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}
