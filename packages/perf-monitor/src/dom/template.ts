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