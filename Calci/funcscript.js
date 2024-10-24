        function add()
        {
            var a=parseInt(document.getElementById("num1").value);
            var b=parseInt(document.getElementById("num2").value);
            var c=a+b;
            document.getElementById("output").innerText="Result: "+c
        }
        function sub()
        {
            var a=parseInt(document.getElementById("num1").value);
            var b=parseInt(document.getElementById("num2").value);
            var c=a-b;
            document.getElementById("output").innerText="Result: "+c
        }
        function mul()
        {
            var a=parseInt(document.getElementById("num1").value);
            var b=parseInt(document.getElementById("num2").value);
            var c=a*b;
            document.getElementById("output").innerText="Result: "+c
        }
        function div()
        {
            var a=parseInt(document.getElementById("num1").value);
            var b=parseInt(document.getElementById("num2").value);
            var c=a/b;
            document.getElementById("output").innerText="Result: "+c
        }
        function kmtom()
        {
            var a=parseFloat(document.getElementById("km").value);
            var res=a*0.62137119
            console.log(res)
            document.getElementById("result").innerText="Result : "+res;
        }
        function phnumval()
        {
            var number=parseInt(document.getElementById("phonenum").value)
            len=number.toString().length
            console.log(len)
            if(len==10)
            {
                document.getElementById("msg").innerText="Valid number !";
            }
            else
            {
                document.getElementById("msg").innerText="Invalid number :/";
            }
        }