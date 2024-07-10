import {UserState} from './state'

export function fetch(state: UserState) {
    state.isLoading = true
}
