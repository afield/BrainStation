var app = angular.module('JukeBoxApp',[]);

app.controller('AppCtrl',AppCtrl);

function AppCtrl(){
	this.pricing = [
		{
			title:'Basic',
			price:'Free',
			features:['MP3 Audio','100 Songs','Ads Every 10 Minutes','Up to 1 User','1 Device'],
			background:'#2B95FD',
		},
		{
			title:'Plus',
			price:'$10/month',
			features:['16-bit Audio','200 Songs','No Ads','Up to 3 Users','2 Devices'],
			background:'#4e65ec',
		},
		{
			title:'Premium',
			price:'$20/month',
			features:['Loseless Hi-fi audio','Unlimited Songs','No Ads','Up to 5 Users','Unlimited Devices'],
			background:'#7a30d3',
		}
	];

	this.gallery = [
		{
			image:'img/album1.png',
			song:'',
		},
		{
			image:'img/album2.png',
			song:'',
		},
		{
			image:'img/album3.png',
			song:'',
		},
		{
			image:'img/album4.png',
			song:'',
		},
		{
			image:'img/album5.png',
			song:'',
		},
		{
			image:'img/album6.png',
			song:'',
		}
	];
}