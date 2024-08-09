// begin_univ
$(document).ready(function() {
	// 퍼블확인용 임시 데이터
	const universities = [
		"서울대학교", "서울과학기술대학교", "서울시립대학교", "서울교대", "서울여대",
		"경희대학교", "고려대학교", "연세대학교", "서강대학교", "성균관대학교",
		"한양대학교", "중앙대학교", "동국대학교", "건국대학교", "홍익대학교",
	];
	const majors = [
		"경영학", "경제학", "관광경영학", "광고홍보학", "국어국문학", "일어일문학", "영어영문학", "중어중문학",
		"철학", "유아교육", "사학", "기계공학", "화학공학", "건축공학", "항공우주공학", "항공운항학",
		"조선공학", "기계설계공학", "전기공학", "전기전자공학", "전기제어공학"
	];

	// 대학, 학과 검색 성공 시 목록
	const univList = $('.univ_list');
	const majorList = $('.major_list');
	// 대학, 학과 검색 결과 없을 시 메시지
	const univNodata = $('.univ_msg .nodata');
	const majorNodata = $('.major_msg .nodata');
	// 대학, 학과 두 글자 미만 입력 시 메시지
	const univLengthMsg = $('.univ_msg .length');
	const majorLengthMsg = $('.major_msg .length');
	// 대학, 학과 검색 input
	const univInput = $('.univ_input');
	const majorInput = $('.major_input');

	// 두 글자 미만일 경우 오류 메시지
	function univLength() {
		univList.empty();// 목록 초기화
		if (univInput.val().length < 2) {
			univLengthMsg.show();
			// typeof 연산자 - typeof univRemove01 === 'function'이 true인 경우에만 내부에 있는 코드 실행
			// begin_univ.html 스크립트 부분에 설명
			if (typeof univRemove01 === 'function') {
				univRemove01();
			}
		} else {
			univLengthMsg.hide();
		}
	}
	function majorLength() {
		majorList.empty();// 목록 초기화
		if (majorInput.val().length < 2) {
			majorLengthMsg.show();
			if (typeof univRemove02 === 'function') {
				univRemove02();
			}
		} else {
			majorLengthMsg.hide();
		}
	}

	// 대학교 검색
	function searchUniv(keyword) {
		const results = universities.filter(univName => univName.includes(keyword));// 검색어 포함 여부 확인하여 results배열에 저장
		// 검색어 포함하는 학교들 각 li 생성
		results.forEach(univName => {
			const univLi =
			`<li>
				<p class="univ_name">${univName}</p>
				<button type="button" class="select_univ">선택</button>
			</li>`;
			univList.append(univLi);// 검색 결과 목록에 저장
		});
		if (typeof univAdd01 === 'function') {
			univAdd01();
		}
		// 검색 결과 없으면 메시지 노출
		if (results.length === 0) {
			univNodata.show();
			if (typeof univRemove01 === 'function') {
				univRemove01();
			}
		} else {
			univNodata.hide();
		}
	}
	// 학과 검색
	function searchMajor(keyword) {
		const results = majors.filter(majorName => majorName.includes(keyword));// 검색어 포함 여부 확인하여 results배열에 저장
		// 검색어 포함하는 학과들 각 li 생성
		results.forEach(majorName => {
			const majorLi =
			`<li>
				<p class="major_name">${majorName}</p>
				<button type="button" class="select_major">선택</button>
			</li>`;
			majorList.append(majorLi);// 검색 결과 목록에 저장
		});
		if (typeof univAdd02 === 'function') {
			univAdd02();
		}
		// 검색 결과 없으면 메시지 노출
		if (results.length === 0) {
			majorNodata.show();
			if (typeof univRemove02 === 'function') {
				univRemove02();
			}
		} else {
			majorNodata.hide();
		}
	}
	// 대학교 검색 처리
	function univSearch() {
		univLength();// 두 글자 미만 처리
		// 두 글자 이상일 시 검색 처리
		const keyword = univInput.val();
		if (keyword.length >= 2) {
			searchUniv(keyword);
		} else {
			univNodata.hide();
		}
	}
	// 검색 버튼 클릭, 엔터 시 대학교 검색
	$('.btn_univ_search').on('click', univSearch);
	univInput.on('keyup', function(event) {
		if (event.key === 'Enter') {
			univSearch();
		}
	});
	// 학과 검색 처리
	function majorSearch() {
		majorLength();// 두 글자 미만 처리
		// 두 글자 이상일 시 검색 처리
		const keyword = majorInput.val();
		if (keyword.length >= 2) {
			searchMajor(keyword);
		} else {
			majorNodata.hide();
		}
	}
	// 검색 버튼 클릭, 엔터 시 학과 검색
	$('.btn_major_search').on('click', majorSearch);
	majorInput.on('keyup', function(event) {
		if (event.key === 'Enter') {
			majorSearch();
		}
	});

	// 대학교 검색 결과에서 선택 버튼 클릭 시 실행
	function selectUniv() {
		const selectedUniv = $(this).siblings('.univ_name').text();
		// input에 대학 이름 저장
		univInput.val(selectedUniv);
		// #univ_val에 대학 이름 저장
		$('#univ_val').val(selectedUniv);
		const univ_val = $('#univ_val').val();
		// 목록 초기화
		univList.empty();
		// input, button 비활성화
		$('.btn_univ_search').prop('disabled', true);
		univInput.prop('disabled', true);
		// typeof로 begin_univ_v2 관련 함수 실행
		if (typeof univRemove01 === 'function') {
			univRemove01();
		}
	}
	$(document).on('click', '.select_univ', selectUniv);
	// 학과 검색 결과에서 선택 버튼 클릭 시 실행
	function selectMajor() {
		const selectedMajor = $(this).siblings('.major_name').text();
		// input에 학과 이름 저장
		majorInput.val(selectedMajor);
		// major_val에 학과 이름 저장
		$('#major_val').val(selectedMajor);
		const major_val = $('#major_val').val();
		// 목록 초기화
		majorList.empty();
		// input, button 비활성화
		$('.btn_major_search').prop('disabled', true);
		majorInput.prop('disabled', true);
		// typeof로 begin_univ_v2 관련 함수 실행
		if (typeof univRemove02 === 'function') {
			univRemove02();
		}
	}
	$(document).on('click', '.select_major', selectMajor);
	
	// 입력 완료 버튼 클릭 시  
	// 팝업
	window.data = {
		resp_cd: "00"
	};
	window.dataResp = function(){
		if (univInput.prop('disabled') && majorInput.prop('disabled')) {
			data.resp_cd = "55";
		} else if (!univInput.prop('disabled') && majorInput.prop('disabled')) {
			data.resp_cd = "66";
		} else if (univInput.prop('disabled') && !majorInput.prop('disabled')) {
			data.resp_cd = "77";
		} else if (!univInput.prop('disabled') && !majorInput.prop('disabled')) {
			data.resp_cd = "88";
		}
	};
	
	$('.btn_close').on('click', () => {
		close_pop()
	})
});

// pop
const open_pop = (message) => {
	$('body').addClass('fixed');
	$('.alert_pop').fadeIn();
	$('.alert_pop .pop_tit').text(message);
};

const close_pop = () => {
	$('body').removeClass('fixed');
	$('.alert_pop').fadeOut();
}