async function real_revenue() {
    result = 0

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    async function getHistory(ticker) {
        let data = {
            "ticker": ticker,
            "from": "2015-03-01T00:00:00Z",
            "to": new Date().toISOString(),
            "overnightsDisabled": true
        };

        let s_id = getCookie('psid')

        let response = await fetch('https://api.tinkoff.ru/trading/user/operations?tinvest&sessionId=' + s_id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    async function getInfo(ticker) {
        let data = {
            "ticker": ticker,
        };

        let s_id = getCookie('psid')
        let response = await fetch(' https://api.tinkoff.ru/trading/symbols/user_info?tinvest&sessionId=' + s_id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    function needEarn(revenue, position_tinkoff) {
        count = info.payload.positionTinkoff.currentBalance
        avg_price = parseFloat(info.payload.positionTinkoff.averagePositionPrice.value)
        currency = info.payload.positionTinkoff.averagePositionPrice.currency

        revenue = Math.abs(revenue);
        need_earn_money = parseFloat(parseFloat(revenue / count).toFixed(2));
        percent = avg_price / 100;
        need_earn_percent = parseFloat(need_earn_money / percent).toFixed(2);

        return (avg_price + need_earn_money) + "(" + "+" + need_earn_money + currency + "/" + need_earn_percent + "%)"
    }

// current_ticker=Object.keys(data.investTrade.symbolUserInfo)[0];
    regex = /\(([A-Z\.]+)\):/m
    ticker_regexp = regex.exec(document.querySelector("meta[property='og:title']").content)
    //на странице есть тикер, значит скорее всего это страница акции
    if (ticker_regexp !== null) {
        current_ticker = ticker_regexp[1]
        history_result = await getHistory(current_ticker);
        info = await getInfo(current_ticker)

        if (info.payload.hasEvents) {
            //перебираем прошлые сделки
            history_result = history_result.payload.items.reduce(function (sum, item) {
                if (item.status == 'done') {
                    //console.log(item.payment,(item.commission||0))
                    return sum + item.payment + (item.commission || 0);
                }
                return sum;
            }, 0)

            result = Math.round(history_result);
            if (info.payload.positionTinkoff) {
                result = info.payload.positionTinkoff.currentAmount.value - Math.abs(result)
            }
            result = parseFloat(result).toFixed(2);


            html = "<div class='tinvest-block'>";
            html += '<div><b class="real_revenue">Реальный заработок: ' + result + '</b></div>';
            if (result < 0 && info.payload.positionTinkoff) {
                need_earn = needEarn(result, info.payload.positionTinkoff)
                html += '<div><b class="need_earn">Выход в ноль при: ' + need_earn + '</b></div>';
            }
            html += "</div>"

            tinvest_block = document.querySelector("div.tinvest-block")
            if (tinvest_block) {
                tinvest_block.outerHTML = html
            } else {
                document.querySelector("h1[data-qa-file^=SecurityHeader]").insertAdjacentHTML('afterend', html)
            }

        }
    }

    if (result < 0) {
        document.body.classList.remove('good-revenue');
        document.body.classList.add('bad-revenue');
    } else if (result > 0) {
        document.body.classList.add('good-revenue');
        document.body.classList.remove('bad-revenue');
    } else {
        document.body.classList.remove('good-revenue');
        document.body.classList.remove('bad-revenue');
    }
}

if (window.location.host == 'www.tinkoff.ru') {
    style_arr = [
        '.bad-revenue{background-color: rgba(255, 0, 0, 0.05);}',
        '.good-revenue{background-color: rgba(0, 255, 0, 0.05);}'
    ];

    style_arr.forEach(function (style) {
        document.body.insertAdjacentHTML("afterbegin", "<style>" + style + "</style>")
    })


    real_revenue();
    setInterval(async function () {
        await real_revenue()
    }, 2500);
} else {
    console.log('not tinkoff')
}

