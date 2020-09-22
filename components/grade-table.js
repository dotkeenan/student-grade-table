// class GradeTable  {
//   constructor(tableElement, noGradesElement) {
//     this.tableElement = tableElement;
//     this.noGradesElement = noGradesElement;
//   }
class GradeTable  {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades)  {
    // temporary
    console.log(grades);
    this.tableElement.textContent = '';

    // if (grades.length) {
    //   this.noGradesElement.classList.add('d-none');
    // } else {
    //   this.noGradesElement.classList.remove('d-none');
    // }

    if (!grades.length) {
      var noGradesTr = document.createElement('tr');
      var noGradesTd = document.createElement('td');
      noGradesTd.setAttribute('colspan', 4);
      noGradesTd.style.textAlign = 'center';
      noGradesTd.textContent = 'No Grades Recorded';

      noGradesTr.append(noGradesTd);
      this.tableElement.append(noGradesTr);
    }

    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade)
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
