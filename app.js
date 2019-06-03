const car = (name, image, year, owl, tel) => ({
        name, image, year, owl, tel
    }
)
const  cars = [
    car('Auto','image/1.jpg', 1986, 'Max',  '+38 012 345 67 89'),
    car('Moto','image/7.jpg', 1977, 'Vova',  '+38 012 123 45 46'),
    car('Truck','image/12.jpg', 2009, 'Nelli',  '+38 012 021 03 04')
]
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectCarIndex: 0,
        search: ''
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index]
            this.selectCarIndex = index
        }
    },
    computed: {
    filteredCars(){ 
      return this.cars.filter(car => {
          return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 
      })
    }
  }
})
/*var mas = (
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
    "image/8.jpg",
    "image/9.jpg",
    "image/10.jpg",
    "image/11.jpg",
    "image/12.jpg"
 ); 
function smena(){
   var r = Math.floor(Math.random()*mas.length);
   document.getElementById("myimg").src = mas[r];
}*/
const myimg = new Vue({
    el: '#myimg',
    data: {
      images: [
        "image/1.jpg",
        "image/2.jpg",
        "image/3.jpg",
        "image/4.jpg",
        "image/5.jpg",
        "image/6.jpg",
        "image/7.jpg",
        "image/8.jpg",
        "image/9.jpg",
        "image/10.jpg",
        "image/11.jpg",
        "image/12.jpg"
      ],
      selectedImage: ''
    },
    created () {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx]
    }

  });