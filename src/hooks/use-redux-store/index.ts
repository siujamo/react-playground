import { useContext } from "react"
import { ReduxContext } from "@/context/redux-context"

export const useReduxStore = () => useContext(ReduxContext)