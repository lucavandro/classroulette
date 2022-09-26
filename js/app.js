var studentsClass = {
    
    "5ASA":[
        "BAIA",
        "BOVE F",
        "BOVE L",
        "CALVANESE",
        "CIRMA",
        "CITO",
        "COLELLA",
        "D'ANGELO",
        "INVERNO",
        "MALIGNO",
        "MARTONE G",
        "MARTONE M",
        "MASI",
        "MIRETTO",
        "PASSARIELLO",
        "PATRELLI",
        "PECCHILLO",
        "PRISCO",
        "RICCIARDI",
        "SCAMPERTI",
        "SOLLITTO",
        "VINCIGUERRA"
    ],
    "2ASA":[
        "CARFORA",
    "COMOTTI",
    "d'AIELLO",
    "d'ALESSANDRO",
    "DI VICO",
    "DRAGONE",
    "FEPPO",
    "GIOIELLA",
    "GRIECO",
    "GUERRA",
    "GUIDA",
    "IANNIELLO",
    "IGNARRA",
    "LIBERTI",
    "LOFFREDO",
    "MICCO",
    "PIROZZI",
    "PISCITELLI",
    "PLACIDO",
    "ROPERTI",
    "SANTONASTASO",
    "SIVIERO",
    "SOLARO",
    "UGHETTO"
    ],
    "1ESA":[
        "Alabis",
        "Bernardo",
        "Biondo",
        "Caprio",
        "Cicchella",
        "Cioffi",
        "d'Angelo",
        "de Chiara",
        "de Lucia L.",
        "de Lucia S.",
        "del Giudice",
        "del Prete",
        "Ferraro",
        "Grieco",
        "Guida",
        "Mastroianni",
        "Mataluna", 
        "Merola",
        "Nappo",
        "Pascarella",
        "Santacroce",
        "Scarano",
        "Ventrone"
        
    ],
    
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
        
        
        
    ]
    
}
var app = new Vue({
    el: '#app',
    data: {
      message: 'Pronti?',
      classNum: Object.keys(studentsClass)[0],
      classes: Object.fromEntries(Object.keys(studentsClass).map(x=>[x,x]))
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
    },
  
});
