const tagsButtons = document.querySelectorAll('.tags-btn')
const tagsNameArray = ['ustensils', 'appliances', 'ingredients']
const closeTagButtons = document.querySelectorAll('.tags-opened i')



// get the search bar input in each tags
const tagsInput = {
    ingredients : document.querySelector('.ingredients-opened input'),
    appliances : document.querySelector('.appliances-opened input'),
    ustensils : document.querySelector('.ustensils-opened input')
}

for (let i = 0 ; i < closeTagButtons.length ; i++) {
    const closeTagButton = closeTagButtons[i]
    closeTagButton.addEventListener('click', function(){
        closeTag(closeTagButton.className.split(' ')[0].split('-')[1])
    })
}
for (let i = 0 ; i < tagsButtons.length ; i++){
    const tagsButton = tagsButtons[i]
    tagsButton.addEventListener('click' , function() {
        openTag(tagsButton.className.split('-')[0])
    })
}

const tagsItems = {
    ingredientsTagsItems: document.querySelector('.ingredients-opened .tags-items'),
    ustensilsTagsItems: document.querySelector('.ustensils-opened .tags-items'),
    appliancesTagsItems: document.querySelector('.appliances-opened .tags-items')
}
function openTag(tag){
    for (let i = 0 ; i < tagsNameArray.length ; i++ ){
        const tagName = tagsNameArray[i]
        if (tagName !== tag) closeTag(tagName)
    }
    const tagToOpen = document.querySelector('.'+ tag + '-opened' )
    const buttonToHide = document.querySelector('.'+ tag + '-btn' )
    tagToOpen.style.display = 'block'
    tagToOpen.querySelector('input').focus()
    buttonToHide.style.setProperty('display','none', 'important')
}

function closeTag(tag){
    const tagToHide = document.querySelector('.'+ tag + '-opened' )
    const buttonToShow = document.querySelector('.'+ tag + '-btn' )
    tagToHide.style.display = 'none'
    buttonToShow.style.setProperty('display','block', 'important')
    tagsInput[tag].value = ''
    //hydateTagByText(tag)
}