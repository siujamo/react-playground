import { useAppDispatch, useAppSelector } from "@/hook/store"
import { increment, decrement } from "@/store/counter-slice"
import "./index.scss"

export const Personal = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      Counter = {counter}
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
    </div>
  )
}
