var header = document.querySelector('header');
var table = document.querySelector('tbody');
var form = document.querySelector('form');
// var p = document.querySelector('#noGrades')

var gradeForm = new GradeForm(form);
var pageHeader = new PageHeader(header);
// var gradeTable = new GradeTable(table, noGrades);
var gradeTable = new GradeTable(table);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start()
