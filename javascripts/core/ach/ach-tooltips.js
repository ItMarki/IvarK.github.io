function setR1Tooltip(){
	// Row 1 (1/8)
	//r11/////
	let alot = document.getElementById("100 antimatter is a lot")
	//r13/////
	//r14/////
	//r15/////
	//r16/////
	//r17/////
	//r18/////

	//ACHIEVEMENT ROW 1 
	alot.setAttribute('ach-tooltip', "購買一個第二維度。" + (player.aarexModifications.ngmX > 3 ? "獎勵：你獲得 100x 更多時間碎片。" : ""))
}

function setR2Tooltip(){
	// Row 2 (6/8)
	let infinity = document.getElementById("To infinity!")
	//r22/////
	let ndial = document.getElementById("The 9th Dimension is a lie");
	let apocAchieve = document.getElementById("Antimatter Apocalypse");
	//r25/////
	let gal = document.getElementById("You got past The Big Wall")
	let doubleGal = document.getElementById("Double Galaxy");
	let noPointAchieve = document.getElementById("There's no point in doing that");

	//ACHIEVEMENT ROW 2
	ndial.setAttribute('ach-tooltip', "剛好有 99 個第八維度。獎勵：第八維度強 10%" + (player.tickspeedBoosts==undefined ? "。" : "，而且基於你的第八維度和時間速度提升，你獲得更多星系點數。"));
	apocAchieve.setAttribute('ach-tooltip', "達到 " + formatValue(player.options.notation, 1e80, 0, 0) + " 反物質。");
	gal.setAttribute('ach-tooltip', '購買一個反物質星系。' + (player.aarexModifications.ngmX > 3 ? "獎勵：時間維度提升時，除非你的時間維度提升多於你的維度提升，否則維度提升不會重置。" : ''));
	doubleGal.setAttribute('ach-tooltip', '購買 2 個反物質星系。' + (player.tickspeedBoosts !== undefined ? "獎勵：時間維度提升時，你的維度提升" + (player.aarexModifications.ngmX > 3 ? "和時間維度提升" : "") + "不會重置，除非你的時間速度提升比你的反物質星系的五倍減八個更多。" : '') + (player.aarexModifications.ngmX > 3 ? "你開始時會有 3 個時間維度提升。" : ""));
	noPointAchieve.setAttribute('ach-tooltip', "在有多於 " + formatValue(player.options.notation, 1e150, 0, 0) + " 第一維度的情況下購買一個。獎勵：第一維度強 10%" + (player.tickspeedBoosts == undefined ? "。" : "，而且你可以最大購買維度和時間速度提升。"));
	infinity.setAttribute('ach-tooltip', "大坍縮。獎勵：開始時有 100 反物質" + (player.galacticSacrifice ? "，而且維度價格至少低 10x。" : "。"));
}

function setR3Tooltip(){
	// Row 3 (5/8)
	let nerf = document.getElementById("I forgot to nerf that")
	//r32/////
	let lot = document.getElementById("That's a lot of infinites");
	let didnt = document.getElementById("You didn't need it anyway")
	//r35/////
	let claustrophobic = document.getElementById("Claustrophobic");
	let fast = document.getElementById("That's fast!");
	//r38/////

	//ACHIEVEMENT ROW 3
	claustrophobic.setAttribute('ach-tooltip', "在只有 1 反物質星系的情況下大坍縮。獎勵：將開始時的時間速度加快 2%" + (player.galacticSacrifice && player.tickspeedBoosts == undefined ? "，而且大坍縮時，你會保留你的星系升級" : "") + (player.aarexModifications.ngmX >= 4 ? "。時間維度提升不會重置任何東西，而且你可以在 " + shortenMoney(Number.MAX_VALUE) +" 反物質外購買時間維度。" : "") + "。" );
	nerf.setAttribute('ach-tooltip',"將第一維度的倍數超過 " + shortenCosts(1e31) + "。獎勵：第一維度強 5%。")
	didnt.setAttribute('ach-tooltip',"在沒有第八維度的情況下大坍縮。第一至第七維度強 2" + (player.galacticSacrifice ? "x" : "%") + "。")
	fast.setAttribute('ach-tooltip', "在 2 小時內大坍縮。獎勵：開始時有 " + shortenCosts(1e3) + " 反物質" + (player.galacticSacrifice ? "，而且基於你最快的無限，星系點數獲得一個加成（5 小時 / x，10x 軟限制）。" : "。"));
	lot.setAttribute('ach-tooltip', "無限 10 次。" + (player.galacticSacrifice ? " 獎勵：" + (player.tickspeedBoosts == undefined ? "基於無限次數，開始無限時會有一些星系點數（x^2/100）。" : "無限時保留星系升級。") : ""));
}

function setR4Tooltip(){
	// Row 4 (6/8)
	let cancer = document.getElementById("Spreading Cancer");
	let sanic = document.getElementById("Supersanic")
	let zero = document.getElementById("Zero Deaths");
	//r44/////
	let potato = document.getElementById("Faster than a potato")
	let dimensional = document.getElementById("Multidimensional")
	//r47/////
	let anti = document.getElementById("AntiChallenged")

	//ACHIEVEMENT ROW 4
	sanic.setAttribute('ach-tooltip', "達到 " + formatValue(player.options.notation, 1e63, 0, 0) + " 反物質" + (player.aarexModifications.ngmX >= 4 ? "並在 " + formatValue(player.options.notation, 1e666, 0, 0) + " 反物質解鎖新星系升級" : "") + "。")
	cancer.setAttribute('ach-tooltip', "在使用 'Cancer' 標記法的情況下總共購買" + (!player.aarexModifications.newGameMinusVersion ? "十個" : " 10,000 ") + "星系。"+(player.galacticSacrifice && player.tickspeedBoosts==undefined?"獎勵：基於使用 'Cancer' 標記法時購買的星系，無限點數獲得一個加成。。":""))
	zero.setAttribute('ach-tooltip',"在挑戰裡，在沒有維度跳躍、提升和星系的情況下大坍縮。獎勵第一至第四維度強 25%"+(player.galacticSacrifice && player.tickspeedBoosts == undefined ? "，而且你獲得 1.25x 更多無限點數" : "") + (player.aarexModifications.ngmX >= 4 ? "，而且基於你的星系點數，你自動生產更多星系點數。" : "."))
	potato.setAttribute('ach-tooltip', "將時間速度超過 " + formatValue(player.options.notation, 1e29, 0, 0) + " 每秒。獎勵：將開始時的時間速度加快 2%。");
	dimensional.setAttribute('ach-tooltip', "除了第八維度外，將所有反物質維度達到 " + formatValue(player.options.notation, 1e12, 0, 0) + " 個。");
	anti.setAttribute('ach-tooltip', "完成所有挑戰。獎勵：所有反物質維度強 10%"+(player.galacticSacrifice && player.tickspeedBoosts==undefined?"，而且基於你的維度價格減少，時間速度價格會減少。" : "。"))
}

