/*
 * Copyright 2022 skychx
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
