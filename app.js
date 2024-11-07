//celsius to result
let a = prompt('Enter your result');
a = Number(a);

if ( a>= 80 && a<= 100){
    document.write("GPA : A+");
} else if ( a>= 70 && a<= 79 ){
    document.write("GPA : A");
} else if ( a>= 60 && a <= 69 ){
    document.write("GPA : B");
} else if ( a>=40 && a<=49 ){
    document.write("GPA : C")
}
else if ( a>=33 && a<=39 ){
    document.write("GPA : D")
}
else if ( a>=0 && a<=32 ){
    document.write("GPA : FAILED")
}
else{
    document.write('Invalid')
}



