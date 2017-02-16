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
					gathering: 'link',
					belliesinconcert: 2,
					mitide: 3,
					osito: 4,
					snapchatworlds: 5,
					truedirt: 6,
					mas: 7,
					vanguardgrandma: 8,
					lullaby: 9,
					washawaylabels: 10,
					cat: 11
				}

				const videos = [
					{name: 'goodjar', link: 'https://www.youtube.com/v/jnC1Oi4i-Oo'},
					{name: 'laundryvirgins', link:'https://www.youtube.com/v/3b2uTQTDnpQ'},
					{name: 'gathering', link:' www.jorgerafaelsj.com'},
					{name: 'belliesinconcert', link:' www.jorgerafaelsj.com'},
					{name: 'mitide', link:' www.jorgerafaelsj.com'},
					{name: 'osito', link:' www.jorgerafaelsj.com'},
					{name: 'snapchatworlds', link:' www.jorgerafaelsj.com'},
					{name: 'truedirt', link:' www.jorgerafaelsj.com'},
					{name: 'mas', link:' www.jorgerafaelsj.com'},
					{name: 'vanguardgrandma', link:' www.jorgerafaelsj.com'},
					{name: 'lullaby', link:' www.jorgerafaelsj.com'},
					{name: 'washawaylabels', link:' www.jorgerafaelsj.com'},
					{name: 'cat', link:' www.jorgerafaelsj.com'},
				];

				scope.loadVideo = () => {
					if(mapper[$location.$$path.replace('/', '')] >= 0) {
						scope.vid = videos[mapper[$location.$$path.replace('/', '')]];
					} else {
						$location.path('/')
					}
				};

				scope.loadVideo();
			}
		}
	}]);