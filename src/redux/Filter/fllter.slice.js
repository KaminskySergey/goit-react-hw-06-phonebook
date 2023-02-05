const { createSlice } = require("@reduxjs/toolkit");
const { initFilter } = require("./init-reducer-state");

const filterSlice = createSlice({
    name: 'filter',
    initialState: initFilter,
    reducers: {
        filterActions: (_, {payload}) => {
            return payload;
        }
    }
})



export const { filterActions } = filterSlice.actions

export const filterReducer = filterSlice.reducer

