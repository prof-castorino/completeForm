import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const slice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        increment: (state, action) => {
            state = [...state, action.payload]
            console.log(state)
        }
    },
})

export const { increment } = slice.actions
