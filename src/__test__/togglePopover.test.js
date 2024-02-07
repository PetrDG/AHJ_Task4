import Popover from "../js/Popover";

test('check click button & show/hide popover', () => {
    document.body.innerHTML = '<div class="popover-container"><button class="popover-btn">Click to toggle popover</button></div>';

    const button = document.querySelector('.popover-btn');

    const content = {};
    content.title = 'Popover title';
    content.message = 'And here\'s some amazing content. It\'s very engaging. Right?';

    const popover = new Popover(button, content);
    popover.init();

    const received1 = document.querySelector('.popover');
    expect(received1).toEqual(null);
    
    button.click();
    const received2 = document.querySelector('.popover');    
    expect(received2.classList.contains('popover')).toEqual(true);

    button.click();
    expect(document.querySelector('.popover')).toEqual(null);
})