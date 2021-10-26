//#region vowel sequence definition
	vSq = {
		sq1	   : ["a",		"ä",		"e",		"i",		"ëi",		"ö",		"o",		"ü",		"u" ],

		sq2	   : ["ai",		"au",		"ei",		"eu",		"ëu",		"ou",		"oi",		"iu",		"ui"],

		sq3	   : ["ia",		"ie",		"io",		"iö",		"eë",		"uö",		"uo",		"ue",		"ua"],
		sq3y   : ["uä",		"uë",		"üä",		"üë",		"eë",		"uö",		"uo",		"ue",		"ua"],
		sq3w   : ["ia",		"ie",		"io",		"iö",		"eë",		"öë",		"öä",		"ië",		"iä"],
		
		sq4	   : ["ao",		"aö",		"eo",		"eö",		"oë",		"öe",		"oe",		"öa",		"oa"]
	}
	vSq.ssq1   = [vSq.sq1 [0],vSq.sq1 [1],vSq.sq1 [2],vSq.sq1 [3],vSq.sq1 [8],vSq.sq1 [7],vSq.sq1 [6],vSq.sq1 [5]	 ];
	vSq.ssq2   = [vSq.sq2 [0],vSq.sq2 [1],vSq.sq2 [2],vSq.sq2 [3],vSq.sq2 [8],vSq.sq2 [7],vSq.sq2 [6],vSq.sq2 [5]	 ];
	vSq.ssq3   = [vSq.sq3 [0],vSq.sq3 [1],vSq.sq3 [2],vSq.sq3 [3],vSq.sq3 [8],vSq.sq3 [7],vSq.sq3 [6],vSq.sq3 [5]	 ];
	vSq.ssq3y  = [vSq.sq3y[0],vSq.sq3y[1],vSq.sq3y[2],vSq.sq3y[3],vSq.sq3y[8],vSq.sq3y[7],vSq.sq3y[6],vSq.sq3y[5]	 ];
	vSq.ssq3w  = [vSq.sq3w[0],vSq.sq3w[1],vSq.sq3w[2],vSq.sq3w[3],vSq.sq3w[8],vSq.sq3w[7],vSq.sq3w[6],vSq.sq3w[5]	 ];
	vSq.ssq4   = [vSq.sq4 [0],vSq.sq4 [1],vSq.sq4 [2],vSq.sq4 [3],vSq.sq4 [8],vSq.sq4 [7],vSq.sq4 [6],vSq.sq4 [5]	 ];

	vSq.cssq1  = [vSq.sq1 [0],vSq.sq1 [1],vSq.sq1 [2],vSq.sq1 [3],vSq.sq1 [4],vSq.sq1 [5],vSq.sq1 [6],vSq.sq1 [8]	 ];
	vSq.cssq2  = [vSq.sq2 [0],vSq.sq2 [1],vSq.sq2 [2],vSq.sq2 [3],vSq.sq2 [4],vSq.sq2 [5],vSq.sq2 [6],vSq.sq2 [8]	 ];
	vSq.cssq3  = [vSq.sq3 [0],vSq.sq3 [1],vSq.sq3 [2],vSq.sq3 [3],vSq.sq3 [4],vSq.sq3 [5],vSq.sq3 [6],vSq.sq3 [8]	 ];
	vSq.cssq3y = [vSq.sq3y[0],vSq.sq3y[1],vSq.sq3y[2],vSq.sq3y[3],vSq.sq3y[4],vSq.sq3y[5],vSq.sq3y[6],vSq.sq3y[8]	 ];
	vSq.cssq3w = [vSq.sq3w[0],vSq.sq3w[1],vSq.sq3w[2],vSq.sq3w[3],vSq.sq3w[4],vSq.sq3w[5],vSq.sq3w[6],vSq.sq3w[8]	 ];
	vSq.cssq4  = [vSq.sq4 [0],vSq.sq4 [1],vSq.sq4 [2],vSq.sq4 [3],vSq.sq4 [4],vSq.sq4 [5],vSq.sq4 [6],vSq.sq4 [8]	 ];
//#endregion

