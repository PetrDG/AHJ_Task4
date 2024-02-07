export default class Popover {
  constructor(btn, content) {
    this.btn = btn;
    this.popover = content;
    this.togglePopover = this.togglePopover.bind(this);
  }

  init() {
    this.btn.addEventListener('click', this.togglePopover);
  }

  togglePopover(e) {
    e.preventDefault();

    const popover = document.querySelector('.popover');
    if (popover) {
      popover.remove();
    } else {
      document.body.appendChild(this.popover);

      const { top, left } = this.btn.getBoundingClientRect();
      const offsetHorizont = (this.popover.offsetWidth - this.btn.offsetWidth) / 2;

      this.popover.style.left = `${left - offsetHorizont}px`;
      this.popover.style.top = `${top - this.popover.offsetHeight - 10}px`;
    }
  }

  set popover(content) {
    this._popover = document.createElement('div');
    const popoverTitle = document.createElement('h3');
    const popoverText = document.createElement('div');

    this._popover.classList.add('popover');

    popoverTitle.classList.add('popover-title');
    popoverTitle.textContent = content.title;

    popoverText.classList.add('popover-text');
    popoverText.textContent = content.message;

    this._popover.appendChild(popoverTitle);
    this._popover.appendChild(popoverText);
  }

  get popover() {
    return this._popover;
  }
}
