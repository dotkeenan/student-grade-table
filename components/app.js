class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);

  }
  handleGetGradesError(error)  {
    //temporary
    console.error(error);
  }

  handleGetGradesSuccess(grades)  {
    var gradeSum = null;
    this.gradeTable.updateGrades(grades);

    for(var i = 0; i < grades.length; i++)  {
      gradeSum += grades[i]['grade'];
    }
    var gradeAverage = gradeSum / grades.length;
    this.pageHeader.updateAverage(gradeAverage);
  }

  getGrades() {
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      data: 'none',
      headers: {
        "X-Access-Token": "iHaoaGnG"
      },
      success: this.handleGetGradesSuccess,
      error:  this.handleGetGradesError
    });
  }

  start() {
    this.getGrades();
    // I have no idea how this works.  Passing in a function as the argument.
    this.gradeForm.onSubmit(this.createGrade);
  }

  createGrade(name, course, grade) {
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers:  {
        "X-Access-Token": "iHaoaGnG"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess()  {
    this.getGrades();
  }

  deleteGrade(id) {
    // temporary for now
    console.log(id);
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess()  {
    this.getGrades();
  }

}
