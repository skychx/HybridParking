export function afterLoad(callback: () => void) {
  if (document.readyState === 'complete') {
    // Queue a task so the callback runs after `loadEventEnd`.
    setTimeout(callback, 0);
  } else {
    // Queue a task so the callback runs after `loadEventEnd`.
    addEventListener('load', () => setTimeout(callback, 0));
  }
}
