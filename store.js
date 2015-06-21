exports.home=function(req,res){
	res.send('click here to redirect');
	//res.redirect(200,'/customer')
	
};

exports.r=function(req,res){
	res.redirect(200,'/customer');
}

exports.home1=function(req,res){
	res.render('home',{'title':'Hello from raisa'})
}