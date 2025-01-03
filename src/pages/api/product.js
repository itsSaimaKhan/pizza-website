export default function handler(req, res) {
    const products = [
        {
        id: 1,
        name: "Pizza ",
        price: 10,
        image: "/images/proc1.png",
        },
        {
            id: 2,
            name: "Pizza ",
            price: 10,
            image: "/images/proc1.png",
            },
    ];

    res.status(200).json(products);
}