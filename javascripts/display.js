function dimShiftDisplay(){
	var shiftRequirement = getShiftRequirement(0);
	var isShift = player.resets < (inNC(4) || player.currentChallenge == "postc1" || player.pSac !== undefined ? 2 : 4)
	document.getElementById("resetLabel").textContent = '維度' + (isShift ? "跳躍" : player.resets < getSupersonicStart() ? "提升" : "超音速") + '（'+ getFullExpansion(Math.ceil(player.resets)) +'）：需要' + getFullExpansion(Math.ceil(shiftRequirement.amount)) + " " + DISPLAY_NAMES[shiftRequirement.tier] + "維度"
	document.getElementById("softReset").textContent = "重置遊戲以獲得一個" + (isShift ? "新的維度" : "加成")
}

function tickspeedBoostDisplay(){
	if (isTickspeedBoostPossible()) {
		var tickReq = getTickspeedBoostRequirement()
		document.getElementById("tickReset").style.display = ""
		document.getElementById("tickResetLabel").textContent = "時間速度提升（" + getFullExpansion(player.tickspeedBoosts) + "）：需要 " + getFullExpansion(tickReq.amount) + " " + DISPLAY_NAMES[tickReq.tier] + " 維度"
		document.getElementById("tickResetBtn").className = getAmount(tickReq.tier) < tickReq.amount ? "unavailablebtn" : "storebtn"
	} else document.getElementById("tickReset").style.display = "none"
}

function galaxyReqDisplay(){
	var nextGal = getGalaxyRequirement(0, true)
	var totalReplGalaxies = getTotalRG()
	var totalTypes = tmp.aeg ? 4 : player.dilation.freeGalaxies ? 3 : totalReplGalaxies ? 2 : 1
	document.getElementById("secondResetLabel").innerHTML = getGalaxyScaleName(nextGal.scaling) + (nextGal.scaling <= 3 ? "Antimatter " : "") + ' Galaxies ('+ getFullExpansion(player.galaxies) + (totalTypes > 1 ? ' + ' + getFullExpansion(totalReplGalaxies) : '') + (totalTypes > 2 ? ' + ' + getFullExpansion(Math.round(player.dilation.freeGalaxies)) : '') + (totalTypes > 3 ? ' + ' + getFullExpansion(tmp.aeg) : '') +'): requires ' + getFullExpansion(nextGal.amount) + ' '+DISPLAY_NAMES[inNC(4) || player.pSac != undefined ? 6 : 8]+' Dimensions'
}

var galaxyScalings = ["", "遠處 ", "更遠處", "遙遠 ", "暗物質", "幽靈", "Ethereal ", "Ethereal+ ", "Ethereal++ ", "Ethereal IV ", "Ethereal V "]
function getGalaxyScaleName(x) {
	return galaxyScalings[x]
}

function intergalacticDisplay(){
	if (player.achievements.includes("ng3p27") && getShiftRequirement(0).tier == 8) {
		document.getElementById("intergalacticLabel").parentElement.style.display = ""
		let nanopart = 1
		if (isNanoEffectUsed("dil_effect_exp")) nanopart = tmp.nf.effects["dil_effect_exp"] || 1
		document.getElementById("intergalacticLabel").innerHTML = 
			getGalaxyScaleName(tmp.igs) + 'Intergalactic Boost ' + 
			(player.dilation.active || player.galacticSacrifice != undefined ? " (estimated)" : "") +
			" (" + getFullExpansion(player.galaxies) + (Math.floor(tmp.igg - player.galaxies) > 0 ? " + " + 
			getFullExpansion(Math.floor(tmp.igg - player.galaxies)) : "") + "): " + 
			shorten(dilates(tmp.ig).pow(player.dilation.active ? nanopart : 1)) + 
			'x to Eighth Dimensions'
	} else document.getElementById("intergalacticLabel").parentElement.style.display = "none"
}

function dimensionTabDisplay(){
	var shown
	for (let tier = 8; tier > 0; tier--) {
		shown = shown || canBuyDimension(tier)
		var name = TIER_NAMES[tier];
		if (shown) {
			document.getElementById(tier + "Row").style.display = ""
			document.getElementById("D" + tier).childNodes[0].nodeValue = DISPLAY_NAMES[tier] + " Dimension x" + formatValue(player.options.notation, getDimensionFinalMultiplier(tier), 2, 1)
			document.getElementById("A" + tier).textContent = getDimensionDescription(tier)
		}
	}
	setAndMaybeShow("mp10d", player.aarexModifications.newGameMult, "'每十個維度的加成：'+shorten(getDimensionPowerMultiplier(\"non-random\"))+'x'")
	dimShiftDisplay()
	tickspeedBoostDisplay()
	galaxyReqDisplay()
	intergalacticDisplay()
}

function tickspeedDisplay(){
	if (canBuyDimension(3) || player.currentEternityChall == "eterc9") {
		var tickmult = tmp.tsReduce
		var tickmultNum = tickmult.toNumber()
		var ticklabel
		var e = Math.floor(Math.log10(Math.round(1/tickmultNum)))
		if (isNaN(tickmultNum)) ticklabel = '將時間速度打破無限';
		else if (e >= 9) ticklabel = "將時間間隔除以 " + shortenDimensions(Decimal.recip(tickmult))
		else if (tickmultNum > .9) ticklabel = '將時間間隔減少 ' + shorten((1 - tickmultNum) * 100) + '%'
		else ticklabel = '將時間間隔減少 ' + ((1 - tickmultNum) * 100).toFixed(e) + '%'
		let ic3mult=getPostC3Mult()
		if (player.galacticSacrifice || player.currentChallenge == "postc3" || isIC3Trapped()) document.getElementById("tickLabel").innerHTML = ((isIC3Trapped() || player.currentChallenge == "postc3") && player.currentChallenge != "postcngmm_3" && !player.challenges.includes("postcngmm_3") && !tmp.be ? "M" : ticklabel + '<br>and m') + 'ultiply all dimensions by ' + (ic3mult > 999.95 ? shorten(ic3mult) : new Decimal(ic3mult).toNumber().toPrecision(4)) + '.'
		else document.getElementById("tickLabel").textContent = ticklabel + '.'

		document.getElementById("tickSpeed").style.visibility = "visible";
		document.getElementById("tickSpeedMax").style.visibility = "visible";
		document.getElementById("tickLabel").style.visibility = "visible";
		document.getElementById("tickSpeedAmount").style.visibility = "visible";
	} else {
		document.getElementById("tickSpeed").style.visibility = "hidden";
		document.getElementById("tickSpeedMax").style.visibility = "hidden";
		document.getElementById("tickLabel").style.visibility = "hidden";
		document.getElementById("tickSpeedAmount").style.visibility = "hidden";
	}
}

function paradoxDimDisplay(){
	document.getElementById("pPow").textContent = shortenMoney(player.pSac.dims.power)
	document.getElementById("pPowProduction").textContent = "你每秒正在獲得 " + shortenDimensions(getPDProduction(1).div(getEC12Mult())) + " 悖論力量。"
	document.getElementById("pPowEffect").textContent = getFullExpansion(Math.floor(getExtraTime() * getEC12Mult()))
	var shown
	for (let t = 8; t > 0; t--) {
		shown = shown || isDimUnlocked(t)
		document.getElementById("pR"+t).style.display = shown ? "" : "none"
		if (shown) {
			document.getElementById("pD"+t).textContent = DISPLAY_NAMES[t] + "悖論維度 x" + shortenMoney(getPDPower(t))
			document.getElementById("pB"+t).textContent = "價格：" + shortenDimensions(player.pSac.dims[t].cost) + " 悖論"
			document.getElementById("pB"+t).className = (player.pSac.px.gte(player.pSac.dims[t].cost) ? "stor" : "unavailabl") + "ebtn"
			document.getElementById("pA"+t).textContent = getPDDesc(t)
		}
	}
}

function mainStatsDisplay(){
	document.getElementById("totalmoney").textContent = '你總共生產了 ' + shortenMoney(player.totalmoney) + ' 反物質。'
	document.getElementById("totalresets").textContent = '你進行了 ' + getFullExpansion(player.resets) + ' 個維度提升/跳躍。'
	setAndMaybeShow("lostResets", player.pSac && player.pSac.lostResets, '"物質重置後，你總共失去了 " + getFullExpansion(player.pSac.lostResets) + " 個維度提升/跳躍。"')
	document.getElementById("tdboosts").textContent = player.aarexModifications.ngmX > 3 ? '你進行了 ' + getFullExpansion(player.tdBoosts) + ' 個時間維度提升/跳躍。':""
	var showBoosts=isTickspeedBoostPossible()
	document.getElementById("boosts").style.display = showBoosts ? '' : 'none'
	if (showBoosts) document.getElementById("boosts").textContent = '你進行了 '+getFullExpansion(player.tickspeedBoosts)+' 時間速度提升。'
	document.getElementById("galaxies").textContent = '你有 ' + getFullExpansion(player.galaxies) + ' 反物質星系。'
	var showCancer = player.spreadingCancer > 0 && player.galacticSacrifice
	document.getElementById("spreadingCancer").style.display = showCancer ? '' : 'none'
	if (showCancer) document.getElementById("spreadingCancer").textContent = 'You have made '+getFullExpansion(player.spreadingCancer)+' total galaxies while using Cancer notation.'
	document.getElementById("totalTime").textContent = "你遊玩了 " + timeDisplay(player.totalTimePlayed) + "。"
}

function paradoxSacDisplay(){
	if (player.pSac && player.pSac.times) {
		document.getElementById("psStatistics").style.display = ""
		document.getElementById("pSacrificedNormal").textContent = "你悖論犧牲了 " + getFullExpansion(player.pSac.normalTimes) + " 次。"
		document.getElementById("pSacrificedForced").textContent = "你被迫悖論犧牲了 " + getFullExpansion(player.pSac.forcedTimes) + " 次。"
		document.getElementById("pSacrificed").textContent = "你總共悖論犧牲了 " + getFullExpansion(player.pSac.times) + " 次。"
		document.getElementById("thisPSac").textContent = "你在本次悖論犧牲度過了 " + timeDisplay(player.pSac.time) + "。"
	} else document.getElementById("psStatistics").style.display = "none"
}

