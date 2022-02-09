/* 자바스크립트 코드 */

/* --------- 로그인 --------- */

function login(){
	var ID = document.getElementById("id").value;
	var pw = document.getElementById("pw").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //아이디 특수문자 체크
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;

	if (ID.length == 0) {
		alert("아이디를 입력하시기 바랍니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(ID.length <5 || ID.length>10){
		alert("아이디는 5~10자리 이어야 합니다.");
	}
	else if (ID.search(/\s/) != -1) {//아이디 공백체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(ID)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(pw.length == 0){
		alert("비밀번호를 입력하시기 바랍니다.");
		return;
	}	
	else if (!pattern_chk2.test(pw) || !pattern_chk3.test(pw) || !pattern_chk4.test(pw) || pw.length <8) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else{
		alert(ID + "님 반갑습니다 ^_^");          
		window.location.href="../HTML-Loginok/index.html"
	}
}

function enterKey(){ // 로그인 하려고 엔터키를 눌렸을 때 실행
	 if(window.event.keyCode ==13){
		login();
	 }
}
/* -------- 회원가입 --------- */

function checkid(){ // 아이디 중복 검사
	var ID = document.getElementById("id").value;  
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //아이디 특수문자 체크
	
	if (ID.length == 0) {
		alert("아이디를 입력하시기 바랍니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if(ID.length <5 || ID.length>10){
		alert("아이디는 5~10자리 이어야 합니다.");
	}
	else if (ID.search(/\s/) != -1) {//아이디 공백체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(ID)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else{
		alert(ID +"는 사용 가능한 아이디입니다."); //아이디 중복 검사 팝업창 생성
	}
}

function signup_chk(){ // 유효성 검사
	var ID = document.getElementById("id").value; 
	var pw = document.getElementById("pw").value; 
	var pw2 = document.getElementById("pw2").value; 
	var name = document.getElementById("name").value; 
	var year = document.getElementById("birth_year").value; 
	var month = document.getElementById("birth_month").value; 
	var day = document.getElementById("birth_day").value; 
	var email = document.getElementById("email").value; 
	var phone = document.getElementById("phone").value; 
	var chk = document.getElementById("agree_chk").checked;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //아이디 특수문자 체크
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	/* 아이디 유효성 체크 */
	if (ID.length == 0) {
		alert("아이디를 입력하시기 바랍니다.");
		return;
	}
	else if(ID.length <5 || ID.length>10){
		alert("아이디는 5~10자리 이어야 합니다.");
		return;
	}
	else if (ID.search(/\s/) != -1) {//아이디 공백체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(ID)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 비밀번호 유효성 체크 */
	else if(pw.length == 0 || pw2.length == 0){
		alert("비밀번호를 입력하시기 바랍니다.");
		return;
	}	
	else if (!pattern_chk2.test(pw) || !pattern_chk3.test(pw) || !pattern_chk4.test(pw) || pw.length <8) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pw != pw2) {
		alert("비밀번호가 일치하지 않습니다."); 
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 이름 유효성 체크 */
	else if (name.length == 0) {
		alert("이름을 입력하시기 바랍니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 생년월일 유효성 체크 */
	else if (year.length != 4) {
		alert("년도는 4자리 숫자이어야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (month.length == 0) {
		alert("month를 입력하세요.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (day.length != 2) {
		alert("day는 두자리 숫자이어야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 이메일 유효성 체크 */
	else if (email.length == 0) {
		alert("이메일을 입력하세요.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 휴대전화 유효성 체크 */
	else if (phone.length == 0 || pattern_chk1.test(phone) || !pattern_chk2.test(phone) || pattern_chk3.test(phone) || phone.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 개인정보 동의 */
	else if(!chk){
		alert("개인정보 약관에 동의해주세요");
		return;
	}
	
	else {
		if (confirm("입력한 정보로 가입하시겠습니까?") == true) {
			alert("유니버스에 성공적으로 가입되었습니다.\n메인페이지에서 다시 로그인 해주세요.");
			location.href = "Login.html";
		}
	}
}

/* -------- 아이디 찾기 --------*/

function certification_number(){ /* 인증번호 받기 */
	var find_name = document.getElementById("find_name").value;
	var find_phone = document.getElementById("find_phone").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크

	/* 이름 체크 */
	if (find_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (find_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(find_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 휴대전화 체크 */
	else if (find_phone.length == 0 || pattern_chk1.test(find_phone) || !pattern_chk2.test(find_phone) || pattern_chk3.test(find_phone) || find_phone.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 유효성 체크 통과시 인증번호 발송 */
	else {
		alert("인증번호가 발송되었습니다.");
	}
}

function find_id() {
	var certification_num = document.getElementById("certification_number").value;
	
	if(certification_num.length != 6 && certification_num !=0){
		alert("인증번호가 다릅니다.");
	}
	else if(certification_num ==0){
		alert("인증번호를 입력해주시기 바랍니다");
	}
	/* 유효성 체크 통과시 아이디 찾기 진행 -> 만약에 인증번호를 성공적으로 입력했다고 가정 */
	else {
		alert("회원님의 ID는 admin1829입니다."); 
	}
}

/* -------- 비밀번호 찾기 --------*/

function find_pw(){
	var find_id = document.getElementById("find_id").value;
	var find_name = document.getElementById("find_name2").value;
	var find_phone = document.getElementById("find_phone2").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크


	/* 아이디 유효성 체크 (비밀번호 찾기 버튼 눌렀을때) */
	if (find_id.length == 0) {
		alert("아이디를 입력해 주세요");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (find_id.search(/\s/) != -1 || pattern_chk1.test(find_id)) {
		//아이디 공백, 특수문자, 체크
		alert("아이디에는 공백, 특수문자가 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}

	/* 이름 체크 */
	else if (find_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (find_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(find_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 휴대전화 체크 */
	else if (find_phone.length == 0 || pattern_chk1.test(find_phone) || !pattern_chk2.test(find_phone) || pattern_chk3.test(find_phone) || find_phone.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 유효성 체크 통과시 비밀번호 변경 화면 이동 */
	else {
		location.href = "change_pw.html";
	}
}

/* -------- 비밀번호 변경 --------*/

function change_pw(){
	var new_pw = document.getElementById("new_pw").value; 
	var new_pw2 = document.getElementById("new_pw2").value; 
	
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	/* 비밀번호 유효성 체크 */
	if(new_pw.length == 0 || new_pw2.length == 0){
		alert("비밀번호를 입력하시기 바랍니다.");
		return;
	}	
	else if (!pattern_chk2.test(new_pw) || !pattern_chk3.test(new_pw) || !pattern_chk4.test(new_pw) || new_pw.length <8) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (new_pw != new_pw2) {
		alert("비밀번호가 일치하지 않습니다."); 
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else{
		if (confirm("입력한 비밀번호로 변경하시겠습니까?") == true) {
			alert("성공적으로 변경되었습니다.\n메인페이지에서 다시 로그인 해주세요.");
			location.href = "Login.html";
		}
	}
}
