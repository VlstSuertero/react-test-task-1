import {useAppSelector} from '@app/hooks'
import {RootState} from '@app/store'
import {User} from '@entities'

export const useActiveUser = (): User|null => useAppSelector((state: RootState) => state.user.active)
