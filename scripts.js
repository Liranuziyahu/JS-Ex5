//1. כתבו תוכנית (מושג חדש - זה אומר 'תכתבו קוד') אשר מגדירה 2 מספרים ומדפיסה לדפדפן את הגדול מביניהם 
document.write("<<<<<<< This is Ex 1 >>>>>>>");
let num_first=1;
let num_sec=1;

if(num_first>num_sec )
{
    document.write("the higher number is: " + num_first);
}
else if(num_first < num_sec){

    document.write("the higher number is: " + num_sec);
}
else{
    document.write("the two numbers are equal");
}

//2. כתבו תוכנית אשר מקבלת 3 מספרים מעורבים (הכוונה גם שליליים וגם חיוביים), סוכמת אותם, ומדפיסה למסך מה הוא הסימן של התוצאה. למשל, אם חיברנו את 3-, 3, ו2, נדפיס למסך 'הסימן הוא +'. יש לתקל את כלל המצבים
document.write("<br>");
document.write("<<<<<<< This is Ex 2 >>>>>>>");
 num_first=3;
 num_sec=1;
 let num_three=-2;
 let sum_numbers=num_first+num_sec+num_three;


 if(sum_numbers>0)
 {
     document.write("The answer is : +");
 }
 else if (sum_numbers<0)
 {
    document.write("The answer is : -");
 }
 else{
    document.write("The answer is : 0");
 }

 //3. כתבו תוכנית אשר מקבלת 3 מספריםבתוך מערך, ומסדרת אותם לתוך מערך חדש, ומדפיסה למסך את המערך החדש והמסודר. למשל, המערך הראשוני הוא arr = [1,9,3], התוכנית שלכם צריכה להדפיס את המערך בסדר עולה, 1,3,9
 document.write("<br>");
 document.write("<<<<<<< This is Ex 3 >>>>>>>" );
 let MyArr=[230,22,51];
let NewArr=[];

if(MyArr[0]>MyArr[1]&&MyArr[0]>MyArr[2])
{
    if(MyArr[1]>MyArr[2])
    {
        NewArr[0]=MyArr[2];
        NewArr[1]=MyArr[1];
        NewArr[2]=MyArr[0];
        
    }
    else 
    {
        NewArr[0]=MyArr[1];
        NewArr[1]=MyArr[2];
        NewArr[2]=MyArr[0];
     
    }
}
else if(MyArr[1]>MyArr[0] && MyArr[1]>MyArr[2])
{
 if(MyArr[0]>MyArr[2]) 
{
    NewArr[0]=MyArr[2];
    NewArr[1]=MyArr[0];
    NewArr[2]=MyArr[1];
}
else
{
    NewArr[0]=MyArr[0];
    NewArr[1]=MyArr[2];
    NewArr[2]=MyArr[1];
}
}
else
{
if(MyArr[1]>MyArr[0])
{
    NewArr=MyArr;
}
else
{
    NewArr[0]=MyArr[1];
    NewArr[1]=MyArr[0];
    NewArr[2]=MyArr[2];
}
}
document.write(NewArr);

//4. הגדירו מערך בעל 5 איברים (כלומר 5 מספרים), אשר עובר על כלל האיברים ומדפיס לדפדפן את המספר הגדול מביניהם.
document.write("<br>");
document.write("<<<<<<< This is Ex 4 >>>>>>>" )
myArr=[12,12,15,15,15];
let Arrnum;

if(myArr[0]>myArr[1] && myArr[0]>myArr[2] && myArr[0]>myArr[3] && myArr[0]>myArr[4])
{
    Arrnum=myArr[0];
}
else if(myArr[1]>myArr[0] && myArr[1]>myArr[2] && myArr[1]>myArr[3] && myArr[1]>myArr[4])
{
    Arrnum=myArr[1];

}
else if(myArr[2]>myArr[0] && myArr[2]>myArr[1] && myArr[2]>myArr[3] && myArr[2]>myArr[4])
{
    Arrnum=myArr[2];
}
else if(myArr[3]>myArr[0] && myArr[3]>myArr[1] && myArr[3]>myArr[2] && myArr[3]>myArr[4])
{
    Arrnum=myArr[3];
}
else
{
    Arrnum=myArr[4];
}
document.write("The heighest number is:"+Arrnum);

//5. הגדירו מערך בעל 5 איברים, אשר עובר על כלל האיברים ומדפיס למסך האם המספר הוא זוגי או אי זוגי
document.write("<br>");
document.write("<<<<<<< This is Ex 5 >>>>>>>" )
myArr=[12,12,15,8,7];
document.write("<br>");
if(myArr[0]%2==0)
{
    document.write(" this is a Evan number: " + myArr[0]+ "<br>");
}
else
{
    document.write(" this is a Odd number: " + myArr[0]+ "<br>");
}
if(myArr[1]%2==0)
{
    document.write(" this is a Evan number: " + myArr[1] + "<br>");
}
else
{
    document.write(" this is a Odd number: " + myArr[1]+ "<br>");
}

if(myArr[2]%2==0)
{
    document.write(" this is a Evan number: " + myArr[2]+ "<br>");
}
else
{
    document.write(" this is a Odd number: " + myArr[2]+ "<br>");
};
if(myArr[3]%2==0)
{
    document.write(" this is a Evan number: " + myArr[3]+ "<br>");
}
else
{
    document.write(" this is a Odd number: " + myArr[3]+ "<br>");
}
if(myArr[4]%2==0)
{
    document.write(" this is a Evan number: " + myArr[4]+ "<br>");
}
else
{
    document.write(" this is a Odd number: " + myArr[4]);
}
