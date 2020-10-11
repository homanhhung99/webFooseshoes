let components = {}
components.headerProfile = `
<div class="header-top">
		<div class="wrap"> 
		   <div class="logo">
			   <a href="index.html"><img src="images/logo.png" alt=""/></a>
		   </div>
		   <div class="cssmenu">
			  <ul>
			  <li><a href="#" class="shop-btn" id="shop">Store Locator</a></li> 
			  <li><a href="#" class="sign-in-btn" id="sign-in-link">My Account<span id="myNameAccount"></span></a></li>
			  <li><a href="#" class="check-out" id="check-out">CheckOut</a></li>
			  <li><button class="cart-btn" id="cart">
			  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
			  Cart
		  </button>
		  </li>
			  </ul>
		   </div>
		   <ul class="icon2 sub-icon2 profile_img">
			   <li><a class="active-icon c2" href="#"> </a>
				   <ul class="sub-icon2 list">
					   <li><h3>Products</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
			   </li>
		   </ul>
		   <div class="clear"></div>
		</div>
		</div>
		<div class="header-bottom">
			<div class="wrap">
			  <!-- start header menu -->
			<ul class="megamenu skyblue">
			   <li><a class="color1" href="#" id="main">Home</a></li>
			   <li class="grid"><a class="color2" href="#">Men</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">men</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
					<li class="active grid"><a class="color4" href="#">Women</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							<div class="h_nav">
							  <img src="images/nav_img1.jpg" alt=""/>
							</div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>				
				   <li><a class="color5" href="#">Kids</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img2.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
				   <li><a class="color6" href="#">Sale</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>	
							   <div class="h_nav">
								   <h4 class="top">my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color7" href="#">Customize</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="sign-in-link">login</a></li>
									   <li><a href="#" id="sign-up-link">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color8" href="#">Shop</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color9" href="#">Football</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color10" href="#">Running</a></li>
				   <li><a class="color11" href="#">Originals</a></li>
				   <li><a class="color12" href="#">Basketball</a></li>
				   
			  </ul>
			  <div class="clear"></div>
			</div>
		  </div>`
components.header = `
<div class="header-top">
		<div class="wrap"> 
		   <div class="logo">
			   <a href="index.html"><img src="images/logo.png" alt=""/></a>
		   </div>
		   <div class="cssmenu">
			  <ul>
			  <li><a href="#" class="sign-up-btn" id="sign-up-link">Sign up</a></li> 
			  <li><a href="#" class="shop-btn" id="shop">Store Locator</a></li> 
			  <li><a href="#" class="sign-in-btn" id="sign-in-link">My Account<span id="myNameAccount"></span></a></li> 
			  </ul>
		   </div>
		   <ul class="icon2 sub-icon2 profile_img">
			   <li><a class="active-icon c2" href="#"> </a>
				   <ul class="sub-icon2 list">
					   <li><h3>Products</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
			   </li>
		   </ul>
		   <div class="clear"></div>
		</div>
		</div>
		<div class="header-bottom">
			<div class="wrap">
			  <!-- start header menu -->
			<ul class="megamenu skyblue">
			   <li><a class="color1" href="#" id="main">Home</a></li>
			   <li class="grid"><a class="color2" href="#">Men</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">men</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
					<li class="active grid"><a class="color4" href="#">Women</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							<div class="h_nav">
							  <img src="images/nav_img1.jpg" alt=""/>
							</div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>				
				   <li><a class="color5" href="#">Kids</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img2.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
				   <li><a class="color6" href="#">Sale</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>	
							   <div class="h_nav">
								   <h4 class="top">my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color7" href="#">Customize</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="sign-in-link">login</a></li>
									   <li><a href="#" id="sign-up-link">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color8" href="#">Shop</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color9" href="#">Football</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color10" href="#">Running</a></li>
				   <li><a class="color11" href="#">Originals</a></li>
				   <li><a class="color12" href="#">Basketball</a></li>
				   
			  </ul>
			  <div class="clear"></div>
			</div>
		  </div>`
