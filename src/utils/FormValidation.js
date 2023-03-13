export default class FormValidation {
  enableValidation(formName) {
    this.form = document.forms[formName];
    this.inputList = Array.from(this.form.getElementsByTagName('input'));
    this.formSubmit = this.form.getElementsByTagName('button')[0];
    this.handleInputValidation();
    if (this.inputList.length) {
        this.disableSubmit()
    }
  }
  disableValidation() {
    this.inputList.forEach((input) => {
      input.removeEventListener('input', this.inputValidity);
    });
  }
  handleInputValidation() {
    this.inputList.forEach((input) => {
      input.addEventListener('input', this.inputValidity.bind(this));
    });
  }
  inputValidity(e) {
    const input = e.target;
    input.validity.valid ? this.hideError(input) : this.showError(input);
    const valid = this.inputList.every(
      (input) => input.validity.valid === true
    );
    if (valid) {
      this.enableSubmit();
    } else {
        this.disableSubmit()
    }
  }
  showError(input) {
    this.form.querySelector(`#${input.name}`).textContent =
      input.validationMessage;
  }
  hideError(input) {
    this.form.querySelector(`#${input.name}`).textContent = '';
  }
  enableSubmit() {
    this.formSubmit.disabled = false;
    this.formSubmit.classList.remove('submit_disable');
  }
  disableSubmit() {
    this.formSubmit.disabled = true;
    this.formSubmit.classList.add('submit_disable');
  }
}
