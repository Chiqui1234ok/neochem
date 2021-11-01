// Classes handling
function removeClass(id, classToRemove) {
    document.getElementById(id).classList.remove(classToRemove);
}
function checkIfClassExists(id, classToFind) {
    const classes = document.getElementById(id).classList;
    for(let i = 0;i < classes.length;i++) {
        if(classes[i] == classToFind)
            return true;
    }
    return false;
}