components.main =components.header +
 `<div class="index-banner">
<div class="wmuSlider example1" style="height: 560px;">
 <div class="wmuSliderWrapper">
	 <article style="position: relative; width: 100%; opacity: 1;"> 
		  <div class="banner-wrap">
			  <div class="slider-left">
			   <img src="images/banner1.jpg" alt=""/> 
		   </div>
			<div class="slider-right">
			   <h1>Classic</h1>
			   <h2>White</h2>
			   <p>Lorem ipsum dolor sit amet</p>
			   <div class="btn"><a href="#" id="shop">Shop Now</a></div>
			</div>
			<div class="clear"></div>
		</div>
	   </article>
	  <article style="position: absolute; width: 100%; opacity: 0;"> 
		   <div class="banner-wrap">
			  <div class="slider-left">
			   <img src="images/banner2.jpg" alt=""/> 
		   </div>
			<div class="slider-right">
			   <h1>Classic</h1>
			   <h2>White</h2>
			   <p>Lorem ipsum dolor sit amet</p>
			   <div class="btn"><a href="#" id="shop">Shop Now</a></div>
			</div>
			<div class="clear"></div>
		</div>
	  </article>
	  <article style="position: absolute; width: 100%; opacity: 0;">
		  <div class="banner-wrap">
			  <div class="slider-left">
			   <img src="images/banner1.jpg" alt=""/> 
		   </div>
			<div class="slider-right">
			   <h1>Classic</h1>
			   <h2>White</h2>
			   <p>Lorem ipsum dolor sit amet</p>
			   <div class="btn"><a href="#" id="shop">Shop Now</a></div>
			</div>
			<div class="clear"></div>
		</div>
	  </article>
	  <article style="position: absolute; width: 100%; opacity: 0;">
		  <div class="banner-wrap">
			  <div class="slider-left">
			   <img src="images/banner2.jpg" alt=""/> 
		   </div>
			<div class="slider-right">
			   <h1>Classic</h1>
			   <h2>White</h2>
			   <p>Lorem ipsum dolor sit amet</p>
			   <div class="btn"><a href="#" id="shop">Shop Now</a></div>
			</div>
			<div class="clear"></div>
		</div>
	  </article>
	  <article style="position: absolute; width: 100%; opacity: 0;"> 
		   <div class="banner-wrap">
			  <div class="slider-left">
			   <img src="images/banner1.jpg" alt=""/> 
		   </div>
			<div class="slider-right">
			   <h1>Classic</h1>
			   <h2>White</h2>
			   <p>Lorem ipsum dolor sit amet</p>
			   <div class="btn"><a href="#" id="shop">Shop Now</a></div>
			</div>
			<div class="clear"></div>
		</div>
	 </article>
   </div>
   <a class="wmuSliderPrev">Previous</a><a class="wmuSliderNext">Next</a>
   <ul class="wmuSliderPagination">
	   <li><a href="#" class="">0</a></li>
	   <li><a href="#" class="">1</a></li>
	   <li><a href="#" class="wmuActive">2</a></li>
	   <li><a href="#">3</a></li>
	   <li><a href="#">4</a></li>
	 </ul>
	<a class="wmuSliderPrev">Previous</a><a class="wmuSliderNext">Next</a><ul class="wmuSliderPagination"><li><a href="#" class="wmuActive">0</a></li><li><a href="#" class="">1</a></li><li><a href="#" class="">2</a></li><li><a href="#" class="">3</a></li><li><a href="#" class="">4</a></li></ul></div>
	<script src="js/jquery.wmuSlider.js"></script> 
	<script type="text/javascript" src="js/modernizr.custom.min.js"></script> 
		   <script>
				   $('.example1').wmuSlider();         
			  </script> 	           	      
</div>
<div class="main">
   <div class="wrap">
	  <div class="content-top">
		<div class="lsidebar span_1_of_c1">
		 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
	   </div>
	   <div class="cont span_2_of_c1">
		 <div class="social">	
			<ul>	
			 <li class="facebook"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"><a href="#"> </a></div><div class="border hide"><p class="num">1.51K</p></div></li>
			</ul>
			 </div>
		  <div class="social">	
			  <ul>	
				 <li class="twitter"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
			 </ul>
			</div>
			<div class="social">	
			  <ul>	
				 <li class="google"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
			  </ul>
			</div>
			<div class="social">	
			  <ul>	
				 <li class="dot"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
			 </ul>
			</div>
		   <div class="clear"> </div>
		 </div>
		 <div class="clear"></div>			
	  </div>
	 <div class="content-bottom">
	  <div class="box1">
	   <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
			<div class="grid_img">
			  <div class="css3"><img src="images/pic.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	   <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
		   <div class="grid_img">
			  <div class="css3"><img src="images/pic1.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	   <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
			<div class="grid_img">
			  <div class="css3"><img src="images/pic2.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	 <div class="clear"></div>
 </div>
 <div class="box1">
	 <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
			<div class="grid_img">
			  <div class="css3"><img src="images/pic3.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	   <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
			<div class="grid_img">
			  <div class="css3"><img src="images/pic4.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	  <div class="col_1_of_3 span_1_of_3"><a href="#" id="single">
		<div class="view view-fifth">
		   <div class="top_box">
			 <h3 class="m_1">Lorem ipsum dolor sit amet</h3>
			 <p class="m_2">Lorem ipsum</p>
			<div class="grid_img">
			  <div class="css3"><img src="images/pic5.jpg" alt=""/></div>
				 <div class="mask">
					  <div class="info single-btn" id="single-link">Quick View</div>
				 </div>
		   </div>
		  <div class="price">£480</div>
		  </div>
		   </div>
		  <span class="rating">
		   <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
		   <label for="rating-input-1-5" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
		   <label for="rating-input-1-4" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
		   <label for="rating-input-1-3" class="rating-star1"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
		   <label for="rating-input-1-2" class="rating-star"></label>
		   <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
		   <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		 (45)
		 </span>
			<ul class="list">
			 <li>
				 <img src="images/plus.png" alt=""/>
				 <ul class="icon1 sub-icon1 profile_img">
				 <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
				   <ul class="sub-icon1 list">
					   <li><h3>sed diam nonummy</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
				 </li>
				</ul>
			  </li>
			</ul>
		   <div class="clear"></div>
	   </a></div>
	 <div class="clear"></div>
   </div>
 </div>
</div>
</div>
<div class="footer">
<div class="footer-top">
  <div class="wrap">
		 <div class="col_1_of_footer-top span_1_of_footer-top">
		  <ul class="f_list">
			  <li><img src="images/f_icon.png" alt=""/><span class="delivery">Free delivery on all orders over £100*</span></li>
		  </ul>
	  </div>
	  <div class="col_1_of_footer-top span_1_of_footer-top">
		 <ul class="f_list">
			  <li><img src="images/f_icon1.png" alt=""/><span class="delivery">Customer Service :<span class="orange"> (800) 000-2587 (freephone)</span></span></li>
		  </ul>
	  </div>
	  <div class="col_1_of_footer-top span_1_of_footer-top">
		 <ul class="f_list">
			  <li><img src="images/f_icon2.png" alt=""/><span class="delivery">Fast delivery & free returns</span></li>
		  </ul>
	  </div>
	 <div class="clear"></div>
</div>
</div>
`
components.signIn =`
<div class="header-top">
		<div class="wrap"> 
		   <div class="logo">
			   <a href="index.html"><img src="images/logo.png" alt=""/></a>
		   </div>
		   <div class="cssmenu">
			  <ul>
			  <li><a href="#" class="sign-up-btn" id="sign-up-link">Sign up</a></li> 
			  <li><a href="#" class="shop-btn" id="shop">Store Locator</a></li> 
			  <li><a href="#" class="sign-in-btn" id="sign-in-link">My Account<span id="myNameAccount"></span></a></li> 
			  <li>   
		  </div></li>
			  </ul>
		   </div>
		   <ul class="icon2 sub-icon2 profile_img">
			   <li><a class="active-icon c2" href="#"> </a>
				   <ul class="sub-icon2 list">
					   <li><h3>Products</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
			   </li>
		   </ul>
		   <div class="clear"></div>
		</div>
		</div>
		<div class="header-bottom">
			<div class="wrap">
			  <!-- start header menu -->
			<ul class="megamenu skyblue">
			   <li><a class="color1" href="#" id="main">Home</a></li>
			   <li class="grid"><a class="color2" href="#">Men</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">men</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
					<li class="active grid"><a class="color4" href="#">Women</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							<div class="h_nav">
							  <img src="images/nav_img1.jpg" alt=""/>
							</div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>				
				   <li><a class="color5" href="#">Kids</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img2.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
				   <li><a class="color6" href="#">Sale</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>	
							   <div class="h_nav">
								   <h4 class="top">my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color7" href="#">Customize</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="sign-in-link">login</a></li>
									   <li><a href="#" id="sign-up-link">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color8" href="#">Shop</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color9" href="#">Football</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color10" href="#">Running</a></li>
				   <li><a class="color11" href="#">Originals</a></li>
				   <li><a class="color12" href="#">Basketball</a></li>
				   
			  </ul>
			  <div class="clear"></div>
			</div>
		  </div>
  <div class="login">
     <div class="wrap">
           <div class="col_1_of_login span_1_of_login">
               <h4 class="title">New Customers</h4>
               <h5 class="sub_title">Register Account</h5>
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
               <div class="button1">
                  <a href="#" id="sign-up-link"><input type="submit" name="Submit" value="Continue"></a>
                </div>
                <div class="clear"></div>
           </div>
           <div class="col_1_of_login span_1_of_login">
             <div class="login-title">
                  <h4 class="title">Registered Customers</h4>
                <div class="comments-area">
                   <form id="form-sign-in">
                       <p>
                           <label for="email">Email</label>
                           <span>*</span>
                           <input type="text" name="email" placeholder="Email" id="email">
                       </p>
                       <div class="message-error" id="email-error"></div>
                       <p>
                           <label for="password">Password</label>
                           <span>*</span>
                           <input type="password" name="password" placeholder="Password" id="password">
                       </p>
                       <div class="message-error" id="password-error"></div>
                        <p id="login-form-remember">
                           <label><a href="#" class="forgot-btn" id="forgot-pass-link">Forget Your Password ? </a></label>
                        </p>
                        <p>
                           <input type="submit" value="Login" id="sign-in-btn">
                       </p>
                       <div class="message-error" id="sign-in-error"></div>
                   </form>
               </div>
             </div>
           </div>
           <div class="clear"></div>
       </div>
   </div>
   <div class="footer">
        <div class="footer-top">
          <div class="wrap">
                 <div class="col_1_of_footer-top span_1_of_footer-top">
                  <ul class="f_list">
                      <li><img src="images/f_icon.png" alt=""/><span class="delivery">Free delivery on all orders over £100*</span></li>
                  </ul>
              </div>
              <div class="col_1_of_footer-top span_1_of_footer-top">
                 <ul class="f_list">
                      <li><img src="images/f_icon1.png" alt=""/><span class="delivery">Customer Service :<span class="orange"> (800) 000-2587 (freephone)</span></span></li>
                  </ul>
              </div>
              <div class="col_1_of_footer-top span_1_of_footer-top">
                 <ul class="f_list">
                      <li><img src="images/f_icon2.png" alt=""/><span class="delivery">Fast delivery & free returns</span></li>
                  </ul>
              </div>
             <div class="clear"></div>
        </div>
       </div>`

