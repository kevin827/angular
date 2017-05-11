;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.007168 295.315456l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232s-10.129408-22.623232-22.623232-22.623232L128.007168 250.068992c-12.494848 0-22.623232 10.128384-22.623232 22.623232S115.513344 295.315456 128.007168 295.315456z"  ></path>' +
    '' +
    '<path d="M897.19296 487.612416 128.007168 487.612416c-12.494848 0-22.623232 10.128384-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232S909.686784 487.612416 897.19296 487.612416z"  ></path>' +
    '' +
    '<path d="M897.19296 725.153792 128.007168 725.153792c-12.494848 0-22.623232 10.129408-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.129408 22.623232-22.623232S909.686784 725.153792 897.19296 725.153792z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M358.899578 511.536442l383.478881-383.506511-76.68452 0L282.161846 511.536442l383.53107 383.53107 76.68452 0L358.899578 511.536442 358.899578 511.536442z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.979 637.564l-251.126-251.123h502.257l-251.126 251.123z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icons16" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M124.16 734.72c1.28-5.12 1.28-10.24 2.56-15.36 3.84-14.08 11.52-26.88 23.04-35.84 38.4-29.44 76.8-60.16 115.2-89.6 23.04-17.92 48.64-20.48 75.52-7.68 7.68 3.84 14.08 8.96 19.2 16.64 8.96 14.08 19.2 28.16 28.16 42.24 1.28 2.56 3.84 2.56 6.4 1.28 15.36-6.4 29.44-15.36 42.24-25.6 24.32-17.92 47.36-37.12 69.12-57.6 35.84-33.28 69.12-67.84 99.84-104.96 14.08-16.64 26.88-34.56 37.12-55.04 5.12-11.52 5.12-11.52-5.12-17.92-10.24-6.4-20.48-14.08-30.72-20.48-25.6-16.64-33.28-47.36-25.6-74.24 2.56-10.24 8.96-19.2 15.36-26.88 17.92-21.76 34.56-44.8 52.48-66.56 11.52-15.36 24.32-30.72 35.84-46.08 12.8-14.08 28.16-23.04 47.36-25.6 1.28 0 2.56 0 2.56 0 3.84 0 6.4 0 10.24 0 1.28 0 1.28 0 2.56 0 12.8 1.28 24.32 6.4 33.28 15.36 30.72 26.88 61.44 53.76 92.16 79.36 11.52 10.24 19.2 23.04 24.32 38.4 2.56 7.68 2.56 15.36 3.84 21.76 0 7.68 0 14.08 0 21.76 0 1.28 0 1.28 0 2.56-1.28 19.2-5.12 38.4-10.24 57.6-14.08 52.48-35.84 101.12-61.44 148.48-44.8 79.36-101.12 149.76-168.96 211.2-64 57.6-134.4 104.96-212.48 139.52-35.84 15.36-72.96 28.16-111.36 35.84-10.24 1.28-20.48 2.56-30.72 3.84-10.24 0-19.2 0-29.44 0-5.12-1.28-8.96-1.28-14.08-2.56-16.64-2.56-30.72-8.96-40.96-21.76-24.32-28.16-47.36-56.32-71.68-83.2-5.12-6.4-11.52-12.8-15.36-20.48-5.12-8.96-7.68-19.2-8.96-30.72C124.16 739.84 124.16 737.28 124.16 734.72zM828.16 293.12c0-3.84 0-6.4 0-10.24 0-3.84-1.28-7.68-3.84-10.24-26.88-24.32-55.04-48.64-81.92-72.96-2.56-2.56-3.84-2.56-5.12 0-26.88 34.56-55.04 69.12-81.92 103.68-2.56 2.56-1.28 3.84 1.28 6.4 12.8 8.96 25.6 16.64 38.4 25.6 19.2 14.08 26.88 33.28 25.6 56.32-1.28 16.64-7.68 32-15.36 47.36-15.36 30.72-35.84 56.32-58.88 83.2-34.56 39.68-71.68 78.08-111.36 112.64-24.32 21.76-49.92 42.24-78.08 60.16-20.48 11.52-40.96 23.04-64 25.6-23.04 2.56-43.52-5.12-57.6-25.6-8.96-12.8-16.64-25.6-25.6-38.4-2.56-3.84-2.56-3.84-6.4-1.28-33.28 26.88-67.84 53.76-101.12 80.64-2.56 2.56-2.56 3.84 0 6.4 23.04 25.6 44.8 51.2 67.84 78.08 3.84 5.12 8.96 6.4 15.36 7.68 14.08 0 26.88-1.28 40.96-3.84 35.84-7.68 70.4-20.48 102.4-35.84 74.24-34.56 140.8-81.92 200.96-139.52 43.52-42.24 83.2-89.6 115.2-140.8 29.44-47.36 55.04-96 71.68-149.76C821.76 337.92 828.16 316.16 828.16 293.12z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M273.6 891.2c-43.2 0-78.4-35.2-78.4-78.4V571.2l-6.4-1.6c-43.2-16-73.6-57.6-73.6-104v-16-4.8c4.8-32 30.4-104 75.2-216 8-19.2 19.2-36.8 32-48 12.8-11.2 27.2-17.6 38.4-17.6h500.8c9.6 0 43.2 12.8 67.2 70.4l60.8 161.6c12.8 27.2 19.2 46.4 16 64v6.4c0 46.4-28.8 88-72 104l-6.4 1.6v241.6c0 43.2-35.2 78.4-78.4 78.4H273.6zM320 529.6c-3.2 4.8-6.4 9.6-9.6 12.8-17.6 20.8-44.8 32-78.4 32h-9.6v236.8c0 27.2 22.4 49.6 49.6 49.6h480c27.2 0 49.6-22.4 49.6-49.6V576h-9.6c-36.8-1.6-64-11.2-81.6-32-3.2-3.2-4.8-6.4-6.4-9.6l-6.4-11.2-8 9.6-9.6 9.6c-20.8 20.8-46.4 32-73.6 32-30.4 0-56-8-76.8-24-4.8-3.2-8-8-12.8-11.2l-4.8-6.4-6.4 8c-3.2 4.8-8 8-12.8 11.2-19.2 16-46.4 24-76.8 24-27.2 0-52.8-14.4-73.6-38.4-1.6-3.2-4.8-4.8-6.4-8l-8-11.2-8 11.2z m382.4-72c8 0 14.4 6.4 14.4 14.4v1.6c0 1.6-3.2 32 17.6 52.8 14.4 16 36.8 22.4 65.6 22.4 44.8 0 81.6-36.8 81.6-81.6V464v-3.2c1.6-11.2-3.2-27.2-14.4-51.2v-1.6l-60.8-161.6c-14.4-36.8-33.6-48-40-51.2l-1.6-1.6H262.4c-8 0-32 12.8-44.8 48C176 344 150.4 417.6 144 448v16c0 44.8 36.8 83.2 81.6 83.2 28.8 0 51.2-8 64-24 22.4-25.6 17.6-62.4 17.6-64-1.6-8 4.8-14.4 11.2-16h1.6c6.4 0 12.8 4.8 14.4 12.8 3.2 20.8 12.8 44.8 28.8 62.4 9.6 11.2 28.8 28.8 52.8 28.8 38.4 0 81.6-17.6 81.6-67.2 0-8 6.4-14.4 14.4-14.4s14.4 6.4 14.4 14.4c0 49.6 43.2 67.2 81.6 67.2 41.6 0 75.2-41.6 80-80 1.6-4.8 6.4-9.6 14.4-9.6z"  ></path>' +
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