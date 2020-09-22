class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    //this might be wrong.
    event.preventDefault();
    console.log('handleSubmit called');
  }
}
