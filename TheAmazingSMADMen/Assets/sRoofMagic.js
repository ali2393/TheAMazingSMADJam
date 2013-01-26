#pragma strict

function OnTriggerStay(Other:Collider)
{
	if(Other.tag=="Player")
	{
		renderer.enabled=false;
	}
	//ActivateTrigger();
}

function OnTriggerExit(Other:Collider)
{
	if(Other.tag=="Player")
	{
		renderer.enabled=true;
	}
	
	ActivateTrigger();
}