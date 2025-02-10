import { store } from "@/store"
import { ReduxContext } from "@/context/redux-context"

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
}
