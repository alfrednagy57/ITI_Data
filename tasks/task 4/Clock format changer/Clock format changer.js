let inputuser=prompt("enter time in 24h");
if( inputuser===0)
{
    alert("12 AM");
}
else if( inputuser>0&&inputuser<=12)
{
    alert(`${inputuser} AM`);
}
else 
{
    inputuser-=12;
    alert(`${inputuser} PM`);
}