import Home from '@app/pages/home/home'
import {createProtectedLazyFileRoute} from '@app/helpers/routes'

export const Route = createProtectedLazyFileRoute('/', Home)
