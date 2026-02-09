const users = [
  {
    name: "Asif rahman",
    pic: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "dreamer | night owl | chasing goals 🚀"
  },
  {
    name: "Hasib rahman",
    pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "tech enthusiast | coffee lover ☕ | humble"
  },
  {
    name: "Nusrat jahan",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "aesthetic soul ✨ | living my best life"
  },
  {
    name: "Tanvir ahmed",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "traveler 🌍 | capturing moments"
  },
  {
    name: "Sadia islam",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "bookworm 📖 | silent but observant"
  },
  {
    name: "Arafat hossain",
    pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    bio: "fitness freak 💪 | staying disciplined"
  },
  {
    name: "Mehedi hasan",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "coding my way through life 💻"
  },
  {
    name: "Anika tabassum",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "artist at heart 🎨 | sunset lover"
  },
  {
    name: "Faisal karim",
    pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    bio: "cricket is life 🏏 | dhaka vibes"
  },
  {
    name: "Nila sultana",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "foodie 🍕 | exploration is key"
  },
  {
    name: "Rakib khan",
    pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
    bio: "staying authentic | minimalism 🖤"
  },
  {
    name: "Samiul haq",
    pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    bio: "music lover 🎵 | chill vibes only"
  },
  {
    name: "Lamia akter",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "nature seeker 🌿 | peace above all"
  },
  {
    name: "Shakil ahmed",
    pic: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d",
    bio: "gaming 🎮 | tech geek"
  },
  {
    name: "Farhana mim",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    bio: "smile often 😊 | creating memories"
  },
  {
    name: "Imran hossain",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    bio: "born to lead | street photography 📸"
  },
  {
    name: "Sumaiya khan",
    pic: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    bio: "hijabi & proud ✨ | kind heart"
  },
  {
    name: "Tamim iqbal",
    pic: "https://images.unsplash.com/photo-1463453091185-61582044d556",
    bio: "adventure awaits 🏔️ | explorer"
  },
  {
    name: "Jannatul ferdous",
    pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    bio: "soft heart | strong mind 🌸"
  },
  {
    name: "Nahid rana",
    pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
    bio: "life is beautiful | grateful"
  },
  {
    name: "Rifat chowdhury",
    pic: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee",
    bio: "work hard, stay humble 💼"
  },
  {
    name: "Mariya haque",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "poetry and tea 🍵 | old soul"
  },
  {
    name: "Zubaer islam",
    pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "creative mind | thinking out of the box"
  },
  {
    name: "Tashfia aziz",
    pic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
    bio: "making magic happen ✨"
  },
  {
    name: "Abir hassan",
    pic: "https://images.unsplash.com/photo-1585691292678-e201f1fe95a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "wanderlust 🎒 | mountain lover"
  },
  {
    name: "Ishrat jahan",
    pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    bio: "sunshine personified ☀️"
  },
  {
    name: "Mominul haque",
    pic: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e",
    bio: "simple boy | big dreams"
  },
  {
    name: "Rayhan uddin",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "entrepreneur | constant learner"
  },
  {
    name: "Sabrina khatun",
    pic: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
    bio: "dreaming big | stay focused"
  },
  {
    name: "Kamrul islam",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "just keep swimming 🐠"
  }
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


// Display 5 Cards
function showInitialCards() {
    let initialUsers = [];
    for (let i = 0; i < 5; i++) {
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

