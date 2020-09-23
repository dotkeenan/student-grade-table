var header = document.querySelector('header');
var table = document.querySelector('tbody');
var form = document.querySelector('form');

var gradeForm = new GradeForm(form);
var pageHeader = new PageHeader(header);
var gradeTable = new GradeTable(table);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start()
