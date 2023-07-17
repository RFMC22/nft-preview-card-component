import { Card } from "./components"
import { nfts } from "./data/nfts"

const App = () => {
  return (
    <>
      <Card nfts={nfts}/>
    </>
  )
}

export default App