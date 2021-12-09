// JavaScript Document

$(function(){// jQB ///
	$("grid>a").click(function(e){
		e.preventDefault();
	});// gird>a만 PD
	
	
	$(".grid-item").click(function(){
		
		var isrc=$("img",this).attr("src");
//		console.log(isrc);
		
		
		// 1. 큰이미지 배경 보이기
		$("#dpbg").fadeIn(300);
//		// 2. 큰이미지박스에 이미지 넣기
		$("#dpbox").html('<img src="'+isrc+'" alt="image">')
		.fadeIn(300);//이미지박스 보이기!
		
		
		
	});//////// click /////////////////////
	
	
	
	//// 5. 닫기 버튼 클릭시 큰이미지 배경과 박스 사라지게 하기
		$(".cbtn").click(function(){
			$("#dpbg,#dpbox").fadeOut(300);
		});/////////////////// click ///////////////////////////////////////////
		
		//// 6. 닫기 버튼 마우스 오버/아웃시 버튼 회전시키기 
		/// transform  rotate(각도) 는 animate 메서드에서 사용할 수 없으나 jQuery 플러그인 jquery.rotate.js를 사용해서 구현할 수 있다.
		$(".cbtn").hover(
			function(){// over
				$(this).stop()
				.animate({rotate:"-90deg"},200);
			},
			function(){// out
				$(this).stop()
				.animate({rotate:"0deg"},200);
		});//////////// hover //////////////////////////
		
	
		//객체를 생성하여 폴더명과 이미지 개수를 매칭한다.
		var icnt={
			"another2015":20,
			"Milan_fashion_week_SS17":14,
			"Paris_fashion_week2016":27,
			"2013_LONDON":14,
			"2013_MILAN":19,
			"2013_MILAN_MENS":20,
			};
		////// 이동버튼 클릭시 이전/다음 이미지로 변경하기 /////
		$(".abtn").click(function(){
			var idx=$(this).index(".abtn");//.abtn 중 순번(0,1)
			// index() - 아무값없이 사용하면 자식요소 중 순번을 리턴함!
//			console.log(idx);
			// 1.현재 큰 이미지의 src값에서 숫자만 추출하기
			var csrc=$("#dpbox img").attr("src");
			var inum=Number(csrc.split("/")[2].split(".")[0]);// 값을 잘라서 숫자만 추출
			var fnm=csrc.split("/")[1];//폴더명
			console.log("이미지번호:"+inum+"/폴더명:"+fnm);
			console.log("폴더의이미지수:"+icnt[fnm]);
			// 2. 오른쪽버튼(1번)일 경우 이미지번호 증가
			if(idx===1){//// 오른쪽 버튼 클릭시
				inum++;
				if(inum===icnt[fnm]+1){inum=1;}//한계값				
			}//// 오른쪽버튼 if문 ////////////////
			
			// 3. 왼쪽 버튼(0번)일 경우 이미지번호 감소
			else if(idx===0){//// 왼쪽버튼 클릭시
				inum--;//1씩감소
				if(inum===0){inum=icnt[fnm];}//한계값				
			}///// 왼쪽버튼 else if문 ////////////
			
			// 4. 이미지 변경하여 다시 #dpbox에 넣기
			$("#dpbox").html('<img src="images/'+fnm+"/"+inum+'.png" alt="big image">');
			
			
			
		});//////////// click ///////////////////////////////////
		
	
	
	
});///// jQB ///////////////////////////////////////////////////////