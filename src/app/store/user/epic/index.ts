import { combineEpics } from 'redux-observable'

import { fetch } from './fetch'

export const userEpic = combineEpics(fetch)