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
	inftime.setAttribute('ach-tooltip', player.boughtDims ? "Eternity without buying dimensions 1-7. Reward: Time Dimensions gain a multiplier based on the eighth root of eighth dimensions." : "Get 308 tickspeed upgrades (in one eternity) from Time Dimensions. Reward: Time Dimensions are affected slightly more by tickspeed.")
	guide.setAttribute('ach-tooltip', player.boughtDims ? "Reach " + shortenCosts(new Decimal("1e1000000")) + " replicanti. Reward: Replicanti increases faster the more you have." : "Eternity with less than 10 infinities.")
	nine.setAttribute('ach-tooltip', "Eternity with exactly 9 replicanti." + (player.boughtDims ? " Reward: The replicanti multiplier to ID is 9% stronger (after time studies)." : ""))
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
	potato3.setAttribute('ach-tooltip', "Get more than "+shortenCosts(new Decimal("1e8296262"))+" ticks per second." + (player.galacticSacrifice !== undefined ? " Reward: The Galaxy boost to Galaxy points gain is buffed based on a specific value (~663 galaxies)." : ""))
	infstuff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e140000"))+" IP without buying IDs or IP multipliers. Reward: You start eternities with all Infinity Challenges unlocked and completed" + (player.meta ? ", and your Infinity gain is multiplied by dilated time^(1/4)." : "."))
	when.setAttribute('ach-tooltip', "Reach "+shortenCosts( new Decimal(tmp.ngex?"1e15000":"1e20000"))+" replicanti. Reward: You gain replicanti 2 times faster under " + shortenMoney(Number.MAX_VALUE) + " replicanti.")
	thinking.setAttribute('ach-tooltip', "Eternity for " + shortenCosts( new Decimal("1e600")) + " EP in 1 minute or less while dilated." + (tmp.ngp3l ? "" : " Reward: Multiply dilated time gain based on replicanti."))
	thisis.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal('1e20000'))+" IP without any time studies while dilated."+(thisisReward != "" ? " Reward: " + thisisReward + "." : ""))
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
	stillamil.setAttribute('ach-tooltip', "Reach "+shortenCosts(1e6)+" black hole power.")
	out.setAttribute('ach-tooltip',"Get more than "+shortenCosts(1e5)+" ex-dilation." + (player.aarexModifications.nguspV !== undefined ? " Reward: You can equally distribute ex-dilation to all repeatable dilation upgrades." : ""))
	ridNGud.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e20000"))+" IP without any time studies or dilation upgrades while dilated.")
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
	onlywar.setAttribute('ach-tooltip', "Reach "+shortenMoney(new Decimal('1e40000'))+" EP."+(onlywarReward!=""?" Reward: " + onlywarReward + ".":""))
	thecap.setAttribute('ach-tooltip', "Get "+shortenDimensions(1e12)+" eternities. Reward: Eternity Upgrade 2 uses a better formula.")
	neverenough.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e100000"))+" replicanti. Reward: You unlock the option to buy the maximum Replicanti Galaxies available.")
	harmony.setAttribute('ach-tooltip', player.meta?"Have at least 700 normal, replicanti, and free dilated galaxies. Reward: Galaxies are 0.1% stronger.":"Get the same amount (at least 300) of normal, replicanti, and free galaxies.")
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
	notenough.setAttribute('ach-tooltip', "Reach " + shorten(Number.MAX_VALUE) + " meta-antimatter." + (tmp.ngp3l ? "" : " Reward: You produce more dilated time based on your normal galaxies, and gain more Tachyon particles based on your replicated galaxies."))
	hadron.setAttribute('ach-tooltip', "Have colored quarks, but have no color charge." + (tmp.ngp3l ? "" : " Reward: Quantum worth boosts all Meta Dimensions."))
	old.setAttribute('ach-tooltip', "Reach " + shortenCosts(getOldAgeRequirement()) + " antimatter." + (tmp.ngp3l ? "":" Reward: Get a multiplier to the 1st Meta Dimension based on total antimatter.") )
	rid.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e400000")) + " IP while dilated, without having time studies and electrons. Reward: Generate Time Theorems based on your best-ever Tachyon particles.")
	winner.setAttribute('ach-tooltip', "Quantum in under 30 seconds." + (tmp.ngp3l ? "" : " Reward: Your EP multiplies Quark gain."))
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
	special.setAttribute('ach-tooltip', "Quantum in under 5 seconds." + (tmp.ngp3l ? "" : " Reward: Start with all Infinity Dimensions unlocked if you have at least 25 eternities."))
	memories.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e1700")) + " MA without ever buying 5th-8th Normal Dimensions or having more than 4 Dimension Boosts in this quantum."  + (tmp.ngp3l ? "" : " Reward: The 4 RG upgrade is stronger based on your Meta-Dimension Boosts."))
	squared.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e1500"))+" MA with exactly 8 Meta-Dimension Boosts." + (tmp.ngp3l?"":" Reward: Get a multiplier to the 8th Meta Dimension based on your 1st Meta Dimension."))
	morals.setAttribute('ach-tooltip', "Quantum without any Meta-Dimension Boosts." + (tmp.ngp3l ? "" : " Reward: Meta-Dimension Boosts boost itself at a reduced rate."))
	seriously.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e354000")) + " IP without having time studies, while dilated and running QC2." + (tmp.ngp3l ? "" : " Reward: The Eternity Points boost to Quark gain is 1% stronger."))
}

