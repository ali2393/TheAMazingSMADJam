#pragma strict
var consumed : float = 0;

var pHealth :Health;

var lHealth :Change_Colour;

function Start () 
{
	pHealth=GetComponent("Health");
	lHealth=GameObject.Find("Spotlight").GetComponent("Change_Colour");
}

function Update () 
{
}

function OnTriggerEnter (other : Collider) 
{
    if (other.gameObject.tag == "Food")
    {
   		Destroy(other.gameObject);
   		consumed ++;  
   		pHealth.Heal();
   		lHealth.Heal();
    }
}	

function OnGUI () 
{
    GUI.Label (Rect (0, 30, 200, 40),"Helpless Consumed : " + consumed);
}