/* --------- 이벤트 화면 --------- */

/* --- 슈퍼 프리미엄 월간 이용권 --- */
function smonth_buy(){
	if(confirm("슈퍼 프리미엄 월간 이용권을 결제하시겠습니까?") == true){
		alert("결제 화면으로 이동합니다.");
		location.href = "pay.html";
	}
}

/* --- 슈퍼 프리미엄 연간 이용권 --- */
function syear_buy(){
	if(confirm("슈퍼 프리미엄 연간 이용권을 결제하시겠습니까?") == true){
		alert("결제 화면으로 이동합니다.");
		location.href = "pay.html";
	}
}

/* --- 프리미엄 월간 이용권 --- */
function pmonth_buy(){
	if(confirm("프리미엄 월간 이용권을 결제하시겠습니까?") == true){
		alert("결제 화면으로 이동합니다.");
		location.href = "pay.html";
	}
}

/* --- 프리미엄 연간 이용권 --- */
function pyear_buy(){
	if(confirm("프리미엄 연간 이용권을 결제하시겠습니까?") == true){
		alert("결제 화면으로 이동합니다.");
		location.href = "pay.html";
	}
}

/* --- 쿠폰 등록 --- */
function coupon(){
	var coupon = document.getElementById("coupon").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	if(coupon == "")
		alert("쿠폰번호를 입력해주세요.");
	else if (coupon.length == 0 || pattern_chk1.test(coupon) || !pattern_chk2.test(coupon) || pattern_chk3.test(coupon) || coupon.search(/\s/) != -1) {
		alert("잘못된 쿠폰번호입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(confirm("쿠폰을 등록하시겠습니까?") == true){
		alert("성공적으로 등록되었습니다.");
	}
	else{
		alert("등록이 취소되었습니다.");
	}
}

/* --- 추천인 등록 --- */
function recommend(){
	var recommend = document.getElementById("recommend").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	if(recommend == "")
		alert("추천인을 입력해주세요.");
	else if (recommend.search(/\s/) != -1) {
		alert("추천인에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(recommend)) {
		alert("추천인에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}	
	else if(confirm("추천인을 등록하시겠습니까?") == true){
		alert("성공적으로 등록되었습니다.\n5000 포인트를 기념으로 드립니다.");
	}
	else{
		alert("등록이 취소되었습니다.");
	}
}

/* --- 당첨 이벤트 --- */

function lucky(){
	var lucky = document.getElementById("lucky").value;
	var myArray=['500','500','500','1000','1000','2000','3000','10000'];
	var rand = Math.floor(Math.random()*myArray.length);
	var result = myArray[rand];
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	if(lucky == "")
		alert("전화번호를 입력해주세요.");
	else if (lucky.length == 0 || pattern_chk1.test(lucky) || !pattern_chk2.test(lucky) || pattern_chk3.test(lucky) || lucky.search(/\s/) != -1) {
		alert("잘못된 전화번호입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(confirm("등록하시겠습니까?") == true){
		alert("축하합니다! " + result + " 포인트에 당첨되었습니다!");
	}
}

/* --- 찜 목록 추가 --- */
function jjim(){
	if(confirm("찜 목록에 추가하겠습니까?") == true){
		alert("찜 목록에 추가되었습니다.");
	}
}

/* --- 결제화면 이동하기 --- */
function buy(){
	if(confirm("결제하시겠습니까?") == true){
		alert("결제 화면으로 이동합니다.");
		location.href = "../pay.html";
	}
}

/* --- 결제하기 --- */
function pay(){
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크
	var card = document.getElementById("card").value; 
	var chk = document.getElementById("agree_pay").checked;
	
	if (card.length == 0 || pattern_chk1.test(card) || !pattern_chk2.test(card) || pattern_chk3.test(card) || card.search(/\s/) != -1) {
		alert("잘못된 카드번호 정보입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(!chk){
		alert("이용 약관에 동의해주세요");
		return;
	}
	
	else{
		if(confirm("정말로 결제하시겠습니까?") == true){
			alert("성공적으로 결제가 되었습니다.감사합니다!\n영수증은 해당 계정 이메일로 발송되었습니다.");
			location.href = "index.html";
		}
		else{
			alert("결제가 취소되었습니다.");
		}
	}
}
