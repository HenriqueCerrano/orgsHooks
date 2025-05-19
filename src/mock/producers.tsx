import salad from "../assets/salad.png"
import potager from "../assets/potager.png"
import jennyJack from "../assets/jenny-jack.png"
import grow from "../assets/grow.png"
import green from "../assets/green.png"

const randomResult = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
}

const producers = {
    titile: "Produtores",
    list: [
        {
            name: "Green",
            image: grow,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Grow",
            image: green,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Jenny Jack Farmer",
            image: jennyJack,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Potager",
            image: potager,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },

    ]
}

export default producers;