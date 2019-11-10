$(function () {
	
  // Nice Scroll
  $("html").niceScroll({
    cursorcolor:"#39b49a",
    cursorwidth:"10px",
    cursorborder: 0,
    opacity: .4,
	margin: 0,
	zIndex:999999999999999999999
  });

  $(".scroll-top").click(function () {
	  $("html, body").animate({
		  scrollTop:0
	  }, 2000)

  })
	$(window).scroll(function () { 

		// 
		if ($(window).scrollTop() <= 700) {
			$(".scroll-top").animate({
				bottom: "-50px"
			}, 1)
		}
		else
		{
			$(".scroll-top").removeClass("d-none").animate({
				bottom: "80px"
			}, 1)
		}

		// When Scroll The Window, toggle 'active' Class In Navbar 
		$("section").each(function () {
			if ($(window).scrollTop() > $(this).offset().top - ($("header").height() + 20)) {

				var sectionId = $(this).attr("id");
				$(".navbar-bottom .nav-link[data-section='" + sectionId +"']").parent().
				addClass("active").siblings().removeClass("active")
			} 
		})
	})


	console.log($("#doctors").offset().top)


	// Hide Placeholder On Focus
	var placeAttr = "";

	$("input, textarea").focus(function () {

		placeAttr = $(this).attr("placeholder");

		$(this).attr("placeholder", "")

	}).blur(function () {

		$(this).attr("placeholder", placeAttr)
	});



	// Typed Write
	var typed = new Typed("#home .title", {
		strings: ["welcome to life care", "we care your health", "we are expert!"],
		typeSpeed: 50,
		backSpeed: 50,
		backDelay: 1500,
		startDelay: 100,
		loop: true
	});


	// // Toggle Class 'active' Between Section's Links
	$(".navbar-bottom .navbar .navbar-nav .nav-item .nav-link").each(function () { 
		$(this).click(function (e) { 
			e.preventDefault();
			$(this).parent().addClass("active").siblings().removeClass("active");

			$("html, body").animate({
				scrollTop: $("#" + $(this).data("section")).offset().top - 100
			}, 1000);
		});			
	});

	// Height Of Section "home"
	$("#home").css({
		marginTop: $("header").height()
	})

		
	
	$("#about .post-media").each(function () {

		$(this).click(function () {

			// Append 'overlay' for body
			$("body").append("<div Class='overlay'></div>");

			$(".overlay").css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.52)",
				zIndex: 99999
			})

			$(".overlay").append("<div class='fullscreen bg-white'><iframe class='d-block' width='100%' height='330' src='https://www.youtube.com/embed/2rsFmUXf7PM' frameborder='no' allowfullscreen></iframe></div>");
			
			// Append 'Close' Button To 'Fullscreen'
			$(".fullscreen").append("<div class='close mt-3 ml-auto'><i class='fas fa-times fa-2x'></i></div>").fadeIn(400)

			$(".fullscreen").click(function (e) {
				e.stopPropagation()
			})

			$(".close, .overlay").click(function () {
				$(".overlay").fadeOut(400).remove()
			})

			// Close 'overlay' By Click On "Esc" Key
			$(document).keydown(function (e) {
				if (e.keyCode == 27) {
					$(".overlay").fadeOut(400).remove()
				}
			});
		});
	});	

	$("#about .unlink").each(function () {

		$(this).click(function () {

			// Append 'overlay' for body
			$("body").append("<div Class='overlay'></div>");

			$(".overlay").css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.52)",
				zIndex: 99999
			})

			var img_src = $(this).prev("img").attr("src");
			$(".overlay").append("<div class='fullscreen-2 bg-white'><img src='" + img_src + "' class='img-fluid'></div>");	
						
			// Append 'Close' Button To 'Fullscreen'
			$(".fullscreen-2").append("<div class='close mt-3 ml-auto'><i class='fas fa-times fa-2x'></i></div>").fadeIn(400)

			$(".fullscreen-2").click(function (e) {
				e.stopPropagation()
			})

			$(".close, .overlay").click(function () {
				$(".overlay").fadeOut(400).remove()
			})

			// Close 'overlay' By Click On "Esc" Key
			$(document).keydown(function (e) {
				if (e.keyCode == 27) {
					$(".overlay").fadeOut(400).remove()
				}
			});
		});
	});	


	/*$("#about .unlink, #about .post-media").each(function () {
		const img_src = $(this).prev("img").attr("src"),
			  image = "<div class='fullscreen bg-white'><img src='" + img_src + "' class='img-fluid'></div>",
			  video = "<div class='fullscreen bg-white'><iframe class='d-block' width='100%' height='330' src='https://www.youtube.com/embed/2rsFmUXf7PM' frameborder='no' allowfullscreen></iframe></div>";
		$(this).click(function () {

			// Append 'overlay' for body
			$("body").append("<div Class='overlay'></div>");

			$(".overlay").css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.52)",
				zIndex: 99999
			})

			// 
				//$(".overlay").append("<div class='fullscreen bg-white'><iframe class='d-block' width='100%' height='330' src='https://www.youtube.com/embed/2rsFmUXf7PM' frameborder='no' allowfullscreen></iframe></div>");
			
				$(".overlay").append("<div class='fullscreen bg-white'><img src='" + img_src + "' class='img-fluid'></div>")
			

			
			// Append 'Close' Button To 'Fullscreen'
			$(".fullscreen").append("<div class='close mt-3 ml-auto'><i class='fas fa-times fa-2x'></i></div>").fadeIn(400)

			$(".fullscreen").click(function (e) {
				e.stopPropagation()
			})

			$(".close, .overlay").click(function () {
				$(".overlay").fadeOut(400)
			})

			// Close 'overlay' By Click On "Esc" Key
			$(document).keydown(function (e) {
				if (e.keyCode == 27) {
					$(".overlay").fadeOut(400)
				}
			});
		})
	});*/



})
/*
// Loading The Page
$(window).on("load", function () {
	$(".loading").fadeOut(3000, function () {
		$("body").removeClass("overflow-hidden");
	})
})
*/