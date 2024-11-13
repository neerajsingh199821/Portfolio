// Get the button and images
const viewTools = document.querySelector('.view-tools');
const downIcon = document.querySelector('.fa-caret-down.icon');
const upIcon = document.querySelector('.fa-caret-up.icon');

// Function to adjust height based on window width
function adjustViewToolsHeight() {
    const width = window.innerWidth;
    
    // Set height based on media query breakpoints
    if (width >= 1200) {
        viewTools.dataset.expandedHeight = '400px';
    } else if (width >= 992 && width < 1200) {
        viewTools.dataset.expandedHeight = '400px';
    } else if (width >= 768 && width < 992) {
        viewTools.dataset.expandedHeight = '460px';
    } else if (width < 768) {
        viewTools.dataset.expandedHeight = '700px';
    }
}

// Adjust height initially and on window resize
window.addEventListener('load', () => {
    viewTools.style.height = '50px'; // Set initial collapsed height
    adjustViewToolsHeight(); // Set expanded height based on screen width
});
window.addEventListener('resize', adjustViewToolsHeight);

// Add event listener to the button
viewTools.addEventListener('click', function () {
    const currentHeight = window.getComputedStyle(viewTools).height;
    const expandedHeight = viewTools.dataset.expandedHeight;
    const images = viewTools.querySelectorAll('img');
    
    if (currentHeight === '50px') {
        // Expand to responsive height
        viewTools.style.height = expandedHeight;
        images.forEach(image => {
            image.classList.remove('hide_tool_img');
            viewTools.style.backgroundColor = 'white';
            viewTools.style.color = 'black';
            upIcon.style.display = 'block';
            downIcon.style.display = 'none';
        });
    } else {
        // Collapse back to 50px
        upIcon.style.display = 'none';
        downIcon.style.display = 'block';
        viewTools.style.color = '';
        viewTools.style.backgroundColor = '';
        viewTools.style.height = '50px';
        images.forEach(image => {
            image.classList.add('hide_tool_img');
        });
    }
});
