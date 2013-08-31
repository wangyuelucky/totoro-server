(function() {
    var report = top.report
    var labor = top.labor
    var totoro = window.totoro || (window.totoro = {})
    var id = location.href.match(/runner\/([^/]+)\//)[1]

    // test output
    totoro.log = function(data) {
        var stack = ''
        try {
            stack = new Error().stack
            if (stack) {
                stack = new Error().stack.split('\n')[2]
                stack = stack.slice(stack.indexOf(id) + id.length, stack.length - 1)
            } else {
                stack = ''
            }
        } catch (e) {
        }

        report({
            orderId: id,
            action: 'log',
            info: stack + ' ' + data
        })
    }
})()

