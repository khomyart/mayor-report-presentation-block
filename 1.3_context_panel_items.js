/**
 * init all fields of context panel depends on item's attributes
 * 
 * @param {string} mode 'create' or 'destroy' fields of context panel  
 * !! selectedItemForModification !! - item, for which context panel will be tweaked
 */
function configureContextPanel(mode) {   
    let availableFields = {
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

                heightInput.value = heightRange.value;
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

