var header = document.querySelector('header');
var table = document.querySelector('table');
var form = document.querySelector('form');
var p = document.querySelector('#noGrades')

var gradeForm = new GradeForm(form);
var pageHeader = new PageHeader(header);
var gradeTable = new GradeTable(table, noGrades);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start()
