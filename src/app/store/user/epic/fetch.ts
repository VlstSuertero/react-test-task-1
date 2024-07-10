import {ofType} from 'redux-observable'
import {Action} from '@reduxjs/toolkit'
import {delay, map, mergeMap, catchError} from 'rxjs/operators'
import {of, Observable} from 'rxjs'

import {actions} from '@app/store/user'
import {RequestException} from '@exceptions'
import api, {endPoints} from '@api'
import {Meta} from '@models/dto'

export const fetch = (action$: Observable<Action>): Observable<Action> => action$.pipe(
    ofType(actions.fetch.type),
    mergeMap(
        ({payload}) => api.request(endPoints.USER, payload).pipe(
            delay(1000),
            map(({data}: {data: Meta}) => actions.fetchSuccess(data)),
            catchError(({message}) => of(actions.fetchError(new RequestException(message)))),
        )
    ),
)
