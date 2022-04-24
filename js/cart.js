function step2() {
	document.getElementById('_inner').innerHTML = `
	<div class="bars">
		<div class="step2bar1">
			<div class="step" id="step2step1"><b>STEP 1</div>
		</div>
		<div class="step2bar2">
			<div class="step" id="step2step2">STEP 2</div>
		</div>
		<div class="step2bar1">
			<div class="step" id="step2step3">STEP 3</b></div>
		</div>
	</div>

	<form action="#" method="post" onsubmit="return false">
		<div class="shipping_info">Shipping Details</div>
		<div class="row" id="row1">
			<label for="firstname">FIRST NAME</label>
			<input type="text" placeholder="First Name" name="firstname" id="firstname" required>
		</div>
		<div class="row" id="row2">
			<label for="lastname">LAST NAME</label>
			<input type="text" placeholder="Last Name" name="lastname" id="lastname" required>
		</div>
		<div class="row" id="row3">
			<label for="mobile">MOBILE NUMBER</label>
			<input type="text" placeholder="Mobile Number" name="mobile" id="mobile" required>
		</div>
		<div class="row" id="row4">
			<label for="email">E-MAIL</label>
			<input type="text" placeholder="E-mail"  name="email" id="email" required>
		</div>
		<div class="row" id="row5">
			<label for="pincode">PINCODE</label>
			<input type="text" placeholder="Pincode" name="pincode" id="pincode" required>
		</div>
		<div class="row" id="row6">
			<label for="state">STATE</label>
			<input type="text" placeholder="State" name="state" id="state" required>
		</div>
		<div class="row" id="row7">
			<label for="address">ADDRESS</label>
			<textarea rows="2" placeholder="Address" name="address" id="address" required></textarea>
		</div>
		<div class="row" id="row8">
			<label>DELIVERY TYPE</label>
			<label for="delivery1">Home (All day)</label>
			<input type="radio" name="delivery" id="delivery1" value="Home">
			<label for="delivery2">Work (9 AM - 5 PM)</label>
			<input type="radio" name="delivery" id="delivery2" value="Work">
		</div>
		<div class="save_info">
			<input type="submit" name="submit" id="submit" value="SAVE" onclick="submit()">
		</div>
	</form>
	<button class="continue" id="step2cont" onclick="step3()">CONTINUE</button>
	`
}

function step3() {
	document.getElementById('_inner').innerHTML = `
	<div class="bars">
		<div class="step3bar1">
			<div class="step" id="step3step1"><b>STEP 1</div><div class="step" id="step3step2">STEP 2</div>
		</div>
		<div class="step3bar2">
			<div class="step" id="step1">STEP 3</b></div>
		</div>
	</div>
	<div class="review_items">
		<div class="invcount">Review cart before checkout</div>
		<div class="review_item">
			<div class="review_item_img"><img src="images/scrunchy.jpg"></div>
				<div class="review_item_name">Scrunchies</div>
				<div class="review_item_specs">
					ITEM: A001<br>
					SIZE: S<br>
					COLOR: GREEN<br>
					QTY: 6
				</div>
		</div>
		<div class="review_item">
			<div class="review_item_img"><img src="images/baby1.jpg"></div>
				<div class="review_item_name">Frock</div>
				<div class="review_item_specs">
					ITEM: A002<br>
					SIZE: S<br>
					COLOR: ORANGE<br>
					QTY: 1
				</div>
		</div>
		<div class="review_item">
			<div class="review_item_img"><img src="images/baby2.jpg"></div>
				<div class="review_item_name">Winter Wear Suit</div>
				<div class="review_item_specs">
					ITEM: A003<br>
					SIZE: S<br>
					COLOR: RED<br>
					QTY: 1
				</div>
		</div>
	</div>
	<div class="checkout">
		<div class="bill_left">
			<p>SUBTOTAL:</p>
			<p>SHIPPING CHARGE:</p>
		</div>
		<div class="bill_right">
			<span>&#x20B9;400</span><br><br>
			<span>&#x20B9;500</span>
		</div>
		<div class="total_word">TOTAL</div>
		<div class="grand" id="grand"><span>&#x20B9;</span>499</div>
	</div>
	<div class="checkout_button" onclick="step4()"><p>CHECKOUT &#10003;</p></div>
	`
}

function step4() {
	location.href = "payment.html";
}

function submit(){
	document.getElementById('submit').value = "SAVED";
}
