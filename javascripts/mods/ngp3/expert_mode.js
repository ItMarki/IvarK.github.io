function checkForExpertMode() {
	if (!metaSave.ngp4) return
	if (metaSave.ngp3ex) return
	console.log("已解鎖專家模式！")
	metaSave.ngp3ex = true
	if (document.getElementById("welcome").style.display != "flex") document.getElementById("welcome").style.display = "flex"
	else player.aarexModifications.popUpId = ""
	document.getElementById("welcomeMessage").innerHTML = "解鎖大撕裂的技能的時候，一片空間晶片跟現實碰撞，創造了一個平行宇宙，裡面所有東西都變得困難。解鎖 NG+4 之外，你也解鎖了 NG+3 專家模式！請在加載選項裡的模組標籤裡查看。（注意：這個模組目前未完成）"
	localStorage.setItem(metaSaveId,btoa(JSON.stringify(metaSave)))
}
