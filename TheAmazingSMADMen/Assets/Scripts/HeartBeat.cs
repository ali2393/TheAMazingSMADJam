using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class HeartBeat : MonoBehaviour {
	
	
	public AudioClip heart;
	public AudioClip heartFast;
	
	public float audioFarDistance = 15.0f;
	public float audioNearDistance = 6.0f;
	
	float distance = Mathf.Infinity;
	GameObject closest;
	
	GameObject FindClosestEnemy()
	{
		GameObject[] prey;
		prey = GameObject.FindGameObjectsWithTag("Food");
		Vector3 characterPos = transform.position;
		
		foreach (GameObject p in prey)
		{
			Vector3 differenceBetweeen = p.transform.position - characterPos;
			float curDistance = differenceBetweeen.sqrMagnitude;
			if(curDistance < distance)
			{
				closest = p;
				distance = curDistance;
			}
		}
		return closest;
	}
	
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
		FindClosestEnemy();
		
		print(FindClosestEnemy().name);
		
		if(distance < audioNearDistance && audio.clip != heartFast)
		{
			audio.clip=heartFast;
			audio.Stop();	
			
		}
		
		if(distance < audioFarDistance && !audio.isPlaying && distance>audioNearDistance)
		{
			audio.clip=heart;
		 	audio.Play(); 	
		}
		
		else if(distance < audioNearDistance && !audio.isPlaying)
		{
			audio.clip=heartFast;
			audio.Play();
		}
		
	
		
		
		
		
	}
	
	
	
	
}
