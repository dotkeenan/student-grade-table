var header = document.querySelector('header');
var table = document.querySelector('table');

var pageHeader = new PageHeader(header);
var gradeTable = new GradeTable(table);
var app = new App(gradeTable, pageHeader);

app.start()
