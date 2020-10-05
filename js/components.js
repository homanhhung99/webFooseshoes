let components = {}
components.signIn = `
<!-- start header -->
<div class="top_bg">
<div class="wrap">
	<div class="header">
		<div class="logo">
			<a href="index.html"><img src="images/logo.png" alt=""/></a>
		</div>
		 <div class="log_reg">
				<ul>
					<li><a href="login.html">Login</a> </li>
					<span class="log"> or </span>
					<li><a href="register.html">Register</a> </li>								   
					<div class="clear"></div>
				</ul>
		</div>	
		<div class="web_search">
		 	<form>
				<input type="text" value="" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}">
				<input type="submit" value=" " />
			</form>
	    </div>						
		<div class="clear"></div>
	</div>	
</div>
</div>
<!-- start header_btm -->
<div class="wrap">
<div class="header_btm">
		<div class="menu">
			<ul>
				<li class="active"><a href="index.html">Home</a></li>
				<li><a href="products.html">products</a></li>
				<li><a href="about.html">about</a></li>
				<li><a href="index.html">pages</a></li>
				<li><a href="blog.html">blog</a></li>
				<li><a href="contact.html">Contact</a></li>
				<div class="clear"></div>
			</ul>
		</div>
		<div id="smart_nav">
			<a class="navicon" href="#menu-left"> </a>
		</div>
		<nav id="menu-left">
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="products.html">products</a></li>
				<li><a href="about.html">about</a></li>
				<li><a href="index.html">pages</a></li>
				<li><a href="blog.html">blog</a></li>
				<li><a href="contact.html">Contact</a></li>
				<div class="clear"></div>
			</ul>
		</nav>
	<div class="header_right">
		<ul>
			<li><a href="#"><i  class="art"></i><span class="color1">30</span></a></li>
			<li><a href="#"><i  class="cart"></i><span>0</span></a></li>
		</ul>
	</div>
	<div class="clear"></div>
</div>
</div>
<!-- start top_bg -->
<div class="top_bg">
<div class="wrap">
<div class="main_top">
	<h4 class="style">create an account or login</h4>
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">
<div class="main">
	<div class="login_left">
		<h3>new customers</h3>
		<p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping address, view and track your orders in your accoung and more.</p>
		<div class="btn">
			<form>
				<input type="button"  onclick="location.href='register.html';" value="create an account" />
			</form>
		</div>
	</div>
	<div class="login_left">
		<h3>registered customers</h3>
		<p>if you have any account with us, please log in.</p>
	<!-- start registration -->
	<div class="registration">
		<!-- [if IE] 
		    < link rel='stylesheet' type='text/css' href='ie.css'/>  
		 [endif] -->  
		  
		<!-- [if lt IE 7]>  
		    < link rel='stylesheet' type='text/css' href='ie6.css'/>  
		<! [endif] -->  
		<!-- <script>
			(function() {
		
			// Create input element for testing
			var inputs = document.createElement('input');
			
			// Create the supports object
			var supports = {};
			
			supports.autofocus   = 'autofocus' in inputs;
			supports.required    = 'required' in inputs;
			supports.placeholder = 'placeholder' in inputs;
		
			// Fallback for autofocus attribute
			if(!supports.autofocus) {
				
			}
			
			// Fallback for required attribute
			if(!supports.required) {
				
			}
		
			// Fallback for placeholder attribute
			if(!supports.placeholder) {
				
			}
			
			// Change text inside send button on submit
			var send = document.getElementById('register-submit');
			if(send) {
				send.onclick = function () {
					this.innerHTML = '<div></div>';
				}
			}
		
		})();
		</script> -->
	<div class="registration_left">
		<a href="#"><div class="reg_fb"><img src="images/facebook.png" alt=""><i>sign in using Facebook</i><div class="clear"></div></div></a>
		 <div class="registration_form">
		 <!-- Form -->
			<form id="form-sign-in" method="post">
				<div>
					<label>
						<input id="email" placeholder="email:" type="email" tabindex="3" required="">
					</label>
				</div>
				<span class="message-error warning" id="email-error"></span>
				<div>
					<label>
						<input id="password" placeholder="password" type="password" tabindex="4" required="">
					</label>
				</div>	
				<span class="message-error warning" id="password-error"></span>					
				<div>
					<input type="submit" value="sign in" id="register-submit">
				</div>
				<div class="message-error warning" id="sign-in-error"></div>
				<div class="forget">
					<a href="#">forgot your password</a>
				</div>
			</form>
			<!-- /Form -->
		</div>
	</div>
	</div>
	<!-- end registration -->
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_top">
<div class="wrap">
<div class="footer">
	<!-- start grids_of_3 -->
	<div class="span_of_3">
		<div class="span1_of_3">
			<h3>text edit</h3>
			<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
		</div>
		<div class="span1_of_3">
			<h3>twitter widget</h3>
			<p><a href="#">@Contrarypopular</a> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give <a href="#">@accountofsystem</a> </p>
			<p class="top">19 days ago</p>
			<p class="top"><a href="#">@Contrarypopular</a> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give <a href="#">@accountofsystem</a> </p>
			<p class="top">19 days ago</p>
		</div>
		<div class="span1_of_3">
			<h3>flickr widget</h3>
			<ul class="f_nav">
				<li><a href="#"><img src="images/f_pic1.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic2.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic3.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic4.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic5.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic6.jpg" alt="" /> </a></li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_mid">
<div class="wrap">
<div class="footer">
	<div class="f_search">
		<form>
			<input type="text" value="" placeholder="Enter email for newsletter" />
			<input type="submit" value=""/>
		</form>
	</div>
	<div class="soc_icons">
			<ul>
				<li><a class="icon1" href="#"></a></li>
				<li><a class="icon2" href="#"></a></li>
				<li><a class="icon3" href="#"></a></li>
				<li><a class="icon4" href="#"></a></li>
				<li><a class="icon5" href="#"></a></li>
			</ul>	
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_bg">
<div class="wrap">
<div class="footer">
		<!-- scroll_top_btn -->
	    <script type="text/javascript">
			$(document).ready(function() {
			
				var defaults = {
		  			containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
		 		};
				
				
				$().UItoTop({ easingType: 'easeOutQuart' });
				
			});
		</script>
		 <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a>
		<!--end scroll_top_btn -->
	<div class="f_nav1">
		<ul>
			<li><a href="#">home /</a></li>
			<li><a href="#">support /</a></li>
			<li><a href="#">Terms and conditions /</a></li>
			<li><a href="#">Faqs /</a></li>
			<li><a href="#">Contact us</a></li>
		</ul>
		</div>
	<div class="copy">
		<p class="link"><span>© All rights reserved></a></span></p>
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
`
components.index = `
<!-- start header -->
<div class="top_bg">
<div class="wrap">
	<div class="header">
		<div class="logo">
			<a href="index.html"><img src="images/logo.png" alt=""/></a>
		</div>
		 <div class="log_reg">
				<ul>
					<li><a href="#" id="sign-in-link">Login</a> </li>
					<span class="log"> or </span>
					<li><a href="#" id="sign-up-link">Register</a> </li>								   
					<div class="clear"></div>
				</ul>
		</div>	
		<div class="web_search">
		 	<form>
				<input type="text" value="" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}">
				<input type="submit" value=" " />
			</form>
	    </div>						
		<div class="clear"></div>
	</div>	
</div>
</div>
<!-- start header_btm -->
<div class="wrap">
<div class="header_btm">
		<div class="menu">
			<ul>
				<li class="active"><a href="index.html">Home</a></li>
				<li><a href="products.html">products</a></li>
				<li><a href="about.html">about</a></li>
				<li><a href="index.html">pages</a></li>
				<li><a href="blog.html">blog</a></li>
				<li><a href="contact.html">Contact</a></li>
				<div class="clear"></div>
			</ul>
		</div>
		<div id="smart_nav">
			<a class="navicon" href="#menu-left"> </a>
		</div>
		<nav id="menu-left">
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="products.html">products</a></li>
				<li><a href="about.html">about</a></li>
				<li><a href="index.html">pages</a></li>
				<li><a href="blog.html">blog</a></li>
				<li><a href="contact.html">Contact</a></li>
				<div class="clear"></div>
			</ul>
		</nav>
	<div class="header_right">
		<ul>
			<li><a href="#"><i  class="art"></i><span class="color1">30</span></a></li>
			<li><a href="#"><i  class="cart"></i><span>0</span></a></li>
		</ul>
	</div>
	<div class="clear"></div>
</div>
</div>
<!-- start slider -->
<div class="slider">
				<!---start-image-slider---->
				<div class="image-slider">
					 <div class="wrapper">
                <div id="ei-slider" class="ei-slider">
                    <ul class="ei-slider-large">
						<li>
                            <img src="images/slider-image1.jpg" alt="image06"/>
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image2.jpg" alt="image01" />
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image3.jpg" alt="image02" />
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image4.jpg" alt="image03"/>
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image1.jpg" alt="image04"/>
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image5.jpg" alt="image05"/>
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <img src="images/slider-image3.jpg" alt="image07"/>
                            <div class="ei-title">
                            	<h3 class="btn">$145.99</h3>
                                <h2>pink shoes <br>	2013 collections</h2>
                                <h3 class="active">It is a long established fact that a reader<br>
                                	Lorem Ipsum is that it has a more-or-less 
                                </h3>
                                <h3>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_1.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_2.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_3.png" alt=""></a>
                                	<a class="ei_icons" href="details.html"><img src="images/icon_4.png" alt=""></a>
                                </h3>
                            </div>
                        </li>
                    </ul><!-- ei-slider-large -->
                    <ul class="ei-slider-thumbs">
                        <li class="ei-slider-element">Current</li>
						<li>
							<a href="#">
								<span class="active">pink shoes</span>
								<p>now of $145.99</p> 
							</a>
							<img src="images/thumbs/1.jpg" alt="thumb01" />
						</li>
                        <li class="hide"><a href="#"><span>anns field</span><p>limited edition</p> </a><img src="images/thumbs/2.jpg" alt="thumb01" /></li>
                        <li  class="hide1"><a href="#"><span>prada</span><p>summer is coming</p></a><img src="images/thumbs/3.jpg" alt="thumb02" /></li>
                        <li class="hide1"><a href="#"><span>casa devi</span><p>all colors available</p> </a><img src="images/thumbs/4.jpg" alt="thumb03" /></li>
                        <li><a href="#"><span>mellow yellow</span><p>free delivery</p> </a><img src="images/thumbs/1.jpg" alt="thumb04" /></li>
                        <li><a href="#"><span>anns field</span><p>limited edition</p> </a><img src="images/thumbs/5.jpg" alt="thumb05" /></li>
                        <li><a href="#"><span>anns field</span><p>limited edition</p> </a><img src="images/thumbs/3.jpg" alt="thumb07" /></li>
                    </ul><!-- ei-slider-thumbs -->
                </div><!-- ei-slider -->
            </div><!-- wrapper -->
		</div>
		<!---End-image-slider---->	
</div>
<!-- start image1_of_3 -->
<div class="top_bg">
<div class="wrap">
<div class="main1">
	<div class="image1_of_3">
		<img src="images/img1.jpg" alt=""/>
	    <a href="details.html"><span class="tag">on sale</span></a>
	</div>
	<div class="image1_of_3">
		<img src="images/img2.jpg" alt=""/>
		<a href="details.html"><span class="tag">special offers</span></a>
	</div>
	<div class="image1_of_3">
		<img src="images/img3.jpg" alt=""/>
		<a href="details.html"><span class="tag">must have</span></a>
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">
<div class="main">
	<div class="top_main">
		<h2>new arrivals on fooseshoes</h2>
		<a href="#">show all</a>
		<div class="clear"></div>
	</div>
	<!-- start grids_of_3 -->
	<div class="grids_of_3">
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic1.jpg" alt=""/>
				<h3>even & odd</h3>
				<span class="price">$145,99</span>
			</a>
		</div>
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic2.jpg" alt=""/>
				<h3>buffalo decollete</h3>
				<span class="price">$185,99</span>
				<span class="price1 bg">on sale</span>
			</a>
		</div>
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic3.jpg" alt=""/>
				<h3>even & odd</h3>
				<span class="price">$145,99</span>
			</a>
		</div>
		<div class="clear"></div>
	</div>
	<div class="top_main">
		<h2>best sellers of the month</h2>
		<a href="#">show all</a>
		<div class="clear"></div>
	</div>
	<!-- start grids_of_3 -->
	<div class="grids_of_3">
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic4.jpg" alt=""/>
				<h3>buffalo decollete</h3>
				<span class="price">$145,99</span>
			</a>
		</div>
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic5.jpg" alt=""/>
				<h3>even & odd</h3>
				<span class="price">$185,99</span>
			</a>
		</div>
		<div class="grid1_of_3">
			<a href="details.html">
				<img src="images/pic6.jpg" alt=""/>
				<h3>buffalo decollete</h3>
				<span class="price">$145,99</span>
				<span class="price1 bg1">out of stock</span>
			</a>
		</div>
		<div class="clear"></div>
	</div>
	<div class="clear"></div>
	<!-- start grids_of_2 -->
	<div class="grids_of_2">
		<div class="grid1_of_2">
			<div class="span1_of_2">
				<h2>free shipping</h2>
				<p>Lorem Ipsum is simply dummy  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>
			<div class="span1_of_2">
				<h2>testimonials</h2>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using [...]</p>
			</div>
		</div>
		<div class="grid1_of_2 bg">
			<h2>blog news</h2>
			<div class="grid_date">
				<div class="date1"> 
					<h4>apr 01</h4>
				</div>
				<div class="date_text">
					<h4><a href="#"> Donec vehicula est ac augue consectetur,</a></h4>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p> 
				</div>
				<div class="clear"></div>
			</div>
			<div class="grid_date">
				<div class="date1"> 
					<h4>feb 01</h4>
				</div>
				<div class="date_text">
					<h4><a href="#"> The standard chunk of Lorem Ipsum used since ,,</a></h4>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from </p> 
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_top">
<div class="wrap">
<div class="footer">
	<!-- start grids_of_3 -->
	<div class="span_of_3">
		<div class="span1_of_3">
			<h3>text edit</h3>
			<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
		</div>
		<div class="span1_of_3">
			<h3>twitter widget</h3>
			<p><a href="#">@Contrarypopular</a> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give <a href="#">@accountofsystem</a> </p>
			<p class="top">19 days ago</p>
			<p class="top"><a href="#">@Contrarypopular</a> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give <a href="#">@accountofsystem</a> </p>
			<p class="top">19 days ago</p>
		</div>
		<div class="span1_of_3">
			<h3>flickr widget</h3>
			<ul class="f_nav">
				<li><a href="#"><img src="images/f_pic1.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic2.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic3.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic4.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic5.jpg" alt="" /> </a></li>
				<li><a href="#"><img src="images/f_pic6.jpg" alt="" /> </a></li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_mid">
<div class="wrap">
<div class="footer">
	<div class="f_search">
		<form>
			<input type="text" value="" placeholder="Enter email for newsletter" />
			<input type="submit" value=""/>
		</form>
	</div>
	<div class="soc_icons">
			<ul>
				<li><a class="icon1" href="#"></a></li>
				<li><a class="icon2" href="#"></a></li>
				<li><a class="icon3" href="#"></a></li>
				<li><a class="icon4" href="#"></a></li>
				<li><a class="icon5" href="#"></a></li>
			</ul>	
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
<!-- start footer -->
<div class="footer_bg">
<div class="wrap">
<div class="footer">
		<!-- scroll_top_btn -->
	    <script type="text/javascript">
			$(document).ready(function() {
			
				var defaults = {
		  			containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
		 		};
				
				
				$().UItoTop({ easingType: 'easeOutQuart' });
				
			});
		</script>
		 <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a>
		<!--end scroll_top_btn -->
	<div class="f_nav1">
		<ul>
			<li><a href="#">home /</a></li>
			<li><a href="#">support /</a></li>
			<li><a href="#">Terms and conditions /</a></li>
			<li><a href="#">Faqs /</a></li>
			<li><a href="#">Contact us</a></li>
		</ul>
		</div>
	<div class="copy">
		<p class="link"><span>© All rights reserved></a></span></p>
	</div>
	<div class="clear"></div>
</div>
</div>
</div>`