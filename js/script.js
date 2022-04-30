var item = "";
var data = '<div class="mitracard"><img src="img/depot1.jpg" width="100%" alt=""><div class="mitra-cardcontent"><h1 class="mitra-cardheader">Depot makmur Jaya</h1><div class="mitra-cardinfo"><img src="img/locate.svg" width="30px" alt="locate" class="imgcardmitra"><span>Leuwiliang</span><img width="30px" src="img/distance.svg" alt="distance"><span>500M</span></div><div class="mitra-cardfooter"><h1>Rp. 5.000</h1><span>ISI GALON</span></div></div></div>';
for( let i = 0; i<3; i++){
	item += data;
}

document.getElementById("mitracontainer").innerHTML = item;