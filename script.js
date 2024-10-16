const box = document.querySelector(".box");

const promiseAPI1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Can't fetch the data in first link");
                    }
                    return res.json();
                })
                .then(data => {
                    let data_box = document.createElement("div");
                    data_box.className = "data-box";
                    data.posts.forEach(item => {
                        data_box.innerHTML += `
                            <div class="post">
                                <h2>${item.title}</h2>
                                <p>${item.body}</p>
                                <div class="tags">
                                    <strong>Tags:</strong>
                                    <span class="tag">${item.tags[0]}</span>
                                    <span class="tag">${item.tags[1]}</span>
                                    <span class="tag">${item.tags[2]}</span>
                                </div>
                                <div class="reactions">
                                    <strong>Reactions:</strong>
                                    <span>Likes: <span>${item.reactions.likes}</span></span>
                                    <span>Dislikes: <span>${item.reactions.dislikes}</span></span>
                                </div>
                                <div class="views">
                                    <strong>Views:</strong> <span>${item.views}</span>
                                </div>
                                <div class="user-id">
                                    <strong>User ID:</strong> <span>${item.userId}</span>
                                </div>
                            </div>
                        `;
                    });
                    box.appendChild(data_box);
                    resolve(true);
                })
                .catch(err => reject(err));
        }, 1000);
    });
};

const promiseAPI2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Can't fetch the data in second link");
                    }
                    return res.json();
                })
                .then(data => {
                    let data_box = document.createElement("div");
                    data_box.className = "data-box";
                    data.products.forEach(item => {
                        data_box.innerHTML += `
                            <h1>${item.title}</h1>
                            <div class="product-details">
                                <img src="${item.images[0]}" alt="${item.title}" class="product-image">
                                <div class="info">
                                    <p><strong>Description:</strong> ${item.description}</p>
                                    <p><strong>Category:</strong> <span>${item.category}</span></p>
                                    <p><strong>Price:</strong> $<span>${item.price}</span></p>
                                    <p><strong>Discount:</strong> <span>${item.discountPercentage}%</span></p>
                                    <p><strong>Rating:</strong> <span>${item.rating}</span></p>
                                    <p><strong>Stock:</strong> <span>${item.stock}</span></p>
                                    <div class="tags">
                                        <strong>Tags:</strong>
                                        <span class="tag">${item.tags[0]}</span>
                                        <span class="tag">${item.tags[1]}</span>
                                    </div>
                                    <p><strong>Brand:</strong> <span>${item.brand}</span></p>
                                    <p><strong>SKU:</strong> <span>${item.sku}</span></p>
                                    <p><strong>Weight:</strong> <span>${item.weight}</span></p>
                                    <p><strong>Dimensions:</strong> <span>${item.dimensions.width} cm x ${item.dimensions.height} cm x ${item.dimensions.depth} cm</span></p>
                                    <p><strong>Warranty Information:</strong> <span>${item.warrantyInformation}</span></p>
                                    <p><strong>Shipping Information:</strong> <span>${item.shippingInformation}</span></p>
                                    <p><strong>Availability Status:</strong> <span>${item.availabilityStatus}</span></p>
                                    <p><strong>Return Policy:</strong> <span>${item.returnPolicy}</span></p>
                                    <p><strong>Minimum Order Quantity:</strong> <span>${item.minimumOrderQuantity}</span></p>
                                </div>
                            </div>
                            <div class="reviews">
                                <h2>Reviews</h2>
                                <div class="review">
                                    <p><strong>${item.reviews[0].reviewerName}</strong> (Rating: ${item.reviews[0].rating}) - ${item.reviews[0].comment}</p>
                                    <p>Date: <span>${item.reviews[0].date}</span></p>
                                </div>
                                <div class="review">
                                    <p><strong>${item.reviews[1].reviewerName}</strong> (Rating: ${item.reviews[1].rating}) - ${item.reviews[1].comment}</p>
                                    <p>Date: <span>${item.reviews[1].date}</span></p>
                                </div>
                                <div class="review">
                                    <p><strong>${item.reviews[2].reviewerName}</strong> (Rating: ${item.reviews[2].rating}) - ${item.reviews[2].comment}</p>
                                    <p>Date: <span>${item.reviews[2].date}</span></p>
                                </div>
                            </div>
                            <div class="meta">
                                <h2>Additional Information</h2>
                                <p><strong>Barcode:</strong> <span>${item.meta.barcode}</span></p>
                                <p><strong>QR Code:</strong></p>
                                <img src="${item.meta.qrCode}" alt="QR Code" class="qr-code">
                            </div>
                        `;
                    });
                    box.appendChild(data_box);
                    resolve(true);
                })
                .catch(err => reject(err));
        }, 2000);
    });
};

const promiseAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Can't fetch the data in third link");
                    }
                    return res.json();
                })
                .then(data => {
                    let data_box = document.createElement("div");
                    data_box.className = "data-box";
                    data.todos.forEach(item => {
                        data_box.innerHTML += `
                            <div class="todo-details">
                                <h2>Task</h2>
                                <p>${item.todo}</p>
                                <p><strong>Completed:</strong> <span>${item.completed ? 'Yes' : 'No'}</span></p>
                                <p><strong>User ID:</strong> <span>${item.userId}</span></p>
                            </div>
                        `;
                    });
                    box.appendChild(data_box);
                    resolve(true);
                })
                .catch(err => reject(err));
        }, 3000);
    });
};

function displayData() {
    box.innerHTML = '';
    promiseAPI1()
        .then(result => {
            if (result) {
                return promiseAPI2();
            }
        })
        .then(result => {
            if (result) {
                return promiseAPI3();
            }
        })
        .catch(err => {
            console.log(err);
        });
}
