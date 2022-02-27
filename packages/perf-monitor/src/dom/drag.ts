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
