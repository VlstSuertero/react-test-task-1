import {createSlice} from '@reduxjs/toolkit'

import {initialState} from './state'
import {fetch} from './fetch'
import {fetchSuccess} from './fetch-success'
import {fetchError} from './fetch-error'
import {update} from './update.ts'
import {addMeta} from './add-meta'
import {removeMeta} from './remove-meta.ts'

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetch,
        fetchSuccess,
        fetchError,
        update,
        addMeta,
        removeMeta,
    },
})

export const actions = slice.actions

export default slice.reducer
