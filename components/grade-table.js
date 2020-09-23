class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    this.tableElement.textContent = '';
    if (!grades.length) {
      var noGradesTr = document.createElement('tr');
      var noGradesTd = document.createElement('td');
      noGradesTd.setAttribute('colspan', 4);
      noGradesTd.style.textAlign = 'center';
      noGradesTd.textContent = 'No Grades Recorded';

      noGradesTr.append(noGradesTd);
      this.tableElement.append(noGradesTr);
    } else {
      for (var i = 0; i < grades.length; i++) {
        this.tableElement.append(this.renderGradeRow(grades[i], this.deleteGrade))
      }
    }
  }

  onDeleteClick(deleteGrade) {
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
    deleteButton.addEventListener('click', function () {
      deleteGrade(data['id']);
    });

    operationsTd.append(deleteButton);
    tr.append(nameTd, courseTd, gradeTd, operationsTd);

    //return the tr so I can append the entire result of the method call on
    // line 19
    return tr;
  }

}