function setQSRTooltip(){
	// Quantum Speedruns (3/28)
	let tfms = document.getElementById("speedrunMilestone18")
	let tms = document.getElementById("speedrunMilestone19")
	let tfms2 = document.getElementById("speedrunMilestone22")

	//QUANTUM SPEEDRUNS
	tfms.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e13) + " Eternities.")
	tms.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e25) + " meta-antimatter on reset.")
	tfms2.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e100) + " dilated time, and dilated time only resets on Quantum.")
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
	internal.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e333")) + " MA without having 2nd Meta Dimensions and Meta-Dimension Boosts." + (tmp.ngp3l?"":" Reward: 1st Meta Dimensions are stronger based on meta antimatter.") )
	truth.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 7.88e13)) + " antimatter without having completed any paired challenges.")
	cantGet.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 6.2e11)) + " antimatter in Eternity Challenge 11.")
	noDil.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 2e6)) + " replicanti without having Tachyon particles. Reward: You start Quantums with the square root of your best TP as your Tachyon particle amount.")
	dontWant.setAttribute('ach-tooltip', "Reach " + shorten(Decimal.pow(Number.MAX_VALUE, 1000)) + " IP while dilated, in QC2, and without having studies and First Dimensions during your current Eternity.")
	noparadox.setAttribute('ach-tooltip', "Quantum without any dilation upgrades." + (tmp.ngp3l ? "" : " Reward: The sum of your best Quantum Challenge times boosts Quark gain."))
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
	notrelative.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 411))+" dilated time without gaining tachyon particles." + (tmp.ngp3l ? "" : " Reward: You gain more DT based on the amount of Nanofield rewards."))
	error404.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 1.6e12))+" antimatter while having only the 1st Dimensions of each type of Dimension and at least 2 normal galaxies.")
	ie.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 8e6)) + " antimatter in a paired challenge with the PC6+8 combination." + (tmp.ngp3l ? "" : " Reward: Automatically buy the Quark multiplier to dimensions every second if you have the 8th brave milestone."))
	wasted.setAttribute('ach-tooltip', "Get " + shorten(1.1e7) + " TT without having TT generation, keeping your previous TT, and respeccing studies. Reward: While you have less than 1 hour worth of TT production, you gain 10x as much TT.")
	protonsDecay.setAttribute('ach-tooltip', "Unlock Tree of Decay." + (!tmp.ngp3l ? " Reward: You keep the two thirds power of your preons upon quantum when outside of a Quantum Challenge." : ""))
	stop.setAttribute('ach-tooltip', "Get the replicanti reset requirement to " + shorten(Decimal.pow(10, 1.25e7)) + ". Reward: Getting a normal replicant manually doesn't reset your replicanti and can be automated.")
	dying.setAttribute('ach-tooltip', "Reach " + shorten(Decimal.pow(10, 2.75e5)) + " IP while dilated, in PC6+8, and without having time studies." + (tmp.ngp3l ? "" : " Reward: Branches are faster based on your Meta-Dimension Boosts."))
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
	gofast.setAttribute('ach-tooltip', "Get "+shorten(Decimal.pow(10, 1185))+" EP first, and then square your EP by disabling dilation while Big Ripped." + (tmp.ngp3l ? "" : " Reward: Space shards multiply quark gain."))
	immunity.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 8e7)) + " antimatter with one normal galaxy while in Eternity Challenge 7 and big ripped." + (tmp.ngp3l ? "" : " Reward: Infinite Time is 3% stronger."))
	notSmart.setAttribute('ach-tooltip', "Get "+shorten(1e215)+" Time Shards without having Time Study 11 while Big Ripped." + (tmp.ngp3l ? "" : " Reward: Meta Dimensions get a multiplier based on time shards."))
	timeBreak.setAttribute('ach-tooltip', "Break Eternity. Reward: Galaxies don't reset Dimension Boosts" + (!tmp.ngp3l ? ", and Quantum Challenges now cost 0 electrons" : "") + ".")
	soLife.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 3.5e5)) + " IP in Big Rip while dilated, with no EP multiplier upgrades and time studies." + (tmp.ngp3l ? "" : " Reward: Square the Ghost Particle gain, with a hardcap at " + shortenCosts(1e10) + "x, and the hardcap is further lowered if you have more than " + shortenCosts(1e60) + " Ghost Particles."))
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
	finite.setAttribute('ach-tooltip', "Get " + shortenCosts(1e33) + " Space Shards without Breaking Eternity within this Ghostify." + (tmp.ngp3l ? "" : " Reward: Outside of Big Rips, Tree Upgrades are 10% stronger. In Big Rips, 8th Time Dimensions gain an small exponent boost based on your current Ghostify time."))
	really.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 5000)) + " matter in Big Rip." + (tmp.ngp3l ? "":" Reward: Buying Electron upgrades doesn't consume Meta-Dimension Boosts."))
	grind.setAttribute('ach-tooltip', "Get the 21st Nanofield reward without having Tree Upgrades. " + (tmp.ngp3l ? "" : "Reward: Gain more Quarks based on Radioactive Decays."))
	willenough.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, player.aarexModifications.ngudpV ? 268435456 : 36000000))+" replicanti." + (willenoughReward != "" ? " Reward: " + willenoughReward + "." : ""))
	oppose.setAttribute('ach-tooltip', "Become a ghost with at most 1x quantumed stat." + (tmp.ngp3l ? "" : " Reward: You gain more Quarks based on your quantumed stat."))
	pls.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 9.5e5)) + " IP in Big Rip while dilated, with no EP multiplier upgrades, time studies, and Break Eternity within this Ghostify. Reward: Each time you become a ghost, you gain "+shortenDimensions(2e3)+" galaxies worth of generated neutrinos, multiplied by your best-ever galaxy amount across all Big Rips.")
	keeheehee.setAttribute('ach-tooltip', "Become a ghost. Reward: Multiply Eternities gained by 100x (weakens as you have more), all quantum mechanic unlocks only require Time Theorems, assignation options are kept permanently, Nanofield is 3x faster until you reach 16 rewards, " + (tmp.ngp3l ? "" : " get all achievements prior to Paired Challenges, ") + "and start with 1 Eighth Time Dimension in Big Rips.")
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
