
import { slice } from './reducers/form'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        form: slice.reducer
    }
})