function setR5Tooltip(){
	// Row 5 (4/8)
	let limitBreak = document.getElementById("Limit Break")
	//r52/////
	//r53/////
	//r54/////
	let forever = document.getElementById("Forever isn't that long")
	let many = document.getElementById("Many Deaths")
	//r57/////
	let is = document.getElementById("Is this hell?")

	//ACHIEVEMENT ROW 5
	forever.setAttribute('ach-tooltip', "在 1 分鐘內大坍縮。獎勵：開始時有 "+shortenCosts(1e10)+" 反物質" + (player.galacticSacrifice && player.tickspeedBoosts == undefined ? "，而且基於你最佳的無限時間，你獲得更多無限點數。" : "。"))
	many.setAttribute('ach-tooltip', "在 3 分鐘內完成第二維度自動購買器挑戰。獎勵：在無限的頭 3 分鐘裡，所有反物質維度更強" + (player.tickspeedBoosts == undefined ? "。" : "，而且你每秒獲得星系犧牲時獲得的星系點數的 1%。"));
	is.setAttribute('ach-tooltip', "在 3 分鐘內完成時間速度升級自動購買器挑戰。獎勵：每十個維度的加成" + (player.tickspeedBoosts != undefined ? "隨着你時間速度升級自動購買器挑戰的最佳時間而增加。" : player.galacticSacrifice ? "變為自己的 1.0666 次方·。":"強 1%。"))
	limitBreak.setAttribute('ach-tooltip', "打破無限。"+(player.galacticSacrifice&&player.tickspeedBoosts==undefined?"獎勵：基於你的星系，你獲得更多無限點數。":""))
}

function setR6Tooltip(){
	// Row 6 (6/8)
	//r61/////
	let oh = document.getElementById("Oh hey, you're still here")
	let begin = document.getElementById("A new beginning.")
	let mil = document.getElementById("1 million is a lot")
	//r65/////
	let potato2 = document.getElementById("Faster than a squared potato")
	let infchall = document.getElementById("Infinitely Challenging")
	let right = document.getElementById("You did this again just for the achievement right?")

	//ACHIEVEMENT ROW 6
	potato2.setAttribute('ach-tooltip', "將時間速度超過 " + formatValue(player.options.notation, 1e58, 0, 0) + " 每秒。獎勵：將開始時的時間速度加快 2%。");
	oh.setAttribute('ach-tooltip', "達到每分鐘 " + shortenCosts(1e8) + " 無限點數。"+(player.galacticSacrifice&&player.tickspeedBoosts==undefined?"獎勵：基於你的無限點數的對數，你獲得更多星系點數。":""))
	mil.setAttribute('ach-tooltip',"達到 " + shortenCosts(1e6) + " 無限力量。" + (player.galacticSacrifice ? " 獎勵：第一維度強 " + shortenCosts(1e6) + " 倍":"") + (player.aarexModifications.ngmX >= 4 ? "，而且每一個無限挑戰將星系升級 32 加強 2%。" : "。"))
	right.setAttribute('ach-tooltip',"在 10 秒內完成第三位度自動購買器挑戰。獎勵：第一維度強 5"+(player.galacticSacrifice?"x":"0%")+"。")
	infchall.setAttribute('ach-tooltip', "完成一個無限挑戰。"+(player.galacticSacrifice?"獎勵：基於完成的無限挑戰，星系和 "+(player.tickspeedBoosts === undefined ? "星系升級 11 " : "時間速度提升") + "更強。":""))
	begin.setAttribute('ach-tooltip', "開始生產無限力量。" + (player.aarexModifications.ngmX >= 4 ? "獎勵：每一個星系升級將星系升級 32 加強 1%。" : ""))
}

function setR7Tooltip(){
	// Row 7 (5/8)
	let not = document.getElementById("ERROR 909: Dimension not found")
	let cant = document.getElementById("Can't hold all these infinities")
	//r73/////
	//r74/////
	let newDim = document.getElementById("NEW DIMENSIONS???")
	//r76/////
	let tables = document.getElementById("How the antitables have turned")
	let blink = document.getElementById("Blink of an eye")

	//ACHIEVEMENT ROW 7
	not.setAttribute('ach-tooltip',"在星系自動購買器挑戰裡，在沒有維度提升、跳躍和星系的情況下，只用一個第一維度大坍縮。獎勵：第一維度強 " + (player.galacticSacrifice ? 909 : 3) + " 倍" + (player.aarexModifications.ngmX >= 4 ? "，而且基於無限次數，更貴的打破無限升級更強。" : "") + "。")
	blink.setAttribute('ach-tooltip', "在 200 毫秒內大坍縮。獎勵：開始時有 " + formatValue(player.options.notation, 2e25, 0, 0) + " 反物質，而且在無限的頭 300 毫秒裡，所有發我下我的更強。");
	cant.setAttribute('ach-tooltip', "將所有維度倍數超過 "+shortenCosts(1e308)+"。獎勵：所有反物質維度強 10"+(player.galacticSacrifice?"x":"%")+"。")
	newDim.setAttribute('ach-tooltip', "解鎖第四無限維度。"+(player.boughtDims?"":"獎勵：你的成就加強影響無限維度。"))
	tables.setAttribute('ach-tooltip', "將第八維度的倍數變為最高，第七維度的倍數變為第二高等等。獎勵：基於它們的級數，每一個維度獲得一個加成（第八維度有 8"+(player.galacticSacrifice?"0":"")+"% 的加成，第七維度有 7"+(player.galacticSacrifice?"0":"")+"% 的加成等等。）")
}

