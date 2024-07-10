import {PayloadAction} from '@reduxjs/toolkit'

import {UserState} from './state'

export function fetchError(state: UserState, action: PayloadAction<Error>) {
    state.error = action.payload
    state.isLoading = false
    state.isFetched = false
}
