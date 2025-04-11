import './Home.css'
import UpperNav from './components/UpperNav'
import Market from './components/Market'
import PostingBtn from './components/PostingBtn'
import LowerNav from './components/LowerNav'
import marketModel from "../public/dummy_assets/MarketModel"

function Home() {

  return (
    <>
      <UpperNav location={marketModel.location}></UpperNav>
      <Market items={marketModel.items}></Market>
      <PostingBtn></PostingBtn>
      <LowerNav></LowerNav>
    </>
  )
}

export default Home
