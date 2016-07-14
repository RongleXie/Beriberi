document.write("<div id='dzdm'  style='display:none;'>"+dzdm+"</div>");
if(g("Ccode"))
{
  g("Ccode").value = g("dzdm").innerHTML;

}

if(g("ShowAd"))
{
	
g("ShowAd").innerHTML = g("dzdm").innerHTML;
if(document.getElementsByName("ShowAd"))
{
  momoObj = document.getElementsByName("ShowAd");
	
  for(i=0; i<momoObj.length; i++)
  {
    momoObj[i].innerHTML = g("dzdm").innerHTML;
  }
}



document.write("<style><!--");
document.write("#ShowAd{filter:glow(color=#FF0080,strength=2);color:#FFFFFF;font-size:28px;font-family:Arial, Helvetica, sans-serif;width:100%;text-align:center;}");
document.write("--></style>");

}