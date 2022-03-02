var tabledata = [
  {
    id: 1,
    name: "Jalal Isma'il Murad",
    age: "30",
    col: "red",
    dob: "01/08/1980",
  },
  { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  {
    id: 3,
    name: "Christine Lobowski",
    age: "42",
    col: "green",
    dob: "22/05/1982",
  },
  {
    id: 4,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 5,
    name: "Tanuju",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
    details: "test",
  },
  { id: 6, name: "Bruce Wayne", age: "12", col: "red", dob: "01/08/1980" },
  { id: 7, name: "Clark Kent", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 8, name: "Jonn Jonzz", age: "42", col: "green", dob: "22/05/1982" },
  {
    id: 9,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 10,
    name: "Barry Allen",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
    details: "test",
  },
  {
    id: 11,
    name: "Jalal Isma'il Murad",
    age: "30",
    col: "red",
    dob: "01/08/1980",
  },
  { id: 12, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  {
    id: 13,
    name: "Christine Lobowski",
    age: "42",
    col: "green",
    dob: "22/05/1982",
  },
  {
    id: 14,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 15,
    name: "Tanuju",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
    details: "test",
  },
  { id: 16, name: "Bruce Wayne", age: "12", col: "red", dob: "01/08/1980" },
  { id: 17, name: "Clark Kent", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 18, name: "Jonn Jonzz", age: "42", col: "green", dob: "22/05/1982" },
  {
    id: 19,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 20,
    name: "Barry Allen",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
    details: "test",
  },
];

var modalBody = document
  .getElementById("exampleModal")
  .querySelector(".modal-body");
var modalTitle = document
  .getElementById("exampleModal")
  .querySelector(".modal-title");

var openButton = function (value, data, cell, row, options) {
  const button = document.createElement("button");
  button.innerText = "Preview";
  button.classList.add("btn", "btn-outline-dark");
  button.dataset.bsTarget = "#exampleModal";
  button.dataset.bsToggle = "modal";
  button.addEventListener("click", clickHandler);

  function clickHandler() {
    var id =
      button.parentElement.parentElement.querySelector(
        ".tabulator-cell"
      ).innerText;

    var dataRow = tabledata.find((item) => item.id === parseInt(id));
    console.log(dataRow);
    var ul = document.createElement("ul");
    modalBody.innerHTML = "";
    modalTitle.innerHTML = "";
    modalTitle.innerHTML = dataRow.name;
    modalBody.appendChild(ul);
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "<span>Name: </span> " + "<small>" + dataRow.name + "</small>";
    var li2 = document.createElement("li");
    ul.appendChild(li2);
    li2.innerHTML =
      "<span>Age: </span> " + "<small>" + dataRow.age + "</small>";
    var li3 = document.createElement("li");
    ul.appendChild(li3);
    li3.innerHTML =
      "<span>Date of Birth: </span> " + "<small>" + dataRow.dob + "</small>";
    var li4 = document.createElement("li");
    ul.appendChild(li4);
    li4.innerHTML =
      "<span>Favorite color: </span> " + "<small>" + dataRow.col + "</small>";
  }

  return button;
};

var table = new Tabulator("#example-table", {
  data: tabledata,
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 5,
  resizableRows: false,
  columns: [
    { title: "id", field: "id", resizable: false, headerSort: false },
    { title: "Name", field: "name", resizable: false, headerSort: false },
    {
      title: "Preview",
      formatter: openButton,
      resizable: false,
      headerSort: false,
    },
  ],
});
console.log("heeu");
