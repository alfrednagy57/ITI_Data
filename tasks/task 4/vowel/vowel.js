


while(true)
{
    let input=prompt("enter the string");
    input=input.toLowerCase();
    if(input!==null)
    {
        let ca=0;
        let ce=0;
        let co=0;
        let cu=0;
        let ci=0;
    //    for(let char of input)
    for(let i=0;i<input.length;i++)
        {
            switch (input[i])//switch(char)
            {
                case 'a':
                    ca=ca+1;
                    break;
                case 'e':
                    ce=ce+1;
                    break; 
                case 'o':
                    co=co+1;
                    break;
                case 'u':
                    cu=cu+1;
                    break;
                case 'i':
                    ci=ci+1;
                    break;      
            }
        }

        alert(`a= ${ca} e= ${ce} o= ${co} u= ${cu} i= ${ci} `);
    }
    break;
}