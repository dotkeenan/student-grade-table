class GradeTable  {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  // updateGrades(grades)  {
  //   // temporary
  //   console.log(grades);
  //   var tbody = this.tableElement.querySelector('tbody');
  //   tbody.textContent = '';
  //   for (var i = 0; i < grades.length; i++) {
  //     var tr = document.createElement('tr');

  //     var nameTd = document.createElement('td');
  //     nameTd.textContent = grades[i]['name'];

  //     var courseTd = document.createElement('td');
  //     courseTd.textContent = grades[i]['course'];

  //     var gradeTd = document.createElement('td');
  //     gradeTd.textContent = grades[i]['grade'];

  //     tr.append(nameTd, courseTd, gradeTd);
  //     tbody.appendChild(tr);
  //   }
  // }
  updateGrades(grades)  {
    // temporary
    console.log(grades);
    this.tableElement.querySelector('tbody').textContent = '';
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade)
    }
    if (grades) {
      this.noGradesElement.classList.add('d-none');
    } else{
      this.noGradesElement.classList.remove('d-none');
    }
  }

  onDeleteClick(deleteGrade)  {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {

    var tr = document.createElement('tr');

    var nameTd = document.createElement('td');
    nameTd.textContent = data['name'];

    var courseTd = document.createElement('td');
    courseTd.textContent = data['course'];

    var gradeTd = document.createElement('td');
    gradeTd.textContent = data['grade'];

    var operationsTd = document.createElement('td');

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-sm', 'btn-danger');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteGrade(data['id']);
    });

    operationsTd.append(deleteButton);
    tr.append(nameTd, courseTd, gradeTd, operationsTd);
    this.tableElement.append(tr);

    // am I supposed to return the tr?
    return tr;
  }

}
