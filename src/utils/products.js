const data = [
    {
        id: 1,
        name: "Shred",
        stock: 120,
        cost: 1480,
        description: "Casco de esqui azul",
        capacity: 100,
        image: "./components/imagenes/shred1.jpg",
    },
    {
        id: 2,
        name: "Shred 2",
        stock: 190,
        cost: 1500,
        description: "...",
        capacity: 100,
        image: "...",
    },
];

export const getData = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            return resolve(data);
        }, 2000)
    })
}