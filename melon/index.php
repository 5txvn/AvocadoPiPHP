<html>

 <head>
 </head>

 <body style="background-color:#8ac926;color:white;">

 <h1 style="text-align:center;">🍉 Melon 🍉</h1>

  <form action="" method="POST">

   <label> Name: 
    <input type="text" name="Name" class="Input" id="name" onkeypress="namefn()" style="width:225px;border-radius:5px;background-color:black;margin:auto;color:white;" required>
    </label>
   <br><br>
   <label> Slice: <br>
    <textarea name="Comment" class="Input" id="slice" onkeypress="slicefn()" style="width:300px;border-radius:5px;background-color:black;color:white;" required></textarea>
   </label>
   <br><br>
   <input type="submit" name="Submit" value="Submit Slice" class="Submit" style="background-color:#ff595e;border-radius:15px;color:white;border-style:none;">

  </form>

 </body>

</html>


<?php
 
 if($_POST['Submit']){
  print "<h2 style='border-radius:5px;border-color:green;border-style:inset;border-width:3px;display:inline-block;'>Your Slice has been submitted! Check it out!</h2>";

  $Name = $_POST['Name'];
  $Comment = $_POST['Comment'];


  #Get old comments
  $old = fopen("comments.txt", "r+t");
  $old_comments = fread($old, 1024);

  #Delete everything, write down new and old comments
  $write = fopen("comments.txt", "w+");
  $string = "<div style='background-color:#ff595e;border-radius:2.5px;'><b>".$Name."</b><br>".$Comment."</div><br>\n".$old_comments;
  fwrite($write, $string);
  fclose($write);
  fclose($old);
 }

 #Read comments
 $read = fopen("comments.txt", "r+t");
 echo "<br><br>Recent Slices<hr>".fread($read, 1024);
 fclose($read);

?>
<script>
    setInterval(function(){window.location.reload()}, 10000);
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("slice").value = localStorage.getItem("slice");
    function namefn() {
        var name = document.getElementById("name").value;
        localStorage.removeItem("name");
        localStorage.setItem("name", name)
    }
    function slicefn() {
        var slice = document.getElementById("slice").value;
        localStorage.removeItem("slice");
        localStorage.setItem("slice", slice)
    }
</script>