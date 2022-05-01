const data = [
    {
        id: 1,
        name: "Shred",
        categoryId: 9,
        stock: 12,
        cost: 1480,
        description: "Casco de esqui azul",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/HETTNK18_00_500x.jpg?v=1645109006",
    },
    {
        id: 2,
        name: "Shred 2",
        categoryId: 9,
        stock: 11,
        cost: 1500,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/HESCNK17_00_1648abc3-be72-4a7f-b8f0-b5324d428da1_500x.jpg?v=1645065342",
        
    },
    {
        id: 3,
        name: "Shred 3",
        categoryId: 9,
        stock: 21,
        cost: 2000,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/HETTLJ16_00_500x.jpg?v=1645113567",

    },
    {
        id: 4,
        name: "Shred 4",
        categoryId: 9,
        stock: 2,
        cost: 1900,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/HESCNJ12_00_500x.jpg?v=1645065353",

    },
    {
        id: 5,
        name: "Shred 5",
        categoryId: 8,
        stock: 7,
        cost: 1900,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/1ACy9N7V0RdAYj5RlcxfINHC41SZrA1or_500x.jpg?v=1646755003",

    },
    {
        id: 6,
        name: "Shred 6",
        categoryId: 8,
        stock: 10,
        cost: 1900,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/1259wnmSdD9EZxiUwCSnAPVKX_lp5_AMV_536152d1-bbde-4aed-8578-25f9a8052488_500x.jpg?v=1646732126",

    },
    {
        id: 7,
        name: "Shred 7",
        categoryId: 8,
        stock: 9,
        cost: 1900,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/1-HD5PHiWGyfCBQcyDNAaeJcB5OIFgj_r_500x.jpg?v=1646755221",

    },
    {
        id: 8,
        name: "Shred 8",
        categoryId: 8,
        stock: 22,
        cost: 1900,
        description: "...",
        capacity: 100,
        image:"https://cdn.shopify.com/s/files/1/2375/4447/products/1Z5N-1ezHpKtxg3o46kMr5vFb1q15L9Fh_500x.jpg?v=1646755427",

    },
];
// poner el tiempo de carga
export const getData = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            return resolve(data);
        },)
    })
}