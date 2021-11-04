var btn= document.getElementById("done");
btn.addEventListener("click",AddRow);
var row=1;
function AddRow()
{
  var work=document.getElementById("work").value;
  var time=document.getElementById("time").value;

  if(!work || !time)
  {
    alert("Please fill all boxes!")
    return;
  }
  var mytable= document.getElementById("mytable");
  var newRow= mytable.insertRow(row);
  var cell1= newRow.insertCell(0);
  var cell2= newRow.insertCell(1);

  cell1.innerHTML = time;
  cell2.innerHTML = work;

  row++;
  work.reset();
}
var complete= document.getElementById("complete");
complete.addEventListener("click",alertt);
function alertt()
{
  alert("Good! Take a ScreenShot of your Time Table and follow this. Best Of Luck.")
}
