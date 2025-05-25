import styled from "styled-components"

import TitleBar from '../components/TitleBar'
import StoreDetail from '../components/StoreDetail'
import Orderbar from '../components/Orderbar'

import { usePosts } from '../hooks/usePosts'

const MainContainer = styled.div`
    width: 390px;
`;


const Stores = () => {

  const { store, addStore, loading } = usePosts();

  const handleSubmit = (name) => {
    addStore(0,name,"4.9","3,924","10분~25분","2,000");
  }


  return (
    <MainContainer>
      <div style={{ height: "41px" }}>
        <img style={{ margin: "10px" }} src='/img/backarrow.svg' alt='backarrow' />
      </div>
      <TitleBar text={"샐러드"} />
      {loading ? (<p>loading...</p>) : (
        <ul>
          {store.map((p) => (
            <StoreDetail key={p.id} rank={p.rank} name={p.name} rate={p.rate} count={p.count} time={p.time} fee={p.fee} />
          ))}
        </ul>
      )}

      <Orderbar onSubmit = {handleSubmit} />

    </MainContainer>
  )
}

export default Stores
