import Popover from './Popover';

const button = document.querySelector('.popover-btn');
const content = {};
content.title = 'Popover title';
content.message = 'And here\'s some amazing content. It\'s very engaging. Right?';

const popover = new Popover(button, content);
popover.init();
