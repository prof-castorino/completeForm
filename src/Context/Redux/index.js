
import { SliceForm } from './Store'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        form: SliceForm.reducer
    }
})

