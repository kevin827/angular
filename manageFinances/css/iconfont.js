;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M165.10278 480.759485l696.169533 0 0 58.015322-696.169533 0 0-58.015322Z"  ></path>' +
    '' +
    '<path d="M484.179886 161.682379l58.014298 0 0 696.170556-58.014298 0 0-696.170556Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M808.914852 493.864968 215.092311 493.864968c-13.648858 0-24.740474-11.393491-24.740474-25.071002 0-13.676487 11.091616-25.071002 24.740474-25.071002l593.82254 0c13.648858 0 24.742521 11.394515 24.742521 25.071002C833.657372 482.4725 822.56371 493.864968 808.914852 493.864968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-202-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M344.376817 863.278505c-7.953136 0.001023-15.900132-3.070942-21.911032-9.195429-11.876492-12.099572-11.695367-31.53625 0.405229-43.412742l309.435515-303.706023-312.709071-312.710095c-11.989055-11.988032-11.989055-31.425733 0-43.414789 11.988032-11.989055 31.426757-11.989055 43.414789 0l334.621127 334.621127c5.792936 5.791913 9.029654 13.660114 8.991792 21.851681-0.038886 8.191566-3.348258 16.028045-9.195429 21.766746l-331.551208 325.410348C359.903441 860.353896 352.136547 863.278505 344.376817 863.278505z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.807 927.804l-415.632-415.804 415.632-415.803 63.445 63.616-352.017 352.209 352.017 352.102z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-select-checkbox-unselected-active" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 64l64-64v1024l-64-64h1024l-64 64V0l64 64H0z m1024-64v1024H0V0h1024z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-select-checkbox-selected-normal" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 64l64-64v1024l-64-64h1024l-64 64V0l64 64H0z m1024-64v1024H0V0h1024z" fill="#4990E2" ></path>' +
    '' +
    '<path d="M440.832 670.144h45.248L278.656 462.656a32 32 0 0 0-45.312 45.312l207.488 207.424a32 32 0 0 0 45.248 0l372.8-372.736a32 32 0 1 0-45.248-45.312l-372.8 372.8z" fill="#4990E2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 102.4c-225.28 0-409.6 184.32-409.6 409.6s184.32 409.6 409.6 409.6 409.6-184.32 409.6-409.6-184.32-409.6-409.6-409.6z m0 768c-199.68 0-358.4-158.72-358.4-358.4s158.72-358.4 358.4-358.4 358.4 158.72 358.4 358.4-158.72 358.4-358.4 358.4z" fill="#B5B5B5" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tahz-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 720.817493c115.326293 0 208.817493-93.4912 208.817493-208.817493S627.326293 303.182507 512 303.182507 303.182507 396.673707 303.182507 512s93.4912 208.817493 208.817493 208.817493zM512 955.733333c245.067093 0 443.733333-198.66624 443.733333-443.733333S757.067093 68.266667 512 68.266667 68.266667 266.932907 68.266667 512s198.66624 443.733333 443.733333 443.733333z m0-52.200106C295.76192 903.533227 120.466773 728.234667 120.466773 512S295.76192 120.4736 512 120.4736c216.234667 0 391.533227 175.291733 391.533227 391.5264S728.234667 903.533227 512 903.533227z" fill="#499DF1" ></path>' +
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