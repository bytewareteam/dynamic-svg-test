let urls = [];
function onLoaded() {
    const svgContainers = document.getElementsByClassName("dynamic-svg");

    const fileInput = document.getElementById("file-format-1");
    fileInput.onchange = (e) => {
        const tmpUrl = URL.createObjectURL(e.target.files.item(0));
        urls.push(tmpUrl);
        const svgContainer = svgContainers.item(0);
        svgContainer.setAttribute('data-dummy', tmpUrl);
        svgBindSource(svgContainer);
    }
    const fileInput2 = document.getElementById("file-format-2");
    fileInput2.onchange = (e) => {
        const tmpUrl = URL.createObjectURL(e.target.files.item(0));
        urls.push(tmpUrl);
        const svgContainer = svgContainers.item(1);
        svgContainer.setAttribute('data-dummy', tmpUrl);
        svgBindSource(svgContainer);
    }
}

function svgBindSource(svgContainer) {
    const dummyData = svgContainer.getAttribute('data-dummy');
    console.log(dummyData);
    const svgDOMContent = svgContainer.contentDocument
    const imgElement = svgDOMContent.querySelector('image');
    imgElement.setAttribute("href", dummyData);
}

function clear() {
    urls.forEach( i => URL.revokeObjectURL(i));
    urls = [];
}