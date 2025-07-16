const shopData = [
    {
        id: 1,
        title: "Bergkristall Trommelstein",
        description:"Der Bergkristall fördert Klarheit in Gedanken und Gefühlen",
        price: 5,
        image: "/images/BergkristallRoh.JPEG",
        categ: "Bergkristall"
    },
    {
        id: 2,
        title: "Bergkristall Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/BergkristallSpitze.JPEG",
        categ: "Bergkristall"
    },
    {
        id: 3,
        title: "Bergkristall Spitze / Klein",
        description:"Description for Product 3",
        price: 49.99,
        image: "/images/BergkristallTs.JPEG",
        categ: "Bergkristall"
    },
    {
        id: 3,
        title: "Bergkristall Spitze / Groß",
        description:"Description for Product 3",
        price: 49.99,
        image: "/images/BergkristallTs.JPEG",
        categ: "Bergkristall"
    },
     {
        id: 4,
        title: "Bergkristall Stufe",
        description:"Description for Product 1",
        price: 29.99,
        image: "/images/product1.jpg",
        categ: "Bergkristall"
    },
    {
        id: 5,
        title: "Bergkristall Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Bergkristall"
    },
     {
        id: 6,
        title: "Rosenquarz Trommelstein",
        description:"Description for Product 1",
        price: 29.99,
        image: "/images/product1.jpg",
        categ: "Rosenquarz"
    },
    {
        id: 7,
        title: "Rosenquarz Rohstein / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rosenquarz"
    },
    {
        id: 8,
        title: "Rosenquarz Rohstein / Groß ",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rosenquarz"
    },
    {
        id: 9,
        title: "Rosenquarz Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rosenquarz"
    },
    {
        id: 10,
        title: "Rosenquarz Halskette",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rosenquarz"
    },
    {
        id: 11,
        title: "Amethyst Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },
    {
        id: 12,
        title: "Amethyst Druse / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },
    {
        id: 13,
        title: "Amethyst Druse / Groß",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },{
        id: 14,
        title: "Amethyst Spitze",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },
    {
        id: 15,
        title: "Amethyst Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },
    {
        id: 16,
        title: "Amethyst Halskette",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Amethyst"
    },
    {
        id: 17,
        title: "Citrin Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Citrin"
    },
    {
        id: 18,
        title: "Citrin Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Citrin"
    },
    {
        id: 19,
        title: "Citrin Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Citrin"
    },
    {
        id: 20,
        title: "Citrin Halskette",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Citrin"
    },
    {
        id: 21,
        title: "Orangencalcit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Orangencalcit"
    },
    {
        id: 22,
        title: "Orangencalcit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Orangencalcit"
    },
    {
        id: 23,
        title: "Karneol Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Karneol"
    },
    {
        id: 24,
        title: "Karneol Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Karneol"
    },
    {
        id: 25,
        title: "Karneol Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Karneol"
    },
    {
        id: 26,
        title: "Mondstein Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Mondstein"
    },
    {
        id: 27,
        title: "Mondstein Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Mondstein"
    },
    {
        id: 28,
        title: "Mondstein Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Mondstein"
    },
     {
        id: 29,
        title: "Selenit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Selenit"
    },
     {
        id: 30,
        title: "Selenit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Selenit"
    },
     {
        id: 31,
        title: "Selenit Kugel",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Selenit"
    },
     {
        id: 32,
        title: "Selenit Stab",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Selenit"
    },
     {
        id: 33,
        title: "Aquamarin Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aquamarin"
    },
     {
        id: 34,
        title: "Aquamarin Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aquamarin"
    },
     {
        id: 35,
        title: "Aquamarin Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aquamarin"
    },
     {
        id: 36,
        title: "Aquamarin Halskette",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aquamarin"
    },
     {
        id: 37,
        title: "Regenbogenfluorit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Regenbogenfluorit"
    },
     {
        id: 38,
        title: "Regenbogenfluorit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Regenbogenfluorit"
    },
     {
        id: 39,
        title: "Regenbogenfluorit Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Regenbogenfluorit"
    },
     {
        id: 40,
        title: "Grüner Fluorit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Grüner Fluorit"
    },
     {
        id: 41,
        title: "Grüner Fluorit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Grüner Fluorit"
    },
     {
        id: 42,
        title: "Aventurin Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aventurin"
    },
     {
        id: 43,
        title: "Aventurin Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aventurin"
    },
     {
        id: 44,
        title: "Aventurin Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Aventurin"
    },
     {
        id: 45,
        title: "Malachit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Malachit"
    },
     {
        id: 46,
        title: "Malachit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Malachit"
    },
     {
        id: 47,
        title: "Malachit Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Malachit"
    },
     {
        id: 48,
        title: "Malachit Halskette",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Malachit"
    },
     {
        id: 49,
        title: "Roter Jaspis Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Jaspis"
    },
     {
        id: 50,
        title: "Algen Jaspis Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Jaspis"
    },
     {
        id: 51,
        title: "Labradorit Trommelstein / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Labradorit"
    },
     {
        id: 52,
        title: "Labradorit Trommelstein / Groß",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Labradorit"
    },
     {
        id: 53,
        title: "Labradorit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Labradorit"
    },
     {
        id: 54,
        title: "Labradorit Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Labradorit"
    },
     {
        id: 55,
        title: "Labradorit Halskette ",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Labradorit"
    },
     {
        id: 56,
        title: "Rauchquarz Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rauchquarz"
    },
     {
        id: 57,
        title: "Rauchquarz Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rauchquarz"
    },
     {
        id: 58,
        title: "Rauchquarz Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Rauchquarz"
    },
     {
        id: 59,
        title: "Pyrit Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Pyrit"
    },
     {
        id: 60,
        title: "Pyrit Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Pyrit"
    },
     {
        id: 61,
        title: "Tigerauge Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Tigerauge"
    },
     {
        id: 62,
        title: "Tigerauge Rohstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Tigerauge"
    },
     {
        id: 63,
        title: "Tigerauge Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Tigerauge"
    },
     {
        id: 64,
        title: "Schwarzer Turmalin Trommelstein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Schwarzer Turmalin"
    },
     {
        id: 65,
        title: "Schwarzer Turmalin Rohstein / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Schwarzer Turmalin"
    },
     {
        id: 66,
        title: "Schwarzer Turmalin / Groß",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Schwarzer Turmalin"
    },
    {
        id: 67,
        title: "Schwarzer Turmalin Armband",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Schwarzer Turmalin"
    },
    {
        id: 68,
        title: "Achatscheibe  mit Bergkristall Blau / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Achatscheibe mit Bergkristall"
    },
    {
        id: 69,
        title: "Achatscheibe mit Bergkristall Blau / Groß",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Achatscheibe mit Bergkristall"
    },
    {
        id: 70,
        title: "Achatscheibe mit Bergkristall Pink / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Achatscheibe mit Bergkristall"
    },
    {
        id: 71,
        title: "Achatscheibe mit Bergkristall Pink / Groß",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Achatscheibe mit Bergkristall"
    },
    {
        id: 72,
        title: "Achatscheibe mit Bergkristall Grün / Klein",
        description:"Description for Product 2",
        price: 39.99,
        image: "/images/product2.jpg",
        categ: "Achatscheibe mit Bergkristall"
    },
    
]

export default shopData;