function galaxySacDisplay(){
	if (player.galacticSacrifice ? player.galacticSacrifice.times < 1 : true) document.getElementById("gsStatistics").style.display = "none"
	else {
		document.getElementById("gsStatistics").style.display = ""
		document.getElementById("sacrificed").textContent = "你星系犧牲了 "+getFullExpansion(player.galacticSacrifice.times) + " 次。"
		document.getElementById("thisSacrifice").textContent = "你在本次星系度過了 " + timeDisplay(player.galacticSacrifice.time) + "。"
	}
}

function bestInfinityDisplay(){
	document.getElementById("infinityStatistics").style.display = "none"
	if (player.bestInfinityTime >= 9999999999) {
		document.getElementById("bestInfinity").textContent = ""
		document.getElementById("thisInfinity").textContent = ""
		document.getElementById("infinitied").textContent = ""
	} else {
		document.getElementById("infinityStatistics").style.display = ""
		document.getElementById("bestInfinity").textContent = "你最快的無限是 " + timeDisplay(player.bestInfinityTime) + "。"
		document.getElementById("thisInfinity").textContent = "你在本次無限度過了 " + timeDisplay(player.thisInfinityTime) + "。"
		document.getElementById("infinitied").textContent = "你" + (player.eternities!==0||player.eternitiesBank>0 ? "在本次永恆" : "") + "無限了 " + getFullExpansion(player.infinitied) + " 次。"
	}
	if (player.infinitiedBank>0) document.getElementById("infinityStatistics").style.display = ""
}

function bestEternityDisplay(){
	document.getElementById("eternityStatistics").style.display = "none"
	if (player.eternities == 0) {
		document.getElementById("besteternity").textContent = ""
		document.getElementById("thiseternity").textContent = ""
		document.getElementById("eternitied").textContent = ""
	} else {
		document.getElementById("eternityStatistics").style.display = "inline-block"
		if (player.bestEternity >= 9999999999) {
			document.getElementById("besteternity").textContent = ""
		} else document.getElementById("besteternity").textContent = "你最快的永恆是 "+timeDisplay(player.bestEternity)+"。"
		document.getElementById("thiseternity").textContent = "你在本次永恆度過了 " + timeDisplay(player.thisEternity) + "。"
		document.getElementById("eternitied").textContent = "你" + (quantumed ? "在本次量子" : "") + "永恆了 " + getFullExpansion(player.eternities) + " 次。"
	}
	if (player.eternitiesBank > 0) document.getElementById("eternityStatistics").style.display = ""
}

function bestQuantumDisplay(){
	if (!quantumed) document.getElementById("quantumStatistics").style.display = "none"
	else {
		document.getElementById("quantumStatistics").style.display = ""
		document.getElementById("quantumed").textContent = "你量子了 " + getFullExpansion(tmp.qu.times) + " 次。"
		document.getElementById("thisQuantum").textContent = "你在本次量子度過了 " + timeDisplay(tmp.qu.time) + " 。"
		document.getElementById("bestQuantum").textContent = "你最快的量子是 " + timeDisplay(tmp.qu.best) + "。"
	}
}

function bestGhostifyDisplay(){
	if (!ghostified) document.getElementById("ghostifyStatistics").style.display = "none"
	else {
		document.getElementById("ghostifyStatistics").style.display = ""
		document.getElementById("ghostified").textContent = "你通過了大撕裂的宇宙並變成了 " + getFullExpansion(player.ghostify.times) + " 次幽靈。"
		document.getElementById("thisGhostify").textContent = "你在本次幽靈化度過了 " + timeDisplay(player.ghostify.time) + " 。"
		document.getElementById("bestGhostify").textContent = "你最快的幽靈化是 " + timeDisplay(player.ghostify.best) + "。"
	}
}

function ng3p51Display(){
	if (!player.achievements.includes("ng3p51"))  document.getElementById("bigRipStatistics").style.display = "none"
	else {
		document.getElementById("bigRipStatistics").style.display = ""
		setAndMaybeShow("bigRipped", tmp.qu.bigRip.times, '"你大撕裂了 " + getFullExpansion(tmp.qu.bigRip.times) + " 次宇宙。"')
		setAndMaybeShow("bestmoneythisrip", tmp.qu.bigRip.active, "'你在本次大撕裂的最大量反物質是 ' + shortenMoney(tmp.qu.bigRip.bestThisRun) + '。'")
		document.getElementById("totalmoneybigrip").textContent = '你在所有大撕裂裡總共生產了 ' + shortenMoney(tmp.qu.bigRip.totalAntimatter) + ' 反物質。'
		document.getElementById("bestgalsbigrip").textContent = '你在所有大撕裂的最大量反物質星系是 ' + getFullExpansion(tmp.qu.bigRip.bestGals) + "。"
	}
}

function dilationStatsDisplay(){
	if (player.dilation.times) document.getElementById("dilated").textContent = "你成功膨脹了 "+getFullExpansion(player.dilation.times)+" 次。"
	else document.getElementById("dilated").textContent = ""

	if (player.exdilation == undefined ? false : player.exdilation.times > 1) document.getElementById("exdilated").textContent = "你逆轉了 " + getFullExpansion(player.exdilation.times) + " 次膨脹。"
	else document.getElementById("exdilated").textContent = ""
}

function scienceNumberDisplay(){
	var scale1 = [2.82e-45,1e-42,7.23e-30,5e-21,9e-17,6.2e-11,5e-8,3.555e-6,7.5e-4,1,2.5e3,2.6006e6,3.3e8,5e12,4.5e17,1.08e21,1.53e24,1.41e27,5e32,8e36,1.7e45,1.7e48,3.3e55,3.3e61,5e68,1e73,3.4e80,1e113,Number.MAX_VALUE,new Decimal("1e65000")];
	var scale2 = [" 個質子。"," 個原子核。"," 個氫原子。"," 個病毒。","  個紅血球。","  顆沙粒。"," 顆米粒。"," 茶匙。"," 酒瓶。瓶紅酒。"," 個冰箱。"," 個奧林匹克標準游泳池。"," 座吉薩大金字塔。"," 個萬里長城。"," 個大型小行星。",
		      " 個矮行星。"," 個地球。"," 個木星。"," 個太陽。"," 個紅巨星。"," 個特超巨星。"," 個星雲。"," 個歐特雲。"," 個本地泡。"," 個星系。"," 個本星系群。"," 個玉夫座空洞。"," 個可觀測宇宙。"," 個反物質維度。", " 個無限維度。", " 個時間維度。"];
	var id = 0;
	if (player.money.times(4.22419).gt(2.82e60)) {
		if (player.money.times(4.22419e-105).gt(scale1[scale1.length - 1])) id = scale1.length - 1;
		else {
			while (player.money.times(4.22419e-105).gt(scale1[id])) id++;
			if (id > 0) id--;
		}
		if (id >= 7 && id < 11) document.getElementById("infoScale").textContent = "如果每一個反物質是一個普朗克體積，你可以填滿 " + formatValue(player.options.notation, player.money * 4.22419e-105 / scale1[id], 2, 1) + scale2[id];
		else document.getElementById("infoScale").textContent = "如果每一個反物質是一個普朗克體積，你可以製造 " + formatValue(player.options.notation, player.money.times(4.22419e-105).dividedBy(scale1[id]), 2, 1) + scale2[id];
	} else { //does this part work correctly? i doubt it does
		if (player.money.lt(2.82e9)) document.getElementById("infoScale").textContent = "如果每一個反物質是 " + formatValue(player.options.notation, 2.82e9 / player.money, 2, 1) + " 立方阿米，你可以製造一個質子。"
		else if (player.money.lt(2.82e18)) document.getElementById("infoScale").textContent = "如果每一個反物質是 " + formatValue(player.options.notation, 2.82e18 / player.money, 2, 1) + " 立方介米，你可以製造一個質子。"
		else if (player.money.lt(2.82e27)) document.getElementById("infoScale").textContent = "如果每一個反物質是 " + formatValue(player.options.notation, 2.82e27 / player.money, 2, 1) + " 立方攸米，你可以製造一個質子。"
		else document.getElementById("infoScale").textContent = "如果每一個反物質是 " + formatValue(player.options.notation, (2.82e-45 / 4.22419e-105 / player.money), 2, 1) + " 普朗克體積，你可以製造一個質子。"
	}
}

function infinityRespecedInfinityDisplay(){
	if (setUnlocks.length > player.setsUnlocked) document.getElementById("nextset").textContent = "下一套在 " + formatValue(player.options.notation, setUnlocks[player.setsUnlocked], 2, 0, true) + " 解鎖。"
	document.getElementById("infi1pow").textContent = getFullExpansion(player.infinityUpgradesRespecced[1] * 10)
	document.getElementById("infi1cost").textContent = shortenCosts(Decimal.pow(10, player.infinityUpgradesRespecced[1]))
	document.getElementById("infi1").className = player.infinityPoints.lt(Decimal.pow(10, player.infinityUpgradesRespecced[1])) ? "infinistorebtnlocked" : "infinimultbtn"
	document.getElementById("infi3pow").textContent = formatValue(player.options.notation, getLimit(), 2, 0, true)
	document.getElementById("infi3cost").textContent = shortenCosts(Decimal.pow(10, player.infinityUpgradesRespecced[3]))
	document.getElementById("infi3").className = player.infinityPoints.lt(Decimal.pow(10, player.infinityUpgradesRespecced[3])) ? "infinistorebtnlocked" : "infinimultbtn"
}

