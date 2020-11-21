var studentsClass = {
    "4ESA": [
        "Coppola 02",
        "Coppola 03",
        "De Simone",
        "della Valle",
        "Diop",
        "Fruggiero",
        "Gagliardi",
        "Garofalo",
        "Guida",
        "Mormile",
        "Pellegrino",
        "Perrotta",
        "Sacco",
        "Santonastaso",
        "Ventrone",
        "Vigliotti",
        "Vinciguerra",
    ],
    "4ITI" : [
        "Caiazzo",
        "Coppola",
        "Crisci",
        "D'Aiello ",
        "De Rosa",
        "Ercolano",
        "Benito Farina",
        "Michele Farina ",
        "Merola",
        "Sebastopoli",
        "Vigliotti",
        "Vittoria"
    ],
    "5ITI" : [
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
    
}
var app = new Vue({
    el: '#app',
    data: {
      message: 'Pronti?',
      classNum: "4ESA"
    },
    methods:{
        pickStudents: function(){
            var that = this;
            var i = 0;
            var students = studentsClass[that.classNum];
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
