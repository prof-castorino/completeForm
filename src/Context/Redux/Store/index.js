import { createSlice } from '@reduxjs/toolkit'
import * as Interface from '../../Interface'

const initialState = {
    Address: Interface.AddressProps,
    Affiliation: Interface.AffiliationProps,
    Contact: Interface.ContactProps,
    Document: Interface.DocumentProps,
    Terms: Interface.TermProps
}

export const SliceForm = createSlice({
    name: 'form',
    initialState,
    reducers: {
        incrementForm: (state, action) => {
            var payload = Object.assign({}, action.payload)
            state[payload.step] = payload.item
            console.log(state)
        }
    },
})

export const { incrementForm } = SliceForm.actions
