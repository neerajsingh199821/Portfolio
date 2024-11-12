// // Get the button and images
const viewTools = document.querySelector('.view-tools');

// Add an event listener to the button
viewTools.addEventListener('click', function (event) {
    const currentHeight = window.getComputedStyle(viewTools).height
    const images = viewTools.querySelectorAll('img');
    const downIcon = document.querySelector('.fa-caret-down.icon');
    const upIcon = document.querySelector('.fa-caret-up.icon');
    if (currentHeight === '50px') {
        viewTools.style.height = '400px';
        images.forEach(image => {
            image.classList.remove('hide_tool_img');
            viewTools.style.backgroundColor = 'white';
            viewTools.style.color = 'black';
            upIcon.style.display = 'block'
            downIcon.style.display = 'none'
        });
        
        
    } else {
        upIcon.style.display = 'none'
        downIcon.style.display = 'block'
        viewTools.style.color = '';
        viewTools.style.backgroundColor = '';
        viewTools.style.height = '50px';
        images.forEach(image => {
            image.classList.add('hide_tool_img');
        });
    }
});