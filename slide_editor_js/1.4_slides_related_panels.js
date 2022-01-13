//srp - slides related panels

const srpConfig = {
    panels: {
        displayType: 'flex',
        slideList: {
            object: document.querySelector('.slides-panel'),
            isShow: function () {
                return true ? window.getComputedStyle(this.object, null).display != 'none' : false;
            },
            show: function() {
                this.object.style.display = srpConfig.panels.displayType;
            },
            hide: function() {
                this.object.style.display = 'none';
            }
        },
        templatesList: {
            object: document.querySelector('.templates-panel'),
            isShow: function () {
                return true ? window.getComputedStyle(this.object, null).display != 'none' : false;
            },
            show: function() {
                this.object.style.display = srpConfig.panels.displayType;
            },
            hide: function() {
                this.object.style.display = 'none';
            }
        },
        imagesList: {
            object: document.querySelector('.images-panel'),
            isShow: function () {
                return true ? window.getComputedStyle(this.object, null).display != 'none' : false;
            },
            show: function() {
                this.object.style.display = srpConfig.panels.displayType;
            },
            hide: function() {
                this.object.style.display = 'none';
            }
        },
    },
    buttons: {
        activeButtonClass: 'slides-related-panels-button-activated',
        slidesList: document.querySelector('#slide_list'),
        templatesList: document.querySelector('#templates_list'),
        imagesList: document.querySelector('#images_list')
    },
}