function setR8Tooltip(){
	// Row 8 (5/8)
	let hevipelledidnothing = document.getElementById("Hevipelle did nothing wrong")
	//r82/////
	//r83/////
	let spare = document.getElementById("I got a few to spare")
	let IPBelongs = document.getElementById("All your IP are belong to us")
	//r86/////
	let twomillion = document.getElementById("2 Million Infinities")
	let reference = document.getElementById("Yet another infinity reference")

	//ACHIEVEMENT ROW 8
	IPBelongs.setAttribute('ach-tooltip', "大坍縮並獲得 "+shortenCosts(1e150)+" 無限點數。" + (!player.aarexModifications.newGameMinusVersion ? "獎勵：你獲得 4x 更多無限點數。" : ""))
	reference.setAttribute('ach-tooltip', "在一次犧牲裡獲得 "+shortenDimensions(Number.MAX_VALUE)+"x 加成。獎勵：犧牲更強。")
	spare.setAttribute('ach-tooltip', "達到 " +formatValue(player.options.notation, new Decimal("1e35000"), 0, 0)+" 反物質。獎勵：你未花費的反物質越多，反物質維度越強。");
	twomillion.setAttribute('ach-tooltip', "達到 2,000,000 無限次數。獎勵：多於 5 秒長的無限給 250 無限次數" + (player.galacticSacrifice ? "，而且每一個大坍縮後的加成使大坍縮的無限次數多 249 個。" : "") + "。")
	hevipelledidnothing.setAttribute('ach-tooltip', "在 10 秒內完成無限挑戰 " + (player.galacticSacrifice ? (player.tickspeedBoosts != undefined ? 13 : 7 ) : 5) + "。" + (player.galacticSacrifice == undefined ? "" : "獎勵：在永恆挑戰外，星系升級 13 的效果更強。"))
}

function setR9Tooltip(){
	// Row 9 (7/8)
	let speed = document.getElementById("Ludicrous Speed")
	let speed2 = document.getElementById("I brake for nobody")
	let overdrive = document.getElementById("MAXIMUM OVERDRIVE")
	let minute = document.getElementById("Minute of infinity")
	let isthissafe = document.getElementById("Is this safe?")
	//r96/////
	let hell = document.getElementById("Yes. This is hell.")
	let zerodeg = document.getElementById("0 degrees from infinity")

	//ACHIEVEMENT ROW 9
	speed.setAttribute('ach-tooltip', "在 2 秒內大坍縮並獲得 "+shortenCosts(1e200)+" 無限點數。獎勵：在無限的頭 5 秒裡，所有反物質維度大幅增強。")
	speed2.setAttribute('ach-tooltip', "在 20 秒內大坍縮並獲得 "+shortenCosts(1e250)+" 無限點數。在無限的頭 60 秒裡，所有反物質維度大幅增強。")
	overdrive.setAttribute('ach-tooltip', "在達到每分鐘 " + shortenCosts(1e300) + " 無限點數的情況下大坍縮。獎勵：你獲得 4x 更多無限點數。")
	minute.setAttribute('ach-tooltip', "達到 " + shortenCosts(1e260) + " 無限力量。獎勵：無限力量的獲得量增加兩倍。")
	hell.setAttribute('ach-tooltip', "將無限點數的時間的總和低於 6.66 秒。" + (player.boughtDims ? "獎勵：犧牲再次稍微更強。" : ""))
	zerodeg.setAttribute('ach-tooltip', "解鎖第八無限維度。"+(player.boughtDims?"獎勵：反物質維度獲得等同於第八無限維度數量的加成。":"") + (player.tickspeedBoosts != undefined ? "獎勵：每一個複製器星系在 'Is this safe' 的獎勵裡計兩次。" : ""))
	isthissafe.setAttribute('ach-tooltip', "在 30 分鐘內達到無限複製器。獎勵：無限不會重置你的複製器數量" + (player.tickspeedBoosts != undefined ? "，而且每一個複製器星系將你的星系點數獲得量乘以第八維度的數量。如果數量多於 5000 個，每一個複製器星系將無限點數乘以第八維度的數量的平方" : "") + "。")
}

function setR10Tooltip(){
	// Row 10 (6/8)
	let costco = document.getElementById("Costco sells dimboosts now")
	let mile = document.getElementById("This mile took an Eternity")
	//r103/////
	//r104/////
	let inftime = document.getElementById("Infinite time")
	let swarm = document.getElementById("The swarm")
	let guide = document.getElementById("Do you really need a guide for this?")
	let nine = document.getElementById("We could afford 9")

	//ACHIEVEMENT ROW 10
	costco.setAttribute('ach-tooltip', "一次批量購買 750 個維度提升。獎勵：維度提升" + (player.boughtDims?"隨着永恆點數而變得更便宜":"對反物質維度的效果強 1%") + (player.tickspeedBoosts != undefined ? "，而且星系升級 13 受星系的立方根影響" : "") + "。")
	mile.setAttribute('ach-tooltip', "獲得 "+(tmp.ngp3 ? " 100 永恆次數里程碑。" : "所有永恆里程碑。"))
	swarm.setAttribute('ach-tooltip', "在本次無限的頭 15 秒裡達到 10 個複製器星系。" + (player.boughtDims ? "獎勵：解鎖複製器星系效果的控制，而且複製機率和間隔沒有限制。" : ""))
	inftime.setAttribute('ach-tooltip', player.boughtDims ? "在不購買第一至第七維度的情況下永恆。獎勵：基於第八維度的八次方根，時間維度更強。" : "在一次永恆裡從時間維度獲得 308 個時間速度升級。獎勵：時間速度對時間維度的效果更強。")
	guide.setAttribute('ach-tooltip', player.boughtDims ? "達到 " + shortenCosts(new Decimal("1e1000000")) + " 複製器。獎勵：複製器越多，複製速度越快。" : "在有少於 10 個無限次數的情況下永恆。")
	nine.setAttribute('ach-tooltip', "在剛好有 9 複製器的情況下永恆。" + (player.boughtDims ? "獎勵：複製器對無限維度的效果強 9%（在時間研究後）。" : ""))
}

