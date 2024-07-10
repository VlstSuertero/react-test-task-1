import {PayloadAction} from '@reduxjs/toolkit'

import {UserState} from './state'

export function removeMeta(state: UserState, action: PayloadAction<string>) {
    if (null !== state.active) {
        delete state.active.meta[action.payload]
    }
}