function infinityUpgradesDisplay(){
	if (player.infinityUpgrades.includes("timeMult")) document.getElementById("infi11").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)) document.getElementById("infi11").className = "infinistorebtn1"
	else document.getElementById("infi11").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("dimMult")) document.getElementById("infi21").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)) document.getElementById("infi21").className = "infinistorebtn2"
	else document.getElementById("infi21").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("18Mult")) document.getElementById("infi12").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)&&player.infinityUpgrades.includes("timeMult")) document.getElementById("infi12").className = "infinistorebtn1"
	else document.getElementById("infi12").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("27Mult")) document.getElementById("infi22").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)&&player.infinityUpgrades.includes("dimMult")) document.getElementById("infi22").className = "infinistorebtn2"
	else document.getElementById("infi22").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("36Mult")) document.getElementById("infi13").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)&&player.infinityUpgrades.includes("18Mult")) document.getElementById("infi13").className = "infinistorebtn1"
	else document.getElementById("infi13").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("45Mult")) document.getElementById("infi23").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)&&player.infinityUpgrades.includes("27Mult")) document.getElementById("infi23").className = "infinistorebtn2"
	else document.getElementById("infi23").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("resetBoost")) document.getElementById("infi14").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1)&&player.infinityUpgrades.includes("36Mult")) document.getElementById("infi14").className = "infinistorebtn1"
	else document.getElementById("infi14").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("galaxyBoost")) document.getElementById("infi24").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(2)&&player.infinityUpgrades.includes("45Mult")) document.getElementById("infi24").className = "infinistorebtn2"
	else document.getElementById("infi24").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("timeMult2")) document.getElementById("infi31").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(3)) document.getElementById("infi31").className = "infinistorebtn3"
	else document.getElementById("infi31").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("unspentBonus")) document.getElementById("infi32").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("timeMult2") && player.infinityPoints.gte(5)) document.getElementById("infi32").className = "infinistorebtn3"
	else document.getElementById("infi32").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("resetMult")) document.getElementById("infi33").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("unspentBonus") && player.infinityPoints.gte(7)) document.getElementById("infi33").className = "infinistorebtn3"
	else document.getElementById("infi33").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("passiveGen")) document.getElementById("infi34").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("resetMult") && player.infinityPoints.gte(10)) document.getElementById("infi34").className = "infinistorebtn3"
	else document.getElementById("infi34").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("skipReset1")) document.getElementById("infi41").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(20)) document.getElementById("infi41").className = "infinistorebtn4"
	else document.getElementById("infi41").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("skipReset2")) document.getElementById("infi42").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("skipReset1") && player.infinityPoints.gte(40)) document.getElementById("infi42").className = "infinistorebtn4"
	else document.getElementById("infi42").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("skipReset3")) document.getElementById("infi43").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("skipReset2") && player.infinityPoints.gte(80)) document.getElementById("infi43").className = "infinistorebtn4"
	else document.getElementById("infi43").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("skipResetGalaxy")) document.getElementById("infi44").className = "infinistorebtnbought"
	else if (player.infinityUpgrades.includes("skipReset3") && player.infinityPoints.gte(500)) document.getElementById("infi44").className = "infinistorebtn4"
	else document.getElementById("infi44").className = "infinistorebtnlocked"
	document.getElementById("infi11").innerHTML = "Normal Dimensions gain a multiplier based on time played <br>Currently: " + (infUpg11Pow()).toFixed(2) + "x<br>Cost: 1 IP"
	document.getElementById("infi12").innerHTML = "First and Eighth Dimensions gain a multiplier based on your Infinities<br>Currently: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
	document.getElementById("infi13").innerHTML = "Third and Sixth Dimensions gain a multiplier based on your Infinities<br>Currently: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
	document.getElementById("infi22").innerHTML = "Second and Seventh Dimensions gain a multiplier based on your Infinities<br>Currently: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
	document.getElementById("infi23").innerHTML = "Fourth and Fifth Dimensions gain a multiplier based on your Infinities<br>Currently: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
	document.getElementById("infi31").innerHTML = "Normal Dimensions gain a multiplier based on time spent in this Infinity<br>Currently: " + shorten(infUpg13Pow()) + "x<br>Cost: 3 IP"
	var infi32middle = player.infinityPoints.lt(Decimal.pow(10, 1e10)) ? " <br> Currently: " + formatValue(player.options.notation, getUnspentBonus(), 2, 2) + "x" : ""
	document.getElementById("infi32").innerHTML = "1st Dimension gets a multiplier based on unspent IP " + infi32middle + "<br>Cost: 5 IP"
}

function preBreakUpgradeDisplay(){
	if (canBuyIPMult()) document.getElementById("infiMult").className = "infinimultbtn"
	else document.getElementById("infiMult").className = "infinistorebtnlocked"
	var infiMultEnding = player.infinityPoints.lt(Decimal.pow(10, 1e10)) ? "<br>目前：" + shorten(getIPMult()) + "x<br>價格：" + shortenCosts(player.infMultCost) + " 無限點數" : ""
	document.getElementById("infiMult").innerHTML = "You get " + (Math.round(getIPMultPower() * 100) / 100) + "x more IP." + infiMultEnding
	document.getElementById("nextset").textContent = ""
	if (player.infinityUpgradesRespecced != undefined) {
		infinityRespecedInfinityDisplay()
	} else {
		infinityUpgradesDisplay()
		if (player.galacticSacrifice) {
			var base = player.tickspeedBoosts == undefined ? 2 : 1
			if (player.aarexModifications.newGameExpVersion) base *= 10
			document.getElementById("infi21").innerHTML = "Increase the multiplier for buying 10 Dimensions based on Infinities<br>"+base+"x -> "+(infUpg12Pow()*base).toPrecision(4)+"x<br>Cost: 1 IP"
			document.getElementById("infi33").innerHTML = "Dimension Boosts are stronger based on Infinity Points<br>Currently: " + (1.2 + 0.05 * player.infinityPoints.max(1).log(10)).toFixed(2) + "x<br>Cost: 7 IP"
		}
		var infi34Middle = player.infinityPoints.lt(Decimal.pow(10, 1e10)) ? "<br>Currently: " + shortenDimensions(getIPMult()) + " every " + timeDisplay(player.bestInfinityTime * 10) : ""
		document.getElementById("infi34").innerHTML = "Generate IP based on your fastest Infinity " + infi34Middle + "<br>Cost: 10 IP"
	}
	document.getElementById("lockedset1").style.display = "none"
	if (player.setsUnlocked > 0) {
		document.getElementById("lockedset1").style.display = ""
		for (let u = 4; u < 7; u++) {
			document.getElementById("infi" + u + "pow").textContent = u == 5 ? getInfUpgPow(5).toFixed(2) : getFullExpansion(getInfUpgPow(u))
			document.getElementById("infi" + u + "cost").textContent = shortenCosts(Decimal.pow(10, player.infinityUpgradesRespecced[u] + powAdds[u]))
			document.getElementById("infi" + u).className = player.infinityPoints.lt(Decimal.pow(10, player.infinityUpgradesRespecced[u] + powAdds[u])) ? "infinistorebtnlocked" : "infinimultbtn"
		}	
	}
}

function eventsTimeDisplay(years, thisYear){
	var bc = years - thisYear + 1
	var since
	var sinceYears
	var dates = [5.332e6, 3.5e6,  2.58e6, 7.81e5, 3.15e5, 
		     2.5e5,   1.95e5, 1.6e5,  1.25e5, 7e4, 
		     6.7e4,   5e4,   4.5e4,  4e4,   3.5e4, 
		     3.3e4,   3.1e4,  2.9e4,  2.8e4,  2e4, 
		     1.6e4,   1.5e4,  1.4e4,  11600, 1e4,
		     8e3,    6e3,   5e3,   4e3,   3200,
		     3000,   2600,  2500,  2300,  1800,
		     1400,   1175,  800,   753,   653,
		     539,    356,   200,   4,     0]
	var events = ["上新世的開始", "南方古猿露西的誕生", "第四紀", "早更新期", "智人",
		      "尼安德塔人", "身體結構現代化人類的出現", "長者智人", "伊緬間冰期的高峰", "最早的抽象/符號藝術",
		      "晚更新期", "舊石器時代晚期", "歐洲早現代人類", "第一個人類聚居地", "最古老的已知的比喻藝術",
		      "最古老的已知的馴養狗", "末次冰盛期", "最古老的烤箱", "最古老的已知的扭轉繩子", "最古老的人類的永久聚居地（由石頭和長毛象骨頭製作的小村莊）",
		      "rise of Kerberan culture", "北美洲的殖民地化", "豬的馴養", "史前戰爭", "全新世",
		      "其他人類品種的死亡", "農業革命", "農夫來到歐洲", "第一個金屬工具", "第一隻馬",
		      "蘇美爾的楔形文字書寫系統", "埃及的統一", "瑪雅文明的崛起", "長毛象的絕種", "阿卡德帝國的崛起",
		      "第一個字母書寫系統", "奧爾梅克文明的崛起", "青銅時代的結束", "希臘城邦的崛起", "羅馬的崛起",
		      "波斯帝國的崛起", "巴比倫帝國的滅亡", "亞歷山大大帝的誕生", "第一張紙", "耶穌的誕生"]
	/*
	"the homo sapiens" is weird, as is "the homo neanderthaliensis" and "the homo sapiens idaltu"
	*/
	var index = 0
	for (var i = 0; i < dates.length; i++){
		if (bc > dates[i]) {
			index = i
			break
		}
	} // dates[index] < bc <= dates[index-1] 
	if (index > 0) { //bc is less than or equal to 5.332e6 (5332e3)
		since = events[index - 1]
		sinceYears = bc - dates[index]
	}
	var message = "<br>如果你每秒寫 3 個數字，你需要在公元前 " message += getFullExpansion(Math.floor(bc)) + " 開始，才可以現在寫完你的反物質數量。" + (since ? "<br>這個時間在 " + since + "之前的" + getFullExpansion(Math.ceil(sinceYears)) + "左右。" : "")
	document.getElementById("infoScale").innerHTML = message
}

function universesTimeDisplay(years){
	var message = "<br>如果你每秒寫 3 個數字，寫完你的反物質數量所需的時間是 "
	let unis = years / 13.78e9 
	// 13.78 Billion years as measured by the CMB (cosmic microwave background) and various models, feel free to change if more accurate data comes along
	let timebit 
	let end = "% of another."
	if (unis < 1) timebit = (unis * 100).toFixed(3) + "% of a universe."
	else if (unis < 2) timebit = "1 universe and " + (unis * 100 - 100).toFixed(3) + end
	else timebit = getFullExpansion(Math.floor(unis)) + " universes and " + (unis * 100 - 100 * Math.floor(unis)).toFixed(3) + end
	document.getElementById("infoScale").innerHTML = message + timebit
}

