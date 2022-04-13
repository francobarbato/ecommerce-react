const data = [
    {
        id: 1,
        name: "Shred",
        stock: 120,
        cost: 1480,
        description: "Casco de esqui azul",
        capacity: 100,
        image: {
            url:"https://cdn.shopify.com/s/files/1/2375/4447/products/HETTNK18_00_500x.jpg?v=1645109006",
        }
    },
    {
        id: 2,
        name: "Shred 2",
        stock: 190,
        cost: 1500,
        description: "...",
        capacity: 100,
        image: {
            url:"https://cdn.shopify.com/s/files/1/2375/4447/products/HESCNK17_00_1648abc3-be72-4a7f-b8f0-b5324d428da1_500x.jpg?v=1645065342",
        }
    },
];

export const getData = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            return resolve(data);
        }, 2000)
    })
}