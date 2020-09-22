class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;

    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    //this might be wrong.
    event.preventDefault();
    console.log('handleSubmit called');
    //instantiate a FormData object. argument might be wrong
    var formData = new FormData(event.target);
    // save form data into variables.  could be wrong
    var formDataName = formData.get('name');
    var formDataCourse = formData.get('course');
    var formDataGrade = formData.get('grade');

    // call createGrade method of this object, passing your name, course, and grade
    //variables as arguments
    this.createGrade(formDataName, formDataCourse, formDataGrade);

    //call reset() method of the target property of the event object to reset form
    // this could be wrong
    event.target.reset();
  }
}