function lifetimeTimeDisplay(years){
	var message = "<br>如果你是一個美國人，並出生後以每秒 3 個數字寫你的反物質數量，<br> "
	if (years > 79.3) message += "be a ghost for " + ((years - 79.3) / years * 100).toFixed(3) + "% of the session."
	else message += "waste " + (years / 0.793).toFixed(3) + "% of your projected average lifespan."
	document.getElementById("infoScale").innerHTML = message
}

function infoScaleDisplay(){
	if (player.aarexModifications.hideRepresentation) document.getElementById("infoScale").textContent=""
	else if (player.money.gt(Decimal.pow(10, 3 * 86400 * 365.2425 * 79.3 / 10))) {
		var years = player.money.log10() / 3 / 86400 / 365.2425
		var thisYear = new Date().getFullYear() || 2020
		if (years >= 1e13){
			document.getElementById("infoScale").innerHTML = "<br>The time needed to finish writing your full antimatter amount at a rate of 3 digits per second would span " + Decimal.div(years, 1e12).toFixed(2) + " trillion years."
		} else if (years >= 1e9) {
			universesTimeDisplay(years)
		} else if (years > 1e7) {
			document.getElementById("infoScale").innerHTML = "<br>The time needed to finish writing your full antimatter amount at a rate of 3 digits per second would span " + Decimal.div(years, 1e6).toFixed(2) + " million years."
		} else if (years >= thisYear) { 
			eventsTimeDisplay(years, thisYear)
		} else {
			lifetimeTimeDisplay(years)
		}
	}
	else if (player.money.log10() > 1e5) document.getElementById("infoScale").innerHTML = "<br>If you wrote 3 numbers a second, it would take you <br>" + timeDisplay(player.money.log10() * 10 / 3) + "<br> to write down your antimatter amount."
	else scienceNumberDisplay()
}

function STATSDisplay(){
	mainStatsDisplay()
	paradoxSacDisplay()
	galaxySacDisplay()
	bestInfinityDisplay()
	bestEternityDisplay()
	bestQuantumDisplay()
	bestGhostifyDisplay()
	ng3p51Display()
	dilationStatsDisplay()
	infoScaleDisplay()
}

function breakInfinityUpgradeDisplay(){
	if (player.infinityUpgrades.includes("totalMult")) document.getElementById("postinfi11").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e4)) document.getElementById("postinfi11").className = "infinistorebtn1"
	else document.getElementById("postinfi11").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("currentMult")) document.getElementById("postinfi21").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(5e4)) document.getElementById("postinfi21").className = "infinistorebtn1"
	else document.getElementById("postinfi21").className = "infinistorebtnlocked"
	if (player.tickSpeedMultDecrease <= 2) document.getElementById("postinfi31").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickSpeedMultDecreaseCost)) document.getElementById("postinfi31").className = "infinimultbtn"
	else document.getElementById("postinfi31").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("achievementMult")) document.getElementById("postinfi22").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e6)) document.getElementById("postinfi22").className = "infinistorebtn1"
	else document.getElementById("postinfi22").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("infinitiedMult")) document.getElementById("postinfi12").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e5)) document.getElementById("postinfi12").className = "infinistorebtn1"
	else document.getElementById("postinfi12").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postGalaxy")) document.getElementById("postinfi41").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(5e11)) document.getElementById("postinfi41").className = "infinistorebtn1"
	else document.getElementById("postinfi41").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("challengeMult")) document.getElementById("postinfi32").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e7)) document.getElementById("postinfi32").className = "infinistorebtn1"
	else document.getElementById("postinfi32").className = "infinistorebtnlocked"
	if (player.dimensionMultDecrease <= 3) document.getElementById("postinfi42").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.dimensionMultDecreaseCost)) document.getElementById("postinfi42").className = "infinimultbtn"
	else document.getElementById("postinfi42").className = "infinistorebtnlocked"
	if (player.offlineProd == 50) document.getElementById("offlineProd").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.offlineProdCost)) document.getElementById("offlineProd").className = "infinimultbtn"
	else document.getElementById("offlineProd").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("infinitiedGeneration")) document.getElementById("postinfi13").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(20e6)) document.getElementById("postinfi13").className = "infinistorebtn1"
	else document.getElementById("postinfi13").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("bulkBoost")) document.getElementById("postinfi23").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts!=undefined?2e4:player.galacticSacrifice?5e6:5e9)) document.getElementById("postinfi23").className = "infinistorebtn1"
	else document.getElementById("postinfi23").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("autoBuyerUpgrade")) document.getElementById("postinfi33").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e15)) document.getElementById("postinfi33").className = "infinistorebtn1"
	else document.getElementById("postinfi33").className = "infinistorebtnlocked"
	document.getElementById("postinfi11").innerHTML = "Normal Dimensions gain a multiplier based on total antimatter produced<br>Currently: " + shorten(tmp.postinfi11) + "x<br>Cost: "+shortenCosts(1e4)+" IP"
	document.getElementById("postinfi21").innerHTML = "Normal Dimensions gain a multiplier based on current antimatter<br>Currently: " + shorten(tmp.postinfi21) + "x<br>Cost: "+shortenCosts(5e4)+" IP"
	if (player.tickSpeedMultDecrease > 2) document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>" + player.tickSpeedMultDecrease+"x -> "+(player.tickSpeedMultDecrease-1)+"x<br>Cost: "+shortenDimensions(player.tickSpeedMultDecreaseCost) +" IP"
	else document.getElementById("postinfi31").innerHTML = "Decrease the Tickspeed cost multiplier increase post-e308<br> " + player.tickSpeedMultDecrease.toFixed(player.tickSpeedMultDecrease < 2 ? 2 : 0)+"x"
	document.getElementById("postinfi22").innerHTML = "Normal Dimensions gain a multiplier based on achievements " + (player.aarexModifications.ngmX >= 4 ? "and purchased GP upgrades " : "") + "<br>Currently: " + shorten(achievementMult) + "x<br>Cost: " + shortenCosts(1e6) + " IP"
	document.getElementById("postinfi12").innerHTML = "Normal Dimensions gain a multiplier based on your Infinities <br>Currently: "+shorten(getInfinitiedMult())+"x<br>Cost: " + shortenCosts(1e5) + " IP"
	document.getElementById("postinfi41").innerHTML = "Galaxies are " + Math.round(getPostGalaxyEff() * 100 - 100) + "% stronger <br>Cost: "+shortenCosts(5e11)+" IP"
	document.getElementById("postinfi32").innerHTML = "Normal Dimensions gain a multiplier based on your slowest Normal Challenge time<br>Currently: "+shorten(worstChallengeBonus)+"x<br>Cost: " + shortenCosts(1e7) + " IP"
	document.getElementById("postinfi13").innerHTML = "You generate Infinities based on your fastest Infinity.<br>1 Infinity every " + timeDisplay(player.bestInfinityTime * 5) + " <br>Cost: " + shortenCosts(2e7) + " IP"
	document.getElementById("postinfi23").innerHTML = "Unlock the option to bulk buy Dimension" + (player.tickspeedBoosts == undefined ? "" : " and Tickspeed") + " Boosts <br>Cost: " + shortenCosts(player.tickspeedBoosts != undefined ? 2e4 : player.galacticSacrifice ? 5e6 : 5e9) + " IP"
	document.getElementById("postinfi33").innerHTML = "Autobuyers work twice as fast <br>Cost: " + shortenCosts(1e15) + " IP"
	if (player.dimensionMultDecrease > 3) document.getElementById("postinfi42").innerHTML = "Decrease the Dimension cost multiplier increase post-e308<br>" + player.dimensionMultDecrease + "x -> " + (player.dimensionMultDecrease - 1) + "x<br>Cost: " + shortenCosts(player.dimensionMultDecreaseCost) +" IP"
	else document.getElementById("postinfi42").innerHTML = "Dimension cost multiplier increase<br>"+player.dimensionMultDecrease.toFixed(ECTimesCompleted("eterc6") % 5 > 0 ? 1 : 0) + "x"
	document.getElementById("offlineProd").innerHTML = "Generate " + player.offlineProd + "% > " + Math.max(Math.max(5, player.offlineProd + 5), Math.min(50, player.offlineProd + 5)) + "% of your best IP/min from the last 10 Infinities, works offline<br>Currently: " + shortenMoney(bestRunIppm.times(player.offlineProd / 100)) + "IP/min<br> Cost: " + shortenCosts(player.offlineProdCost) + " IP"
	if (player.offlineProd == 50) document.getElementById("offlineProd").innerHTML = "Generate " + player.offlineProd + "% of your best IP/min from the last 10 Infinities, works offline<br>Currently: " + shortenMoney(bestRunIppm.times(player.offlineProd / 100)) + " IP/min"
}

function roundedDBCostIncrease(a){
	return shorten(getDimboostCostIncrease() + a)
}

