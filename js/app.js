const newsDiv = document.getElementById("news");
let DATA = [];

function getAllData() {
    fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz")
      .then((res) => res.json())
      .then((data) => {
        DATA.push(...data);
        getNews()
      });
  }
getAllData();

function getNews() {
    newsDiv.innerHTML = "";
  DATA.map((news) => {
    newsDiv.innerHTML += `
            <div class="w-full xs:w-[48%] lg:w-[32%] rounded-md border border-gray-400 h-[450px] xs:[400px]">
                <div class="relative h-[50%]">
                    <a href="/pages/detail.htm?id=${news.id}">
                    <img class="w-full h-full object-cover" src="${news.img}" alt="news cover" />
                    </a>
                    <div class="absolute right-[5%] bottom-[5%] w-[70px] flex items-center justify-around bg-[#d35462] text-white rounded-md p-1" >
                        <i class="fa-solid fa-video"></i>Video
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex gap-5 text-[12px] font-semibold text-gray-500">
                        <span><i class="fa-regular fa-calendar mr-2"></i>${news.date} / 15:48</span>
                        <span><i class="fa-solid fa-eye mr-2"></i>${news.view}</span>
                    </div>
                    <h2 class="text-[18px] font-semibold my-5">
                        <a href="/pages/detail.htm?id=${news.id}">${news.title}</a>
                    </h2>
                    <div class="flex justify-between items-center">
                        <span class="text-[#1b95a1] text-[14px] font-bold">Dünya</span>
                        <div class="flex items-center gap-4">
                            <span><i class="fa-regular fa-thumbs-up mr-1"></i>10</span>
                            <span><i class="fa-regular fa-thumbs-down mr-1"></i>0</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
}