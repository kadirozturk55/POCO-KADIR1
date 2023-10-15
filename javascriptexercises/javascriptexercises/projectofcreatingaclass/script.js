let profiles = [
    
    {id:1,
    fullname:"Kadir ÖZTÜRK",
    age:34,
    eyecolor:"brown",
    hobby:"writing",
    profileimgURL:"img/kadirozturkfoto2.jpeg"
    },
    
    {
    id:2,
    fullname:"Chaewon",
    age:30,
    eyecolor:"brown",
    hobby:"riding bike",
    profileimgURL:"img/Chaewon2.jpg"
        },
        {id:3,
    fullname:"vladimir",
    age:30,
    eyecolor:"brown",
    hobby:"reading",
    profileimgURL:"img/Vladimir.jpg"
    },
    {id:4,
        fullname:"Melike",
        age:25,
        eyecolor:"brown",
        hobby:"reading",
        profileimgURL:"img/Melike.jpg"
        },
         {id:5,
            fullname:"Sema",
            age:25,
            eyecolor:"brown",
            hobby:"reading",
            profileimgURL:"img/SemaIstek.jpg"
            },
            {id:6,
                fullname:"Yidnek",
                age:25,
                eyecolor:"brown",
                hobby:"reading",
                profileimgURL:"img/Yidnek.jpg"
                },
                {id:7,
                    fullname:"Olena",
                    age:25,
                    eyecolor:"brown",
                    hobby:"reading",
                    profileimgURL:"img/Olena.jpg"
                    },
];





profiles.forEach(function (profile) {
    let profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    // to create profile img
    let image = document.createElement('img');
    image.src = profile.profileimgURL;

    // content
    let info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
        <p>${profile.fullname}</p>
        <p>Age: ${profile.age}</p>
        <p>Eye Color: ${profile.eyecolor}</p>
        <p>Hobby: ${profile.hobby}</p>
    `;

    // to add
    profileCard.appendChild(image);
    profileCard.appendChild(info);

    
    photoGrid.appendChild(profileCard);
});












































/*const profiles= [
    {
id:1,
fullname:"Kadir ÖZTÜRK",
age:34,
eyecolor:"brown",
hobby:"writing",
profileimgURL:"img/kadirozturkfoto2.jpeg"
},

{
id:2,
fullname:"Chaewon",
age:30,
eyecolor:"brown",
hobby:"riding bike",
profileimgURL:"img/Chaewon2.jpg"
    }
]

let container = document.getElementById('myContainer');
    // loop through profiles array
profiles.forEach(function (methodprofile) {
    // <img>
let image = document.createElement("img")
    // <img src="xxx">
image.src = methodprofile.profileimgURL;
    // add <img> to container
container.append(image)
})*/