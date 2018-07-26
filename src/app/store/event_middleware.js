export default () => next => action => {
  const { event, ...action_props } = action
  if (typeof event === 'object') {
    // const { event_name, ...event_props } = event
  }
  return next(action_props)
}