function breakNGm2UpgradeColumnDisplay(){
	if (player.infinityUpgrades.includes("galPointMult")) document.getElementById("postinfi01").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 1e3 : 1e4)) document.getElementById("postinfi01").className = "infinistorebtn1"
	else document.getElementById("postinfi01").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("dimboostCost")) document.getElementById("postinfi02").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 2e4 : 1e5)) document.getElementById("postinfi02").className = "infinistorebtn1"
	else document.getElementById("postinfi02").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("galCost")) document.getElementById("postinfi03").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(5e5)) document.getElementById("postinfi03").className = "infinistorebtn1"
	else document.getElementById("postinfi03").className = "infinistorebtnlocked"
	if (player.extraDimPowerIncrease >= 40) document.getElementById("postinfi04").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.dimPowerIncreaseCost)) document.getElementById("postinfi04").className = "infinimultbtn"
	else document.getElementById("postinfi04").className = "infinistorebtnlocked"
	document.getElementById("postinfi01").innerHTML = "Multiplier to Galaxy points based on infinities<br>Currently: "+shorten(getPost01Mult())+"x<br>Cost: "+shortenCosts(player.tickspeedBoosts==undefined?1e3:1e4)+" IP"
	document.getElementById("postinfi02").innerHTML = "Dimension Boost cost increases by 1 less<br>Currently: " + roundedDBCostIncrease(0) + (player.infinityUpgrades.includes("dimboostCost") ? "" : " -> " + (roundedDBCostIncrease(-1))) + "<br>Cost: " + shortenCosts(player.tickspeedBoosts == undefined ? 2e4 : 1e5) + " IP"
	document.getElementById("postinfi03").innerHTML = "Galaxy cost increases by 5 less<br>Currently: " + Math.round(getGalaxyReqMultiplier() * 10) / 10 + (player.infinityUpgrades.includes("galCost") ? "" : " -> " + Math.round(getGalaxyReqMultiplier() * 10 - 50) / 10 + "<br>Cost: " + shortenCosts(5e5) + " IP")
	document.getElementById("postinfi04").innerHTML = "Further increase all dimension multipliers<br>x^" + galMults.u31().toFixed(2) + (player.extraDimPowerIncrease < 40 ? " -> x^" + ((galMults.u31() + 0.02).toFixed(2)) + "<br>Cost: " + shorten(player.dimPowerIncreaseCost) + " IP" : "")
}

function breakNGm2UpgradeRow5Display(){
	document.getElementById("postinfir5").style.display = ""
	if (player.infinityUpgrades.includes("postinfi50")) document.getElementById("postinfi50").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 1e25 : 1e18)) document.getElementById("postinfi50").className = "infinistorebtn1"
	else document.getElementById("postinfi50").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi51")) document.getElementById("postinfi51").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 1e29 : 1e20)) document.getElementById("postinfi51").className = "infinistorebtn1"
	else document.getElementById("postinfi51").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi52")) document.getElementById("postinfi52").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 1e33 : 1e25)) document.getElementById("postinfi52").className = "infinistorebtn1"
	else document.getElementById("postinfi52").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi53")) document.getElementById("postinfi53").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(player.tickspeedBoosts == undefined ? 1e37 : 1e29)) document.getElementById("postinfi53").className = "infinistorebtn1"
	else document.getElementById("postinfi53").className = "infinistorebtnlocked"
	document.getElementById("postinfi50").innerHTML = "Dimension Boost cost increases by 0.5 less.<br>Currently: " + getDimboostCostIncrease() + (player.infinityUpgrades.includes("postinfi50") ? "" : " -> " + (getDimboostCostIncrease() - 0.5)) + "<br>Cost: " + shortenCosts(player.tickspeedBoosts==undefined ? 1e25 : 1e18) + " IP"
	document.getElementById("postinfi51").innerHTML = "Galaxies are " + (player.tickspeedBoosts ? 15 : 20) + "% more stronger.<br>Cost: " + shortenCosts(player.tickspeedBoosts == undefined ? 1e29 : 1e20) + " IP"
	let inf52text = ''
	if (player.tickspeedBoosts == undefined){
		inf52text = "Galaxy cost increases by 3 less.<br>Currently: " + Math.round(getGalaxyReqMultiplier() * 10) / 10 + (player.infinityUpgrades.includes("postinfi52") ? "" : " -> " + Math.round(getGalaxyReqMultiplier() * 10 - 30) / 10) + "<br>Cost: " + shortenCosts(1e33) + " IP"
	} else inf52text = "Decrease tickspeed boost cost multiplier to 3.<br>Cost: " + shortenCosts(1e25) + " IP"
	document.getElementById("postinfi52").innerHTML = inf52text
	document.getElementById("postinfi53").innerHTML = "Divide all Infinity Dimension cost multipliers by 50.<br>Cost: "+shortenCosts(player.tickspeedBoosts == undefined ? 1e37 : 1e29) + " IP"
}

function breakNGm2UpgradeRow6Display(){
	document.getElementById("postinfir6").style.display = ""
	if (player.infinityUpgrades.includes("postinfi60")) document.getElementById("postinfi60").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte(1e50)) document.getElementById("postinfi60").className = "infinistorebtn1"
	else document.getElementById("postinfi60").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi61")) document.getElementById("postinfi61").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte("1e450")) document.getElementById("postinfi61").className = "infinistorebtn1"
	else document.getElementById("postinfi61").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi62")) document.getElementById("postinfi62").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte("1e700")) document.getElementById("postinfi62").className = "infinistorebtn1"
	else document.getElementById("postinfi62").className = "infinistorebtnlocked"
	if (player.infinityUpgrades.includes("postinfi63")) document.getElementById("postinfi63").className = "infinistorebtnbought"
	else if (player.infinityPoints.gte("1e2000")) document.getElementById("postinfi63").className = "infinistorebtn1"
	else document.getElementById("postinfi63").className = "infinistorebtnlocked"
	document.getElementById("postinfi60").innerHTML = "You gain more " + (player.tickspeedBoosts ? "Galaxy Points" : tmp.ngp3l ? "Infinity Points" : "antimatter") + " based on your galaxies." + (player.tickspeedBoosts ? "" : "<br>Currently: " + shorten(getNewB60Mult()) + "x") + "<br>Cost: " + shortenCosts(1e50) + " IP"
	document.getElementById("postinfi61").innerHTML = "g11 formula is better.<br>Cost: " + shortenCosts(new Decimal("1e450")) + " IP"
	document.getElementById("postinfi62").innerHTML = "Dimension Boosts make g13 stronger.<br>Cost: " + shortenCosts(new Decimal("1e700")) + " IP"
	document.getElementById("postinfi63").innerHTML = "Unlock 2 new rows of Galaxy Point upgrades.<br>Cost: " + shortenCosts(new Decimal("1e2000")) + " IP"
}

function INFINITYUPGRADESDisplay(){
	if (document.getElementById("preinf").style.display == "block") {
		preBreakUpgradeDisplay()
	} else if (document.getElementById("postinf").style.display == "block" && document.getElementById("breaktable").style.display == "inline-block") {
		breakInfinityUpgradeDisplay()
		if (player.galacticSacrifice) breakNGm2UpgradeColumnDisplay()
		if (player.galacticSacrifice && (player.infinityDimension3.amount.gt(0) || player.eternities > (player.aarexModifications.newGameMinusVersion? -20 : 0) || quantumed)) {
			breakNGm2UpgradeRow5Display()
		} else document.getElementById("postinfir5").style.display = "none"
		if (player.galacticSacrifice && (player.infinityDimension4.amount.gt(0) || player.eternities > (player.aarexModifications.newGameMinusVersion ? -20 : 0) || quantumed)) {
			breakNGm2UpgradeRow6Display()
		} else document.getElementById("postinfir6").style.display = "none"
	} else if (document.getElementById("singularity").style.display == "block" && document.getElementById("singularitydiv").style.display == "") {
		document.getElementById("darkMatter").textContent = shortenMoney(player.singularity.darkMatter)
		document.getElementById("darkMatterMult").textContent = shortenMoney(getDarkMatterMult())
	} else if (document.getElementById("dimtechs").style.display == "block" && document.getElementById("dimtechsdiv").style.display == "") {
		document.getElementById("darkMatterDT").textContent = shortenMoney(player.singularity.darkMatter)
		document.getElementById("nextDiscounts").textContent = shortenMoney(getNextDiscounts())
		document.getElementById("discounts").textContent = "You have gained a total of " + getFullExpansion(player.dimtechs.discounts) + " discount upgrades."
	}
}

function eternityUpgradesDisplay(){
	var eu2formula = "(x/200) ^ log4(2x)"
	if (player.boughtDims !== undefined) eu2formula = "x ^ log4(2x)"
	else if (player.achievements.includes("ngpp15")) eu2formula = "x ^ log10(x) ^ 3.75"
	document.getElementById("eter1").innerHTML = "Infinity Dimension multiplier based on unspent EP (x + 1)<br>Currently: "+shortenMoney(player.eternityPoints.plus(1))+"x<br>Cost: 5 EP"
	document.getElementById("eter2").innerHTML = "Infinity Dimension multiplier based on Eternities (" + eu2formula + ")<br>Currently: "+shortenMoney(getEU2Mult())+"x<br>Cost: 10 EP"
	document.getElementById("eter3").innerHTML = "Infinity Dimension multiplier based on "+(player.boughtDims ? "Time Shards (x/"+shortenCosts(1e12)+"+1)":"sum of Infinity Challenge times")+"<br>Currently: "+shortenMoney(getEU3Mult())+"x<br>Cost: "+shortenCosts(50e3)+" EP"
	document.getElementById("eter4").innerHTML = "Your achievement bonus affects Time Dimensions"+"<br>Cost: "+shortenCosts(1e16)+" EP"
	document.getElementById("eter5").innerHTML = "Time Dimensions gain a multiplier based on your unspent Time Theorems"+"<br>Cost: "+shortenCosts(1e40)+" EP"
	document.getElementById("eter6").innerHTML = "Time Dimensions gain a multiplier based on days played"+"<br>Cost: "+shortenCosts(1e50)+" EP"
	if (player.exdilation != undefined && player.dilation.studies.includes(1)) {
		document.getElementById("eter7").innerHTML = "Dilated time gain is boosted by antimatter<br>Currently: "+(1 + Math.log10(Math.max(1, player.money.log(10))) / 40).toFixed(3)+"x<br>Cost: "+shortenCosts(new Decimal("1e1500"))+" EP"
		document.getElementById("eter8").innerHTML = "Dilated time gain is boosted by Infinity Points<br>Currently: "+(1 + Math.log10(Math.max(1, player.infinityPoints.log(10))) / 20).toFixed(3)+"x<br>Cost: "+shortenCosts(new Decimal("1e2000"))+" EP"
		document.getElementById("eter9").innerHTML = "Dilated time gain is boosted by Eternity Points<br>Currently: "+(1 + Math.log10(Math.max(1, player.eternityPoints.log(10))) / 10).toFixed(3)+"x<br>Cost: "+shortenCosts(new Decimal("1e3000"))+" EP"
	}
}

