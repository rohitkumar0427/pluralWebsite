let coursesData = [];

function randomName(randomChars, res, len) {
  for (let j = 0; j < len; j++) {
    res += randomChars[Math.floor(Math.random() * (randomChars.length - 1))];
  }
  return res;
}

function randomSkill(randomChars) {
  res = randomChars[Math.floor(Math.random() * randomChars.length)];
  return res;
}

let randomTime = () => {
  time = Math.floor(Math.random() * 280 + 20);

  let res = "";
  let hrs = Math.floor(time / 60);
  let min = time % 60;

  if (hrs !== 0) res = `${hrs}h ${min}m`;
  else res = `${min}m`;

  return res;
};

for (let i = 0; i < 150; i++) {
  let randomChars = "QWERT YUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  let skillset = ["Beginner", "Intermediate", "Advanced"];
  let library = ["Core", "Expanded"];
  let subject = [
    "AEC",
    "Architecture & Construction",
    "Business Professional",
    "Creative Professional",
    "Data Professional",
    "IT ops",
    "Manufacture & design",
    "Information & Cyber Security",
    "Software Developer",
    "Software Development",
    "Web Development",
  ];

  coursesData[i] = {
    name: randomName(randomChars, "", 10),
    author: randomName(randomChars, "", 5),
    time: randomTime(),
    skillLevel: randomSkill(skillset),
    library: randomSkill(library),
    subject: randomSkill(subject),
    rating: Math.floor((Math.random() * 1 + 4) * 100) / 100,
    addedTime: new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ).toLocaleDateString("en-US"),
  };
}

if (localStorage.getItem("coursesData") === null) {
  localStorage.setItem("coursesData", JSON.stringify(coursesData));
}

document
  .querySelector("#searchInput")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      searchData(document.getElementById("searchInput").value);
    }
  });

let searchCourses = (data, x) => {
  let res = [];

  for (let i = 0; i < data.length; i++) {}
};

let resetInput = () => {
  document.getElementById("searchInput").value = "";
};

let showOptions = (x) => {
  let sortOption = document.getElementById(x);
  sortOption.classList.toggle("show");
};

let showData = (data, len) => {
  let parentDiv = document.getElementById("courses");
  parentDiv.innerHTML = "";

  for (let i = len * 15; i < (len + 1) * 15; i++) {
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "divContainer");

    let nameContainer = document.createElement("div");
    let courseName = document.createElement("div");
    courseName.innerHTML = `${data[i].name}`;

    let authorName = document.createElement("div");
    authorName.innerHTML = `${data[i].author}`;

    nameContainer.appendChild(courseName);
    nameContainer.appendChild(authorName);

    let descripContainer = document.createElement("div");
    descripContainer.innerHTML = `
    <div>${data[i].time}</div>
    <div>${data[i].skillLevel}</div>
    <div>${data[i].rating}</div>
    `;

    divContainer.appendChild(nameContainer);
    divContainer.appendChild(descripContainer);
    console.log(divContainer);
    console.log(parentDiv);

    parentDiv.appendChild(divContainer);
  }
};

let allCourseData = JSON.parse(localStorage.getItem("coursesData"));

let currentSearchedData = [];

if (localStorage.getItem("currentSearchedData") === null) {
  currentSearchedData = JSON.parse(localStorage.getItem("coursesData"));
}

showData(allCourseData, 0);

let searchData = (parameter) => {
  //   console.log(parameter);
  searchCourses(currentSearchedData, parameter);
};

let sortBy = (x) => {};