//#region abbreviation array definition
	versions = ["PRC","CPT"];

	gFunctions = ["STA","DYN"];
	specifications = ["BSC","CTE","CSV","OBJ"];
	contexts = ["EXS","FNC","RPS","AMG"];

	affiliations = ["CSL","ASO","COA","VAR"];
	configurations = ["UPX","MSS","MSC","MSF","MDS","MDC","MDF","MFS","MFC","MFF","DSS","DSC","DSF","DDS","DDC","DDF","DFS","DFC","DFF","DPX"];
	extensions = ["DEL","PRX","ICP","ATV","GRA","DPL"];
	perspectives = ["M","G","N","A"];
	essences = ["NRM","RPV"];
	gCases = ["THM","INS","ABS","AFF","STM","EFF","ERG","DAT","IND","POS","PRP","GEN","ATT","PDC","ITP","OGN","IDP","PAR","APL","PUR","TRA","DFR","CRS","TSP","CMM","CMP","CSD","FUN","TFM","CLA","RSL","CSM","CON","AVS","CVS","SIT","PRN","DSP","COR","CPS","COM","UTL","PRD","RLT","ACT","ASI","ESS","TRM","SEL","CFM","DEP","VOC","LOC","ATD","ALL","ABL","ORI","IRL","INV","NAV","CNR","ASS","PER","PRO","PCV","PCR","ELP","PLM"];
	VPLEAs = ["MNO","PRL","CRO","RCP","CPL","DUP","DEM","CNG","PTI","PCT","ITR","REP","ITM","RCT","FRE","FRG","VAC","FLC","1:BEN","2:BEN","3:BEN","SLF:BEN","UNK","SLF:DET","3:DET","2:DET","1:DET","MIN","SBE","IFR","DFT","EQU","SUR","SPL","SPQ","MAX","RTR","PRS","HAB","PRG","IMM","PCS","REG","SMM","ATP","RSM","CSS","PAU","RGR","PCL","CNT","ICS","EXP","IRP","PMP","CLM","DLT","TMP","XPD","LIM","EPD","PTC","PPR","DCL","CCL","CUL","IMD","TRD","TNS","ITC","MTV","SQN"];
	moodOrCaseScopes = ["FAC","SUB","ASM","SPC","COU","HYP","CCN","CCA","CCS","CCQ","CCP","CCVS"];
	validations = ["OBS","REC","PUP","RPR","PFM","IMA","CVN","ITU","INF"];
	expectations = ["COG","RSP","EXE"]
//#endregion

//#region value definition
	affilationValues = ["","l","r","ř",  "","nļ","rļ","řļ"]; //normal, then standalone
	configurationValues = ["","t","k","p","ţ","f","ç","z","ž","ẓ","c","ks","ps","ţs","fs","š","č","kš","pš","s"];
	extensionValues = ["","d","g","b","gz","bz",	 "","t","k","p","g","b"]; //normal, then standalone
	perspectiveEssenceValues = ["","r","w","y", "l","ř","m","n",   "l","r","v","j", "tļ","ř","m","n",	   "","r","w","y", "l","ř","h","ç",   "l","r","v","j", "tļ","ř","h","ç"] //NRM normal, RPV normal, NRM standalone, RPV standalone, repeat but with alternate N/A.RPV


	affixAdditionalVowel = ["ae","ea","äi"];
	moodOrCaseScopeValues = ["h","hl","hr","hm","hn","hň","w","hw","hlw","hly","hnw","hny"]
//#endregion

