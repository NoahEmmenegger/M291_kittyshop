let baseUrl = 'http://localhost:3000/api/';

export function getProducts() {
    fetch(`${baseUrl}/products`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getProduct(id) {
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            name: 'Product 1',
            price: '$100',
            description: 'This is a product description',
            image: 'https://picsum.photos/200/300',
        });
    });
    fetch(`${baseUrl}/products/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
}
