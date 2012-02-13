(function ($) {
	"use strict";
	
	window.gh = window.gh || {};
	
	gh.repo.forUser("mitchellrj", function(data) {
		var repos = data.repositories, i,
		$myRepos = $(document.getElementById('my-repo-list')),
		$contributedRepos = $(document.getElementById('contributed-repo-list')),
		list,
		showWebsite;
		console.log(data);
		for (i = 0; i < repos.length; i+=1) {
			if (!repos[i].fork) {
				list = $myRepos;
				showWebsite = !!repos[i].homepage;
			} else{
				list = $contributedRepos;
				showWebsite = false;
			}
			list.prepend([
			    '<li class="lang-'+ repos[i].language + '">',
			      '<h3>',
			        '<a href="' + repos[i].url + '">',
			          repos[i].name,
			        '</a>',
			      '</h3>',
			      '<p class="desc">',
			         repos[i].description,
			      '</p>',
			      showWebsite ? '<p><a href="' + repos[i].homepage + '" class="btn">Visit website</a></p>' : '',
			    '</li>'
			].join('\n'));
		}
	});
	
}(jQuery));