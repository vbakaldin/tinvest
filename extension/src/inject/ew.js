function etTimeToMsc(time) {
    if (time == 'BMO') {
        return 'до открытия';
    }
    if (time == 'AMC') {
        return 'после открытия';
    }
    if (time == 'DMH') {
        return time;
    }
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)\s/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    //TODO нет автоперевода часов +8 - костыль
    hours = (hours + 8) % 24
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes + " МСК";
}

function updateTime() {
        document.querySelectorAll("div.time:not(.updated), div#earningstime:not(.updated)").forEach(function (element, index) {
            element.classList.add('updated')
            element.textContent = element.textContent + " (" + etTimeToMsc(element.textContent) + ")"
        })
}

function getGraphUrl(ticker) {
    return "https://finviz.com/chart.ashx?t=" + ticker + "&ty=c&ta=1&p=d&s=l";
}

function markTinTicker() {
    str = 'FLWS,TWOU,MMM,JOBS,EGHT,AOS,AIR,AAN,ABT,ABBV,ABMD,ACIA,ACAD,XLRN,ACN,ATVI,AYI,ADUS,ADBE,ATGE,AAP,AEIS,ASIX,ACM,AERI,AJRD,AVAV,AMG,AFL,AGCO,A,AGIO,AIMT,APD,AKAM,ALRM,ALK,ALB,AA,ARE,ALXN,BABA,ALGN,ALLK,Y,ALGT,ALLE,AGN,ADS,LNT,ALSN,ALLO,MDRX,ALNY,GOOGL,ALTR,AYX,ATUS,MO,ACH,AMZN,AMCX,AMD,AMED,AEE,CRMT,AAL,AXP,AIG,AOBC,APEI,AWR,AMT,AMWD,AMP,AME,AMGN,AMN,APH,APC,ADI,PLAN,ANAB,ANDE,ANGI,BUD,ANIP,ANIK,AXE,ANSS,ANTM,AON,APA,AIV,APY,APPF,APPN,AAPL,AMAT,APTV,ARMK,ADM,ARNC,ARNA,ANET,AWI,ARW,ARWR,AJG,ABG,ASGN,ASH,AZPN,AIZ,ATRO,T,ATRA,ATKR,ATRI,BOLD,ADSK,ADP,AN,AZO,AVLR,AVB,AVNS,AVDR,AVY,AVP,AXGN,AAXN,AX,AXSM,BMI,BIDU,BKR,BCPC,BLL,BAND,BAC,BK,BZUN,BBSI,BAX,BECN,BDX,BBBY,BDC,BRK.B,BERY,BBY,BIG,BH,BILI,BIO,BIIB,BMRN,BEAT,BJRI,BKI,BLKB,BL,BLK,BLUE,BMCH,BA,BKNG,BOOT,BAH,BWA,SAM,BXP,BSX,EPAY,BFAM,BHF,BCO,BMY,BTI,AVGO,BR,BF.B,BRKR,BC,BLDR,BURL,CHRW,COG,WHD,CDNS,CALM,CVGW,CBM,CPB,COF,CPRI,CARA,CAH,CSII,CRCM,CDNA,CARG,CSL,KMX,CCL,CRS,CARS,CRI,CASY,CTLT,CAT,CVCO,CBRE,CE,CELG,CNC,CNP,CENT,CENTA,CTL,CERN,CF,CYOU,CRL,GTLS,CHTR,CHEF,CHGG,CHE,CHK,CVX,PLCE,CBPO,CEA,LFC,CHL,ZNH,CHA,CMG,CB,CHD,CHDN,CIEN,CI,XEC,CINF,CNK,CTAS,CRUS,CSCO,C,CFG,CTXS,CLH,CLF,CME,CMS,KO,CGNX,CTSH,COHR,CFX,CL,COLM,CMCO,CMCSA,CMA,CVLT,CAG,CXO,COP,ED,STZ,CBPX,CLR,CTB,CPS,CPRT,CORT,CLGX,CSOD,GLW,CTVA,CRVL,CSGP,COST,COTY,COUP,CVET,CBRL,CR,CACC,CREE,CROX,CCI,CCK,CSWI,CMI,CVS,CY,DHI,DHR,DRI,DAR,PLAY,DVA,DECK,DE,DK,DLPH,DAL,DLX,DNLI,XRAY,DVN,DXCM,FANG,DKS,DLR,DDS,DIOD,DFS,DISCA,DISCB,DISCK,DOCU,DLB,DG,DLTR,D,UFS,DORM,DOV,DOW,RDY,DRQ,DLTH,DD,DXC,DY,ETFC,EXP,EGRX,EMN,ETN,EBAY,ECHO,ECL,EPC,EIX,EDIT,EW,EHTH,ELAN,EA,LLY,EBS,EMR,ENTA,ECPG,ENDP,ET,ENV,EOG,EPAM,PLUS,EQT,EFX,EQIX,ETRN,ERIE,ESPR,ESS,ETSY,EEFT,EVBG,RE,ES,EVH,EXAS,EXEL,EXC,EXLS,EXPE,EXPD,EXR,XOM,FFIV,FB,FDS,FICO,FARO,FAST,FATE,FDX,RACE,FOE,FIS,FITB,FSLR,FISV,FIVN,FLT,FLIR,FND,FLS,FLR,FMC,FOCS,FL,F,FSCT,FORM,FORR,FTNT,FTV,FBHS,FOXF,BEN,FCX,FTR,FRPH,FCN,FNKO,GTHX,GPS,GRMN,GTX,IT,GCP,GNRC,GD,GE,GIS,GM,GCO,GWR,THRM,GPC,ROCK,GILD,GKOS,GBT,GPN,GL,GMED,GMS,GDDY,GS,GT,GOOG,GOSS,GHC,LOPE,GVA,GTN,GDOT,GBX,GSKY,GEF,GPI,GRUB,GSH,GH,GWRE,HRB,HAE,HAIN,HAL,HALO,HBI,HOG,HSC,HIG,HAS,HA,FUL,HCA,HIIQ,HCSG,HQY,PEAK,HP,HSIC,HCCI,MLHR,HRTX,HSY,HSKA,HES,HPE,HXL,HIBB,HLT,HGV,HFC,HOLX,HON,HRL,HST,TWNK,HHC,HPQ,HNP,HTHT,HUBG,HUBS,HUM,HBAN,HII,HURN,H,IAC,IBM,IBN,ICUI,IDXX,INFO,IIVI,ITW,ILMN,IMMU,INCY,IR,NGVT,INGR,INGN,IPHI,NSP,INSP,IBP,INST,PODD,ITGR,IART,INTC,NTLA,IPAR,ICE,IDCC,IFF,IP,INTU,ISRG,IVZ,IONS,IOVA,IPG,IPGP,IQV,IRTC,IRBT,IRM,ITRI,JCOM,JKHY,J,JBHT,JD,JEF,JELD,SJM,JBSS,JNJ,JCI,JOUT,JLL,YY,JPM,JNPR,LRN,KALU,KSU,K,KMT,KDP,KEY,KEYS,KMB,KIM,KMI,KEX,KLAC,KNX,KTB,KEP,KFY,KHC,KR,LB,LLL,LHX,LH,LRCX,LNTH,LVS,LEA,LEGH,LM,LEG,TREE,LEN,LII,LEVI,LPL,LGIH,LHCG,LGND,LECO,LIN,LAD,LYV,LTHM,LPSN,RAMP,LKQ,LMT,L,LOGM,LOW,LULU,LITE,LYB,MTB,MHO,MAC,M,MSG,MDGL,MGLN,MGY,MBUU,MNK,MANU,MANH,MAN,MANT,MRO,MPC,MMI,MKL,MKTX,MAR,MMC,MLM,MAS,MASI,MA,MTCH,MTRN,MATX,MAT,MXIM,MMS,MXL,MCD,MKC,MCK,MDSO,MD,MEDP,MDT,MLCO,MELI,MRK,MMSI,MTH,MTOR,MEI,MET,MTD,MTG,MFGP,MCHP,MU,MSFT,MSTR,MAA,MIDD,MRTX,MINI,MRNA,MHK,TAP,MOMO,MCRI,MDLZ,MDB,MNST,MCO,MS,MOS,MSI,MOV,MRC,MSM,MSCI,MSGN,MTSC,MUR,MUSA,MYL,MYOK,MYRG,MYGN,NDAQ,FIZZ,NOV,EYE,NTCO,NTUS,NAVI,NCR,NKTR,NEOG,NEO,NTAP,NTES,NFLX,NTGR,NTCT,NBIX,NJR,NEWR,NWL,NEU,NEM,NWS,NWSA,NXST,NEE,NLSN,NKE,LASR,NMIH,NBL,NOK,NDSN,JWN,NSC,NTRS,NOC,NLOK,DNOW,NRG,NUS,NUE,NTNX,NUVA,NVEE,NVDA,NVR,ORLY,OI,OXY,OII,OIS,OKTA,ODFL,OLLI,OMCL,OMC,ON,OKE,ONTO,ORCL,OSUR,OFIX,OSK,OSIS,OVV,OC,PCAR,PCRX,PKG,PD,PAGS,PANW,PZZA,PH,PATK,PDCO,PAYC,PCTY,PYPL,PBF,CNXN,PEGA,PNTG,PEN,PBCT,PEP,PRFT,PFGC,PKI,PRSP,PETQ,PTR,PFE,PCG,PGTI,PM,PSX,PPC,PXD,PBI,PLNT,PLXS,PS,PNC,PII,POL,POOL,POST,POWI,PPG,PPL,PRAA,PRAH,PINC,PBH,PFG,PG,PRGS,PGR,PLD,PFPT,PUMP,PRLB,PRSC,PRU,PTC,PEG,PSA,PHM,PSTG,PVH,QTWO,QADA,QRVO,QCOM,QLYS,PWR,QTNA,DGX,QDEL,QNST,QUOT,QRTEA,RARX,RL,RRC,RPD,RAVN,RJF,RYN,RTN,ROLL,RP,O,RETA,RHT,RRGB,RDFN,REG,REGN,RGNX,RF,RS,REGI,RGEN,RSG,REZI,RMD,REX,RXN,RH,RYTM,RNG,RHI,ROK,ROG,ROL,ROP,ROST,RCL,RDS.A,RPM,R,SPGI,SAGE,SAIA,SAIL,CRM,SBH,SAFM,SNY,SRPT,SCSC,SLB,SMG,SBCF,STX,SEE,SGEN,SEIC,WTTR,SRE,SMTC,SXT,SERV,NOW,SHAK,SHEN,SHW,SWAV,SSTK,SIG,SLAB,SPG,SMPL,SSD,SINA,SBGI,SHI,SITE,SKM,SKX,SWKS,SLG,SNBR,SMAR,SNA,SOHU,SEDG,SWI,SONO,BID,SO,SCCO,LUV,SWN,SP,SPR,SAVE,SPLK,SFM,SPSC,FLOW,SQ,SSNC,STAA,SXI,SWK,SBUX,STT,STLD,SRCL,SFIX,SRI,STRA,SYK,RGR,SUPN,SRDX,SIVB,SWCH,SYKE,SYNA,SYF,SYNH,SNX,SNPS,SYY,TROW,TCMD,TSM,TAL,TNDM,TPR,TGT,TTM,TMHC,TCRR,TCS,TEL,TECD,FTI,TGNA,TDY,TFX,TDS,TPX,TENB,TDC,TER,TSLA,TCBI,TXN,TXRH,TXT,AES,ALL,SCHW,CLX,COO,EL,HD,WMB,TMO,THO,TIF,TKR,TJX,TOL,BLD,TOT,TSS,TPIC,TSCO,TTD,TDG,RIG,TRU,TRV,THS,TREX,TPH,TRMB,TNET,TRIP,TFC,TRUP,TTMI,TCX,HEAR,FOX,FOXA,TWTR,TYL,TSN,UI,UDR,ULTA,UCTT,RARE,UAA,UA,UNF,UNP,UAL,UPS,URI,USM,UTX,UTHR,UNH,UNVR,OLED,UFPI,UHS,UNM,UPWK,URBN,USB,USFD,USNA,MTN,VALE,VLO,VNDA,VREX,VAR,VRNS,VEEV,VTR,VEON,VNE,VCYT,VCEL,VRNT,VRSN,VRSK,VRTV,VZ,VRTX,VFC,VIAC,VICR,VIPS,VRTU,V,VPG,VC,VCRA,VG,VNO,VMC,WBC,WAB,WMT,WBA,DIS,WM,WAT,WSO,WTS,W,WEC,WB,WCG,WFC,WELL,WERN,WCC,WAL,WDC,WU,WLK,WRK,WEX,WY,WHR,WLH,WSM,WLTW,WING,WGO,WWW,WWD,WDAY,WK,WRLD,WOR,GRA,GWW,WYND,WH,WYNN,XEL,XNCR,XRX,XLNX,XPO,XYL,YELP,YEXT,YUM,ZBRA,ZEN,ZG,Z,ZBH,ZION,ZTS,ZGNX,ZS,ZUMZ,ZUO,ZYNE,ZYXI,MBT';
    tickers = str.split(',');

    document.querySelectorAll(".ticker:not(.tinvest-tinkoff-ticker), #mainticker:not(.tinvest-tinkoff-ticker)").forEach(function (item) {
        if (tickers.indexOf(item.textContent) !== -1) {
            item.classList.add('tinvest-tinkoff-ticker')
        }
    })

}