const slidesConfig = {
    slideList: [
        {
            name: '123',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" cy="4.6875%" cx="8.0357%" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1003; left: 8.03571%; top: 4.6875%; display: block; transition: all 0s ease-in-out 0s;" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="2.5" canchor="0%,0%" locktype="none" newly-created="false" cy="22.9688%" cx="40.0670%" style="width: 90px; height: 90px; border-width: 1px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1004; left: 40.067%; top: 22.9688%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" i-is-selectable="true"><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">&nbsp;</p></div>',
        },
        {
            name: '321',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" cy="4.6875%" cx="8.0357%" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1003; left: 8.03571%; top: 4.6875%; display: block; transition: all 0s ease-in-out 0s;" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="2.5" canchor="0%,0%" locktype="none" newly-created="false" cy="22.9688%" cx="40.0670%" style="width: 90px; height: 90px; border-width: 1px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1004; left: 40.067%; top: 22.9688%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" i-is-selectable="true"><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">&nbsp;</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" cy="4.6875%" cx="8.0357%" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1003; left: 8.03571%; top: 4.6875%; display: block; transition: all 0s ease-in-out 0s;" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="2.5" canchor="0%,0%" locktype="none" newly-created="false" cy="22.9688%" cx="40.0670%" style="width: 90px; height: 90px; border-width: 1px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1004; left: 40.067%; top: 22.9688%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" i-is-selectable="true"><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">&nbsp;</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" cy="4.6875%" cx="8.0357%" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1003; left: 8.03571%; top: 4.6875%; display: block; transition: all 0s ease-in-out 0s;" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="2.5" canchor="0%,0%" locktype="none" newly-created="false" cy="22.9688%" cx="40.0670%" style="width: 90px; height: 90px; border-width: 1px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1004; left: 40.067%; top: 22.9688%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" i-is-selectable="true"><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">&nbsp;</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" cy="4.6875%" cx="8.0357%" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1003; left: 8.03571%; top: 4.6875%; display: block; transition: all 0s ease-in-out 0s;" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="1" paddingmultiplier="0.2" marginbottommultiplier="2.5" canchor="0%,0%" locktype="none" newly-created="false" cy="22.9688%" cx="40.0670%" style="width: 90px; height: 90px; border-width: 1px; border-radius: 0px; transform: translate(0%, 0%); z-index: 1004; left: 40.067%; top: 22.9688%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" i-is-selectable="true"><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">123</p><p marginbottommultiplier="2.5" style="margin-bottom: 16px;">&nbsp;</p></div>',
        },
    ],
    slideContainer: document.querySelector('.slides-panel'),
    selectedSlideNumber: 0,
    selectedSlideInnerHtmlInstance: null,
    mainSlide: 0,
    // slidesInstances: [],
    //update slide depends on currentNumber
    showCurrent: function() {
        
    },
    updateSlideContentElementChildsValues(slideContentElement) {
        slideContentElement.childNodes.forEach(childNode => {
            childNode.style.width =`${ this.calculatePreviewItemParam(childNode).width}px`;
            childNode.style.height =`${ this.calculatePreviewItemParam(childNode).height}px`;
            childNode.style.borderRadius =`${ this.calculatePreviewItemParam(childNode).borderRadius}px`;
            childNode.style.borderWidth =`${ this.calculatePreviewItemParam(childNode).borderWidth}px`;
            childNode.style.fontSize = `${ this.calculatePreviewItemParam(childNode).fontSize}px`;
            childNode.style.padding = `${ this.calculatePreviewItemParam(childNode).padding}px`;
        
            childNode.style.top = childNode.getAttribute('cY');
            childNode.style.left = childNode.getAttribute('cX');
        
            if (childNode.childNodes.length > 0) {
                childNode.childNodes.forEach((p)=>{
                    p.style.marginBottom = `${this.calculatePreviewItemParam(p).marginBottom}px`
                })
            }
        }) 
    },
    calculatePreviewItemParam: function (item) {
        let widthUnit = this.selectedSlideInnerHtmlInstance.offsetWidth / 100;
        let widthMultiplier = item.getAttribute('widthMultiplier');
        let width = `${(widthUnit * widthMultiplier).toFixed(5)}`;
    
        let widthInverted = `${((item.offsetWidth / workZone.offsetWidth) * 100).toFixed(3)}`;
        
        let heightUnit = this.selectedSlideInnerHtmlInstance.offsetHeight / 100;
        let heightMultiplier = item.getAttribute('heightMultiplier');
        let height = `${(heightUnit * heightMultiplier).toFixed(5)}`;
    
        let heightInverted = `${((item.offsetHeight / workZone.offsetHeight) * 100).toFixed(3)}`;
    
        let borderWidthUnit = this.selectedSlideInnerHtmlInstance.offsetWidth / 100;
        let borderWidthMultiplier = item.getAttribute('borderWidthMultiplier');
        let borderWidth = `${(borderWidthUnit * borderWidthMultiplier).toFixed(5)}`;
    
        let fontSizeUnit = this.selectedSlideInnerHtmlInstance.offsetWidth / 100;
        let fontSizeMultiplier = item.getAttribute('fontSizeMultiplier');
        let fontSize = `${(fontSizeUnit * fontSizeMultiplier).toFixed(4)}`;
    
        let paddingUnit = this.selectedSlideInnerHtmlInstance.offsetWidth / 100;
        let paddingMultiplier = item.getAttribute('paddingMultiplier');
        let padding = `${(paddingUnit * paddingMultiplier).toFixed(5)}`;
    
        let borderRadiusUnit = this.selectedSlideInnerHtmlInstance.offsetWidth / 100;
        let borderRadiusMultiplier = item.getAttribute('borderRadiusMultiplier');
        let borderRadius = `${(borderRadiusUnit * borderRadiusMultiplier).toFixed(5)}`;
    
        let marginBottomUnit = this.selectedSlideInnerHtmlInstance.offsetHeight/100;
        let marginBottomMultiplier = item.getAttribute('marginBottomMultiplier');
        let marginBottom = `${(marginBottomUnit * marginBottomMultiplier).toFixed(4)}`;
    
        return {
            width,
            height,
            borderWidth,
            borderRadius,
            fontSize,
            padding,
            marginBottom,
            widthInverted, //inverted value, when we have item.offsetWidth and we need to transform it to withMultiplier
            heightInverted,
        }
    },
    //update selected slide in slide panel
    updateCurrent: function(slideNumber) {
        if (this.slideList[slideNumber].content != workZone.innerHTML) {
            this.slideList[slideNumber].content = workZone.innerHTML;
        }
    },
    add: function() {

    },
    remove: function(slideNumber) {

    },
    rebuildSlidesList: function(slideList) {
        this.slideContainer.innerHTML = '';

        slideList.forEach((slide, index) => {
            this.slideContainer.innerHTML += 
                this.slideTemplate(this.selectedSlideNumber == index, 
                    this.mainSlide == index, index, slide.name);                    
        });

        this.selectedSlideInnerHtmlInstance = document.querySelector(`div[slide-number="${this.selectedSlideNumber}"].slide-content`)

        slideList.forEach((slide, index) => {
            let currentSlide = document.querySelector(`div[slide-number="${index}"].slide-content`)
            currentSlide.innerHTML = slide.content.replace(/field-item/gim, '').replace(/selected-item/gim, '')  
        });

        let slideInstances = document.querySelectorAll('.slide');
        slideInstances.forEach(slide => {
            slide.onclick = (event) => {
                if(event.target.getAttribute('slide-number') != this.selectedSlideNumber){
                    this.select(slide.getAttribute('slide-number'), true)
                }
            };
        })

        let slidesContents = document.querySelectorAll(`div[slide-number].slide-content`);
        slidesContents.forEach(currentSlide => {
            this.updateSlideContentElementChildsValues(currentSlide);
        })
        console.log('rebuilded')
        //this needed when we trying to open slide panel on page init, sort of
        // this.select(this.mainSlide, false);
    },
    select: function(slideNumber, isRebuildNeeded) {
        this.selectedSlideNumber = slideNumber;
        this.selectedSlideInnerHtmlInstance = document.querySelector(`div[slide-number="${slideNumber}"].slide-content`)
        //rebuilding work zone inner html with all items
        if (workZone.innerHTML != this.slideList[this.selectedSlideNumber].content) {
            workZone.innerHTML = this.slideList[this.selectedSlideNumber].content;
            let fieldItems = document.querySelectorAll('.field-item');
            fieldItems.forEach((item)=>{
                addDragAndDropToItem(item);
            })
        }
        configureContextPanel('destroy');
        //rebuild slide content window
        if (isRebuildNeeded) {this.rebuildSlidesList(this.slideList);} else {
            this.clearSelection();
            document.querySelector(`div[slide-number="${this.selectedSlideNumber}"].slide`).classList.add('selected-slide')
            this.updateSlideContentElementChildsValues(this.selectedSlideInnerHtmlInstance);
        }
        
        //viewport stuff
        CONFIG.UI.workZoneCurrentScale = 1;
        zoom('in', 0);

        //initial scroll position
        everythingHolder.scrollTop =
            workZoneHolder.offsetHeight / 2 - everythingHolder.offsetHeight / 2;
        everythingHolder.scrollLeft =
            workZoneHolder.offsetWidth / 2 - everythingHolder.offsetWidth / 2;
    },
    clearSelection: function() {
        document.querySelector('.selected-slide').classList.remove('selected-slide')
    },
    // makeMainSign: function(slideNumber) {

    // },
    // removeMainSign: function(slideNumber) {

    // },
    slideTemplate: function(isSelected, isMain, slideNumber, slideName) {
        let buttonsTemplate = `
        <div class="slide-control-buttons">
            <button class="slide-control-button" button-action="remove" slide-number="${slideNumber}">
                ВИ
            </button>
            <button class="slide-control-button" button-action="rename" slide-number="${slideNumber}">
                П
            </button>
            <button class="slide-control-button" button-action="moveUp" slide-number="${slideNumber}">
                ВВ
            </button>
            <button class="slide-control-button" button-action="moveDown" slide-number="${slideNumber}">
                НН
            </button>
        </div>
        `
        let slideTemplate = `
        <div class="slide ${isSelected ? 'selected-slide' : ''} ${isMain ? 'main-slide': ''}" slide-number="${slideNumber}">
            <div class="slide-content" slide-number="${slideNumber}"></div>
            ${isSelected ? buttonsTemplate : ''}
            <p class="slide-name" slide-number="${slideNumber}">
                ${slideName}
            </p>
        </div>
        `;
        return slideTemplate;
    },
}

