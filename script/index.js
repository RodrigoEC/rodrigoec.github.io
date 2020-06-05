const projectItems = document.querySelectorAll(".projects li")


for (item of projectItems) {
    item.addEventListener('mouseover', increaseSelectedItemSize)
    item.addEventListener('mouseout', decreaseSelectedItemSize)
}

function increaseSelectedItemSize(event) {
    const itemLi = event.target
    itemLi.classList.add("selected")

}

function decreaseSelectedItemSize(event) {
    const itemLi = event.target

    itemLi.classList.remove("selected")
}

// Creating a popUp for the projects items