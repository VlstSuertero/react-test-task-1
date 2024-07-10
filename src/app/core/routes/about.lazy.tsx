import About from '@app/pages/about'
import {createProtectedLazyFileRoute} from '@app/helpers/routes'

export const Route = createProtectedLazyFileRoute('/about', About)
