var isFormValid=!0,$grid=$(".portfolio-items").isotope({itemSelector:".item"});$(".filters").on("click","button",function(){var t=$(this).attr("data-filter");$grid.isotope({filter:t})}),$grid.imagesLoaded().progress(function(){$grid.isotope("layout")}),$("#gform").submit(function(){return $("#gform input").each(function(){0==$.trim($(this).val()).length?($(this).addClass("warning"),isFormValid=!1):$(this).removeClass("warning")}),$("#gform textarea").each(function(){0==$.trim($(this).val()).length?($(this).addClass("warning"),isFormValid=!1):($(this).removeClass("warning"),isFormValid=!0)}),isFormValid?void 0:!1}),$("#gform input").focus(function(){$(this).removeClass("warning")}),$("#gform textarea").focus(function(){$(this).removeClass("warning")});
