const arr = [
    {
        photo: 'images/club sandwich.jpg',
        name: 'club sandwich',
        category: 'brunch',
        price: '$10.99',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dignissimos enim deserunt deleniti neque sunt animi consequuntur, dolor earum veniam.',
    },
    {
        photo: 'images/coffee.jpg',
        name: 'coffee',
        category: 'drinks',
        price: '$5.99',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime inventore fugit debitis commodi sunt recusandae soluta sint neque corrupti in?',
    },
    {
        photo: 'images/cupcake.jpg',
        name: 'cupcake',
        category: 'pastries',
        price: '$5.99',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, amet sunt? Atque provident quasi reiciendis fugit dolorem. Repellendus, fugit dolorum?',
    },
    {
        photo: 'images/fried rice.jpg',
        name: 'fried rice',
        category: 'lunch',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum saepe blanditiis voluptate laboriosam minus, maiores perferendis impedit at adipisci.',
    },
    {
        photo: 'images/fries.jpg',
        name: 'fries',
        category: 'snack',
        price: '$9.99',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, magni dicta nesciunt doloremque illum perferendis rem eaque natus culpa atque?',
    },
    {
        photo: 'images/fruit shake.jpg',
        name: 'fruit shake',
        category: 'drinks',
        price: '$5.99',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam facere neque non saepe cum commodi natus! Ad autem saepe soluta!',
    },
    {
        photo: 'images/grilled barbecue.jpg',
        name: 'grilled barbecue',
        category: 'lunch',
        price: '$29.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure dignissimos asperiores odit iusto tempora reprehenderit voluptates tenetur fuga quibusdam?',
    },
    {
        photo: 'images/hamburger and fries.jpg',
        name: 'hamburger & fries',
        category: 'brunch',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequatur architecto maxime porro culpa delectus quae ipsum quisquam doloremque natus!',
    },
    {
        photo: 'images/pancake.jpg',
        name: 'pancake',
        category: 'breakfast',
        price: '$9.99',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit temporibus minus impedit suscipit! Provident iure iusto consequatur ullam exercitationem alias?',
    },
    {
        photo: 'images/salmon.jpg',
        name: 'salmon',
        category: 'sea food',
        price: '$29.99',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quibusdam sapiente voluptates recusandae consequuntur accusantium sunt molestias voluptatum dolorum sed!',
    },
    {
        photo: 'images/sashimi.jpg',
        name: 'sashimi',
        category: 'sea food',
        price: '$29.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi quos numquam accusamus reiciendis ipsum repellat sint impedit atque aliquam.',
    },
    {
        photo: 'images/strawberry shortcake.jpg',
        name: 'strawberry shortcake',
        category: 'pastries',
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla optio odit adipisci fugiat, modi culpa. Sapiente perspiciatis cumque quos.',
    },
    {
        photo: 'images/waffles.jpg',
        name: 'waffles',
        category: 'breakfast',
        price: '$5.99',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quas numquam dolores, obcaecati dolorum doloremque laboriosam eveniet voluptatum deserunt rem.',
    },
];

const categoriesContainer = document.querySelector('.categoriesContainer');
let load = document.querySelector('.itemsContainer');

// adding content, categories and selected category dynamically
// filtering content of selected category
window.addEventListener('DOMContentLoaded', function () {
    contents(arr);
    dynamicCategories();
    const btn = document.querySelectorAll('.btn');
    btn.forEach(function (item) {
        item.addEventListener('click', function (e) {
            addBtn(e);
            filtering(e);
        });
    });
});

function contents(contentItem) {
    let displayMenu = contentItem.map(function (item) {
        return ` <article>
                    <div class="imgContainer">
                        <img src="${item.photo}" alt="menu item">
                    </div>
                    <div>
                        <h3 class="itemName">${item.name}<span class="price">${item.price}</span></h3>
                        <p>${item.description}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join('');
    load.innerHTML = displayMenu;
}

function dynamicCategories() {
    const newCategory = arr.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, []);
    const addingCategories = newCategory.map(function (category) {
        return `<button class="btn" type="button" data-id=${category}>${category}</button>`;
    }).join('');
    categoriesContainer.innerHTML = addingCategories;
}

function addBtn(clicked) {
    icon.classList.add('enlarge', 'turn');
    categoriesContainer.classList.remove('show');
    newBtn.innerHTML = clicked.currentTarget.innerHTML;
    newBtn.classList.add('addedBtn');
    btnsContainer.appendChild(newBtn);
    if (btnsContainer.childNodes.length > 5) {
        btnsContainer.removeChild(btnsContainer.childNodes[5]);
        btnsContainer.appendChild(newBtn);
    }
}

function filtering(item) {
    const btnId = item.currentTarget.dataset.id;
    const btnItems = arr.filter(function (arrItem) {
        if (arrItem.category === btnId) {
            return arrItem;
        }
    });
    contents(btnItems);
}

// ***************************************************
const categories = document.querySelector('.categories');
const icon = document.querySelector('.icon');

// show or hide categories list
categories.addEventListener('click', function () {
    categoriesContainer.classList.toggle('show');
    icon.classList.toggle('enlarge');
});

const btnsContainer = document.querySelector('.btnsContainer');
let newBtn = document.createElement('button');

const mainBtn = document.querySelector('.all');

// showing all the items, cancelling out selected categories
mainBtn.addEventListener('click', function () {
    newBtn.remove();
    categoriesContainer.classList.remove('show');
    icon.classList.remove('turn');
    contents(arr);
});