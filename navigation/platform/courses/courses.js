const skillset = ["Beginner", "Intermediate", "Advanced"];
const library = ["Core", "Expanded"];
const subject = [
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

let coursesData = [
  {
    name: "Javascript",
    author: "Daniel",
    time: randomTime(),
    skillLevel: "Beginner",
    library: "Core",
    subject: "IT ops",
    rating: Math.floor((Math.random() * 1 + 4) * 100) / 100,
    addedTime: new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ).toLocaleDateString("en-US"),
  },
  {
    name: "AAA",
    author: "bbb",
    time: randomTime(),
    skillLevel: "Advanced",
    library: "Expanded",
    subject: "AEC",
    rating: Math.floor((Math.random() * 1 + 4) * 100) / 100,
    addedTime: new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ).toLocaleDateString("en-US"),
  },
];

// Generating the courses Data.
if (localStorage.getItem("coursesData") === null) {
  for (let i = 2; i < 150; i++) {
    let randomChars = "QWERT YUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
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
  localStorage.setItem("coursesData", JSON.stringify(coursesData));
}

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

    parentDiv.appendChild(divContainer);
  }
};

if (localStorage.getItem("allCourseData") === null) {
  var allCourseData = [];
  allCourseData = JSON.parse(localStorage.getItem("coursesData"));
}
if (localStorage.getItem("currentSearchedData") === null) {
  var currentSearchedData = [];
}

let searchCourses = (parameter, index) => {
  let res = [];
  if (parameter === "library") {
    for (let i = 0; i < currentSearchedData.length; i++) {
      if (currentSearchedData[i].library === library[index]) {
        res.push(currentSearchedData[i]);
      }
    }
  } else if (parameter === "subject") {
    for (let i = 0; i < currentSearchedData.length; i++) {
      for (let j = 0; j < index.length; j++) {
        if (currentSearchedData[i].subject === subject[index[j]]) {
          res.push(currentSearchedData[i]);
        }
      }
    }
  } else if (parameter === "skillset") {
    for (let i = 0; i < currentSearchedData.length; i++) {
      for (let j = 0; j < index.length; j++) {
        if (currentSearchedData[i].skillLevel === skillset[index[j]]) {
          res.push(currentSearchedData[i]);
        }
      }
    }
  }
  return res;
};

let checkLibrary = () => {
  if (document.getElementById("library1").checked === true)
    return currentSearchedData;
  for (let i = 1; i <= library.length; i++) {
    let x = document.getElementById(`library${i + 1}`);
    if (x.checked === true) {
      return searchCourses("library", i - 1);
    }
  }
  return currentSearchedData;
};

let checkSubject = () => {
  let searchParameter = [];
  for (let i = 1; i <= subject.length; i++) {
    let x = document.getElementById(`subject${i}`);
    if (x.checked === true) searchParameter.push(i - 1);
  }
  if (searchParameter.length !== 0) {
    return searchCourses("subject", searchParameter);
  } else return currentSearchedData;
};

let checkSkillLevel = () => {
  let searchParameter = [];
  for (let i = 1; i <= skillset.length; i++) {
    let x = document.getElementById(`skill${i}`);
    if (x.checked === true) searchParameter.push(i - 1);
  }
  if (searchParameter.length !== 0) {
    return searchCourses("skillset", searchParameter);
  } else return currentSearchedData;
};

let searchData = (val) => {
  let res = [];
  if (val === "") return currentSearchedData;
  for (let i = 0; i < currentSearchedData.length; i++) {
    if (
      currentSearchedData[i].name === val ||
      currentSearchedData[i].author === val
    ) {
      res.push(currentSearchedData[i]);
    }
  }
  return res;
};

// let resetInput = () => {
//   let val = document.getElementById("searchInput").value;
//   searchData(val);
// };

let temp = 0;

currentSearchedData = JSON.parse(localStorage.getItem("coursesData"));

showData(currentSearchedData, temp);

let check = () => {
  temp = 0;
  currentSearchedData = JSON.parse(localStorage.getItem("coursesData"));
  let val = document.getElementById("searchInput").value;

  currentSearchedData = checkLibrary();
  currentSearchedData = checkSubject();
  currentSearchedData = checkSkillLevel();
  currentSearchedData = searchData(val);

  showData(currentSearchedData, temp);
};

document
  .querySelector("#searchInput")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      check();
    }
  });

let currentShowData = (x) => {
  if (x === "prev") {
    if (temp === 0);
    else {
      temp--;
      showData(currentSearchedData, temp);
    }
  }
  if (x === "next") {
    if (temp > currentSearchedData.length / 15 - 2);
    else {
      temp++;
      showData(currentSearchedData, temp);
    }
  }
};

let clearAllFilter = () => {
  for (let i = 1; i <= library.length; i++) {
    let x = document.getElementById(`library${i}`);
    if (x.checked === true) {
      x.checked = false;
    }
  }
  for (let i = 1; i <= subject.length; i++) {
    let x = document.getElementById(`subject${i}`);
    if (x.checked === true) x.checked = false;
  }
  for (let i = 1; i <= skillset.length; i++) {
    let x = document.getElementById(`skill${i}`);
    if (x.checked === true) x.checked = false;
  }
  temp = 0;
  currentSearchedData = allCourseData;
  showData(currentSearchedData, temp);
};

let sortBy = (x) => {
  temp = 0;
  if (x === "ratingHigh") {
    currentSearchedData.sort((a, b) => {
      return b.rating - a.rating;
    });
  } else if (x === "newest") {
    currentSearchedData.sort((a,b) => { 
      return a.addedTime.localeCompare(b.addedTime);
    });
  } else if (x === "ascending") {
    currentSearchedData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (x === "descending") {
    currentSearchedData.sort((a, b) => {
      return -a.name.localeCompare(b.name);
    });
  }
  showData(currentSearchedData, temp);
};