function glottalise(vowel) {
	if (vowel.length == 1) {
		vowel += vowel;
	}
	return (vowel.charAt(0) + "'" + vowel.charAt(1));
}
function geminate(ca) { 
	if(ca.length == 1) {
		return ca + ca;
	} else if (ca == "tļ") {
		return "ttļ";
	} else if (ca.match(/^[ptkbdg][lrřwy]$/) != null) {
		return ca.charAt(0) + ca;
	} else if (ca.match(/([sšzžçcč])/) != null) {
		var regexResult = ca.match(/([sšzžçcč])/);
		return ca.substring(0,regexResult.index+1) + ca.substring(regexResult.index);
	} else if (ca.match(/^[ptk]([sšfţç])/) != null) {
		var regexResult = ca.match(/^[ptk]([sšfţç])/);
		return ca.substring(0,regexResult.index+2) + ca.substring(regexResult.index + 1);
	} else if (ca.match(/[ptk][ptk]$/) != null) {
		subs = [["pt","bbḑ"], ["pk","bbv"], ["kt","ggḑ"], ["kp","ggv"], ["tk","ḑvv"], ["tp","ddv"]]
		for (i = 0; i < subs.length; i++) {
			ca = ca.replace(subs[i][0], subs[i][1]);
		}
		return ca;
	} else if (ca.match(/[ptkbdg][mnň]$/) != null) {
		//pm  vmm pn  vvn kmxxm kn  xxn tm  ḑḑm tn  ḑḑn
		//bm  bžžm bn  bžžn gm gžžm gn  gžžn dm  jjm dn  jjn
		subs = [["pm","vmm"],["pn","vvn"],["km","xxm"],["kn","xxn"],["tm","ḑḑm"],["tn","ḑḑn"],["bm","bžžm"],["bn","bžžn"],["gm","gžžm"],["gn","gžžn"],["dm","jjm"],["dn","jjn"]]
		for (i = 0; i < subs.length; i++) {
			ca = ca.replace(subs[i][0], subs[i][1]);
		}
		return ca;
	} else if (ca.match(/^[lrř]/) != null){
		return ca.charAt(0) + ca;
	} else { return ca + " (ERROR) ";}
}
function genWord(opts = {}) {
	/* Ca format: [affiliation, configuration, extension, perspective, essence] */
	//#region default values
		var root = opts.root === undefined ? "l" : opts.root;
		var stem = opts.stem === undefined ? 1 : opts.stem;
		var version = opts.version === undefined ? "PRC" : opts.version;
		var gFunction = opts.function === undefined ? "STA" : opts.function;
		var specification = opts.specification === undefined ? "BSC" : opts.specification;
		var context = opts.context === undefined ? "EXS" : opts.context;
		var gCase = opts.case === undefined ? "THM" : opts.case;
		var ca = opts.ca === undefined ? ["CSL","UPX","DEL","M","NRM"] : opts.ca;
		ca[0] = opts.affiliation === undefined ? ca[0] : opts.affiliation;
		ca[1] = opts.configuration === undefined ? ca[1] : opts.configuration;
		ca[2] = opts.extension === undefined ? ca[2] : opts.extension;
		ca[3] = opts.perspective === undefined ? ca[3] : opts.perspective;
		ca[4] = opts.essence === undefined ? ca[4] : opts.essence;
		var affixesV = opts.affixesV === undefined ? [] : opts.affixesV; //Cs - degree - type
		var affixesVII = opts.affixesVII === undefined ? [] : opts.affixesVII; //Cs - degree - type
		var stress = opts.stress === undefined ? 2 : opts.stress;
		//TODO PLEASE. THIS IS AWFUL
		var VPLEA = opts.VPLEA === undefined ? "MNO" : opts.VPLEA;
		var moodOrCaseScope = opts.moodOrCaseScope === undefined ? "CCN" : opts.moodOrCaseScope;

		var validation = opts.validation === undefined ? "OBS" :opts.validation;
		var expectation = opts.expectation === undefined ? "COG" :opts.expectation;
	//#endregion

	//#region empty strings in slots
		slot2 = "";
		slot3 = "";
		slot4 = "";
		slot5 = "";
		slot6 = "";
		slot7 = "";
		slot8 = "";
		slot9 = "";
	//#endregion

	function genSlot2() {
		slot2 = vSq.sq1 [ 2 * ((stem + 3) % 4) + versions.indexOf(version) ] ;
	}
	genSlot2()

	function genSlot3() {
		slot3 = root;
	}
	genSlot3()

	function genSlot4() {
		slot4vSq = "ssq" + (contexts.indexOf(context) + 1).toString();
		if ((contexts.indexOf(context) + 1).toString() == "3") {
			if (slot3.charAt(slot3.length - 1) == "w") {
				slot4vSq += "w";
			} else if (slot3.charAt(slot3.length - 1) == "y") {
				slot4vSq += "y";
			}
		}
		slot4 = vSq [slot4vSq] [specifications.indexOf(specification) + 4*gFunctions.indexOf(gFunction)];
	}
	genSlot4();

	function genSlot5() {
		slotVFilled = false
		if (affixesV.length > 0) {

			slotVFilled = true
			if (affixesV.length > 1) {slot2 = glottalise(slot2);}
			
			for (i = 0; i < affixesV.length; i++) {

				slot5 += affixesV[i][0]; //Cs

				slot5vSq = "sq" + affixesV[i][2];
				if ((affixesV[i][2]) == 3) {
					if (affixesV[i][0].charAt(affixesV[i][0].length - 1) == "w") {
						slot5vSq += "w";
					} else if (affixesV[i][0].charAt(affixesV[i][0].length - 1) == "y") {
						slot5vSq += "y";
					}
				}

				modifiedVSq = [ affixAdditionalVowel[ affixesV[i][2] - 1] ] .concat(vSq [slot5vSq] )
				slot5 += [ modifiedVSq [affixesV[i][1]] ]
			}
		}
	}
	genSlot5();

	function genSlot6() {
		standaloneAffiliation = 0
		alternateExtension = 0
		standalonePerspectiveEssence = 0
		alternatePerspectiveEssence = 0

		affiliation = affiliations.indexOf(ca[0]);
		configuration = configurations.indexOf(ca[1]);
		extension = extensions.indexOf(ca[2]);
		perspective = perspectives.indexOf(ca[3]);
		essence = essences.indexOf(ca[4]);

		if (configuration == 0 && extension == 0 && perspective == 0 && essence == 0) {standaloneAffiliation = 4;}
		slot6 += affilationValues[affiliation + standaloneAffiliation];

		slot6 += configurationValues[configuration];

		if (configuration != 0) {alternateExtension = 6;}
		slot6 += extensionValues[extension + alternateExtension];

		if (["p","t","k"].includes(slot6.charAt(slot6.length - 1)) && slot6.length > 1) {alternatePerspectiveEssence = 16;}
		if (configuration == 0 && extension == 0 && affiliation == 0) {standalonePerspectiveEssence = 8;}
		slot6 += perspectiveEssenceValues[perspective + 4 * essence + alternatePerspectiveEssence + standalonePerspectiveEssence];


		//pp  mp	 pb  mb	 rr  ns		 [C]gm  [C]x	[C]bm  [C]f / [C]v
		//tt nt	  kg  ng	 rř  nš		 [C]gn  [C]ň	[C]bn  [C]ţ / [C]ḑ
		//kk  nk	 çy  nd	 řr  ňs		 ngn  ňn		ff  vw
		//ll  pļ	 řř  ňš	 [C]çx  [C]xw   ţţ  ḑy 


		//NOT CORRECT! bm and bn don't have the voiced alternate!
		subs = [["pp","mp",false],["tt","nt",false],["kk","nk",false],
				["ll","pļ",false],
				["řř","ňš",false],["rr","ns",false],["rř","nš",false],["řr","ňs",false],
				["pb","ng",false],["kg","ng",false],
				["çy","nd",false],
				["cx","xw",true], ["gm","x",true],  ["gn","ň",true],  ["bm","f",true],  ["bn","ţ",true],
				["ţţ","ḑy",false],["ff","vw",false]]

		for (i = 0; i < subs.length; i++) {
			if (!(subs[i][2] && slot6.length == 2)) {
				slot6 = slot6.replace(subs[i][0], subs[i][1]);
			}
		}

		if (slotVFilled) {
			slot6 = geminate(slot6);
		}

	}
	genSlot6();

	function genSlot7() {
		if (affixesVII.length > 0) {
			for (i = 0; i < affixesVII.length; i++) {

				slot7vSq = "sq" + affixesVII[i][2];
				cBefore = slot7 == "" ? slot6 : slot7;
				if ((affixesVII[i][2]) == 3) {
					if (cBefore.charAt(cBefore.length - 1) == "w") {
						slot7vSq += "w";
					} else if (cBefore.charAt(cBefore.length - 1) == "y") {
						slot7vSq += "y";
					}
				}

				modifiedVSq = [ affixAdditionalVowel[ affixesVII[i][2] - 1] ] .concat(vSq [slot7vSq] )

				slot7 += [ modifiedVSq [affixesVII[i][1]] ]

				slot7 += affixesVII[i][0]; //Cs
			}
		}
	}
	genSlot7();

	function genSlot8() {
		slot8 = "";
		cBefore = slot7 == "" ? slot6 : slot7;
		if (VPLEAs.indexOf(VPLEA) % 36 >= 0 && VPLEAs.indexOf(VPLEA) % 36 <= 8) {
			slot8vSq = "sq1"
		} else if (VPLEAs.indexOf(VPLEA) % 36 >= 9 && VPLEAs.indexOf(VPLEA) % 36 <= 17) {
			slot8vSq = "sq2"
		} else if (VPLEAs.indexOf(VPLEA) % 36 >= 18 && VPLEAs.indexOf(VPLEA) % 36 <= 26) {
			slot8vSq = "sq3"
		} else if (VPLEAs.indexOf(VPLEA) % 36 >= 27 && VPLEAs.indexOf(VPLEA) % 36 <= 35) {
			slot8vSq = "sq4"
		}

		if (slot8vSq == "sq3") {
			if (cBefore.charAt(cBefore.length - 1) == "w") {
				slot8vSq += "w";
			} else if (cBefore.charAt(cBefore.length - 1) == "y") {
				slot8vSq += "y";
			}
		}

		slot8 += vSq[slot8vSq][VPLEAs.indexOf(VPLEA) % 9];
		if (VPLEAs.indexOf(VPLEA) >= 36) {
			slot8 += moodOrCaseScopeValues [ moodOrCaseScopes.indexOf(moodOrCaseScope) % 6 + 6];
		} else {
			slot8 += moodOrCaseScopeValues [ moodOrCaseScopes.indexOf(moodOrCaseScope) % 6];
		}

		if (slot8 == "ah") { slot8 = ""; }

	}
	genSlot8();

	function genSlot9() {
		slot9 = "";
		slot9vSq = "sq3";
		if (slot7 != "") {
			if (slot7.charAt(slot7.length - 1) == "w") {
				slot9vSq += "w";
			} else if (slot7.charAt(slot7.length - 1) == "y") {
				slot9vSq += "y";
			}
		} else {
			if (slot6.charAt(slot6.length - 1) == "w") {
				slot9vSq += "w";
			} else if (slot6.charAt(slot6.length - 1) == "y") {
				slot9vSq += "y";
			}
		}

		if (stress == 2 || stress == 3) /* case */{
			gCaseIndex = gCases.indexOf(gCase);
			if		(gCaseIndex >= 0  && gCaseIndex <= 8 ) {
				slot9 = vSq.sq1[gCaseIndex];
			} else if (gCaseIndex >= 9  && gCaseIndex <= 17) {
				slot9 = vSq.sq2[gCaseIndex % 9];
			} else if (gCaseIndex >= 18 && gCaseIndex <= 26) {
				slot9 = vSq [slot9vSq] [gCaseIndex % 9];
			} else if (gCaseIndex >= 27 && gCaseIndex <= 35) {
				slot9 = vSq.sq4[gCaseIndex % 9];
			} else if (gCaseIndex >= 36 && gCaseIndex <= 43) {
				slot9 = glottalise( vSq.cssq1[gCaseIndex - 36] );
			} else if (gCaseIndex >= 44 && gCaseIndex <= 51) {
				slot9 = glottalise( vSq.cssq2[gCaseIndex - 44] );
			} else if (gCaseIndex >= 52 && gCaseIndex <= 59) {
				slot9 = glottalise( vSq ["cs" + slot9vSq] [gCaseIndex - 52] );
			} else if (gCaseIndex >= 60 && gCaseIndex <= 67) {
				slot9 = glottalise( vSq.cssq4[gCaseIndex - 60] );
			}
		} else /* expectation & validation */     {
			slot9 = vSq ["sq" + (expectations.indexOf(expectation) + 1)] [validations.indexOf(validation)];
		}
	}
	genSlot9();

	function applyStress(word) {
		var matches = []
		if (stress != 2) {
			var re = /ai|äi|ei|ëi|oi|öi|ui|au|eu|ëu|ou|iu|a|e|i|o|u|ä|ë|ö|ü/g
				while ((match = re.exec(word)) != null) {
					matches.push(match.index);
				}
			stressedVowel = word.charAt(matches[matches.length - stress])

			from = ["a","e","i","o","u","ä","ë","ö","ü"];
			to   = ["á","é","í","ó","ú","â","ê","ô","û"];
			moreCons = [false,false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,true,true,false];

			for (i = 0; i < from.length; i++) {
				stressedVowel = stressedVowel.replace(from[i], to[i]);
			}
			result = word.substring(0,matches[matches.length - stress]) + stressedVowel + word.substring(matches[matches.length - stress] + 1);
		} else {result = word;}
		return result;
	}
	return applyStress(slot2 + slot3 + slot4 + slot5 + slot6 + slot7 + slot8 + slot9);
}