import { useAppDispatch } from "@/hooks/use-app-dispatch"
import { useAppSelector } from "@/hooks/use-app-selector"
import { increment, decrement, incrementByAmount } from "@/store/counter-slice"
import "./index.scss"

export const Personal = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      Counter = {counter}
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
      <button onClick={() => dispatch(incrementByAmount(-3))}>-3</button>
    </div>
  )
}
