using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class HeartBeat : MonoBehaviour {
	
	
	public AudioClip heart;
	public AudioClip heartFast;
	public GameObject prey;
	
	public float audioFarDistance = 15.0f;
	public float audioNearDistance = 6.0f;
	private float distance;
	
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
		prey = GameObject.FindGameObjectWithTag("Food");
		
		distance = Vector3.Distance(prey.transform.position, transform.position);
		
		print(distance);
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
