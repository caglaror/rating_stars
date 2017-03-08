// variables
var mes_ = new Array;
var deg_= new Array;
var imgCounter;
//img sources
var imgSourceDomain = ""
var src_0 = imgSourceDomain + "y_0.jpg";
var src_1 = imgSourceDomain + "y_1.jpg";
// arrays set
mes_[0]="Please rate us.";
deg_[0]="1";
mes_[1]="Very bad";
deg_[1]="2";
mes_[2]="So so. But I would not recommend it to anyone else.";
deg_[2]="3";
mes_[3]="Satisfactory.";
deg_[3]="4";
mes_[4]="Pleased - I will order again";
deg_[4]="5";
mes_[5]="I recommend - Best";
deg_[5]="6";
// --
deg_[6]="";
mes_[6]="";

function flipIt(e,iNum)
{
var ieMi = document.all;
var oy = document.getElementById('ratingStatus');
var messageContainer = document.getElementById('messageSpan');

 if (window.event) e = window.event; 
 var srcEl = e.srcElement? e.srcElement : e.target;
 
var x = document.getElementsByName(srcEl.name.toString());
 
for(pO=0;pO<x.length;pO++){x[pO].src=src_0}; //
for(pO=0;pO<iNum;pO++){x[pO].src=src_1;} //

						if(ieMi){messageContainer.innerText=mes_[iNum]}else{messageContainer.textContent=mes_[iNum]}
	oy.value=deg_[iNum];

	if(ieMi){messageContainer.innerText=mes_[iNum]}else{messageContainer.textContent=mes_[iNum]}

if(e.type=='click'){deg_[6]=deg_[iNum];mes_[6]=mes_[iNum];imgCounter=iNum};

			if(e.type=='mouseout')
			{
			if(ieMi){if(mes_[6]!=''){messageContainer.innerText=mes_[6];oy.value=deg_[6];}else{messageContainer.innerText=mes_[0];oy.value=deg_[0];}}else{if(mes_[6]!=''){messageContainer.textContent=mes_[6];oy.value=deg_[6];}else{messageContainer.textContent=mes_[0];oy.value=deg_[0];}}
				for(pO=0;pO<x.length;pO++){x[pO].src=src_0}; //
				for(pO=0; pO<imgCounter; pO++){x[pO].src=src_1;} //
			}
}
