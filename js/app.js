var userUrl = "http://localhost/gc-igs-thesis/";
var adminrUrl = "http://localhost/gc-igs-thesis/admin/";
var apiUrl = "http://localhost/gc-igs-thesis-mob/gc-igs-thesis-mob/admin/api/";

$(document).ready(function () {
 
    getStudentInfo()
    //getPaymentDetails()
    showStudentInfo()
 
});

function getStudentInfo(){
    var studentno = localStorage.getItem("username");
    $.ajax({
        url: "http://localhost/gc-igs-thesis/admin/api/getStudentById.php?studentno=" + studentno + "",
        dataType: "json",
        success: function (result) {
            for (i=0; i < result.length; i++){
                $('.profile-usertitle-name').html(result[i].fname + " " + result[i].lname)
            }

        },
        error: function (xhr, status, error) {
            alert("status=" + xhr.responseText + ", error=" + status + ", error=" + error);
        }
    });
}
function getBillingDetails(snum){
    var studentno;
   
        studentno = snum != undefined ? localStorage.getItem("username") : snum; 
console.log(snum)
        $.ajax({
        url: "api/getBillingById.php?studentno="+studentno+"",
        dataType: "json",
        success: function(result){
            var data = " ";
            var dec = ".00";
            for (i=0; i < result.length; i++){
                $('.td-tuition').html(result[0].tuition_fee +dec)
                $('.td-lab').html(result[0].lab_fee +dec)
                $('.td-lab').html(result[0].registration_fee +dec)

            }
           
          },
       error:function (xhr, status, error){
              alert( "status=" + xhr.responseText + ", error=" + status + ", error=" + error );
          }
      });


}
function getPaymentDetails(){
    var studentno = localStorage.getItem("username");
    $.ajax({
        url: "api/getPaymentDetails.php?studentno="+studentno+"",
        dataType: "json",
        success: function(result){
            var data = " ";
            var dec = ".00";
            for (i=0; i < result.length; i++){
                $('.td-orno').html(result[0].or_no )
                $('.td-amountpaid').html(result[0].amount +dec)
          

            }
           
          },
       error:function (xhr, status, error){
              alert( "status=" + xhr.responseText + ", error=" + status + ", error=" + error );
          }
      });


}
function showStudentInfo(){
    $('.display-student-info').hide()
    
}





    $('.btn-login').click(function(){
        //alert($('.user').val())
        var username = $('.user').val();
        var adminuser = $('.adminuser').val();
        localStorage.setItem("adminuser",adminuser)
        localStorage.setItem("username",username)
        location.href = 'home.html'
    });
 
		
    $('#btnsubmit').click(function(){
        var user = $('#userkey').val();
        var pass = $('#passkey').val();
        $.ajax({
          url: "http://tech-assist.deped-olongapo.com/api/login.php?username="+user+"&password="+pass,
           // url: "api/login.php?username="+user+"&password="+pass,
            success: function(result){
                if(result == "qwertysuccess"){
                    alert("Greetings "+user);
                    location.href = 'home.html';
                    console.log(result);
                }
                else{
                    alert("Invalid credentials");    
                }
            },
         error:function (xhr, status, error){
                alert( "status=" + xhr.responseText + ", error=" + status + ", error=" + error );
                //location.href = 'home.html'; 
            }
        });
    });

