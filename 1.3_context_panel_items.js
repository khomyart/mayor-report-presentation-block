
/**
 * Converts rgb string like "rgb(69, 69, 69, 0.69)" to hex value: "#69696969"
 * 
 * @param {string} rgb 
 * @returns hex string
 */
function rgbToHex(rgb) {
    //hex with alpha chanel
    let hexA = '#';
    //hex without alpha chanel
    let hex = '#';
    let a16 = '';
    let match = rgb.matchAll(/[0-9.]+/gi);
    match = Array.from(match, x => x[0]);

    for (let i = 0; i < 3; i++) {
        let parsedValue = parseInt(match[i]).toString(16);
        hex += parsedValue.length < 2 ? `0${parsedValue}` : parsedValue;
        hexA = hex
    }

    if (match.length == 4) {
        hexA += parseInt(((255 * parseFloat(match[3]))).toFixed()).toString(16);
        a16 = parseInt(((255 * parseFloat(match[3]))).toFixed()).toString(16);
    } else {
        hexA += 'ff';
        a16 = 'ff';
    }

    return {
        hexA,
        hex,
        r: match[0],
        g: match[1],
        b: match[2],
        a: match[3] ? match[3] : '1',
        a16
    };
}

/**
 * init all fields of context panel depends on item's attributes
 * 
 * @param {string} mode 'create' or 'destroy' fields of context panel  
 * !! selectedItemForModification !! - item, for which context panel will be tweaked
 */