function uponDilationDisplay(){
	let gain = getDilGain()
	let msg = "Disable dilation"
	if (player.infinityPoints.lt(Number.MAX_VALUE)||inQCModifier("ad")) {}
	else if (player.dilation.totalTachyonParticles.gt(gain)) msg += ".<br>Reach " + shortenMoney(getReqForTPGain()) + " antimatter to gain more Tachyon particles"
	else msg += " for " + shortenMoney(gain.sub(player.dilation.totalTachyonParticles)) + " Tachyon particles"
	document.getElementById("enabledilation").innerHTML = msg + "."
}

function exdilationDisplay(){
	document.getElementById("reversedilationdiv").style.display = ""
	if (canReverseDilation()) {
		document.getElementById("reversedilation").className = "dilationbtn"
		document.getElementById("reversedilation").innerHTML = "Reverse dilation."+(player.exdilation.times>0||quantumed?"<br>Gain "+shortenDimensions(getExDilationGain())+" ex-dilation":"")
	} else {
		let req = getExdilationReq()
		document.getElementById("reversedilation").className = "eternityupbtnlocked"
		document.getElementById("reversedilation").textContent = "Get "+(player.eternityPoints.lt(req.ep)?shortenCosts(new Decimal(req.ep))+" EP and ":"")+shortenCosts(req.dt)+" dilated time to reverse dilation."
	}
}

function mainDilationDisplay(){
	if (player.dilation.active) uponDilationDisplay()
	else document.getElementById("enabledilation").textContent = "Dilate time."+((player.eternityBuyer.isOn&&player.eternityBuyer.dilationMode&&!player.eternityBuyer.slowStopped&&player.eternityBuyer.dilMode=="amount"?!isNaN(player.eternityBuyer.statBeforeDilation):false) ? " " + (player.eternityBuyer.dilationPerAmount - player.eternityBuyer.statBeforeDilation) + " left before dilation." : "")
	if (player.exdilation==undefined||player.aarexModifications.ngudpV?false:player.blackhole.unl) {
		exdilationDisplay()
	} else document.getElementById("reversedilationdiv").style.display = "none"
	var fgm=getFreeGalaxyGainMult()
	document.getElementById('freeGalaxyMult').textContent = fgm == 1 ? "free galaxy" : Math.round(fgm * 10) / 10 + " free galaxies"
}

function breakEternityDisplay(){
	document.getElementById("eternalMatter").textContent = shortenDimensions(tmp.qu.breakEternity.eternalMatter)
	for (var u = 1; u < (player.ghostify.ghostlyPhotons.unl ? 11 : 8); u++) {
		document.getElementById("breakUpg" + u).className = (tmp.qu.breakEternity.upgrades.includes(u) && u != 7) ? "eternityupbtnbought" : tmp.qu.breakEternity.eternalMatter.gte(getBreakUpgCost(u)) ? "eternityupbtn" : "eternityupbtnlocked"
		if (u == 8) document.getElementById("breakUpg8Mult").textContent = (getBreakUpgMult(8) * 100 - 100).toFixed(1)
		else if (u != 7) document.getElementById("breakUpg" + u + "Mult").textContent = shortenMoney(getBreakUpgMult(u))
	}
	if (tmp.qu.bigRip.active) {
		document.getElementById("eterShortcutEM").textContent=shortenDimensions(tmp.qu.breakEternity.eternalMatter)
		document.getElementById("eterShortcutEP").textContent=shortenDimensions(player.eternityPoints)
		document.getElementById("eterShortcutTP").textContent=shortenMoney(player.dilation.tachyonParticles)
	}
}

function ETERNITYSTOREDisplay(){
	if (document.getElementById("TTbuttons").style.display == "block") updateTheoremButtons()
	if (document.getElementById("timestudies").style.display == "block" || document.getElementById("ers_timestudies").style.display == "block") updateTimeStudyButtons()
	if (document.getElementById("masterystudies").style.display == "block") updateMasteryStudyButtons()
	if (document.getElementById("eternityupgrades").style.display == "block") eternityUpgradesDisplay()
	if (document.getElementById("dilation").style.display == "block") mainDilationDisplay()
	if (document.getElementById("blackhole").style.display == "block") {
		if (document.getElementById("blackholediv").style.display == "inline-block") updateBlackhole()
		if (document.getElementById("blackholeunlock").style.display == "inline-block") {
			document.getElementById("blackholeunlock").innerHTML = "Unlock the black hole<br>Cost: " + shortenCosts(new Decimal('1e4000')) + " EP"
			document.getElementById("blackholeunlock").className = (player.eternityPoints.gte("1e4000")) ? "storebtn" : "unavailablebtn"
		}
	}
	if (document.getElementById("breakEternity").style.display == "block") {
		breakEternityDisplay()
	}
}

function updateDimensionsDisplay() {
	if (document.getElementById("dimensions").style.display == "block") {
		if (document.getElementById("antimatterdimensions").style.display == "block") dimensionTabDisplay()
		if (document.getElementById("infinitydimensions").style.display == "block") updateInfinityDimensions()
		if (document.getElementById("timedimensions").style.display == "block") updateTimeDimensions()
		if (document.getElementById("pdims").style.display == "block") paradoxDimDisplay()
		if (document.getElementById("metadimensions").style.display == "block") updateMetaDimensions()
		if (document.getElementById("emperordimensions").style.display == "block") updateEmperorDimensions()
	}
	tickspeedDisplay()
	if (document.getElementById("stats").style.display == "block" && document.getElementById("statistics").style.display == "block") STATSDisplay()
   	if (document.getElementById("infinity").style.display == "block") INFINITYUPGRADESDisplay()
	if (document.getElementById("eternitystore").style.display == "block") ETERNITYSTOREDisplay()
   	if (document.getElementById("quantumtab").style.display == "block") updateQuantumTabs()
   	if (document.getElementById("ghostify").style.display == "block") updateGhostifyTabs()
}

function replicantiDisplay() {
	if (player.replicanti.unl) {
		let replGalOver = getMaxRG() - player.replicanti.gal
		let chance = Decimal.times(tmp.rep.chance, 100)
		document.getElementById("replicantiamount").textContent = shortenDimensions(player.replicanti.amount)
		document.getElementById("replicantimult").textContent = shorten(getIDReplMult())
		
		var chanceDisplayEnding = (isChanceAffordable() && player.infinityPoints.lt(Decimal.pow(10,1e10)) ? "<br>+1% Cost: " + shortenCosts(player.replicanti.chanceCost) + " IP" : "")
		document.getElementById("replicantichance").innerHTML = "Replicate "+(tmp.rep.freq?"amount: "+shorten(tmp.rep.freq)+"x":"chance: "+getFullExpansion(chance.gt(1e12)?chance:Math.round(chance.toNumber()))+"%") + chanceDisplayEnding
		document.getElementById("replicantiinterval").innerHTML = "Interval: "+timeDisplayShort(Decimal.div(tmp.rep.interval, 100), true, 3) + (isIntervalAffordable() ? "<br>-> "+timeDisplayShort(Decimal.times(tmp.rep.interval, 9e-3), true, 3)+" Cost: "+shortenCosts(player.replicanti.intervalCost)+" IP" : "")
		var replGalName = player.replicanti.gal < 3e3 ? "Max Replicanti Galaxies" : (player.replicanti.gal < 58200 ? "Distant" : "Further") + " Replicanti Galaxies"
		var replGalCostPortion = player.infinityPoints.lt(Decimal.pow(10, 1e10)) ? "<br>+1 Cost: " + shortenCosts(getRGCost()) + " IP" : ""
		document.getElementById("replicantimax").innerHTML = replGalName + ": " + getFullExpansion(player.replicanti.gal) + (replGalOver > 1 ? "+" + getFullExpansion(replGalOver) : "") + replGalCostPortion
		document.getElementById("replicantireset").innerHTML = (!tmp.ngp3l && player.achievements.includes("ng3p67") ? "Get " : player.achievements.includes("ngpp16") ? "Divide replicanti by " + shorten(Number.MAX_VALUE) + " for" : "Reset replicanti amount for") + " 1 galaxy.<br>" + getFullExpansion(player.replicanti.galaxies) + (extraReplGalaxies ? "+" + getFullExpansion(extraReplGalaxies) : "") + " replicanti galax" + (getTotalRG() == 1 ? "y" : "ies") + " created."
		document.getElementById("replicantiapprox").innerHTML = tmp.ngp3 && player.dilation.upgrades.includes("ngpp1") && player.timestudy.studies.includes(192) && player.replicanti.amount.gte(Number.MAX_VALUE) && (!player.aarexModifications.nguspV || player.aarexModifications.nguepV) ? 
			"Replicanti increases by " + (tmp.rep.est < Math.log10(2) ? "x2.00 per " + timeDisplayShort(Math.log10(2) / tmp.rep.est * 10) : (tmp.rep.est.gte(1e4) ? shorten(tmp.rep.est) + " OoMs" : "x" + shorten(Decimal.pow(10, tmp.rep.est.toNumber()))) + " per second") + ".<br>" +
			"Replicate interval slows down by " + tmp.rep.speeds.inc.toFixed(3) + "x per " + getFullExpansion(Math.floor(tmp.rep.speeds.exp)) + " OoMs.<br>" +
			"(2x slower per " + getFullExpansion(Math.floor(tmp.rep.speeds.exp * Math.log10(2) / Math.log10(tmp.rep.speeds.inc))) + " OoMs)" :
			"Approximately "+ timeDisplay(Math.max((Math.log(Number.MAX_VALUE) - tmp.rep.ln) / tmp.rep.est.toNumber(), 0) * 10) + " Until Infinite Replicanti"

		document.getElementById("replicantichance").className = (player.infinityPoints.gte(player.replicanti.chanceCost) && isChanceAffordable()) ? "storebtn" : "unavailablebtn"
		document.getElementById("replicantiinterval").className = (player.infinityPoints.gte(player.replicanti.intervalCost) && isIntervalAffordable()) ? "storebtn" : "unavailablebtn"
		document.getElementById("replicantimax").className = (player.infinityPoints.gte(getRGCost())) ? "storebtn" : "unavailablebtn"
		document.getElementById("replicantireset").className = (canGetReplicatedGalaxy()) ? "storebtn" : "unavailablebtn"
		document.getElementById("replicantireset").style.height = (player.achievements.includes("ngpp16") && (tmp.ngp3l || !player.achievements.includes("ng3p67")) ? 90 : 70) + "px"
	} else {
		document.getElementById("replicantiunlock").innerHTML = "Unlock Replicantis<br>Cost: " + shortenCosts(player.galacticSacrifice != undefined && player.tickspeedBoosts == undefined ? 1e80 : 1e140) + " IP"
		document.getElementById("replicantiunlock").className = (player.infinityPoints.gte(player.galacticSacrifice != undefined && player.tickspeedBoosts == undefined ? 1e80 : 1e140)) ? "storebtn" : "unavailablebtn"
	}
}

