import {PayloadAction} from '@reduxjs/toolkit'

import {User} from '@entities'

import {UserState} from './state'

export function update(state: UserState, action: PayloadAction<User>) {
    state.active = action.payload
}
