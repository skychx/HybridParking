import { template } from "./template";
import { initDrag } from './drag';
import { createInlineStyle } from './style';

export function createRoot(perfList: string[]) {
  // inside root div
  const rootStyle = createInlineStyle([
    'position:fixed',
    'top:24px',
    'right:24px',
    'z-index:999',
    'width:8em',
    'background:#fff',
    'font-size:16px',
    'font-family:sans-serif',
    'line-height:1.5em',
    'border:1px solid #898989',
    'border-radius:8px',
    'overflow:hidden',
    'transform:translate3d(0,0,1px)',
    'will-change:transform'
  ])
  const rootNode = document.createElement('div');
  rootNode.setAttribute('id', 'perf-monitor');
  rootNode.setAttribute('style', rootStyle);

  const fragment = document.createDocumentFragment();
  perfList.forEach(item => {
    fragment.appendChild(template(item));
  })

  rootNode.appendChild(fragment)
  initDrag(rootNode)

  document.getElementsByTagName('body')[0].appendChild(rootNode);
}
