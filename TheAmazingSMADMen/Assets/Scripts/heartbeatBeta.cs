using UnityEngine;
using System.Collections;

public class heartbeatBeta : MonoBehaviour {
	
	
	public AudioClip heart;
	public AudioClip heartFast;
	public GameObject prey;
	
	public float audioFarDistance = 30.0f;
	public float audioNearDistance = 10.0f;
	public float distance;
	
	
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		distance=Vector3.Distance(prey.transform.position, transform.position);
		
		
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
