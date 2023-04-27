import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Address: {},
    Affiliation: {},
    Contact: {},
    Document: {},
    Terms: {}
}

export const slice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        increment: (state, action) => {
            var payload = Object.assign({}, action.payload)
            state[payload.step] = payload.form
            console.log(state)
        }
    },
})

export const { increment } = slice.actions
