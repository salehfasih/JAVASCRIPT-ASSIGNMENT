// assignment #1
// alert("Error!Please enter a valid password");
// alert("Welocme to JS Land...\n Happy coding");
// alert("Welocme to JS Land");
// alert("Hello... I can run JS through my web browser's console");
// // assignment #2
// var username;
// var myName="sualeh muhammad fasih";
// var messege="hello world";
// var Age=15;
// var course="certified mobile application Development";
// alert(myName);
// alert(Age);
// alert(course);
// var email="sualehfseeh123@gmail.com";
// alert("My email address is"+" "+email);
// var book="A smarter way to learn javascript";
// alert("I am trying to learn from the book"+" " +book);
// var ptrn="PIZZ
// alert("PIZZA"+"\n"+"PIZZ"+"\n"+"PIZ"+"\n"+"PI"+"\n"+"P");
// document.write("Yah! I can write HTML content through javascript");
// // assignment #3
// var age="20";
// alert(" I am "+age+" "+"years old");
// var  times=15;
// alert("you have visited this site"+" "+times+" "+"times");
// var birthYear="2000";
// document.write("<br>");
// document.write("My birth year is"+birthYear+"<br>"+"Data type of my declared variable is number");
var visitor_name="sualeh muhammad fasih";
product_title="T-shirt";
quantity="10";
document.write("<br>"+visitor_name+"ordered"+" "+ quantity+" " +product_title +" "+"on imtiaz super market"+"<br>");
// assign#5
var a=10;
var b=20;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a % b;
document.write("the sum of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c+"<br>");
document.write("the subtraction of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+d+"<br>");
document.write("the multiplication of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+e+"<br>");
document.write("the division of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+f+"<br>");
document.write("the modulus of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+g+"<br>");
var faa;
document.write("Value after variable declaration is: ?? <br>");
var faa=5;

document.write("Initial value:"+faa+"<br>");
faa+=1;
document.write("Value after increment is :"+faa+"<br>");
faa+=7;
document.write("Value after addition is:"+faa+"<br>");
faa-=1;
document.write("Value after decrement is:"+faa+"<br>");
faa=faa%3;
document.write(" The remainder is :  "+faa+"<br>");
var ticket=600;
var costPrice=ticket*5;
document.write("Total cost to buy "+" "+"5 ticket to a movie "+" "+"is"+costPrice+"PKR"+"<br>");
// table#;
for(var i=1; i<=10; i++ ){
    document.write("2"+"x"+i+"="+2*i);
    document.write("<br>");
}
// temp convert;
var cels=100;
var farn=38;
var cvnfan=(cels*9/5)+32;
var cvncels=(farn-32)*5/9;
document.write(cels+"'C"+"is"+" "+cvnfan+"'F"+"<br>");
document.write(farn+"'F"+"is"+" "+cvncels+"'C"+"<br>");
// shopping cart system for an e-commerce website
var item1=300;
var item2=800;
var qny1=2;
var qny2=10;
var chges=200;
document.write("Price of item 1 is"+item1+"<br>");
document.write("quantity of item 1 is"+qny1+"<br>");
document.write("Price of item 2 is"+item2+"<br>");
document.write("Quantity of item 2 is"+qny2+"<br>");
document.write("Shipping charges is"+chges+"<br>");
// marksheet
var Total=980;
var obtained=809;
var perc=(obtained/Total)*100;
document.write("Tota Marks:"+Total+"<br>");
document.write("Marks obtained:"+obtained+"<br>");
document.write("percentage:"+perc+"<br>");
// currency converter
var us=1;
var riyal=25;
// conv dollar in to rupees;
var cvndol=us*154;
// covn riyal in to rupees;
var cvnriyal=riyal*28;
document.write("1 US Dollar ="+" "+cvndol+"Pakistani Rupee"+"<br>");
document.write("25 Saudi Riyal ="+" "+cvnriyal+"Pakistani Rupee"+"<br>");
var num=(2+5*10)/2;
document.write("the result of the expression is"+" "+num+"<br>");
// age calculate;
var cyear=2020;
var birthYear=2000;
var age=cyear-birthYear;
document.write("current year:"+""+cyear+"<br>");
document.write("birth year:"+""+birthYear+"<br>");
document.write("Your age is:"+age+"<br>");
// area of circle;
var radius=8;
var circum=2*3.142*radius;
var area=3.142*radius*radius;
document.write("Radius of circle:"+radius+"<br>");
document.write("The circumference of the circle is:"+circum+"<br>");
document.write("The area is:"+area+"<br>");
//The Lifetime Supply Calculator
var snack="lays";
var age=20;
var maximum_age=66;
document.write("favourite snack :"+snack+"<br>");
document.write("current age:"+age+"<br>");
document.write("estimated maximum age:"+maximum_age+"<br>");
// assign#6
var a=10;
document.write("The value of a is:"+a+"<br>");
document.write("................................."+"<br>");
a=++a;
document.write("The value of ++a is:"+a+"<br>");
document.write("The value of a is:"+a+"<br>");
a=a++;
document.write("The value of a++ is:"+a+"<br>");
document.write("The value of   a is:"+a+"<br>");
var a=--a;
document.write("The value of --a is:"+a+"<br>");
document.write("The value of a is:"+a+"<br>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is"+a+"<br>");
document.write(" b is"+b+"<br>");
document.write("result is"+result+"<br>");
// display it’s multiplication table on your browser.
var table=prompt("enter table number");
    for(var i=1; i<=10; i++ ){
        if(table>0){
        document.write(table+"x"+i+"="+table*i);
        document.write("<br>");}
        else{
            document.write(5+"x"+i+"="+5*i);
            document.write("<br>");}

        }
        // calculate total marks and percentage
        var eng=parseInt(prompt("enter english marks"));
        var math=parseInt(prompt("enter math marks"));
        var urdu=parseInt(prompt("enter urdu marks"));
        var all=parseInt(eng+math+urdu);
        var perc=(all/300)*100;
        document.write("<b>subject Total marks obtained marks percentage"+"<br>");
        document.write("English        100             "+eng+"     "+eng+"%"+"<br>");
        document.write("math           100             "+math+"     "+math+"%"+"<br>");
        document.write("urdu        100             "+urdu+"     "+urdu+"%"+"<br>");
        document.write(" 300"+" "+all+ " "+perc+"%"+"<br>");



    

// Assignment # 9-10
// “city” name as input from user
var city=prompt("enter city name");
if(city==="karachi"){
    document.write("“Welcome to city of lights"+"<br>");


}
var gender=prompt("enter gender");
if(gender==="male"){
    document.write("Good Morning Sir"+"<br>");

}
else{
    document.write("Good Morning Ma’am"+"<br>");

}
// road traffic signal
var lal=prompt("enter signal color");
var green=prompt("enter signal  color");
var yello=prompt("enter signal  color");
document.write("<table><tr><td>Signal color"+" "+"Message</td></tr></table>"+"<br>");
document.write("<td>Red"+" "+"Must Stop</td>"+"<br>"+"Yellow"+""+"Ready to move"+"<br>"+"Green"+" "+"Move now");
// a program to take input remaining fuel in car
var fuel=prompt("enter remaining fuel in litre");
if(fuel===0.25){
    document.write("Please refill the fuel in your car");

}
// check whether alert message

// total marks, marks obtained, percentage, grade
      document.write("total marks:"+" " +"300"+"<br>");
      document.write("marks obtained:"+" "+all+"<br>");
      document.write("percentage:"+perc+"%"+"<br>");
      if(perc<=100 && perc==80 ){
          document.write("grade:A-one"+"<br>");
      }
      if(perc<80 && perc==70){
          document.write("grade:A"+"<br>")
          
      }
      if(perc< 70 && perc==60){
        document.write("grade:B"+"<br>")
        
    }
    if(perc<60 && perc==50){
        document.write("grade:C"+"<br>")
        
    }
    if(perc<50 && perc==40){
        document.write("grade:D"+"<br>")
        
    }
    else{
        document.write("fail"+"<br>");
    }
    // Guess game
    var sec=2;
    var guess=prompt("guess the secret number."+"<br>");
    if(guess==sec){
        document.write("Bingo! Correct answer"+"<br>")
    }
    if(guess==sec+1){
        document.write("Close enough to the correct answer"+"<br>");

    }
    // divisible by 3
    var divisible=prompt("given number");
    if((divisible%3)==0){
        document.write("your number is divisible by 3"+"<br>");
    }
// temperature update
var temp=prompt("enter temperature"+"<br>");
if(temp>40){
    document.write("It is too hot outside."+"<br>");

}
if(temp>30 && temp<40){
    document.write(" The Weather today is Normal."+"<br>");

}
if(temp>20 && temp<=30){
    document.write("Today’s Weather is cool.");

}
if(temp>10 && temp<=20){
    document.write("OMG! Today’s weather is so Cool"+"<br>");

}
// calculator
var firstnumber=parseInt(prompt("enter first number"));
var secondnumber=parseInt(prompt("enter 2nd number"));
var oper=parseInt(prompt("enter operator"));
if(oper=="+"){
    var a=firstnumber+secondnumber;
    alert(a+"<br>");
}
if(oper=="-"){
    var a=firstnumber-secondnumber;
    alert(a+"<br>");

}
if(oper=="*"){
    var a=firstnumber*secondnumber;
    alert(a+"<br>");
}
if(oper=="/"){
    var a=firstnumber/secondnumber;
  
    alert(a+"<br>");
}
// Assignment # 13-15
var qualific=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write('Qualifications'+"<br>");
for(var i=0; i<qualific.length; i++){

document.write(qualific[i]+"<br>");
}
// the scores & percentages of students
var names=["micahel","john","Tony"];
var scores=[320,230,480];
for(var i=0; i<scores.length; i++){
    var p=(scores[i]/500)*100;
    document.write("score of"+" "+names[i]+""+"is"+scores[i]+" "+"percentages:"+""+p+"%"+"<br>");

}
// color names
var color=["red","orange","yellow","black","voilet"];
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"));

for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.push(prompt("enter a  color that you wnat to add at the end"));

for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"),prompt("enter a  color that you wnat to add at the begining"));
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.shift();
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
// ascending order using Array’s sort method.
var sc=[210,232,333,320,290];
for(var i=0; i<sc.length; i++){
    document.write("scores of student"+sc[i]+",");
}
document.write("<br>");
// an array with city names
var cities=["karachi","islamabad","quetta","lahore"];
document.write("Cities  list"+"<br>");
for(var i=0; i<cities.length; i++){
    document.write(cities[i]+",");

}
var arr = ["This",  "is ", " my ", " cat"];
document.write("<br>");
for(i=0; i<arr.length; i++){
    document.write(arr[i]+" ");
}
document.write("<br>");

// (FIFO-First In First Out)
var comp=["keyboard","mouse","monitor","printer"];
document.write("Devices");
document.write("<br>");

for(var i=0; i<comp.length; i++){
    document.write(comp[i]+",");
    

}
document.write("<br>")
for(var i=0; i<comp.length; i++){
    document.write("<br>"+"out:"+"<br>"+comp[i]);
    

}

// Assignment # 17-20
for(i=0; i<=10; i++){
    document.write("<br>"+i+"<br>");
}
var mul=prompt("table number");
var len=prompt("table lenght");
for(var i=1; i<=len; i++ ){
    document.write(mul+"x"+i+"="+2*i);
}
document.write("<br>");
var fruits= ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0; i<fruits.length; i++){
    document.write("element at index"+i+" "+fruits[i]+"<br>");

}
// Counting
for(var i=0; i<=15; i++){
    document.write(i+",");
}
document.write("<br>");
// Reverse counting
for(var i=10; i>0; i--){
    document.write(i+",");


}
document.write("<br>");
// even
for(var i=0; i<=20; i=i+2){
    document.write(i+ " ,");
}
document.write("<br>");
// Odd
for(var i=1; i<20; i=i+2){
    document.write(i+",");

}
document.write("<br>");
//  Series
for(var i=2; i<=20; i=i+2){
    document.write(i+"k"+",");
}
document.write("<br>");
// Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item=prompt("enter your item");
for(var i=0; i<A.length; i++){
    if(item==A[i]){
        alert(item+" "+"is available at index"+i+" "+"in your bakery");
        

    }
    else{
        alert("we are sorry"+" "+item+" is not available in your bakery");


    }
}
// 8. Write a program to identify the largest number in the
var   A= [24, 53, 78, 91, 12];
for(var i=0; i<A.length; i++){
    document.write(A[i]+" ");}
for(var i=0; i<A.length; i++){

    document.write(A[i]);
}

document.write("<br>");
for(var i=5; i<=100; i=i+5){
    document.write(i+" ");
}
document.write("<br>");