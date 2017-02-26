var xhr;
function check(){
            var data = {
                "email":document.body.children[2].value.toLowerCase(),
                "pass":document.body.children[3].value
            };
            data = JSON.stringify(data);
            xhr = new XMLHttpRequest();
            xhr.open("POST","http://innovatotech.com/testSignin.php", false);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            //get request w/ no params to get MySQL data
            xhr.onreadystatechange = function(){
                if(xhr.status == 200){
                    var response = JSON.parse(xhr.responseText || "false");
                    if(response){
                        var info = {email: JSON.parse(data).email};
                        info = JSON.stringify(info);
                        location.href = 'topic.html?data='+ info;
                    } else {
                        alert("NOPE");
                    }
                } else {
                    alert(xhr.status);
                }
            };
            xhr.send("data="+data);
}