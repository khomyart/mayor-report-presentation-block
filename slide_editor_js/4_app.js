//There is 2 main functions: itemDropActions, itemDragActions
//itemDragActions is a function which in general adds to item some drag and drop features
//itemDropActions is a function which declares what will heppend to item when drag and drop action will end
//and also there 1 config object wich should be edited if needed

const container = document.querySelector(
    CONFIG.coreElementsSelectors.container
  ),
  sideBarsAndMainFieldHolder = document.querySelector(
    CONFIG.coreElementsSelectors.sideBarsAndMainFieldHolder
  ),
  everythingHolder = document.getElementById("pahlava"), //holds workZone
  workZoneHolder = document.querySelector(
    CONFIG.coreElementsSelectors.workZoneHolder
  ),
  workZone = document.querySelector(
    CONFIG.coreElementsSelectors.workZoneIdentifier
  ), // field or div where droped items are located
  itemPanel = document.querySelector(CONFIG.coreElementsSelectors.itemPanel),
  contextPanel = document.querySelector(
    CONFIG.coreElementsSelectors.contextPanel
  ),
  rootItems = document.querySelectorAll(
    CONFIG.coreElementsSelectors.rootIremsIdentifier
  ), // items wich are basis of items in workZone
  rootItemsSeparator = document.querySelector(
    CONFIG.coreElementsSelectors.rootItemsSeparator
  );

let amountOfItemsInWorkZone = document.querySelectorAll(".field-item").length,
  amountOfWorkSpacesInWorkZone = document.querySelectorAll(".work-space").length,
  elementsOfSchema = [], // array with movable items inside the work field
  newElementOfSchema,
  shiftX,
  shiftY,
  textEditorOnChangeMethodIsCreated = false,
  workFieldSelectedAsDropTarget = null,
  workSpaceItemSelectedAsDropTarget = null,
  dropTarget = null,
  currentItem = null,
  contextMenu = null,
  contextMenuContent = null,
  //if lmb was clicked on item, we should fill this variable with its instance
  selectedItemForModification = null,
  //preventing moving of item when just clicking on it, becouse every time when
  //user clicks on item, it gains coordinates of mouse as a top and left value and
  //then transforming it from px into % depends on workZone, this leads to unnecesory little moving,
  //becouse % is not accurate enough value to hold transformed current position of item in px
  //setTimeout(()=>{enableItemPositionCalculationMethod = false},10)
  enableItemPositionCalculationMethod = false,
  pressedMiddleMouseButtonCoordinates = {
    x: null,
    y: null,
  },
  pressedMiddleMouseButtonScrollCoordinates = {
    x: null,
    y: null,
  };
scrollPosition = {
  left: 0, //%
  top: 0, //%
};

//initial workZone params, width and height
workZone.style.width = `${CONFIG.UI.defaultWorkZoneOffsets.width}px`;
workZone.style.height = `${CONFIG.UI.defaultWorkZoneOffsets.height}px`;
itemPanel.style.height = `${CONFIG.UI.defaultWorkZoneItemsOffsets.height + CONFIG.UI.itemsPanel.defaultDistanceFromWorkZoneItem}px`;

document.body.style.display = "";

//!!TODO: Make this stuff responsive to screen changing, white(blank) spaces near workZone
setTimeout(() => {
  sideBarsAndMainFieldHolder.style.height = `${container.offsetHeight - (CONFIG.UI.defaultWorkZoneItemsOffsets.height + CONFIG.UI.itemsPanel.defaultDistanceFromWorkZoneItem)}px`;
  workZoneHolder.style.width = `${
    workZone.offsetWidth + document.body.offsetWidth * 1.5
  }px`;
  workZoneHolder.style.height = `${
    workZone.offsetHeight + document.body.offsetHeight * 1.5
  }px`;
  //initial scroll position, scroll can be setted up only if workZoneHolder with and haight are configured
  everythingHolder.scrollTop =
    workZoneHolder.offsetHeight / 2 - everythingHolder.offsetHeight / 2;
  everythingHolder.scrollLeft =
    workZoneHolder.offsetWidth / 2 - everythingHolder.offsetWidth / 2;
}, 10);

//Initialization root items, making them be dependent of config
rootItems.forEach((element) => {
  element.className = `${element.className}`;
  //root item's width and height initialisation
  element.style.width = `${CONFIG.UI.defaultWorkZoneItemsOffsets.width}px`;
  element.style.height = `${CONFIG.UI.defaultWorkZoneItemsOffsets.height}px`;
  element.style.borderRadius = `${CONFIG.UI.defaultWorkZoneItemBorderRadius}px`;

  element.ondragstart = () => false;
    element.childNodes.forEach((element) => {
      element.ondragstart = () => false;
    });
});

//loop which allows to accept all needed functions to every root item
for (let i = 0; i < rootItems.length; i++) {
  rootItems[i].onmousedown = (event) => {
    createNewItem(event, rootItems[i]);
    addDragAndDropToItem(newElementOfSchema);
  };
}

