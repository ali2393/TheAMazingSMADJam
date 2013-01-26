#pragma strict
var yDepth : float = 1;
//var consumed : float = 0;
 
function Start () 
{
	//guiText.text = "Helpless Consumed : " + consumed;
}

function Update () 
{
	if (Input.GetKey("w"))
	{
		transform.Translate(Vector3.forward * Time.deltaTime);
	}
	
	if (Input.GetKey("s"))
	{
		transform.Translate(Vector3.forward * Time.deltaTime*-1);
	}
	
	if (Input.GetKey("d"))
	{
		transform.Rotate(transform.up*Time.deltaTime*10);
	}
	else if (Input.GetKey("a"))
	{
		transform.Rotate(transform.up * Time.deltaTime*-10);
	}
	
	transform.position.y= yDepth;;
	
	transform.rotation.x=0;
	transform.rotation.z=0;
	
	transform.Translate(0,0,0);
	
	
	
}
