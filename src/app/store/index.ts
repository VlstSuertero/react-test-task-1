import {configureStore} from '@reduxjs/toolkit'
import {combineEpics, createEpicMiddleware, Epic} from 'redux-observable'

import user, {userEpic} from './user'

const rootEpic = combineEpics(
    userEpic,
)

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        user,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
})

epicMiddleware.run(rootEpic as Epic)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

