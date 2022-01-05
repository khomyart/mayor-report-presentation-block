let CONFIG = {
  coreElementsSelectors: {
    container: ".container",
    sideBarsAndMainFieldHolder: ".side-bars-and-main-field-holder",
    workZoneHolder: "#main_field_holder",
    workZoneIdentifier: "#main_field",
    rootIremsIdentifier: ".drag-and-drop-item",
    rootItemsSeparator: ".drag-and-drop-items-separator",
    itemPanel: ".items-panel",
    contextPanel: ".context-panel",
  },
  logic: {
    itemOpacityWhileMoving: 0.5,
    outOfZoneAnimationTime: 0.3, //(s)
    itemMovingOffsetFromWorkZoneBorder: 0.3, //%
    workSpaceItemDropType: 0, //defines type of algorythm will be used for item wich is dropping into workspace
    contextMenuOpeningSpeed: 0.1, //s
  },
  UI: {
    // panelOrientation: "top",
    defaultWorkZoneOffsets: {
      //ratio 1.4
      // width: 1754,
      // height: 1240,
      width: (window.screen.width / 3) * 1.4,
      height: window.screen.width / 3,
    },
    defaultWorkZoneItemsOffsets: {
      width: 50,
      height: 35,
    },
    defaultWorkZoneItemImageOffsets: {
      width: 30,
      height: 30,
    },
    itemsPanel: {
      defaultDistanceFromWorkZoneItem: 15, //px
      imageSize: {
        width: 16, //px
        height: 16, //px
      },
    },
    itemTemplates: {
      div: {
        get: () => {    
          let itemTemplate = document.createElement('div');

          itemTemplate.classList.add('div-template');
          itemTemplate.setAttribute('i-name', 'div');
          itemTemplate.setAttribute('widthMultiplier', '20');
          itemTemplate.setAttribute('heightMultiplier', '2');
          itemTemplate.setAttribute('borderWidthMultiplier', '0.15');
          itemTemplate.setAttribute('borderRadiusMultiplier', '5');
          itemTemplate.setAttribute('cAnchor', '0%,0%');

          return itemTemplate;
         },
         contextPanelParams: [
             'anchor', 'position', 'width', 'height', 'opacity', 
             'zIndex', 'backgroundColor', 'borderColor', 'borderWidth', 
             'borderRadius', 'backgroundLinearGradient',
         ], 
      },
      p: {
          get: () => {    
              let itemTemplate = document.createElement('p');

              itemTemplate.classList.add('p-template');
              itemTemplate.setAttribute('i-name', 'p');
              itemTemplate.setAttribute('widthMultiplier', '20');
              itemTemplate.setAttribute('heightMultiplier', '2');
              itemTemplate.setAttribute('borderWidthMultiplier', '0.15');
              itemTemplate.setAttribute('borderRadiusMultiplier', '5');
              itemTemplate.setAttribute('cAnchor', '0%,0%');
              return itemTemplate;
         },
         contextPanelParams: [
          'anchor', 'position', 'width', 'height', 'opacity', 
          'zIndex', 'backgroundColor', 'borderColor', 'borderWidth', 
          'borderRadius', 'backgroundLinearGradient',
        ], 
      },
    },
    zoomStep: 0.1,
    defaultWorkZoneItemBorderRadius: 3, //px
    workZoneCurrentScale: 1, //multiplier
    workZoneMinScale: 0.2,
    workZoneMaxScale: 2.8,
    workSpace: {
      mainDiv: {
        padding: 8, //px
      },
      defaultOffsetsWorkSpaceHead: {
        width: 55,
        height: 55,
      },
      defaultOffsetsWorkSpaceContainerItem: {
        width: 50,
        height: 50,
      },
      amountOfContainedItemsPerRow: 4,
      gapBetweenContainedItems: 5, //px (margin and padding)
      distanceBetweenContainerAndHead: 10, //px
    },
  },
};
