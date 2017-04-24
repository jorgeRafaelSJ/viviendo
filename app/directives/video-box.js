angular
	.module('app')
	.directive('videoBox', [ '$rootScope', '$location', ($rootScope, $location) => {
		return {
			restrict: 'E',
			scope: {
				vid: '=?vid'
			},
			templateUrl: '/views/_video-box.html',
			link: (scope,element,attrs) => {
				const mapper = {
					goodjar: 0,
					laundryvirgins: 1,
					gathering: 2,
					belliesinconcert: 3,
					mitide: 4,
					osito: 5,
					snapchatworlds: 6,
					truedirt: 7,
					mas: 8,
					vanguardgrandma: 9,
					lullaby: 10,
					washawaylabels: 11,
					gnomes: 12,
					teddy: 13
				}

				const videos = [
					{path: 'goodjar', name: 'Good Jar', link: 'https://www.youtube.com/embed/N96ponWgMOo'},
					{path: 'laundryvirgins', name: 'Laundry Virgins', link:'https://www.youtube.com/embed/1oRI_2BSSzM'},
					{path: 'gathering', name: 'Gathering', link:'https://www.youtube.com/embed/L0gNOdhFgHA'},
					{path: 'belliesinconcert', name: 'Bellies In Concert', link:'https://www.youtube.com/embed/xcK4cGXWITo'},
					{path: 'mitide', name: 'Mi Tide', link:'https://www.youtube.com/embed/Xt6S2hj1FcA'},
					{path: 'osito', name: 'Osito', link:'https://www.youtube.com/embed/f60uI8T3mX8'},
					{path: 'snapchatworlds', name: 'Snapchat Worlds', link:'https://www.youtube.com/embed/gE9ELwiTJ2w'},
					{path: 'truedirt', name: 'True Dirt', link:'https://www.youtube.com/embed/3J2HUwcra54'},
					{path: 'mas', name: 'Mas', link:'https://www.youtube.com/embed/3H9qk7fI6ZA'},
					{path: 'vanguardgrandma', name: 'Vanguard Grandma', link:'https://www.youtube.com/embed/sYw2IGNFuEs'},
					{path: 'lullaby', name: 'Lullaby', link:'https://www.youtube.com/embed/HdO5ZLffPaU'},
					{path: 'washawaylabels', name: '#WashAwayLabels', link:'https://www.youtube.com/embed/ND6Guy5OVHU'},
					{path: 'gnomes', name: 'Gnomes', link:'https://www.youtube.com/embed/_F-8LMKu4Ws'},
					{path: 'teddy', name: 'Teddy', link:'https://www.youtube.com/embed/MdoGhFljcnI'},
				];

				scope.firstVideo = false;
				scope.lastVideo = false;

				let videoIndex = mapper[$location.$$path.replace('/', '')]; 
				const loadVideo = (() => {
					if(videoIndex >= 0) {
						scope.vid = videos[videoIndex];
					} else {
						$location.path('/')
					}

					if(videoIndex === 0) {
						scope.firstVideo = true;
					} else if(videoIndex === videos.length - 1) {
						scope.lastVideo = true;
					}
				})();

				scope.nextVideo = () => {
				 	$location.path(`/${videos[videoIndex + 1].path}`);
				};

				scope.previousVideo = () => {
					$location.path(`/${videos[videoIndex - 1].path}`);
				};
			}
		}
	}]);