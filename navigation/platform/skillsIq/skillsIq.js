let skillsData = [];

let nameselector = (len) => {
  let randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = "";
  for (let i = 0; i < len; i++) {
    res += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return res;
};

let courseSelector = () => {
  let randomCourse = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let len = randomCourse.length;
  let x = randomCourse[Math.floor(Math.random() * len)];
  return x;
};

let hourSelector = () => {
  let randomhrs = [];
  for (let i = 5; i < 35; i++) {
    randomhrs.push(i);
  }
  let len = randomhrs.length;
  let x = randomhrs[Math.floor(Math.random() * len)];
  return x;
};

let categorySelector = () => {
  let randomhrs = [
    "Development",
    "IT Ops",
    "Creative",
    "Security",
    "Conference",
  ];
  let len = randomhrs.length;
  let x = randomhrs[Math.floor(Math.random() * (len + 1))];
  return x;
};

let imageSelectory = () => {
  let len = 9;
  let x = Math.floor(Math.random() * len);
  let url = `/pluralWebsite/Images/skill (${x}).png`;
  console.log(url);
  return url;
};

for (let i = 0; i < 150; i++) {
  name = nameselector(6);
  course = courseSelector();
  hours = hourSelector();
  category = categorySelector();
  image = imageSelectory();

  skillsData[i] = {
    name,
    course,
    hours,
    category,
    image,
    url: "/pluralWebsite/navigation/platform/softwaredevelopment/softwaredevelopment.html",
  };
}

if (localStorage.getItem("skillsData") === null) {
  console.log(1);
  localStorage.setItem("skillsData", JSON.stringify(skillsData));
}

let showData = (data) => {
  let parentDiv = document.getElementById("skillsData");
  let i = 0;
  for (let i = 0; i < data.length; i++) {
    let linkA = document.createElement("a");
    linkA.setAttribute(
      "href",
      "/pluralWebsite/navigation/platform/softwaredevelopment/softwaredevelopment.html"
    );
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "divContainer");
    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "imgContainer");
    let metaContainer = document.createElement("div");
    metaContainer.setAttribute("class", "metaContainer");
    let nameContainer = document.createElement("div");
    let descripContainer = document.createElement("div");
    let img = document.createElement("img");

    img.setAttribute("src", `${data[i].image}`);
    nameContainer.innerHTML = `${data[i].name}`;
    descripContainer.innerHTML = `<div><span>${data[i].course}</span> Courses 
    <span>${data[i].hours}</span> Hours 
    <img src="/pluralWebsite/Images/iq.png"></img> Get Your Skill Iq
    </div>`;

    imgContainer.appendChild(img);
    divContainer.appendChild(imgContainer);

    metaContainer.appendChild(nameContainer);
    metaContainer.appendChild(descripContainer);
    divContainer.appendChild(metaContainer);

    console.log(linkA);
    linkA.appendChild(divContainer);
    parentDiv.appendChild(linkA);
  }
};

let data = JSON.parse(localStorage.getItem("skillsData"));

showData(data);

let searchData = (x) => {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === x) {
      res.push(data[i]);
    }
  }
  console.log(res);
  showData(res);
};

let showCategory = (x) => {
  let parentDiv = document.getElementById("skillsData");
  parentDiv.innerHTML = "";
  let category = [
    "all",
    "Development",
    "IT Ops",
    "Creative",
    "Security",
    "Conference",
  ];

  if (x === "all") showData(data);

  for (let i = 1; i < category.length; i++) {
    if (x === category[i]) {
      searchData(category[i]);
    }
  }
};
