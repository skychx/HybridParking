import { ID_PREFIX } from '../const';
import { createInlineStyle } from './style';

const itemStyle = createInlineStyle([
  'padding:4px 8px',
  'pointer-events:none',
  'touch-action:none'
])
const descStyle = createInlineStyle([
  'display:inline-block',
  'width:3em',
  'height:1.5em'
])

export function template(name: string) {
  const item = document.createElement('div');
  item.setAttribute('style', itemStyle);
  item.setAttribute('id', ID_PREFIX + name);

  const desc = document.createElement('span');
  desc.setAttribute('style', descStyle);
  desc.innerHTML = name;

  const num = document.createElement('span');
  num.innerHTML = 'N/A';

  item.appendChild(desc);
  item.appendChild(num);

  return item;
}