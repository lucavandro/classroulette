var studentsClass = {
    3 : [
        "Caiazzo",
        "Coppola",
        "D'Aiello ",
        "De Rosa",
        "Ercolano",
        "Benito Farina",
        "Michele Farina ",
        "Antonio Merola",
        "Sebastopoli",
        "Vigliotti",
        "Vittoria"
    ],
    4 : [
        "Della Valle",
        "Desiato",
        "De Simone",
        "Fusco",
        "Passariello",
        "Pascarella",
        "Petito",
        "Quagliero",
        "Sagnelli",
        "Varvo"
    ],
    5 : [
        "Amato",
        "Bove",
        "Caiazzo",
        "Carfora",
        "Franceschetti",
        "Gazzillo",
        "Laudato",
        "Liccardi",
        "Loffredo",
        "Madonna",
        "Nuzzo",
        "Papa",
        "Rivetti",
        "Zarrillo"
    ]
}
var app = new Vue({
    el: '#app',
    data: {
      message: 'Pronti?',
      classNum: 5
    },
    methods:{
        pickStudents: function(){
            var that = this;
            var i = 0;
            var students = _.shuffle(studentsClass[that.classNum]);
            var intervalHandler = setInterval(function(){
                that.message = students[i++%students.length];
            }, 100);
            setTimeout(function(){
                clearInterval(intervalHandler);
                that.message = _.sample(students);
            }, 5000);
            
        }
    }
});