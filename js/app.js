var studentsClass = {
    "5ESA": [
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
    "5FSA": [
        "Adinolfi",
        "Barbarino",
        "Borbone",
        "Bucciero",
        "Crisci",
        "d'Aiello M.",
        "d'Aiello P.",
        "d'Angelo",
        "de Lucia",
        "del Monaco",
        "di Rosa",
        "di Nuzzo",
        "Esposito",
        "Ferraro",
        "Santonastaso",
        "Guida M.",
        "Guida R.",
        "Loffredo",
        "Madonna",
        "Pascarella G.",
        "Pascarella I.",
        "Petrillo A.",
        "Petrillo D.",
        "Petrone",
        "Policastro",
        "Rispoli"
    ],
    "2ESA" : [
        "Bencivenga",
        "Bucciero",
        "Cioffi",
        "Corraro ",
        "Del Monaco",
        "della Ventura",
        "di Nuzzo",
        "di Silvestro",
        "Ferrara",
        "Fucci",
        "Vigliotti",
        "Gavidia",
        "Lombardi",
        "Manna",
        "Mannelli",
        "Martinisi",
        "Pagliaro",
        "Piscitelli",
        "Santangelo",
        "Santonastaso",
        "Xu"
        
        
        
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
            $("#student").removeClass("animate__animated animate__heartBeat")
            var that = this;
            var i = 0;
            var students = _.shuffle(studentsClass[that.classNum]);
            var intervalHandler = setInterval(function(){
                that.message = students[i++%students.length];
            }, 100);
            setTimeout(function(){
                clearInterval(intervalHandler);
                that.message = _.sample(students);
                $("#student").addClass("animate__animated animate__heartBeat")
            }, 5000);
            
        }
    }
});