components.signUp =components.header + `
  <div class="register_account">
         <div class="wrap">
         <h4 class="title">Create an Account</h4>	
         <form id="form-sign-up" class="form-sign-up">
           <h2 class="form-title">Sign Up</h2>
   
           <div class="input-wrapper">
               <label for="name">
                   <i class="fa fa-user"></i>
               </label>
               <input type="text" name="name" placeholder="Your name" id="name">
           </div>
           <div class="message-error" id="name-error"></div>
   
           <div class="input-wrapper">
               <label for="email">
                   <i class="fa fa-envelope"></i>
               </label>
               <input type="text" name="email" placeholder="Email" id="email">
           </div>
           <div class="message-error" id="email-error"></div>
   
           <div class="input-wrapper">
               <label for="password">
                   <i class="fa fa-lock"></i>
               </label>
               <input type="password" name="password" placeholder="Password" id="password">
           </div>
           <div class="message-error" id="password-error"></div>
   
           <div class="input-wrapper">
               <label for="password-confirmation">
                   <i class="fa fa-lock"></i>
               </label>
               <input type="password" name="passwordConfirmation" placeholder="Password Confirmation" id="password-confirmation">
           </div>
           <div class="message-error" id="password-confirmation-error"></div>
           
           <button class="btn btn-primary" style="background-color: lightslategray;" id="sign-up-btn">Register</button>
           <div class="message-error" id="sign-up-error"></div>
           <div class="message-success" id="sign-up-success"></div>
       </form>
     </div> 
   </div>
`
components.shop =`
<div class="header-top">
		<div class="wrap"> 
		   <div class="logo">
			   <a href="index.html"><img src="images/logo.png" alt=""/></a>
		   </div>
		   <div class="cssmenu">
			  <ul>
			  <li><a href="#" class="shop-btn" id="shop">Store Locator</a></li> 
			  <li><a href="#" class="sign-in-btn" id="sign-in-link">My Account<span id="myNameAccount"></span></a></li>
			  <li><a href="#" class="check-out-btn" id="check-out">CheckOut</a></li>
			  <li><button class="cart-btn" id="cart">
			  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
			  Cart
		  </li>
			  </ul>
		   </div>
		   <ul class="icon2 sub-icon2 profile_img">
			   <li><a class="active-icon c2" href="#"> </a>
				   <ul class="sub-icon2 list">
					   <li><h3>Products</h3><a href=""></a></li>
					   <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
				   </ul>
			   </li>
		   </ul>
		   <div class="clear"></div>
		</div>
		</div>
		<div class="header-bottom">
			<div class="wrap">
			  <!-- start header menu -->
			<ul class="megamenu skyblue">
			   <li><a class="color1" href="#" id="main">Home</a></li>
			   <li class="grid"><a class="color2" href="#">Men</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">men</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
					<li class="active grid"><a class="color4" href="#">Women</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							<div class="h_nav">
							  <img src="images/nav_img1.jpg" alt=""/>
							</div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>				
				   <li><a class="color5" href="#">Kids</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <img src="images/nav_img2.jpg" alt=""/>
					   </div>
				   </div>
				   </li>
				   <li><a class="color6" href="#">Sale</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>	
							   <div class="h_nav">
								   <h4 class="top">my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color7" href="#">Customize</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="sign-in-link">login</a></li>
									   <li><a href="#" id="sign-up-link">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color8" href="#">Shop</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>style zone</h4>
								   <ul>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">login</a></li>
								   </ul>	
							   </div>
							   <div class="h_nav">
								   <h4 class="top">man</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
				   </div>
				   </li>
				   <li><a class="color9" href="#">Football</a>
				   <div class="megapanel">
					   <div class="row">
						   <div class="col1">
							   <div class="h_nav">
								   <h4>shop</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">brands</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>help</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>							
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>												
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>account</h4>
								   <ul>
									   <li><a href="#" id="shop">login</a></li>
									   <li><a href="#" id="shop">create an account</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
									   <li><a href="#" id="shop">my shopping bag</a></li>
									   <li><a href="#" id="shop">brands</a></li>
									   <li><a href="#" id="shop">create wishlist</a></li>
								   </ul>	
							   </div>						
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>my company</h4>
								   <ul>
									   <li><a href="#" id="shop">trends</a></li>
									   <li><a href="#" id="shop">sale</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
						   <div class="col1">
							   <div class="h_nav">
								   <h4>popular</h4>
								   <ul>
									   <li><a href="#" id="shop">new arrivals</a></li>
									   <li><a href="#" id="shop">men</a></li>
									   <li><a href="#" id="shop">women</a></li>
									   <li><a href="#" id="shop">accessories</a></li>
									   <li><a href="#" id="shop">kids</a></li>
									   <li><a href="#" id="shop">style videos</a></li>
								   </ul>	
							   </div>
						   </div>
					   </div>
					   <div class="row">
						   <div class="col2"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
						   <div class="col1"></div>
					   </div>
					   </div>
				   </li>
				   <li><a class="color10" href="#">Running</a></li>
				   <li><a class="color11" href="#">Originals</a></li>
				   <li><a class="color12" href="#">Basketball</a></li>
				   
			  </ul>
			  <div class="clear"></div>
			</div>
		  </div>
       <div class="login">
         <div class="wrap">
     	    <div class="rsidebar span_1_of_left">
				   <section  class="sky-form">
                   	  <h4>Occasion</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Athletic (20)</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Athletic Shoes (48)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Casual (45)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Casual (45)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other (1)</label>
						    </div>
						 </div>
                   	  <h4>Category</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Flats (70)</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Athletic Shoes (48)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Athletic Shoes (48)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Heels (38)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other (1)</label>
						    </div>
						</div>
					 <h4>Styles</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Athletic (20)</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Ballerina (5)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Pumps (7)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>High Tops (2)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other (1)</label>
						    </div>
						</div>
				</section>
		        <section  class="sky-form">
					<h4>Brand</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Adidas by Stella McCartney</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Asics</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Bloch</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Bloch Kids</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Capezio</label>
								<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>Capezio Kids</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Nike</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Zumba</label>
							</div>
						</div>
		       </section>
		       <section  class="sky-form">
					<h4>Heel Height</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Flat (20)</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Under 1in(5)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>1in - 1 3/4 in(5)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>2in - 2 3/4 in(3)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>3in - 3 3/4 in(2)</label>
							</div>
						</div>
		       </section>
		       <section  class="sky-form">
					<h4>Price</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>$50.00 and Under (30)</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$100.00 and Under (30)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$200.00 and Under (30)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$300.00 and Under (30)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$400.00 and Under (30)</label>
							</div>
						</div>
		       </section>
		       <section  class="sky-form">
					<h4>Colors</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Red</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Green</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Black</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Yellow</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Orange</label>
							</div>
						</div>
		       </section>
		</div>
		<div class="cont span_2_of_3">
		  <div class="mens-toolbar">
              <div class="sort">
               	<div class="sort-by">
		            <label>Sort By</label>
		            <select>
		                            <option value="">
		                    Popularity               </option>
		                            <option value="">
		                    Price : High to Low               </option>
		                            <option value="">
		                    Price : Low to High               </option>
		            </select>
		            <a href=""><img src="images/arrow2.gif" alt="" class="v-middle"></a>
               </div>
    		</div>
	          <div class="pager">   
	           <div class="limiter visible-desktop">
	            <label>Show</label>
	            <select>
	                            <option value="" selected="selected">
	                    9                </option>
	                            <option value="">
	                    15                </option>
	                            <option value="">
	                    30                </option>
	                        </select> per page        
	             </div>
	       		<ul class="dc_pagination dc_paginationA dc_paginationA06">
				    <li><a href="#" class="previous">Pages</a></li>
				    <li><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
			  	</ul>
		   		<div class="clear"></div>
	    	</div>
     	    <div class="clear"></div>
	       </div>
			    <div class="box1">
				   <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic11.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2" id="add-to-cart1">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic10.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2" id="add-to-cart2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" >Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				   <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic9.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				  <div class="clear"></div>
			  </div>
			  <div class="box1">
				 <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic3.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic4.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic5.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				  <div class="clear"></div>
			  </div>
			  <div class="box1">
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic6.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic7.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic8.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				  <div class="clear"></div>
			  </div>
			  <div class="box1">
				   <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic2.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				    <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic1.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				   <div class="col_1_of_single1 span_1_of_single1"><a href="#" id="single">
				     <div class="view1 view-fifth1">
				  	  <div class="top_box">
					  	<h3 class="m_1">Lorem ipsum dolor sit amet</h3>
					  	<p class="m_2">Lorem ipsum</p>
				         <div class="grid_img">
						   <div class="css3"><img src="images/pic.jpg" alt=""/></div>
					          <div class="mask1">
	                       		<div class="info single-btn" id="single-link">Quick View</div>
			                  </div>
	                    </div>
                       <div class="price">£480</div>
					   </div>
					    </div>
					   <span class="rating1">
				        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
				        <label for="rating-input-1-5" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
				        <label for="rating-input-1-4" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
				        <label for="rating-input-1-3" class="rating-star1"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
				        <label for="rating-input-1-2" class="rating-star"></label>
				        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
				        <label for="rating-input-1-1" class="rating-star"></label>&nbsp;
		        	  (45)
		    	      </span>
						 <ul class="list2">
						  <li>
						  	<img src="images/plus.png" alt=""/>
						  	<ul class="icon1 sub-icon1 profile_img">
							  <li><a class="active-icon c1" href="#" id="add-to-cart">Add To Bag </a>
								<ul class="sub-icon1 list">
									<li><h3>sed diam nonummy</h3><a href=""></a></li>
									<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
								</ul>
							  </li>
							 </ul>
						   </li>
					     </ul>
			    	    <div class="clear"></div>
			    	</a></div>
				  <div class="clear"></div>
			  </div>
			  </div>
			  <div class="clear"></div>
			</div>
		   </div>
	     `
