import {PayloadAction} from '@reduxjs/toolkit'

import {UserState} from './state'

export function addMeta(state: UserState, action: PayloadAction<[string, string]>) {
    if (null !== state.active) {
        const [key, value] = action.payload
        state.active.meta[key] = value
    }
}