function initialTimeStudyDisplay(){
	document.getElementById("11desc").textContent = "Currently: " + shortenMoney(tsMults[11]()) + "x"
	document.getElementById("32desc").textContent = "You gain " + getFullExpansion(tsMults[32]()) + "x more Infinities (based on Dimension Boosts)"
	document.getElementById("51desc").textContent = "You gain " + shortenCosts(player.aarexModifications.newGameExpVersion ? 1e30 : 1e15) + "x more IP"
	document.getElementById("71desc").textContent = "Currently: " + shortenMoney(tmp.sacPow.pow(0.25).max(1).min("1e210000")) + "x"
	document.getElementById("72desc").textContent = "Currently: " + shortenMoney(tmp.sacPow.pow(0.04).max(1).min("1e30000")) + "x"
	document.getElementById("73desc").textContent = "Currently: " + shortenMoney(tmp.sacPow.pow(0.005).max(1).min("1e1300")) + "x"
	document.getElementById("82desc").textContent = "Currently: " + shortenMoney(Decimal.pow(1.0000109, Decimal.pow(player.resets, 2)).min(player.meta==undefined?1/0:'1e80000')) + "x"
	document.getElementById("91desc").textContent = "Currently: " + shortenMoney(Decimal.pow(10, Math.min(player.thisEternity, 18000)/60)) + "x"
	document.getElementById("92desc").textContent = "Currently: " + shortenMoney(Decimal.pow(2, 600/Math.max(player.bestEternity, 20))) + "x"
	document.getElementById("93desc").textContent = "Currently: " +  shortenMoney(Decimal.pow(player.totalTickGained, 0.25).max(1)) + "x"
	document.getElementById("121desc").textContent = "Currently: " + ((253 - averageEp.dividedBy(player.epmult).dividedBy(10).min(248).max(3))/5).toFixed(1) + "x"
	document.getElementById("123desc").textContent = "Currently: " + Math.sqrt(1.39*player.thisEternity/10).toFixed(1) + "x"
	document.getElementById("141desc").textContent = "Currently: " + shortenMoney(new Decimal(1e45).dividedBy(Decimal.pow(15, Math.log(player.thisInfinityTime)*Math.pow(player.thisInfinityTime, 0.125))).max(1)) + "x"
	document.getElementById("142desc").textContent = "You gain " + shortenCosts(1e25) + "x more IP"
	document.getElementById("143desc").textContent = "Currently: " + shortenMoney(Decimal.pow(15, Math.log(player.thisInfinityTime)*Math.pow(player.thisInfinityTime, 0.125))) + "x"
	document.getElementById("151desc").textContent = shortenCosts(1e4) + "x multiplier on all Time Dimensions"
	document.getElementById("161desc").textContent = shortenCosts(Decimal.pow(10, (player.galacticSacrifice ? 6660 : 616) *  ( player.aarexModifications.newGameExpVersion ? 5 : 1))) + "x multiplier on all normal dimensions"
	document.getElementById("162desc").textContent = shortenCosts(Decimal.pow(10, (player.galacticSacrifice ? 234 : 11) * (player.aarexModifications.newGameExpVersion ? 5 : 1))) + "x multiplier on all Infinity dimensions"
	document.getElementById("192desc").textContent = "You can get beyond " + shortenMoney(Number.MAX_VALUE) + " replicantis, but the interval is increased the more you have"
	document.getElementById("193desc").textContent = "Currently: " + shortenMoney(Decimal.pow(1.03, Decimal.min(1e7, getEternitied())).min("1e13000")) + "x"
	document.getElementById("212desc").textContent = "Currently: " + ((tsMults[212]() - 1) * 100).toFixed(2) + "%"
	document.getElementById("214desc").textContent = "Currently: " + shortenMoney(((tmp.sacPow.pow(8)).min("1e46000").times(tmp.sacPow.pow(1.1)).div(tmp.sacPow)).max(1).min(new Decimal("1e125000"))) + "x"
	document.getElementById("metaCost").textContent = shortenCosts(getMetaUnlCost());
}

