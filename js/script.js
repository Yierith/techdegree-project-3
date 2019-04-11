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
  } else {
    $otherTitle.hide();
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
// Sum in total label
let sum = 0;
$('.activities').append('<label id="totalSum"></label>')

// Update and show the Total Sum or hide it if Sum = $0
const updateSum = (sum) => {
  if (sum === 0) {
    $('#totalSum').hide();
  }else {
    $('#totalSum').text('Total: $'+sum);
    $('#totalSum').show();
  }
}

// Disable or Enable activities when on same day and time
// aswell change css to line-through if disabled or non when enabled
const disableOrEnableActivity = (name, status) => {
  if ( status === true){
    $('.activities input[name="'+name+'"]').parent().css("text-decoration", "line-through");
  } else {
    $('.activities input[name="'+name+'"]').parent().css("text-decoration", "none");
  }
  $('.activities input[name="'+name+'"]').attr("disabled", status);
}

// Listener vor Activities label "all"
$all.on('change', function(){
  if ($(this).is(':checked')) {
    sum += 200;
  } else {
    sum -= 200;
  }
});

// Listener vor Activities label "js-libs"
$jsLibs.on('change', function(){
  if ($(this).is(':checked')) {
    // disable same day and time Activity
    disableOrEnableActivity('node', true);
    sum += 100;
  } else {
    // enable same day and time Activity because of uncheck
    disableOrEnableActivity('node', false);
    sum -= 100;
  }
});

// Listener vor Activities label "node"
$node.on('change', function(){
  if ($(this).is(':checked')) {
    // disable same day and time Activity
    disableOrEnableActivity('js-libs', true);
    sum += 100;
  } else {
    // enable same day and time Activity because of uncheck
    disableOrEnableActivity('js-libs', false);
    sum -= 100;
  }
});

// Listener vor Activities label "express"
$express.on('change', function(){
  if ($(this).is(':checked')) {
    // disable same day and time Activity
    disableOrEnableActivity('js-frameworks' , true);
    sum += 100;
  } else {
    // enable same day and time Activity because of uncheck
    disableOrEnableActivity('js-frameworks' , false);
    sum -= 100;
  }
});

// Listener vor Activities label "js-frameworks"
$jsFrameworks.on('change', function(){
  if ($(this).is(':checked')) {
    // disable same day and time Activity
    disableOrEnableActivity('express' , true);
    sum += 100;
  } else {
    // enable same day and time Activity because of uncheck
    disableOrEnableActivity('express' , false);
    sum -= 100;
  }
});

// Listener vor Activities label "build-tools"
$buildTools.on('change', function(){
  if ($(this).is(':checked')) {
    sum += 100;
  } else {
    sum -= 100;
  }
});

// Listener vor Activities label "npm"
$npm.on('change', function(){
  if ($(this).is(':checked')) {
    sum += 100;
  } else {
    sum -= 100;
  }
});

// Listener for fieldset .activities and update Total Sum text
$activitySet.on('change', function(){
  updateSum(sum);
});
