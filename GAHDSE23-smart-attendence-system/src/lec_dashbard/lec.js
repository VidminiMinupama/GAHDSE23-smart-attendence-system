// create navbar
const navbar = document.createElement('div');
navbar.style.backgroundColor = '#110877';
navbar.style.color = 'white';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-between';
navbar.style.alignItems = 'center';
navbar.style.padding = '10px 30px';

// logo image
const logo = document.createElement('img');
logo.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f6/NIBM_Sri_Lanka_logo.png';
logo.style.height = '40px';
navbar.appendChild(logo);

// center links
const links = document.createElement('div');
['Home', 'Profile', 'Service'].forEach(text => {
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = text;
    link.style.color = 'white';
    link.style.margin = '0 15px';
    link.style.textDecoration = 'none';
    link.style.fontSize = '18px';
    links.appendChild(link);
});
navbar.appendChild(links);

// logout button
const logoutButton = document.createElement('button');
logoutButton.innerText = 'Logout';
logoutButton.style.backgroundColor = '#2b1f67';
logoutButton.style.color = 'white';
logoutButton.style.border = 'none';
logoutButton.style.padding = '8px 16px';
logoutButton.style.borderRadius = '8px';
logoutButton.style.cursor = 'pointer';
navbar.appendChild(logoutButton);

// main background image
const bgImage = document.createElement('img');
bgImage.src = 'lecture.png'; // you uploaded it, so place lecture.png and this file in same folder
bgImage.style.width = '100%';
bgImage.style.height = '300px';
bgImage.style.objectFit = 'cover';
bgImage.style.opacity = '0.8';

// card section
const cardSection = document.createElement('div');
cardSection.style.display = 'flex';
cardSection.style.justifyContent = 'center';
cardSection.style.gap = '50px';
cardSection.style.marginTop = '-100px';
cardSection.style.padding = '20px';

// card data
const cards = [
    {
        title: 'Attendance Record',
        img: 'https://cdn-icons-png.flaticon.com/512/5997/5997421.png'
    },
    {
        title: 'Mark Attendance',
        img: 'https://cdn-icons-png.flaticon.com/512/1308/1308659.png'
    }
];

// create cards
cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.style.textAlign = 'center';

    const img = document.createElement('img');
    img.src = card.img;
    img.style.width = '250px';
    img.style.borderRadius = '10px';
    cardDiv.appendChild(img);

    const button = document.createElement('button');
    button.innerText = card.title;
    button.style.marginTop = '15px';
    button.style.backgroundColor = '#110877';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '15px 20px';
    button.style.fontSize = '18px';
    button.style.borderRadius = '12px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '20px';
    cardDiv.appendChild(button);

    cardSection.appendChild(cardDiv);
});

// clear body and add all
document.body.style.margin = '0';
document.body.innerHTML = '';
document.body.appendChild(navbar);
document.body.appendChild(bgImage);
document.body.appendChild(cardSection);
