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

import { Matrix3dReg } from "../const";

export function initDrag(element: HTMLDivElement) {
    let distX = 0;
    let distY = 0;

    function touchStartListener(event: TouchEvent) {
        event.stopPropagation()
        event.preventDefault()

        // get element transform styles
        let matrix3dSourceValue = getComputedStyle(this, null).getPropertyValue('transform')
        let matrix3dArrValue = matrix3dSourceValue.match(Matrix3dReg)
    
        // touch position
        const clientX = event.touches[0].clientX
        const clientY = event.touches[0].clientY

        const translateX = +matrix3dArrValue[1]
        const translateY = +matrix3dArrValue[2]

        // calc dist position
        distX = clientX - translateX
        distY = clientY - translateY

        element.addEventListener('touchmove', touchMoveListener, false)
    }

    function touchEndListener(event: TouchEvent){
        event.stopPropagation()
        event.preventDefault()

        element.removeEventListener('touchmove', touchMoveListener)
    }

    function touchMoveListener(event: TouchEvent){
        event.stopPropagation()
        event.preventDefault()

        let moveX = event.touches[0].clientX - distX
        let moveY = event.touches[0].clientY - distY

        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 1px)`
    }

    element.addEventListener('touchstart', touchStartListener, false)
    element.addEventListener('touchend', touchEndListener, false)
}
