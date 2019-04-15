// const's
const $userTitleSelection = $('#title');
const $otherTitle = $('#other-title');
const $designSelection = $('#design');
const $activitySet = $('.activities input');

const $username = $('#name');
const $email = $('#mail');

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

// Payment Const´s
const $payment = $('#payment');
const $creditCard = $('#credit-card');
const $paypal = $('#credit-card').next();
const $bitcoin = $paypal.next();
const $creditCardNumber = $('#cc-num');
const $zipCode = $('#zip');
const $cvv = $('#cvv');

// Submit Button
const $submitButton = $('button[type="submit"]');

// Hiding the "Other Job Role" by default
$(window).on('load', function(){
  // Hiding the "Other Job Role"
  $otherTitle.hide();
  // Hiding colors-js-puns by default
  $("#colors-js-puns").hide();
  // Hide Bitcoin and Paypal informations
  $('#payment option[value="credit card"]').attr('selected', 'selected');
  $('#payment option[value="select_method"]').attr('disabled', 'disabled');
  $paypal.hide();
  $bitcoin.hide();
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

$('.activities').append('<label id="totalSum"></label>');

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

// Listener for fieldset .activities
$activitySet.on('change', function(){
  // update Total Sum text
  updateSum(sum);
});

// Listener for Payment
$payment.on('change', function(){
  if (this.value === 'credit card') {
    $paypal.hide();
    $bitcoin.hide();
    $creditCard.show();
  } else if (this.value === 'paypal') {
    $creditCard.hide()
    $bitcoin.hide();
    $paypal.show();
  } else if (this.value === 'bitcoin') {
    $creditCard.hide()
    $paypal.hide();
    $bitcoin.show();
  } else {

  }
});

const $usernameValidation = () => {
  if ($('#username_error').length) {
    $('#username_error').remove();
    $('#name').css('border', '')
  }
  if ( !$username.val()){
    $('#name').css('marginBottom', '0px').css('border', '1px solid red');
    $('#name')
      .after('<span id="username_error">Please provide a Username</span>')
    $('#username_error').css('color', 'red')
    $('#mail').prev().css('marginTop', '10px')
  }
};

const $emailValidation = () => {
  let $jobRole = $('#mail').next();
  if ($('#invalidMail').length) {
    $('#invalidMail').remove();
    $('#mail').css('border', '');
  }
  if ( $email.val() ) {
    let $regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let valid = $regex.test($email.val());
    if ( valid === false ) {
      $('#mail').after('<span id="invalidMail">Invalid Email</span>');
      $('#invalidMail').css('color', 'red').css('marginTop', '10px');
      $('#mail').css('marginBottom', '0').css('border', '1px solid red');
      $jobRole.css('marginTop', '10px');
    }
  } else {
    $('#mail').after('<span id="invalidMail">Email field can not be blank</span>');
    $('#invalidMail').css('color', 'red').css('marginTop', '10px');
    $('#mail').css('marginBottom', '0').css('border', '1px solid red');
    $jobRole.css('marginTop', '10px');
  }
};

const $activityValidation = () => {
  if ($('#activityError').length) {
    $('#activityError').remove();
  }
  if ($('.activities input[type="checkbox"]:checked').length < 1) {
    $('.activities').append('<span id="activityError">At least one acitivity has to be selected.</span>');
    $('.activities span').css('color', 'red');
  }
};

const $creditCardNumberValidation = () => {
  const ccRegex = /^\d{13,15}$/;
  let validCC = ccRegex.test($creditCardNumber.val());
  if ( validCC === false) {
    $('label[for="cc-num"]').html('Invalid Card number.')
      .css('color', 'red');
  } else {
    $('label[for="cc-num"]').html('Card Number:')
      .css('color', 'black');
  }
};

const $zipCodeValidation = () => {
  const zipCodeRegex = /^\d{5}$/;
  let validZipCode = zipCodeRegex.test($zipCode.val());
  if ( validZipCode === false) {
    $('label[for="zip"]').html('Invalid Zip Code.')
      .css('color', 'red');
  } else {
    $('label[for="zip"]').html('Zip Code:')
      .css('color', 'black');
  }
};

const $cvvValidation = () => {
  const cvvRegex = /^\d{3}$/;
  let validCvv = cvvRegex.test($cvv.val());
  if ( validCvv === false) {
    $('label[for="cvv"]').html('Invalid CVV.')
      .css('color', 'red');
  } else {
    $('label[for="cvv"]').html('CVV:')
      .css('color', 'black');
  }
};

$submitButton.on('click', function(e){
  e.preventDefault();
  $usernameValidation();
  $emailValidation();
  $activityValidation();
  $creditCardNumberValidation();
  $zipCodeValidation();
  $cvvValidation();
});













// breaker
