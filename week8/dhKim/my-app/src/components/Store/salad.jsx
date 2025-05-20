import {React,useState, useEffect } from 'react';

import * as K from './salad_style';

import AddStoreContainer from './addStoreContainer';


import { getSaladStores,deleteStore,updateStore } from '../../apis/saladStores';
//일단 saladData는 배열이고 여기서 데이터를 추출해 와서 샤용

import StoreMDbtnContainer from './storeMDbtnContainer';

function Salad(){
    const [saladstores,setSaladStores]=useState([]);
    const [editId, setEditId] = useState(null);
    const [editedStore, setEditedStore] = useState({});

    useEffect(() => {
    async function fetchData(){
        try{
            const data = await getSaladStores();
            setSaladStores(data);
        }catch(error){
            console.error("샐러드 가게 불러오기 실패", error);
        }
    }

    fetchData();
    }, []);

    const handleSave = async (id) => {
        try {
        await updateStore(id, editedStore);
        const updatedList = saladstores.map(store =>
            store.id === id ? { ...store, ...editedStore } : store
        );
        setSaladStores(updatedList);
        setEditId(null);
        } catch (error) {
        console.error("수정 실패", error);
        }
    };

    return (
    <K.SaladContainer>
        {saladstores.map((data) => (
        <K.SaladInfo key={data.id}>
            <div style={{
            position: "absolute",
            top: "16px",
            left: "24px",
            width: "54px",
            height: "54px",
            borderRadius: "8px",
            background: "#ECECEC"
            }}></div>

            <K.SaladTextContainer>
            {editId === data.id ? (
                <>
                <input
                    type="text"
                    value={editedStore.name}
                    onChange={(e) => setEditedStore({ ...editedStore, name: e.target.value })}
                    placeholder="가게 이름"
                />
                <input
                    type="text"
                    value={editedStore.rate}
                    onChange={(e) => setEditedStore({ ...editedStore, rate: e.target.value })}
                    placeholder="평점"
                />
                <input
                    type="text"
                    value={editedStore.comments}
                    onChange={(e) => setEditedStore({ ...editedStore, comments: e.target.value })}
                    placeholder="리뷰 개수"
                />
                <input
                    type="text"
                    value={editedStore.del_time}
                    onChange={(e) => setEditedStore({ ...editedStore, del_time: e.target.value })}
                    placeholder="배달 시간"
                />
                <input
                    type="text"
                    value={editedStore.del_price}
                    onChange={(e) => setEditedStore({ ...editedStore, del_price: e.target.value })}
                    placeholder="배달비"
                />

                <button onClick={() => handleSave(data.id)}>저장</button>
                <button onClick={() => setEditId(null)}>취소</button>
                </>
            ) : (
                <div style={{display:"flex", flexDirection:"row",gap:"30px",width:"280px",height:"100px"}}>
                    <div>
                        <K.SaladStoreText>{data.name}</K.SaladStoreText>
                        <K.SaladStoreSubText>
                            <img src="/imgs/star.svg" alt="star" />
                            {data.rate} ({data.comments})
                        </K.SaladStoreSubText>
                        <K.SaladStoreSubText>
                            {data.del_time}, {data.del_price}
                        </K.SaladStoreSubText>
                    </div>
                    
                    <StoreMDbtnContainer
                        id={data.id}
                        onDelete={() => {
                        deleteStore(data.id).then(() => {
                            setSaladStores(prev => prev.filter((s) => s.id !== data.id));
                        });
                        }}
                        onEdit={() => {
                        setEditId(data.id);
                        setEditedStore({
                            name: data.name,
                            rate: data.rate,
                            comments: data.comments,
                            del_time: data.del_time,
                            del_price: data.del_price,
                        });
                        }}
                    />
                </div>
            )}
            </K.SaladTextContainer>
        </K.SaladInfo>
        ))}

        <AddStoreContainer />
    </K.SaladContainer>
);

};

export default Salad;