function eternityChallengeUnlockDisplay(){
	var ec1Mult=player.aarexModifications.newGameExpVersion?1e3:2e4
	if (player.etercreq !== 1) document.getElementById("ec1unl").innerHTML = "Eternity Challenge 1<span>Requirement: "+(ECTimesCompleted("eterc1")+1)*ec1Mult+" Eternities<span>Cost: 30 Time Theorems"
	else document.getElementById("ec1unl").innerHTML = "Eternity Challenge 1<span>Cost: 30 Time Theorems"
	if (player.etercreq !== 2) document.getElementById("ec2unl").innerHTML = "Eternity Challenge 2<span>Requirement: "+(1300+(ECTimesCompleted("eterc2")*150))+" Tickspeed upgrades gained from time dimensions<span>Cost: 35 Time Theorems"
	else document.getElementById("ec2unl").innerHTML = "Eternity Challenge 2<span>Cost: 35 Time Theorems"
	if (player.etercreq !== 3) document.getElementById("ec3unl").innerHTML = "Eternity Challenge 3<span>Requirement: "+(17300+(ECTimesCompleted("eterc3")*1250))+" 8th dimensions<span>Cost: 40 Time Theorems"
	else document.getElementById("ec3unl").innerHTML = "Eternity Challenge 3<span>Cost: 40 Time Theorems"
	if (player.etercreq !== 4) document.getElementById("ec4unl").innerHTML = "Eternity Challenge 4<span>Requirement: "+(1e8 + (ECTimesCompleted("eterc4")*5e7)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" infinities<span>Cost: 70 Time Theorems"
	else document.getElementById("ec4unl").innerHTML = "Eternity Challenge 4<span>Cost: 70 Time Theorems"
	if (player.etercreq !== 5) document.getElementById("ec5unl").innerHTML = "Eternity Challenge 5<span>Requirement: "+(160+(ECTimesCompleted("eterc5")*14))+" galaxies<span>Cost: 130 Time Theorems"
	else document.getElementById("ec5unl").innerHTML = "Eternity Challenge 5<span>Cost: 130 Time Theorems"
	if (player.etercreq !== 6) document.getElementById("ec6unl").innerHTML = "Eternity Challenge 6<span>Requirement: "+(40+(ECTimesCompleted("eterc6")*5))+" replicanti galaxies<span>Cost: 85 Time Theorems"
	else document.getElementById("ec6unl").innerHTML = "Eternity Challenge 6<span>Cost: 85 Time Theorems"
	if (player.etercreq !== 7) document.getElementById("ec7unl").innerHTML = "Eternity Challenge 7<span>Requirement: "+shortenCosts(new Decimal("1e500000").times(new Decimal("1e300000").pow(ECTimesCompleted("eterc7"))))+" antimatter <span>Cost: 115 Time Theorems"
	else document.getElementById("ec7unl").innerHTML = "Eternity Challenge 7<span>Cost: 115 Time Theorems"
	if (player.etercreq !== 8) document.getElementById("ec8unl").innerHTML = "Eternity Challenge 8<span>Requirement: "+shortenCosts(new Decimal("1e4000").times(new Decimal("1e1000").pow(ECTimesCompleted("eterc8"))))+" IP <span>Cost: 115 Time Theorems"
	else document.getElementById("ec8unl").innerHTML = "Eternity Challenge 8<span>Cost: 115 Time Theorems"
	if (player.etercreq !== 9) document.getElementById("ec9unl").innerHTML = "Eternity Challenge 9<span>Requirement: "+shortenCosts(new Decimal("1e17500").times(new Decimal("1e2000").pow(ECTimesCompleted("eterc9"))))+" infinity power<span>Cost: 415 Time Theorems"
	else document.getElementById("ec9unl").innerHTML = "Eternity Challenge 9<span>Cost: 415 Time Theorems"
	if (player.etercreq !== 10) document.getElementById("ec10unl").innerHTML = "Eternity Challenge 10<span>Requirement: "+shortenCosts(new Decimal("1e100").times(new Decimal("1e20").pow(ECTimesCompleted("eterc10"))))+" EP<span>Cost: 550 Time Theorems"
	else document.getElementById("ec10unl").innerHTML = "Eternity Challenge 10<span>Cost: 550 Time Theorems"

	document.getElementById("ec11unl").innerHTML = "Eternity Challenge 11<span>Requirement: Use only the Normal Dimension path<span>Cost: 1 Time Theorem"
	document.getElementById("ec12unl").innerHTML = "Eternity Challenge 12<span>Requirement: Use only the Time Dimension path<span>Cost: 1 Time Theorem"
}

function mainTimeStudyDisplay(){
	initialTimeStudyDisplay()
	eternityChallengeUnlockDisplay()
	document.getElementById("dilstudy1").innerHTML = "Unlock time dilation" + (player.dilation.studies.includes(1) ? "" : "<span>Requirement: 5 EC11 and EC12 completions and " + getFullExpansion(getDilationTotalTTReq()) + " total theorems")+"<span>Cost: " + getFullExpansion(5e3) + " Time Theorems"
	if (tmp.ngp3) {
		var ts232display = tmp.ts232 * 100 - 100
		document.getElementById("221desc").textContent = "Currently: "+shorten(Decimal.pow(1.0025, player.resets))+"x"
		document.getElementById("227desc").textContent = "Currently: "+shorten(Math.pow(tmp.sacPow.max(10).log10(), 10))+"x"
		document.getElementById("231desc").textContent = "Currently: "+shorten(Decimal.pow(Math.max(player.resets, 1), 0.3))+"x more power"
		document.getElementById("232desc").textContent = "Currently: "+(ts232display>=999.95?getFullExpansion(Math.floor(ts232display)):ts232display.toFixed(1))+"%"
	}
}

function ABTypeDisplay(){
	if (getEternitied() > 4) document.getElementById("togglecrunchmode").style.display = "inline-block"
	else document.getElementById("togglecrunchmode").style.display = "none"
	if (getEternitied() > 8 || player.autobuyers[10].bulkBought) document.getElementById("galaxybulk").style.display = "inline-block"
	else document.getElementById("galaxybulk").style.display = "none"
	if (getEternitied() > 99 && player.meta) document.getElementById("toggleautoetermode").style.display = "inline-block"
	else document.getElementById("toggleautoetermode").style.display = "none"
	if (getEternitied() > 99 && player.achievements.includes("ng3p52")) document.getElementById('aftereternity').style.display = "inline-block"
	else document.getElementById('aftereternity').style.display = "none"
	if (getEternitied() > 99 && player.achievements.includes("ng3p52")) document.getElementById('autoEternityTabbtn').style.display = ""
	else document.getElementById('autoEternityTabbtn').style.display = "none"
}

function infPoints2Display(){
	if (player.infinitied > 0 || player.infinityPoints.gt(0) || player.infinityUpgrades.length > 0 || getEternitied() > 0 || quantumed) document.getElementById("infinityPoints2").style.display = "inline-block"
	else document.getElementById("infinityPoints2").style.display = "none"
}

function updateChallTabDisplay(){
	if (player.postChallUnlocked > 0 || Object.keys(player.eternityChalls).length > 0 || player.eternityChallUnlocked !== 0 || quantumed) document.getElementById("challTabButtons").style.display = "table"
}

function eterPoints2Display(){
	document.getElementById("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity points."
}

function eternityBtnDisplayType(){
	document.getElementById("eternitybtn").style.display = (player.infinityPoints.gte(player.eternityChallGoal) && (player.infDimensionsUnlocked[7] || getEternitied() > 24) && (!player.dilation.active || !inQCModifier("ad"))) ? "inline-block" : "none"
}

function dimboostABTypeDisplay(){
	if (getEternitied() > 9 || player.autobuyers[9].bulkBought) document.getElementById("bulklabel").textContent = "Buy max dimboosts every X seconds:"
	else document.getElementById("bulklabel").textContent = "Bulk DimBoost Amount:"
}

function IDABDisplayCorrection(){
	if (getEternitied() > 10) {
		for (var i=1;i<getEternitied()-9 && i < 9; i++) {
			document.getElementById("infauto"+i).style.visibility = "visible"
		}
		document.getElementById("toggleallinfdims").style.visibility = "visible"
	} else {
		for (var i=1; i<9; i++) {
			document.getElementById("infauto"+i).style.visibility = "hidden"
		}
		document.getElementById("toggleallinfdims").style.visibility = "hidden"
	}
}

function replicantiShopABDisplay(){
	if (getEternitied() >= 40) document.getElementById("replauto1").style.visibility = "visible"
	else document.getElementById("replauto1").style.visibility = "hidden"
	if (getEternitied() >= 60) document.getElementById("replauto2").style.visibility = "visible"
	else document.getElementById("replauto2").style.visibility = "hidden"
	if (getEternitied() >= 80) document.getElementById("replauto3").style.visibility = "visible"
	else document.getElementById("replauto3").style.visibility = "hidden"
}

function primaryStatsDisplayResetLayers(){
	if (getEternitied() == 0 && !quantumed) document.getElementById("pasteternities").style.display = "none"
	else document.getElementById("pasteternities").style.display = "inline-block"
	if (quantumed) document.getElementById("pastquantums").style.display = "inline-block"
	else document.getElementById("pastquantums").style.display = "none"
	if (ghostified) document.getElementById("pastghostifies").style.display = "inline-block"
	else document.getElementById("pastghostifies").style.display = "none"
	document.getElementById("pastinfs").style.display = player.infinitied > 0 || getEternitied() > 0 || quantumed ? "" : "none"
	var showStats = player.challenges.length > 1 || player.infinitied > 0 || getEternitied() > 0 || quantumed ? "" : "none"
	document.getElementById("brfilter").style.display = showStats
	document.getElementById("statstabs").style.display = showStats
	var display = player.aarexModifications.hideSecretAchs?"none":""
	document.getElementById("achTabButtons").style.display=display
	document.getElementById("secretachsbtn").style.display=display
}

function ECCompletionsDisplay(){
	document.getElementById("eterc1completed").textContent = "Completed "+ECTimesCompleted("eterc1")+" times."
	document.getElementById("eterc2completed").textContent = "Completed "+ECTimesCompleted("eterc2")+" times."
	document.getElementById("eterc3completed").textContent = "Completed "+ECTimesCompleted("eterc3")+" times."
	document.getElementById("eterc4completed").textContent = "Completed "+ECTimesCompleted("eterc4")+" times."
	document.getElementById("eterc5completed").textContent = "Completed "+ECTimesCompleted("eterc5")+" times."
	document.getElementById("eterc6completed").textContent = "Completed "+ECTimesCompleted("eterc6")+" times."
	document.getElementById("eterc7completed").textContent = "Completed "+ECTimesCompleted("eterc7")+" times."
	document.getElementById("eterc8completed").textContent = "Completed "+ECTimesCompleted("eterc8")+" times."
	document.getElementById("eterc9completed").textContent = "Completed "+ECTimesCompleted("eterc9")+" times."
	document.getElementById("eterc10completed").textContent = "Completed "+ECTimesCompleted("eterc10")+" times."
	document.getElementById("eterc11completed").textContent = "Completed "+ECTimesCompleted("eterc11")+" times."
	document.getElementById("eterc12completed").textContent = "Completed "+ECTimesCompleted("eterc12")+" times."
	document.getElementById("eterc13completed").textContent = "Completed "+ECTimesCompleted("eterc13")+" times."
	document.getElementById("eterc14completed").textContent = "Completed "+ECTimesCompleted("eterc14")+" times."
}

function ECchallengePortionDisplay(){
	let ec12TimeLimit = Math.round(getEC12TimeLimit() * 10) / 100
	for (var c=1;c<15;c++) document.getElementById("eterc"+c+"goal").textContent = "Goal: "+shortenCosts(getECGoal("eterc"+c))+" IP"+(c==12?" in "+ec12TimeLimit+" second"+(ec12TimeLimit==1?"":"s")+" or less.":c==4?" in "+Math.max((16-(ECTimesCompleted("eterc4")*4)),0)+" infinities or less.":"")
}

function EC8PurchasesDisplay(){
	if (player.currentEternityChall == "eterc8") {
		document.getElementById("eterc8repl").style.display = "block"
		document.getElementById("eterc8ids").style.display = "block"
		document.getElementById("eterc8repl").textContent = "You have "+player.eterc8repl+" purchases left."
		document.getElementById("eterc8ids").textContent = "You have "+player.eterc8ids+" purchases left."
	} else {
		document.getElementById("eterc8repl").style.display = "none"
		document.getElementById("eterc8ids").style.display = "none"
	}
}

function bankedInfinityDisplay(){
	document.getElementById("infinitiedBank").style.display = (player.infinitiedBank > 0) ? "block" : "none"
	document.getElementById("infinitiedBank").textContent = "You have " + getFullExpansion(player.infinitiedBank) + " banked infinities."
	var bankedInfGain=gainBankedInf()
	document.getElementById("bankedInfGain").style.display = bankedInfGain>0 ? "block" : "none"
	document.getElementById("bankedInfGain").textContent = "You will gain " + getFullExpansion(bankedInfGain) + " banked infinities on next Eternity."
	if (player.achievements.includes("ng3p73")) updateBankedEter(true)
}

function updateNGM2RewardDisplay(){
	document.getElementById("postcngmm_1reward").innerHTML = "Reward: Infinity upgrades based on time " + (player.aarexModifications.ngmX >= 4 ? "" : "or Infinities ") + "are applied post-dilation, and make the GP formula better based on galaxies."
	document.getElementById("postcngm3_1description").innerHTML = "Multiplier per ten Dimensions is 1x, Dimension Boosts have no effect," + (player.aarexModifications.ngmX >= 4 ? " have a much lower time dimension cost limit," : "") + " and Tickspeed Boost effect softcap starts immediately."
	document.getElementById("postcngm3_1reward").innerHTML = "Reward: Tickspeed boost effect softcap is softer" + (player.aarexModifications.ngmX >= 4 ? ", remote galaxy scaling starts .5 later and triple GP per IC completion" : "") + "."
}

function updateGalaxyUpgradesDisplay(){
	var text41 = player.aarexModifications.ngmX >= 4 ? "Square g11, and tickspeed boosts multiply GP gain." : "Galaxy points boost per-10 bought Infinity Dimensions multiplier."
	document.getElementById("galaxy41").innerHTML = text41 + "<br>Cost: <span id='galcost41'></span> GP"
	var text42 = player.aarexModifications.ngmX >= 4 ? "Buff g12 and make it post dilation." : "Eternity points reduce Infinity Dimension cost multipliers."
	document.getElementById("galaxy42").innerHTML = text42 + "<br>Cost: <span id='galcost42'></span> GP"
	var text43 = player.aarexModifications.ngmX >= 4 ? "Reduce Dimension Boost cost multiplier by 1, and Dimension Boosts multiply GP gain." : "Galaxy points boost Time Dimensions."
	var curr43 = player.aarexModifications.ngmX >= 4 ? "" : "<br>Currently: <span id='galspan43'>?</span>x"
	document.getElementById("galaxy43").innerHTML = text43 + curr43 + "<br>Cost: <span id='galcost43'></span> GP"
}