components.checkout =components.header + ` <div class="login">
<div class="wrap">
	<h4 class="title">Shopping cart is empty</h4>
	<p class="cart">You have no items in your shopping cart.<br>Click<a href="#" id="sign-in-link">here</a> to continue shopping</p>
  </div>
</div>
<div class="footer">
	<div class="footer-top">
	  <div class="wrap">
			 <div class="col_1_of_footer-top span_1_of_footer-top">
			  <ul class="f_list">
				  <li><img src="images/f_icon.png" alt=""/><span class="delivery">Free delivery on all orders over £100*</span></li>
			  </ul>
		  </div>
		  <div class="col_1_of_footer-top span_1_of_footer-top">
			 <ul class="f_list">
				  <li><img src="images/f_icon1.png" alt=""/><span class="delivery">Customer Service :<span class="orange"> (800) 000-2587 (freephone)</span></span></li>
			  </ul>
		  </div>
		  <div class="col_1_of_footer-top span_1_of_footer-top">
			 <ul class="f_list">
				  <li><img src="images/f_icon2.png" alt=""/><span class="delivery">Fast delivery & free returns</span></li>
			  </ul>
		  </div>
		 <div class="clear"></div>
	</div>
   </div>
`
components.forgotpass =components.header+ `
<div class="container" style="margin-top: 10px;">
<div class="row">
  <div class="col-md-6 col-md-offset-6">
	<div class="panel panel-default">
	  <div class="panel-body">
		<div class="text-center">
		  <h3><i class="fa fa-lock fa-4x"></i></h3>
		  <h2 class="text-center">Forgot Password?</h2>
		  <p>You can reset your password here.</p>
		  <div class="panel-body">
			<form id="form-forgot-pass" class="form">
			<fieldset>
			  <div class="form-group">
			  <div class="input-group">
				<span><i class="glyphicon glyphicon-envelope color-blue"></i></span>
				
				<input id="email" placeholder="email address" class="form-control" type="email" oninvalid="setCustomValidity('Please enter a valid email address!')" onchange="try{setCustomValidity('')}catch(e){}" required="">
			  </div>
			  <div class="message-error" id="emailForgot-error"></div>
			  </div>
			  <div class="form-group">
			  <input id ="send-pass-btn" class="btn btn-secondary btn-block" value="Send My Password" type="submit">
			  </div>
			</fieldset>
			</form>
			
		  </div>
		</div>
	  </div>
	</div>
  </div>
		<div class="col-md-6 col-md-offset-6">
		  <div class="sign">
			<a href="" class="sign-in-btn" id="sign-in-link">Sign In</a>
			<a href="" class="sign-up-btn" id="sign-Up-link">Sign Up</a>
		  </div>
		</div>
</div>
</div>`
components.cart = components.headerProfile +	 `
<div class="container"> 
  <div>CART<span id="countProduct"></span></div>
 <table id="cart" class="table table-hover table-condensed"> 
  <thead> 
   <tr> 
    <th style="width:50%">Name Product</th> 
    <th style="width:10%">Price</th> 
    <th style="width:8%">Amount</th> 
    <th style="width:22%" class="text-center">Into money</th> 
    <th style="width:10%"> </th> 
   </tr> 
  </thead> 
  <tbody id="show-list-carts"><tr> 
   <td data-th="Product"> 
    <div class="row"> 
     <div class="col-sm-2 hidden-xs"><img src="https://firebasestorage.googleapis.com/v0/b/webfooseshoes.appspot.com/o/pic1.jpg?alt=media&token=e9658635-5fb4-4710-91a6-a7d735865c1e" alt="Product 1" class="img-responsive" width="100">
     </div> 
     <div class="col-sm-10"> 
      <h4 class="nomargin">Product 1</h4> 
      <p>Description of Product 1</p> 
     </div> 
    </div> 
   </td> 
   <td data-th="Price">200.000 đ</td> 
   <td data-th="Quantity"><input class="form-control text-center" value="1" type="number">
   </td> 
   <td data-th="Subtotal" class="text-center">200.000 đ</td> 
   <td class="actions" data-th="">
    </button> 
    <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i>
    </button>
   </td> 
  </tr> 
  <tr> 
   <td data-th="Product"> 
    <div class="row"> 
     <div class="col-sm-2 hidden-xs"><img src="https://firebasestorage.googleapis.com/v0/b/webfooseshoes.appspot.com/o/pic2.jpg?alt=media&token=a1f89fb8-daba-43ed-b222-d7468be3c33e" alt="Product 1" class="img-responsive" width="100">
     </div> 
     <div class="col-sm-10"> 
      <h4 class="nomargin">Product 2</h4> 
      <p>Description of Product 2</p> 
     </div> 
    </div> 
   </td> 
   <td data-th="Price">300.000 đ</td> 
   <td data-th="Quantity"><input class="form-control text-center" value="1" type="number">
   </td> 
   <td data-th="Subtotal" class="text-center">300.000 đ</td> 
   <td class="actions" data-th="">
    </button> 
    <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i>
    </button>
   </td> 
  </tr> 
  </tbody><tfoot> 
    
   <tr> 
    <td><a href="#" class="btn btn-warning" id="back-shop"><i class="fa fa-angle-left"></i> Back shop</a>
    </td> 
    <td colspan="2" class="hidden-xs"> </td> 
    <td class="hidden-xs text-center"><span style="font-weight: bold;">Total money:</span> <strong id="Total">500.000 đ</strong>
    </td> 
    <td><a id="order-link" href="#" class="btn btn-success btn-block order-btn">Order <i class="fa fa-angle-right"></i></a>
    </td> 
   </tr> 
  </tfoot> 
 </table>
</div>`

