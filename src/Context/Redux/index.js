
import { slice } from './Store/form'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        form: slice.reducer
    }
})