function setR11Tooltip(){
	// Row 11 (3/8)
	let dawg = document.getElementById("Yo dawg, I heard you liked infinities...")
	//r112/////
	//r113/////
	//r114/////
	//r115/////
	//r116/////
	let nobodygottime = document.getElementById("8 nobody got time for that")
	let over9000 = document.getElementById("IT'S OVER 9000")

	//ACHIEVEMENT ROW 11
	over9000.setAttribute('ach-tooltip', "將總犧牲加成達到 "+shortenCosts(new Decimal("1e9000"))+"。獎勵：犧牲不會重置你的維度。")
	dawg.setAttribute('ach-tooltip', "在你過去的 10 次無限裡，將所有無限的無限點數比前一個至少高 "+shortenMoney(Number.MAX_VALUE)+" 倍。獎勵：購買維度提升或星系時，你的反物質不會重置。")
	nobodygottime.setAttribute('ach-tooltip', "在只購買第八反物質維度的情況下永恆。" + (player.galacticSacrifice == undefined ? "" : "獎勵：基於維度提升和星系升級 13 的效果的平方根，星系升級 13 更強。"))
}

function setR12Tooltip(){
	// Row 12 (7/8)
	let infiniteIP = document.getElementById("Can you get infinite IP?")
	//r122/////
	let fiveMore = document.getElementById("5 more eternities until the update")
	let newI = document.getElementById("Eternities are the new infinity")
	let eatass = document.getElementById("Like feasting on a behind")
	let minaj = document.getElementById("Popular music")
	let layer = document.getElementById("But I wanted another prestige layer...")
	let fkoff = document.getElementById("What do I have to do to get rid of you")

	//ACHIEVEMENT ROW 12
	infiniteIP.setAttribute('ach-tooltip', "達到 "+shortenCosts(new Decimal("1e30008"))+" 無限點數。" + (player.galacticSacrifice == undefined || (player.tickspeedBoosts != undefined) ? "" : "獎勵：你的總星系加強星系點數獲得量。"))
	fiveMore.setAttribute('ach-tooltip', "完成 50 個不同的永恆挑戰等級。" + (player.galacticSacrifice !== undefined ? "獎勵：基於星系升級 11 的加成，無限維度更便宜。" : ""))
	newI.setAttribute('ach-tooltip', "在 200 毫秒內永恆。" + (player.galacticSacrifice !== undefined ? "獎勵：基於一個特定的數值（~43 星系），維度提升對星系點數獲得量的效果更強，而且基於在永恆挑戰裡的最快永恆時間，永恆升級 13 更強。" : "")) // by how much?
	eatass.setAttribute('ach-tooltip', "在沒有無限和第一維度的情況下 "+shortenCosts(1e100)+" 無限點數。獎勵：基於在本次無限的時間，你獲得更多無限點數。")
	layer.setAttribute('ach-tooltip', "達到 "+shortenMoney(Number.MAX_VALUE)+" 無限點數。" + (player.galacticSacrifice !== undefined ? "獎勵：星系對星系點數獲得量的加成更強。" : "")) // by how much?
	fkoff.setAttribute('ach-tooltip', "在沒有時間研究的情況下達到  "+shortenCosts(new Decimal("1e22000"))+" 無限點數。獎勵：基於已購買的時間研究的數量，時間維度更強。")
	minaj.setAttribute('ach-tooltip', "將複製器星系的數量超過反物質星系的數量的 180 倍。獎勵：複製器星系將你的複製器除以 "+shortenMoney(Number.MAX_VALUE)+"，而不是將它們重置到 1。")
}

function setR13Tooltip(){
	// Row 13 (5/8)
	//r131/////
	//r132/////
	let infstuff = document.getElementById("I never liked this infinity stuff anyway")
	let when = document.getElementById("When will it be enough?")
	let potato3 = document.getElementById("Faster than a potato^286078")
	//r136/////
	let thinking = document.getElementById("Now you're thinking with dilation!")
	let thisis = document.getElementById("This is what I have to do to get rid of you.")

	let thisisReward = [] // for the achievement "This is what I have to do to get rid of you."
	if (!tmp.ngp3l) {
		if (player.galacticSacrifice!==undefined) thisisReward.push("g23 is more effective based on your best IP in dilation")
		if (tmp.newNGP3E) thisisReward.push("You gain 3x more DT while you produce less than "+shortenCosts(1e100)+" DT/second")
	}
	thisisReward = wordizeList(thisisReward, true)

	//ACHIEVEMENT ROW 13
	potato3.setAttribute('ach-tooltip', "將時間速度超過 "+shortenCosts(new Decimal("1e8296262"))+" 每秒。" + (player.galacticSacrifice !== undefined ? "獎勵：基於一個特定的數值（~663 星系），星系對星系點數獲得量的加成更強。" : ""))
	infstuff.setAttribute('ach-tooltip', "在不購買無限維度和無限點數倍數升級的情況下達到 "+shortenCosts(new Decimal("1e140000"))+" 無限點數。獎勵：開始永恆時，所有無限挑戰會解鎖並完成" + (player.meta ? "，而且無限點數受膨脹時間^(1/4) 受影響。" : "。"))
	when.setAttribute('ach-tooltip', "達到 "+shortenCosts( new Decimal(tmp.ngex?"1e15000":"1e20000"))+" 複製器。獎勵：如果複製器少於 " + shortenMoney(Number.MAX_VALUE) + "，複製速度快 2 倍。")
	thinking.setAttribute('ach-tooltip', "膨脹時間時，在 1 分鐘內永恆並獲得 " + shortenCosts( new Decimal("1e600")) + " 永恆點數。" + (tmp.ngp3l ? "" : "獎勵：基於複製器，你獲得更多膨脹時間。"))
	thisis.setAttribute('ach-tooltip', "膨脹時間時，在沒有時間研究的情況下達到 "+shortenCosts(new Decimal('1e20000'))+" 無限點數。"+(thisisReward != "" ? "獎勵：" + thisisReward + "。" : ""))
}

