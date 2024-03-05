export const onAppReady = (callback, root = 'root') => {
  const targetNode = document.getElementById(root)
  const config = {attributes: true, childList: true, subtree: true}
  const observer = new MutationObserver(callback)
  observer.observe(targetNode, config)
}
