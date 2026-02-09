const users = [
  // A
  { name: "Asif Rahman", pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", bio: "dreamer | night owl | chasing goals 🚀" },
  { name: "Anika Tabassum", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", bio: "artist at heart 🎨 | sunset lover" },
  { name: "Arafat Hossain", pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", bio: "fitness freak 💪 | staying disciplined" },
  { name: "Abir Hassan", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "wanderlust 🎒 | mountain lover" },

  // B
  { name: "Badhon Khan", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "nature lover 🌿 | keep it simple" },
  { name: "Bithi Akter", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "poetry and tea 🍵 | old soul" },
  { name: "Biplob Ahmed", pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61", bio: "tech enthusiast 💻 | curious mind" },
  { name: "Bristy Islam", pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", bio: "living one day at a time ✨" },

  // C
  { name: "Choyon Islam", pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", bio: "music is life 🎵 | guitarist" },
  { name: "Chaity Hasan", pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", bio: "fashion blogger 👗 | travel addict" },
  { name: "Chanchal Chowdhury", pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", bio: "making memories 📸" },
  { name: "Chandni Begum", pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef", bio: "smile often 😊 | food lover" },

  // D
  { name: "Dipto Roy", pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3", bio: "cinephile 🎬 | storyteller" },
  { name: "Dola Mondol", pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", bio: "dance like no one is watching 💃" },
  { name: "Dalim Hossain", pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea", bio: "chess player ♟️ | strategic thinker" },
  { name: "Dina Khanam", pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", bio: "dreaming big ☁️ | stay humble" },

  // E
  { name: "Emon Ahmed", pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2", bio: "night owl 🦉 | coder" },
  { name: "Esha Mani", pic: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56", bio: "coffee and books ☕📖" },
  { name: "Ehsan Kabir", pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126", bio: "adventurer 🏔️ | explorer" },
  { name: "Erica Jahan", pic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604", bio: "kindness matters ✨" },

  // F
  { name: "Faisal Karim", pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", bio: "cricket lover 🏏 | dhaka vibes" },
  { name: "Farhana Mim", pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4", bio: "creating magic ✨" },
  { name: "Fahim Shahriar", pic: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee", bio: "gym rat 💪 | keep going" },
  { name: "Fariha Sultana", pic: "https://images.unsplash.com/photo-1463453091185-61582044d556", bio: "sunshine personified ☀️" },

  // G
  { name: "Galib Islam", pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", bio: "tech geek 🤖 | gamer" },
  { name: "Giti Ara", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "artist 🎨 | nature lover" },
  { name: "Gopal Roy", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "finding peace in music 🎶" },
  { name: "Gungun Jahan", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", bio: "sky is the limit ☁️" },

  // H
  { name: "Hasib Rahman", pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19", bio: "tech enthusiast | coffee lover ☕" },
  { name: "Hridoy Khan", pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", bio: "hustle hard 🚀 | dreamer" },
  { name: "Hena Perveen", pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", bio: "staying authentic 🌿" },
  { name: "Humaira Islam", pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9", bio: "aesthetic soul ✨" },

  // I
  { name: "Imran Hossain", pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3", bio: "street photography 📸" },
  { name: "Ishrat Jahan", pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4", bio: "sunshine personified ☀️" },
  { name: "Irfan Ahmed", pic: "https://images.unsplash.com/photo-1463453091185-61582044d556", bio: "think big, work hard" },
  { name: "Ira Tabassum", pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", bio: "living the dream ✨" },

  // J
  { name: "Jannatul Ferdous", pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef", bio: "soft heart | strong mind 🌸" },
  { name: "Junaid Kabir", pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea", bio: "wanderlust 🎒 | traveler" },
  { name: "Joyita Das", pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", bio: "capturing life's moments 📸" },
  { name: "Javed Hasan", pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", bio: "discipline is key 🗝️" },

  // K
  { name: "Kamrul Islam", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "just keep swimming 🐠" },
  { name: "Keya Akter", pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", bio: "stay positive 🌈" },
  { name: "Kabir Hossain", pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", bio: "business owner 💼" },
  { name: "Khadija Mim", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "hijabi & proud ✨" },

  // L
  { name: "Lamia Akter", pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", bio: "nature seeker 🌿" },
  { name: "Liton Das", pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2", bio: "life is a journey 🛣️" },
  { name: "Lubna Jahan", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "poetry lover 📜" },
  { name: "Limon Ahmed", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "coding enthusiast 💻" },

  // M
  { name: "Mehedi Hasan", pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", bio: "coding my way through life 💻" },
  { name: "Mariya Haque", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", bio: "poetry and tea 🍵" },
  { name: "Mominul Haque", pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", bio: "simple boy | big dreams" },
  { name: "Mitu Islam", pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9", bio: "life lover ✨" },

  // N
  { name: "Nusrat Jahan", pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", bio: "aesthetic soul ✨" },
  { name: "Nila Sultana", pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", bio: "foodie 🍕 | explorer" },
  { name: "Nahid Rana", pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126", bio: "life is beautiful | grateful" },
  { name: "Nayem Hossain", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "silent observer 🍃" },

  // O
  { name: "Ovi Ahmed", pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", bio: "gamer 🎮 | coder" },
  { name: "Oishee Rahman", pic: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56", bio: "music addict 🎧" },
  { name: "Omar Faruk", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "hustler 🚀" },
  { name: "Orpita Das", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", bio: "stay kind ✨" },

  // P
  { name: "Palash Roy", pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3", bio: "artist 🎨 | dreamer" },
  { name: "Priya Akter", pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", bio: "flower child 🌸" },
  { name: "Parvez Islam", pic: "https://images.unsplash.com/photo-1463453091185-61582044d556", bio: "fitness first 💪" },
  { name: "Puspita Roy", pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", bio: "sunshine ☀️" },

  // Q
  { name: "Quayum Ahmed", pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126", bio: "always curious 🧐" },
  { name: "Quinn Islam", pic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604", bio: "living free 🕊️" },
  { name: "Qadir Khan", pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", bio: "hard work pays off" },
  { name: "Quratul Ain", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "peace & love ✌️" },

  // R
  { name: "Rakib Khan", pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2", bio: "minimalism 🖤" },
  { name: "Rifat Chowdhury", pic: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee", bio: "work hard, stay humble 💼" },
  { name: "Rayhan Uddin", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "entrepreneur 🚀" },
  { name: "Riya Islam", pic: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56", bio: "blessed ✨" },

  // S
  { name: "Sadia Islam", pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", bio: "bookworm 📖" },
  { name: "Samiul Haq", pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea", bio: "music lover 🎵" },
  { name: "Shakil Ahmed", pic: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d", bio: "gaming 🎮" },
  { name: "Sabrina Khatun", pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", bio: "dreaming big ✨" },

  // T
  { name: "Tanvir Ahmed", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "traveler 🌍" },
  { name: "Tamim Iqbal", pic: "https://images.unsplash.com/photo-1463453091185-61582044d556", bio: "adventure awaits 🏔️" },
  { name: "Tashfia Aziz", pic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604", bio: "making magic happen ✨" },
  { name: "Tuhin Islam", pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", bio: "chasing sunrises 🌅" },

  // U
  { name: "Ujjal Das", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "light up the world 💡" },
  { name: "Umme Habiba", pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", bio: "graceful ✨" },
  { name: "Utpal Roy", pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", bio: "keep smiling" },
  { name: "Urmila Islam", pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9", bio: "positive vibes" },

  // V
  { name: "Victor Gomes", pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", bio: "music is soul 🎶" },
  { name: "Vicky Roy", pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea", bio: "hustle for more" },
  { name: "Vanisha Das", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "dreamer" },
  { name: "Vaskar Ahmed", pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3", bio: "creative mind" },

  // W
  { name: "Wadud Hasan", pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", bio: "always learning" },
  { name: "Wasi Ahmed", pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126", bio: "travel junkie" },
  { name: "Wafia Islam", pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4", bio: "living free" },
  { name: "Wahid Khan", pic: "https://images.unsplash.com/photo-1463453091185-61582044d556", bio: "success is key" },

  // X
  { name: "Xavier Gomes", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "tech visionary" },
  { name: "Xena Islam", pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", bio: "warrior heart" },
  { name: "Xander Ahmed", pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", bio: "future is here" },
  { name: "Ximi Rahman", pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef", bio: "stay unique" },

  // Y
  { name: "Yasin Arafat", pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea", bio: "working on myself" },
  { name: "Yumna Islam", pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", bio: "grateful" },
  { name: "Yousuf Khan", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", bio: "stay wild" },
  { name: "Yara Jahan", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", bio: "spread love" },

  // Z
  { name: "Zubaer Islam", pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", bio: "creative mind" },
  { name: "Zayan Ahmed", pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", bio: "dreaming big" },
  { name: "Zeba Akter", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", bio: "artist" },
  { name: "Zihan Kabir", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", bio: "keep it real" }
];


let mainContent = document.querySelector(".main-content");


// Create Cards Fuunction 
function createCards(userList) {
    mainContent.innerHTML = ""; 
    
    userList.forEach(userData => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${userData.pic}" class="bg-img">
            <div class="blurred-layer" style="background-image: url('${userData.pic}')"></div>
            <div class="content">
                <h3>${userData.name}</h3>
                <p>${userData.bio}</p>
            </div>
        `;
        mainContent.append(card);
    });
}


// Display 6 Cards
function showInitialCards() {
    let initialUsers = [];
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * users.length);
        initialUsers.push(users[randomIndex]);
    }
    createCards(initialUsers);
}
showInitialCards();


let searchInput = document.querySelector("input");

searchInput.addEventListener("input", function(dets) {
    searchValue = dets.target.value.toLowerCase();

    if (searchValue === "") {
        showInitialCards();
        return;
    }

    let filteredUsers = users.filter(user => {
        return user.name.toLowerCase().startsWith(searchValue);
    });
    
    createCards(filteredUsers);

    if(filteredUsers.length === 0) {
        mainContent.innerHTML = `<h2 style="color: white; font-family: sans-serif;">No results found!</h2>`;
    }

}); 