function setR13p5Tooltip(){
	// Row 13.5 (NGUD) (3/6)
	//ngud11/////
	let stillamil = document.getElementById("1 million is still a lot")
	//ngud13/////
	let out = document.getElementById("Finally I'm out of that channel")
	//ngud16/////
	let ridNGud = document.getElementById("I already got rid of you.")

	//NGUD ACHIEVEMENT ROW (13.5)
	stillamil.setAttribute('ach-tooltip', "達到 "+shortenCosts(1e6)+" 黑洞力量。")
	out.setAttribute('ach-tooltip',"達到 "+shortenCosts(1e5)+" 後膨脹。" + (player.aarexModifications.nguspV !== undefined ? " Reward: You can equally distribute ex-dilation to all repeatable dilation upgrades." : ""))
	ridNGud.setAttribute('ach-tooltip', "膨脹時間時，在沒有時間研究和膨脹升級的情況下達到 "+shortenCosts(new Decimal("1e20000"))+" 無限點數。")
}

function setR14Tooltip(){
	// Row 14 (4/8)
	//ngpp11/////
	//ngpp12/////
	let onlywar = document.getElementById("In the grim darkness of the far endgame")
	//ngpp14/////
	let thecap = document.getElementById("The cap is a million, not a trillion")
	let neverenough = document.getElementById("It will never be enough")
	//ngpp17/////
	let harmony = document.getElementById("Universal harmony")

	let onlywarReward = [] // for the achievement "In the grim darkness of the far endgame"
	if (!tmp.ngp3l && (tmp.ngp3 || tmp.newNGP3E)) onlywarReward.push("You get 2x more DT")
	if (player.aarexModifications.nguspV !== undefined) onlywarReward.push("you can auto-buy Dilation upgrades every second if you have at least " + shortenMoney(new Decimal('1e40000')) + " EP")
	onlywarReward = wordizeList(onlywarReward, true)

	//ACHIEVEMENT ROW 14 (NG++)
	onlywar.setAttribute('ach-tooltip', "達到 "+shortenMoney(new Decimal('1e40000'))+" 永恆點數。"+(onlywarReward!=""?"獎勵：" + onlywarReward + ".":""))
	thecap.setAttribute('ach-tooltip', "達到 "+shortenDimensions(1e12)+" 永恆次數。獎勵：第二永恆升級使用一個更好的公式。")
	neverenough.setAttribute('ach-tooltip', "達到 "+shortenCosts(new Decimal("1e100000"))+" 複製器。獎勵：你可以購買最大量的複製器星系。")
	harmony.setAttribute('ach-tooltip', player.meta?"至少有 700 個反物質星系、複製器星系和免費膨脹星系、獎勵：星系強 0.1%。":"將反物質星系、複製器星系和免費星系的數量相同（至少 300）。")
}

function setR15Tooltip(){
	// Row 15 (ng3p1) (5/8)
	let notenough = document.getElementById("I don't have enough fuel!")
	//ng3p12/////
	let hadron = document.getElementById("Hadronization")
	//ng3p14/////
	//ng3p15/////
	let old = document.getElementById("Old age")
	let rid = document.getElementById("I already got rid of you...")
	let winner = document.getElementById("And the winner is...")

	//ACHIEVEMENT ROW 15
	notenough.setAttribute('ach-tooltip', "達到 " + shorten(Number.MAX_VALUE) + " 元反物質。" + (tmp.ngp3l ? "" : "獎勵：基於你的反物質星系，你生產更多膨脹時間。基於你的複製器星系，你獲得更多超光速粒子。"))
	hadron.setAttribute('ach-tooltip', "有有色夸克但沒有色荷。" + (tmp.ngp3l ? "" : "獎勵：量子價值加強所有元維度。"))
	old.setAttribute('ach-tooltip', "達到 " + shortenCosts(getOldAgeRequirement()) + " 反物質。" + (tmp.ngp3l ? "":"獎勵：基於總反物質，第一元維度更強。") )
	rid.setAttribute('ach-tooltip', "膨脹時間時，在沒有時間研究和電子的情況下達到 " + shortenCosts(new Decimal("1e400000")) + " 無限點數。獎勵：基於你最大量的超光速粒子生成時間定理。")
	winner.setAttribute('ach-tooltip', "在 30 秒內量子。" + (tmp.ngp3l ? "" : "獎勵：你的永恆點數使你獲得更多夸克。"))
}

function setR16Tooltip(){
	// Row 16 (ng3p2) (5/8)
	let special = document.getElementById("Special Relativity")
	let squared = document.getElementById("We are not going squared.")
	//ng3p23/////
	let memories = document.getElementById("Old memories come true")
	//ng3p25/////
	let morals = document.getElementById("Infinity Morals")
	//ng3p27/////
	let seriously = document.getElementById("Seriously, I already got rid of you.")

	//ACHIEVEMENT ROW 16
	special.setAttribute('ach-tooltip', "在 5 秒內量子。" + (tmp.ngp3l ? "" : "獎勵：如果你至少有 25 永恆次數，你開始時解鎖所有無限維度。"))
	memories.setAttribute('ach-tooltip', "在本次量子裡，在沒有第五至第八元維度或多於 4 個維度提升的情況下達到 " + shortenCosts(new Decimal("1e1700")) + " 元反物質。"  + (tmp.ngp3l ? "" : "獎勵：基於你的元維度提升，4 紅綠膠子升級更強。"))
	squared.setAttribute('ach-tooltip', "在剛好有 8 個元維度提升的情況下達到 "+shortenCosts(new Decimal("1e1500"))+" 元反物質。" + (tmp.ngp3l?"":"獎勵：基於你的第一元維度，第八元維度更強。"))
	morals.setAttribute('ach-tooltip', "在沒有元維度提升的情況下量子。" + (tmp.ngp3l ? "" : "獎勵：元維度提升稍微影響自己。"))
	seriously.setAttribute('ach-tooltip', "在第二量子挑戰和時間膨脹裡，在沒有時間研究的情況下達到 " + shortenCosts(new Decimal("1e354000")) + " 無限點數。" + (tmp.ngp3l ? "" : "獎勵：永恆點數對夸克獲得量的加成強 1%。"))
}

