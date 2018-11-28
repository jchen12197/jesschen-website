$(document).ready(function() {

  $("#linkedin1").mouseover(
      function() {
        $(this).attr("src","./assets/img/icons/linkedin2.svg").hide().fadeIn(100);

    }).mouseout(function() {
      $(this).attr("src","./assets/img/icons/linkedin1.svg");
  });

  $("#github1").mouseover(
      function() {
        this.src = "./assets/img/icons/github2.svg";
    }).mouseout(function() {
      this.src = "./assets/img/icons/github1.svg";
  });

  $("#email1").mouseover(
      function() {
        this.src = "./assets/img/icons/email2.svg";
    }).mouseout(function() {
      this.src = "./assets/img/icons/email1.svg";
  });

  $("#resume1").mouseover(
      function() {
        this.src = "./assets/img/icons/resume2.svg";

    }).mouseout(function() {
      this.src = "./assets/img/icons/resume1.svg";
  });

  $(".bearmaps").hover(
    function() {
      $(".bearmaps-overlay h3").slideDown();
      $(".bearmaps-overlay .line").animate({width:'toggle'}, 400);
    },
    function() {
      $(".bearmaps-overlay h3").slideUp();
      $(".bearmaps-overlay .line").animate({width:'toggle'}, 400);
    }
  );

  $(".monsterescape").hover(
    function() {
      $(".monsterescape-overlay h3").slideDown();
      $(".monsterescape-overlay .line").animate({width:'toggle'}, 400);
    },
    function() {
      $(".monsterescape-overlay h3").slideUp();
      $(".monsterescape-overlay .line").animate({width:'toggle'}, 400);
    }
  );

  $(".nbody").hover(
    function() {
      $(".nbody-overlay h3").slideDown();
      $(".nbody-overlay .line").animate({width:'toggle'}, 400);
    },
    function() {
      $(".nbody-overlay h3").slideUp();
      $(".nbody-overlay .line").animate({width:'toggle'}, 400);
    }
  );

  $(".percolation").hover(
    function() {
      $(".percolation-overlay h3").slideDown();
      $(".percolation-overlay .line").animate({width:'toggle'}, 400);
    },
    function() {
      $(".percolation-overlay h3").slideUp();
      $(".percolation-overlay .line").animate({width:'toggle'}, 400);
    }
  );

  $(".seamcarver").hover(
    function() {
      $(".seamcarver-overlay h3").slideDown();
      $(".seamcarver-overlay .line").animate({width:'toggle'}, 400);
    },
    function() {
      $(".seamcarver-overlay h3").slideUp();
      $(".seamcarver-overlay .line").animate({width:'toggle'}, 400);
    }
  );

  $(".programming-languages").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".programming-languages-info").css("display") == "none") {
        $(".programming-languages-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".programming-languages-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".hobbies").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".hobbies-info").css("display") == "none") {
        $(".hobbies-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".hobbies-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".work-experience").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".work-experience-info").css("display") == "none") {
        $(".work-experience-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".work-experience-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".tools").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".tools-info").css("display") == "none") {
        $(".tools-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".tools-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".courses").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".courses-info").css("display") == "none") {
        $(".courses-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".courses-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".foreign-languages").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".skills-info").css("display") != "none") {
        $(".skills-info").toggle("slide", { direction: "right" });
      }

      if ($(".foreign-languages-info").css("display") == "none") {
        $(".foreign-languages-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "1");
        $(".skills").css("opacity", "0.7");

      } else {
        $(".foreign-languages-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".skills").css("opacity", "1");
      }
  });


  $(".skills").click(
    function() {
      if ($(".info").css("display") != "none") {
        $(".info").toggle("slide", { direction: "right" });
      } else if ($(".programming-languages-info").css("display") != "none") {
        $(".programming-languages-info").toggle("slide", { direction: "right" });
      } else if ($(".hobbies-info").css("display") != "none") {
        $(".hobbies-info").toggle("slide", { direction: "right" });
      } else if ($(".work-experience-info").css("display") != "none") {
        $(".work-experience-info").toggle("slide", { direction: "right" });
      } else if ($(".tools-info").css("display") != "none") {
        $(".tools-info").toggle("slide", { direction: "right" });
      } else if ($(".courses-info").css("display") != "none") {
        $(".courses-info").toggle("slide", { direction: "right" });
      } else if ($(".foreign-languages-info").css("display") != "none") {
        $(".foreign-languages-info").toggle("slide", { direction: "right" });
      }

      if ($(".skills-info").css("display") == "none") {
        $(".skills-info").toggle("slide", {direction: "left"});

        $(".programming-languages").css("opacity", "0.7");
        $(".hobbies").css("opacity", "0.7");
        $(".work-experience").css("opacity", "0.7");
        $(".tools").css("opacity", "0.7");
        $(".courses").css("opacity", "0.7");
        $(".foreign-languages").css("opacity", "0.7");
        $(".skills").css("opacity", "1");

      } else {
        $(".skills-info").toggle("slide", {direction: "right"});
        $(".info").toggle("slide", { direction: "left" });

        $(".programming-languages").css("opacity", "1");
        $(".hobbies").css("opacity", "1");
        $(".work-experience").css("opacity", "1");
        $(".tools").css("opacity", "1");
        $(".courses").css("opacity", "1");
        $(".foreign-languages").css("opacity", "1");
      }
  });






});