style_arr = [
    '@media only screen and (min-width: 62em) {.listview .estimate {left: 425px;} .listview .time {left: 285px;}}',
    '@media only screen and (min-width: 48em) {.listview .estimate {left: 400px;} .listview .time {left: 270px;}}',
    'div#graph_block {position:fixed;border: 3px solid black;top: 554px;left: 204px;z-index: 1;}',
    '.unselectedoptions { width: auto !important}',
    '.tinvest-tinkoff-ticker {color: #ffff00 !important; text-shadow: 0 0 2px black;}',
    '#hide-show_non_tinkoff{position: absolute;left: 50px;} #hide-show_non_tinkoff input{visibility: visible;}',
    "li.nwh {counter-increment: my-awesome-counter;}li.nwh::before {content: counter(my-awesome-counter); position:absolute;top:5px;color:grey}"
];

var hidden = false;

function hideShowNonTinkoff() {
    els = document.querySelectorAll(".ticker:not(.tinvest-tinkoff-ticker)")
    els.forEach(function (element) {
        element.parentNode.parentNode.style.display = hidden ? '' : 'none';
    })
    hidden = !hidden;
}

if (window.location.host.replace('www.', '') == 'earningswhispers.com') {
    style_arr.forEach(function (style) {
        document.body.insertAdjacentHTML("afterbegin", "<style>" + style + "</style>")
    })

    $hidden = '<div id="hide-show_non_tinkoff"><label><input type="checkbox"' + (hidden ? 'CHECKED' : '') + '>Скрыть тикеры недоступные в Тинькофф</label></div>';
    document.getElementById('calheading').insertAdjacentHTML('afterend', $hidden);

    document.querySelector('#hide-show_non_tinkoff input').onchange = function () {
        hideShowNonTinkoff()
    }

    updateTime();
    markTinTicker();
    setInterval(function () {
        updateTime();
        markTinTicker();
    }, 500)

    //document.querySelector('#hide-show_non_tinkoff input').checked = true;
    //hideShowNonTinkoff();

    document.body.insertAdjacentHTML("afterbegin", "<div id='graph_block' style='display: none'><img src></div>");
    graph_block = document.querySelector("div#graph_block")
    img_block = document.querySelector("div#graph_block img")

    document.onmouseover = function (e) {
        var e = e || window.event, el = e.target || el.srcElement;
        if (el.tagName == 'DIV' && el.classList[0] == 'ticker') {
            url = getGraphUrl(el.textContent)
            img_block.src = url
            graph_block.style.display = 'block'
            graph_block.style.top = (e.clientY -50) + "px"
            graph_block.style.left = (e.clientX + 50) + "px"
        }
    };

    document.onmouseout = function (e) {
        var e = e || window.event, el = e.target || el.srcElement;
        graph_block.style.display = 'none'
    };
} else {
    console.log('not ew')
}



