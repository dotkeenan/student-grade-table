class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var formDataName = formData.get('name');
    var formDataCourse = formData.get('course');
    var formDataGrade = formData.get('grade');
    this.createGrade(formDataName, formDataCourse, formDataGrade);
    event.target.reset();
  }
}
