//srp - slides related panels

const srpConfig = {
    panels: {
        displayType: 'flex',
        slideList: {
            object: document.querySelector('.slides-panel-holder'),
            // isShow: function () {
            //     return true ? window.getComputedStyle(this.object, null).display != 'none' : false;
            // },
            show: function() {
                this.object.style.display = srpConfig.panels.displayType;
            },
            // hide: function() {
            //     this.object.style.display = 'none';
            // },
            buttons: {
                saveSlidesList: document.querySelector('#save_slides_list'),
                addSlide: document.querySelector('#add_slide')
            },
        },
        templatesList: {
            object: document.querySelector('.templates-panel-holder'),
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
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 101; left: 3.8526%; top: 3.74707%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0.8955px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 102; left: 10.2178%; top: 12.4122%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="12.4122%" cx="10.2178%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">123</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">456</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">789</p></div>',
        },
        {
            name: '321',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 101; left: 3.8526%; top: 3.74707%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0.8955px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 102; left: 10.2178%; top: 12.4122%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="12.4122%" cx="10.2178%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">123</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">456</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">789</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 101; left: 3.8526%; top: 3.74707%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0.8955px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 102; left: 10.2178%; top: 12.4122%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="12.4122%" cx="10.2178%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">123</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">456</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">789</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 101; left: 3.8526%; top: 3.74707%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0.8955px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 102; left: 10.2178%; top: 12.4122%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="12.4122%" cx="10.2178%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">123</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">456</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">789</p></div>',
        },
        {
            name: '456',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 101; left: 3.8526%; top: 3.74707%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 60px; height: 60px; border-width: 0.8955px; border-radius: 0px; transform: translate(0%, 0%); font-size: 11.94px; padding: 1px; z-index: 102; left: 10.2178%; top: 12.4122%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="12.4122%" cx="10.2178%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">123</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">456</p><p marginbottommultiplier="0.2" style="margin-bottom: 0.854px;">789</p></div>',
        },
    ],
    buttons: {
        removeSlide: document.querySelector('#remove_slide'),
        renameSlide: document.querySelector('#rename_slide'),
        // ...
    },
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
    /**
     * 
     * @param {string} newSlideName name of the newly created slide
     * @returns true | false. true if creation has been done successfuly, eaither false
     */
    add: function(newSlideName) {
        console.log(newSlideName)
        this.slideList.push(
            {
                name: newSlideName,
                content: '',
            },
        )
        return true
    },
    remove: function(slideNumber) {
        this.slideList.splice(slideNumber, 1);
        return true;
    },
    rename: function(slideName) {
        slidesConfig.slideList[slidesConfig.selectedSlideNumber].name = slideName;
        return true;
    },
    //when we clicks on moveup or movedown slide's buttons, click event fires 2 times,
    //first for button event, second for slide itselft,
    //so, to prevent this, we nned to clear slide click event
    clearSlidesClickEvenets: function() {
        let slideInstances = document.querySelectorAll('.slide');
        slideInstances.forEach(slide => {
            slide.onclick = null;
        })
    },
    moveUp: function() {
        let slideNumber = slidesConfig.selectedSlideNumber;

        if (slideNumber != 0) {
            let currentSlide = slidesConfig.slideList[slideNumber];
            let upperSlide = slidesConfig.slideList[slideNumber-1];

            slidesConfig.slideList[slideNumber - 1] = currentSlide;
            slidesConfig.slideList[slideNumber] = upperSlide;
            
            this.clearSlidesClickEvenets()

            slidesConfig.select(slideNumber - 1, true);
        }
    },
    moveDown: function(){
        let slideNumber = slidesConfig.selectedSlideNumber;

        if (slideNumber != slidesConfig.slideList.length - 1) {
            let currentSlide = slidesConfig.slideList[slideNumber];
            let lowerSlide = slidesConfig.slideList[slideNumber + 1];

            slidesConfig.slideList[slideNumber + 1] = currentSlide;
            slidesConfig.slideList[slideNumber] = lowerSlide;

            this.clearSlidesClickEvenets()

            slidesConfig.select(slideNumber + 1, true);
        }                
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

        //slide buttons events, place them here!
        //becouse some actions happening through modal window with it's own button
        //confirmation 
        document.querySelector('button[button-action="rename"]').
        addEventListener('click', function(){
            document.querySelector('#edited_slide_name').value = 
            slidesConfig.slideList[slidesConfig.selectedSlideNumber].name;
        })
        document.querySelector('button[button-action="moveUp"]').onclick = 
            () => {this.moveUp();}
        document.querySelector('button[button-action="moveDown"]').onclick = 
            () => {this.moveDown();}
    },
    select: function(slideNumber, isRebuildNeeded) {
        this.selectedSlideNumber = parseInt(slideNumber);
        console.log(this.selectedSlideNumber)
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
            <button class="slide-control-button" data-bs-toggle="modal" data-bs-target="#removeSlideModal" button-action="remove" slide-number="${slideNumber}">
                ВИ
            </button>
            <button class="slide-control-button" data-bs-toggle="modal" data-bs-target="#renameSlideModal" button-action="rename" slide-number="${slideNumber}">
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
    //send slides to backend
    save() {
        console.log('sent')
    }
}

const templatesConfig = {
    templateList: [
        {
            name: 'Привіт, друже',
            content: '<div class="block-elem-template field-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 89.6px; height: 89.6px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 17.92px; padding: 2px; z-index: 101; left: 3.79464%; top: 3.75%; display: block; transition: all 0s ease-in-out 0s;" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="auto" heightmultiplier="auto" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="7.9" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: auto; height: auto; border-width: 1.344px; border-radius: 0px; transform: translate(0%, 0%); font-size: 70.784px; padding: 2px; z-index: 102; left: 3.45982%; top: 19.6875%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="19.6875%" cx="3.4598%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 1.28px;">Привіт, друже</p></div>',
        },
        {
            name: 'тест з індексу',
            content: '<div class="block-elem-template field-item selected-item" i-name="block" widthmultiplier="10" heightmultiplier="14" borderwidthmultiplier="0" borderradiusmultiplier="0" fontsizemultiplier="2" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: 90px; height: 90px; border-width: 0px; border-radius: 0px; transform: translate(0%, 0%); font-size: 17.92px; padding: 2px; z-index: 101; left: 3.79464%; top: 3.75%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="3.7471%" cx="3.8526%" i-is-selectable="true"></div><div class="text-elem-template field-item" i-name="text" widthmultiplier="54.576" heightmultiplier="17.813" borderwidthmultiplier="0.15" borderradiusmultiplier="0" fontsizemultiplier="7.9" paddingmultiplier="0.2" marginbottommultiplier="0.2" canchor="0%,0%" locktype="none" newly-created="false" style="width: auto; height: auto; border-width: 1.344px; border-radius: 0px; transform: translate(0%, 0%); font-size: 70.784px; padding: 2px; z-index: 40; left: 5.24554%; top: 17.6562%; display: block; transition: all 0s ease-in-out 0s; background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%);" cy="17.6563%" cx="5.2455%" i-is-selectable="true"><p marginbottommultiplier="0.2" style="margin-bottom: 1.28px;">Привіт, друже</p></div>',
        },
    ],
    buttons: {
        applyTemplateToSlide: document.querySelector('#apply_template_to_slide'),
        // ...
    },
    templateContainer: document.querySelector('.templates-panel'),
    selectedTemplateNumber: null,

    updateTemplateContentElementChildsValues(templateContentElement) {
        templateContentElement.childNodes.forEach(childNode => {
            childNode.style.width =`${ slidesConfig.calculatePreviewItemParam(childNode).width}px`;
            childNode.style.height =`${ slidesConfig.calculatePreviewItemParam(childNode).height}px`;
            childNode.style.borderRadius =`${ slidesConfig.calculatePreviewItemParam(childNode).borderRadius}px`;
            childNode.style.borderWidth =`${ slidesConfig.calculatePreviewItemParam(childNode).borderWidth}px`;
            childNode.style.fontSize = `${ slidesConfig.calculatePreviewItemParam(childNode).fontSize}px`;
            childNode.style.padding = `${ slidesConfig.calculatePreviewItemParam(childNode).padding}px`;
        
            childNode.style.top = childNode.getAttribute('cY');
            childNode.style.left = childNode.getAttribute('cX');
        
            if (childNode.childNodes.length > 0) {
                childNode.childNodes.forEach((p)=>{
                    p.style.marginBottom = `${slidesConfig.calculatePreviewItemParam(p).marginBottom}px`
                })
            }
        }) 
    },
    rebuildList: function(templateList) {
        this.templateContainer.innerHTML = '';

        templateList.forEach((template, index) => {
            this.templateContainer.innerHTML += 
                this.templateBlueprint(index, template.name);                    
        });     

        templateList.forEach((template, index) => {
            let currentTemplate = document.querySelector(`div[template-number="${index}"].template-content`)
            currentTemplate.innerHTML = template.content.replace(/field-item/gim, '').replace(/selected-item/gim, '')  
        });

        let templateInstances = document.querySelectorAll('.template');
        templateInstances.forEach(template => {
            template.onclick = () => {
                this.select(template.getAttribute('template-number'))
            };
        })

        let templatesContents = document.querySelectorAll(`div[template-number].template-content`);
        templatesContents.forEach(templateContent => {
            this.updateTemplateContentElementChildsValues(templateContent);
        })
        console.log('rebuilded')
    },
    select: function(templateNumber) {  
        this.selectedTemplateNumber = templateNumber;
        
        let modal = new bootstrap.Modal(document.getElementById('applySlideTemplateModal')),
        templateNameSpan = document.querySelector('#blueprint_name_template_modal'),
        slideNameSpan = document.querySelector('#slide_name_template_modal');
        modal.show();

        templateNameSpan.innerHTML = this.templateList[templateNumber].name;
        slideNameSpan.innerHTML = slidesConfig.slideList[slidesConfig.selectedSlideNumber].name;
    },
    templateBlueprint: function(templateNumber, templateName) {
        let templateBlueprint = `
        <div class="template" template-number="${templateNumber}">
            <div class="template-content" template-number="${templateNumber}"></div>
            <p class="template-name" template-number="${templateNumber}">
                ${templateName}
            </p>
        </div>
        `;
        return templateBlueprint;
    },
}

/* MENU PANEL BUTTONS */
// srpConfig.buttons.slidesList.onclick = () => {
//     if (srpConfig.panels.slideList.isShow()) {
//         srpConfig.buttons.slidesList.classList.remove(srpConfig.buttons.activeButtonClass)
//         srpConfig.panels.slideList.hide();
//     } else {
//         srpConfig.panels.slideList.show();
//         srpConfig.buttons.slidesList.classList.add(srpConfig.buttons.activeButtonClass)
//         slidesConfig.select(slidesConfig.selectedSlideNumber, true);
//     } 
// }

srpConfig.buttons.templatesList.onclick = () => {
    if (srpConfig.panels.templatesList.isShow()) {
        srpConfig.panels.templatesList.hide();
        srpConfig.buttons.templatesList.classList.remove(srpConfig.buttons.activeButtonClass)
    } else {
        srpConfig.panels.templatesList.show();
        srpConfig.buttons.templatesList.classList.add(srpConfig.buttons.activeButtonClass)
        templatesConfig.rebuildList(templatesConfig.templateList);
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

/* SLIDE PANEL BUTTONS */
srpConfig.panels.slideList.buttons.addSlide.onclick = () => {
    var modalElement = document.getElementById('createSlideModal')
    var modal = bootstrap.Modal.getInstance(modalElement) // Returns a Bootstrap modal instance
    let newSlideName = document.querySelector('#new_slide_name').value;
    
    if (newSlideName == '') {
        newSlideName = 'Новий слайд';
    }

    if (slidesConfig.add(newSlideName)) {
        modal.hide()
        slidesConfig.select(slidesConfig.slideList.length - 1, true);
        slidesConfig.selectedSlideInnerHtmlInstance.
            scrollIntoView({block: "center", behavior: "smooth"});
    }
    
}
srpConfig.panels.slideList.buttons.saveSlidesList.onclick = () => {
    slidesConfig.save();
}
/* SLIDE BUTTONS */
slidesConfig.buttons.removeSlide.onclick = () => {
    var modalElement = document.getElementById('removeSlideModal')
    var modal = bootstrap.Modal.getInstance(modalElement) // Returns a Bootstrap modal instance

    if (slidesConfig.remove(slidesConfig.selectedSlideNumber)) {
        modal.hide()
        slidesConfig.selectedSlideNumber == 0 ? slidesConfig.selectedSlideNumber = 0 : slidesConfig.selectedSlideNumber -= 1;
        console.log(slidesConfig.selectedSlideNumber)
        console.log(slidesConfig.slideList)
        slidesConfig.select(slidesConfig.selectedSlideNumber, true);
    }
}
slidesConfig.buttons.renameSlide.onclick = () => {
    var modalElement = document.getElementById('renameSlideModal')
    var modal = bootstrap.Modal.getInstance(modalElement) // Returns a Bootstrap modal instance
    let editedSlideNameInput = document.querySelector('#edited_slide_name').value;
    console.log(modal)

    if (slidesConfig.rename(editedSlideNameInput)) {
        modal.hide()
        slidesConfig.rebuildSlidesList(slidesConfig.slideList);
    }
}

/* TEMPLATE BUTTONS */
templatesConfig.buttons.applyTemplateToSlide.onclick = () => {
    var modalElement = document.getElementById('applySlideTemplateModal')
    var modal = bootstrap.Modal.getInstance(modalElement) // Returns a Bootstrap modal instance
    modal.hide();

    //rebuilding work zone inner html with all items
    if (workZone.innerHTML != templatesConfig.templateList[templatesConfig.selectedTemplateNumber].content) {
        workZone.innerHTML = templatesConfig.templateList[templatesConfig.selectedTemplateNumber].content;
        slidesConfig.slideList[slidesConfig.selectedSlideNumber].content =
            templatesConfig.templateList[templatesConfig.selectedTemplateNumber].content;

        let fieldItems = document.querySelectorAll('.field-item');
        fieldItems.forEach((item)=>{
            addDragAndDropToItem(item);
        })
    }

    configureContextPanel('destroy');
    // //viewport stuff
    CONFIG.UI.workZoneCurrentScale = 1;
    zoom('in', 0);
    // //initial scroll position
    everythingHolder.scrollTop =
        workZoneHolder.offsetHeight / 2 - everythingHolder.offsetHeight / 2;
    everythingHolder.scrollLeft =
        workZoneHolder.offsetWidth / 2 - everythingHolder.offsetWidth / 2;
}