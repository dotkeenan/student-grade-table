class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error)  {
    //temporary
    console.error(error);
  }
  handleGetGradesSuccess(grades)  {
    //temporary
    // console.log(grades);
    // This is tricky and worth reviewing.  Wrote in in my notes
    this.gradeTable.updateGrades(grades);
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
}