function setQSRTooltip(){
	// Quantum Speedruns (3/28)
	let tfms = document.getElementById("speedrunMilestone18")
	let tms = document.getElementById("speedrunMilestone19")
	let tfms2 = document.getElementById("speedrunMilestone22")

	//QUANTUM SPEEDRUNS
	tfms.setAttribute('ach-tooltip', "獎勵：開始時有 " + shortenCosts(1e13) + " 永恆次數。")
	tms.setAttribute('ach-tooltip', "獎勵：開始時有 " + shortenCosts(1e25) + " 元反物質。")
	tfms2.setAttribute('ach-tooltip', "獎勵：開始時有 " + shortenCosts(1e100) + " 膨脹時間，而且膨脹時間只在量子時重置。")
}

function setR17Tooltip(){
	// Row 17 (ng3p3) (6/8)
	let internal = document.getElementById("ERROR 500: INTERNAL DIMENSION ERROR")
	let truth = document.getElementById("The truth of anti-challenged")
	let noparadox = document.getElementById("Never make paradoxes!")
	//ng3p34/////
	//ng3p35/////
	let cantGet = document.getElementById("I can’t get my multipliers higher!")
	let noDil = document.getElementById("No dilation means no production.")
	let dontWant = document.getElementById("I don't want you to live anymore.")

	//ACHIEVEMENT ROW 17
	internal.setAttribute('ach-tooltip', "在沒有第二元維度和元維度提升的情況下達到 " + shortenCosts(new Decimal("1e333")) + " 元反物質。" + (tmp.ngp3l?"":"獎勵：基於元反物質，第一元維度更強。") )
	truth.setAttribute('ach-tooltip', "在沒有完成任何配對挑戰的情況下達到 " + shortenCosts(Decimal.pow(10, 7.88e13)) + " 反物質。")
	cantGet.setAttribute('ach-tooltip', "在第十一永恆挑戰裡達到 " + shortenCosts(Decimal.pow(10, 6.2e11)) + " 反物質。")
	noDil.setAttribute('ach-tooltip', "在沒有超光速粒子的情況下達到 " + shortenCosts(Decimal.pow(10, 2e6)) + " 複製器。獎勵：開始量子時，你的超光速粒子數量是你最大量的超光速粒子的平方根。")
	dontWant.setAttribute('ach-tooltip', "在你本次永恆，第二量子挑戰和時間膨脹裡，在沒有時間研究和第一維度的情況下達到 " + shorten(Decimal.pow(Number.MAX_VALUE, 1000)) + " 無限點數。")
	noparadox.setAttribute('ach-tooltip', "在沒有膨脹時間的情況下量子。" + (tmp.ngp3l ? "" : "獎勵：你最佳的量子挑戰時間的總和加強夸克獲得量。"))
}

function setR18Tooltip(){
	// Row 18 (ng3p4) (7/8)
	let notrelative = document.getElementById("Time is not relative")
	let error404 = document.getElementById("ERROR 404: DIMENSIONS NOT FOUND")
	let ie = document.getElementById("Impossible expectations")
	let wasted = document.getElementById("Studies are wasted")
	let protonsDecay = document.getElementById("Do protons decay?")
	//ng3p46/////
	let stop = document.getElementById("Stop blocking me!")
	let dying = document.getElementById("Are you currently dying?")

	//ACHIEVEMENT ROW 18
	notrelative.setAttribute('ach-tooltip', "在不獲得超光速粒子的情況下達到 " + shorten(Decimal.pow(10, 411))+" 膨脹時間。" + (tmp.ngp3l ? "" : "獎勵：基於納米場獎勵的數量，你獲得更多膨脹時間。"))
	error404.setAttribute('ach-tooltip', "在至少有 2 個普通星系並只有所有維度種類的第一維度的情況下達到 " + shorten(Decimal.pow(10, 1.6e12))+" 反物質。")
	ie.setAttribute('ach-tooltip', "在第六和第八量子挑戰的配對挑戰裡達到 " + shorten(Decimal.pow(10, 8e6)) + " 反物質。" + (tmp.ngp3l ? "" : "獎勵：如果你有第八勇敢里程碑，每秒自動購買夸克的維度的加成。"))
	wasted.setAttribute('ach-tooltip', "在沒有時間定理生產，保留之前的時間定理以及重置研究的情況下達到 " + shorten(1.1e7) + " 時間定理。獎勵：如果你有少於 1 小時的時間定理生產的數量，你獲得時間定理的速度快 10x。")
	protonsDecay.setAttribute('ach-tooltip', "解鎖衰變之樹。" + (!tmp.ngp3l ? "獎勵：在量子挑戰外，量子時，你會保留前子力量的 2/3。" : ""))
	stop.setAttribute('ach-tooltip', "將複製器重置需求達到 " + shorten(Decimal.pow(10, 1.25e7)) + "。獎勵：手動獲得一個普通複製體不會重置你的複製器，而且它可以自動進行。")
	dying.setAttribute('ach-tooltip', "在第六和第八量子挑戰的配對挑戰和時間膨脹裡，在沒有時間研究的情況下達到 " + shorten(Decimal.pow(10, 2.75e5)) + " 無限點數。" + (tmp.ngp3l ? "" : "獎勵：基於你的元維度提升，分支更快。"))
}

