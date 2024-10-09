const popup = document.getElementById("popup");

function handlePopup() {
  popup.classList.toggle("!top-0");
}
function preventClick(e) {
  e.stopPropagation();
}

const tbody = document.querySelector("tbody");

function handleTable() {
  tbody.innerHTML = "";
  DATA.map((el) => {
    tbody.innerHTML += `
            <tr class="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td class="p-3"><p>${el.title}</p></td>
                  <td class="p-3"><p>${el.description.slice(0, 60)}...</p></td>
                  <td class="p-3"><p>${el.date}</p></td>
                  <td class="p-3">
                    <p>${el.view}</p>
                  </td>
                  <td class="p-3 text-center">
                    <i onclick="deleteNews(${el.id})" class="fa-solid fa-trash text-[#b33c14] text-[18px]"></i>
                  </td>
            </tr>
          `;
  });
}

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const img = document.getElementById("cover");
const date = document.getElementById("date");
const view = document.getElementById("baxis");

function handleSubmit(event) {
  event.preventDefault();
  if (title.value.trim().length < 5 || title.value.trim().length > 250)
    alert("Başlıq 5 simvoldan çox olmalıdır");
  if (desc.value.trim().length < 15) alert("Mətn 15 simvoldan çox olmalıdır");
  
  const obj = {
    title: title.value,
    img: img.value,
    description: desc.value,
    view: view.value,
    date: date.value,
  };

  fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  getAllData();
  handleTable()
  handlePopup()
}

let DATA = [];
function getAllData() {
  fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz")
    .then((res) => res.json())
    .then((data) => {
      DATA.push(...data);
      handleTable();
    });
}
getAllData();

function deleteNews(id) {
  fetch(`https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
  DATA = DATA.filter((item) => item.id != id);
  handleTable();
  console.log(DATA);
}
