document.getElementById("sub").onclick = function buttomFunction(){
    let sousuo = document.getElementById("sou").value.trim();
    if (!sousuo){
        document.getElementById("xianshi").innerHTML = "请输入文本！";
        return
    }
    
    let shigeju1 = ["诗","歌","剧"];
    let sgj = shigeju1.some(function(shigeju1){
        let ans = sousuo.includes(shigeju1);
        return ans;
    });

    let xiaomimi1 = ["秘","密"];
    let xmm = xiaomimi1.some(function(xiaomimi1){
        let ans = sousuo.includes(xiaomimi1);
        return ans;
    });
    
    //上述：some和回调函数(ai辅助学习)

    if (xmm){
        window.location.href = "sgjph/sgjmi.html";
    } else if (sgj){
        window.location.href = "sgjph/sgjph.html";
    } else {
        document.getElementById("xianshi").innerHTML = "没有符合选择的项！";
        return
    }
}


document.getElementById("mic").onclick = function buttomFunction2(){
    let name1 = document.getElementById("name").value.trim();
    let password1 = document.getElementById("password").value.trim();

    document.getElementById("ans1").innerHTML = " ";
    document.getElementById("ans2").innerHTML = " ";

    if (!name1){
        document.getElementById("ans1").innerHTML = "请输入你的用户名！";
        return
    }

    if (!password1){
        document.getElementById("ans2").innerHTML = "请输入你的密码！"
        return
    }

    let savedDataStr = localStorage.getItem("savedUserInfo");//找用户的包文件

    if (savedDataStr){//如果找到了：
        let realArray = JSON.parse(savedDataStr);//解压缩这一块
        let realName = realArray[0];
        let realPassword = realArray[1];

        document.getElementById("ans1").innerHTML = " ";
        document.getElementById("ans2").innerHTML = " ";
        document.getElementById("ans3").innerHTML = " ";
    
        if (name1 != realName){
            document.getElementById("ans1").innerHTML = "用户名错误！";
            return
        }

        if (password1 != realPassword){
            document.getElementById("ans2").innerHTML = "密码错误！"
            return
        }

        //卫语句验证这一块（我永远喜欢东海帝皇！）

        document.getElementById("ans3").innerHTML = "欢迎回来！用户" + realName;
        return
    }

    let allThing = [name1,password1];

    localStorage.setItem("savedUserInfo",JSON.stringify(allThing));

    alert("保存您的账户成功！");


}

document.getElementById("cancel").onclick = function cancelFunction(){
    let queren = confirm("你真的要删除账户吗？");
    if (queren){
        localStorage.removeItem("savedUserInfo");//删除信息这一块

        document.getElementById("ans1").innerHTML = " ";
        document.getElementById("ans2").innerHTML = " ";
        document.getElementById("ans3").innerHTML = " ";
        document.getElementById("cal").innerHTML = " ";
        document.getElementById("cal").innerHTML = "账号已删除完毕！";
    }
}

document.getElementById("smc").onclick = function tiaoFunction(){
    let myChoice = document.getElementById("choice").value;

    if (myChoice == "sgjph"){
        window.location.href = "sgjph/sgjph.html";
    } else if (myChoice == "sgjmi"){
        window.location.href = "sgjph/sgjmi.html";
    }
}

//----------------------------------音频播放器-----------------------------------------//

let m1 = new Audio("./audio/1.mp3");
m1.volume = 0.3;

let m2 = new Audio("./audio/2.mp3");
m2.volume = 0.3;

let m3 = new Audio("./audio/3.mp3");
m3.volume = 0.3;

let m1Last = 0;
let m2Last = 0;
let m3Last = 0;

let iss = " ";

document.getElementById("start").onclick = function startFunction(){

    document.getElementById("tishi").innerHTML = " ";

    let music = document.getElementById("music").value;

    m1.pause();
    m2.pause();
    m3.pause();

    if (music === "m1"){
        m1.play();
        document.getElementById("tishi").innerHTML = "已开始播放！";
        iss = "m1";
        return;
    }

    if (music === "m2"){
        m2.play();
        document.getElementById("tishi").innerHTML = "已开始播放！";
        iss = "m2";
        return;
    }

    if (music === "m3"){
        m3.play();
        document.getElementById("tishi").innerHTML = "已开始播放！";
        iss = "m3";
        return;
    }
}

document.getElementById("stop").onclick = function stopFunction(){

    document.getElementById("tishi").innerHTML = "已停止！";

    m1.pause();

    m2.pause();

    m3.pause();
}

document.getElementById("return").onclick = function returnFunction(){

    document.getElementById("tishi").innerHTML = " ";
    
    if (iss === "m1"){
        m1.currentTime = 0;
        document.getElementById("tishi").innerHTML = "已更新！";
    }

    if (iss === "m2"){
        m2.currentTime = 0;
        document.getElementById("tishi").innerHTML = "已更新！";
    }
    
    if (iss === "m3"){
        m3.currentTime = 0;
        document.getElementById("tishi").innerHTML = "已更新！";
    }
}

//---感谢DeepSeek的大力指导！---//



    

    

