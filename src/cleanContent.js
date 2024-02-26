const cleanContent = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

export default cleanContent;