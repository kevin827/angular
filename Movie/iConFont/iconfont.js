;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 230.4m-76.8 0a3 3 0 1 0 153.6 0 3 3 0 1 0-153.6 0Z"  ></path>' +
    '' +
    '<path d="M512 512m-76.8 0a3 3 0 1 0 153.6 0 3 3 0 1 0-153.6 0Z"  ></path>' +
    '' +
    '<path d="M512 793.6m-76.8 0a3 3 0 1 0 153.6 0 3 3 0 1 0-153.6 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.244444 830.448485c6.852525 8.016162 10.214141 16.808081 10.214142 26.50505 0 10.860606-3.878788 20.169697-11.507071 27.79798-6.852525 7.111111-16.549495 11.636364-27.280808 11.636364h-0.646465c-4.525253 0-8.921212-0.775758-13.187878-2.19798-6.464646-2.19798-11.894949-5.818182-16.032324-10.731313l0.129293 0.90505-211.652525-213.20404c-50.812121 35.943434-107.70101 53.915152-170.537374 53.915151-6.335354 0-12.670707-0.258586-19.264646-0.775757-12.929293-1.163636-24.824242-3.232323-36.20202-6.335354-35.555556-2.456566-82.618182-22.49697-121.276768-52.622222-23.40202-13.834343-55.466667-47.709091-79.385859-89.987879-19.523232-32.711111-32.711111-71.369697-36.848484-112.743434 2.19798 25.341414-2.456566-3.232323-2.715152-32.969697 0.258586 10.214141 0 3.878788 0-2.456566 0-17.842424 1.551515-35.29697 4.654546-52.234343 7.49899-46.674747 26.505051-89.6 54.044444-125.672727 13.705051-25.6 57.276768-64.646465 109.381818-88.565657-27.151515 11.119192 1.034343-4.266667 32.064647-15.127273 28.444444-10.343434 61.284848-16.290909 95.547474-16.290909 13.705051 0 26.892929 0.905051 39.434344 2.585859 33.745455 4.525253 65.939394 14.868687 96.840404 30.771717 49.907071 25.987879 90.117172 64.646465 117.268687 111.838384-9.826263-22.238384 10.60202 10.860606 24.565656 49.131313s20.169697 77.058586 18.488889 116.363636c-2.327273 65.680808-24.824242 124.767677-67.749495 177.260606L874.020202 830.448485h-0.775758zM684.735354 439.208081c0.258586-3.878788 0.387879-8.274747 0.387878-12.8 0-32.452525-6.464646-63.353535-18.10101-91.539394-13.705051-36.20202-35.814141-68.137374-63.870707-93.608081 21.850505 20.945455 7.111111 5.171717-9.69697-8.791919-31.288889-26.246465-69.559596-45.252525-111.70909-53.785859 26.634343 4.525253-9.438384-4.008081-47.321213-4.008081-10.214141 0-20.29899 0.646465-30.125252 1.810101-1.680808-0.129293-4.525253 0.258586-7.111111 0.905051l-4.525253 0.775758c-46.157576 7.369697-87.014141 26.763636-120.113131 54.949495-24.824242 15.515152-57.535354 57.923232-74.60202 107.70101-2.068687-7.111111-13.705051 31.806061-15.773738 74.60202-1.939394 42.79596 5.818182 82.488889 23.531314 118.949495 21.591919 47.450505 56.630303 85.591919 100.331313 110.416161-0.129293 5.688889 44.606061 26.505051 93.995959 32.711111 1.551515 3.10303 38.4 5.171717 75.507071-1.163636 32.064646-5.818182 60.638384-16.937374 86.238384-32.452525 8.921212-1.680808 41.244444-26.505051 66.585858-57.147475-9.826263 16.420202 18.230303-18.230303 36.202021-58.440404-25.858586 46.028283-15.127273 29.608081-6.59394 12.024243 16.420202-31.547475 26.246465-68.783838 26.763637-108.218182v7.111111z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)