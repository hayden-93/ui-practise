import {
  countSelector,
  increment,
  incrementByAmount,
  decrement,
  useDispatch,
  useSelector,
} from "@/lib";

const CounterPage = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </>
  );
};

export default CounterPage;
