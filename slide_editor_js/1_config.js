let CONFIG = {
  coreElementsSelectors: {
    container: ".c-container",
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
      width: 70,
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
      block: {
        get: () => {    
          let itemTemplate = document.createElement('div');

          itemTemplate.classList.add('block-elem-template');
          itemTemplate.setAttribute('i-name', 'block');
          itemTemplate.setAttribute('widthMultiplier', '10');
          itemTemplate.setAttribute('heightMultiplier', '14');
          itemTemplate.setAttribute('borderWidthMultiplier', '0');
          itemTemplate.setAttribute('borderRadiusMultiplier', '0');
          itemTemplate.setAttribute('fontSizeMultiplier', '1');
          itemTemplate.setAttribute('paddingMultiplier', '0.2');
          itemTemplate.setAttribute('marginBottomMultiplier', '0.2');
          itemTemplate.setAttribute('cAnchor', '0%,0%');
          itemTemplate.setAttribute('lockType', 'none');
          itemTemplate.setAttribute('newly-created', 'true');
          
          return itemTemplate;
         },
         contextPanelParams: [
             'anchor', 'position', 'width', 'height', 'opacity', 
             'zIndex', 'backgroundColor', 'borderColor', 'borderWidth', 
             'borderRadius', 'backgroundLinearGradient',
         ], 
      },
      text: {
          get: () => {    
              let itemTemplate = document.createElement('div');

              itemTemplate.classList.add('text-elem-template');
              itemTemplate.setAttribute('i-name', 'text');
              itemTemplate.setAttribute('widthMultiplier', '10');
              itemTemplate.setAttribute('heightMultiplier', '14');
              itemTemplate.setAttribute('borderWidthMultiplier', '0.15');
              itemTemplate.setAttribute('borderRadiusMultiplier', '0');
              itemTemplate.setAttribute('fontSizeMultiplier', '1');
              itemTemplate.setAttribute('paddingMultiplier', '0.2');
              itemTemplate.setAttribute('marginBottomMultiplier', '0.2');
              itemTemplate.setAttribute('cAnchor', '0%,0%');
              itemTemplate.setAttribute('lockType', 'none');
              itemTemplate.setAttribute('newly-created', 'true');

              return itemTemplate;
         },
         contextPanelParams: [
          'fontSize', 'anchor', 'position', 'width', 'height', 'textEditor','opacity', 
          'marginBottom', 'padding', 'zIndex', 'backgroundColor', 'borderColor', 'borderWidth', 
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