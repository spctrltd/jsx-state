class EventController extends EventTarget {
  detail
  eventName

  constructor(eventName) {
    super()
    this.eventName = eventName
  }

  #emitEvent() {
    this.dispatchEvent(new CustomEvent(this.eventName, {detail: this.detail}))
  }

  setDetail(detail) {
    this.detail = detail
    this.#emitEvent()
  }
}

export const getEventController = name => {
  const controller = new EventController(name)
  return controller
}