components.inforDataProduct = components.headerProfile+ `
<div class="container">
<div class="row">
	<div class="col-md-8">
		<form id="form-inforDataProduct">
			<div class="form-row">
			  <div class="col-md-4 mb-3">
				<label for="validationServer01">First name</label>
				<input type="text" class="form-control " id="validationServer01" placeholder="First name" required>
				<span></span>
				<div class="valid-feedback">
				  Looks good!
				</div>
			  </div>
			  <div class="col-md-4 mb-3">
				<label for="validationServer02">Last name</label>
				<input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" required>
				<div class="valid-feedback">
				  Looks good!
				</div>
			  </div>
			  <div class="col-md-4 mb-3">
				<label for="validationServerUsername">Phone</label>
				<div class="input-group">
				  <div class="input-group-prepend">
					<span class="input-group-text" id="inputGroupPrepend3"><i class="fa fa-phone"></i></span>
				  </div>
				  <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required>
				  <div class="invalid-feedback">
					Please choose a username.
				  </div>
				</div>
			  </div>
			</div>
			<div class="form-row">
			  <div class="col-md-6 mb-3">
				<label for="validationServer03">Address</label>
				<input type="text" class="form-control is-invalid" id="validationServer03" required>
				<div class="invalid-feedback">
				  Please provide a valid city.
				</div>
			  </div>
			  <div class="col-md-3 mb-3">
				<label for="validationServer04">City</label>
				<select class="custom-select is-invalid" id="validationServer04" required>
				  <option selected disabled value="">Choose...</option>
				  <option>...</option>
				</select>
				<div class="invalid-feedback">
				  Please select a valid state.
				</div>
			  </div>
			  <div class="col-md-3 mb-3">
				<label for="validationServer05">Zip</label>
				<input type="text" class="form-control is-invalid" id="validationServer05" required>
				<div class="invalid-feedback">
				  Please provide a valid zip.
				</div>
			  </div>
			</div>
			<div class="form-group">
			  <div class="form-check">
				<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
				<label class="form-check-label" for="invalidCheck3">
				  Agree to terms and conditions
				</label>
				<div class="invalid-feedback">
				  You must agree before submitting.
				</div>
			  </div>
			</div>
			<button class="btn btn-primary" type="submit">Submit form</button>
		  </form>
</div>
<div class="col-md-4">
	 <img src="./images/729794-1_02.jpg" style="width: 208px;" alt="">
</div>
</div>
</div>
`