document.body.onmousedown = (event) => {
  if (
    !document
      .elementFromPoint(event.clientX, event.clientY)
      .closest(".context-menu-item")
  ) {
    removeContextMenu();
  }
  if (event.buttons == 1) {
    if ( !document.elementFromPoint(event.clientX, event.clientY).closest(".field-item") &&
      (document.elementFromPoint(event.clientX, event.clientY).closest(".main-field") ||
      document.elementFromPoint(event.clientX, event.clientY).closest(".items-panel") ||
      document.elementFromPoint(event.clientX, event.clientY).closest(".main-field-holder")) &&
      selectedItemForModification != null) {
        clearItemSelection();
    }
  }
};

//disable default context menu
document.oncontextmenu = () => false;

workZoneHolder.onmousewheel = (e) => {
  if (e.ctrlKey) {
    e.preventDefault();

    if (e.deltaY == 100) {
      zoom("out", CONFIG.UI.zoomStep);
    }

    if (e.deltaY == -100) {
      zoom("in", CONFIG.UI.zoomStep);
    }
  }
};

workZoneHolder.onmousedown = (e) => {
  pressedMiddleMouseButtonCoordinates = {
    x: e.clientX,
    y: e.clientY,
  };

  pressedMiddleMouseButtonScrollCoordinates = {
    x: everythingHolder.scrollLeft,
    y: everythingHolder.scrollTop,
  };

  if (e.buttons == 4) {
    e.preventDefault();
  }

  workZoneHolder.onmousemove = (e) => {
    if (e.buttons == 4) {
      everythingHolder.scrollLeft =
        pressedMiddleMouseButtonScrollCoordinates.x -
        (e.clientX - pressedMiddleMouseButtonCoordinates.x);
      everythingHolder.scrollTop =
        pressedMiddleMouseButtonScrollCoordinates.y -
        (e.clientY - pressedMiddleMouseButtonCoordinates.y);
      everythingHolder.style.cursor = "grab";
    }
  };

  workZoneHolder.onmouseup = (e) => {
    everythingHolder.style.cursor = "default";
  };
};

// let incomingJson = {
//     cabinet: {
//         number: 221,
//         items: [
//             {
//                 code: '1011123331',
//                 name: 'Принтер 1',
//                 description: 'Не друкує'
//             },
//             {
//                 code: '1011123332',
//                 name: 'Монітор philips))',
//                 description: 'Показує добренько'
//             }
//         ]
//     }
// }

let variableWidthHTML;

const   btn1 = document.getElementById('debug_button_1'),
        btn2 = document.getElementById('debug_button_2');

btn1.onclick = () => {
    variableWidthHTML = workZone.innerHTML;
    workZone.innerHTML = '';
    console.log(variableWidthHTML);
}

btn2.onclick = () => {
    workZone.innerHTML = variableWidthHTML;
    document.querySelectorAll('.field-item').forEach((item)=>{
      addDragAndDropToItem(item);
    })

}

/* workZone inner html observation */
const observer = new MutationObserver(function() {
  console.log('mutata');
  slidesConfig.updateCurrent(slidesConfig.selectedSlideNumber);
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(workZone, {subtree: true, childList: true, attributes: true});

setInterval(()=>{
  let currentSlideContentContainer = document.querySelector(
    `div[slide-number="${slidesConfig.selectedSlideNumber}"].slide-content`
  )

  currentSlideContentContainer.innerHTML = 
    slidesConfig.slideList[slidesConfig.selectedSlideNumber].content
    .replace(/field-item/gi, '')
    .replace(/selected-item/gi, '');

  currentSlideContentContainer.childNodes.forEach(childNode => {
    childNode.style.width =`${ slidesConfig.updatePreviewItemParam(childNode).width}px`;
    childNode.style.height =`${ slidesConfig.updatePreviewItemParam(childNode).height}px`;
    childNode.style.borderRadius =`${ slidesConfig.updatePreviewItemParam(childNode).borderRadius}px`;
    childNode.style.borderWidth =`${ slidesConfig.updatePreviewItemParam(childNode).borderWidth}px`;
    childNode.style.fontSize = `${ slidesConfig.updatePreviewItemParam(childNode).fontSize}px`;
    childNode.style.padding = `${ slidesConfig.updatePreviewItemParam(childNode).padding}px`;

    childNode.style.top = childNode.getAttribute('cY');
    childNode.style.left = childNode.getAttribute('cX');

    if (childNode.childNodes.length > 0) {
        childNode.childNodes.forEach((p)=>{
          p.style.marginBottom = `${slidesConfig.updatePreviewItemParam(p).marginBottom}px`
        })
    }
  }) 
  console.log('transfered')
},2000)

window.addEventListener('load', function() {
  srpConfig.panels.slideList.show();
  srpConfig.buttons.slidesList.classList.add(srpConfig.buttons.activeButtonClass)
  slidesConfig.select(slidesConfig.selectedSlideNumber, true);
})