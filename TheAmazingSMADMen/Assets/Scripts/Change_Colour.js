#pragma strict

function Start () {

}
//var timesteps : float = 1.0;
var duration : float = 1.0;
var currentTime : float = Time.deltaTime * 1;
var health : float = 100;
var color0 : Color = Color.red;
var color1 : Color = Color.yellow;
var color2 : Color = Color.green;
var color3 : Color = Color.black;

function Update () {
    
    health = health - currentTime;
	
	if(health<=100 && health >70)
	{
		light.color=color0;
	}
	
    if (health <= 70 && health >40) {
    //var t : float = Mathf.PingPong (Time.time, duration) / duration;
    //light.color = Color.Lerp (color0, color1,t);
    light.color=color1;
    }
    
    if (health <= 40 && health >10){
   	//var v : float = Mathf.PingPong (Time.time, duration) / duration;
    //light.color = Color.Lerp (color1, color2,v);
    light.color=color2;
    }
    
    if (health <= 10 && health >0){
    //var s : float = Mathf.PingPong (Time.time, duration) / duration;    
    //light.color = Color.Lerp (color2, color3,s);
    light.color=color3;
	}
	
	if (health <= 0){
	Destroy(GameObject("Cube"));
	}
}

function Heal()
{
	health=100;
}

