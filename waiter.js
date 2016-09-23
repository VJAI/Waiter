(function (W, D) {
  
  var Qy = D.body.querySelector.bind(D.body),
		  options = JSON.parse(Qy('script').getAttribute('data-options') || '{}'),
	    logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABI1BMVEX///91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz91fz+FXFKFXFKFXFKFXFKFXFJ6dEV9bUl/aUt5dkSFXFKEXVGFXFKFXFKFXFKFXFKFXFKFXFK9z0a9z0a9z0a9z0a9z0a9z0a9z0a9z0a9z0a9z0a9z0a9z0aQc1CWgE6HYFKTeE+9z0aah069z0a5yEehlUyvskmopEu9z0arq0qyuUjB0lLa5Jfv89H////r8MbO23Te56PS3oDJ2Gn3+em9z0bW4YyIY1Hz9t2Zp0A3ODBSVzWIkz20xUWru0N2fzovLy/F1V37/PSQnT9AQjJkazh/iTxbYTZBPDVPQDxaRUBKPTpJTDOisULm7bptdTmjR8+SAAAAYXRSTlMAQFCAIHDA/+CwMPCgYBDQkCCg/8BQ/////0DIkGDg0PAQIFCAsMDQ/5BgQBAwoP/4/+D/8P////9w////////////////oP//////////////////////////////////vD77uwAABFdJREFUeNrtWmtD2jAUDVNERUDFvec2Sx+hLdvsOh0bGzqnTkC087mHc///V6zYFgq2Tfq4yYd5vgEh5/Tm5OYmDUJgyN2bukEuh9hjOj9T8GF2Lj/Pkj43V7iN4kKpzOjpg+gdLLAYjXyxEIHZEjB9ea5AwCxoFMqVAhlzZb78th/n+fLDKaDltxVMQ/AvFuhRAfBBrhAH2c+F8mwsAdmPwVQs/sXsA1CMw19BfANQBLBgHAdApIF5zvxxcgBMGqxw419arlZXlpfo/Z8x//2qgweU/JkvxSuugId04c9nPvYuf/URDf8MwBroCXhM8fgQ5eATl/8pMREXp0AKsWeugNX5Cg96hJ67ApYQKoUn4wrYlsQbgZWbT6XAkrySn0ZgGI6AtykqLYzFYWaxBMhu44XD/3JtrDTL5Z1NMSz3AGtuAJahiYSaKMkKHkCR5bqoavqYBVZB2Rt1h3oCsiSqr0ZzAAyqjMPx2uF/I3qQZFuXjZqWEb2m4CisOwLWg34zJFVIS69LOBruCLwN+11R0z2+SeB/5wrYCG9iinpifhGTsOkKeB/VyGwChd/GB1fAZnQzpZGEXyHz4w06ARiLMPxDAR+JLWU9KX/r0+e2ja3tiFlYpdAabxiG/K0vbQ876QRgs5GA/+vukL+9m1JAHAV77l/2234E9PktjgBs0PqgGch/4H7b6fYOJxKhJ6DfOYr2AeXi5zbfGeNvey48tiyr1wkScNy1rOgY1KkMYDiNv5+M8e9jnwBbwumkB07PBt8TRoFmjay7bT/76U9Gs7BjOeien44EHF3c0Fvn6W2gBRlgq+Xr5NIa4sfPXwP8PvNE9dOnRG8G+ifgeBLqX1kh6P4hTwVSiaB6GWDEf92a6KN/mZwf7xEEuA7Eowx4HdDLRTeA/+qIKhsIVAEYWfA6sJf++a3Hv6DLRoQQGJMCDsL66V/4rXB12Kfkx6ZOEwB87fK3Irrqd47/9nq98+NTavYBosrEUQW+Hey/LBCRkAVfs/3dk+AaID0EYhIEhkq2ICwkmhGAhEmqA8ARVhpJrASEmcBkJaDO1wL2JiFYQI2ZACPpXjQzcPYgxjphIQBHcG2K/3cBAm8B2p2AOwF3AhgKaPAWgHgnIsQ5Fcu8BUiI83Is8i5IarxLMiH6eIrbzkjn7EFme1PcJJ1Rc7IAs51J+AmJznkEWGUCgeaQjMccGIyByS8NMpsHRvQ9BZ5HZGxWRFOne13BeiVmFgKT+MpG4JaEmBzXGjHe2rHPAQx8KNO9OYUbBNpLNQqvKQi8JCiIGg0IBXEuMIAoiHelKXsFewhxVaAgxFWBkuA+V8Pgy097lwmO31awx5d/UCZnYQQpOb9tBIVdAk58qTC6Akh/tzRVEOo6ygDNpE5Qsrpaq4tJJBgqyg7xJWRKfyNBjeMFqYYAIDTpdg1KU0BQ0Gv16ECYGVynJtfNzbocsFIZssiA3JcfNG14pV3UtEbijv4B5CaTybEaYvEAAAAASUVORK5CYII=";
  
	D.write('<div class="waiter">\
							<img src="{logo}" />\
							<div class="progress-bar">\
								<div class="progress"></div>\
							</div>\
				 	 </div>'.replace('{logo}', options.logo || logo));
  
	var waitOver = function () {
		var waiter = Qy('.waiter'), progress = Qy('.progress');
		progress.style.animation = 'none';
		progress.style.width = '100%';
		waiter.style.top = '-100%';
	};
	
	options.manual ? (W.waitOver = waitOver) : W.addEventListener('load', waitOver, false);
	
})(window, document);