#pragma strict

var currentTime : float = Time.deltaTime * 1;
var health : float = 100;
function Update () 
{

health = health - currentTime;

if (health <= 0)
{
	Destroy (gameObject);
}
}


function Heal()
{
	health=100;
}
