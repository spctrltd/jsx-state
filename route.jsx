import {getEventController} from './event'

export const ROUTING_EVENT = 'ROUTING_EVENT'

const components = {}
const callback = route => {
  if (typeof route === 'string' && route.length > 1) {
    const routingComponent = document.querySelector('route')
    if (routingComponent && Object.prototype.hasOwnProperty.call(components, route)) {
      let component = components[route]
      if (!Array.isArray(component)) {
        component = [component]
      }
      const children = component.filter(child => !!child)
      while (routingComponent.firstChild) {
        routingComponent.removeChild(routingComponent.firstChild)
      }
      routingComponent.append(...children)
    }
  }
}

const router = getEventController(ROUTING_EVENT)
router.addEventListener(ROUTING_EVENT, event => callback(event.detail))
export const routeEventController = router

export const dispatchRoute = name => {
  router.setDetail(name)
}

export default ({path, component: Component}) => {
  const {pathname} = location
  components[path] = <Component literal />
  if (pathname === path) {
    return <Component />
  }
  return undefined
}