/*
    {
        id: '',
        isMain: false,
        name: '',
        content: '',
    },
*/

srpConfig.buttons.slidesList.onclick = () => {
    if (srpConfig.panels.slideList.isShow()) {
        srpConfig.buttons.slidesList.classList.remove(srpConfig.buttons.activeButtonClass)
        srpConfig.panels.slideList.hide();
    } else {
        srpConfig.panels.slideList.show();
        srpConfig.buttons.slidesList.classList.add(srpConfig.buttons.activeButtonClass)
        slidesConfig.rebuildSlidesList(slidesConfig.slideList);
        // console.log(document.querySelector('div[slide-number=""] div.slide-control-buttons'));
    } 
}

srpConfig.buttons.templatesList.onclick = () => {
    if (srpConfig.panels.templatesList.isShow()) {
        srpConfig.panels.templatesList.hide();
        srpConfig.buttons.templatesList.classList.remove(srpConfig.buttons.activeButtonClass)
    } else {
        srpConfig.panels.templatesList.show();
        srpConfig.buttons.templatesList.classList.add(srpConfig.buttons.activeButtonClass)
    } 
}

srpConfig.buttons.imagesList.onclick = () => {
    if (srpConfig.panels.imagesList.isShow()) {
        srpConfig.panels.imagesList.hide();
        srpConfig.buttons.imagesList.classList.remove(srpConfig.buttons.activeButtonClass)
    } else {
        srpConfig.panels.imagesList.show();
        srpConfig.buttons.imagesList.classList.add(srpConfig.buttons.activeButtonClass)
    } 
}