function setR19Tooltip(){
	// Row 19 (ng3p5) (5/8)
	//ng3p51/////
	//ng3p52/////
	let gofast = document.getElementById("Gonna go fast")
	//ng3p54/////
	let timeBreak = document.getElementById("Time Breaker")
	let immunity = document.getElementById("Time Immunity")
	let notSmart = document.getElementById("You're not really smart.")
	let soLife = document.getElementById("And so your life?")

	//ACHIEVEMENT ROW 19
	gofast.setAttribute('ach-tooltip', "在大撕裂裡，首先達到 "+shorten(Decimal.pow(10, 1185))+" 永恆點數，然後通過取消膨脹將你的永恆點數變為它的平方。" + (tmp.ngp3l ? "" : "獎勵：空間碎片加強夸克獲得量。"))
	immunity.setAttribute('ach-tooltip', "在第七永恆挑戰和大撕裂裡，只用一個反物質星系達到 " + shorten(Decimal.pow(10, 8e7)) + " 反物質。" + (tmp.ngp3l ? "" : "獎勵：'Infinite Time' 的獎勵強 3%。"))
	notSmart.setAttribute('ach-tooltip', "在大撕裂裡，在沒有時間研究 11 的情況下達到 "+shorten(1e215)+" 時間碎片。" + (tmp.ngp3l ? "" : "獎勵：基於時間碎片，元維度更強。"))
	timeBreak.setAttribute('ach-tooltip', "打破永恆。獎勵：星系不會重置維度提升" + (!tmp.ngp3l ? "，而且量子挑戰不需要電子" : "") + "。")
	soLife.setAttribute('ach-tooltip', "在大撕裂和時間膨脹裡，在不購買永恆點數倍數升級和時間研究的情況下達到 " + shortenCosts(Decimal.pow(10, 3.5e5)) + " 無限點數。" + (tmp.ngp3l ? "" : "獎勵：將幽靈粒子的獲得量變為它的平方，但是它的硬限制為 " + shortenCosts(1e10) + "x，而且如果你有多於 " + shortenCosts(1e60) + " 幽靈粒子，硬限制更低。"))
}

function setR20Tooltip(){
	// Row 20 (ng3p6) (7/8)
	let keeheehee = document.getElementById("Kee-hee-hee!")
	let finite = document.getElementById("Finite Time")
	//ng3p63/////
	let really = document.getElementById("Really?")
	let grind = document.getElementById("But I don't want to grind!")
	let oppose = document.getElementById("I rather oppose the theory of everything")
	let willenough = document.getElementById("Will it be enough?")
	let pls = document.getElementById("Please answer me why you are dying.")

	let willenoughReward = [] // for the achievement "Will it be enough?"
	if (!tmp.ngp3l) {
		willenoughReward.push("replicated galaxies doesn't divide replicantis")
		willenoughReward.push("you keep all your replicated galaxies on Infinity")
		willenoughReward.push("keep all your replicanti upgrades on Eternity only when you start a normal Eternity run")
	}
	if (player.aarexModifications.ngudpV&&!player.aarexModifications.ngumuV) willenoughReward.push("keep Black Hole Dimensions on Quantum")
	willenoughReward = wordizeList(willenoughReward, true)

	//ACHIEVEMENT ROW 20
	finite.setAttribute('ach-tooltip', "在本次幽靈化裡，在不打破永恆的情況下達到 " + shortenCosts(1e33) + " 空間碎片。" + (tmp.ngp3l ? "" : "獎勵：在大撕裂外，樹升級強 10%。在大撕裂裡，基於你本次幽靈化的時間，第八時間維度獲得一個小小的指數加成。"))
	really.setAttribute('ach-tooltip', "在大撕裂裡達到 " + shortenCosts(Decimal.pow(10, 5000)) + " 物質。" + (tmp.ngp3l ? "":"獎勵：購買電子升級不會花費元維度提升。"))
	grind.setAttribute('ach-tooltip', "在沒有樹升級的情況下達到第 21 個納米場獎勵。" + (tmp.ngp3l ? "" : "獎勵：基於輻射衰變，你獲得更多夸克。"))
	willenough.setAttribute('ach-tooltip', "達到 " + shortenCosts(Decimal.pow(10, player.aarexModifications.ngudpV ? 268435456 : 36000000))+" 複製器。" + (willenoughReward != "" ? "獎勵：" + willenoughReward + "." : ""))
	oppose.setAttribute('ach-tooltip', "在最多有 1 量子次數的情況下變成一隻幽靈。" + (tmp.ngp3l ? "" : "獎勵：基於你的量子次數，你獲得更多夸克。"))
	pls.setAttribute('ach-tooltip', "在本次幽靈化、大撕裂和時間膨脹裡，在不購買永恆點數倍數升級和時間定理且不打破永恆的情況下達到 " + shortenCosts(Decimal.pow(10, 9.5e5)) + " 無限點數。獎勵：你每次變成一隻幽靈，你會獲得相當於 "+shortenDimensions(2e3)+" 星系的微中子，再乘以在所有大撕裂裡的最大量的星系的數量。")
	keeheehee.setAttribute('ach-tooltip', "變成一隻幽靈。獎勵：永恆次數獲得量多 100 倍（永恆次數越多，效果越弱），所有量子功能只需要時間定律就可以解鎖，分配選項永久保留，納米場快 3 倍，到 16 個獎勵為止， " + (tmp.ngp3l ? "" : "。獲得在配對挑戰之前的所有成就，") + "而且開始大撕裂時，你有一個第八時間維度。")
}

function setBMTooltip(){
	// Brave Milestones (3/16)
	let bm1 = document.getElementById("braveMilestone1")
	let bm10 = document.getElementById("braveMilestone10")
	let bm14 = document.getElementById("braveMilestone14")

	//BRAVE MILESTONES
	bm1.setAttribute('ach-tooltip', "Reward: Start Ghostifies with all Speedrun Milestones and all "+shorten(Number.MAX_VALUE)+" QK assignation features unlocked, all Paired Challenges completed, all Big Rip upgrades bought, Nanofield is 2x faster until you reach 16 rewards, and you get quarks based on your best MA this quantum.")
	bm10.setAttribute('ach-tooltip', "Reward: Start Ghostifies with 10 Fourth Emperor Dimensions" + (player.aarexModifications.ngudpV ? ", and start Big Rips with the 3rd row of Eternity upgrades." : "."))
	bm14.setAttribute('ach-tooltip', "Reward: Start Ghostifies with " + shortenCosts(1e25) + " Quark Spins and Branches are faster based on spins (at least 10x).")
}

