import {User} from '@entities'

export interface UserState {
    active: User | null,
    isLoading: boolean,
    isFetched: boolean,
    error: Error | null,
}

export const initialState: UserState = {
    active: null,
    isLoading: false,
    isFetched: false,
    error: null,
}
