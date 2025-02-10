import "./index.scss"
import { useEffect } from "react"
import { testUseReduxStore } from "@/api/ledger"

export const Home = () => {
  useEffect(() => {
    testUseReduxStore()
  }, [])

  return (
    <div className="home-wrapper">
      <span>Home Page</span>
    </div>
  )
}