function setR21Tooltip(){
	// Row 21 (ng3p7) (5/8)
	//ng3p71/////
	let uc = document.getElementById("Underchallenged")
	let mi = document.getElementById("Meta-Infinity confirmed?")
	let wd = document.getElementById("Weak Decay")
	let radioDecay = document.getElementById("Radioactive Decaying to the max!")
	//ng3p76/////
	//ng3p77/////
	let arent = document.getElementById("Aren't you already dead?")

	//ACHIEVEMENT ROW 21
	uc.setAttribute('ach-tooltip', "Become a ghost with at least "+shortenCosts(Decimal.pow(10, 2.2e5))+" EP without starting Eternity Challenge 10 while Big Ripped." + (tmp.ngp3l ? "" : " Reward: Meta-Dimension Boosts no longer reset Meta Dimensions."))
	mi.setAttribute('ach-tooltip', "Get "+shorten(Number.MAX_VALUE)+" infinities. Reward: You gain banked infinites and eternities when going Quantum or Big Ripping the universe.")
	wd.setAttribute('ach-tooltip', "Get "+shortenCosts(Decimal.pow(10, 1e12))+" Infinity Unstable Quarks for each Branch without Big Ripping in this Ghostify." + (tmp.ngp3l ? "" : " Reward: Normal replicant autobuyer buys max."))
	radioDecay.setAttribute('ach-tooltip', "Get 10 total Radioactive Decays." + (!tmp.ngp3l ? " Reward: You get 1 galaxy worth of generated neutrinos per second." : ""))
	arent.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 1.8e6)) + " IP while dilated and Big Ripped and without having studies, EP mult upgrades, Tree Upgrades, and Break Eternity within this Ghostify." + (tmp.ngp3l ? "" : " Reward: Your 8th Tree Upgrade's level speeds up Nanofield."))
}

function setR22Tooltip(){
	// Row 22 (ng3p8) (7/8)
	let ghostierthanbefore = document.getElementById("Even Ghostlier than before")
	let oc = document.getElementById("Overchallenged")
	//ng3p83/////
	let isnotenough = document.getElementById("Big Rip isn't enough") 
	let ee = document.getElementById("Everlasting Eternities")
	let btco = document.getElementById("Back to Challenge One")
	let tdc = document.getElementById("The Deep Challenge")
	let igu = document.getElementById("I give up.")

	//ACHIEVEMENT ROW 22
	ghostierthanbefore.setAttribute("ach-tooltip", "Unlock Bosonic Lab." + (tmp.ngp3l ? "" : " Reward: The meta-antimatter effect uses your best meta-antimatter in your current Ghostify instead of your best in the current Quantum, and unlock all achievements prior to Ghostly Photons."))
	ee.setAttribute('ach-tooltip', "Get "+shorten(Number.MAX_VALUE)+" eternities." + (tmp.ngp3l ? "" : " Reward: Boost quark gain by 10 per Light Empowerment squared."))
	oc.setAttribute('ach-tooltip', "Become a ghost with at least "+shortenCosts(Decimal.pow(10, 3.75e5)) + " EP while Big Ripped with the Anti-Dilation modifier." + (tmp.ngp3l ? "" : " Reward: Remove the second nanofield reward scaling."))
	btco.setAttribute('ach-tooltip', "Complete Paired Challenge 1 after getting "+shortenCosts(Decimal.pow(10, 1.65e9)) + " antimatter in Quantum Challenges 6 and 8." + (tmp.ngp3l ? "" : " Reward: Ghostifies only makes you lose 25% of your radiocative decays."))
	tdc.setAttribute('ach-tooltip', "Complete Eternity Challenge 11 with "+shortenCosts(Decimal.pow(10, 15500)) + " IP in a Paired Challenge with the Quantum Challenges 6 and 8 combination and the Anti-Dilation modifier." + (tmp.ngp3l ? "" : " Reward: Remove the quadratic cost scaling and the level softcap of fifth Tree of Decay upgrade and make it based on best meta-antimatter over Ghostifies, instead of over quantums."))
	igu.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 2.25e4)) + " IP while dilated and Big Ripped with Anti-Dilation modifier and without having studies, EP mult upgrades, Tree Upgrades, and Break Eternity within this Ghostify.")
	isnotenough.setAttribute('ach-tooltip', "Complete a Paired Challenge with Quantum Challenges 6 and 8 combinations." + (tmp.ngp3l ? "" : " Reward: Remove the hardcap reduction of 'And so your life?'."))
}

function setR23Tooltip(){
	// Row 23 (ng3p9) (3/8)
	//ng3p91/////
	//ng3p92/////
	let aretheseanother = document.getElementById("Are these another...")
	//ng3p94/////
	//ng3p95/////
	//ng3p96/////
	let ghostliest = document.getElementById("The Ghostliest Side")
	let metae18 = document.getElementById("Meta-Quintillion")

	//ACHIEVEMENT ROW 23
	ghostliest.setAttribute('ach-tooltip', "Get " + shorten(Math.pow(Number.MAX_VALUE, 1/4)) + " Ghostifies. Reward: Ghostifies boost the gain of Ghost Particles at a reduced rate.")
	metae18.setAttribute('ach-tooltip', "Get " + shortenCosts(Decimal.pow(10, 1e18)) + " antimatter. Reward: Distant Antimatter Galaxies scaling is 10% weaker and Higgs Bosons produce Bosonic Antimatter at a linear rate.")
	aretheseanother.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 40000)) + " Quarks. Reward: Gain 500x more Quarks and Ghost Particles.")
}

function setPreNGP3AchievementTooltip() {
	setR1Tooltip()
	setR2Tooltip()
	setR3Tooltip()
	setR4Tooltip()
	setR5Tooltip()
	setR6Tooltip()
	setR7Tooltip()
	setR8Tooltip()
	setR9Tooltip()
	setR10Tooltip()
	setR11Tooltip()
	setR12Tooltip()
	setR13Tooltip()
	setR13p5Tooltip()
	setR14Tooltip()
}

function setPreNGP3p1AchievementTooltip() {
	// ng+3 achievements
	setBMTooltip()
	setQSRTooltip()
	setR15Tooltip()
	setR16Tooltip()
	setR17Tooltip()
	setR18Tooltip()
	setR19Tooltip()
	setR20Tooltip()
	setR21Tooltip()
	setR22Tooltip()
}

function setNGP3p1AchievementTooltip(){
	setR23Tooltip()
}

function setAchieveTooltip() { 
	setPreNGP3AchievementTooltip()
	if (tmp.ngp3) setPreNGP3p1AchievementTooltip()
	if (!tmp.ngp3l) setNGP3p1AchievementTooltip()
}
