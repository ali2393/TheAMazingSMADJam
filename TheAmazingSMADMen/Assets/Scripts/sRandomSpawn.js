#pragma strict



var food: GameObject;

//var Point: GameObject;
var spawnPoint:int;
var spawnCounter: int =0;

var clone:GameObject;


function Start () 
{

}

function Update () 
{

	while(spawnCounter < 5)
	{
		
		spawnPoint=Random.Range(0,5);
	
			if (spawnPoint==1)
			{
				
				food.transform.position = GameObject.Find("S1").transform.position;
				RandomSpawn();
			}
			
			if (spawnPoint==2)
			{
				
				food.transform.position = GameObject.Find("S2").transform.position;
				RandomSpawn();
			}
			
			if (spawnPoint==3)
			{
				
				food.transform.position = GameObject.Find("S3").transform.position;
				RandomSpawn();
			}
			
		
			if (spawnPoint==4)
			{
				food.transform.position = GameObject.Find("S4").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==5)
			{
				food.transform.position = GameObject.Find("S5").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==6)
			{
				food.transform.position = GameObject.Find("S6").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==7)
			{
				food.transform.position = GameObject.Find("S7").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==8)
			{
				food.transform.position = GameObject.Find("S8").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==9)
			{
				food.transform.position = GameObject.Find("S9").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==10)
			{
				food.transform.position = GameObject.Find("S10").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==11)
			{
				food.transform.position = GameObject.Find("S11").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==12)
			{
				food.transform.position = GameObject.Find("S12").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==13)
			{
				food.transform.position = GameObject.Find("S13").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==14)
			{
				food.transform.position = GameObject.Find("S14").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==15)
			{
				food.transform.position = GameObject.Find("S15").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==16)
			{
				food.transform.position = GameObject.Find("S16").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==17)
			{
				food.transform.position = GameObject.Find("S17").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==18)
			{
				food.transform.position = GameObject.Find("S18").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==19)
			{
				food.transform.position = GameObject.Find("S19").transform.position;
				RandomSpawn();
			}
		
			if (spawnPoint==20)
			{
				food.transform.position = GameObject.Find("S20").transform.position;
				RandomSpawn();
			}
		
			
			
		}
	

}

function RandomSpawn()
{

	Instantiate(food, food.transform.position, Quaternion.identity);
	spawnCounter++;
	//clone=Instantiate(food,transform.position,transform.rotation);
	//clone.transform.position = Point.transform.position;
}