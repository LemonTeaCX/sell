;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M675.04 483.264l-127.04 0 0-127.264c0-20.064-16.288-36.32-36.32-36.32-20.064 0-36.32 16.192-36.32 36.32l0 127.232-127.072 0c-20.064 0-36.352 16.32-36.352 36.352 0 20.064 16.224 36.352 36.352 36.352l127.072 0 0 127.232c0 20 16.256 36.384 36.32 36.384 20.032 0 36.32-16.256 36.32-36.384l0-127.136 127.04 0c19.968 0 36.352-16.256 36.352-36.384C711.36 499.552 695.136 483.264 675.04 483.264L675.04 483.264zM511.328 65.44c-250.24 0-453.952 203.616-453.952 453.952 0 250.336 203.712 453.952 453.952 453.952 250.336 0 453.984-203.584 453.984-453.952C965.312 269.056 761.696 65.44 511.328 65.44L511.328 65.44zM511.328 916.576c-219.04 0-397.184-178.176-397.184-397.152 0-219.104 178.144-397.216 397.184-397.216s397.216 178.112 397.216 397.216C908.576 738.368 730.368 916.576 511.328 916.576L511.328 916.576zM511.328 916.576"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M373.845477 766.654864c-52.878324 0-95.745644 42.868343-95.745644 95.751784 0 52.876278 42.866297 95.745644 95.745644 95.745644 52.881394 0 95.747691-42.868343 95.747691-95.745644C469.592145 809.523207 426.725848 766.654864 373.845477 766.654864zM373.845477 915.598104c-29.377074 0-53.193503-23.816428-53.193503-53.197596 0-29.372981 23.816428-53.18941 53.193503-53.18941 29.377074 0 53.193503 23.816428 53.193503 53.18941C427.03898 891.781676 403.222551 915.598104 373.845477 915.598104zM215.001749 192.166671l-22.011316-127.667681L65.324798 64.49899l0 42.558281 88.781022 0 102.716406 595.769892 595.765799 0 0-42.554188L295.709909 660.272975l-11.512195-66.768683 568.389288-60.896952L958.975031 234.724952l0-42.558281L215.001749 192.166671zM831.311443 490.052129l-554.331108 61.58973-54.641481-316.916906 687.532829 0L831.311443 490.052129zM735.561705 766.654864c-52.878324 0-95.747691 42.868343-95.747691 95.751784 0 52.876278 42.868343 95.745644 95.747691 95.745644s95.747691-42.868343 95.747691-95.745644C831.309396 809.523207 788.44003 766.654864 735.561705 766.654864zM735.561705 915.598104c-29.379121 0-53.193503-23.816428-53.193503-53.197596 0-29.377074 23.814382-53.191456 53.193503-53.191456 29.377074 0 53.193503 23.814382 53.193503 53.191456C788.755208 891.781676 764.93878 915.598104 735.561705 915.598104z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M121.609 845.687l724.077-724.077 56.666 56.666-724.077 724.077-56.666-56.666z"  ></path>' +
    '' +
    '<path d="M121.647 178.275l56.666-56.666 724.077 724.077-56.666 56.666-724.077-724.077z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouxuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64.262216c-247.327671 0-447.788948 200.461277-447.788948 447.788948s200.461277 447.788948 447.788948 447.788948c247.327671 0 447.788948-200.461277 447.788948-447.788948S759.327671 64.262216 512 64.262216zM793.096033 385.368642l-316.194664 316.194664c-9.209553 9.209553-25.889078 13.405016-39.703408 12.791046-13.916658 0.61397-30.800839-3.581493-40.010393-12.791046L258.430299 562.703707c-17.293495-17.293495-17.293495-45.433796 0-62.829619 17.293495-17.293495 45.433796-17.293495 62.829619 0L437.095633 615.812132l293.273109-293.273109 0 0c17.293495-17.293495 45.433796-17.293495 62.829619 0C810.491856 339.934846 810.491856 368.075147 793.096033 385.368642z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianshao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M504.467 920.769c-241.303 0-436.907-195.605-436.907-436.907 0-241.303 195.603-436.907 436.907-436.907 241.302 0 436.907 195.603 436.907 436.907 0.001 241.301-195.604 436.907-436.907 436.907zM504.467 101.569c-211.129 0-382.293 171.165-382.293 382.293 0 211.152 171.165 382.293 382.293 382.293 211.152 0 382.293-171.141 382.293-382.293 0-211.13-171.141-382.293-382.293-382.293zM701.063 516.62h-393.217c-18.085 0-32.757-14.646-32.757-32.757s14.673-32.757 32.757-32.757h393.217c18.111 0 32.764 14.647 32.764 32.757s-14.654 32.757-32.764 32.757z"  ></path>' +
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