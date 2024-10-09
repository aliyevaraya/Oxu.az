const id = location.search.split("=")[1];
const NEWS = [];

fetch(`https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz/${id}`)
  .then((res) => res.json())
  .then((el) => {
    NEWS.push(el);
    getNews()
  });

const aboutNews = document.getElementById("aboutNews");

function getNews() {
  NEWS.map((el) => {
    aboutNews.innerHTML =  `
        <div>
            <img
              class="block w-full h-[60%] object-cover"
              src="${el.img}"
              alt="slide photo"
            />
          </div>
          <div class="py-4">
            <div
              class="flex justify-between gap-5 text-[12px] xs:text-[14px] font-semibold text-gray-500"
            >
              <span class="font-bold">Ana səhifə / Dünya</span>
              <div>
                <span
                  ><i class="fa-regular fa-calendar mr-2"></i>${el.date} /
                  13:48</span
                >
                <span><i class="fa-solid fa-eye mr-2"></i>${el.view}</span>
              </div>
            </div>
            <h2 class="text-[30px] font-semibold my-5">${el.title}</h2>
            <div class="flex justify-between">
              <div class="flex items-center gap-[30px] text-[18px]">
                <span><i class="fa-regular fa-thumbs-up mr-1"></i>38</span>
                <span><i class="fa-regular fa-thumbs-down mr-1"></i>78</span>
              </div>
              <div class="flex items-center gap-5">
                <span class="font-semibold text-[30px]">A-</span>
                <span class="font-semibold text-[40px]">A+</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-5 text-gray-600">
            <p><b>Oxu.Az</b> xəbər verir ki, bu barədə "Reuters" məlumat yayıb.</p>
            <p>${el.description}</p>
          </div>
      `
  });
}
