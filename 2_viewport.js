/**
 * Method do zoom in and zoom out of viewport and all included items. Contains rules for it
 * 
 * @param {string} direction in or out
 * @param {int} step how much viewport will zoomin or zoomout per one iteration (mmultiplier)
 */
function zoom(direction, step) {
    if (CONFIG.UI.workZoneCurrentScale < CONFIG.UI.workZoneMinScale && direction == 'in' ||
        CONFIG.UI.workZoneCurrentScale > CONFIG.UI.workZoneMaxScale && direction == 'out' ||
        CONFIG.UI.workZoneCurrentScale > CONFIG.UI.workZoneMinScale && CONFIG.UI.workZoneCurrentScale < CONFIG.UI.workZoneMaxScale) {

        if (direction == 'in') {
            CONFIG.UI.workZoneCurrentScale += step;
        } else if (direction == 'out') {
            CONFIG.UI.workZoneCurrentScale -= step;
        }
    
        if (amountOfItemsInWorkZone != document.querySelectorAll('.field-item').length) {
            amountOfItemsInWorkZone = document.querySelectorAll('.field-item').length
            calculatePositionForItems('.field-item')
        }
    
        if (amountOfWorkSpacesInWorkZone != document.querySelectorAll('.work-space').length) {
            amountOfWorkSpacesInWorkZone = document.querySelectorAll('.work-space').length
            calculatePositionForItems('.work-space')
        }
   
        scrollPosition.top = everythingHolder.scrollTop / workZoneHolder.offsetHeight * 100;
        scrollPosition.left = everythingHolder.scrollLeft / workZoneHolder.offsetWidth * 100;
    
        previousWorkZoneHolderOffset = {
            width: workZoneHolder.offsetWidth,
            height: workZoneHolder.offsetHeight,
        };
    
        workZone.style.width = `${CONFIG.UI.defaultWorkZoneOffsets.width * CONFIG.UI.workZoneCurrentScale}px`;
        workZone.style.height = `${CONFIG.UI.defaultWorkZoneOffsets.height * CONFIG.UI.workZoneCurrentScale}px`; 
        workZoneHolder.style.width = `${workZone.offsetWidth + everythingHolder.offsetWidth * 1.5}px`;
        workZoneHolder.style.height = `${workZone.offsetHeight + everythingHolder.offsetHeight * 1.5}px`;
    
        document.querySelectorAll('.field-item').forEach(e => {
            //e.style.transition = 'width 0.2s, height 0.2s';
            e.style.width =`${calculateItemParams(e).width}px`;
            e.style.height =`${calculateItemParams(e).height}px`;
            e.style.borderRadius =`${calculateItemParams(e).borderRadius}px`;
            e.style.borderWidth =`${calculateItemParams(e).borderWidth}px`;
        })

        // // can be proper but a bit strange variant, here we have zoom in and zoom out variants
        // everythingHolder.scrollTop = workZoneHolder.offsetHeight / 100 * scrollPosition.top ;
        // everythingHolder.scrollLeft = workZoneHolder.offsetWidth / 100 * scrollPosition.left;
        //????
        everythingHolder.scrollLeft += (workZoneHolder.offsetWidth  - previousWorkZoneHolderOffset.width) /2 
        everythingHolder.scrollTop += (workZoneHolder.offsetHeight - previousWorkZoneHolderOffset.height) /2 
        // everythingHolder.scrollTop += 2 * CONFIG.UI.workZoneCurrentScale;
        // everythingHolder.scrollLeft = workZoneHolder.offsetWidth * scrollPosition.left
        // everythingHolder.scrollTop = 
    }
}

/**
 * calculate position of item in persentages (%) depends on viewport length
 * 
 * @param {string} selector pointer on items type (class)
 */
function calculatePositionForItems (selector) {
    if (typeof selector == 'string') {
        let allItems = document.querySelectorAll(selector);
        allItems.forEach(e => {
            e.style.top = `${e.offsetTop / workZone.offsetHeight * 100}%`
            e.style.left = `${e.offsetLeft / workZone.offsetWidth * 100}%`
        })
    } else if (typeof selector == 'object') {
        selector.style.top = `${selector.offsetTop / workZone.offsetHeight * 100}%`
        selector.style.left = `${selector.offsetLeft / workZone.offsetWidth * 100}%`
    }
}