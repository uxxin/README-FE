import { createSlice } from "@reduxjs/toolkit";

const CheckSlice = createSlice({
    name: "check",
    initialState:{
        count: 0,
        requiredList : [],
        acceptanceList: []
    },
    reducers :{
        setRequiredListCount : (state, action) =>{ //리스트 개수세기
            state.count = action.payload.count;
            state.requiredList = action.payload.requiredList
            state.acceptanceList = action.payload.acceptanceList
        },
        acceptance : (state, action) =>{ //수락버튼 누르면 작동되는 로직(화면에서 없어지고 데이터가 승인완료된 목록으로 넘어감)
            const acceptItem = state.requiredList.find(item=>item.submit_id===action.payload);
            if (acceptItem) {
                state.acceptanceList = [...state.acceptanceList, acceptItem];
                state.requiredList = state.requiredList.filter(item => item.submit_id !== action.payload);
                state.count = state.requiredList.length;
            }

        },
        rejection : (state,action) =>{ //거절버튼 누르면 작동되는 로직, 그냥 없어짐
            state.requiredList = state.requiredList.filter(item => item.submit_id !== action.payload);
            state.count = state.requiredList.length;
        }

    }
});

export const {setRequiredListCount,acceptance,rejection} = CheckSlice.actions;
export default CheckSlice.reducer;