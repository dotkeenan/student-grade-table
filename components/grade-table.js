class GradeTable  {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades)  {
    // temporary
    console.log(grades);
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement('tr');

      var nameTd = document.createElement('td');
      nameTd.textContent = grades[i]['name'];

      var courseTd = document.createElement('td');
      courseTd.textContent = grades[i]['course'];

      var gradeTd = document.createElement('td');
      gradeTd.textContent = grades[i]['grade'];

      tr.append(nameTd, courseTd, gradeTd);
      tbody.appendChild(tr);
    }
  }
}
