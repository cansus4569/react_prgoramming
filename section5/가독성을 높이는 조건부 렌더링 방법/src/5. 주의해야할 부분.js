
// cash 값이 0일 경우, "0원 보유 중" 을 표현할 수 없다.
// memo 값이 ''일 경우, "200자 입력 가능" 을 표현할 수 없다.
<div>
  {cash && <p>{cash}원 보유 중</p>}
  {memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>;


<div>
  {cash != null && <p>{cash}원 보유 중</p>}
  {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