function configureContextPanel(mode) {   
    let availableFields = {
        position: {
            init: function() {
                let minValue = 0;
                let maxValue = 100;
                let fieldHolder = document.querySelector('div[ci-name="position"]')
                fieldHolder.style.display = 'flex';

                /* context panel POSITION */
                let x = document.querySelector('#panel_position_x');
                let y = document.querySelector('#panel_position_y');
                x.value = (selectedItemForModification.offsetLeft / workZone.offsetWidth * 100).toFixed(4);
                y.value = (selectedItemForModification.offsetTop / workZone.offsetHeight * 100).toFixed(4);

                x.addEventListener('input', function(event) {
                    if (event.target.value > maxValue) {
                        event.target.value = maxValue;
                    }

                    if (event.target.value < minValue) {
                        event.target.value = minValue;
                    }

                    selectedItemForModification.style.left = `${event.target.value}%`;
                })
                y.addEventListener('input', function(event) {
                    if (event.target.value > maxValue) {
                        event.target.value = maxValue;
                    }

                    if (event.target.value < minValue) {
                        event.target.value = minValue;
                    }
                    selectedItemForModification.style.top = `${event.target.value}%`;
                })
            },
        },

        zIndex: {
            init: function() {
                let fieldHolder = document.querySelector('div[ci-name="zIndex"]')
                fieldHolder.style.display = 'flex';
                
                let riseZIndexButton = document.querySelector('#zIndex_rise');
                let riseZIndexToEndButton = document.querySelector('#zIndex_rise_to_end');
                let downZIndexButton = document.querySelector('#zIndex_down');
                let downZIndexToEndButton = document.querySelector('#zIndex_down_to_end');

                riseZIndexButton.onclick = function () {
                    selectedItemForModification.style.zIndex = 
                        parseInt(window.getComputedStyle(selectedItemForModification, null).zIndex) + 1;
                }
                riseZIndexToEndButton.onclick = function () {
                    selectedItemForModification.style.zIndex =
                        getZIndexes().highest + 1;
                }
                downZIndexButton.onclick = function () {
                    selectedItemForModification.style.zIndex = 
                        parseInt(window.getComputedStyle(selectedItemForModification, null).zIndex) - 1;
                }
                downZIndexToEndButton.onclick = function () {
                    selectedItemForModification.style.zIndex =
                        getZIndexes().lowest - 1;
                }
            },
        },

        anchor: {
            init: function() {
                function assignActivatedAnchorButtonClass(buttons) {
                    buttons.forEach(button => {
                        if (button.getAttribute('ca-value') == selectedItemForModification.getAttribute('cAnchor')) {
                            button.classList.add('anchor-button-activated');
                        } else {
                            button.classList.remove('anchor-button-activated');
                        }
                    });
                }

                let fieldHolder = document.querySelector('div[ci-name="anchor"]')
                fieldHolder.style.display = 'flex';
                let anchorButtons = document.querySelectorAll('.anchor-button')

                assignActivatedAnchorButtonClass(anchorButtons);

                anchorButtons.forEach((button)=>{
                    button.onclick =  function(event) {
                        selectedItemForModification.style.left = selectedItemForModification.offsetLeft - calculateItemParams(selectedItemForModification).anchorShiftX + 'px';
                        selectedItemForModification.style.top = selectedItemForModification.offsetTop - calculateItemParams(selectedItemForModification).anchorShiftY  + 'px';

                        let anchorValue = button.getAttribute('ca-value');
                        selectedItemForModification.setAttribute('cAnchor', anchorValue)

                        selectedItemForModification.style.transform = `${calculateItemParams(selectedItemForModification).transform}`;
                        console.log(calculateItemParams(selectedItemForModification).anchorShiftX)
                        selectedItemForModification.style.left = selectedItemForModification.offsetLeft + calculateItemParams(selectedItemForModification).anchorShiftX + 'px';
                        selectedItemForModification.style.top = selectedItemForModification.offsetTop + calculateItemParams(selectedItemForModification).anchorShiftY + 'px';
                    
                        assignActivatedAnchorButtonClass(anchorButtons);
                        selectItem(selectedItemForModification);
                    }
                })
            },
        },

        width: {
            init: function() {
                let fieldHolder = document.querySelector('div[ci-name="width"]')
                fieldHolder.style.display = 'flex';

                /* context panel WIDTH */
                let widthRange = document.querySelector('#panel_width_range');
                let widthInput = document.querySelector('#panel_width_input');
                widthRange.value = selectedItemForModification.getAttribute('widthMultiplier');
                widthInput.value = selectedItemForModification.getAttribute('widthMultiplier');

                widthRange.addEventListener('input', function(event) {
                    widthInput.value = event.target.value;
                    selectedItemForModification.setAttribute('widthMultiplier', event.target.value);
                    selectedItemForModification.style.width = `${calculateItemParams(selectedItemForModification).width}px`;
                })
                widthInput.addEventListener('input', function(event) {
                    widthRange.value = event.target.value;
                    selectedItemForModification.setAttribute('widthMultiplier', event.target.value);
                    selectedItemForModification.style.width = `${calculateItemParams(selectedItemForModification).width}px`;
                })                
            },
        },

        height: {
            init: function () {
                let fieldHolder = document.querySelector('div[ci-name="height"]')
                fieldHolder.style.display = 'flex';

                /* context panel HEIGHT */
                let heightRange = document.querySelector('#panel_height_range');
                let heightInput = document.querySelector('#panel_height_input');
                heightRange.value = selectedItemForModification.getAttribute('heightMultiplier');
                heightInput.value = selectedItemForModification.getAttribute('heightMultiplier');

                heightRange.addEventListener('input', function(event) {
                    heightInput.value = event.target.value;
                    selectedItemForModification.setAttribute('heightMultiplier', event.target.value);
                    selectedItemForModification.style.height = `${calculateItemParams(selectedItemForModification).height}px`;
                })
                heightInput.addEventListener('input', function(event) {
                    heightRange.value = event.target.value;
                    selectedItemForModification.setAttribute('heightMultiplier', event.target.value);
                    selectedItemForModification.style.height = `${calculateItemParams(selectedItemForModification).height}px`;
                })
            }
        },

        textEditor: {
            init: function () {
                let fieldHolder = document.querySelector('div[ci-name="textEditor"]'),
                    data
                fieldHolder.style.display = 'block';

                editor.setData( selectedItemForModification.innerHTML );

                editor.model.document.on( 'change:data', () => {
                    data = editor.getData();
                    selectedItemForModification.innerHTML = data;
                } );
            }
        },

        opacity: {
            init: function () {
                let minValue = 3;
                let maxValue = 100;

                let fieldHolder = document.querySelector('div[ci-name="opacity"]')
                let itemOpacity = window.getComputedStyle(selectedItemForModification, null).opacity * 100;           
                let opacityRange = document.querySelector('#panel_opacity_range');
                let opacityInput = document.querySelector('#panel_opacity_input');

                fieldHolder.style.display = 'flex';
                opacityRange.value = itemOpacity;
                opacityInput.value = itemOpacity;

                opacityRange.addEventListener('input', function(event) {
                    opacityInput.value = event.target.value;
                    selectedItemForModification.style.opacity = `${event.target.value / 100}`;
                })
                opacityInput.addEventListener('input', function(event) {
                    if (event.target.value > maxValue) {
                        opacityInput.value = maxValue;
                    }

                    if (event.target.value < minValue) {
                        opacityInput.value = minValue;
                    }

                    opacityRange.value = event.target.value;
                    selectedItemForModification.style.opacity = `${event.target.value / 100}`;
                })
            }
        },

        backgroundColor: {
            init: function () { 
                function getOpacity(opacityFromInput) {
                    let opacity = `${parseInt((255 / 100 * opacityFromInput).toFixed()).toString(16)}`;
                    opacity = opacity.length < 2 ? '0' + opacity : opacity; 
                    return opacity;
                }

                let minValue = 0;
                let maxValue = 100;

                // selectedItemForModification.style.backgroundImage = 'linear-gradient(90deg, red 50%, yellow 80%)'

                let fieldHolder = document.querySelector('div[ci-name="backgroundColor"]')
                fieldHolder.style.display = 'flex';
                backgroundColor = rgbToHex(window.getComputedStyle(selectedItemForModification, null).backgroundColor);     

                let backgroundColorInput = document.querySelector('#panel_background_color_input');
                let backgroundColorOpacityRange = document.querySelector('#panel_background_color_opacity_range');
                let backgroundColorOpacityInput = document.querySelector('#panel_background_color_opacity_input');
                
                backgroundColorInput.value = backgroundColor.hex;
                backgroundColorOpacityRange.value = parseInt(parseFloat(backgroundColor.a) * 100);
                backgroundColorOpacityInput.value = parseInt(parseFloat(backgroundColor.a) * 100);

                backgroundColorInput.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundColor = `
                        ${event.target.value}${getOpacity(backgroundColorOpacityRange.value)}
                    `;
                })
                backgroundColorOpacityRange.addEventListener('input', function(event) {
                    backgroundColorOpacityInput.value = event.target.value;
                    selectedItemForModification.style.backgroundColor = `
                        ${backgroundColorInput.value}${getOpacity(event.target.value)}
                    `;
                })
                backgroundColorOpacityInput.addEventListener('input', function(event) {
                    if (event.target.value > maxValue) {
                        backgroundColorOpacityInput.value = maxValue;
                    }

                    if (event.target.value < minValue) {
                        backgroundColorOpacityInput.value = minValue;
                    }

                    backgroundColorOpacityRange.value = event.target.value;
                    selectedItemForModification.style.backgroundColor = `
                        ${backgroundColorInput.value}${getOpacity(event.target.value)}
                    `;
                })
            }
        },

        backgroundLinearGradient: {
            init: function () { 
                function getCompiledLinearGradientString (deg, cF, oF, vF, cT, oT, vT) {
                    return `linear-gradient(${deg}deg, ${cF}${oF} ${vF}%, ${cT}${oT} ${vT}%)`
                }
                function getOpacity(opacityFromInput) {
                    let opacity = `${parseInt((255 / 100 * opacityFromInput).toFixed()).toString(16)}`;
                    opacity = opacity.length < 2 ? '0' + opacity : opacity; 
                    return opacity;
                }
                //gradient 'to' value (percentages of linear-gradient function)
                function getToValue(toValue) {
                    return `${maxValue + minValue - toValue}`;
                }
                function decomposeBackgroundImageParam(backgroundImage) {
                    let match;
                    let persentagesValue = {
                        from: '',
                        to: ''
                    }
                    let rgba = {
                        from: '',
                        to: '',
                    }
                    let deg = ''

                    match = backgroundImage.matchAll(/[0-9.]+%/gi);
                    match = Array.from(match, x => x[0]);
                    console.log(match)
                    persentagesValue.from = match[0].slice(0,-1);
                    persentagesValue.to = match[1].slice(0,-1);

                    match = backgroundImage.matchAll(/rgb[a]*\([0-9,.\s]+\)/gi);
                    match = Array.from(match, x => x[0]);
                    rgba.from = match[0];
                    rgba.to = match[1];

                    match = backgroundImage.matchAll(/[0-9.]+deg/gi);
                    match = Array.from(match, x => x[0]);
                    deg = match[0].slice(0,-3);

                    return {
                        persentagesValue,
                        rgba,
                        deg
                    }
                }

                let minValue = 0;
                let maxValue = 100;   

                let backgroundImage = window.getComputedStyle(selectedItemForModification, null).backgroundImage
                let fieldHolder = document.querySelector('div[ci-name="backgroundLinearGradient"]')
                fieldHolder.style.display = 'flex';

                //color from, opacity from, value from, etc...
                let cF = document.querySelector('#panel_background_linear_gradient_from_input');
                let oF = document.querySelector('#panel_background_linear_gradient_from_opacity_range');
                let vF = document.querySelector('#panel_background_linear_gradient_from_value_range');
                
                //color to, opacity to, value to, etc...
                let cT = document.querySelector('#panel_background_linear_gradient_to_input');
                let oT = document.querySelector('#panel_background_linear_gradient_to_opacity_range');
                let vT = document.querySelector('#panel_background_linear_gradient_to_value_range');
                
                let degRange = document.querySelector('#panel_background_linear_gradient_deg_range');
                let degInput = document.querySelector('#panel_background_linear_gradient_deg_input');

                if (backgroundImage == 'none') {
                    selectedItemForModification.style.backgroundImage = 'linear-gradient(90deg, #FFFFFF00 10%, #FFFFFF00 90%)'
                }
                let decomposedBI = decomposeBackgroundImageParam(window.getComputedStyle(selectedItemForModification, null).backgroundImage);             

                cF.value = rgbToHex(decomposedBI.rgba.from).hex
                cT.value = rgbToHex(decomposedBI.rgba.to).hex
                oF.value = rgbToHex(decomposedBI.rgba.from).a*100
                oT.value = rgbToHex(decomposedBI.rgba.to).a*100
                vF.value = decomposedBI.persentagesValue.from
                vT.value = minValue + maxValue - decomposedBI.persentagesValue.to
                degRange.value = decomposedBI.deg;
                degInput.value = decomposedBI.deg;
                
                cF.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
                oF.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
                vF.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })

                cT.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
                oT.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
                vT.addEventListener('input', function(event) {
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })

                degRange.addEventListener('input', function(event) {
                    degInput.value = event.target.value;
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
                degInput.addEventListener('input', function(event) {
                    degRange.value = event.target.value;
                    selectedItemForModification.style.backgroundImage = getCompiledLinearGradientString (degRange.value, cF.value, getOpacity(oF.value), vF.value, cT.value, getOpacity(oT.value), getToValue(vT.value))
                })
            }
        },


        borderColor: {
            init: function () { 
                function getOpacity(opacityFromInput) {
                    let opacity = `${parseInt((255 / 100 * opacityFromInput).toFixed()).toString(16)}`;
                    opacity = opacity.length < 2 ? '0' + opacity : opacity; 
                    return opacity;
                }

                let minValue = 0;
                let maxValue = 100;

                let fieldHolder = document.querySelector('div[ci-name="borderColor"]')
                fieldHolder.style.display = 'flex';
                borderColor = rgbToHex(window.getComputedStyle(selectedItemForModification, null).borderColor);     

                let borderColorInput = document.querySelector('#panel_border_color_input');
                let borderColorOpacityRange = document.querySelector('#panel_border_color_opacity_range');
                let borderColorOpacityInput = document.querySelector('#panel_border_color_opacity_input');
                
                borderColorInput.value = borderColor.hex;
                borderColorOpacityRange.value = parseInt(parseFloat(borderColor.a) * 100);
                borderColorOpacityInput.value = parseInt(parseFloat(borderColor.a) * 100);

                borderColorInput.addEventListener('input', function(event) {
                    selectedItemForModification.style.borderColor = `
                        ${event.target.value}${getOpacity(borderColorOpacityRange.value)}
                    `;
                })
                borderColorOpacityRange.addEventListener('input', function(event) {
                    borderColorOpacityInput.value = event.target.value;
                    selectedItemForModification.style.borderColor = `
                        ${borderColorInput.value}${getOpacity(event.target.value)}
                    `;
                })
                borderColorOpacityInput.addEventListener('input', function(event) {
                    if (event.target.value > maxValue) {
                        borderColorOpacityInput.value = maxValue;
                    }

                    if (event.target.value < minValue) {
                        borderColorOpacityInput.value = minValue;
                    }

                    borderColorOpacityRange.value = event.target.value;
                    selectedItemForModification.style.borderColor = `
                        ${borderColorInput.value}${getOpacity(event.target.value)}
                    `;
                })
            }
        },

        borderWidth: {
            init: function() {
                let fieldHolder = document.querySelector('div[ci-name="borderWidth"]')
                fieldHolder.style.display = 'flex';

                /* context panel BORDER WIDTH */
                let borderWidthRange = document.querySelector('#panel_border_width_range');
                let borderWidthInput = document.querySelector('#panel_border_width_input');
                borderWidthRange.value = selectedItemForModification.getAttribute('borderWidthMultiplier');
                borderWidthInput.value = selectedItemForModification.getAttribute('borderWidthMultiplier');

                borderWidthRange.addEventListener('input', function(event) {
                    borderWidthInput.value = event.target.value;
                    selectedItemForModification.setAttribute('borderWidthMultiplier', event.target.value);
                    selectedItemForModification.style.borderWidth = `${calculateItemParams(selectedItemForModification).borderWidth}px`;
                })
                borderWidthInput.addEventListener('input', function(event) {
                    borderWidthRange.value = event.target.value;
                    selectedItemForModification.setAttribute('borderWidthMultiplier', event.target.value);
                    selectedItemForModification.style.borderWidth = `${calculateItemParams(selectedItemForModification).borderWidth}px`;
                })                
            },
        },

        borderRadius: {
            init: function() {
                let fieldHolder = document.querySelector('div[ci-name="borderRadius"]')
                fieldHolder.style.display = 'flex';

                /* context panel BORDER RADIUS */
                let borderRadiusRange = document.querySelector('#panel_border_radius_range');
                let borderRadiusInput = document.querySelector('#panel_border_radius_input');
                borderRadiusRange.value = selectedItemForModification.getAttribute('borderRadiusMultiplier');
                borderRadiusInput.value = selectedItemForModification.getAttribute('borderRadiusMultiplier');

                borderRadiusRange.addEventListener('input', function(event) {
                    borderRadiusInput.value = event.target.value;
                    selectedItemForModification.setAttribute('borderRadiusMultiplier', event.target.value);
                    selectedItemForModification.style.borderRadius = `${calculateItemParams(selectedItemForModification).borderRadius}px`;
                })
                borderRadiusInput.addEventListener('input', function(event) {
                    borderRadiusRange.value = event.target.value;
                    selectedItemForModification.setAttribute('borderRadiusMultiplier', event.target.value);
                    selectedItemForModification.style.borderRadius = `${calculateItemParams(selectedItemForModification).borderRadius}px`;
                })                
            },
        },
    }

    let availableFieldsOfParticularItem = CONFIG.UI.itemTemplates[selectedItemForModification.getAttribute('i-name')].contextPanelParams
    
    switch (mode) {
        case 'create':
            document.querySelectorAll('[ci-name]').forEach((item)=>{
                item.style.display = 'none';
            })
            contextPanel.style.display = 'flex';

            availableFieldsOfParticularItem.forEach(field => {
                availableFields[field].init();
            });
            break;

        case 'destroy':
            document.querySelectorAll('[ci-name]').forEach((item)=>{
                item.style.display = 'none';
            })

            contextPanel.style.display = 'none'
            break;
    }
}

