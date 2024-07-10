import {PayloadAction} from '@reduxjs/toolkit'

import {UserMeta} from '@entities'

import {UserState} from './state'

export function fetchSuccess(state: UserState, action: PayloadAction<UserMeta>) {
    if (null !== state.active) {
        state.active.meta = action.payload
    }
    state.isLoading = false
    state.isFetched = true
}