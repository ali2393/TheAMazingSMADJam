#pragma strict
var yDepth : float = 1;

var step : GameObject;

//var ani:GameObject;

var stepback : GameObject;

var RunSpeed : int = 2;

var RotationalSpeed : int =3;

//var consumed : float = 0;
 
function Start () 
{
	
}

function Update () 
{
	if (Input.GetKey("w"))
	{
		transform.Translate(Vector3.forward * Time.deltaTime * RunSpeed);
		
		//ani.GetComponent.Animation2D.StartAnimation();
		
		if (!step.audio.isPlaying)
		{
			step.audio.Play();
		}
	}
	else
	{
		step.audio.Stop();
	}
	
	if (Input.GetKey("s"))
	{
		transform.Translate(Vector3.forward * Time.deltaTime*-1 * RunSpeed);
		
		
		
		if (!stepback.audio.isPlaying)
		{
			stepback.audio.Play();
		}
	}
	else
	{
		stepback.audio.Stop();
	}
	
	if (Input.GetKey("d"))
	{
		transform.Rotate(transform.up*Time.deltaTime*10 * RotationalSpeed);
	}
	
	if (Input.GetKey("a"))
	{
		transform.Rotate(transform.up * Time.deltaTime*-10 * RotationalSpeed);
	}
	
	//transform.position.y= yDepth;
	
	//transform.rotation.x=0;
	//transform.rotation.z=0;
	
	//transform.Translate(0,0,0);
	
	
	
}
