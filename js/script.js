// const's
const $userTitleSelection = $('#title');
const $otherTitle = $('#other-title');
const $designSelection = $('#design');
const $activitySet = $('.activities input');

// Hiding the "Other Job Role" by default
$(window).on('load', function(){
  // Hiding the "Other Job Role"
  $otherTitle.hide();
  // Hiding colors-js-puns by default
  $("#colors-js-puns").hide();
});


// If Job Role of "Other" gets picked, unhide other-title text field
$userTitleSelection.on('change', function(){
  if (this.value === "other"){
    $otherTitle.show();
  }
});

// Listener for T-Shirt Info Design -
// filters out colors by selection
$designSelection.on('change', function(){
  $("#colors-js-puns").show();
  $('#color option').hide();
  // remove selected attribute
  $('#color option').attr('selected', false);
  // hide and show options based on selection "js puns" or "hear js"
  if (this.value === "js puns"){
    $('option[value="cornflowerblue"]').attr('selected', 'selected');
    $('option[value="cornflowerblue"]').show();
    $('option[value="darkslategrey"]').show();
    $('option[value="gold"]').show();
  } else if (this.value === "heart js"){
    $('option[value="tomato"]').attr('selected', 'selected');
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
  } else {
    $("#colors-js-puns").hide();
  }
});

// Activity checkboxes
const $all = $('.activities input[name="all"]');
const $jsFrameworks = $('.activities input[name="js-frameworks"]');
const $jsLibs = $('.activities input[name="js-libs"]');
const $express = $('.activities input[name="express"]');
const $node = $('.activities input[name="node"]');
const $buildTools = $('.activities input[name="build-tools"]');
const $npm = $('.activities input[name="npm"]');


// $all.on('change', function(){
//   if () {
//
//   }
// });

$jsFrameworks.on('change', function(){
  if ($(this).is(':checked')) {
    console.log("yay")
    $('.activities input[name="express"]').attr("disabled", true);
  } else {
    $('.activities input[name="express"]').attr("disabled", false);
  }
});




// Tuesday 1-pm-4pm
// js-libs
// node
// Tuesday 9am-12pm
// express
// js-frameworks
// Wednesday 9am-12pm
// build-tools
// Wednesday 1pm-4pm
// npm


//
//
//
// $all.attr("disabled", true);
// $jsFrameworks.attr("disabled", true);
// $jsLibs.attr("disabled", true);
// $express.attr("disabled", true);
// $node.attr("disabled", true);
// $buildTools.attr("disabled", true);
// $npm.attr("disabled", true);



// ”Register for Activities” section
