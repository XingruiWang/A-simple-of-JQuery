// Book.js
// --------------------------------------------------------
// book: a function to send JQuery directly.
// bookClick: a function to book by interface operation.
// --------------------------------------------------------


function book(id, mobile){
    message = ""
    jQuery.ajax({
    url:'/api.php/activities/'+ id +'/application2?mobile='+ mobile,
    type:'GET',
    dateType:'json',
    data:{'id':id},
    complete: function(xhr, textStatus) {},
    success: function(data, textStatus, xhr) {
        var rooms = data;
        if(data.status){
            // alertDialog(data.msg,'success');
            message = data.msg
            // setTimeout(function () { window.location.reload(); }, 3000);
        }
        // console.log(rooms);
        //var leng = childdata.length;
        console.log(data.msg);
        },
    error: function(xhr, textStatus, errorThrown) {
        //called when there is an error
        alertDialog('网络错误，请重试','error');
        //window.location.reload();
        }
    })
}

function bookClick(){
    document.getElementById("signUp").click();
    document.activeElement.click();    
}

