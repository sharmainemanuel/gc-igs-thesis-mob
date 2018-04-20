var userUrl = "http://localhost/gc-igs-thesis/";
var adminrUrl = "http://localhost/gc-igs-thesis/admin/";
var apiUrl = "http://localhost/gc-igs-thesis/admin/api/";

$(document).ready(function () {
 
    getStudentInfo()
    getBillingDetails()
    getPaymentDetails()
    showStudentInfo()
    showStudentList()
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
function getBillingDetails(){
    var studentno = localStorage.getItem("username");
    $.ajax({
        url: "http://localhost/gc-igs-thesis/admin/api/getBillingById.php?studentno="+studentno+"",
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
        url: "http://localhost/gc-igs-thesis/admin/api/getPaymentDetails.php?studentno="+studentno+"",
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
function showStudentList(){
    var studentno = localStorage.getItem("username");
    $.ajax({
        url: apiUrl+"showStudents.php?",
        dataType: "json",
        success: function (result) {
            var data = "";
            for (i=0; i < result.length; i++){
                console.log(result[i])
data += "<tr>";
           
data += "<td>"+result[i].student_no+"</td>";    
data += "<td>"+result[i].fname+"</td>";
data += "<td>"+result[i].lname+"</td>";
data += "<td>"+result[i].degree+"</td>";
data += "<td>"+result[i].course+"</td>"; 
data += "<td><button class='btn btn-primary'>Add Schedule</button></td>";                
data += "</tr>";
            }
            $('.student-list').append(data);
        },
        error: function (xhr, status, error) {
            alert("status=" + xhr.responseText + ", error=" + status + ", error=" + error);
        }
    });
}

    $('.btnSubmit').click(function(){
        var formValues = $("#form-serialize").serialize();
      //      console.log(formValues)

        var apiUrl = "http://localhost/gc-igs-thesis/admin/api/";
        $.ajax({
            method: "post",
            url: apiUrl+"saveBilling.php",
            data : formValues,
            success: function(result){
             console.log(result)
            },
           error:function (xhr, status, error){
                  alert( "status=" + xhr.responseText + ", error=" + status + ", error=" + error );
              }
          });

    });

    $('.btnSearchStudent').click(function(){
        var apiUrl = "http://localhost/gc-igs-thesis/admin/api/";

        var studentno = $('.txtStudentNo').val()
        $.ajax({
            url: apiUrl+"getStudentById.php?studentno="+studentno+"",
            dataType: "json",
            success: function(result){
                $('.display-student-info').show()
                var data = " ";
                $('.studno').val(result[0].student_no)
              $('.display-student-details').html(result[0].lname +", "+ result[0].fname)
              
              },
           error:function (xhr, status, error){
                  alert( "status=" + xhr.responseText + ", error=" + status + ", error=" + error );
              }
          });
    
    });

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

