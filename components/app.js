class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
  }
  createGrade(name, course, grade) {
    //temporary
    console.log(name, course, grade);
  }
}
