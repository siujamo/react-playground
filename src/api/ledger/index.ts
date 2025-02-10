import { store } from "@/store"

export const testUseReduxStore = () => {
  const counter = store.getState().counter.value
  console.log(`counter = ${counter}`)
}