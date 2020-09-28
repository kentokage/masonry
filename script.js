const resizeGridItem = (item) => {
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    rowSpan = Math.ceil(
        (item.querySelector(".content").getBoundingClientRect().height +
            rowGap) /
            (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
};

const resizeInstance = (instance) => {
    let item = instance.elements[0];
    resizeGridItem(item);
};

const resizeAllGridItems = () => {
    allItems = document.getElementsByClassName("item");
    for (let i = 0; i < allItems.length; i++) {
        imagesLoaded(allItems[i], resizeInstance); // use image library to help
        // resizeGridItem(allItems[i]);
    }
};

// window.onload = resizeAllGridItems();

window.addEventListener("load", resizeAllGridItems);
window.addEventListener("resize", resizeAllGridItems);
