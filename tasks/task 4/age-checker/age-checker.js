 while(true)
{
    let input=prompt("enter you age: ");

    if(input === null||input === "")
    {
        break ;
    }
    input = parseFloat(input);

    if (!isNaN(input) && input > 0) {
        let status;

        if (input>= 1 && input <= 10) {
            status = "Child";
        } else if (input >= 11 && input <= 18) {
            status = "Teenager";
        } else if (input >= 19 && input <= 50) {
            status = "Grown up";
        } else {
            status = "Old";
        }

        let mess=`your status is ${status}`;
        alert(mess);
    } else {
        alert("Please enter a valid positive number for your age.");
    }
}