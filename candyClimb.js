(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"candyClimb_atlas_1", frames: [[0,0,2036,1143]]},
		{name:"candyClimb_atlas_2", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_3", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_4", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_5", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_6", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_7", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_8", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_9", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_10", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_11", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_12", frames: [[0,0,1410,1630]]},
		{name:"candyClimb_atlas_13", frames: [[0,0,1945,1170],[0,1172,1280,720]]},
		{name:"candyClimb_atlas_14", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"candyClimb_atlas_15", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"candyClimb_atlas_16", frames: [[1282,0,728,1172],[0,722,1176,720],[0,0,1280,720]]},
		{name:"candyClimb_atlas_17", frames: [[0,802,1136,684],[0,0,989,800]]},
		{name:"candyClimb_atlas_18", frames: [[0,577,1062,611],[0,1190,787,794],[789,1190,787,794],[1180,0,787,794],[0,0,1178,575]]},
		{name:"candyClimb_atlas_19", frames: [[0,0,787,794],[0,796,787,794],[789,0,787,794],[789,796,787,794]]},
		{name:"candyClimb_atlas_20", frames: [[0,0,787,794],[0,796,787,794],[789,0,787,794],[789,796,787,794]]},
		{name:"candyClimb_atlas_21", frames: [[0,719,546,845],[1445,0,547,845],[1428,847,547,845],[0,0,720,717],[722,690,704,662],[722,0,721,688]]},
		{name:"candyClimb_atlas_22", frames: [[1644,0,301,783],[0,0,546,845],[0,847,546,845],[0,1694,1604,245],[548,0,546,845],[548,847,546,845],[1096,0,546,845],[1096,847,659,477]]},
		{name:"candyClimb_atlas_23", frames: [[857,1460,182,168],[351,1414,196,182],[1114,1521,200,138],[1672,1430,206,155],[1320,215,168,438],[1971,484,71,400],[1898,706,71,400],[1041,1521,71,391],[1316,1521,71,365],[0,1526,71,328],[1738,1587,71,283],[1660,215,71,243],[1971,886,71,204],[1966,1621,70,160],[1625,1651,70,119],[2045,30,3,4],[2045,42,1,2],[2045,36,3,4],[0,0,301,783],[2043,1149,5,534],[303,0,301,783],[1046,215,272,482],[1752,0,273,482],[1320,655,131,34],[606,0,438,412],[549,1414,71,400],[1490,215,168,438],[2027,51,6,6],[1866,1155,175,273],[1105,1246,175,273],[1282,1246,175,273],[606,414,309,220],[1660,484,309,220],[1586,933,309,220],[0,970,309,220],[311,970,309,220],[622,1024,309,220],[933,1024,309,220],[1244,1024,309,220],[1555,1155,309,220],[0,1192,309,220],[1459,1377,211,188],[622,1246,233,233],[1041,1460,51,54],[311,1192,309,220],[1282,816,614,115],[0,879,794,89],[796,933,788,89],[606,699,914,115],[606,636,234,57],[1522,706,347,62],[1389,1587,347,62],[0,1414,349,110],[73,1598,347,62],[73,1526,227,57],[857,1246,246,212],[1114,1661,80,101],[1459,1246,83,105],[941,1630,83,104],[806,1630,133,133],[1196,1661,103,76],[1046,0,704,213],[186,1662,57,90],[422,1598,113,102],[622,1481,182,154],[1529,1651,94,91],[917,414,121,227],[1971,1092,73,55],[1453,655,49,42],[1389,1521,56,63],[1504,655,44,38],[2027,0,21,28],[934,643,92,44],[622,1637,139,114],[1389,1651,138,102],[73,1662,111,68],[842,643,90,51],[2027,30,16,19],[1880,1430,153,189],[1811,1621,153,131],[0,816,1280,61]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_149 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(img.CachedBmp_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,998,2515);


(lib.CachedBmp_125 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["candyClimb_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["candyClimb_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["candyClimb_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(img.CachedBmp_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2604,1422);


(lib.CachedBmp_109 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["candyClimb_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["candyClimb_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["candyClimb_atlas_18"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(img.CachedBmp_94);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_93 = function() {
	this.initialize(ss["candyClimb_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["candyClimb_atlas_18"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(img.CachedBmp_87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_86 = function() {
	this.initialize(ss["candyClimb_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["candyClimb_atlas_18"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(img.CachedBmp_80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_79 = function() {
	this.initialize(ss["candyClimb_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["candyClimb_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(img.CachedBmp_73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_72 = function() {
	this.initialize(ss["candyClimb_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["candyClimb_atlas_19"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(img.CachedBmp_66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_65 = function() {
	this.initialize(ss["candyClimb_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["candyClimb_atlas_19"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(img.CachedBmp_59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_58 = function() {
	this.initialize(ss["candyClimb_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["candyClimb_atlas_19"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(img.CachedBmp_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_51 = function() {
	this.initialize(ss["candyClimb_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["candyClimb_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_44 = function() {
	this.initialize(ss["candyClimb_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["candyClimb_atlas_20"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(img.CachedBmp_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_37 = function() {
	this.initialize(ss["candyClimb_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["candyClimb_atlas_20"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(img.CachedBmp_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_30 = function() {
	this.initialize(ss["candyClimb_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["candyClimb_atlas_20"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1200);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2051,1235);


(lib.CachedBmp_22 = function() {
	this.initialize(ss["candyClimb_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1235);


(lib.CachedBmp_15 = function() {
	this.initialize(ss["candyClimb_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2752,1864);


(lib.CachedBmp_7 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["candyClimb_atlas_21"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["candyClimb_atlas_18"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MaskGroup14 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.pattern = function() {
	this.initialize(ss["candyClimb_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pattern_1 = function() {
	this.initialize(ss["candyClimb_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pinkcreampng = function() {
	this.initialize(ss["candyClimb_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pinkcreampng_1 = function() {
	this.initialize(ss["candyClimb_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.reka2 = function() {
	this.initialize(ss["candyClimb_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_2 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_0 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_0_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_0_2 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_1_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_1_2 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_1_3 = function() {
	this.initialize(ss["candyClimb_atlas_22"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_2_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_2_2 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_3 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_3_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_4 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_4_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_5 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_5_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_6 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.VectorlayerImage_6_1 = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.waffle_bg1 = function() {
	this.initialize(ss["candyClimb_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.waffle_bg = function() {
	this.initialize(ss["candyClimb_atlas_16"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ריצפתמרשמלועומדים = function() {
	this.initialize(ss["candyClimb_atlas_23"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.מסךפתיחה = function() {
	this.initialize(img.מסךפתיחה);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5430,3789);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.normalami = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_124();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.normalami, new cjs.Rectangle(0,0,364,586), null);


(lib.marshmellowFloor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ריצפתמרשמלועומדים();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.marshmellowFloor, new cjs.Rectangle(0,0,1280,61), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("ABdBqQgxgfg+g1Qg+g0gngrQgngtAIgJQAHgJAzAfQAyAfA9A1QA/A0AmAsQAnArgIAKQgCACgEAAQgNAAgngYg");
	this.shape.setTransform(15.25,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,30.5,26), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgPAUQgXgTgVgUIAfgkIA2AzIAWAPIALAJIgdAjQgUgNgZgWg");
	this.shape.setTransform(5.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,11.9,11.1), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AnCCPQAAjeCbi4QCci4DbglQDZglCaB/QhZhEioBKQitBNiaC4QicC3gvC3QguCyBSBMQiWiDAAjbg");
	this.shape.setTransform(45.125,49.2829);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,90.3,98.7), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Am4lhIALgWINmLgIgTAPg");
	this.shape.setTransform(44.075,37.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,88.2,75.2), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AIJF/Iqio7QgkAjgkAqQgoAwgfAtIieiGQAfgzAlgsQAkgqAmghIg3guQgHgGgKABQgJABgGAHIh5COIgEAJQgHgOAKgLIB4iPQAHgHAJgBQAKgBAHAHIN4LvQALAJgEAPQgCgFgEgDg");
	this.shape.setTransform(52.7592,39.0683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,105.6,78.2), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnYAJkQhUhJAOhrQAOhvB1hVQF/kYIajTQIvjcKGhvQKvh2LGATQMAAULfCzQA+APhSATQhEAQjaAcQuOB4joAkQ+yEvv8IKQjdBxi1ADIgKAAQiXAAhWhNg");
	this.shape_1.setTransform(259.3429,68.8785);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,518.7,137.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_126();
	this.instance.setTransform(102.15,-324.8,0.2062,0.2062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(102.2,-324.8,205.8,518.6), null);


(lib.timeAmount = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("זמן כולל:", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(1.35,-2.65);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeAmount, new cjs.Rectangle(-27.7,-4.6,58.2,23.299999999999997), null);


(lib.subjectHeadlineOfFinishCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הישגייך במשחק בנושא:                  ", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(127.0583,4,2.0805,2.0058);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subjectHeadlineOfFinishCard, new cjs.Rectangle(-37.4,0,329.09999999999997,64), null);


(lib.numOfMistakes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מספר שגיאות:", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(44.3,0.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.numOfMistakes, new cjs.Rectangle(11.6,-1.4,65.5,20.299999999999997), null);


(lib.headlineOfFinishCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("סיימתם את המשחק, כל הכבוד!", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(105.9919,4,2.0805,2.0058);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headlineOfFinishCard, new cjs.Rectangle(-23.5,0,259,34), null);


(lib.finalGrade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ציון:", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 35;
	this.text.parent = this;
	this.text.setTransform(28.2,2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.finalGrade, new cjs.Rectangle(8.7,0,39,17), null);


(lib.dynamicSubjectHeadlineOfFinishCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("", "normal 700 10px 'Assistant'", "#68451A");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(105.992,4,2.0805,2.0058);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dynamicSubjectHeadlineOfFinishCard, new cjs.Rectangle(95.4,0,21.19999999999999,34), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VectorlayerImage_6();
	this.instance.setTransform(0,0,0.7252,0.7585);

	this.instance_1 = new lib.VectorlayerImage_5();
	this.instance_1.setTransform(21.7,51.1,0.7252,0.7585);

	this.instance_2 = new lib.VectorlayerImage_4();
	this.instance_2.setTransform(4.35,29.15,0.7252,0.7585);

	this.instance_3 = new lib.VectorlayerImage_3();
	this.instance_3.setTransform(38.55,111.7,0.7252,0.7585);

	this.instance_4 = new lib.VectorlayerImage_2_1();
	this.instance_4.setTransform(44.3,95.85,0.7252,0.7585);

	this.instance_5 = new lib.VectorlayerImage_1_1();
	this.instance_5.setTransform(41.25,116.45,0.7252,0.7585);

	this.instance_6 = new lib.VectorlayerImage_0();
	this.instance_6.setTransform(26.85,95.85,0.7252,0.7585);

	this.instance_7 = new lib.VectorlayerImage();
	this.instance_7.setTransform(39.9,115.6,0.7252,0.7585);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,111,183.9), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VectorlayerImage_6_1();
	this.instance.setTransform(39.35,-0.05,0.802,0.6814);

	this.instance_1 = new lib.VectorlayerImage_5_1();
	this.instance_1.setTransform(115.45,65.6,0.802,0.6814);

	this.instance_2 = new lib.VectorlayerImage_4_1();
	this.instance_2.setTransform(47.3,45.25,0.802,0.6814);

	this.instance_3 = new lib.VectorlayerImage_3_1();
	this.instance_3.setTransform(38.45,28.2,0.802,0.6814);

	this.instance_4 = new lib.VectorlayerImage_2_2();
	this.instance_4.setTransform(89.8,107.9,0.802,0.6814);

	this.instance_5 = new lib.VectorlayerImage_1_2();
	this.instance_5.setTransform(58.55,96.3,0.802,0.6814);

	this.instance_6 = new lib.VectorlayerImage_0_1();
	this.instance_6.setTransform(31.15,96.3,0.802,0.6814);

	this.instance_7 = new lib.VectorlayerImage_1();
	this.instance_7.setTransform(0,99.75,0.802,0.6814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,162.1,251), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AAdANIAPgwIgsAeIgrhnIAACuIAngcAAdANIgEANQgBACgBADQgBADgBADQgLAkgKAkIgEhHg");
	this.shape.setTransform(4.375,10.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAmIAhgZIgEANIgCAFIgCAGIgVBIgAgrhsIArBnIAsgeIgPAwIghAZIgnAcgAgEAmg");
	this.shape_1.setTransform(4.375,10.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,10.8,23.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE3BF").s().p("AjUE/Qg0gwglhPIgFgMQgCgHgEgCQgXgNgHgHQgNgOABgVQADgwABgJQAGgeAWgTIASAFQAJABABgQQgcgjALgnQALgoAwgjQAVAAACgGQADgFgGgeQAchHBagUQAFACgBAFQAGgOgIgMQAZg+BBgbQAHAFARgBQARgBAIAGQALAAAKAHIAQAQIApAnQAZAUAggCQAZgCAYAZQAOAOAXAhQAtA2AaAVQAbAVAHAaQAGAZgLAhQgMAmgPA4IgaBfQgPBJg0AwQgsAohMAbIhZAnQg0AXgpABQhQgRg6g2g");
	this.shape.setTransform(7.2788,8.0215,0.2056,0.2056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE3BF").s().p("AA4BTIgLgDQgfgEgdgPQgagNgagWIgogiQgYgTgTgNIgCgCIgCgCQACgCAEAAIAFACQAXAHAOgKQALgHAIgTIABgCIACgFQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQACgBACADIADAFQAgAtAsATQAsARAwgNIAGgCIAHgBQAFACAFAGIAJAHIALAIIAKAIQAFAEABAEQACAEgEAFIgEAKQgCAGgFACQgeAXgsAGIgDAAIgIgBg");
	this.shape_1.setTransform(21.6513,13.7209,1,1,-14.9983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,37.4,20.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE3BF").s().p("AhbFVQhUgkhAg3QgvgogIhNQgPglgQg6IgchfQAKgegKgdIBHhQIBIhOQAhgiAiAKQAPAFANgJQAJgGALgRQAYgiASgOQAbgWAcAFQAoAGAcAZQAeAZALApQAEAMAGAGQAGAHANACQBLAMATBVIAFAUQAFAIAQADQAbAFARAqQARAogLAeQgEAMAAAFQABAGAIAIQAoAngBAnQgBAmgmAtQgOAQgbAwQgZAqgVAUQgsAqgaASQgpAcgrAHQhcgUhJgfg");
	this.shape.setTransform(31.15,8,0.2056,0.2056,0,0,0,-0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE3BF").s().p("AlRGVQisgCjDiLQgugbgDgiQgEgiAqgZQAsgZAtgmQAhgdAuguIAZgaQAQgOAQgFQAWABAnAJQAqAJATACQDlAaC7hiQCphYCRjEQAEgFAHgPQAHgLAKABQAPAAAIAOQADAFAHAUQANApAsA6QA4BIBigKQAUgCAogMQAjgJAaAMQhjBDjNCuQjACih0BKQjhCPjwAAIgPAAg");
	this.shape_1.setTransform(15.6575,9.4482,0.2055,0.2055,29.995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,38.5,16.1), null);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.CachedBmp_125();
	this.instance_1.setTransform(0.6,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0.6,0,136,241), null);


(lib.happytami = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_119();
	this.instance.setTransform(-0.35,-0.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_120();
	this.instance_1.setTransform(-0.75,-0.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_121();
	this.instance_2.setTransform(-0.35,-0.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_122();
	this.instance_3.setTransform(-0.35,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.1,273.5,422.5);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2/AQpMAAAghRMBt/AAAMAAAAhRg");
	mask.setTransform(581.95,106.5);

	// Layer_3
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["candyClimb_atlas_14"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.961,0,0,-0.96,430.8,-592.8)).s().p("EhgFA1/MAAAhr9MDALAAAMAAABr9g")
	}.bind(this);
	this.shape.setTransform(614.975,351.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(230,6,704,207), null);


(lib.מקלסבאשוכב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FD2A6B").ss(1,1,1).p("EA3RgE6IBDAAQLhBunRIKIBsAAEA6bAE/ICJgBQgCABgBACIiGgCIj1gFQC4j0iNmAEAnhgE6QCVFqioD5IoUgJIm4gIIoOgJIn7gJIn6gJInYgIIpRgKImZgIImagHEAtcgE6IAMJqImagHEAnhgE6IF7AAIJ1AAEA2mAE6Io+gKAfHk6QBTFDhgEXAPok6QBtElhhEkAPok6IIgAAQBMFKhSEIAYIk6IG/AAIIaAAAILk6QBUEFhUDvIgSBMAAKk6QA8E8hHD7AAKk6IIBAAIHdAAAnAk6QBhEMh6EjAnAk6IHKAAAwqk6QA4ETg4ESA3Pk6QBkEkhYD5A3Pk6IGlAAIJqAAEglkgE6QC7EHjIEGIn7gJInRgIA9pk6QBPEAhDEWIoUgJEglkgE6IH7AAIGaAAEgtWgE6QAyEahIDqEg5uAC9IiGgDEg1IgE6IALH8IkxgFEg1IgE6QocgmhsDqQg3GZGZhmEg1IgE6IHyAAIHyAA");
	this.shape.setTransform(405.5777,32.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD2A6B").s().p("EAxMAEzIgMpqIJ2AAQCNGAi4D0gEAifAEjQBgkXhUlDIIaAAQCWFqioD5gATZESQBhkkhtklIIgAAQBMFKhSEIgADiEAQBJj7g9k8IICAAQBUEFhUDvIgTBMgAtFDuQA4kSg4kTIJpAAQBiEMh6EjgA54DfQBCkWhOkAIGZAAQBlEkhZD5gEgqHADNQBHjqgykaIHyAAQC8EHjIEGgEg7sgBzQBsjqIcAmIAMH8IkxgFIiHgDICHADQhSAUg/AAQj9AAArlHg");
	this.shape_1.setTransform(382.7132,31.76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2E1DD").s().p("EAxfAE5QC4j1iNmAIBDAAQLhBunRILIiJAAgEAiHAEoQCoj6iVlqIF7AAIAMJqgAS7EXQBSkIhMlLIG/AAQBTFDhgEXgACyEEIAShMQBUjvhUkFIHdAAQBtElhhEkgAsgDzQB6kihhkNIHLAAQA8E8hID8gA8KDiQBYj6hkkkIGlAAQA4ETg4ESgEgq4ADRQDIkGi7kHIH7AAQBPEAhDEWgEg6EADAIgLn8IHyAAQAyEbhIDpg");
	this.shape_2.setTransform(438.2981,32.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.מקלסבאשוכב, new cjs.Rectangle(-1,-1,813.2,66.2), null);


(lib.מקלסבא = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2E1DD").ss(1,1,1).p("AFE5YQhWgUhugGQh+AfhnAmAKC1PQAaB+hCC1QgBADgCAFAEmqaIkGEUAUK/VQF4FnkvH9QgfAshBBlAmG2WQg8AtgoA0QiAClhuBZAoN9kQmADyicDGAk5gbImKGcAxNMfIisC2Ii3D9Az5PVIhyB3Av6bKQDXjQDKjPAIeAdQBQhjBMhkQAwg/Avg/EAGRgiLQgbAAgaABQlNAJkxCUAjdOaQDGjXC3jXEgXZAiMQAvgrAugq");
	this.shape.setTransform(175.6982,218.7667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FD2A6B").ss(1,1,1).p("EALaghfQIZAaEACZQjQGkm4DiQgpjLkVg+QBSjZgFlaIARAAQAoABAnACgAXcu3QmVBFkHh5QgSAxgZA2IkGETQDOEQElBiQD7laCHjVQAyhOAmg7QADgBADAAAkk87QhBAsg/AzIEHFvQBvhWCxhBIi8nAQh4A6hzBPgAnvwOIlRl1QitDdBsCnQCfCyDzjBgA1+X4Qk/KXIqgvQDGi3C8i2Qk4hwh+mIgAtkNIQEeGXDWB1QDEjJC3jIInloZgAhQANQCoExExDXQDHjoC3jnQkvhyjPkxg");
	this.shape_1.setTransform(152.3568,214.6807);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2E1DD").s().p("A3EWzIC2j9ICti2QEdGXDWB1QjKDPjXDQQk4hwh9mIgArYJiIGKmdQCqExEwDXQi4DXjFDXgAALilIEGkUQDPEQElBiIhgB9QhMBkhPBkQkvhzjQkwgAJDszIADgIQBBi1gZh+QG3jiDRmkQF3FnkuH9QgfAshBBlQiUAZiBAAQjhAAimhNgAw9zLQCcjGF/jyQhAAshAAzIEIFvQg8AtgoA0QiAClhuBZgAk28MQExiUFNgJQAagBAaAAQAGFahSDZQhXgUhtgGQh+AfhnAmg");
	this.shape_2.setTransform(177.7482,196.2917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD2A6B").s().p("A1+X4IC3j9QB+GIE4BwQi8C2jGC3QglADghAAQnPAAEqprgAtkNIIGKmeIHlIZQi3DIjEDJQjWh1kemXgAhQANIFZlqQDPExEvByQi3DnjHDoQkxjXiokxgAIPpxIEGkTQAZg2ASgxQEHB5GVhFIhYCJQiHDVj7FaQklhijOkQgAuBv/QhsinCtjdIFRF1Qh+BkhoAAQhfAAhNhVgAIt4vQBSjZgFlaIARAAIBPADQIZAaEACZQjQGkm4DiQgpjLkVg+gAmk7cQA/gzBBgsQBzhPB4g6IC8HAQixBBhvBWg");
	this.shape_3.setTransform(152.3568,214.6807);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.מקלסבא, new cjs.Rectangle(-1,-1,327.5,439.6), null);


(lib.שמיים = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69C3FF").s().p("EhkRgqNMDH+AAAMgnugBuMAoUAAAIgmIOMAAABNPMgmFgvqID6ABQkTikzq6FMgpAAAAMgoLgFGQgchTkNAtIEpAmI8lcmQLwBPoVNdMgjiAogg");
	this.shape.setTransform(641.9,281.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.שמיים, new cjs.Rectangle(0,0,1283.8,562.4), null);


(lib.סירופט = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AgeHKQhJgWg3gyQgagXgjgrIg6hGQhHhQhFgNQgygKhCAVIhwArQivBBk5gLIj8gJQiPgBhqARQg1AIhdAWQhqAZgoAIQisAgh0gjIhcghQg3gRgnAEQgrAEg0AfQg5AogeARQhgA3hxgHQh0gHhShFQhUhGgThzQgUh0A7hYQAZglA2gxQBBg7ATgWQAUgXAgguQAigzBTg/QBTg/BzgNQBzgOCEAYQCDAYCDgWQCCgWC8AtQETA0EzgUQEygTGQAaQGPAaDjgJQF7gPEtgfQCbgQE2glQEPgECrANQCqANCZgKQCZgJC+AaQBUALAtAMQBGATAxAgQAnAaAfAKQAgAJBBBBQBABABWC1QBVCzgfAJQgfAJgIApQgKA1gvAuQgiAig+AmQhDApgyAPQhEAWg4gRQg2gQgxg2QgYgbg2hQQhiiThnADQg5AChBA0QhHBAgnAaQhAAshPAJQhQAJhJgcQgRgHiChJQhXgyhBADQgxACg8AgQhDApgiATQhFAnhJARQhOAShKgIQhNgJhDgnQhGgogpg+QgNgUgHgHQgMgOgOgDQgUgEgfAVQgtAfhFA7IhxBeQiHBph0APQgVADgVAAQg0AAgygRg");
	this.shape.setTransform(309.8359,47.4668);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.סירופט, new cjs.Rectangle(0,0,619.7,95), null);


(lib.סיקופורוד = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("EBF1AF2QhLgjglgNQgYgHgygKQgwgKgZgIQhBgWhThEQgYgVgNgIQgWgOgUgDQgTgEgbAGQgfAHgQACQgsAGhngXQhegUgyAOQgbAIgtAbQgvAdgXAIQgZAIgcACQgHAFgKgBQgMAAgXgGIgGgBQgogGg5gTIgZgGQgpgBgqgKQhZgVhHg5Qg1gxgcgXQgwgpgqgNQgjgLgqADQgjACgrANIhzAkQhEAWgxACQg/ADhMgZQgngNhdgoQhSgkg0gOQhNgUg/AKQgnAHhBAaQhIAegfAIQg8APhpgGQh8gHgrAEQg1AFhIAVQhSAbgpAMQhIAWg3AGQhFAHg5gRQgkgKgygbIhTgsQiIhBjOAFQhDAChsALIgvAFQgRAEgUACIgfABIg1AEQgcAYgeAfQg2A8gcAdQgvAzgsAdQg2Alg3AKQhmARiAhJQgtgZg+gtIhohMQh/hYhigXQhPgShXAOQhSANhMApIhoA+Qg+AkgwAIQg8ALhGgWQg2gRhDgoQhLgtgngVQhDgkg3gMQiDgdicBLQgfAPhDAlQg+AigkAQQh5A2hegYQgtgLhohAQhag5g9gCQglgBgsAQQgfALgsAZIiEBLQhNAsg7AWQhMAchJACQgjABgggGQgHAFgJABQgLAAgLgJIgMgLQgPgGgNgHIAEAAIAOADQgYgagggOIgVgIQgwgPgvALQgqAKgrAfQgfAWgpAqIhLBLQgtArglAZQhoBHhhgOQgugHgvgcQgfgSghgdQgfgbgOgaQgHgMgDgMQgHghARglQALgbAcglQBFhbA+gxQByhbDCgoQA8gNBrgPQB2gSAwgJQBagRB1giIDNg+IgPALQAagGAegCQAlgCAxAEIBXAIQBYAJBtAEQBGADB/ABQCoADBUgBQCMgBBvgIQBQgGCggQQCPgNBhACQBZACCGAQIDdAbQBUAJCaAJQCkAJBKAHQBRAICiATQCQAQBjgBQApgBENgVQBkgHBPACQAngFAcgFQA9gLCngvQCOgoBXgJQB0gLCWAYQA1AJDSAtQC4AqCAAGQCSAIDOggICUgYQBVgNA+gEQBMgEBgAGQA2ADB1ALQEPAbCGAUQBiAPDDAgQCuAbB5AGQBYAFCxABQCbAGBoAgQA9ATBPAnICIBFQDBBgAUAMQB2BFA9BSQApA3gLAoQgGAVgSAPQgRAOgWAGQgPAEgSAAQgkAAgsgRgAgMgvIACgBIgBAAIgBABg");
	this.shape.setTransform(464.6882,39.1167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.סיקופורוד, new cjs.Rectangle(0,0,929.4,78.3), null);


(lib.pinkcream = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.pinkcreampng();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinkcream, new cjs.Rectangle(1,1,1280,720), null);


(lib.happytami_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.CachedBmp_106();
	this.instance_4.setTransform(-0.4,-0.1,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_107();
	this.instance_5.setTransform(-0.85,-0.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_108();
	this.instance_6.setTransform(-0.4,-0.1,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_109();
	this.instance_7.setTransform(-0.4,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.1,273.5,422.5);


(lib.questionBiscuit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_105();
	this.instance.setTransform(-34.15,-155.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionBiscuit, new cjs.Rectangle(-34.1,-155.5,494.5,400), null);


(lib.GameKindsign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(-90.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GameKindsign, new cjs.Rectangle(-90.1,0,360,358.5), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(75.7,39.95,0.2863,0.2863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(75.7,40,70.49999999999999,60.7), null);


(lib.normalTami = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(-41.55,-129.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_102();
	this.instance_1.setTransform(-41.55,-129.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_103();
	this.instance_2.setTransform(-41.6,-129.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-129.1,87.6,136.5);


(lib.backToNormalImageSize = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAAAIAsg0AgtgzIAtAzAgsA1IAsg1IAuAz");
	this.shape.setTransform(0.275,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AhVBWQglgkABgyQgBgxAlgkQAkglAxABQAygBAkAlQAlAkgBAxQABAyglAkQgkAlgygBQgxABgkglgAgpAwIAsg0IAuAyIgugygAADgEIAsg1IgsA1Igtg0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backToNormalImageSize, new cjs.Rectangle(-12.2,-12.2,24.5,24.5), null);


(lib.eyeGlass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgegrQAPgDANAHQALAHAEAOQAEAOgEAGQgDAGgBACQgBABgBACQgHAJgLADQgOAEgNgIQgNgHgDgOQgEgOAHgMQAHgNAOgEgAANAPIArAe");
	this.shape.setTransform(1.3554,0.1167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AhVBWQglgkABgyQgBgxAlgkQAkglAxABQAygBAkAlQAlAkgBAxQABAyglAkQgkAlgygBQgxABgkglgABGAuIgrgegAgHAbIAHAAIAAgBIAAAAIABAAIAAAAIABAAQALgDAIgJIACgDIAEgIQACgDAAgEIgCgMQgEgPgMgHQgJgFgIAAIAAAAIgBAAIgJACIAJgCIABAAIAAAAQAIAAAJAFQAMAHAEAPIACAMQAAAEgCADIgEAIIgCADQgIAJgLADIgBAAIAAAAIgBAAIAAAAIAAABIgHAAIAAAAIgBAAQgIAAgIgEIAAAAQgNgIgDgOIgCgJQAAgJAFgIQAHgNAOgDQgOADgHANQgFAIAAAJIACAJQADAOANAIIAAAAQAIAEAIAAIABAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeGlass, new cjs.Rectangle(-12.2,-12.2,24.5,24.5), null);


(lib.witchbackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E63B88").s().p("AgLgpIAKAAQgIAzAUAZQACACAFABIAAAEQgwgGAThNg");
	this.shape.setTransform(257.2446,210.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD7E0").s().p("AgigiQAsgEASAWQACACAFAAQAAAFgBAFQgQAngPAAQgSAAgThFg");
	this.shape_1.setTransform(263.5,217.4681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FABAD0").s().p("AAAA3QANhNg+gCIAAgKQAggDAMgZQABgCAEAAQAZAjAPgEIAKgBQAAAFgCAEQgDAGgFAFIAAAKQAAAEgDACQgcAWgJApIAAgKg");
	this.shape_2.setTransform(266,204.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9599D").s().p("AAJASQgHgPgaAHIAAgKIAAgTIAKAAQATAGANAMQACABAFAAQAAAFgDADQgCACgFAAIAAAKQgFAAgBgCg");
	this.shape_3.setTransform(278.5,202);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(242,96,159,0.984)").s().p("AgPAWQgPgPAHgkIAnAAIAKAAQAAAFgCADQgSAagTAZQAAgFgCgDg");
	this.shape_4.setTransform(289.386,244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FB569C").s().p("AAPA8IgdAAIgBgKQgLgwACg9QAKAFALADQADACAFAAQAIAzALAwIABAKIgKAAg");
	this.shape_5.setTransform(288.4777,228);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(246,213,221,0.988)").s().p("AgJAtIgoAAIAAgKIAAg7IAeAAIAKAAQAkACAQgTQACgDAFAAQAAAFgCAEQgUArgcAlIgJAAg");
	this.shape_6.setTransform(292,236.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F30C6B").s().p("AgTBGIgBgKQgLgxgIgyIAAgKQApAHAMgZQABgCAFAAQATAtABBAIAAAKQgFAAgCACQgPASgeAAIgHAAg");
	this.shape_7.setTransform(293,227.0093);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6D2DB").s().p("AgUAwQgKgDgKgFQAAgFgCgFQgKgcACgpQAKAFAKADQAFACAFAAQAiAFAJgYQABgBAFAAQAdALgIAwIgBAKQgFAAgBACQgMAZgpgHIAAAKQgFAAgFgCg");
	this.shape_8.setTransform(290.1267,218);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA4A95").s().p("AAMAmQgLgDgJgFQAAgFgCgBQgPgHAHgaIAAgKIAAgKQAFgFAGgDQAEgCAEAAQgBAvATAYQACADAAAFQgFAAgEgCg");
	this.shape_9.setTransform(285.8886,211);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F00868").s().p("AgRBUQAAgFgCgDQgUgYACgwIAAgJQAbgcALgqQABgFAAgFQAxA+gSBNIgBAKQgFAAAAACQgIAUgXAAIgNgCg");
	this.shape_10.setTransform(289.7727,206.5513);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(213,229,244,0.996)").s().p("AAFCjIgdAAIgKAAQgRAAgdgFIgigGQnwgskwjqIAAgKQOJAKNggkQAqgCASASQgFAAgDACQktD4n1AxIgKAAQgoAAgoAKIgKAAg");
	this.shape_11.setTransform(161.5,297.7147);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(43,40,38,0.498)").s().p("AAAAMQABgMgFgFIAAgGQAJAHAAAGIAAAKg");
	this.shape_12.setTransform(3.5,169.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(108,105,104,0.796)").s().p("AAAAAIAAAAIAAABg");
	this.shape_13.setTransform(3.0131,157.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB559A").s().p("AAZAZIg7AAIAAgKIAAgnIAKAAQAIAgAzgIIAAAFIAAAKIAAAKIgKAAg");
	this.shape_14.setTransform(308.5,193.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(244,1,102,0.976)").s().p("AAUAtQgzAIgIghIAAgKIAAg7IBFATIAKABIAAAdIAAAKIgFAAQACAggRAIg");
	this.shape_15.setTransform(310,189);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC76A9").s().p("AgEAoIAAgKIAAhFQAEAAACACQADADAAAFIAAA7IAAAKIgJAAg");
	this.shape_16.setTransform(305.5,187);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E66571").s().p("AAoAYIhFgTQAAgFgDgCQgCgCgFAAQgFAAgCgCQgDgDAAgFIAAgKQA2AGAkAVQAEACAFAAIAAAKIAAAKIgKgBg");
	this.shape_17.setTransform(309,183.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(166,121,93,0.992)").s().p("AgnCvQgBhAgTguIABgKQAIgxgdgKIABgKQAShOgxg+IAAgKIAAgKIAAgKQAhANAvgDIAKAAIAxAAIAKAAIA8AAIAKAAQAAAFgBAEQg4DBhcCdIAAgKg");
	this.shape_18.setTransform(301,213.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5C8D5").s().p("AgOBUQgJgogagTIAAgKQAFAAACgCQADgDAAgFQAqg4AWghIAPAKQAAAKAEAIQABACAFAAIAAAKIAAAKQAAAFgBAFQgMApgbAcIAAAKQgFAAgEACQgFADgFAFIAAAKIAAAKQgFAAAAgBg");
	this.shape_19.setTransform(285,201.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E07899").s().p("AgnAFIAAAKQgFAAgBgCQgEgIAAgJQAcgCAVgHQAFgBAFAAQgBAeApgGIAAAFIgKAAIgPAAQglAAgbgKg");
	this.shape_20.setTransform(294,194.5452);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDD7DF").s().p("AAoBGIgxAAIAAgFQgpAGABgfIAAgKIAAg7IAAgKIAAgeIAKAAIAKAAIA7AAIAKAAQAAAFADADQACACAFAAIAABFIAAAKIAAAoIAAAKIgKAAg");
	this.shape_21.setTransform(299.9988,189);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF196C").s().p("AgjAAQAFAAACgCQADgCAAgFQAZgFAQgNQADgCAFAAQARANgGAkIgBAKIgKAAIgJAAQgoAAgKgeg");
	this.shape_22.setTransform(296.6283,171.0413);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FA589D").s().p("AgZAtQgMgkADg1IAKAAQAaAHAHgPQABgCAFAAQgBA3AQAqQAAACAFAAQAAAFgBAAQgdAFgdAAQAAgFgBgFg");
	this.shape_23.setTransform(290.4605,156.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9D7DF").s().p("AgEA3IgoAAIAAgKQABgpgLgcQAeAAAcgFQABAAAAgFQAdgBAOgRQACgCAFAAIAABPIAAAKQgFAAgDACQgQAOgaAEIgJAAg");
	this.shape_24.setTransform(293.5,164.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F50869").s().p("AgVA6QgQgqACg3QAggDASgPQAEgCAFAAQARAggHA5IAAAKQgFAAgCACQgOARgcABQgFAAgBgCg");
	this.shape_25.setTransform(295.6186,155);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCD8E1").s().p("AgiAtQAFgFADgGQACgEAAgFIAAgKIAAgxQAYgKAZgJQAFgBAFAAIAAA7IAAAKIgKAAIAAAUIAAAKIgKAAQgbACgWAIIAAgKg");
	this.shape_26.setTransform(273.5,198.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E44791").s().p("AgXANQgEgIAAgJQAZAAAXgFQABAAAAgFIAFAAQACAfgugMIAAAKQgFAAgBgCg");
	this.shape_27.setTransform(278.7541,188.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2116F").s().p("AgJAWQAAgFgCgCQgTgMgJgUQA6hHATBHQACAFAAAFIAAAxIAAAKIgKABIgDAAQgOAAgWgfg");
	this.shape_28.setTransform(267,195.8098);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8096B").s().p("Ag4BdQgNgMgUgGIAAgKIAAg8IAAgJIAAgUIAAgKQAvAMgCggIgFAAIAAgKIAAgUQAFAAADgCQACgDAAgFIB2AUQABAAAEAIQABACAFAAIAAA8IAAAJQgFAAgFABQgWAHgcACIgPgKQgVAhgrA5QgFAAgCgCg");
	this.shape_29.setTransform(286,192.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E57176").s().p("AAxAXQgEgIgBAAIh2gTIAAgKIAAgKQBIATBNgOIAAAFIgKAAIgKAAIAAAdIAAAKQgFAAgBgCg");
	this.shape_30.setTransform(289.5,183.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F98C92").s().p("ACcBEQgkgWg3gGIAAAKIgKAAIg7AAIAAgFQhOAOhIgTIAAAKQgFAAgBgBQgEgTAAgUQBEgfAKgnQACgEAAgFIAoAAIAKAAQAAAFgCACQgDADgFAAQALAiAwgDIAKgBQBUAEAvgfQAEgDAFAAIAAB3IAAAKQgFAAgEgCg");
	this.shape_31.setTransform(297.5,177);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DE3384").s().p("AAIAwQgigYAOhJIAKAAQgIA4AUAfQACACAFAAIAAAKQgFAAgEgCg");
	this.shape_32.setTransform(256.302,108);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FBD6DE").s().p("AgigaIAAgKQArgFATAWQACADAFAAIgBAKQgKAsgPAAQgRAAgahAg");
	this.shape_33.setTransform(261.5,115.7097);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F60E6F").s().p("AAxJCQgTgWgrAEIgKAAQgFAAgCgCQgVgZAIg1IAAgKIAAgUQAKgJAUgBIAKAAQA9ACgMBOIAAAKQgCAcAJAOQADADAAAFQgFAAgCgCgAAkm3QgFAAgCgCQgTgWgrAEQgFAAgCgCQgVgeAIg6IAAgKIAAgKQANgMAbACIAKAAQAnAPAAA3IAAAKQgFAoAKAUg");
	this.shape_34.setTransform(261.4013,157.9667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B32417").s().p("AgJgHQgCgCAAgFQAYAdgBAAIgVgWg");
	this.shape_35.setTransform(307.2446,141.5378);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2280AE").s().p("AgRgGQBIgChIAQg");
	this.shape_36.setTransform(310.825,133.7395);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58C247").s().p("AgJgGQgCgCAAgFQAYAbgBAAIgVgUg");
	this.shape_37.setTransform(306.2196,134.4135);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D3BE0F").s().p("AgKgDQgCgCAAgFQAbAVgCAAQgBAAgWgOg");
	this.shape_38.setTransform(305.332,128.0512);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9D4DD").s().p("AguAsQAAgFgCgDQgPgUAHgpQAeAAAcgFQABAAAAgFQAUgBAMgHQADgCAFAAQAXAfgLATQgCAEAAAFQgFAAgDACQgUAPgfADQgFAAgBACQgEAKgOAAQgHAAgJgCg");
	this.shape_39.setTransform(292.6529,147.6114);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F40C6B").s().p("AgRAcQgUgJgBgcQAFAAACgCQADgDAAgFQAgAEASgMQAEgCAFAAQAPAdgNANQgCACAAAFQgFAAgEADQgMAGgSABQgFAAgEgCg");
	this.shape_40.setTransform(293.9215,141);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FB609F").s().p("AgeAcQgEgIAAgKIAAgKIAAgdIAnAAIAKAAQAAAFgCADQgDACgFAAQABAcAUAJQAEACAFAAQAAAFgBAAQgdAFgdAAQgFAAgBgCg");
	this.shape_41.setTransform(289.5,142);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AA8F8A").s().p("AAFA3QgBg1gNgkQAPABgBgVIAFAAIAAA7IAAAKIAAAeIAAAKg");
	this.shape_42.setTransform(285,137.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8D3DC").s().p("AgEAtIgKAAIgoAAIAAgKIAAg7IAeAAIAKAAQAkACAQgUQACgCAFAAQgBApAJAcQACAFAAAFQgFAAgDACQgOAIgXAAIgOAAg");
	this.shape_43.setTransform(291.5,134.5422);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#287FAB").s().p("AgNgGQgDgCAAgFQAiAbgCAAQgBAAgcgUg");
	this.shape_44.setTransform(304.6569,119.3991);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5CBB47").s().p("AgRgIQBEACg6AOIgEABQgLAAAFgRg");
	this.shape_45.setTransform(303.7564,112.9064);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F20768").s().p("AgTBBIAAgKQgJg0gLgvQAdgBANgRQACgCAFAAQAdAkABA/IAAAKQgFAAgCACQgPASgeAAIgHAAg");
	this.shape_46.setTransform(292,125.5093);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#977269").s().p("AgEBfIgBgKQgIhVgBheIAKAAQgHAlAOAPQACADAAAFQgFA8ANAnQACAFAAAFIgFAAQABAUgNAAIgCAAg");
	this.shape_47.setTransform(284.5,124.5049);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F94B92").s().p("AAQA3IgdAAQAAgFgCgFQgOgnAGg8IAUAAIAJAAQALAwAIAzIABAKIgKAAg");
	this.shape_48.setTransform(287.4122,126.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9C8987").s().p("AAAAeQgEAAAAgBQgFgdAAgdQAJAPAIAPQACAEAAAFIAAAKIAAAKIgKAAg");
	this.shape_49.setTransform(283,112);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F05A97").s().p("AAKAjIgKAAQAAgFgBgEQgIgQgKgOIAAgKIAAgKQAFgFAGgDQAEgCAEAAQAAAnASAWQACADAAAFIgKAAg");
	this.shape_50.setTransform(284,109.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F5CDD6").s().p("AgTAyIgUAAQAAgFgCgDQgPgPAHgkIAAgKIAAgKIAKAAIAKAAQAqAHALgZQABgCAFAAQAkAegYAoQgCAEAAAFQgFAAgCADQgOAQgcABIgKAAg");
	this.shape_51.setTransform(288.9541,116);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(158,41,27,0.953)").s().p("AgTgTIATAAIAKAAQAAAFADACQACADAFAAIAAAJIAAAKQgFAAgDACQgLAIgGAAQgRAAADgng");
	this.shape_52.setTransform(311.9753,125.0357);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(154,34,22,0.965)").s().p("AgOgMQAFAAACgDQADgCAAgFQAJAPAIAPQACAEAAAFQgFAAgDACQgFAEgDAAQgNAAAAgjg");
	this.shape_53.setTransform(308.5,109.3328);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F10A69").s().p("AgVBUQAAgFgCgDQgSgWAAgoIAAgKQAhgfAPgwQABgFAAgFQAqBEgLBHIgBAKQgFAAgBACQgJAUgaAAQgIAAgKgCg");
	this.shape_54.setTransform(288.1642,104.5852);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5CED8").s().p("AgVBDQgQgUgMgWIAAgKQAFAAACgDQADgCAAgFQAqgzAWgbQAAgBAPAKQAFAKADAKQACAFAAAFQAAAFgCAEQgQAvggAhIAAAKQgEAAgEACQgGADgFAFQAAgFgCgDg");
	this.shape_55.setTransform(284,99.5455);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(167,123,94,0.996)").s().p("AgJGVIABgKQAGglgRgNIAAgKIAAhQIABgKQAGg6gRggQAAgFACgEQALgUgXgfQAAgFADgDQANgNgQgdQAAgFgCgFQgJgdABgoIAAgKQgBhAgdgkQAAgFACgEQAYgqgkgdIABgKQALhIgqhEQAAgFgCgFQgDgKgFgKIAyAAIAKAAQAeAQAxgGIAKAAQAiAzAPBFIABAKQAAAFgDACQgCADgFAAQAAAxAWgRQADgCAFAAQALA7ARAzQACAFAAAFIgKAAIgUAAQgFA7AlgbQADgCAFAAIAAG3IAAAKQgFAAgEACQgqAchHAAIgRAAgAA1BIQAuAygxg5QAAAFADACgAArACQAsAtgvgzQAAAEADACgABQgEIAAAOQBBgOgzAAIgOAAgAAhg6QAxAgg0gmQAAAFADABgAAWiUQA/AuhBg0QAAAFACABgAATjFQA7gPhEgCQgGAVAPgEg");
	this.shape_56.setTransform(301,133.5225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(250,215,222,0.996)").s().p("AgsAiIAAgKIAAgdIAAgKIAAgKQAUgKAVgIQADgCAFAAQAUAoASAoQACAEAAAFIgKABIgYABQghAAgWgMg");
	this.shape_57.setTransform(298.5,89.5953);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F75B9F").s().p("AAKATQgWgFgRgOQARABgCgUIAFAAQAJAPAUAEIAKAAQAAAFgDACQgCADgFAAIAAAKIgKgBg");
	this.shape_58.setTransform(277,100);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F81271").s().p("Ag7A5QgUgEgKgPIAAgKIAAgdQA5hKBwAXIAKABIAAAeIAAAKIgKAAIgyAAQgPgKAAABQgVAbgrAzIgKgBg");
	this.shape_59.setTransform(285,94.1682);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAC6D7").s().p("AAFA3QAAg3gngOIAAgKQAWgJAHgWQABgEAAgFQAeAOAEAuIAFAAIAAAJIAAAKQAAAFgCADQgSAQgKAaIAAgKg");
	this.shape_60.setTransform(264.5,101.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FCC9D8").s().p("AgnAjIAAgKQANgQAGgXIABgKQAkACAQgUQACgCAFAAIAAAeIAAAKIgFAAQACAUgRgBQgFAAgDADQgWARgdAKIAAgKg");
	this.shape_61.setTransform(272,98.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(170,207,236,0.996)").s().p("AsPWPQn8lSiCrQIgNhQIAAgKQAAgGgKgHIAAglIAFAAIAAgBIAAhAIgFg/IAEgLIACgBIAEAAIAAgKIAAgyIAAgKIAAgPIAAgiQCDr8IdlnQDniZE+hHQBsgYB4gJQAyAAAxgFIABgFIAyAAIAKAAQA5ABAWADIGaA/QGEA9FmIaQAUAdAPAjQAAAFgCABQh8A+hoBSQgFAAgEADIg9AlQgGAaAagBIAAAFQAAAFgBAEQgHAWgWAJIAAAKIgKAAQgbgCgNAMIAAAKIAAAKIgKAAQgOBKAjAYQAEACAFAAQAvB3AWhjIABgKIAFAAQgKgVAFgnQAKgaASgQQACgDAAgFQAdgKAXgRQADgDAFAAQARAOAXAFIAKABQAMAXAQATQACADAAAFIAAAKIAAAKQAAAeAFAdQAAABAFAAQABBeAIBWIABAKQAOAlABA0IAFAAQAAAKAEAIQABACAFAAQgIAqAPAUQADADAAAFIgKAAQgEA2AMAkQACAFAAAFQALAdgBApIAAAKQAAAFgCAEQgKAnhEAgQAAAUAEATQABABAFAAIAAAKQAAAFgCADQgDACgFAAIAAAUIAAAKQAAAFgBAAQgYAFgZAAQAAAKAEAIQABACAFAAIAAAUIAAAKQgFAAgFABQgZAJgZAKQAAgFgCgFQgThHg7BHQAJAVATANQACABAAAFQgFAAgBACQgMAZggADIAAAKIgKAAQgUAAgKAKIAAAUIAAAKIgKAAQgTBPAxAGIAAgFIAKAAQAhB8AkheQABgFAAgFQAAgFgCgDQgKgOACgcQAJgpAcgWQADgCAAgFQAWgIAcgCIAKAAQAbgHAHAPQABACAFAAQAaATAJAoQAAABAFAAQgHAbAPAHQACABAAAFQgCAqAKAcQACAFAAAFQgCA+ALAwIABAKIAAA8IAAAKQgHAlAOAPQADADAAAFQAAAFgDAEQiRDLjKCUQgSgSgqACQthAkuIgKIAAAKQgFAAgEgCg");
	this.shape_62.setTransform(147.5,142.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(245,135,141,0.996)").s().p("AiFBzQAAgFgCgBQgYgJAGgjQAQABgFgWIgBgJQBnhRB8g+QACgBAAgFQAkA1AgA6QACADAAAFQgFAAgFABQgUAJgUAKIAAAKIAAAKIgKgBQhwgYg5BLQgFAAgCACQgPASggAAIgGAAg");
	this.shape_63.setTransform(283.4487,84.5093);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F11870").s().p("AAQBBQgEgugegOIAAgFQgbABAHgZIA8glQAEgDAFAAIABAJQAFAWgQgBQgGAjAYAJQACAAAAAFIgBAKQgGAYgNAQIgFAAg");
	this.shape_64.setTransform(265.936,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.witchbackground, new cjs.Rectangle(3,0,311,314), null);


(lib.Symbol1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.CachedBmp_19();
	this.instance_2.setTransform(-0.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_2, new cjs.Rectangle(-0.1,0,352,331), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg2/AQpMAAAghRMBt/AAAMAAAAhRg");
	mask_1.setTransform(581.95,106.5);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["candyClimb_atlas_13"],1);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.961,0,0,-0.96,430.8,-592.8)).s().p("EhgFA1/MAAAhr9MDALAAAMAAABr9g")
	}.bind(this);
	this.shape_1.setTransform(614.975,351.475);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(230,6,704,207), null);


(lib.endgamebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-59.25,-19.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("Ar3EyQh/AAhZhaQhZhZAAh/IAAAAQAAh+BZhaQBZhZB/AAIXvAAQB+AABaBZQBZBaAAB+IAAAAQAAB/hZBZQhaBah+AAg");
	this.shape.setTransform(-0.8,-4.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE825D").s().p("An/DOQhWAAg8g8Qg9g8AAhWIAAAAQAAhVA9g8QA8g8BWAAIQAAAQBVAAA8A8QA9A8AABVIAAAAQAABWg9A8Qg8A8hVAAg");
	this.shape_1.setTransform(-0.8,-4.0625,1.4823,1.483);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("An/DOQhWAAg8g8Qg9g8AAhWIAAAAQAAhVA9g8QA8g8BWAAIQAAAQBVAAA8A8QA9A8AABVIAAAAQAABWg9A8Qg8A8hVAAg");
	this.shape_2.setTransform(-0.8,-4.0625,1.4823,1.483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-34.6,213,61.2);


(lib.startbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-83.65,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE825D").s().p("ApuETQhnAAhKhRQhIhQAAhyIAAAAQAAhxBIhRQBKhQBnAAITcAAQBoAABJBQQBKBRAABxIAAAAQAAByhKBQQhJBRhoAAg");
	this.shape.setTransform(3,-2.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("ApuETQhnAAhKhRQhIhQAAhyIAAAAQAAhxBIhRQBKhQBnAAITcAAQBoAABJBQQBKBRAABxIAAAAQAAByhKBQQhJBRhoAAg");
	this.shape_1.setTransform(3,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-29.8,174.5,55);


(lib.buttonBACKTOGAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-83.1,-19.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("An/DOQhWAAg8g8Qg9g8AAhWIAAAAQAAhVA9g8QA8g8BWAAIQAAAQBVAAA8A8QA9A8AABVIAAAAQAABWg9A8Qg8A8hVAAg");
	this.shape.setTransform(2.9001,-2.3356,1.334,1.334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE825D").s().p("AqqETQhzAAhRhRQhQhQAAhyIAAAAQAAhxBQhRQBRhQBzAAIVWAAQByAABQBQQBRBRgBBxIAAAAQABByhRBQQhQBRhyAAg");
	this.shape_1.setTransform(2.9,-2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-29.8,191.7,55);


(lib.backtogamebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(15.2,14.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AoADOQhVAAg8g8Qg9g8AAhWIAAAAQAAhVA9g8QA8g8BVAAIQBAAQBVAAA8A8QA8A8ABBVIAAAAQgBBWg8A8Qg8A8hVAAg");
	this.shape.setTransform(71.997,30.5673,1.4823,1.4812);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE825D").s().p("Ar2ExQh/AAhZhZQhahaAAh+QAAh+BahZQBZhaB/AAIXtAAQB/AABZBaQBaBZAAB+QAAB+haBaQhZBah/gBg");
	this.shape_1.setTransform(71.85,30.0919,1,1.0008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-0.5,213.1,61.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD93A6").s().p("AgOgEIAdgKQABAKgGAIQgGAIgIADg");
	this.shape.setTransform(257.4187,-595.6101,2.2222,2.2222);

	this.instance = new lib.waffle_bg1();
	this.instance.setTransform(-1422.2,-800,2.2222,2.2222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1422.2,-800,2844.5,1600);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.reka2();
	this.instance.setTransform(-1455,-643,1.7808,1.7808);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-556.15,-696.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1455,-696.1,2274.9,1335.3000000000002);


(lib.pinkcream_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance_1 = new lib.pinkcreampng_1();
	this.instance_1.setTransform(0,-44,1,1.1528);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinkcream_1, new cjs.Rectangle(0,-44,1280,830), null);


(lib.startBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.מסךפתיחה();
	this.instance.setTransform(0,-187,0.2418,0.2392);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startBackground, new cjs.Rectangle(0,-187,1313,906.3), null);


(lib.pauseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseButton, new cjs.Rectangle(-2,-2,40,50.5), null);


(lib.musicButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		this.stop();
	}
	this.frame_1 = function() {
		var self=this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65461F").s().p("AheBeQgLgJAAgOQAAgNALgJQAMgKAQAAQAIAAAFACIAAhcQABgKAJgCICDgnIAFAAQAGAAADADQAEAEAAAGIAACGQAAANgMAKQgLAJgRAAQgQAAgMgJQgLgKAAgNQAAgNALgJQAMgKAQAAIAOACIAAg5IhqAeIAABTQAAANgMAKQgLAJgRAAQgQAAgMgJg");
	this.shape.setTransform(18.775,18.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F69796").ss(4,0,0,4).p("Ai4B4QAAgJAAABQACAEANApQANAbAFg5IAJABIEfAAQAEAMAIAQIAAAAQAJA9ADgBQARAAAAiAIAAkXQAAgRgMgLQgMgMgRAAIkfAAQgTAAgJAIQgLAJgDAXIAAEXQAAAFgBgHQgBABACAhQAAADAAAEQAAAXAAATQAAgkAAgNgAi4DoQABgRgBgiQAAgHAAgFQAAAsAAATIAAAP");
	this.shape_1.setTransform(18.6605,23.199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEB56C").s().p("ACdCkIAAAAQgIgQgEgMIkfAAIgJgBQgFA5gNgbIgPgtIAAAIQgCghABgBQAAACABABQAAABAAAAQAAAAAAAAQAAgBAAgBIAAkXQADgXALgJQAJgIATAAIEfAAQARAAAMAMQAMALAAARIAAEXQAACAgRAAIAAAAQgDAAgJg8g");
	this.shape_2.setTransform(18.6605,22.3992);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-2.1,-2.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.4,41.5,52.5);


(lib.musicButtonOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-1.95,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.musicButtonOff, new cjs.Rectangle(-1.9,-2,41.5,52), null);


(lib.questionBiscuit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-412,-271);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionBiscuit_1, new cjs.Rectangle(-412,-271,1178,575), null);


(lib.GameKindsign_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-90.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GameKindsign_1, new cjs.Rectangle(-90.1,0,360.5,344), null);


(lib.arrowUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(50,50,50,0.996)").s().p("AgCBOIgDAAIgBAAIAAAAIgDgEIAAgaIAAgbIAAgZIAAgbIAAgUIgPAPIgGAGIgBAAIgEABIAAAAIgDAAIgBAAIgDgBIAAAAIgBAAIAAgBIgBAAIgCgDIAAgDIAAgBIAOgPIAPgNIAKgKIADgCIAFAAIABAAIACACIANAKIAPANQAIAIAHAHIAAABIAAABIAAAAIAAABIAAABIgDADIAAAAIgBAAIgEABIgCAAIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBAAIgPgOIgHgFIAAACIAAAIIAAAHIAAAHIAAgEIAAAXIAAAaIAAAaIAAAbIAAAAIAAACIAAAAIgEAEIAAAAIAAAAIgEAAIgBAAIAAABIgCgBg");
	this.shape.setTransform(11.65,20.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowUp, new cjs.Rectangle(7,12.4,9.399999999999999,15.799999999999999), null);


(lib.arrowRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,35,35,0.718)").s().p("AAAABIAAgBIAAAAIAAAAIAAABg");
	this.shape.setTransform(20.675,14.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(48,48,48,0.988)").s().p("AgDAAIAHAAIgDAAIgEAAg");
	this.shape_1.setTransform(31.5875,15.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(12,12,12,0.247)").s().p("AgEAAIgEAAIAEAAIAGAAIAHAAIgNAAg");
	this.shape_2.setTransform(32.525,15.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(50,50,50,0.996)").s().p("AAmAvIgBAAIAAAAIgBAAIgBAAIgDgDIAAgBIAAAAIgBgEIAAgDIAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAAAAIAOgQIAFgHIgDAAIgHgBIgHAAIgHAAIAEABIgXAAIgaAAIgaAAIgbAAIAAAAIgBgBIgBAAIgEgCIAAgBIAAAAIgBgFIAAgBIAAAAIAAgBIABgDIAAAAIAAgBIAFgDIAZAAIAbAAIAZAAIAbAAIAUAAIgPgPIgGgGIAAgBIgBgEIAAgBIAAgCIAAAAIABgEIAAgBIAAAAIABAAIAAgBIADgCIADAAIAAAAIAQAPIANAOIAKAKIACADIAAAFIAAAAIgCAEIgKALIgNAQQgIAJgHAGg");
	this.shape_3.setTransform(28.55,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowRight, new cjs.Rectangle(20.7,9.5,15.8,9.399999999999999), null);


(lib.arrowLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(50,50,50,0.996)").s().p("AAmAvIgBAAIAAAAIgBAAIgBAAIgDgDIAAgBIAAAAIgBgEIAAgDIAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAAAAIAOgQIAFgHIgDAAIgHgBIgHAAIgHAAIAEABIgXAAIgaAAIgaAAIgbAAIAAAAIgBgBIgBAAIgEgCIAAgBIAAAAIgBgFIAAgBIAAAAIAAgBIABgDIAAAAIAAgBIAFgDIAZAAIAbAAIAZAAIAbAAIAUAAIgPgPIgGgGIAAgBIgBgEIAAgBIAAgCIAAAAIABgEIAAgBIAAAAIABAAIAAgBIADgCIADAAIAAAAIAQAPIANAOIAKAKIACADIAAAFIAAAAIgCAEIgKALIgNAQQgIAJgHAGg");
	this.shape.setTransform(28.25,14.1,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(47,47,47,0.922)").s().p("AAAAAIAAgBIAAAAIAAgCIAAABIAAAGIAAgEg");
	this.shape_1.setTransform(39.025,14.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,35,35,0.718)").s().p("AAAACIAAgCIAAAAIAAAAIAAAAIAAACg");
	this.shape_2.setTransform(38.975,14.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(12,12,12,0.247)").s().p("AgCAAIgJAAIASAAIAFAAIgFAAg");
	this.shape_3.setTransform(22.4875,12.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(48,48,48,0.988)").s().p("AgEAAIAEAAIAFAAIgJAAg");
	this.shape_4.setTransform(23.7375,12.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowLeft, new cjs.Rectangle(20.4,9.4,18.700000000000003,9.4), null);


(lib.falseAnswer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.falseAnswer, new cjs.Rectangle(0,0,66.5,66.5), null);


(lib.correctAnswer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.3401,0.3401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctAnswer, new cjs.Rectangle(0,0,35.1,25.9), null);


(lib.mars_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgegrQAMgDALAFQADABACABQALAHAEAOQAEAOgEAGQgDAGgBACQgBABgBACQgGAHgIADQgCABgCABQgOAEgNgIQgNgHgDgOQgEgOAHgMQAHgNAOgEgAANAPIArAe");
	this.shape.setTransform(40.7554,12.365);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5B9B0").s().p("AgegCIAqAAIAHAAIAGAAIAFAAIAAACQgQADgNAAQgRAAgOgFg");
	this.shape_1.setTransform(76.8,73.1063);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF4F35").s().p("AByA3IgrAAIgGgBQgUgHgeACIAAgEQhZgdgzhAIAHgFIAGgBQAqAhA3AXIABAEQAhgGAVAAQgXgQglgEIAAgDQASgBARgDIAAgDIAHgFQADgBADAAIAGAAQAfALAeANIAGABIAYAwIABAFQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIAAAGIgGAAg");
	this.shape_2.setTransform(66.675,67.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#882420").s().p("AgUgDQAKABgBgNIADAAQAGARAXADIABADQgDAAgDACIgHAEIgFABIgKABQgSAAAEgTg");
	this.shape_3.setTransform(67.2702,62.791);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C03B2B").s().p("AgMABIAAgCQAkADgQAAIgUgBg");
	this.shape_4.setTransform(76.9125,44.8286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AE2E25").s().p("AgtgOIAAgGQAagigCA1IAAAFQAnAaAcgdIAAADQgBAYgRAFIgGABIgFAAQg3AAgHgwg");
	this.shape_5.setTransform(69.75,45.5356);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0D6D0").s().p("AAAAqQgBgdgBgcIAAgbIAFAAIAAAbIAAA0IAAAGIgDgBg");
	this.shape_6.setTransform(45.825,41.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF2D20").s().p("AAqCsQg1gXgrgiQAAgDgCgCQgWgpgNg0QAgAaAfAcQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAQAQAFgJAgIgBAGIAwAdQADACADAAIAAADQAmAEAXARQgVAAgiAGIgBgEgAhhh0IAAgrQAeglgCAxIgEAAIgDABQgCAhgTADIAAgGg");
	this.shape_7.setTransform(60.85,50.2994);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF2F21").s().p("AgLgLIALAAIAGAAIAFAHIABAFQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgGAKgEAAQgHAAgCgXg");
	this.shape_8.setTransform(54.725,29.3502);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF4E35").s().p("ABEDeIgygdIABgGQAKghgRgEQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgegbgggaQAMA0AXAoQACACAAAEIgGABIgHAFQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQg5g+gShlIAAgGIAAg0IAAgbIAAgGQAPhFAhg0QAPgXASgTQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQAKAfgDAqIAAAGIgHAAIgMAAQAFAoAQgaQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQgPBzA6ApQACACADAAQAMAkALAlIABAGQAgAUAIAvIADAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgFACgGAAIAAAGIgDAAQABAOgKgBQgFAZAegGIAFgBIAAADQgSADgSAAQgDAAgDgBgAg8hRIAAAqIAAAGIAAAHQAEAQgKACQgIA6AtgVIAFgBQgCgsgJgvIgBgGIADgBQACgbgJAAQgHAAgNAQg");
	this.shape_9.setTransform(57.175,42.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AAAB6QgyABgjglQgkgjAAgzQAAgyAkgkQAjgkAyAAQAzAAAkAkQATAUAJAZQAIATAAAWQAAAzgkAjQgjAjguABIgGAAgABGAuIgrgegAgHAbIAHAAIAAgBIAAAAIABAAIAAAAIAAAAIAFgCQAIgDAHgHIACgDIAEgIQACgDAAgEIgCgMQgEgPgNgHIgEgCIgBAAQgFgDgHAAIAAAAIAAAAIgHABIgBAAIAAAAIgBABIABgBIAAAAIABAAIAHgBIAAAAIAAAAQAHAAAFADIABAAIAEACQANAHAEAPIACAMQAAAEgCADIgEAIIgCADQgHAHgIADIgFACIAAAAIAAAAIgBAAIAAAAIAAABIgHAAIAAAAIAAAAQgIAAgHgDIAAAAIgBgBIAAAAIgBAAIAAgBQgNgHgDgOIgCgJQAAgJAFgIQAHgNAOgDQgOADgHANQgFAIAAAJIACAJQADAOANAHIAAABIABAAIAAAAIABABIAAAAQAHADAIAAIAAAAIAAAAg");
	this.shape_10.setTransform(39.4,12.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B43227").s().p("AgIAcQgIgWgEgaIAAgGQBEgOgrAiQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAIAggTABg");
	this.shape_11.setTransform(77.7373,25.9855);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF2C1F").s().p("AiRB6QAKgCgEgQIAAgHQASgDADghIADAAIABAGQAJAvACAtIgFABQgMAFgJAAQgWAAAGgrgAgvCMIgDAAQABgjAIggQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgMgXAEglQgDg+AmgfQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAIgLAJgJQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAPgHAWABIAGAAQAqggA4gQIAGgBQgWAdgaAbQAAABgBAAQAAAAAAABQAAABAAAAQAAABAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgVAXANAZIgBAFQgSAug3AJIgFABQgUANgLAWIABAHQAIAlgDAwQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgKAHgIAAQgGAAgFgFg");
	this.shape_12.setTransform(65.0896,29.4353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D05539").s().p("AgIAQQAPgTgngFQAlADAWgOQADgBADAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgUATgUASQAAgDABgCg");
	this.shape_13.setTransform(98.075,63.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE5338").s().p("AADAtQgXgDgZAAIgBgGIgXgwIgGgBQgegNgggLIAAgGQBGgLBGAUIAAADQAzA5AshDQAAgBAAAAQABAAAAAAQABAAAAgBQABAAABAAIAIABQAnAEgPAVQgCACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQg1AnhLARg");
	this.shape_14.setTransform(83.8434,67.3684);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C85339").s().p("AgPAGIgFAAIgGAAIAAgGQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQABgBAAgBQAXAAAZADIAAADQgDAAgDABQgKAGgPAAIgMgBg");
	this.shape_15.setTransform(81.4,72.2063);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D0593F").s().p("AgeAwIAAgFQALgVgEghIgBgGQAggLATgZQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABAAIgBAGIgeBIQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgLARgQAMIAAgHg");
	this.shape_16.setTransform(104.425,56.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CF624C").s().p("AgFAhIAAgvIAAgHIAAgGQAJABgBgNIADAAIAAASIAAAHIAAAGQAAAegLASIAAgHg");
	this.shape_17.setTransform(108.101,46.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E9B4A9").s().p("AgCAeIAAgSIAAgGIAAgqQAKAdgIArQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIAAgHg");
	this.shape_18.setTransform(109.0184,41.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#992922").s().p("AgbBeIgBgDQhHgVhFAMIAAAGIgGAAIgBgDQgYgEgFgSIAAgGQAGAAAEgCQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAngNApgLIAHAAIAdglQABgCAAgDQAbgQApgCIAFAAQAPgKAIgPQABgDAAgDIhAgtQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgGQAKAIAVgBIAGgBQAFAJAMADIAGAAQANAMAIASQAAAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAlIAAAGQgPATgBAdIAEAAQASARATgKIAFgBQAbhAAqgyQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAbABAdgHIAFAAIAAAwIAAAHQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgSAZghAKIAAAFQAFAjgLAUIAAAGIAAAHQgDAAgDABQgWAOgmgDIgIAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgXAlgaAAQgVAAgXgag");
	this.shape_19.setTransform(86.95,54.8422);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA2B24").s().p("AgzCTIgDAAQABgdAOgUIAAgGIAAglQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgIgRgNgMIgGgBQgNgCgGgJIgGAAQgUACgKgIIAAAGQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgLgRACgdIAAgGIAGAAIAHAAIB/AAIAGAAQA1ALASg1QAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAPhJIAEAAQAYAwAMA+IAAAGIAAApIAAAHIgDAAQABANgKgBIAAAGIAAAGIgGABQgdAHgagCQgBAAgBAAQAAABgBAAQgBAAAAAAQAAABgBAAQgqAxgaBBIgFABQgHAEgHAAQgMAAgMgLg");
	this.shape_20.setTransform(94.884,42.1602);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC3F30").s().p("AA9ADIh/AAIAAgFQBCAABDACIAAADIgGAAg");
	this.shape_21.setTransform(89.075,37.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D0795D").s().p("AgOgSIAGAAQAGAJAHAIQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAAAFADAFQAAABAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgIAEgGAAQgQAAACglg");
	this.shape_22.setTransform(86.9123,28.8719);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB7551").s().p("AgVARQgCgOAAgPQAXgLATAKIAFABIAAAEQgggDgJARIAAAGIAAAGQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBg");
	this.shape_23.setTransform(94.6,21.4619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E58667").s().p("AALBIQgugvgQAwQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgHgIgGgJIAAgGQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBQANgZgRgbQAqgTARgrIACgFQAvATAeAlQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgFAAIgZAAIgGgBQgUgJgWAKQAAAPADAPQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAUAbgEAXQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(93.05,21.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E65939").s().p("AguDcQgIgvgggVIgBgFQgLglgMglQgDAAgCgBQg7gqAPhyIgBgGIgFgHIAAgGQADgqgKggIAAgFIAtgjQABgCAEAAIADABQABAJgLACQgDAoAogDIAGAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgmAfADA/QgEAlAMAXQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQgIAegBAkIADAAQALAKASgMQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQADgwgIglIgBgGQALgXAVgNIAFgBQA3gJARguIABgFQgNgZAVgXQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAZAZAlgLIAFgCQAZAZARAgIABAFIAAAGIgGAAQgDA0AhgSQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgDQAUARggAXQgDAAgDACQgWANgcAJQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgIAIgJAFQACAyAHgrIADgBQgCAeALARQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIBCAtQAAADgBACQgIAQgQAJIgGAAQgoACgbAQQAAAEgCACIgdAmIgGAAQgoAKgnAOIgDAAgAhDA3IAAAGQAHAzA8gCIAFgBQASgGABgYIAAgCQgbAdgogbIAAgGQABgfgJAAQgGAAgKANgAAkBGQA1ACg1gFgAAkiRIAAAGQAEAaAIAWIAAADQAUgBgHggQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAfgYgZAAQgLAAgVAFg");
	this.shape_25.setTransform(71.9596,37.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5B9A6").s().p("AAcADIg9AAIAAgFQAhAAAhACIABADIgGAAg");
	this.shape_26.setTransform(77.725,10.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB734F").s().p("AgVB8QAKgGAHgIQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAagKAXgNQACgCADAAQAggXgUgQIAAADQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgDgFAAgGQAQgwAvAuQABABAAAAQABAAAAAAQABAAAAABQABAAABAAQADgXgUgbQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIAAgHIAAgGQAKgRAhACIAAgDIAZAAIAGAAQAQAIALAPQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQABAXAPAJQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgDABIgPBIQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAAAQgRA2g1gMIAAgDQhDgDhEAAIAAAGIgFAAIgGAAIAAAGIgDABQgEAUgCAAQgDAAgBgbgAAnADQgSgfgXgYIgGABQglALgZgYQAAgBAAgBQABAAAAgBQAAgBAAAAQAAAAABgBQAZgbAWgdIgFABQg4AQgrAgIgGAAQgWgBgPAHQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgKAJgHALIgGAAQgoADADgoQAKgBgBgKIgDgBIAAgGQA8gjBRgNIAGgBIA+AAIAGAAIAwAGIAGAAIA2AbQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIgBAGQgSAqgqATQARAcgNAZQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBgFg");
	this.shape_27.setTransform(82.0145,25.5369);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFDFD").s().p("AlmFKIgGAAIAAlTIAAibQAugCAjgiQAkgkAAgzQAAgWgIgUIABAAIJlAAIAGAAIAAKNIAAAGIrTAAgAggE9IAFABQAXALAlgIIAAgDQAZADANgIQADgBADAAQBLgSA0gnQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAWgTAUgTQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAQgMALgRQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAehJIABgGQAMgSAAgfIAAgGQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAIgqgLgdIgBgHQgLg+gZgvQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBQgOgJgCgXQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQgLgOgQgJQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgfgkgvgUQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIg2gbIgGAAIgxgHIAAgCQghgDgigBIAAAGIgGABQhRANg7AkIAAAFQgEABgCABIgsAjIAAAGQgBAAAAAAQgBAAgBAAQAAABgBAAQAAABAAAAQgTAUgOAWQghA0gPBFIAAAGIgHAAIAAAbQABAcACAdIAEABQARBlA5A/QABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAzBBBZAdIABAEIAKgBQAXAAARAGg");
	this.shape_28.setTransform(76.5,41);

	this.instance = new lib.backToNormalImageSize();
	this.instance.setTransform(39.4,12.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9999").s().p("AgRAfQgNgIgDgOQgEgNAHgNQAHgMAOgEQALgDALAEIAFACQAMAIAEAOQAEANgEAGIgEAIIgCADQgGAHgJAEIgEABIgJACQgJAAgIgFg");
	this.shape_29.setTransform(38.6929,11.4346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_29},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,0,85.8,74);


(lib.dog_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_148();
	this.instance.setTransform(-49.85,4,0.5,0.5);

	this.instance_1 = new lib.backToNormalImageSize();
	this.instance_1.setTransform(-37.65,16.25);

	this.instance_2 = new lib.CachedBmp_149();
	this.instance_2.setTransform(-42.9,10.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,4,98.1,91);


(lib.bunny_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_146();
	this.instance.setTransform(-44.9,11.4,0.5,0.5);

	this.instance_1 = new lib.backToNormalImageSize();
	this.instance_1.setTransform(-32.65,23.45);

	this.instance_2 = new lib.CachedBmp_147();
	this.instance_2.setTransform(-42,20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,11.2,103,77.8);


(lib.fullProgressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2697C").s().p("AlMT0QA1hlAThZQAzjLAKjTQAEi/ATmNQAOkzBNguQhHAgCJhtQCHhtBKicQBLicAeirQAeirArjTQAEgqAGgVQAJgjAfgPQAOAVAAAgIAACtQgBRCgeJDQgMDlg5C7Qg5C8iWCLQhxBsiPBAQiPA+idALQBQiHATgng");
	this.shape.setTransform(31.5529,506.8148,0.1858,0.137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D98097").s().p("AAHMjQixhAiGhxQiGhwhQioQhPipgNjSIACi+QAAhxgci1IgVgyQBOAWCYgYQEvgwDig9QDjg9BygkQBzgjAagSIApgdQAYAOAFAbQACAKgBAnQgCCkAFFIQACEmgUDEQgSDehQDQQgtB7hlBWQgpAEgoAAQieAAiWg3g");
	this.shape_1.setTransform(17.4763,514.8341,0.1858,0.137);

	this.instance = new lib.CachedBmp_135();
	this.instance.setTransform(4.9,467.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_136();
	this.instance_1.setTransform(4.65,446.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_137();
	this.instance_2.setTransform(4.6,424.65,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_138();
	this.instance_3.setTransform(4.6,405,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_139();
	this.instance_4.setTransform(4.6,385.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_140();
	this.instance_5.setTransform(4.6,362.6,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_141();
	this.instance_6.setTransform(4.6,344.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_142();
	this.instance_7.setTransform(4.55,330.9,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_143();
	this.instance_8.setTransform(4.45,326.4,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_144();
	this.instance_9.setTransform(4.45,326.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// Layer_2
	this.instance_10 = new lib.normalami();
	this.instance_10.setTransform(21.6,294.4,0.0915,0.0886,0,0,0,182.5,293.6);

	this.instance_11 = new lib.CachedBmp_145();
	this.instance_11.setTransform(-36.55,317.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,268.4,84,268);


(lib.marshmello = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		this.stop();
	}
	this.frame_1 = function() {
		var self=this;
		this.stop();
	}
	this.frame_2 = function() {
		var self=this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_128();
	this.instance.setTransform(-60.75,107.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_127();
	this.instance_1.setTransform(-71.15,-7.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_134();
	this.instance_2.setTransform(-58.85,373.2,0.5,0.5);

	this.instance_3 = new lib.correctAnswer();
	this.instance_3.setTransform(11.4,149.95,1.2743,1.4701,0,0,0,17.4,13);

	this.instance_4 = new lib.CachedBmp_130();
	this.instance_4.setTransform(-61.25,106.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_129();
	this.instance_5.setTransform(-71.15,-7.5,0.5,0.5);

	this.instance_6 = new lib.falseAnswer();
	this.instance_6.setTransform(11.75,154.9,0.5703,0.5991,0,0,0,33.2,33.4);

	this.instance_7 = new lib.CachedBmp_133();
	this.instance_7.setTransform(-61.25,106.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_132();
	this.instance_8.setTransform(-71.15,-7.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-7.5,150.5,391.5);


(lib.watch_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgegrQAPgDANAHQABAAAAABQALAHADANQAEAOgEAGQgDAGgBACQgBABgBACQgHAJgLADQgOAEgNgIQgNgHgDgOQgEgOAHgMQAFgIAGgEQAFgDAFgCgAANAPIArAe");
	this.shape.setTransform(-36.5946,29.9167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ag8BrQgNgIgNgNQgjgjgBgzQABgyAjgkQAlgkAxAAQAzAAAjAkQAWAWAJAbQAFASAAATQAAAzgkAjQgjAlgzgBQggABgcgQgABGAuIgrgegAgHAbIAHAAIABgBIAAAAIAAAAQAMgDAHgJIADgDIAEgIQACgDAAgEIgCgMQgEgOgLgHIgCgBIAAAAIgBgBQgIgEgHAAIAAAAIgBAAIgIABIgBABIABgBIAIgBIABAAIAAAAQAHAAAIAEIABABIAAAAIACABQALAHAEAOIACAMQAAAEgCADIgEAIIgDADQgHAJgMADIAAAAIAAAAIgBABIgHAAIAAAAIAAAAQgIAAgHgDIgBgBIgBAAIAAgBQgNgHgEgOIgBgJQAAgJAFgIQAEgIAHgEQAEgDAGgBQgGABgEADQgHAEgEAIQgFAIAAAJIABAJQAEAOANAHIAAABIABAAIABABQAHADAIAAIAAAAIAAAAg");
	this.shape_1.setTransform(-37.95,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2B2B").s().p("AATAQQgbgIgYgLQAIgDAFgFQACgCAAgDQAXAEAUAIIAHABIAAAGIAAAHIgHAAIAAAHIgHgBg");
	this.shape_2.setTransform(-3.4,76.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#838181").s().p("Ag2gGIBtAJIAAAEIgHAAIgQAAQgyAAgkgNg");
	this.shape_3.setTransform(-30.475,65.7664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282526").s().p("AgDAOQgMgCgCgMIAGgHQABgCAAgEQAOAEAJAIQACABADAAQAAAEgBABQgGAFgHAEIgHAAg");
	this.shape_4.setTransform(-7.075,74.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494647").s().p("AAXATQgQgIgVgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgOgIgHgPQATADAIAMQACADABACQAUADAQAKQACABAEAAQAAAEgCABQgCACgDAAQgDAAgDgCg");
	this.shape_5.setTransform(-5.95,71.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282425").s().p("AAFATQgLgMgLgNQAHgEAFgFQACgCAAgDQAIAMALAJQACACAAAEQAAADgCACQgBACgEAAIAAAHQgEAAgCgCg");
	this.shape_6.setTransform(-14.375,69.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#302C2D").s().p("AAJANQgRgHgRgJQAZADAJgLQACgCAAgDQAHAGAGAIQABACAAADQAAAEgBACQgGAFgHAEQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_7.setTransform(-17.3,66.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#504D4D").s().p("AAZAyQgNgQgTgKQABgDgCgDQgUgYAAgtIAHAAQAFAlAQAZQAAADAAADQATAKAJATQABADAAADQgDAAgBgCg");
	this.shape_8.setTransform(-12.55,64.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7B6B6").s().p("AgDAjIAAgHIAAg+IAHAAIAAA+IAAAHIgHAAg");
	this.shape_9.setTransform(-15.125,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F2C2D").s().p("AAAAjQgCgjgBgiIAHAAIAAA+IAAAHIgEAAg");
	this.shape_10.setTransform(-15.85,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252122").s().p("AgHgqIAHAAIAHAAIABAHQAEATgMACIAAApIAAAHQAAAEgBACIgCADQgHAAADhVg");
	this.shape_11.setTransform(-18.3726,54.6613);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#171213").s().p("AAEBaQgPhSAFhhIAOCsIAAAHIgEAAg");
	this.shape_12.setTransform(-41.8687,55.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C595A").s().p("AAIBdQgbhMALhuIAHAAQgGBiAQBRIAEABIAAAHQgBAAgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_13.setTransform(-42.3032,55.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3839").s().p("AgGAOQAEgOgMAAIAAgGQANgCAEgLQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAOAHgMAPQgCABAAAEQAAADgCACQgFAGgHADIABgHg");
	this.shape_14.setTransform(-12.5302,39.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#312D2E").s().p("AgkAYIAAgHIAAgOIAAgGQAegKAcgJIAHgBQAEADACAEQACADAAADIAAAHIgHABQgcAKgfAJIAAAHIgHAAg");
	this.shape_15.setTransform(-4.5,35.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#312E2F").s().p("AgQATQANgQgOgFIAAgHQARgDAMgKQACgCAEAAIAAAPIAAAHQgEAAgBACQgMAPgSAKQAAgEABgCg");
	this.shape_16.setTransform(-9.975,38.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1A1617").s().p("Ag6gCIAzAAIAHAAIAHgBQAjgFAQAMIgHAAIgkABQgoAAghgHg");
	this.shape_17.setTransform(-25.7,45.1771);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#423E3F").s().p("AAGAZQgFgXgmAJIAAgHQAzADAKglIAEAAQANgBgFAPIgBAHQABADgCACQgQAQgMAUIAAgHg");
	this.shape_18.setTransform(-16.85,43.0992);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9A7A7").s().p("AhBAGIAAgGQA9gEA+gDIAIAAIAAAHIgIAAIgzAAIgGAAQgQAIgZAAIgZgCg");
	this.shape_19.setTransform(-32.3,44.9281);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9E9D9E").s().p("AgDBTIAAgHIAAgGIAAgSIAAg+IAAhIQAMBKgJBbg");
	this.shape_20.setTransform(52.9134,55.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#817E7F").s().p("AAdADIhAAAIAAgFIBAAAIAHAAIAAAFIgHAAg");
	this.shape_21.setTransform(3.55,76.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3B3839").s().p("Ag5ABIAAgGIAHAAIBlAAIAIAAIgBAEQghAHggAAQgZAAgZgFg");
	this.shape_22.setTransform(5,78.2167);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#120E0F").s().p("AAvADIhlAAIAAgGIBBAAIAHAAQATAAARADIABADIgIAAg");
	this.shape_23.setTransform(5.375,77.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2F2B2C").s().p("AAAAKQgRgDgTAAIAAgHQAkAAAXgMIAGgBQAEAEACAEQACACgBADQABADgCACQgPAIgUABIAAgEg");
	this.shape_24.setTransform(10.85,76.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8B8889").s().p("AgVAJQgLgFgLgHQADAAACgBQACgCAAgEQAeAKArgDIAHAAIgBADQgdADgbABIAAAHQgEAAgEgCg");
	this.shape_25.setTransform(1.35,73.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#575455").s().p("AgyAHIAAgHQAdAAAcgDIABgDIAkAAIAHAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgkAKguAAIgSAAg");
	this.shape_26.setTransform(5,74.1702);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1A1A1A").s().p("AAUAaQACgCAAgDQghg9gmg6QgBgCAAgDQA9AsAnBCQABADAAAEQgYA2gqAjQgCABgEAAQAAgpApglg");
	this.shape_27.setTransform(0.625,53.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#272324").s().p("AgiAgQgBgEgEgDIAAgHIAdgNIAIgBQAQgUAVgUQACgBADAAIAAAOIAAAHQAAADgBACQgdAfgqASQAAgDgCgDg");
	this.shape_28.setTransform(17.8,72.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B2728").s().p("AgKAKIAAgMIAAgHIAAgIIAIAAQAGAAAGADQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABIgBAGQgFAPgPAGIAAgIg");
	this.shape_29.setTransform(22.9,68.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A5A4A4").s().p("Ag2AAQAygEA0gCIAHAAIgBADQg2AGg2AEIAAgHg");
	this.shape_30.setTransform(34.625,66.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444142").s().p("AgTAGQgFgDgIAAIAAgGIAAgGIAIAAQAQALAigEIAHgBIAAAGIgHAAQgdgDgOALQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_31.setTransform(25.85,66.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D0CFCF").s().p("AAAAZIgHAAIAAgHIAAgqIAHAAQALANgEAdIgBAHIgGAAg");
	this.shape_32.setTransform(25.5614,55.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7E6E6").s().p("AAdDAIhAAAIgIgBQgUgIgYgFQgEAAgBgCQgJgIgPgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQgagNgRgSQAAgDgCgCQgLgKgJgNQAAgDgCgDQgGgIgHgHIAAgGQgNgegIghIAAgHIAAgpQAMgCgFgTIAAgHQAJgQAFgTIAAgHQAMgUAQgQQACgCgBgEQAIgDAGgGQACgBAAgEQASgJANgRQABgCAEAAIAHAAQAAAEACACQACABAEAAQAAABgBABQAAABAAAAQAAABgBAAQAAAAgBABQgfAUgZAYQAAAEgBACQgNAagPAYIAAAVIAAAHIgIAAQABAjADAhIAEABQAAAtAUAZQACADgBADQAUAKANAQQABACADAAQAHAPAOAJQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAWAEAQAJQADABADAAQALAHALAGQAEABAEAAQA4ADArgNQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAcgBARgLQADgCAEAAQAZgcAcgaQACgCADAAQARgkAMgpIABgGIAHAAIAHAAIAAAHQgDAmgSAYIAAAHIgIAAIAAAHIAAAHIgIAAIAAAHIAAAHQgDAAgBACQgVATgSAVIgHABIgeANIAAAHIgGABQgXAMglABIgHAAg");
	this.shape_33.setTransform(3.55,57.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4F4C4D").s().p("AhFBiQBkghAXhqIAAgHQANgQgFghIAAgHQAMAQgFAhIAAAHIgBAHQgMAogQAkQgEAAgCACQgbAagZAcQgDAAgDABQgRALgcACIAAgHg");
	this.shape_34.setTransform(17.1464,62.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4B4848").s().p("AARAqIgCgHQgPgngTglQAmAaABA5g");
	this.shape_35.setTransform(20.9,47.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1F1B1C").s().p("AAAAsIAAgHQAEgegLgLIAAgHIAAgVIAAgHIAAgHQAbBKgUATg");
	this.shape_36.setTransform(26.3123,53.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCFCFC").s().p("Ag9CtQgEAAgDgBQgQgJgVgEQAAgDgCgDQgIgMgTgDQAAgDgBgDQgJgTgTgKQAAgDgCgDQgQgagFglIAAgHIAAg+IAAgHIAAgHQAehaBeggQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQCKgWBEBMQACACADAAQATAlAQAoIACAHIAAA3IAAAHIgBAHQgXBqhlAhIAAAHIgHAAIgkAAIgIAAIgSABQgfAAgXgIgAhRhxQAlA6AiA9QAAADgCACQgqAlAAApQAEAAACgBQArgjAYg1QgBgEgBgDQglhDg/gtQAAAEACACg");
	this.shape_37.setTransform(3.9,55.4377);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#595657").s().p("AirBNIAAgHIAAgVQAPgYANgZQACgCAAgEQAZgYAfgUQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAgBQBKghBdATIAIAAQATAJASALQADABADAAQAUAQAPAUQACADAAADQgDAAgCgCQhEhMiKAWQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQheAggeBZIAAAHIAAAHIgHAAg");
	this.shape_38.setTransform(1.7,44.1177);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DFDFDF").s().p("AAkBlIABgHQAFghgNgQIAAAHQAGAhgNAQIAAgHIAAg4IADAAQgBg5gmgZQAAgEgCgCQgPgUgTgQIAAgHIAAgHIAHAAIAHAAQAEAHAFAFQACACAEAAQAXAdAZAcQACACAAAEQAPARADAeIAEAAIAAAVIAAAHIgHAAIAAAqIAAAHIgIAAg");
	this.shape_39.setTransform(20.375,47.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#242021").s().p("AiuC0QgYgMgNgVIAAgHQAEgBABgBQACgCAAgEQASATAZAMQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgBADIgGAIQgEAAgDgCgACYh1QgZgbgZgeIAIgFQADgCAEAAQAWASAUATQACACAAAEQAJAXAqgGIAAADIgHAAQghgDgSAKQAAgDgCgDg");
	this.shape_40.setTransform(7.925,56.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9C9A9B").s().p("AAkADIhPAAIAAgFIBPAAIAIAAIAAAFIgIAAg");
	this.shape_41.setTransform(3.55,34.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#433F40").s().p("AAhAEIhIAAIAAgGQAnAAAoACIAAAEIgHAAg");
	this.shape_42.setTransform(3.925,32.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#171314").s().p("AAhAHIhPAAQAAgEgCgCQgCgEgEgDIAIAAIAHAAIBIAAIAHAAIAHAAIAIAAQAAADgCACQgFAEgIAEIgHAAg");
	this.shape_43.setTransform(3.9,33.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#221E1F").s().p("AgFAMQgFgFgEgHIAAgGQAEAAACgCQACgCAAgDQAKAHAJAIQACACAAADQgEAAgDACIgIAFQgDAAgCgCg");
	this.shape_44.setTransform(18.175,37.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C2829").s().p("AAHASIgHAAIAAgEQgTgCgCgPIAAgHQADAAACgBQACgCAAgDQAOAKAVAGQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQAAADgCACQgCABgDABIAAAHIgIAAg");
	this.shape_45.setTransform(15.25,36.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3E2E3").s().p("AAPAQQgQgLgUgHIAAgHQAEgBACgBQACgCAAgEIAHAAIAGAAQACAQAUABIAAAEIAAAGIAAAHQgEABgDgCg");
	this.shape_46.setTransform(13.05,37.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECECEC").s().p("AhcAQQgCgCAAgDIAAgHQAfgIAcgLIAHgBIBPAAIAIAAQAUgBAKAGQACACAEAAQAAADgCACQgCACgDAAIAAAGIgIgBQhdgRhKAgQgDAAgCgCg");
	this.shape_47.setTransform(2.075,36.7933);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#322E2F").s().p("AAOAOIgHAAQgEAAgCgCQgJgGgUABIAAgHQAHgDAFgFQACgCAAgDQAagCAMAOQABABAEAAQAAADgCACQgCACgDAAIAAAHIgIAAg");
	this.shape_48.setTransform(10.875,34.3625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#151112").s().p("AAWBTIAEgYIAAASIAAAGgAgZhSIAkAAIAHAAQAEgBACACQACACAAAEIAABIQgJg5gqgWg");
	this.shape_49.setTransform(49.975,54.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AC3BpIAAgHQASgZAEgmIAAgHIAHAAIAAAEQAVgUgchKIAAAHIAAAHIgEAAQgDgfgPgRQASgLAhADIAIABQAtAMBAgFIAIAAIBBAAIAHAAQATAAASADIAAAEIgHAAIglAAQArAWAJA5IAAA+IgEAZIAEAAIAAAHQAAABgBAAQAAABAAABQAAAAAAAAQAAABAAAAQg2ARhGAAIgHAAQg1ACgxAFIgIAAIgSACQgVAAgMgJgAj4BwIgHAAIgsAAIAAgEIhtgKIgIAAIgrAAIAAgHIgBgHIgPitIAAgHIAeAAIAHAAQAqAFAZgLIAGgBQAuAMBAgFIAHAAQgQgNgjAFIgHABIAAgHIAsAAIAHAAQAngJAEAXIABAHIgBAHQgEATgJAPIgIAAIgIAAQgEBiALgQQABgCAAgEQAIAiANAdIABAHQAAADgCACQgIAJgSAAIgJAAg");
	this.shape_50.setTransform(5,55.2699);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#413D3F").s().p("AggAGIAAgDQgqAFgJgWQBKAQBWAEIAHAAIAAAHIgHAAIgkACQgpAAgggJg");
	this.shape_51.setTransform(32.425,44.2235);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#807D7E").s().p("AAdADIhAAAIAAgGQAjAAAkADIAAADIgHAAg");
	this.shape_52.setTransform(44.5,45.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AnpEsIAAnGQAbAQAhgBQAzABAkglQAkgjAAgzQAAgUgGgSIMbAAIAHAAIAAJXgAkrBoIAsAAIAHAAQARAKASAHQABABAAAAQAAAAABABQAAAAAAABQAAABAAABQALAOAMAMQACACAEAAQANAVAZAMQADACADAAQACALAMACIAIAAQAYAMAcAIIAHABQA4AMA7gPIABgEQAUgBAOgIQACgCAAgDQArgSAdggQABgCAAgDQAQgGAFgQIABgGQAPgLAdADIAIAAQA2gDA2gHIABgDQBGAAA2gRQAAgBAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBIADAAQAJhbgMhKQAAgEgCgCQgCgCgEABIAAgEQgSgDgTgBIAAgDQgkgEgkAAIgIAAQhXgEhKgRQAAgDgBgCQgVgTgWgSQAAgDgCgBQgJgJgKgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgVgHgPgKQgEAAgCgCQgLgOgbACIgIAAIgHAAIAAgDQgngEgoAAIAAAHIgHAAIgIAAIgHABQgdAJgeAKIAAAHQgEAAgBACQgNAKgSADIAAAHQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgFALgNABIAAAIIgEAAQgLAmgzgDIAAAHIgHAAIgsAAIgIAAQg/ACg9AEIAAAHIgHAAIgeAAIAAAIIgHAAQgKBuAcBMQAAAAAAAAQABAAAAAAQABAAABAAQABABABAAIArAAIAIAAQApAQA9gDIAHAAg");
	this.shape_53.setTransform(5,56);

	this.instance = new lib.backToNormalImageSize();
	this.instance.setTransform(-37.95,29.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF9999").s().p("AgRAfQgNgIgDgOQgEgNAHgNQAEgHAHgFQAFgDAFgBQAOgEANAHIABABQALAIAEANQAEANgEAGIgEAIIgCADQgIAJgLADIgJACQgJAAgIgFg");
	this.shape_54.setTransform(-38.6571,28.9862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_50},{t:this.shape_51},{t:this.shape_49},{t:this.shape_47},{t:this.shape_46},{t:this.shape_48},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_32},{t:this.shape_33},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_54},{t:this.shape_19},{t:this.shape_17},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10},{t:this.shape_11},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,17.6,104.2,68.4);


(lib.iceCube_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgegrQAPgDANAHQALAHAEAOQAEAOgEAGQgDAGgBACQgBABgBACQgHAJgLADQgOAEgNgIQgNgHgDgOQgEgOAHgMQAHgNAOgEgAANAPIArAe");
	this.shape.setTransform(-36.2446,16.3667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ag0BuQgSgIgQgPQgkglAAgyQAAgxAkglQAkgjAygBQAzABAjAjQAMAMAHAMQASAcgBAiQAAAygkAlQgjAjgzABQgcAAgYgNgABGAuIgrgegAgHAbIAIgBIAAAAIABAAQALgDAHgJIADgDIAEgIQACgDAAgEIgCgNQgEgNgMgIIgCgBIAAAAIgBAAQgHgEgHAAIgBAAIAAAAIgJABIAJgBIAAAAIABAAQAHAAAHAEIABAAIAAAAIACABQAMAIAEANIACANQAAAEgCADIgEAIIgDADQgHAJgLADIgBAAIAAAAIgIABIAAAAIgBAAQgGAAgGgDIgDgBIAAAAIgBAAQgNgIgEgOIgBgJQAAgJAFgIQAHgMAOgFQgOAFgHAMQgFAIAAAJIABAJQAEAOANAIIABAAIAAAAIADABQAGADAGAAIABAAIAAAAg");
	this.shape_1.setTransform(-37.6,16.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4F4FB").s().p("AAAAqQgDgqAAgqIAHAAIAABMIAAAJIgEgBg");
	this.shape_2.setTransform(-29.55,66.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B1E0F1").s().p("AAAAuQgEguAAguQANAggFA0IgBAJIgDgBg");
	this.shape_3.setTransform(-27.1574,59.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7F1F4").s().p("AgJAYIAAgIIAAgqIAIAAQAAAFABADQATAtgSAAQgDAAgHgDg");
	this.shape_4.setTransform(-22.8241,69.8052);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDEBF4").s().p("AAAAiQABgqgMgZQAOAAAHAKQACADAAAEIgIAAIAAAqIAAAIg");
	this.shape_5.setTransform(-24.2,68.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADDFF3").s().p("AgDAzIAAgIIAAhdIAHAAIAABdIAAAIIgHAAg");
	this.shape_6.setTransform(-29.55,56.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F0F4").s().p("AAfAFIhFAAIAAgIQAmAAAnADIAAAFIgIAAg");
	this.shape_7.setTransform(-14.6,35.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0ECF4").s().p("AglgEQAlAAAmAEIAAADIgHAAQgNACgLAAQgbAAgRgJg");
	this.shape_8.setTransform(-6.175,32.7128);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7EAF3").s().p("AAEA8QgHg8gEg6QAQAsgCBCIAAAGIAAACg");
	this.shape_9.setTransform(-26.0895,41.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A3DBF1").s().p("AgYAZQgGgDgHAAIAAgJQAegVAfgTQADgBAEgBQAEABABABQACADAAADQAAAEgBACQgjASgYAbQAAgCAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAg");
	this.shape_10.setTransform(-26.875,28.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2DAF0").s().p("AhqC+QgEgCgEgFIAAAJIgIAAIgBgJQgUhXgChsQAEgEAFgCQADgCAEAAQAHAAAGAEQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAEgCADQgCACgEAAQAFBkARBWIABAJQgDAAgEgCgAg3hFQgBgCgEAAIAAgJQBZg2BXg3QADgCAEAAQALAAALAEQABABAAAEQgEAAgDACQhfA8hhA5QAAgEgCgCg");
	this.shape_11.setTransform(-17.675,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D5E9EE").s().p("AgtAIIAAgIQAvACAlgJIAHgBQAAABAAABQAAABAAABQAAAAgBAAQAAABAAAAQgiAMgsAAIgMgBg");
	this.shape_12.setTransform(-0.025,76.5621);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0EDF2").s().p("AgEAiIAAhDIAAgJIAHAAIABAJQAFAwgNAcIAAgJg");
	this.shape_13.setTransform(14.2926,71.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DFEFF2").s().p("ABEBHQgmgHgtAAIAAgFQgVACgCgOIgIAAQgpADgUgUIAAgIIA1AAIAIAAQAzABAngOQAAAAAAAAQAAgBABAAQAAgBAAgBQAAgBAAgBQAcgcAOguQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAnBUgwA5QgCADgEAAIgIgCg");
	this.shape_14.setTransform(0.0941,75.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4DBF1").s().p("AgMALQgDgDgDAAIAAgIQAPgEAJgKQACgCADAAQAEAAADACQABACAAAEQAAAEgBADQgKAOgSAEQAAgFgCgBg");
	this.shape_15.setTransform(37.2,72.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A3DAF0").s().p("AAUC3QgUACgCgOIgIAAIgmAAIAAgFQgfgEgPgRIgIAAQhvgNhggeQAAgEgCgDQgTgdAGg5IAAgJIAAhMIAAgIIAAheIAAgJQADAFAFACQADACAEAAIAAAaIAAAIQAAAvAEAvIAEAAQABBCAKA8QAAAAAAAAQABABAAAAQAAAAABAAQABAAABAAQA3AlBbgDIAHAAQACAPAVgCIAAAEIAnAAIAHAAQADAPAUgCIAAAEIAfAAIAIAAQAOARAfAEIAAAFIBFAAIAIAAQAPgJAQgHQADgBAEAAQASgcAagSQACgBAAgFQA8gbAxgmQACgDAEAAQAEAAACADQACABAAAFQAAAEgCACQh1CAi8ALg");
	this.shape_16.setTransform(3.387,69.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AED4E2").s().p("AAbBlQAEAAACgCQAwg6gnhUQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgOAugbAdIgHABQglAKgwgDIAAAJIgIAAIg1AAIAAAIIAAAFQhNAAg2geQB0hLCAhAQACgBAAgEQA7ABA3AHIAIAAQAAAeAEAeIADAAIAABDIAAAJQAOgcgFgwIgBgJQANgKgFggIAAgJQBbAOBVAUIAIAAQAAAFgCADQgaAngiAdQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAABQgiBBhcAjIgIABQgMACgKAAQgYAAgPgLg");
	this.shape_17.setTransform(4.975,72.3628);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9ED9F0").s().p("AgGA9QgCgBgEAAIAAgJQANgggFg0IAAgJIAAgIIAAgRIAHAAQAAAiADAhIAEAAIABAIQAHAvgWANQAAgEgCgDg");
	this.shape_18.setTransform(39.6303,64.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7F0F9").s().p("AAAAqQgEghAAghIAAgJIAAgJQANAcgGAwIAAAJIgDgBg");
	this.shape_19.setTransform(40.3796,60.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B2E1F3").s().p("AgDA3QgEgVAAgVQANgSgGgoIAAgJIAIAAIAAA6IAAAJIAAAIIAAAJIgIAAIAAARIAAAIIgDAAg");
	this.shape_20.setTransform(39.125,54.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5E1F2").s().p("AAABEQgDhEAAhDIAHAAIAAB+IAAAJIgEAAg");
	this.shape_21.setTransform(37.975,44.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0F5FB").s().p("AgDArIAAgIIAAhNIAHAAIAABNIAAAIIgHAAg");
	this.shape_22.setTransform(39.5,44.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9CD8EF").s().p("AgEBZIAAghIAAgJIAAh/IAAgJIAAgIQAMAGgEAcIgBAIIAABNIAAAIIAAAJQAGAogNATIAAgJg");
	this.shape_23.setTransform(38.8471,46.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E1F3").s().p("AAAAiIABgIQAEgbgMgGIAAgJIAAgRIAHAAIAIAAIAAA7IAAAIIgIAAg");
	this.shape_24.setTransform(39.125,37.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ADD7E4").s().p("AiZgEIABgIQAMgVARgQQABgCAAgEQBkgTBbAbIAIABQAqAVAhAfQACACAAAEQhVAOhbgVIgIgBQg5AZgzAhQgDACgEAAQgJgcABgog");
	this.shape_25.setTransform(-6.9352,46.2661);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7EDF4").s().p("AAbAJQgmgBgXgPQAjACAgAJQABAAAAAAQAAABAAAAQABABAAABQAAAAAAACIgIAAg");
	this.shape_26.setTransform(0.375,37.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECEEF4").s().p("ACzCNIAAiAQAZAOgJA2QgBAEAAAFIgEAAQACAogNATIAAgIgAjFiMQBYADBKgLIAIAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAABQgvAMgtAAQgnAAgmgJg");
	this.shape_27.setTransform(17.4174,47.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F1F4").s().p("AEcDdQABgDAAgFQAMgIADgRIABgJQANgTgCgoIAEAAQAAAEABAEQAIA6gJA1QgEAAgCACQgsAtgqAEQAigeAagngABSDvQgEgeAAgeIAAgIQgIhIABhSQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgHgXgEgaQgEAAgCgCQgVgYgpABQAAgBAAgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQgggKgkgCIgIAAQgsAGgZgPIAAgEQgmgFgnAAIAAAJQAAAEgBABQhBArgDBFIAAgHQAChBgRgtIAAgJIAAgRQBwhpCUhFQAAAAAAgBQAAAAAAAAQABgBAAgBQAAgBAAgBQAlgCAYAKQADABAEAAQhUAZhFApQgDACgEAAQgcAdgYAhQgCACAAAEQAOAYAgACIAIAAQAZAPAsgGIAHgBQBSATBWgWQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAYgGAdgCIAIgBIBdgxQADgCAEAAQgMAagyAYIgHABQgUAagVAYQgCACgDAAQgKAggJAjQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgKBWgFBcIgBAIIABAJQAFAggNAKIgIAAIAAAJIgEAAg");
	this.shape_28.setTransform(5.2329,44.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9FD9F0").s().p("AALAJQgogBgbgPIAWAAIAIAAQAoABAjAGIAIABIAAADQgTAFgTAAIgIAAg");
	this.shape_29.setTransform(13.45,14.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A5DBF1").s().p("AgnAIQgKgEgMAAIAAgHQA+gQA1AOIAIACIAAADQg4ABgrAMQAAgFgCAAg");
	this.shape_30.setTransform(0.75,13.0303);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A1DAF0").s().p("AgBAzIgHAAIAAgJIAAgZQAMgPgEgjIgBgJQADAAACgCQACgCAAgEQAGAfgFA9IgBAJIgHAAg");
	this.shape_31.setTransform(39.269,28.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0E5F2").s().p("ABjFzIhFAAIAAgFQgegEgPgRIgIAAIgfAAIAAgEQgUACgDgPIgHAAIgnAAIAAgEQgVACgCgPIgHAAQhbADg3glQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgKg8gBhDIAAgJQAFg1gNggIAAgIIAAgaIgBgJQgRhVgFhlQAEAAABgCQADgCAAgFQAZgbAigSQACgCAAgEQBig5Bfg8QACgCAEAAQAsgMA3gBIAAgEQAUAAASAEQAAAAAAAAQAAABAAAAQABABAAABQAAAAAAABIgIAAIgXAAQAcARApAAIAIAAQAKAPAcgFIAIgBQAVAPAogGIAIgBQACAPAVgCIAAAEIAeAAIAIAAQAoAQAUAlIABAHIABAJQAFAkgNAPIAAAZIAAAJIAAARIAAAJIAAAIIAAAJIgIAAQAABEAEBDIAEAAIAAAiIAAAJQAAAVAEAVIADAAIABAJQAFA1gNAgIAAAJQgEAAgCACQgKAKgPAFIAAAIQgEAAgCADQgxAmg8AbQAAAFgCABQgaASgSAcQgEAAgDABQgQAHgPAJIgIAAgAg9E/QAuABAlAHIAIABQAVAPAogGIAIgBQBcgjAihBQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAqgEAsgtQADgCADAAQAKg1gIg6QgCgEAAgEQAAgFACgEQAJg2gagNIAAB/IAAAIIAAAJQgEARgLAIIgIAAQhVgUhbgOIAAgIQAFhcAKhWQABAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAIgjAKggQAEAAACgCQAVgYATgaIAHgBQAzgYALgaQgEAAgCACIheAxIgHABQgdACgZAGIgIABQhJALhXgEIAAgEQgmgEgnAAIgHAAQghgCgNgYQAAgEACgCQAXghAcgdQAEAAADgCQBGgpBUgZQgEAAgEgBQgYgKglACQAAABAAABQAAABAAABQAAAAAAAAQgBABAAAAQiUBFhvBpIAAARIAAAJQADA8AIA7IAEAAIAAgBQAChGBBgrQACgBAAgEIBFAAIAIAAQAZAPAsgGIAHAAQAXARAnAAIAIAAQApgBAVAYQACACAEAAQAEAaAHAYQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAABRAHBIIABAIIgIAAQg3gHg7gBQAAAEgCABQiABAh0BMQA2AeBNAAIAAgFQAUAUApgCIAIgBQACAPAVgCgAkgDiIAEAAQAiANgYg4QgCgEAAgFQAAgEgCgDQgGgJgPgBQAMAagBArgAjuhZQAAAEgBACQgRAQgMAVIgBAIQgBAoAJAcQAEAAADgCQAzggA5gZIAIABQBcAVBUgOQAAgEgCgCQghgggpgVIgIgBQg2gQg4AAQgoAAgqAIg");
	this.shape_32.setTransform(4.6796,49.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A6DBF1").s().p("ABbAoQgVglgngPIgIAAIgeAAIAAgEQgVABgCgOIgHAAQgpAHgVgPQATAAATgEIABgFQAgAGAkACIAHABQA9AOAXA2IABAIQAAAEgCACQgCACgEAAIgBgHg");
	this.shape_33.setTransform(29.925,19.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ACDEF2").s().p("AgpAAQATAAATgEIAAgEQAWAAAXAEIAAAEIAAADQgTAFgTAAIgHAAIgNABQgSAAgHgJg");
	this.shape_34.setTransform(19.575,15.2391);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AnEGVIgHAAIAAp8QAYAMAdAAQAzAAAjgkQAkgkAAgyQABgjgSgcILxAAIAIAAIAAMhIAAAIIuQAAgAAXF8QC8gLB1iAQACgCAAgEQATgEAKgPQABgDAAgEQAXgNgGgvIgBgIIAAgJQAGgxgOgbIAAgJIAAg7IAAgIIAAhNIAAgIIAAg8IABgJQAFg+gGgfIgBgIQgXg3g9gOIgHgBQglgCgggGIAAgEQgXgEgXAAIgIgCQgkgGgpgBQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQgSgEgTAAIgIgCQg0gOg+AQIAAAIQgEAAgCACQhYA3haA2IAAAJQgEAAgDACQggATgeAVIAAAJQgEAAgDACQgEACgEAEQACBtATBWIABAJIAABeIAAAIQAAArAFAqIADABQgFA5ATAdQACADAAAEQBgAeBvANIAIAAQAOARAgAEIAAAFIAmAAIAHAAQACAOAVgCg");
	this.shape_35.setTransform(3.1,50.5);

	this.instance = new lib.backToNormalImageSize();
	this.instance.setTransform(-37.6,16.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9999").s().p("AgRAfQgNgIgDgOQgEgNAHgNQAHgMAOgEQAOgEANAHQAMAIAEAOQAEANgEAGIgEAIIgCADQgIAJgLADIgJACQgJAAgIgFg");
	this.shape_36.setTransform(-38.3071,15.4362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_25},{t:this.shape_26},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_18},{t:this.shape_19},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_36},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_2},{t:this.shape_3},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,4,99,87);


(lib.confiti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_copy
	this.instance = new lib.Symbol1();
	this.instance.setTransform(214.9,884.15,1,1,-22.2691,0,0,152.8,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:205,regY:-65.5,rotation:-21.5194,x:203.9,y:730.35},0).wait(1).to({rotation:-20.7697,x:190.55,y:708.35},0).wait(1).to({rotation:-20.0201,x:177.2,y:686.35},0).wait(1).to({rotation:-19.2704,x:163.85,y:664.4},0).wait(1).to({rotation:-18.5207,x:150.5,y:642.5},0).wait(1).to({rotation:-17.771,x:137.1,y:620.6},0).wait(1).to({rotation:-17.0214,x:123.75,y:598.65},0).wait(1).to({rotation:-16.2717,x:110.35,y:576.75},0).wait(1).to({rotation:-15.522,x:96.9,y:554.95},0).wait(1).to({rotation:-14.7723,x:83.55,y:533.1},0).wait(1).to({rotation:-14.0227,x:70.2,y:511.3},0).wait(1).to({rotation:-13.273,x:56.75,y:489.55},0).wait(1).to({rotation:-12.5233,x:43.35,y:467.75},0).wait(1).to({rotation:-11.7736,x:30,y:446.05},0).wait(1).to({rotation:-11.024,x:16.6,y:424.3},0).wait(1).to({rotation:-10.2743,x:3.15,y:402.65},0).wait(1).to({rotation:-9.5246,x:-10.3,y:380.95},0).wait(1).to({rotation:-8.7749,x:-23.7,y:359.3},0).wait(1).to({rotation:-8.0252,x:-37.1,y:337.7},0).wait(1).to({rotation:-7.2756,x:-50.55,y:316.1},0).wait(1).to({rotation:-6.5259,x:-64,y:294.45},0).wait(1).to({rotation:-5.7762,x:-77.45,y:272.9},0).wait(1).to({rotation:-5.0265,x:-90.9,y:251.4},0).wait(1).to({rotation:-4.2769,x:-104.35,y:229.85},0).wait(1).to({rotation:-3.5272,x:-117.85,y:208.35},0).wait(1).to({rotation:-2.7775,x:-131.3,y:186.9},0).wait(1).to({rotation:-2.0278,x:-144.8,y:165.45},0).wait(1).to({rotation:-1.2782,x:-158.3,y:144},0).wait(1).to({rotation:-0.5285,x:-171.8,y:122.55},0).wait(1).to({rotation:0.2212,x:-185.3,y:101.2},0).wait(1).to({rotation:0.2212,x:-185.85,y:124.05},0).wait(1).to({x:-186.35,y:146.85},0).wait(1).to({x:-186.9,y:169.7},0).wait(1).to({x:-187.4,y:192.55},0).wait(1).to({x:-187.95,y:215.4},0).wait(1).to({x:-188.45,y:238.2},0).wait(1).to({x:-189,y:261.05},0).wait(1).to({x:-189.5,y:283.9},0).wait(1).to({x:-190.05,y:306.7},0).wait(1).to({x:-190.55,y:329.55},0).wait(1).to({x:-191.1,y:352.4},0).wait(1).to({x:-191.6,y:375.25},0).wait(1).to({x:-192.15,y:398.05},0).wait(1).to({x:-192.65,y:420.9},0).wait(1).to({x:-193.2,y:443.75},0).wait(1).to({x:-193.7,y:466.55},0).wait(1).to({x:-194.25,y:489.4},0).wait(1).to({x:-194.75,y:512.25},0).wait(1).to({x:-195.3,y:535.1},0).wait(1).to({x:-195.8,y:557.9},0).wait(1).to({x:-196.35,y:580.75},0).wait(1).to({x:-196.85,y:603.6},0).wait(1).to({x:-197.4,y:626.4},0).wait(1).to({x:-197.9,y:649.25},0).wait(1).to({x:-198.45,y:672.1},0).wait(1).to({x:-198.95,y:694.95},0).wait(1).to({x:-199.5,y:717.75},0).wait(1));

	// Layer_1_copy
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-470.9,790.05,1,1,37.1902,0,0,152.4,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:205,regY:-65.5,rotation:35.9579,x:-342.6,y:703.7},0).wait(1).to({rotation:34.7256,x:-329.75,y:682.35},0).wait(1).to({rotation:33.4933,x:-316.9,y:661.05},0).wait(1).to({rotation:32.261,x:-304.1,y:639.7},0).wait(1).to({rotation:31.0287,x:-291.35,y:618.4},0).wait(1).to({rotation:29.7964,x:-278.65,y:597.2},0).wait(1).to({rotation:28.5641,x:-266,y:576},0).wait(1).to({rotation:27.3318,x:-253.45,y:554.85},0).wait(1).to({rotation:26.0995,x:-240.85,y:533.8},0).wait(1).to({rotation:24.8672,x:-228.35,y:512.65},0).wait(1).to({rotation:23.6349,x:-215.9,y:491.65},0).wait(1).to({rotation:22.4026,x:-203.5,y:470.7},0).wait(1).to({rotation:21.1703,x:-191.15,y:449.7},0).wait(1).to({rotation:19.938,x:-178.8,y:428.8},0).wait(1).to({rotation:18.7057,x:-166.55,y:407.9},0).wait(1).to({rotation:17.4734,x:-154.3,y:387.1},0).wait(1).to({rotation:16.2411,x:-142.1,y:366.35},0).wait(1).to({rotation:15.0088,x:-129.95,y:345.65},0).wait(1).to({rotation:13.7765,x:-117.8,y:324.95},0).wait(1).to({rotation:12.5442,x:-105.7,y:304.25},0).wait(1).to({rotation:11.3119,x:-93.65,y:283.7},0).wait(1).to({rotation:10.0796,x:-81.65,y:263.2},0).wait(1).to({rotation:8.8473,x:-69.7,y:242.75},0).wait(1).to({rotation:7.615,x:-57.65,y:222.3},0).wait(1).to({rotation:6.3827,x:-45.75,y:201.95},0).wait(1).to({rotation:5.1504,x:-33.9,y:181.6},0).wait(1).to({rotation:3.9181,x:-22.05,y:161.35},0).wait(1).to({rotation:2.6858,x:-10.25,y:141.1},0).wait(1).to({rotation:1.4535,x:1.6,y:120.95},0).wait(1).to({rotation:0.2212,x:13.4,y:100.9},0).wait(1).to({rotation:0.2212,x:12.55,y:122.1},0).wait(1).to({x:11.7,y:143.35},0).wait(1).to({x:10.85,y:164.6},0).wait(1).to({x:10,y:185.85},0).wait(1).to({x:9.15,y:207.1},0).wait(1).to({x:8.35,y:228.35},0).wait(1).to({x:7.5,y:249.6},0).wait(1).to({x:6.65,y:270.8},0).wait(1).to({x:5.8,y:292.05},0).wait(1).to({x:4.95,y:313.3},0).wait(1).to({x:4.1,y:334.55},0).wait(1).to({x:3.3,y:355.8},0).wait(1).to({x:2.45,y:377.05},0).wait(1).to({x:1.6,y:398.3},0).wait(1).to({x:0.75,y:419.55},0).wait(1).to({x:-0.1,y:440.75},0).wait(1).to({x:-0.95,y:462},0).wait(1).to({x:-1.8,y:483.25},0).wait(1).to({x:-2.6,y:504.5},0).wait(1).to({x:-3.45,y:525.75},0).wait(1).to({x:-4.3,y:547},0).wait(1).to({x:-5.15,y:568.25},0).wait(1).to({x:-6,y:589.45},0).wait(1).to({x:-6.85,y:610.7},0).wait(1).to({x:-7.65,y:631.95},0).wait(1).to({x:-8.5,y:653.2},0).wait(1).to({x:-9.35,y:674.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-594.2,-158.8,1005.1,1190.2);


(lib.blueEye_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AANAPIArAeAgegrQAPgDANAHQALAHAEAOQAEAOgEAGQgDAGgBACQgBABgBACQgHAJgLADQgOAEgNgIQgNgHgDgOQgEgOAHgMQAHgNAOgEg");
	this.shape.setTransform(22.4554,16.0667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AgyBwQgTgJgRgRQgjgjgBgzQABgyAjgkQAlgkAxAAQAoAAAgAYIAPAMQAjAkABAyQgBAzgjAjQglAkgyAAQgbAAgXgKgABGAuIgrgegAgHAbIAHAAIAAgBIAAAAIABAAIAAAAIAAAAQAMgDAHgJIADgDIAEgIQACgDAAgEIgCgMQgEgPgNgHIAAAAIgBgBQgIgEgHAAIAAAAIgBAAIgIABIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIAIgBIABAAIAAAAQAHAAAIAEIABABIAAAAQANAHAEAPIACAMQAAAEgCADIgEAIIgDADQgHAJgMADIAAAAIAAAAIgBAAIAAAAIAAABIgHAAIAAAAIAAAAQgIAAgHgDIAAAAIgBgBIAAAAIgBAAIAAgBQgNgHgEgOIgBgJQAAgJAFgIQAHgNAOgEQgOAEgHANQgFAIAAAJIABAJQAEAOANAHIAAABIABAAIAAAAIABABIAAAAQAHADAIAAIAAAAIAAAAg");
	this.shape_1.setTransform(21.1,15.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E5D64").s().p("AgiAAQAUAAARgEQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgCQAQAFAOAGQABABAAAEIgIABQgMACgKAAQgYAAgPgKg");
	this.shape_2.setTransform(54.5,62.6607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#426271").s().p("AAHAcQgNgZgFggIAIAAQALAVADAdIABAJQgEAAgBgCg");
	this.shape_3.setTransform(48.275,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123A4D").s().p("AAMAcQgZgXgOgiQAXAVAWARIAAgFQASAIgQAMQgCABAAAFQgEAAgCgCg");
	this.shape_4.setTransform(54.6015,47.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#898989").s().p("AgxgDIBcAAIAHAAIAAADQgZAEgWAAQgdAAgXgHg");
	this.shape_5.setTransform(66.15,66.3705);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C848F").s().p("AgaAHIAAgHIAQgHQADgCAEAAIAHAAQgBANARgEIAHAAQAAADgBABQgTAGgOAAQgLAAgIgDg");
	this.shape_6.setTransform(76.275,61.84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#061319").s().p("AgygDIAIAAIBNAAIAIAAIAIAAIgBADQgZAEgVAAQgdAAgZgHg");
	this.shape_7.setTransform(63.05,63.8412);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34A4DA").s().p("AAjAEIhNAAIAAgHQAqAAAqADIABAEIgIAAg");
	this.shape_8.setTransform(63.075,62.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F52").s().p("Ag7ATQgKgTgIgUQA+AuBMgpQABgBAAgEQAEAEAFADQADABAEAAQAAABAAABQAAABgBABQAAAAAAAAQAAABAAAAQg+AThEAJQgEAAgCgCg");
	this.shape_9.setTransform(57.225,57.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36A4D9").s().p("AA4A3IAAgEQgrgFgpAAIAAAJIgIAAQAAgEgCgBQgOgIgPgEIgIgBQgRgGgGgSQBFgKA9gTQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQAlgHAUgZQABgCAEAAIAEAAQABA8gcAgIAAAIIgIAAIAAAJIgIAAg");
	this.shape_10.setTransform(61.7038,57.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#184D67").s().p("AgWA7IAAgIQAbghgBg7IgEAAIAAgJQAIABAGgEQACgBAAgEIAHAAIAAAIQgGBEggApIgHAAg");
	this.shape_11.setTransform(71.225,56.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A1A1A1").s().p("AgTANQAUgLANgUQABgCAFAAIAAAJQAAAEgDADQgRAZgKAAQgFAAgEgIg");
	this.shape_12.setTransform(23.4,42.6645);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#03090D").s().p("AgDAqIAAgIIAAhLIAHAAIAABLIAAAIIgHAAg");
	this.shape_13.setTransform(73.175,46.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#319ACD").s().p("AgEAiIAAhLIAHAAIAAAIIAAAJQAGArgNAXIAAgIg");
	this.shape_14.setTransform(74.0296,46.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16475E").s().p("AASAcQgRgZgXgPIAAgIIAAgIQAbATARAfQABAEAAADQgEAAgBgBg");
	this.shape_15.setTransform(76.675,44.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0E0E0").s().p("AgKgGQgCgBAAgFQAaAZgBAAIgXgTg");
	this.shape_16.setTransform(68.638,41.88);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#174861").s().p("Ag5ANIAAgJQAtgRA+ABIAIAAIAAAJIgIAAIg1AAQAAABAAABQAAABgBAAQAAAAAAAAQAAAAAAAAQgWAIgYAFIgHAAg");
	this.shape_17.setTransform(71.625,34.2694);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020506").s().p("AgKBkQgFgDgDgEQgFAAgDgCQgfgTgggVQAAgFACgBQARgLgTgJIAAgIIAAgpQANgHgBgbIAEAAQAigWAlgTQACgBAEAAIAHAAQAjAeAqAYQACABgBAEIAAAIIgIAAIgHAAIAABLIAAAJQAAAEgCABQgGADgIAAIAAAJQgDAAgCACQgUAZgkAGQgEAAgDgBgAAWgsQAwAqgzgwQAAAFADABg");
	this.shape_18.setTransform(65.4,45.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#35A8E0").s().p("Ag9A3IgBgJQgDgegMgTIAAgJIAAgyQAOgnAVA2QAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAPAiAYAWQADACAEAAQAfAVAgATQADACAEAAQAAAEgCABQgkATghAAQgkAAgggYg");
	this.shape_19.setTransform(55.675,49.4854);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37ADE6").s().p("AgWAPIAAgJIAAgHQAPALANAPQACACAAAEQANgfgCg0IAEAAIAAAqIAAAJIAAApIAAAIIAAAFQgXgRgWgVg");
	this.shape_20.setTransform(54.125,43.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#295469").s().p("AgXBMIAAgIIAAhMQAOgYAJgbIAAgHIAAgJQAEAEAFADQACACAFAAQAAAEgDACQgCACgDAAQgDAtANAcQABACAFAAIAAAJIAAAIQgBAAgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgUg0gOAlIAAAzIAAAIIgIAAg");
	this.shape_21.setTransform(49.45,41.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#35A8E1").s().p("AACBGQgMgPgQgNQgEAAgBgCQgNgdACgsQAEAAACgBQACgDAAgEIAAgJQAngGAfgRQADgCAEAAQAAAEgBAEQgIAhgOAbIgEAAQACAzgOAgQAAgEgCgCg");
	this.shape_22.setTransform(54.4805,38.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#35A6DD").s().p("AhgArIAAgZQANgSAJgXQABgEAAgFQBQglBLAkIAHABQAEAFADAFQABADAAAEIgIAAQg/gBgsARIAAAJQgEAAgDABQglATgiAWIAAgJg");
	this.shape_23.setTransform(67.725,34.5684);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C5977").s().p("AgTAzIAAgqQAPgaAHghQABgEAAgEIAIAAIAIAAQAAAEgCAEQgJAYgMATIAAAYIAAAIIgEAAQABAbgNAHIAAgIg");
	this.shape_24.setTransform(58.4,37.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#252525").s().p("Ah7BUIAAgIQBihjB/hDIAHgCQAIAAAGADQABABAAAFQgDAAgDABQg/AphGAhQAAAFgBABQg5AsgyAzIAAgJg");
	this.shape_25.setTransform(37.775,32.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#303030").s().p("AgHAMQAAgFgBAAQgHgEgHAAIAAgHIAegIIAHgBQAEAFADAFQABADAAADQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgEAJgLAAQgEAAgHgCg");
	this.shape_26.setTransform(55.675,20.8697);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2F2F2F").s().p("AgPANQAAgFgBgBQgGgDgIAAIAAgHQARgHAVgBIAIgBQAHAAAHAEQABAAAAAFQgEAAgBACQgMAOgYAAIgFAAg");
	this.shape_27.setTransform(51.775,22.4813);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2D2D2D").s().p("AgjAJQgDgEgEgFQAdgKAhgGIAHAAQgBAOARgBIAAADQgEAAgDABQgiAKgkAGQAAgFgBgDg");
	this.shape_28.setTransform(61.5,19.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36AAE2").s().p("Ag1BbQAggpAGhDIAAgJQAOgXgGgsIAAgJQAYAQARAYQABACAEAAQAAAFABADQAOAbAAAoQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAAAAAQgOAigdAPIAAAIQgEAAgDACIgQAHIAAAIQgDAAgCACQgJAKgIAAQgIAAgIgMg");
	this.shape_29.setTransform(75.1,53.4013);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ACA4A0").s().p("AgDAiIAAhLQANAfgKAzQAAAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAIAAgIg");
	this.shape_30.setTransform(83.2962,45.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285367").s().p("AgeBDIAAgIQAdgPANghQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAgpgOgbQgBgDAAgFQAEAFAEADQADABAEAAQAFARAGAPQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIAAAJQAAAEgBADQgKARgFAZQgDAAgCACQgMAVgUAKIgIAAg");
	this.shape_31.setTransform(79,54.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#606060").s().p("AgJgGQAEgFACgFQACgDAAgEIADAAQALAvgEAAQgFAAgNgeg");
	this.shape_32.setTransform(107.206,60.7779);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3E3E3E").s().p("AhOBMQAIAAAGgEQABAAAAgFQAEAAABACQAXAigHAAQgGAAgegbgAA7hBQgCgCgEAAIAAgIIAAgJQAtgtghBFQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAgFgCgCg");
	this.shape_33.setTransform(93.9186,55.8474);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#171717").s().p("AAIAUQgSgFgFgSIAAgJQAEgEAFgCIAGgCQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgEAWAUgCIAAAEIgIgBg");
	this.shape_34.setTransform(99.225,51.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111212").s().p("ABKBMIhcAAIgIgBImdgyQAegCAYgKQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQCIAIB5AYIAIABQAVAPApgGIAHgBQApAQA7gLIABgFIAAgIIAIAAIAHAAQAPAVASgTQACgCAEAAQAVAHAhgLQABAAAAgEQBDgQAzghQACgBAEAAQAagfAegaQADgCADAAQAFATASAFIAIABQAlAPAYAdQACADAAADQgBAEgBAEQgDAFgEAEQAAgEgBgCQgPgKgHgRQgEAAgCgBQgvgeggAWQAAAFACADIA0BMIAAAEQgYgLgOgbQgFAAgCgCQgWgJgagFQgEAAgBABQgMARgWAHIAAAIQAAAFgCAAQgFADgIAAIgIABQgZACgOAOIgIABQgsAGgyACIgHAAg");
	this.shape_35.setTransform(63.05,58.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B5970").s().p("AgEA/IAAgIIAAgJIAAhTIAAgJIAAgRQAEAFACAFQABADAAAEIAABLIAAAJIABAIQAEASgLAAIgBgBg");
	this.shape_36.setTransform(82.5829,46.1026);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#32586A").s().p("AAXApQgNgngcgSIAAgIQAAgEgCgEQgCgFgEgEQArATAKA4IAAAIQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBg");
	this.shape_37.setTransform(79.375,35.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#35ADE8").s().p("AADAsQgGgOgEgRQANgTgCgoIAEAAIAABUIAAAIQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_38.setTransform(81.325,46.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#35A7DF").s().p("AA3BGQgEgCgEgFQAAgEgCgDQgRgggcgUQAAgEAAAAQgqgYgjgeQAYgEAWgIQAAAAAAgBQAAAAAAAAQABgBAAgBQAAgBAAgBIA1AAIAIAAQAdATAOAnQAAABAAAAQAAAAABAAQAAAAABAAQABAAABAAIAAAQIAAAJIgEAAQACAogOATQgEAAgDgCg");
	this.shape_39.setTransform(74.325,41.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E7E7E").s().p("AAAANIgWAAIAAgJQAMACgBgSIAEAAQAHAMAQADIAHABQAAAEgBABQgGAEgIAAIgIAAg");
	this.shape_40.setTransform(92.225,19.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#676767").s().p("AgMAUIAAgIQArhDgfBKQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAg");
	this.shape_41.setTransform(91.9321,15.7582);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A4A4A4").s().p("AgmAAQAEgDAFgDQADgBAEAAQASANAjgGIAIAAQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAAAQgUAEgQAAQgXAAgRgIg");
	this.shape_42.setTransform(89.1,24.5912);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C8C8C8").s().p("AAuAEIhjAAIAAgHIBjAAIAJAAIAAAHIgJAAg");
	this.shape_43.setTransform(75.9,19.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8A8A8A").s().p("AhRgDICbAAIAHAAIAAADQhRAEhRAAIAAgHg");
	this.shape_44.setTransform(73.95,21.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#181818").s().p("AgiAMIgmAAIAAgFQgRABABgMQBWgMBUAMIAIAAQAAAEgCABQgCACgEAAIgIAAIhkAAIAAAJIgIAAg");
	this.shape_45.setTransform(73.1493,18.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3F3F3F").s().p("AAHAJQgWgFgXAAIAAgHQAEAAACgCQACgCAAgFQAhABAcAHIAIABIgBADQgUADgKAKQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_46.setTransform(85.225,19.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4F4F4").s().p("AgyAIQARgIAJgPQACgCAEAAIAVAAIAIAAQAUAJASAKQACABAAAFQgEAAgDACQgLAIgWgCIgIAAQgJACgJAAQgWAAgNgKg");
	this.shape_47.setTransform(91.85,22.9878);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BFBFBF").s().p("AAOAMQgRgMgTgHQAIAAAGgEQABgBAAgEQAWABAHAQQABADAAAEQAAAFgCABQgBADgEAAQAAgEgCgBg");
	this.shape_48.setTransform(95.325,22.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3A3A3A").s().p("AgQAlQgHgDgHAAIAAgJQApgRAQgwQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQgOAugaAjQgCACgEAAQABgEgCgBg");
	this.shape_49.setTransform(101.55,19.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B8B8").s().p("AgxAAQAOAAAKgFQADgCADAAQAWAOAogGIAIgBIgBAEQgZAEgWAAQgdAAgXgIg");
	this.shape_50.setTransform(110.5,35.5455);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#787878").s().p("AgMAJQgCgCgEAAIAAgIQBDggg1AuQgCACgEAAQAAgEgCgCg");
	this.shape_51.setTransform(124.4327,33.1898);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#090A0A").s().p("AiUh4QABgBAAgEIAfAAIAIAAQAQgRAfAAIAIAAQBQAABSgFIAAgEQAVACALgIQADgCAEAAQAKgKAUgDIABgEIAIgHQAEgCADAAIAIAAIAAAJIgEAAQABASgMgBIAAAIQgEAAgBACQgKAQgQAIQgEAAgDABQgFADgEAEQAdAPAwgLQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAVACALgIQADgCAEAAQAEAAABgDQACgCAAgEIAIAAQAIAAAGADQACABAAAFQAAAEgCACQgQARgVAKQBMATAygyQACgCAEAAQAEAAACACQACACAAAEQAAAEgCADQgWAfgmANQAUAUA6gTIAHgBQAQgRAYgHIAHgCQAPgVASgTQACgCAEAAQgmBShPAjQgEABgEAAQgEAAgCACQgKAGgPABQApANA8gJIAAgEQArAEAVgTQACgCAEAAQAEAAACACQACACAAAEQgEAAgDACQgxAdg1AbIgIAAIgfAAQAAABAAABQAAABAAABQAAAAAAAAQgBABAAAAQgbALgiABQgEAAgCgCQg/hFhegmIgIAAIgfAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgYgKgegCIAAAIIAAAIIgHgBQhKgkhRAlIgIAAIgHAAQgEAAgDACQgfARgoAHIAAAIQgEAAgDgBQgFgDgEgEIAAAIQgEAAgCACQiuByh7BWQCNjIDnhqg");
	this.shape_52.setTransform(71.225,36.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373737").s().p("AgRAXQgBgBgEAAIAAgJQAWgQASgYQABgCAEAAQgPAdgSAcQgBACgEAAQAAgFgCgCg");
	this.shape_53.setTransform(111.675,21.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FBFBFB").s().p("AonFFIgIAAIAAm2QAXALAcAAQAyAAAlgkQAjgkABgzQgBgygjgkIgPgNIPdAAIAHAAIAAKAIAAAJIxXAAgAnaDUQgZAKgdABIGdAzIAHABQApAOA8gLIAAgDQAwgDAsgFIAJgBQAOgPAYgBIAIgBQA/A6grhBQgBgBgDgBIAAgIQAVgGAMgRQACgCADAAQAaAGAWAJQADACAEgBQAOAcAZAKIAAgDIg0hOQgCgCgBgFQAggXAvAeQADABAEAAQAHATAOAKQACABAAAEQAgBHgThXIgFgBQAAgEgCgCQgXgdglgPIAAgFQgVACAFgWQAEAAACgCQACgDAAgEQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAAAQAihFguAsIAAAJIAAAIIgHACQgFADgDAEIAAAJQgEAAgDABQgeAagaAfQgDAAgDACQgzAihDAPIgIABQgQAEABgOQAUgKANgVQACgCADAAQAFgZAKgSQABgDAAgEQANABgEgTIgBgIQABAAABAAQAAAAABAAQABAAAAgBQAAAAAAAAQAJg0gNgfQAAgFgCgDQgCgFgEgEIAAgJQgKg4gsgTIAAgIIAAgJQAdADAYAKQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABIAfAAIAIAAQBeAmBABFQACACADAAQAjgBAagMQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAgAAIAHAAQA1gbAygeQACgBAFAAQADAAACgCQA2gwhDAhIAAAIQgFAAgCACQgVAUgqgFIgIABQgoAGgXgPQAEAAAEgBQBQgkAlhRQgEAAgCACQgSATgPAVIgHACQgXAHgRAQIgHACQg6ATgUgVQAngNAVgeQACgDAAgEQAEAAABgCQATgcAPgeQgEAAgBACQgTAYgXARIAAAJQgEAAgCABQgyAzhMgTQAVgLAQgQQACgDAAgDQAEgBABgCQAbgjAPgvQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgPAxgqARIAAAJIgIAAQgBgEgBgEQgHgRgWgBIgIgBQgPgCgJgOIAAgIQABAAABAAQABAAABAAQAAgBABAAQAAAAAAgBQAfhKgsBDIAAAJQgDAAgEACIgIAGIgHAAQgcgHgjgBIgHAAQhVgMhWAMIgHAAQgiAGgdALIgIABIgeAHIAAAJIgIAAQgWABgRAHIAAAJIgHABQiBBDhhBkIAAAIQgFAAgBACQgNAVgVALQAKAVAbgoQADgCAAgEQAxgzA6gsQABgCAAgEQBGghBAgpQADgCADABQAdABANgRQABgCAEAAQAVAGAFgNQABAAAAAAQAAAAABgBQAAAAABAAQABAAABAAQAlgGAigKQADgBAEAAIAnAAIAIAAIBjAAIAJAAQAXAAAWAFQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgEAAgDACQgKAJgWgCIgHAAIibAAIAAAIIgIAAQgfABgPARIgIAAIggAAQABADgCABQjnBriNDIQB7hXCuhyQACgBAEAAIgBAIQgJAbgNAXIAABMIAAAIQAFAhAOAZQABACADAAQAIAUAKAUQACACAEAAQAGASASAGIAHABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgSAEgUgBIgIAAQh5gYiHgJQAAABgBABQAAABAAAAQAAABAAAAQAAAAAAABg");
	this.shape_54.setTransform(72,38.5);

	this.instance = new lib.backToNormalImageSize();
	this.instance.setTransform(21.1,15.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AgegrQAPgDANAHQALAHAEAOQAEAOgEAGQgDAGgBACQgBABgBACQgHAJgLADQgOAEgNgIQgNgHgDgOQgEgOAHgMQAHgNAOgEgAANAPIArAe");
	this.shape_55.setTransform(22.4554,16.0667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF9999").s().p("AgRAfQgNgIgDgOQgEgNAHgNQAHgMAOgEQAOgEANAHQAMAIAEAOQAEANgEAGIgEAIIgCADQgIAJgLADIgJACQgJAAgIgFg");
	this.shape_56.setTransform(20.3929,15.1362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_54},{t:this.shape_51},{t:this.shape_52},{t:this.shape_53},{t:this.shape_49},{t:this.shape_41},{t:this.shape_45},{t:this.shape_46},{t:this.shape_44},{t:this.shape_43},{t:this.shape_40},{t:this.shape_47},{t:this.shape_42},{t:this.shape_48},{t:this.shape_36},{t:this.shape_39},{t:this.shape_38},{t:this.shape_30},{t:this.shape_37},{t:this.shape_33},{t:this.shape_34},{t:this.shape_50},{t:this.shape_35},{t:this.shape_32},{t:this.shape_31},{t:this.shape_28},{t:this.shape_25},{t:this.shape_27},{t:this.shape_26},{t:this.shape_22},{t:this.shape_21},{t:this.shape_24},{t:this.shape_23},{t:this.shape_3},{t:this.shape_19},{t:this.shape_18},{t:this.shape_20},{t:this.shape_4},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_29},{t:this.shape_56},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_5},{t:this.shape_2},{t:this.shape_55},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,3.7,119.1,67.3);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(688.9,636.4,1,1,0,0,0,688.9,636.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#69C3FF").ss(3,1,1).p("EhtthkeMDbbAAAMAAADI9MjbbAAAg");
	this.shape.setTransform(702.15,643.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69C3FF").s().p("EhttBkeMAAAjI8MDbaAAAMAAADI8g");
	this.shape_1.setTransform(702.15,643.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1.5,-1.5,1407.3,1289.1), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(93.35,15.65,1,1,0,0,0,19.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.3,regY:9.4,rotation:-14.9996,x:92.85,y:13.85},0).wait(1).to({rotation:-29.9992,x:93.25,y:10.55},0).wait(1).to({rotation:-39.9995,x:91.85,y:8.05},0).wait(1).to({rotation:-49.9998,x:90.45,y:5.5},0).wait(1).to({rotation:-60.0001,x:89.1,y:2.85},0).wait(1).to({rotation:-45.0006,x:91.3,y:6.5},0).wait(1).to({rotation:-30.0012,x:93.5,y:10.05},0).wait(1).to({rotation:-18.4029,x:93.4,y:12.45},0).wait(1).to({rotation:-6.8046,x:93.3,y:14.9},0).wait(1).to({rotation:-6.8046},0).wait(2));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(18.7,10.2,1,1,0,0,0,18.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:19.4,regY:12.9,rotation:7.4991,x:18.85,y:10.75},0).wait(1).to({rotation:14.9981,x:18.35,y:8.5},0).wait(1).to({rotation:24.9977,x:19.1,y:6.6},0).wait(1).to({rotation:34.9973,x:19.8,y:4.55},0).wait(1).to({rotation:44.9969,x:20.55,y:2.4},0).wait(1).to({rotation:29.9975,x:19.15,y:6.15},0).wait(1).to({rotation:14.9981,x:17.75,y:9.7},0).wait(1).to({rotation:7.4991,x:17.95,y:11.8},0).wait(1).to({rotation:0,x:18.2,y:13.8},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-16,114.7,39.7);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(25.9,47.9,1,1,0,0,0,25.9,20.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(3,1,1).p("Ah5iuIB1BZIBVhOIgpB+IB7BwIiTgvIAACTIgqiTIiIAdAhHgcIgyiSAiiA4IBbhU");
	this.shape.setTransform(39.925,49.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9900FF").ss(3,1,1).p("Ag0ASIAegaIgQgvIAmAdIAagZIgNAoIAoAjIgwgPIAAAvIgNgvg");
	this.shape_1.setTransform(101.1,22.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF00").s().p("AgLA5QgOAAgJgDQgMgDgHgIQgIgJgBgOQAAgLAEgHQAFgIAJgDQAFgBAJACQALACAMAGIACgEIADgEQgBgQAHgNQAIgNAOgEQAHgCAGAAQAFABAGADQALAIAAARQAAAIgGATIgDAOIAJAYQADAHgCAEQgCAGgMAAIgJABIgfABIgTAAgAgCACIACABIgBgDIgBACg");
	this.shape_2.setTransform(17.375,88.1408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AgaAcIiIAdIAAgBIBbhUIgyiSIB1BZIBVhOIgpB+IB7BwIiTgvIAACTg");
	this.shape_3.setTransform(39.925,49.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgLA5QgOAAgJgDQgMgDgHgIQgIgJgBgOQAAgLAEgHQAFgIAJgDQAFgBAJACQALACAMAGIACgEIADgEQgBgQAHgNQAIgNAOgEQANgFALAHQALAIAAARQAAAIgGATIgDAOIAJAYQADAHgCAEQgCAGgMAAQgVACgWAAIgQAAgAgCACIACABIgBgDIgBACg");
	this.shape_4.setTransform(61.275,10.5851);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AgIAJIgsAJIAdgaIgPgvIAmAdIAagZIgNAoIAoAjIgwgPIAAAvg");
	this.shape_5.setTransform(101.1,22.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0033").s().p("AgVAtQgJADgFAFQAEgHAIgFIgBgGIgPgSQgPgSgBgRQABgUAQgLQAMgJANAFQAKAEAFAOQAEAIABAJIADgDQAGgGAGgBQAJgCALAIQAMAJABAJQABAFgHAKQgJAOgLAGQgIAEgZAGQgIABgGACQgCAIgGAEQAEgEABgHg");
	this.shape_6.setTransform(144.1018,31.4638);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgVAuQgJADgFAEQAFgHAHgFIgCgGQgCgFgMgNQgPgRAAgSQgBgUAQgLQANgJAOAFQAJAEAGAOQADAJABAJIACgEQAHgGAGgBQAJgBALAIQAMAIABAJQABAGgGAJQgKAOgLAHQgIAEgZAFIgOADQgCAIgFAEQADgEABgGg");
	this.shape_7.setTransform(141.0762,5.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stars, new cjs.Rectangle(11.1,0,138.6,93.9), null);


(lib.lights = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(4.4,10.8,1,1,0,0,0,4.4,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:10.9,x:-3.25,y:5.3},0).wait(1).to({x:-8.95,y:0.4},0).wait(1).to({x:-13.2,y:-4.05},0).wait(1).to({x:-16.25,y:-8.05},0).wait(1).to({x:-18.2,y:-11.85},0).wait(1).to({x:-19.25,y:-15.35},0).wait(1).to({x:-19.4,y:-18.65},0).wait(1).to({x:-18.65,y:-21.8},0).wait(1).to({x:-17.05,y:-24.8},0).wait(1).to({x:-14.55,y:-27.7},0).wait(1).to({x:-11.05,y:-30.5},0).wait(1).to({x:-6.45,y:-33.2},0).wait(1).to({x:-0.55,y:-35.85},0).wait(1).to({x:6.85,y:-38.45},0).wait(1).to({x:16.45,y:-41.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-53,46.6,75.3);


(lib.heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stars();
	this.instance.setTransform(74.8,19.2,1,1,0,0,0,74.8,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:80.4,x:71.2,y:21.6},0).wait(1).to({x:61.8,y:23.25},0).wait(1).to({x:52.25,y:23.95},0).wait(1).to({x:42.75,y:23.4},0).wait(1).to({x:33.5,y:21.1},0).wait(1).to({x:25,y:16.75},0).wait(1).to({x:17.95,y:10.4},0).wait(1).to({x:12.7,y:2.45},0).wait(1).to({x:9.05,y:-6.35},0).wait(1).to({x:6.7,y:-15.6},0).wait(1).to({x:5.4,y:-25.05},0).wait(1).to({x:4.85,y:-34.6},0).wait(1).to({x:4.9,y:-44.15},0).wait(1).to({x:8.7,y:-60.4},0).wait(1).to({x:15,y:-75.9},0).wait(1).to({x:23.15,y:-90.45},0).wait(1).to({x:33.25,y:-103.8},0).wait(1).to({x:45.45,y:-115.15},0).wait(1).to({x:60.05,y:-123.25},0).wait(1).to({x:76.4,y:-126.6},0).wait(1).to({x:93,y:-125.95},0).wait(1).to({x:109.3,y:-122.1},0).wait(1).to({x:124.8,y:-115.85},0).wait(1).to({x:139.25,y:-107.5},0).wait(1).to({x:151.9,y:-96.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-173.5,285.6,244.4);


(lib.happyami = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(56.95,113.45,1,1,0,0,0,56.3,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_123();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.Symbol1_1();
	this.instance_2.setTransform(68.3,120.45,1,1,0,0,0,68.3,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.6,241);


(lib.emptycard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(0,0,0.2769,0.2769);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(312.4,283.25,0.7703,0.793,0,0,0,615.5,349.4);

	this.instance_2 = new lib.CachedBmp_22();
	this.instance_2.setTransform(15.4,11.05,0.2769,0.2769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.emptycard, new cjs.Rectangle(-161.7,0,947.4000000000001,558.9), null);


(lib.Symbol1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.CachedBmp_114();
	this.instance_3.setTransform(88.85,1001.65,0.5,0.5);

	this.instance_4 = new lib.normalami();
	this.instance_4.setTransform(106,969.65,0.0915,0.0886,0,0,0,182.5,293.6);

	this.instance_5 = new lib.CachedBmp_113();
	this.instance_5.setTransform(47.8,992.65,0.5,0.5);

	this.instance_6 = new lib.questionBiscuit();
	this.instance_6.setTransform(688,792.25,1,1,0,0,0,213,44.6);

	this.instance_7 = new lib.CachedBmp_112();
	this.instance_7.setTransform(797.75,743.9,0.5,0.5);

	this.instance_8 = new lib.GameKindsign();
	this.instance_8.setTransform(1256.45,1263.3,0.6063,0.5771,90,0,0,180,179.2);

	this.instance_9 = new lib.GameKindsign();
	this.instance_9.setTransform(1270.45,724.1,0.3869,0.3569,0,0,0,180,179.2);

	this.instance_10 = new lib.pinkcream();
	this.instance_10.setTransform(683.4,1028.9,1,1,0,0,0,641,361);

	this.instance_11 = new lib.waffle_bg();
	this.instance_11.setTransform(43.4,668.9);

	this.instance_12 = new lib.pinkcreampng();
	this.instance_12.setTransform(40.4,592.15);

	this.instance_13 = new lib.סירופט();
	this.instance_13.setTransform(664.6,65.5,1,1,0,0,0,309.8,47.5);

	this.instance_14 = new lib.סיקופורוד();
	this.instance_14.setTransform(666,197.75,1,1,0,0,0,464.7,39.1);

	this.instance_15 = new lib.מקלסבא();
	this.instance_15.setTransform(1204.4,384.8,1.0583,1,0,0,180,162.8,218.8);

	this.instance_16 = new lib.מקלסבא();
	this.instance_16.setTransform(162.8,389.85,1,1,0,0,0,162.8,218.8);

	this.instance_17 = new lib.מקלסבאשוכב();
	this.instance_17.setTransform(671.25,209.8,1,1,0,0,0,405.6,32);

	this.instance_18 = new lib.CachedBmp_111();
	this.instance_18.setTransform(200.8,64.4,0.5,0.5);

	this.instance_19 = new lib.שמיים();
	this.instance_19.setTransform(682.45,281.2,1,1,0,0,0,641.9,281.2);

	this.instance_20 = new lib.CachedBmp_110();
	this.instance_20.setTransform(35.2,9.45,0.5,0.5);

	this.instance_21 = new lib.waffle_bg();
	this.instance_21.setTransform(40.4,14.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_3, new cjs.Rectangle(-0.5,0,1377.8,1388.9), null);


(lib.WatingTami = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(204.85,0,0.5,0.5);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(606.3,587.5,1,1,0,0,0,52.8,39.1);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.CachedBmp_99();
	this.instance_2.setTransform(553.5,548.35,0.5,0.5);

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(598.25,605.05,1,1,0,0,0,44.1,37.6);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_3();
	this.instance_4.setTransform(598.2,590.05,1,1,0,0,0,45.1,49.3);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.CachedBmp_98();
	this.instance_5.setTransform(548.05,537.2,0.5,0.5);

	this.instance_6 = new lib.Path_5();
	this.instance_6.setTransform(567.4,641.35,1,1,0,0,0,6,5.5);
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.CachedBmp_97();
	this.instance_7.setTransform(547.95,635.85,0.5,0.5);

	this.instance_8 = new lib.Path_7();
	this.instance_8.setTransform(418.25,817.55,1,1,0,0,0,15.2,13);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.VectorlayerImage_1_3();
	this.instance_9.setTransform(224.8,159.85);

	this.instance_10 = new lib.VectorlayerImage_0_2();
	this.instance_10.setTransform(699.8,790.85);

	this.instance_11 = new lib.CachedBmp_26();
	this.instance_11.setTransform(410.15,650.95,0.5,0.5);

	this.instance_12 = new lib.VectorlayerImage_2();
	this.instance_12.setTransform(436.8,611.85);

	this.instance_13 = new lib.CachedBmp_25();
	this.instance_13.setTransform(337.1,610.9,0.5,0.5);

	this.instance_14 = new lib.Path_1();
	this.instance_14.setTransform(411.35,529.75,1,1,0,0,0,259.4,68.9);
	this.instance_14.alpha = 0.3984;

	this.instance_15 = new lib.CachedBmp_24();
	this.instance_15.setTransform(0,445.75,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_37();
	this.instance_16.setTransform(204.85,0,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_33();
	this.instance_17.setTransform(410.15,650.95,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_32();
	this.instance_18.setTransform(337.1,610.9,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_31();
	this.instance_19.setTransform(0,445.75,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_44();
	this.instance_20.setTransform(204.85,0,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_40();
	this.instance_21.setTransform(410.15,650.95,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_39();
	this.instance_22.setTransform(337.1,610.9,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_38();
	this.instance_23.setTransform(0,445.75,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_51();
	this.instance_24.setTransform(204.85,0,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_47();
	this.instance_25.setTransform(410.15,650.95,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_46();
	this.instance_26.setTransform(337.1,610.9,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_45();
	this.instance_27.setTransform(0,445.75,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_58();
	this.instance_28.setTransform(204.85,0,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_54();
	this.instance_29.setTransform(410.15,650.95,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_53();
	this.instance_30.setTransform(337.1,610.9,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_52();
	this.instance_31.setTransform(0,445.75,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_65();
	this.instance_32.setTransform(204.85,0,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_61();
	this.instance_33.setTransform(410.15,650.95,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_60();
	this.instance_34.setTransform(337.1,610.9,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_59();
	this.instance_35.setTransform(0,445.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_72();
	this.instance_36.setTransform(204.85,0,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_68();
	this.instance_37.setTransform(410.15,650.95,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_67();
	this.instance_38.setTransform(337.1,610.9,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_66();
	this.instance_39.setTransform(0,445.75,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_79();
	this.instance_40.setTransform(204.85,0,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_75();
	this.instance_41.setTransform(410.15,650.95,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_74();
	this.instance_42.setTransform(337.1,610.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_73();
	this.instance_43.setTransform(0,445.75,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_86();
	this.instance_44.setTransform(204.85,0,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_82();
	this.instance_45.setTransform(410.15,650.95,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_81();
	this.instance_46.setTransform(337.1,610.9,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_80();
	this.instance_47.setTransform(0,445.75,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_93();
	this.instance_48.setTransform(204.85,0,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_89();
	this.instance_49.setTransform(410.15,650.95,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_88();
	this.instance_50.setTransform(337.1,610.9,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_87();
	this.instance_51.setTransform(0,445.75,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_100();
	this.instance_52.setTransform(204.85,0,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_96();
	this.instance_53.setTransform(410.15,650.95,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_95();
	this.instance_54.setTransform(337.1,610.9,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_94();
	this.instance_55.setTransform(0,445.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_19},{t:this.instance_14},{t:this.instance_18},{t:this.instance_12},{t:this.instance_17},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_16}]},2).to({state:[{t:this.instance_23},{t:this.instance_14},{t:this.instance_22},{t:this.instance_12},{t:this.instance_21},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_20}]},2).to({state:[{t:this.instance_27},{t:this.instance_14},{t:this.instance_26},{t:this.instance_12},{t:this.instance_25},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_24}]},2).to({state:[{t:this.instance_31},{t:this.instance_14},{t:this.instance_30},{t:this.instance_12},{t:this.instance_29},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_28}]},2).to({state:[{t:this.instance_35},{t:this.instance_14},{t:this.instance_34},{t:this.instance_12},{t:this.instance_33},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_32}]},2).to({state:[{t:this.instance_39},{t:this.instance_14},{t:this.instance_38},{t:this.instance_12},{t:this.instance_37},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_36}]},2).to({state:[{t:this.instance_43},{t:this.instance_14},{t:this.instance_42},{t:this.instance_12},{t:this.instance_41},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_40}]},2).to({state:[{t:this.instance_47},{t:this.instance_14},{t:this.instance_46},{t:this.instance_12},{t:this.instance_45},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_44}]},2).to({state:[{t:this.instance_51},{t:this.instance_14},{t:this.instance_50},{t:this.instance_12},{t:this.instance_49},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_48}]},2).to({state:[{t:this.instance_55},{t:this.instance_14},{t:this.instance_54},{t:this.instance_12},{t:this.instance_53},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_52}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1056.5,1045.8);


(lib.pauseCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(734.2,293.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(644.2,238.2,0.5,0.5);

	this.backToGameAfterPause = new lib.backtogamebutton();
	this.backToGameAfterPause.name = "backToGameAfterPause";
	this.backToGameAfterPause.setTransform(654.85,653.55,1,0.9926,0,0,0,86.7,20.7);
	new cjs.ButtonHelper(this.backToGameAfterPause, 0, 1, 2, false, new lib.backtogamebutton(), 3);

	this.instance_2 = new lib.WatingTami();
	this.instance_2.setTransform(436.1,329.25,0.3829,0.3801,0,0,0,528.5,523.8);

	this.instance_3 = new lib.emptycard();
	this.instance_3.setTransform(688.25,494.2,1.8054,1.7922,0,0,0,311.9,275.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.backToGameAfterPause},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("EjP2CH/MAAAkP8MGftAAAMAAAEP8g");
	this.shape.setTransform(670.175,426.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseCard, new cjs.Rectangle(-660.1,-444,2660.6,1740.5), null);


(lib.flyingwitch1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1_2();
	this.instance.setTransform(208.75,140.25,1,1,0,0,0,173.6,156.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:175.9,regY:165.5,scaleX:0.999,scaleY:0.999,rotation:1.0208,x:211.4,y:151},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,rotation:2.0415,x:211.8,y:152.9},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,rotation:3.0623,x:212.8,y:153.1},0).wait(1).to({scaleX:0.9961,scaleY:0.9961,rotation:4.0831,x:213.7,y:153.25},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,rotation:5.1038,x:214.7,y:153.35},0).wait(1).to({scaleX:0.9942,scaleY:0.9942,rotation:6.1246,x:215.7,y:153.5},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,rotation:7.1453,x:216.65,y:153.65},0).wait(1).to({scaleX:0.9923,scaleY:0.9923,rotation:8.1661,x:217.65,y:153.8},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,rotation:9.1869,x:218.65,y:153.9},0).wait(1).to({scaleX:0.9903,scaleY:0.9903,rotation:10.2076,x:219.6,y:154},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,rotation:11.2284,x:220.55,y:154.15},0).wait(1).to({scaleX:0.9884,scaleY:0.9884,rotation:12.2492,x:221.55,y:154.3},0).wait(1).to({scaleX:0.9874,scaleY:0.9874,rotation:13.2699,x:222.45,y:154.25},0).wait(1).to({scaleX:0.9865,scaleY:0.9865,rotation:14.2907,x:223.35,y:153.85},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,rotation:15.3115,x:224.3,y:153.4},0).wait(1).to({scaleX:0.9845,scaleY:0.9845,rotation:16.3322,x:225.15,y:152.9},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,rotation:17.353,x:226.05,y:152.4},0).wait(1).to({scaleX:0.9826,scaleY:0.9826,rotation:18.3737,x:226.85,y:151.95},0).wait(1).to({scaleX:0.9816,scaleY:0.9816,rotation:19.3945,x:227.7,y:151.35},0).wait(1).to({scaleX:0.9807,scaleY:0.9807,rotation:20.4153,x:228.55,y:150.7},0).wait(1).to({scaleX:0.9797,scaleY:0.9797,rotation:21.436,x:229.35,y:150.1},0).wait(1).to({scaleX:0.9787,scaleY:0.9787,rotation:22.4568,x:230.2,y:149.4},0).wait(1).to({scaleX:0.9778,scaleY:0.9778,rotation:21.5276,x:231.2,y:148.75},0).wait(1).to({scaleX:0.9768,scaleY:0.9768,rotation:20.5984,x:232.25,y:148},0).wait(1).to({scaleX:0.9758,scaleY:0.9758,rotation:19.6691,x:233.2,y:147.15},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,rotation:18.7399,x:233.95,y:146.3},0).wait(1).to({scaleX:0.9739,scaleY:0.9739,rotation:17.8107,x:234.45,y:145.2},0).wait(1).to({scaleX:0.9729,scaleY:0.9729,rotation:16.8815,x:234.3,y:144.15},0).wait(1).to({scaleX:0.972,scaleY:0.972,rotation:15.9522,x:233.85,y:143.15},0).wait(1).to({scaleX:0.971,scaleY:0.971,rotation:15.023,x:233.25,y:142.25},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:14.0938,x:232.65,y:141.4},0).wait(1).to({scaleX:0.969,scaleY:0.969,rotation:13.1646,x:232,y:140.6},0).wait(1).to({scaleX:0.9681,scaleY:0.9681,rotation:12.2353,x:231.25,y:139.8},0).wait(1).to({scaleX:0.9671,scaleY:0.9671,rotation:11.3061,x:230.55,y:139.05},0).wait(1).to({scaleX:0.9662,scaleY:0.9662,rotation:10.3769,x:229.8,y:138.35},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,rotation:9.4477,x:229,y:137.65},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,rotation:8.5184,x:228.2,y:137},0).wait(1).to({scaleX:0.9632,scaleY:0.9632,rotation:7.5892,x:227.35,y:136.4},0).wait(1).to({scaleX:0.9623,scaleY:0.9623,rotation:6.66,x:226.5,y:135.85},0).wait(1).to({scaleX:0.9613,scaleY:0.9613,rotation:5.7308,x:225.65,y:135.25},0).wait(1).to({scaleX:0.9603,scaleY:0.9603,rotation:4.8016,x:224.75,y:134.65},0).wait(1).to({scaleX:0.9594,scaleY:0.9594,rotation:3.8723,x:223.9,y:134.1},0).wait(1).to({scaleX:0.9584,scaleY:0.9584,rotation:3.6685,x:222.85,y:133.95},0).wait(1).to({scaleX:0.9574,scaleY:0.9574,rotation:3.4647,x:221.75},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,rotation:3.2609,x:220.6,y:134.15},0).wait(1).to({scaleX:0.9555,scaleY:0.9555,rotation:3.0571,x:219.6,y:134.55},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,rotation:2.8533,x:218.65,y:135.15},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,rotation:2.6495,x:217.8,y:135.85},0).wait(1).to({scaleX:0.9526,scaleY:0.9526,rotation:2.4457,x:217.05,y:136.85},0).wait(1).to({scaleX:0.9516,scaleY:0.9516,rotation:2.2419,x:216.55,y:137.7},0).wait(1).to({scaleX:0.9507,scaleY:0.9507,rotation:2.0381,x:216.05,y:138.7},0).wait(1).to({scaleX:0.9497,scaleY:0.9497,rotation:1.8343,x:215.5,y:139.7},0).wait(1).to({scaleX:0.9487,scaleY:0.9487,rotation:1.6305,x:215.05,y:140.65},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,rotation:1.4266,x:214.5,y:141.65},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,rotation:1.2228,x:214,y:142.65},0).wait(1).to({scaleX:0.9458,scaleY:0.9458,rotation:1.019,x:213.45,y:143.6},0).wait(1).to({scaleX:0.9449,scaleY:0.9449,rotation:0.8152,x:213,y:144.6},0).wait(1).to({scaleX:0.9439,scaleY:0.9439,rotation:0.6114,x:212.45,y:145.6},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,rotation:0.4076,x:211.95,y:146.6},0).wait(1).to({scaleX:0.942,scaleY:0.942,rotation:0.2038,x:211.4,y:147.6},0).wait(1).to({scaleX:0.941,scaleY:0.941,rotation:0,x:210.85,y:148.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.1,-66,442.09999999999997,431);


(lib.emptycard_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(0,0,0.2769,0.2769);

	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.setTransform(312.35,283.15,0.7701,0.7701,0,0,0,615.6,349.4);

	this.instance_5 = new lib.CachedBmp_15();
	this.instance_5.setTransform(2.8,14.65,0.2769,0.2769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.emptycard_1, new cjs.Rectangle(-161.7,0,947.2,550.8), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		console.log("in frame1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-83.65,-20,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(-84.25,-29.85,0.5,0.5);

	this.start_btn = new lib.startbutton();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(-0.25,0.15);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.startbutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.start_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-29.8,174.8,55.2);


(lib.questionBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(63));

	// otherelements
	this.instance = new lib.GameKindsign_1();
	this.instance.setTransform(1216.6,260,0.597,0.7596,90,0,0,180.2,179.1);

	this.instance_1 = new lib.clock();
	this.instance_1.setTransform(-24.4,63.15,1.7463,1.6637,0,0,0,59.8,70.4);

	this.instance_2 = new lib.GameKindsign_1();
	this.instance_2.setTransform(1205.2,26.05,0.3346,0.2957,0,0,0,180.1,179.1);

	this.instance_3 = new lib.questionBiscuit_1();
	this.instance_3.setTransform(666.35,102.2,1,1,0,0,0,213,44.6);

	this.instance_4 = new lib.pinkcream_1();
	this.instance_4.setTransform(640,388.75,1,1,0,0,0,641,361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_2},{t:this.instance},{t:this.instance_3},{t:this.instance_1}]},20).wait(43));

	// onlyBiscuit
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(1422.2,122);

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(1422.2,735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},62).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:735},62).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-574.1,2877.3,2109.1);


(lib.witchandendsign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.subjectInFinishCard = new cjs.Text("", "normal 700 10px 'Assistant'", "#68451A");
	this.subjectInFinishCard.name = "subjectInFinishCard";
	this.subjectInFinishCard.textAlign = "center";
	this.subjectInFinishCard.lineHeight = 15;
	this.subjectInFinishCard.lineWidth = 100;
	this.subjectInFinishCard.parent = this;
	this.subjectInFinishCard.setTransform(462.55,75.85,1.8474,1.9267);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.subjectInFinishCard);
	}

	this.instance = new lib.subjectHeadlineOfFinishCard();
	this.instance.setTransform(544.5,88.4,1,1,0,0,0,106,17);

	this.instance_1 = new lib.timeAmount();
	this.instance_1.setTransform(351,192.6,2.2447,2.3089);

	this.instance_2 = new lib.finalGrade();
	this.instance_2.setTransform(329.65,135.7,2.155,2.2567,0,0,0,-63.4,-20.9);

	this.instance_3 = new lib.numOfMistakes();
	this.instance_3.setTransform(710.5,202.15,2.3134,2.4028,0,0,0,52,7.4);

	this.instance_4 = new lib.headlineOfFinishCard();
	this.instance_4.setTransform(528.2,59.65,1.5133,1.4991,0,0,0,106,16.5);

	this.time = new cjs.Text("", "bold 10px 'Arial'", "#323232");
	this.time.name = "time";
	this.time.textAlign = "center";
	this.time.lineHeight = 13;
	this.time.lineWidth = 48;
	this.time.alpha = 0.99607843;
	this.time.parent = this;
	this.time.setTransform(356.1,249.1,2.6024,2.7794);

	this.grade = new cjs.Text("", "bold 6px 'Arial'", "#323232");
	this.grade.name = "grade";
	this.grade.textAlign = "center";
	this.grade.lineHeight = 9;
	this.grade.lineWidth = 27;
	this.grade.alpha = 0.99607843;
	this.grade.parent = this;
	this.grade.setTransform(522.3958,251.35,4.459,4.3924);

	this.numOfMistakes = new cjs.Text("", "bold 6px 'Arial'", "#323232");
	this.numOfMistakes.name = "numOfMistakes";
	this.numOfMistakes.textAlign = "center";
	this.numOfMistakes.lineHeight = 9;
	this.numOfMistakes.lineWidth = 29;
	this.numOfMistakes.alpha = 0.99607843;
	this.numOfMistakes.parent = this;
	this.numOfMistakes.setTransform(696.9161,251.85,3.9512,4.4053);

	this.instance_5 = new lib.MaskGroup14();
	this.instance_5.setTransform(262,31,0.7528,0.7869);

	this.instance_6 = new lib.lights();
	this.instance_6.setTransform(90.6,77.25,1,1,0,0,0,4.4,10.8);

	this.instance_7 = new lib.lights();
	this.instance_7.setTransform(38.65,43.3,1,1,0,0,0,4.4,10.8);

	this.instance_8 = new lib.CachedBmp_118();
	this.instance_8.setTransform(243.1,14.05,0.5,0.5);

	this.instance_9 = new lib.ClipGroup();
	this.instance_9.setTransform(555.5,297.25,0.7702,0.7702,0,0,0,615.6,349.2);

	this.instance_10 = new lib.CachedBmp_117();
	this.instance_10.setTransform(262.4,34.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_116();
	this.instance_11.setTransform(201.6,168.1,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_115();
	this.instance_12.setTransform(-0.1,-0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.numOfMistakes},{t:this.grade},{t:this.time},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.subjectInFinishCard}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.witchandendsign, new cjs.Rectangle(-0.1,0,1028.8,565.1), null);


(lib.finalAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_343 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(343).call(this.frame_343).wait(1));

	// buttons
	this.end_btn = new lib.buttonBACKTOGAME();
	this.end_btn.name = "end_btn";
	this.end_btn.setTransform(443.65,455.65,0.7094,0.7094);
	new cjs.ButtonHelper(this.end_btn, 0, 1, 2, false, new lib.buttonBACKTOGAME(), 3);

	this.returnToGame_btn = new lib.endgamebutton();
	this.returnToGame_btn.name = "returnToGame_btn";
	this.returnToGame_btn.setTransform(846.3,455.7,0.7095,0.7095);
	new cjs.ButtonHelper(this.returnToGame_btn, 0, 1, 2, false, new lib.endgamebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.returnToGame_btn},{t:this.end_btn}]},236).wait(108));

	// confitti2
	this.instance = new lib.confiti("synched",0);
	this.instance.setTransform(654.95,-75.4,2.4247,2.4247,0,0,0,-75.4,81.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).to({_off:true},59).wait(131));

	// witch
	this.endOfGameCard = new lib.witchandendsign();
	this.endOfGameCard.name = "endOfGameCard";
	this.endOfGameCard.setTransform(1849.7,343.1,1,1,0,0,0,514.5,282.8);
	this.endOfGameCard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.endOfGameCard).wait(180).to({_off:false},0).wait(1).to({regX:405.5,regY:168,x:1718.95,y:228.35},0).wait(1).to({x:1697.25,y:228.4},0).wait(1).to({x:1675.55,y:228.5},0).wait(1).to({x:1653.8,y:228.55},0).wait(1).to({x:1632.1,y:228.65},0).wait(1).to({x:1610.4,y:228.7},0).wait(1).to({x:1588.7,y:228.8},0).wait(1).to({x:1566.95,y:228.85},0).wait(1).to({x:1545.25,y:228.9},0).wait(1).to({x:1523.55,y:229},0).wait(1).to({x:1501.8,y:229.05},0).wait(1).to({x:1480.1,y:229.15},0).wait(1).to({x:1458.4,y:229.2},0).wait(1).to({x:1436.7,y:229.3},0).wait(1).to({x:1414.95,y:229.35},0).wait(1).to({x:1393.25,y:229.4},0).wait(1).to({x:1371.55,y:229.5},0).wait(1).to({x:1349.8,y:229.55},0).wait(1).to({x:1328.1,y:229.65},0).wait(1).to({x:1306.4,y:229.7},0).wait(1).to({x:1284.7,y:229.8},0).wait(1).to({x:1262.95,y:229.85},0).wait(1).to({x:1241.25,y:229.9},0).wait(1).to({x:1219.55,y:230},0).wait(1).to({x:1197.8,y:230.05},0).wait(1).to({x:1176.1,y:230.15},0).wait(1).to({x:1154.4,y:230.2},0).wait(1).to({x:1132.7,y:230.3},0).wait(1).to({x:1110.95,y:230.35},0).wait(1).to({x:1089.25,y:230.4},0).wait(1).to({x:1067.55,y:230.5},0).wait(1).to({x:1045.8,y:230.55},0).wait(1).to({x:1024.1,y:230.65},0).wait(1).to({x:1002.4,y:230.7},0).wait(1).to({x:980.7,y:230.8},0).wait(1).to({x:958.95,y:230.85},0).wait(1).to({x:937.25,y:230.9},0).wait(1).to({x:915.55,y:231},0).wait(1).to({x:893.8,y:231.05},0).wait(1).to({x:872.1,y:231.15},0).wait(1).to({x:850.4,y:231.2},0).wait(1).to({x:828.7,y:231.3},0).wait(1).to({x:806.95,y:231.35},0).wait(1).to({x:785.25,y:231.4},0).wait(1).to({x:763.55,y:231.5},0).wait(1).to({x:741.8,y:231.55},0).wait(1).to({x:720.1,y:231.65},0).wait(1).to({x:698.4,y:231.7},0).wait(1).to({x:676.7,y:231.8},0).wait(1).to({x:654.95,y:231.85},0).wait(1).to({x:633.25,y:231.9},0).wait(1).to({x:611.55,y:232},0).wait(1).to({x:589.8,y:232.05},0).wait(1).to({x:568.1,y:232.15},0).wait(1).to({x:546.4,y:232.2},0).wait(1).to({x:524.7,y:232.3},0).wait(108));

	// conffetti
	this.instance_1 = new lib.heart();
	this.instance_1.setTransform(944.55,338.05,1.1523,1.1523,55.4833);

	this.instance_2 = new lib.heart();
	this.instance_2.setTransform(709.3,384.3,1.1523,1.1523);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},87).to({state:[]},31).wait(226));

	// tami
	this.instance_3 = new lib.happytami_1();
	this.instance_3.setTransform(660.9,436.55,0.4033,0.4033,0,0,0,136.4,210.9);

	this.instance_4 = new lib.VectorlayerImage_6();
	this.instance_4.setTransform(746.7,426.65,0.7251,0.7583);

	this.instance_5 = new lib.VectorlayerImage_5();
	this.instance_5.setTransform(769.15,478.1,0.7251,0.7583);

	this.instance_6 = new lib.VectorlayerImage_4();
	this.instance_6.setTransform(751.8,456.55,0.7251,0.7583);

	this.instance_7 = new lib.VectorlayerImage_3();
	this.instance_7.setTransform(785.95,539.15,0.7251,0.7583);

	this.instance_8 = new lib.VectorlayerImage_2_1();
	this.instance_8.setTransform(791.75,523.25,0.7251,0.7583);

	this.instance_9 = new lib.VectorlayerImage_1_1();
	this.instance_9.setTransform(788.7,543.7,0.7251,0.7583);

	this.instance_10 = new lib.VectorlayerImage_0();
	this.instance_10.setTransform(774.3,523.25,0.7251,0.7583);

	this.instance_11 = new lib.VectorlayerImage();
	this.instance_11.setTransform(787.35,542.6,0.7251,0.7583);

	this.instance_12 = new lib.Symbol8();
	this.instance_12.setTransform(800.2,523.1,1,1,0,0,0,55.5,92.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.happytami();
	this.instance_13.setTransform(548.5,554.05,0.4268,0.4268,0,0,0,136.8,210.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_12}]},31).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:135.9,regY:211.1,x:660.65,y:437.75},0).wait(1).to({y:438.9},0).wait(1).to({y:440},0).wait(1).to({y:441.15},0).wait(1).to({y:442.25},0).wait(1).to({y:443.4},0).wait(1).to({y:444.55},0).wait(1).to({y:445.65},0).wait(1).to({y:446.8},0).wait(1).to({y:447.9},0).wait(1).to({y:449.05},0).wait(1).to({y:450.2},0).wait(1).to({y:451.3},0).wait(1).to({y:452.45},0).wait(1).to({y:453.55},0).wait(1).to({y:454.7},0).wait(1).to({y:455.85},0).wait(1).to({y:456.95},0).wait(1).to({y:458.1},0).wait(1).to({y:459.2},0).wait(1).to({y:460.35},0).wait(1).to({y:461.45},0).wait(1).to({y:462.6},0).wait(1).to({y:463.75},0).wait(1).to({y:464.85},0).wait(1).to({y:466},0).wait(1).to({y:467.1},0).wait(1).to({y:468.25},0).wait(1).to({y:469.4},0).wait(1).to({y:470.5},0).wait(1).to({y:471.65},0).wait(1).to({y:472.75},0).wait(1).to({y:473.9},0).wait(1).to({y:475.05},0).wait(1).to({y:476.15},0).wait(1).to({y:477.3},0).wait(1).to({y:478.4},0).wait(1).to({y:479.55},0).wait(1).to({y:480.65},0).wait(1).to({y:481.8},0).wait(1).to({y:482.95},0).wait(1).to({y:484.05},0).wait(1).to({y:485.2},0).wait(1).to({y:486.3},0).wait(1).to({y:487.45},0).wait(1).to({y:488.6},0).wait(1).to({y:489.7},0).wait(1).to({y:490.85},0).wait(1).to({y:491.95},0).wait(1).to({y:493.1},0).wait(1).to({y:494.25},0).wait(1).to({y:495.35},0).wait(1).to({y:496.5},0).wait(1).to({y:497.6},0).wait(1).to({y:498.75},0).wait(1).to({y:499.9},0).wait(1).to({y:501},0).wait(1).to({y:502.15},0).wait(1).to({y:503.25},0).wait(1).to({y:504.4},0).wait(1).to({y:505.5},0).wait(1).to({y:506.65},0).wait(1).to({y:507.8},0).wait(1).to({y:508.9},0).wait(1).to({y:510.05},0).wait(1).to({y:511.15},0).wait(1).to({y:512.3},0).wait(1).to({y:513.45},0).wait(1).to({y:514.55},0).wait(1).to({y:515.7},0).wait(1).to({y:516.8},0).wait(1).to({y:517.95},0).wait(1).to({y:519.1},0).wait(1).to({y:520.2},0).wait(1).to({y:521.35},0).wait(1).to({y:522.45},0).wait(1).to({y:523.6},0).wait(1).to({y:524.7},0).wait(1).to({x:682.1},0).wait(1).to({x:703.55},0).wait(1).to({x:725},0).wait(1).to({x:746.4},0).wait(1).to({x:767.85},0).wait(1).to({x:789.3},0).wait(1).to({x:810.7},0).wait(1).to({regX:136.4,regY:210.9,x:810.95,y:524.65},0).to({_off:true},1).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(118).to({_off:false},0).wait(1).to({regY:91.9,y:555.2},0).wait(1).to({y:587.6},0).wait(1).to({y:620.05},0).wait(1).to({y:652.45},0).wait(1).to({y:684.9},0).wait(1).to({y:717.3},0).wait(1).to({y:749.7},0).wait(1).to({y:782.15},0).wait(1).to({y:814.55},0).wait(1).to({y:847},0).wait(1).to({y:879.4},0).wait(1).to({y:911.85},0).wait(1).to({y:944.25},0).wait(1).to({y:976.65},0).wait(1).to({y:1009.1},0).wait(1).to({y:1041.5},0).wait(1).to({y:1073.95},0).wait(1).to({y:1106.35},0).wait(1).to({y:1138.8},0).to({_off:true},1).wait(206));

	// ami
	this.instance_14 = new lib.happyami();
	this.instance_14.setTransform(1086.25,-108,1,1,0,0,0,68.3,120.4);

	this.instance_15 = new lib.VectorlayerImage_6_1();
	this.instance_15.setTransform(853.85,430.9,0.8017,0.6812);

	this.instance_16 = new lib.VectorlayerImage_5_1();
	this.instance_16.setTransform(930,496.85,0.8017,0.6812);

	this.instance_17 = new lib.VectorlayerImage_4_1();
	this.instance_17.setTransform(861.8,476.65,0.8017,0.6812);

	this.instance_18 = new lib.VectorlayerImage_3_1();
	this.instance_18.setTransform(853,459.6,0.8017,0.6812);

	this.instance_19 = new lib.VectorlayerImage_2_2();
	this.instance_19.setTransform(904.4,539.3,0.8017,0.6812);

	this.instance_20 = new lib.VectorlayerImage_1_2();
	this.instance_20.setTransform(873.15,527.7,0.8017,0.6812);

	this.instance_21 = new lib.VectorlayerImage_0_1();
	this.instance_21.setTransform(845.75,527.7,0.8017,0.6812);

	this.instance_22 = new lib.VectorlayerImage_1();
	this.instance_22.setTransform(813.7,531.15,0.8017,0.6812);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(895.2,556.65,1,1,0,0,0,81.5,125.7);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.instance_23}]},31).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_14}]},1).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:66.5,regY:120.5,x:1084.45,y:-99.45},0).wait(1).to({y:-91},0).wait(1).to({y:-82.55},0).wait(1).to({y:-74.1},0).wait(1).to({y:-65.7},0).wait(1).to({y:-57.25},0).wait(1).to({y:-48.8},0).wait(1).to({y:-40.35},0).wait(1).to({y:-31.95},0).wait(1).to({y:-23.5},0).wait(1).to({y:-15.05},0).wait(1).to({y:-6.6},0).wait(1).to({y:1.8},0).wait(1).to({y:10.25},0).wait(1).to({y:18.7},0).wait(1).to({y:27.15},0).wait(1).to({y:35.55},0).wait(1).to({y:44},0).wait(1).to({y:52.45},0).wait(1).to({y:60.9},0).wait(1).to({y:69.3},0).wait(1).to({y:77.75},0).wait(1).to({y:86.2},0).wait(1).to({y:94.65},0).wait(1).to({y:103.05},0).wait(1).to({y:111.5},0).wait(1).to({y:119.95},0).wait(1).to({y:128.35},0).wait(1).to({y:136.75},0).wait(1).to({y:145.2},0).wait(1).to({y:153.65},0).wait(1).to({y:162.1},0).wait(1).to({y:170.5},0).wait(1).to({y:178.95},0).wait(1).to({y:187.4},0).wait(1).to({y:195.85},0).wait(1).to({y:204.25},0).wait(1).to({y:212.7},0).wait(1).to({y:221.15},0).wait(1).to({y:229.6},0).wait(1).to({y:238.05},0).wait(1).to({y:246.45},0).wait(1).to({y:254.9},0).wait(1).to({y:263.35},0).wait(1).to({y:271.8},0).wait(1).to({y:280.2},0).wait(1).to({y:288.65},0).wait(1).to({y:297.1},0).wait(1).to({y:305.55},0).wait(1).to({y:313.95},0).wait(1).to({y:322.4},0).wait(1).to({y:330.85},0).wait(1).to({y:339.3},0).wait(1).to({y:347.7},0).wait(1).to({y:356.15},0).wait(1).to({y:364.6},0).wait(1).to({y:373.05},0).wait(1).to({y:381.45},0).wait(1).to({y:389.9},0).wait(1).to({y:398.35},0).wait(1).to({y:406.8},0).wait(1).to({y:415.2},0).wait(1).to({y:423.65},0).wait(1).to({y:432.1},0).wait(1).to({y:440.55},0).wait(1).to({y:448.95},0).wait(1).to({y:457.4},0).wait(1).to({y:465.85},0).wait(1).to({y:474.3},0).wait(1).to({y:482.7},0).wait(1).to({y:491.15},0).wait(1).to({y:499.6},0).wait(1).to({y:508.05},0).wait(1).to({y:516.45},0).wait(1).to({y:524.9},0).wait(1).to({y:533.35},0).wait(1).to({y:541.8},0).wait(1).to({y:550.25},0).wait(1).to({x:1062.75},0).wait(1).to({x:1041.05},0).wait(1).to({x:1019.35},0).wait(1).to({x:997.65},0).wait(1).to({x:975.95},0).wait(1).to({x:954.25},0).wait(1).to({x:932.55},0).wait(1).to({regX:68.3,regY:120.4,x:934.35,y:550.15},0).to({_off:true},1).wait(51).to({_off:false,x:684.95,y:586.55},0).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(118).to({_off:false},0).wait(1).to({regX:81,regY:125.5,x:894.7,y:587.8},0).wait(1).to({y:619.15},0).wait(1).to({y:650.55},0).wait(1).to({y:681.9},0).wait(1).to({y:713.25},0).wait(1).to({y:744.65},0).wait(1).to({y:776},0).wait(1).to({y:807.35},0).wait(1).to({y:838.75},0).wait(1).to({y:870.1},0).wait(1).to({y:901.5},0).wait(1).to({y:932.85},0).wait(1).to({y:964.2},0).wait(1).to({y:995.6},0).wait(1).to({y:1026.95},0).wait(1).to({y:1058.3},0).wait(1).to({y:1089.7},0).wait(1).to({y:1121.05},0).wait(1).to({y:1152.45},0).to({_off:true},1).wait(206));

	// MergedLayer_1
	this.instance_24 = new lib.Symbol1_3();
	this.instance_24.setTransform(645,54.35,1,1,0,0,0,688.4,694.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({y:62.85},0).wait(1).to({y:71.3},0).wait(1).to({y:79.75},0).wait(1).to({y:88.2},0).wait(1).to({y:96.7},0).wait(1).to({y:105.15},0).wait(1).to({y:113.6},0).wait(1).to({y:122.05},0).wait(1).to({y:130.55},0).wait(1).to({y:139},0).wait(1).to({y:147.45},0).wait(1).to({y:155.9},0).wait(1).to({y:164.35},0).wait(1).to({y:172.85},0).wait(1).to({y:181.3},0).wait(1).to({y:189.75},0).wait(1).to({y:198.2},0).wait(1).to({y:206.7},0).wait(1).to({y:215.15},0).wait(1).to({y:223.6},0).wait(1).to({y:232.05},0).wait(1).to({y:240.55},0).wait(1).to({y:249},0).wait(1).to({y:257.45},0).wait(1).to({y:265.9},0).wait(1).to({y:274.35},0).wait(1).to({y:282.85},0).wait(1).to({y:291.3},0).wait(1).to({y:299.75},0).wait(1).to({y:308.2},0).wait(1).to({y:316.7},0).wait(1).to({y:325.15},0).wait(1).to({y:333.6},0).wait(1).to({y:342.05},0).wait(1).to({y:350.55},0).wait(1).to({y:359},0).wait(1).to({y:367.45},0).wait(1).to({y:375.9},0).wait(1).to({y:384.35},0).wait(1).to({y:392.85},0).wait(1).to({y:401.3},0).wait(1).to({y:409.75},0).wait(1).to({y:418.2},0).wait(1).to({y:426.7},0).wait(1).to({y:435.15},0).wait(1).to({y:443.6},0).wait(1).to({y:452.05},0).wait(1).to({y:460.55},0).wait(1).to({y:469},0).wait(1).to({y:477.45},0).wait(1).to({y:485.9},0).wait(1).to({y:494.35},0).wait(1).to({y:502.85},0).wait(1).to({y:511.3},0).wait(1).to({y:519.75},0).wait(1).to({y:528.2},0).wait(1).to({y:536.7},0).wait(1).to({y:545.15},0).wait(1).to({y:553.6},0).wait(1).to({y:562.05},0).wait(1).to({y:570.55},0).wait(1).to({y:579},0).wait(1).to({y:587.45},0).wait(1).to({y:595.9},0).wait(1).to({y:604.35},0).wait(1).to({y:612.85},0).wait(1).to({y:621.3},0).wait(1).to({y:629.75},0).wait(1).to({y:638.2},0).wait(1).to({y:646.7},0).wait(1).to({y:655.15},0).wait(1).to({y:663.6},0).wait(1).to({y:672.05},0).wait(1).to({y:680.55},0).wait(1).to({y:689},0).wait(1).to({y:697.4},0).wait(1).to({y:705.85},0).wait(1).to({y:714.35},0).wait(41).to({y:732.25},0).wait(1).to({y:750.2},0).wait(1).to({y:768.15},0).wait(1).to({y:786.1},0).wait(1).to({y:804},0).wait(1).to({y:821.95},0).wait(1).to({y:839.9},0).wait(1).to({y:857.85},0).wait(1).to({y:875.8},0).wait(1).to({y:893.7},0).wait(1).to({y:911.65},0).wait(1).to({y:929.6},0).wait(1).to({y:947.55},0).wait(1).to({y:965.5},0).wait(1).to({y:983.4},0).wait(1).to({y:1001.35},0).wait(1).to({y:1019.3},0).wait(1).to({y:1037.25},0).wait(1).to({y:1055.15},0).wait(1).to({y:1073.1},0).wait(1).to({y:1091.05},0).wait(1).to({y:1109},0).wait(1).to({y:1126.95},0).wait(1).to({y:1144.85},0).wait(1).to({y:1162.8},0).wait(1).to({y:1180.75},0).wait(1).to({y:1198.7},0).wait(1).to({y:1216.65},0).wait(1).to({y:1234.55},0).wait(1).to({y:1252.5},0).wait(1).to({y:1270.45},0).wait(1).to({y:1288.4},0).wait(1).to({y:1306.35},0).wait(193));

	// Layer_2
	this.instance_25 = new lib.Symbol9();
	this.instance_25.setTransform(654.2,-582.95,1,1,0,0,0,702.1,643.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(78).to({_off:false},0).wait(1).to({regY:643,y:-575.1},0).wait(1).to({y:-567.15},0).wait(1).to({y:-559.2},0).wait(1).to({y:-551.25},0).wait(1).to({y:-543.3},0).wait(1).to({y:-535.35},0).wait(1).to({y:-527.4},0).wait(1).to({y:-519.45},0).wait(1).to({y:-511.5},0).wait(1).to({y:-503.55},0).wait(1).to({y:-495.65},0).wait(1).to({y:-487.7},0).wait(1).to({y:-479.75},0).wait(1).to({y:-471.8},0).wait(1).to({y:-463.85},0).wait(1).to({y:-455.9},0).wait(1).to({y:-447.95},0).wait(1).to({y:-440},0).wait(1).to({y:-432.05},0).wait(1).to({y:-424.1},0).wait(1).to({y:-416.2},0).wait(1).to({y:-408.25},0).wait(1).to({y:-400.3},0).wait(1).to({y:-392.35},0).wait(1).to({y:-384.4},0).wait(1).to({y:-376.45},0).wait(1).to({y:-368.5},0).wait(1).to({y:-360.55},0).wait(1).to({y:-352.6},0).wait(1).to({y:-344.65},0).wait(1).to({y:-336.7},0).wait(1).to({y:-328.8},0).wait(1).to({y:-320.85},0).wait(1).to({y:-312.9},0).wait(1).to({y:-304.95},0).wait(1).to({y:-297},0).wait(1).to({y:-289.05},0).wait(1).to({y:-281.1},0).wait(1).to({y:-273.15},0).wait(1).to({y:-265.2},0).wait(1).to({y:-257.25},0).wait(1).to({y:-249.35},0).wait(1).to({y:-241.4},0).wait(1).to({y:-233.45},0).wait(1).to({y:-225.5},0).wait(1).to({y:-217.55},0).wait(1).to({y:-209.6},0).wait(1).to({y:-201.65},0).wait(1).to({y:-193.7},0).wait(1).to({y:-185.75},0).wait(1).to({y:-177.8},0).wait(1).to({y:-169.85},0).wait(1).to({y:-161.95},0).wait(1).to({y:-154},0).wait(1).to({y:-146.05},0).wait(1).to({y:-138.1},0).wait(1).to({y:-130.15},0).wait(1).to({y:-122.2},0).wait(1).to({y:-114.25},0).wait(1).to({y:-106.3},0).wait(1).to({y:-98.35},0).wait(1).to({y:-90.4},0).wait(1).to({y:-82.5},0).wait(1).to({y:-74.55},0).wait(1).to({y:-66.6},0).wait(1).to({y:-58.65},0).wait(1).to({y:-50.7},0).wait(1).to({y:-42.75},0).wait(1).to({y:-34.8},0).wait(1).to({y:-26.85},0).wait(1).to({y:-18.9},0).wait(1).to({y:-10.95},0).wait(1).to({y:-3.05},0).wait(193));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-603.1,-1227.5,2967,3455.2);


(lib.comboBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.theChoiceButton = new lib.start();
	this.theChoiceButton.name = "theChoiceButton";
	this.theChoiceButton.setTransform(37.85,172.15,0.7589,0.7589,0,0,0,3.2,-2.1);

	this.theComboBox = new lib.an_ComboBox({'id': 'theComboBox', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, גוף האדם, 1, חלל, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.theComboBox.name = "theComboBox";
	this.theComboBox.setTransform(21.05,-4.3,1.7508,1.3731,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.theComboBox},{t:this.theChoiceButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comboBox, new cjs.Rectangle(-67.4,-20.1,176.9,213), null);


(lib.endOfTimeCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flyingwitch1();
	this.instance.setTransform(505.8,184.9,0.7823,0.7546,0,0,180);

	this.instance_1 = new lib.witchbackground();
	this.instance_1.setTransform(401.4,313.5,1,1,0,0,0,157,157);

	this.backToGameAfterTimeEnds = new lib.endgamebutton();
	this.backToGameAfterTimeEnds.name = "backToGameAfterTimeEnds";
	this.backToGameAfterTimeEnds.setTransform(638.15,667.2,1,0.9802,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.backToGameAfterTimeEnds, 0, 1, 2, false, new lib.endgamebutton(), 3);

	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(649.25,241.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_17();
	this.instance_3.setTransform(586.5,299.65,0.5,0.5);

	this.instance_4 = new lib.emptycard_1();
	this.instance_4.setTransform(688.25,494.35,1.8054,1.7928,0,0,0,311.9,275.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.backToGameAfterTimeEnds},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("EjP2CH/MAAAkP8MGftAAAMAAAEP8g");
	this.shape.setTransform(670.175,426.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endOfTimeCard, new cjs.Rectangle(-660.1,-444,2660.6,1740.5), null);


// stage content:
(lib.candyClimb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		canvas.style.direction = "rtl";
		
		//קריאה לפונקציה הבונה את כלל האלמנטים למסך הפתיחה
		SetFirstBackground();
		
		//משתנים הרלוונטים לשלבי המשחק השונים
		var countdown;
		var outputCountdown = new createjs.Text(countdown, "24px Assistant", "#000000");
		outputCountdown.x = 40
		outputCountdown.y = 40
		outputCountdown.name = "outputCountdown";
		
		var intervalVar;
		var correctOrIncorrect;
		var numOfMistakes = 0;
		var finalAmountOfTime = 0;
		var finalGrade = 0;
		var stageOfProgress = 0;
		var lastPlaceTami = 550;
		var gameSubject;
		var statusMusic = "on";
		var curChoosenAns;
		
		//משתנים המייצגים את גודל הבמה
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		//משתנה לבירור הערך הנבחר בקומבו-בוקס
		var mychoice = 0;
		
		//משתנה עבור המערך השלם של המשחק
		var myGame;
		
		//משתנה עבור בחירת שאלות באופן רנדומאלי במשחק
		var randomNumOfQuestion;
		
		//משתנה עבור ספירת מספר המסיחים שיש בכל שאלה
		var numOfAnswers = 0;
		
		
		// פתיחת משתנים של סאונדים
		var BGSound = new Audio("sounds/BGmusicthetravellingshowmp3.mp3");
		var fbSound;
		var jumpSound;
		var finishSound;
		
		var isTamiUp = false;
		var tempQuestion;
		var numOfAns;
		
		//משתנה שיכיל את המסיח המוגרל
		var ans;
		
		//משתנה לאורך של המסיחים
		var ansLength;
		
		//משתנה למיקום של המסיחים
		var ansPlace=[];
		
		//פונקציה המייצרת את כל האלמנטים הרלוונטים לרקע ההתחלתי- אנימציית הפתיחה
		function SetFirstBackground() {
			var startBackground = new lib.startBackground();
			startBackground.name = "startBackground";
			stage.addChild(startBackground);
			addCombo();
		}
		
		// פונקציה להוספת הקומבו בוקס
		function addCombo() {
			//הוספת הקומבו-בוקס לבמה
			var myComboBox = new lib.comboBox();
			myComboBox.x = 700;
			myComboBox.y = 300;
			myComboBox.name = "myComboBox";
			stage.addChild(myComboBox);
		
			//הגדרות עבור כפתור הבחירה של הקומבו-בוקס
			myComboBox.theChoiceButton.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו-בוקס
			$("#dom_overlay_container").on("change", "#theComboBox", theComboBox_change);
		}
		
		
		//פונקציה עבור שינוי הערכים בקומבו-בוקס
		function theComboBox_change(evt) {
		
			stage.getChildByName("myComboBox").theChoiceButton.gotoAndStop(1);
			stage.getChildByName("myComboBox").theChoiceButton.start_btn.addEventListener("click", ClickToChooseGame);
			//שמירת הערך שנבחר בקומבו
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - בחר משחק
			if (mychoice == 0) {
				//נטרול כפתור הבחירה
				stage.getChildByName("myComboBox").theChoiceButton.alpha = 1;
			} else {
				//כאשר המשתמש בוחר נושא בפועל, הכפתור חוזר להיות פעיל
				stage.getChildByName("myComboBox").theChoiceButton.alpha = 1;
			}
		}
		
		//לחיצה על בחר במסגרת הקומבו
		function ClickToChooseGame() {
			//הסרת קומבו בוקס מהבמה
			stage.removeChild(stage.getChildByName("myComboBox"));
			//הסרת הרקע ההתחלתי מהבמה
			stage.removeChild(stage.getChildByName("startBackground"));
			SetQuestionsBackground();
			if (mychoice == 1) {
				gameSubject = "גוף האדם";
				firstGame();
			} else if (mychoice == 2) {
				gameSubject = "חלל";
				secondGame();
			}
			stage.getChildByName("showGameSubject").text = gameSubject;
		}
		
		//פונקציה שמכניסה את תוכן המשחק הראשון למערך המשחק
		function firstGame() {
		
			myGame = [
		
				[ // שאלה 1
					["כמה שיניים יש בפה של אדם בוגר?", "no image"],
					[0],
					[
						[375, "32", "text", true, "no"],
						[550, "24", "text", false, "no"],
						[730, "30", "text", false, "no"],
						[905, "26", "text", false, "no"]
					]
				],
		
		
				[ //שאלה 2
					["היכן נמצאת העצם הכי קטנה בגוף?", "no image"],
					[0],
					[
						[375, "ברגל", "text", false, "no"],
						[550, "ביד", "text", false, "no"],
						[730, "בלשון", "text", false, "no"],
						[905, "באוזן", "text", true, "no"]
					]
				],
		
		
				[ //שאלה 3
					["באיזה צבע הדם שלנו בגוף?", "no image"],
					[0],
					[
						[375, "כחול", "text", false, "no"],
						[550, "אדום", "text", true, "no"],
						[730, "סגול", "text", false, "no"],
						[905, "צהוב", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 4
					["כמה אצבעות יש בכל כף רגל?", "no image"],
					[0],
					[
						[375, "12", "text", false, "no"],
						[550, "10", "text", false, "no"],
						[730, "5", "text", true, "no"],
						[905, "7", "text", false, "no"]
					]
		
				],
		
		
		
				[ //שאלה 5
					["איזו מערכת בגוף אחראית לתנועה וליציבות?", "no image"],
					[0],
					[
						[375, "מערכת השלד", "text", true, "no"],
						[550, "מערכת הנשימה", "text", false, "no"],
						[730, "מערכת העיכול", "text", false, "no"],
						[905, "מערכת העצבים", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 6
					["מה הפעולה ההפוכה של פעולת השאיפה?", "no image"],
					[0],
					[
						[375, "ריצה", "text", false, "no"],
						[550, "סיבוב", "text", false, "no"],
						[730, "נשיפה", "text", true, "no"],
						[905, "זרימה", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 7
					["דרך איזה איבר קולטים בני האדם מזון ומים?", "no image"],
					[0],
					[
						[375, "אף", "text", false, "no"],
						[550, "לב", "text", false, "no"],
						[730, "פה", "text", true, "no"],
						[905, "רגל", "text", false, "no"]
					]
				],
		
		
				[ //שאלה 8
					["דנה נוסעת מחר לים עם המשפחה שלה והיא הולכת להיות חשופה לשמש במשך הרבה זמן. מה תמליצו לדנה לשים על העור כדי שלא תישרף בשמש?", "no image"],
					[0],
					[
						[200, "בושם", "text", false, "no"],
						[375, lib.watch_MC, "image", false, "no"],
						[550, "גומייה", "text", false, "no"],
						[730, "קרם הגנה", "text", true, "no"],
						[905, lib.iceCube_MC, "image", false, "no"],
						[1080, "קרם ידיים", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 9
					["לבני האדם יש עיניים בצבעים שונים: כחול, ירוק וחום. התבוננו בתמונה- האם צבע העיניים המופיע בתמונה הוא הצבע שיש לרוב האנשים?", "includes image", lib.blueEye_MC],
					[0],
					[
						[550, "כן", "text", false, "no"],
						[730, "לא", "text", true, "no"]
					]
				],
		
		
		
				[ //שאלה 10
					["מה המשפט הנכון עבור 5 החושים?", "no image"],
					[0],
					[
						[375, "חמשת החושים הם: ראייה, שמיעה, מחשבה, דמיון, זיכרון", "text", false, "no"],
						[550, "חמשת החושים הם: מישוש, ריח, טעם, שמיעה, ראייה", "text", true, "no"],
						[730, "חמשת החושים הם: טעם, קריאה, דיבור, שמיעה, ריח", "text", false, "no"],
						[905, "חמשת החושים הם: הליכה, זיכרון, מחשבה, ראייה, דמיון", "text", false, "no"]
					]
				]
			];
			countdown = 45;
			intervalVar = setInterval(countdownFunction, 1000);
			startGame();
		
		}
		
		//פונקציה שמכניסה את תוכן המשחק השני למערך המשחק
		function secondGame() {
			myGame = [
		
				[ // שאלה 1
					["כמה כוכבי לכת קיימים?", "no image"],
					[0],
					[
						[375, "10", "text", false, "no"],
						[550, "8", "text", true, "no"],
						[730, "6", "text", false, "no"],
						[905, "12", "text", false, "no"]
					]
				],
		
		
				[ //שאלה 2
					["כמה זמן נמשך סיבוב אחד של כדור הארץ סביב הציר שלו?", "no image"],
					[0],
					[
						[375, "יממה", "text", true, "no"],
						[550, "שבוע", "text", false, "no"],
						[730, "חודש", "text", false, "no"],
						[905, "שנה", "text", false, "no"]
					]
				],
		
		
				[ //שאלה 3
					["מי היה טייס החלל הישראלי הראשון?", "no image"],
					[0],
					[
						[375, "יצחק רבין", "text", false, "no"],
						[550, "אריק זאבי", "text", false, "no"],
						[730, "שמואל יוסף עגנון", "text", false, "no"],
						[905, "אילן רמון", "text", true, "no"]
					]
				],
		
		
		
				[ //שאלה 4
					["איך נקראת הגלקסיה בה אנחנו שוכנים?", "no image"],
					[0],
					[
						[375, "שביל החלב", "text", true, "no"],
						[550, "אולטרה סגול", "text", false, "no"],
						[730, "כוכב הצפון", "text", false, "no"],
						[905, "הדובה הגדולה", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 5
					["מהו כוכב הלכת השלישי במערכת השמש?", "no image"],
					[0],
					[
						[375, "שבתאי", "text", false, "no"],
						[550, "כדור הארץ", "text", true, "no"],
						[730, "מאדים", "text", false, "no"],
						[905, "ונוס", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 6
					["איזו מדינה שיגרה ראשונה אדם לחלל?", "no image"],
					[0],
					[
						[375, "גרמניה", "text", false, "no"],
						[550, "ישראל", "text", false, "no"],
						[730, "סין", "text", false, "no"],
						[905, "ברית המועצות", "text", true, "no"]
					]
				],
		
		
		
				[ //שאלה 7
					["איך נקראת התופעה שבה הירח מסתיר את השמש או את חלקה מעיני צופים בכדור הארץ?", "no image"],
					[0],
					[
						[375, "ירח על", "text", false, "no"],
						[550, "ליקוי חמה", "text", true, "no"],
						[730, "חור שחור", "text", false, "no"],
						[905, "מטר מטאורים", "text", false, "no"]
					]
				],
		
		
				[ //שאלה 8
					["במשך השנים שוגרו לחלל מכדור הארץ גם בני אדם וגם בעלי חיים שונים. מה היה בעל החיים הראשון מכדור הארץ שטס לחלל?", "no image"],
					[0],
					[
						[200, lib.bunny_MC, "image", false, "no"],
						[375, "קוף", "text", false, "no"],
						[550, "חתול", "text", false, "no"],
						[730, "צפרדע", "text", false, "no"],
						[905, "עכבר", "text", false, "no"],
						[1080, lib.dog_MC, "image", true, "no"]
					]
				],
		
		
		
				[ //שאלה 9
					["לפניכם איור של כוכב הלכת מאדים. האם צבעו האדמדם של הכוכב נובע כתוצאה מריבוי תחמוצות ברזל בקרקע שלו?", "includes image", lib.mars_MC],
					[0],
					[
						[550, "כן", "text", true, "no"],
						[730, "לא", "text", false, "no"]
					]
				],
		
		
		
				[ //שאלה 10
					["מהי נאסא?", "no image"],
					[0],
					[
						[375, "חברה ישראלית המספקת שירותי תקשורת לוויינית", "text", false, "no"],
						[550, "סוכנות החלל של ארצות הברית, האחראית על תוכנית החלל האמריקאית", "text", true, "no"],
						[730, "חללית בלתי מאוישת, המשוגרת לחקור את הירח וכוכבי הלכת בחלל", "text", false, "no"],
						[905, "הטמפרטורה הבסיסית בחלל, שנקבעת על ידי קרינה מהמפץ הגדול", "text", false, "no"]
					]
				]
			];
			countdown = 45;
			intervalVar = setInterval(countdownFunction, 1000);
			startGame();
		}
		
		
		//פונקציה המגרילה מספר רנדומאלי בכל פעם על מנת לעבור בין השאלות במשחק בצורה רנדומאלית
		function randomQuestion() {
			randomNumOfQuestion = Math.floor(Math.random() * myGame.length);
			tempQuestion = myGame[randomNumOfQuestion].slice();
		}
		
		//פונקציה לערבול המסיחים
		function randomAnswers() {
			ans = Math.floor((Math.random() * ansLength));
			checkRandomAnswers();
		}
		
		//פונקציה לבדיקת המסיח המוגרל
		function checkRandomAnswers() {
			if (myGame[randomNumOfQuestion][2][ans][4] == "yes") {
				randomAnswers();
			} else {
		
			}
		}
		
		//פונקציה לשם אתחול המשתנים
		function restartVar() {
			numOfMistakes = 0;
			finalAmountOfTime = 0;
			finalGrade = 0;
			stageOfProgress = 0;
			countdown = 45;
			var statusMusic = "on";
			randomNumOfQuestion = Math.floor(Math.random() * myGame.length);
			isTamiUp = false;
			lastPlaceTami = 550;
		}
		
		//פונקציה היוצרת את האלמנטים השונים למהלך המשחק- מסיחים, שאלות
		function startGame() {
			if (myGame.length > 0) {
				randomQuestion();
				if (statusMusic == "on") {
					BGSound.play();
				}
		
				window.addEventListener("keydown", tamiMoving);
		
				var outputCountdown = new createjs.Text(countdown, "24px Assistant", "#000000");
				outputCountdown.x = 40
				outputCountdown.y = 40
				outputCountdown.name = "outputCountdown";
		
				var Questions = new createjs.Text(myGame[randomNumOfQuestion][0][0], "18px Assistant", "#000000");
				Questions.name = "Questions";
				Questions.x = 820;
				Questions.y = 100;
				Questions.lineHeight = 20;
				Questions.lineWidth = 370;
				Questions.textAlign = "right";
				stage.addChild(Questions);
		
				if (myGame[randomNumOfQuestion][0][1] == "includes image") {
					var imageQuestion = new myGame[randomNumOfQuestion][0][2];
					imageQuestion.name = "imageQuestion";
					imageQuestion.x = 580;
					imageQuestion.y = 173;
					stage.addChild(imageQuestion);
					imageQuestion.addEventListener("click", clickOnbiggerImage);
				}
		
				numOfAns = myGame[randomNumOfQuestion].length;
				ansLength = myGame[randomNumOfQuestion][2].length;
		
				for (var i = 0; i < ansLength; i++) {
					//יצירת המסיחים
					var marshmello = new lib.marshmello();
					marshmello.name = "marshmello" + i;
					stage.addChild(marshmello);
					marshmello.y = 440;
					marshmello.x = myGame[randomNumOfQuestion][2][i][0];
					var marshmelloBounds = marshmello.nominalBounds;
		
					randomAnswers();
					
					if (myGame[randomNumOfQuestion][2][ans][3] == true) {
						curChoosenAns = i;
						console.log(myGame[randomNumOfQuestion][2][ans]);
					console.log("ans: " + ans);
					}
					
					
					console.log("curChoosenAns: " + curChoosenAns);
					//יש 2 מצבים בלבד- תשובה שהיא טקסט או תשובה שהיא תמונה
					//אם התשובה כתובה כטקסט, צור את התשובה כטקסט
					if (myGame[randomNumOfQuestion][2][ans][2] == "text") {
		
						var answers = new createjs.Text(myGame[randomNumOfQuestion][2][ans][1], "16px Assistant", "#000000");
						answers.lineHeight = 20;
						answers.lineWidth = 120;
						if (myGame[randomNumOfQuestion][2][ans][1].length >= 35) {
							answers.textAlign = "right";
							answers.x = marshmelloBounds.x + marshmelloBounds.width - 13;
							answers.y = marshmelloBounds.y + (marshmelloBounds.height / 17);
						} else {
							answers.textAlign = "center";
							answers.x = marshmelloBounds.x + 5 + (marshmelloBounds.width / 2);
							answers.y = marshmelloBounds.y + (marshmelloBounds.height / 8);
						}
		
						marshmello.addChild(answers);
					}
					//אם התשובה אינה טקסט, משמע היא תמונה, צור את התשובה כתמונה
					else {
						var imageAnswer = new myGame[randomNumOfQuestion][2][ans][1]();
						imageAnswer.name = "imageAnswer";
						marshmello.addChild(imageAnswer);
						imageAnswer.addEventListener("click", clickOnbiggerImageAnswers);
					}
					ansPlace += ans;
					numOfAnswers++;
					myGame[randomNumOfQuestion][2][ans][4] = "yes";
				}
		
			} else {
				clearInterval(intervalVar);
				SetFinishBackground();
			}
		
		}
		
		//פונקציה המופעלת בעת לחיצה על הגדלת תמונה בשאלה
		function clickOnbiggerImage(event) {
			event.currentTarget.scaleY = 1.5;
			event.currentTarget.scaleX = 1.5;
			event.currentTarget.gotoAndStop(1);
			event.currentTarget.addEventListener("click", backToNormalImages);
		}
		
		//פונקציה המופעלת בעת לחיצה על לחצן האיקס- מחזירה את התמונה בשאלה לגודלה המקורי
		function backToNormalImages(event) {
			event.currentTarget.scaleY = 1;
			event.currentTarget.scaleX = 1;
			event.currentTarget.gotoAndStop(0);
			event.currentTarget.addEventListener("click", clickOnbiggerImage);
		
		}
		
		//פונקציה המופעלת בעת לחיצה על הגדלת תמונה במסיח
		function clickOnbiggerImageAnswers(event) {
			event.currentTarget.scaleY = 1.5;
			event.currentTarget.scaleX = 1.5;
			event.currentTarget.gotoAndStop(1);
			event.currentTarget.addEventListener("click", smallerImageAnswers);
		}
		
		//פונקציה המופעלת בעת לחיצה על לחצן האיקס- מחזירה את התמונה במסיח לגודלה המקורי
		function smallerImageAnswers(event) {
			event.currentTarget.scaleY = 1;
			event.currentTarget.scaleX = 1;
			event.currentTarget.gotoAndStop(0);
			event.currentTarget.addEventListener("click", clickOnbiggerImageAnswers);
		}
		
		//פונקציה המופעלת בעת המעברים בין השאלות
		function nextQuestion() {
			countdown = 45;
			isTamiUp = false;
			intervalVar = setInterval(countdownFunction, 1000);
			window.addEventListener("keydown", tamiMoving);
		
			for (var i = 0; i < ansLength; i++) {
				stage.removeChild(stage.getChildByName("marshmello" + i));
				stage.removeChild(stage.getChildByName("imageQuestion"));
				stage.removeChild(stage.getChildByName("Questions"));
				stage.removeChild(stage.getChildByName("eyeGlassForQuestions"));
				stage.removeChild(stage.getChildByName("exitFromBigImage"));
			}
		
			numOfAnswers = 0;
			stage.getChildByName("normalTami").x = lastPlaceTami;
			stage.getChildByName("normalTami").y = 695;
		
			if (correctOrIncorrect == "correct") {
				finalGrade += 100 / (10 * myGame[randomNumOfQuestion][1]);
				myGame.splice(randomNumOfQuestion, 1);
		
			}
			startGame();
		}
		
		
		//פונקציה המייצרת אלמנטים שונים המוצגים במסך המשחק- הנחיות משחק, דמות המשחק, כפתורי העצירה והסאונד...
		function SetQuestionsBackground() {
		
			var questionBackground = new lib.questionBackground();
			questionBackground.name = "questionBackground";
			stage.addChild(questionBackground);
		
			//יצירת הנחיות קפיצה על המסיחים-קבוע
			var guidePlay = new createjs.Text("קפצו על המרשמלו עם התשובה הנכונה", "16px Assistant", "#68451A");
			guidePlay.textAlign = "center";
			guidePlay.x = 700;
			guidePlay.y = 158;
			guidePlay.name = "myGuidePlay";
			stage.addChild(guidePlay);
		
			var howToPlay = new createjs.Text("איך משחקים?", "18px Assistant", "#000000");
			howToPlay.textAlign = "center";
			howToPlay.x = 1177;
			howToPlay.y = 135;
			howToPlay.name = "howToPlay";
			stage.addChild(howToPlay);
		
			var chooseKeyBoard = new createjs.Text("בחירה:", "16px Assistant", "#68451A");
			chooseKeyBoard.textAlign = "center";
			chooseKeyBoard.x = 1175;
			chooseKeyBoard.y = 165;
			chooseKeyBoard.name = "chooseKeyBoard";
			stage.addChild(chooseKeyBoard);
		
			var SpaceKeyBoard = new createjs.Text("Space", "16px Assistant", "#000000");
			SpaceKeyBoard.textAlign = "center";
			SpaceKeyBoard.x = 1175;
			SpaceKeyBoard.y = 195;
			SpaceKeyBoard.name = "SpaceKeyBoard";
			stage.addChild(SpaceKeyBoard);
		
		
			var jumpKeyBoard = new createjs.Text(":קפיצה", "16px Assistant", "#68451A");
			jumpKeyBoard.textAlign = "center";
			jumpKeyBoard.x = 1175;
			jumpKeyBoard.y = 1020;
			jumpKeyBoard.name = "jumpKeyBoard";
			stage.addChild(jumpKeyBoard);
		
		
			var arrowUp = new lib.arrowUp();
			arrowUp.x = 1165;
			arrowUp.y = 220;
			arrowUp.name = "arrowUp";
			stage.addChild(arrowUp);
		
			var arrowRight = new lib.arrowRight();
			arrowRight.x = 1170;
			arrowRight.y = 235;
			arrowRight.name = "arrowRight";
			stage.addChild(arrowRight);
		
			var rightKeyBoard = new createjs.Text("ימינה", "16px Assistant", "#68451A");
			rightKeyBoard.textAlign = "center";
			rightKeyBoard.x = 1205;
			rightKeyBoard.y = 255;
			rightKeyBoard.name = "rightKeyBoard";
			stage.addChild(rightKeyBoard);
		
			var arrowLeft = new lib.arrowLeft();
			arrowLeft.x = 1130;
			arrowLeft.y = 235;
			arrowLeft.name = "arrowLeft";
			stage.addChild(arrowLeft);
		
			var leftKeyBoard = new createjs.Text("שמאלה", "16px Assistant", "#68451A");
			leftKeyBoard.textAlign = "center";
			leftKeyBoard.x = 1150;
			leftKeyBoard.y = 255;
			leftKeyBoard.name = "leftKeyBoard";
			stage.addChild(leftKeyBoard);
		
		
			var marshmellowFloor = new lib.marshmellowFloor();
			marshmellowFloor.name = "marshmellowFloor";
			stage.addChild(marshmellowFloor);
			marshmellowFloor.y = 680;
		
		
			var fullProgressBar = new lib.fullProgressBar();
			stage.addChild(fullProgressBar);
			fullProgressBar.name = "fullProgressBar";
		
			fullProgressBar.x = 35;
			fullProgressBar.y = -40;
		
		
			var musicButton = new lib.musicButton();
			stage.addChild(musicButton);
			musicButton.name = "musicButton";
			musicButton.x = 170;
			musicButton.y = 30;
			musicButton.addEventListener("click", clickOnMusicButton);
		
		
			var pauseButton = new lib.pauseButton();
			pauseButton.name = "pauseButton";
			pauseButton.x = 220;
			pauseButton.y = 30;
			stage.addChild(pauseButton);
			stage.getChildByName("pauseButton").addEventListener("click", clickOnPause);
		
		
			var showGameSubject = new createjs.Text(gameSubject, "18px Assistant", "#68451A");
			showGameSubject.x = 1175;
			showGameSubject.y = 25;
			showGameSubject.name = "showGameSubject";
			stage.addChild(showGameSubject);
			showGameSubject.textAlign = "center";
		
			var normalTami = new lib.normalTami();
			stage.addChild(normalTami);
			normalTami.name = "normalTami";
			normalTami.x = 550;
			normalTami.y = 695;
			stage.setChildIndex(normalTami, stage.numChildren - 1);
			// interval to play function every 1000 miliseconds
			stage.addChild(outputCountdown);
		}
		
		//פונקציה המופעלת בעת לחיצה על כפתור המוזיקה שמטרתה להפעיל/לכבות את המוזיקה, בהתאם לסטטוס הכפתור הנוכחי
		function clickOnMusicButton() {
			if (statusMusic == "on") {
				stage.getChildByName("musicButton").gotoAndStop(1);
				//var musicBackground=createjs.Sound.play("backgroundMusic"); 
		
				BGSound.pause();
				statusMusic = "off";
			} else {
				stage.getChildByName("musicButton").gotoAndStop(0);
				statusMusic = "on";
		
				BGSound.play();
			}
		}
		
		//פונקציה המופעלת בעת לחיצה על לחצן העצור, המייצרת את כרטיסיית ההשהייה במסך
		function clickOnPause() {
			clearInterval(intervalVar);
			var pauseCard = new lib.pauseCard();
			pauseCard.name = "pauseCard";
			stage.addChild(pauseCard);
			pauseCard.backToGameAfterPause.addEventListener("click", BackToGameAfterPause);
			window.removeEventListener("keydown", tamiMoving);
		}
		
		//פונקציה המחזירה את המשתמש למשחק לאחר שהיה במצב השהייה
		function BackToGameAfterPause() {
			stage.removeChild(stage.getChildByName("pauseCard"));
			window.addEventListener("keydown", tamiMoving);
			nextQuestion();
		}
		
		//פונקציה  המייצרת את אנימציית הסיום
		function SetFinishBackground() {
			stage.removeChild(stage.getChildByName("endOfTimeCard"));
			var finalAnimation = new lib.finalAnimation();
			stage.addChild(finalAnimation);
			finalAnimation.name = "finalAnimation_mc";
			finalAnimation.gotoAndPlay(0);
		
			finalAnimation.endOfGameCard.numOfMistakes.text = numOfMistakes;
			finalAnimation.endOfGameCard.grade.text = Math.round(finalGrade);
		
			finalAnimation.endOfGameCard.subjectInFinishCard.text=stage.getChildByName("showGameSubject").text;
			var mintues = Math.floor(finalAmountOfTime / 60);
			var seconds = finalAmountOfTime % 60;
			if (seconds < 10) {
				finalAnimation.endOfGameCard.time.text = mintues + ":0" + seconds;
			} else {
				finalAnimation.endOfGameCard.time.text = mintues + ":" + seconds;
			}
		
		
			if (statusMusic == "on") {
				finishSound = new Audio("sounds/winfantasia6912wav.mp3");
				finishSound.play();
				BGSound.pause();
			}
		
			clearInterval(intervalVar);
			stage.getChildByName("finalAnimation_mc").returnToGame_btn.addEventListener("click", returnGameFunc);
			stage.getChildByName("finalAnimation_mc").end_btn.addEventListener("click", endGameFunc);
		}
		
		//פונקציה המופעלת לשם חזרה למשחק לאחר סיומו
		function returnGameFunc(e) {
			stage.removeChild(stage.getChildByName("finalAnimation_mc"));
			BGSound.pause();
			removeScreenQuest();
			restartVar();
			SetQuestionsBackground();
		
			if (mychoice == 1) {
				gameSubject = "גוף האדם";
				firstGame();
			} else if (mychoice == 2) {
				gameSubject = "חלל";
				secondGame();
			}
		
			stage.getChildByName("showGameSubject").text = gameSubject;
		}
		
		//פונקציה לשם סיום המשחק הנוכחי, ואפשרות להתחלה מחדש
		function endGameFunc(e) {
			removeScreenQuest();
			stage.removeChild(stage.getChildByName("questionBackground"));
			stage.removeChild(stage.getChildByName("finalAnimation_mc"));
			stage.removeChild(stage.getChildByName("myComboBox"));
			BGSound.pause();
			SetFirstBackground();
			restartVar();
			addCombo();
		}
		
		// פונקציה המייצרת את התנועה של הדמות באמצעות מקשי המקלדת
		//בפונקציה זו מוגדר גם החיווי למשתמש ביחס לתשובה נכונה ותשובה לא נכונה
		function tamiMoving(event) {
			var numOfAnwers = myGame[randomNumOfQuestion].length - 3;
		
			console.log(numOfAnswers);
			if (event.keyCode == 38 && stage.getChildByName("normalTami").y > 550 && (stage.getChildByName("normalTami").x == 190 || stage.getChildByName("normalTami").x == 370 || stage.getChildByName("normalTami").x == 550 || stage.getChildByName("normalTami").x == 730 || stage.getChildByName("normalTami").x == 910 || stage.getChildByName("normalTami").x == 1090)) {
				directionX = "up"
				isTamiUp = true;
				stage.getChildByName("normalTami").y -= 265;
				if (statusMusic == "on") {
					jumpSound = new Audio("sounds/jumpwav.mp3");
					jumpSound.play();
				}
			}
		
			if (event.keyCode == 40 && stage.getChildByName("normalTami").y < 695) {
				directionX = "down"
				stage.getChildByName("normalTami").y += 265;
				isTamiUp = false;
		
				if (statusMusic == "on") {
					jumpSound = new Audio("sounds/jumpwav.mp3");
					jumpSound.play();
				}
			}
		
			if (event.keyCode == 37) {
				directionX = "left"
		
				if (ansLength == 6 && stage.getChildByName("normalTami").x > 200) {
					stage.getChildByName("normalTami").x -= 180;
				}
		
				if (ansLength == 4 && stage.getChildByName("normalTami").x > 375) {
					stage.getChildByName("normalTami").x -= 180;
				}
				if (ansLength == 2 && stage.getChildByName("normalTami").x > 550) {
					stage.getChildByName("normalTami").x -= 180;
				}
		
				if (statusMusic == "on") {
					jumpSound = new Audio("sounds/jumpwav.mp3");
					jumpSound.play();
				}
		
			}
		
			if (event.keyCode == 39) {
				directionX = "right"
		
				if (ansLength == 6 && stage.getChildByName("normalTami").x < 1080) {
					stage.getChildByName("normalTami").x += 180;
				}
		
				if (ansLength == 4 && stage.getChildByName("normalTami").x < 905) {
					stage.getChildByName("normalTami").x += 180;
				}
				if (ansLength == 2 && stage.getChildByName("normalTami").x < 730) {
					stage.getChildByName("normalTami").x += 180;
				}
		
				if (statusMusic == "on") {
					jumpSound = new Audio("sounds/jumpwav.mp3");
					jumpSound.play();
				}
		
			}
		
			if (event.keyCode == 32 && isTamiUp) {
				directionX = "stop";
				for (var i = 0; i < ansLength; i++) {
					stage.getChildByName("marshmello" + i).gotoAndStop(0);
					stage.removeChild(stage.getChildByName("correctAnswer"));
					stage.removeChild(stage.getChildByName("falseAnswer"));
					window.removeEventListener("keydown", tamiMoving);
		
					if (intersect(stage.getChildByName("normalTami"), stage.getChildByName("marshmello" + i))) {
						var current = 45 - countdown - 1;
						finalAmountOfTime += current;
						clearInterval(intervalVar);
						
						myGame[randomNumOfQuestion][1]++;
						console.log("curChoosenAns in check: " + curChoosenAns);
						console.log("i: " + i);
						
						if (curChoosenAns == i) {
							stage.getChildByName("marshmello" + i).gotoAndStop(1);
							correctOrIncorrect = "correct";
							stage.getChildByName("normalTami").gotoAndStop(2);
							stage.getChildByName("questionBackground").gotoAndPlay(1);
							stageOfProgress++;
							stage.getChildByName("fullProgressBar").gotoAndStop(stageOfProgress);
							stage.removeChild(stage.getChildByName("marshmellowFloor"));
		
		
							if (statusMusic == "on") {
								fbSound = new Audio("sounds/yaywav.mp3");
								fbSound.play();
							}
		
						} else {
							stage.getChildByName("marshmello" + i).gotoAndStop(2);
							correctOrIncorrect = "inCorrect";
							stage.getChildByName("normalTami").gotoAndStop(1);
							numOfMistakes++;
		
							for (var i = 0; i < ansLength; i++) {
								myGame[randomNumOfQuestion][2][i][4] = "no";
							}
		
							if (statusMusic == "on") {
								fbSound = new Audio("sounds/witch_laugh_finalmp3.mp3");
								fbSound.play();
							}
						}
						var timeForFeedback = setTimeout(answerFeedbacks, 3000);
		
					}
				}
			}
		}
		
		//פונקציה המחזירה את הדמות למצבה הטבעי לאחר מתן חיווי למשתמש על תשובה נכונה/שגויה
		function answerFeedbacks() {
			stage.getChildByName("normalTami").gotoAndStop(0);
			nextQuestion();
		}
		
		
		//פונקציה לשם זיהוי המפגש בין הדמות למסיח- על מנת לזהות את הבחירה בו
		function intersect(tami, chosenAnswer) {
			var tamiObject = tami.nominalBounds;
			var chosenAnswerObject = chosenAnswer.nominalBounds;
		
			if (tami.x + (tamiObject.width / 2) <= chosenAnswer.x - (chosenAnswerObject.width / 2)) {
				return false;
			} else if (tami.y + (tamiObject.height / 2) <= chosenAnswer.y - (chosenAnswerObject.height / 2)) {
				return false;
			} else if (tami.x - (tamiObject.width / 2) > chosenAnswer.x + (chosenAnswerObject.width / 2)) {
				return false;
			} else if (tami.y - (tamiObject.height / 2) > chosenAnswer.y + (chosenAnswerObject.height / 2)) {
				return false;
			}
			return true;
		}
		
		//פונקציה המייצרת את הטיימר של מגבלת הזמן לכל שאלה
		function countdownFunction() {
			outputCountdown.text = "00:" + countdown
			if (countdown < 10) {
				outputCountdown.text = "00:0" + countdown
			}
			countdown--
			if (countdown < 0) {
				outputCountdown.text = "time is up"
				clearInterval(intervalVar);
				var endOfTimeCard = new lib.endOfTimeCard();
				endOfTimeCard.name = "endOfTimeCard";
				stage.addChild(endOfTimeCard);
				outputCountdown.text = ""
				window.removeEventListener("keydown", tamiMoving);
				endOfTimeCard.backToGameAfterTimeEnds.addEventListener("click", backToGameAfterTimeEnds);
			}
		}
		
		//פונקציה עבור חזרה למשחק לאחר שהזמן נגמר
		function backToGameAfterTimeEnds() {
			stage.removeChild(stage.getChildByName("endOfTimeCard"));
			stage.removeChild(stage.getChildByName("myComboBox"));
			stage.removeChild(stage.getChildByName("myGuidePlay"));
			window.addEventListener("keydown", tamiMoving);
			nextQuestion();
		}
		
		//פונקציה המסירה אלמנטים שונים במסך
		//הפונקציה נקראת בעת חזרה למשחק או סיום המשחק
		function removeScreenQuest() {
			stage.removeChild(stage.getChildByName("Questions"));
			stage.removeChild(stage.getChildByName("imageQuestion"));
			stage.removeChild(stage.getChildByName("eyeGlassForQuestions"));
			stage.removeChild(stage.getChildByName("outputCountdown"));
			stage.removeChild(stage.getChildByName("howToPlay"));
			stage.removeChild(stage.getChildByName("chooseKeyBoard"));
			stage.removeChild(stage.getChildByName("SpaceKeyBoard"));
			stage.removeChild(stage.getChildByName("jumpKeyBoard"));
			stage.removeChild(stage.getChildByName("arrowUp"));
			stage.removeChild(stage.getChildByName("arrowRight"));
			stage.removeChild(stage.getChildByName("rightKeyBoard"));
			stage.removeChild(stage.getChildByName("arrowLeft"));
			stage.removeChild(stage.getChildByName("leftKeyBoard"));
			stage.removeChild(stage.getChildByName("marshmellowFloor"));
			stage.removeChild(stage.getChildByName("normalTami"));
			stage.removeChild(stage.getChildByName("fullProgressBar"));
			stage.removeChild(stage.getChildByName("musicButton"));
			stage.removeChild(stage.getChildByName("pauseButton"));
			stage.removeChild(stage.getChildByName("showGameSubject"));
			for (var i = 0; i < ansLength; i++) {
				stage.removeChild(stage.getChildByName("marshmello" + i));
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_group
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/combo.css'});

	this.instance.setTransform(-61.3,29.75,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(528.2,378.3,-539,-337);
// library properties:
lib.properties = {
	id: '72BB6AE68BA60846B21E42FAD5C25E45',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_126.png?1644179657515", id:"CachedBmp_126"},
		{src:"images/CachedBmp_110.png?1644179657515", id:"CachedBmp_110"},
		{src:"images/CachedBmp_94.png?1644179657515", id:"CachedBmp_94"},
		{src:"images/CachedBmp_87.png?1644179657515", id:"CachedBmp_87"},
		{src:"images/CachedBmp_80.png?1644179657515", id:"CachedBmp_80"},
		{src:"images/CachedBmp_73.png?1644179657515", id:"CachedBmp_73"},
		{src:"images/CachedBmp_66.png?1644179657515", id:"CachedBmp_66"},
		{src:"images/CachedBmp_59.png?1644179657515", id:"CachedBmp_59"},
		{src:"images/CachedBmp_52.png?1644179657515", id:"CachedBmp_52"},
		{src:"images/CachedBmp_45.png?1644179657515", id:"CachedBmp_45"},
		{src:"images/CachedBmp_38.png?1644179657515", id:"CachedBmp_38"},
		{src:"images/CachedBmp_31.png?1644179657515", id:"CachedBmp_31"},
		{src:"images/CachedBmp_24.png?1644179657515", id:"CachedBmp_24"},
		{src:"images/CachedBmp_23.png?1644179657515", id:"CachedBmp_23"},
		{src:"images/CachedBmp_16.png?1644179657515", id:"CachedBmp_16"},
		{src:"images/CachedBmp_8.png?1644179657515", id:"CachedBmp_8"},
		{src:"images/מסךפתיחה_.png?1644179657515", id:"מסךפתיחה"},
		{src:"images/candyClimb_atlas_1.png?1644179657218", id:"candyClimb_atlas_1"},
		{src:"images/candyClimb_atlas_2.png?1644179657218", id:"candyClimb_atlas_2"},
		{src:"images/candyClimb_atlas_3.png?1644179657218", id:"candyClimb_atlas_3"},
		{src:"images/candyClimb_atlas_4.png?1644179657218", id:"candyClimb_atlas_4"},
		{src:"images/candyClimb_atlas_5.png?1644179657218", id:"candyClimb_atlas_5"},
		{src:"images/candyClimb_atlas_6.png?1644179657218", id:"candyClimb_atlas_6"},
		{src:"images/candyClimb_atlas_7.png?1644179657219", id:"candyClimb_atlas_7"},
		{src:"images/candyClimb_atlas_8.png?1644179657219", id:"candyClimb_atlas_8"},
		{src:"images/candyClimb_atlas_9.png?1644179657219", id:"candyClimb_atlas_9"},
		{src:"images/candyClimb_atlas_10.png?1644179657219", id:"candyClimb_atlas_10"},
		{src:"images/candyClimb_atlas_11.png?1644179657219", id:"candyClimb_atlas_11"},
		{src:"images/candyClimb_atlas_12.png?1644179657219", id:"candyClimb_atlas_12"},
		{src:"images/candyClimb_atlas_13.png?1644179657219", id:"candyClimb_atlas_13"},
		{src:"images/candyClimb_atlas_14.png?1644179657219", id:"candyClimb_atlas_14"},
		{src:"images/candyClimb_atlas_15.png?1644179657219", id:"candyClimb_atlas_15"},
		{src:"images/candyClimb_atlas_16.png?1644179657219", id:"candyClimb_atlas_16"},
		{src:"images/candyClimb_atlas_17.png?1644179657219", id:"candyClimb_atlas_17"},
		{src:"images/candyClimb_atlas_18.png?1644179657219", id:"candyClimb_atlas_18"},
		{src:"images/candyClimb_atlas_19.png?1644179657220", id:"candyClimb_atlas_19"},
		{src:"images/candyClimb_atlas_20.png?1644179657220", id:"candyClimb_atlas_20"},
		{src:"images/candyClimb_atlas_21.png?1644179657220", id:"candyClimb_atlas_21"},
		{src:"images/candyClimb_atlas_22.png?1644179657220", id:"candyClimb_atlas_22"},
		{src:"images/candyClimb_atlas_23.png?1644179657221", id:"candyClimb_atlas_23"},
		{src:"sounds/BGmusicthetravellingshowmp3.mp3?1644179657515", id:"BGmusicthetravellingshowmp3"},
		{src:"sounds/jumpwav.mp3?1644179657515", id:"jumpwav"},
		{src:"sounds/winfantasia6912wav.mp3?1644179657515", id:"winfantasia6912wav"},
		{src:"sounds/witch_laugh_finalmp3.mp3?1644179657515", id:"witch_laugh_finalmp3"},
		{src:"sounds/yaywav.mp3?1644179657515", id:"yaywav"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644179657515", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644179657515", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1644179657515", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644179657515", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['72BB6AE68BA60846B21E42FAD5C25E45'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;