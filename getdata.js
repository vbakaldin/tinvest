function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function clicknext(time) {
	let i = 0;
	while (true) {
		try {
			let classes = document.getElementsByClassName('ui-button__ui-button__text_pw5ce');
			let Next = classes[0];
			Next.click();
			console.log(i);
			i = i + 1;
			await sleep(time);
		}
		catch (err) {
			console.log("Error!");
			break;
		}
		finally {
		}
	};
	console.log(document.getElementsByClassName('SecurityColumn__nameWrapper_RqHij').length)
};
clicknext(2000);


function readtickers() {
	// ��� ������	
	let list = document.getElementsByClassName('Caption__subcaption_2WIbw');
	console.log(list.length);
	let tickers = [];
	for (var i = 0; i < list.length; i++) {
		tickers.push(list[i].innerHTML);
	};
	console.log(String(tickers))
};
readtickers();


let str = '';
str = 'FLWS,TWOU,MMM,JOBS,EGHT,AOS,AIR,AAN,ABT,ABBV,ABMD,ACIA,ACAD,XLRN,ACN,ATVI,AYI,ADUS,ADBE,ATGE,AAP,AEIS,ASIX,ACM,AERI,AJRD,AVAV,AMG,AFL,AGCO,A,AGIO,AIMT,APD,AKAM,ALRM,ALK,ALB,AA,ARE,ALXN,BABA,ALGN,ALLK,Y,ALGT,ALLE,AGN,ADS,LNT,ALSN,ALLO,MDRX,ALNY,GOOGL,ALTR,AYX,ATUS,MO,ACH,AMZN,AMCX,AMD,AMED,AEE,CRMT,AAL,AXP,AIG,AOBC,APEI,AWR,AMT,AMWD,AMP,AME,AMGN,AMN,APH,APC,ADI,PLAN,ANAB,ANDE,ANGI,BUD,ANIP,ANIK,AXE,ANSS,ANTM,AON,APA,AIV,APY,APPF,APPN,AAPL,AMAT,APTV,ARMK,ADM,ARNC,ARNA,ANET,AWI,ARW,ARWR,AJG,ABG,ASGN,ASH,AZPN,AIZ,ATRO,T,ATRA,ATKR,ATRI,BOLD,ADSK,ADP,AN,AZO,AVLR,AVB,AVNS,AVDR,AVY,AVP,AXGN,AAXN,AX,AXSM,BMI,BIDU,BKR,BCPC,BLL,BAND,BAC,BK,BZUN,BBSI,BAX,BECN,BDX,BBBY,BDC,BRK.B,BERY,BBY,BIG,BH,BILI,BIO,BIIB,BMRN,BEAT,BJRI,BKI,BLKB,BL,BLK,BLUE,BMCH,BA,BKNG,BOOT,BAH,BWA,SAM,BXP,BSX,EPAY,BFAM,BHF,BCO,BMY,BTI,AVGO,BR,BF.B,BRKR,BC,BLDR,BURL,CHRW,COG,WHD,CDNS,CALM,CVGW,CBM,CPB,COF,CPRI,CARA,CAH,CSII,CRCM,CDNA,CARG,CSL,KMX,CCL,CRS,CARS,CRI,CASY,CTLT,CAT,CVCO,CBRE,CE,CELG,CNC,CNP,CENT,CENTA,CTL,CERN,CF,CYOU,CRL,GTLS,CHTR,CHEF,CHGG,CHE,CHK,CVX,PLCE,CBPO,CEA,LFC,CHL,ZNH,CHA,CMG,CB,CHD,CHDN,CIEN,CI,XEC,CINF,CNK,CTAS,CRUS,CSCO,C,CFG,CTXS,CLH,CLF,CME,CMS,KO,CGNX,CTSH,COHR,CFX,CL,COLM,CMCO,CMCSA,CMA,CVLT,CAG,CXO,COP,ED,STZ,CBPX,CLR,CTB,CPS,CPRT,CORT,CLGX,CSOD,GLW,CTVA,CRVL,CSGP,COST,COTY,COUP,CVET,CBRL,CR,CACC,CREE,CROX,CCI,CCK,CSWI,CMI,CVS,CY,DHI,DHR,DRI,DAR,PLAY,DVA,DECK,DE,DK,DLPH,DAL,DLX,DNLI,XRAY,DVN,DXCM,FANG,DKS,DLR,DDS,DIOD,DFS,DISCA,DISCB,DISCK,DOCU,DLB,DG,DLTR,D,UFS,DORM,DOV,DOW,RDY,DRQ,DLTH,DD,DXC,DY,ETFC,EXP,EGRX,EMN,ETN,EBAY,ECHO,ECL,EPC,EIX,EDIT,EW,EHTH,ELAN,EA,LLY,EBS,EMR,ENTA,ECPG,ENDP,ET,ENV,EOG,EPAM,PLUS,EQT,EFX,EQIX,ETRN,ERIE,ESPR,ESS,ETSY,EEFT,EVBG,RE,ES,EVH,EXAS,EXEL,EXC,EXLS,EXPE,EXPD,EXR,XOM,FFIV,FB,FDS,FICO,FARO,FAST,FATE,FDX,RACE,FOE,FIS,FITB,FSLR,FISV,FIVN,FLT,FLIR,FND,FLS,FLR,FMC,FOCS,FL,F,FSCT,FORM,FORR,FTNT,FTV,FBHS,FOXF,BEN,FCX,FTR,FRPH,FCN,FNKO,GTHX,GPS,GRMN,GTX,IT,GCP,GNRC,GD,GE,GIS,GM,GCO,GWR,THRM,GPC,ROCK,GILD,GKOS,GBT,GPN,GL,GMED,GMS,GDDY,GS,GT,GOOG,GOSS,GHC,LOPE,GVA,GTN,GDOT,GBX,GSKY,GEF,GPI,GRUB,GSH,GH,GWRE,HRB,HAE,HAIN,HAL,HALO,HBI,HOG,HSC,HIG,HAS,HA,FUL,HCA,HIIQ,HCSG,HQY,PEAK,HP,HSIC,HCCI,MLHR,HRTX,HSY,HSKA,HES,HPE,HXL,HIBB,HLT,HGV,HFC,HOLX,HON,HRL,HST,TWNK,HHC,HPQ,HNP,HTHT,HUBG,HUBS,HUM,HBAN,HII,HURN,H,IAC,IBM,IBN,ICUI,IDXX,INFO,IIVI,ITW,ILMN,IMMU,INCY,IR,NGVT,INGR,INGN,IPHI,NSP,INSP,IBP,INST,PODD,ITGR,IART,INTC,NTLA,IPAR,ICE,IDCC,IFF,IP,INTU,ISRG,IVZ,IONS,IOVA,IPG,IPGP,IQV,IRTC,IRBT,IRM,ITRI,JCOM,JKHY,J,JBHT,JD,JEF,JELD,SJM,JBSS,JNJ,JCI,JOUT,JLL,YY,JPM,JNPR,LRN,KALU,KSU,K,KMT,KDP,KEY,KEYS,KMB,KIM,KMI,KEX,KLAC,KNX,KTB,KEP,KFY,KHC,KR,LB,LLL,LHX,LH,LRCX,LNTH,LVS,LEA,LEGH,LM,LEG,TREE,LEN,LII,LEVI,LPL,LGIH,LHCG,LGND,LECO,LIN,LAD,LYV,LTHM,LPSN,RAMP,LKQ,LMT,L,LOGM,LOW,LULU,LITE,LYB,MTB,MHO,MAC,M,MSG,MDGL,MGLN,MGY,MBUU,MNK,MANU,MANH,MAN,MANT,MRO,MPC,MMI,MKL,MKTX,MAR,MMC,MLM,MAS,MASI,MA,MTCH,MTRN,MATX,MAT,MXIM,MMS,MXL,MCD,MKC,MCK,MDSO,MD,MEDP,MDT,MLCO,MELI,MRK,MMSI,MTH,MTOR,MEI,MET,MTD,MTG,MFGP,MCHP,MU,MSFT,MSTR,MAA,MIDD,MRTX,MINI,MRNA,MHK,TAP,MOMO,MCRI,MDLZ,MDB,MNST,MCO,MS,MOS,MSI,MOV,MRC,MSM,MSCI,MSGN,MTSC,MUR,MUSA,MYL,MYOK,MYRG,MYGN,NDAQ,FIZZ,NOV,EYE,NTCO,NTUS,NAVI,NCR,NKTR,NEOG,NEO,NTAP,NTES,NFLX,NTGR,NTCT,NBIX,NJR,NEWR,NWL,NEU,NEM,NWS,NWSA,NXST,NEE,NLSN,NKE,LASR,NMIH,NBL,NOK,NDSN,JWN,NSC,NTRS,NOC,NLOK,DNOW,NRG,NUS,NUE,NTNX,NUVA,NVEE,NVDA,NVR,ORLY,OI,OXY,OII,OIS,OKTA,ODFL,OLLI,OMCL,OMC,ON,OKE,ONTO,ORCL,OSUR,OFIX,OSK,OSIS,OVV,OC,PCAR,PCRX,PKG,PD,PAGS,PANW,PZZA,PH,PATK,PDCO,PAYC,PCTY,PYPL,PBF,CNXN,PEGA,PNTG,PEN,PBCT,PEP,PRFT,PFGC,PKI,PRSP,PETQ,PTR,PFE,PCG,PGTI,PM,PSX,PPC,PXD,PBI,PLNT,PLXS,PS,PNC,PII,POL,POOL,POST,POWI,PPG,PPL,PRAA,PRAH,PINC,PBH,PFG,PG,PRGS,PGR,PLD,PFPT,PUMP,PRLB,PRSC,PRU,PTC,PEG,PSA,PHM,PSTG,PVH,QTWO,QADA,QRVO,QCOM,QLYS,PWR,QTNA,DGX,QDEL,QNST,QUOT,QRTEA,RARX,RL,RRC,RPD,RAVN,RJF,RYN,RTN,ROLL,RP,O,RETA,RHT,RRGB,RDFN,REG,REGN,RGNX,RF,RS,REGI,RGEN,RSG,REZI,RMD,REX,RXN,RH,RYTM,RNG,RHI,ROK,ROG,ROL,ROP,ROST,RCL,RDS.A,RPM,R,SPGI,SAGE,SAIA,SAIL,CRM,SBH,SAFM,SNY,SRPT,SCSC,SLB,SMG,SBCF,STX,SEE,SGEN,SEIC,WTTR,SRE,SMTC,SXT,SERV,NOW,SHAK,SHEN,SHW,SWAV,SSTK,SIG,SLAB,SPG,SMPL,SSD,SINA,SBGI,SHI,SITE,SKM,SKX,SWKS,SLG,SNBR,SMAR,SNA,SOHU,SEDG,SWI,SONO,BID,SO,SCCO,LUV,SWN,SP,SPR,SAVE,SPLK,SFM,SPSC,FLOW,SQ,SSNC,STAA,SXI,SWK,SBUX,STT,STLD,SRCL,SFIX,SRI,STRA,SYK,RGR,SUPN,SRDX,SIVB,SWCH,SYKE,SYNA,SYF,SYNH,SNX,SNPS,SYY,TROW,TCMD,TSM,TAL,TNDM,TPR,TGT,TTM,TMHC,TCRR,TCS,TEL,TECD,FTI,TGNA,TDY,TFX,TDS,TPX,TENB,TDC,TER,TSLA,TCBI,TXN,TXRH,TXT,AES,ALL,SCHW,CLX,COO,EL,HD,WMB,TMO,THO,TIF,TKR,TJX,TOL,BLD,TOT,TSS,TPIC,TSCO,TTD,TDG,RIG,TRU,TRV,THS,TREX,TPH,TRMB,TNET,TRIP,TFC,TRUP,TTMI,TCX,HEAR,FOX,FOXA,TWTR,TYL,TSN,UI,UDR,ULTA,UCTT,RARE,UAA,UA,UNF,UNP,UAL,UPS,URI,USM,UTX,UTHR,UNH,UNVR,OLED,UFPI,UHS,UNM,UPWK,URBN,USB,USFD,USNA,MTN,VALE,VLO,VNDA,VREX,VAR,VRNS,VEEV,VTR,VEON,VNE,VCYT,VCEL,VRNT,VRSN,VRSK,VRTV,VZ,VRTX,VFC,VIAC,VICR,VIPS,VRTU,V,VPG,VC,VCRA,VG,VNO,VMC,WBC,WAB,WMT,WBA,DIS,WM,WAT,WSO,WTS,W,WEC,WB,WCG,WFC,WELL,WERN,WCC,WAL,WDC,WU,WLK,WRK,WEX,WY,WHR,WLH,WSM,WLTW,WING,WGO,WWW,WWD,WDAY,WK,WRLD,WOR,GRA,GWW,WYND,WH,WYNN,XEL,XNCR,XRX,XLNX,XPO,XYL,YELP,YEXT,YUM,ZBRA,ZEN,ZG,Z,ZBH,ZION,ZTS,ZGNX,ZS,ZUMZ,ZUO,ZYNE,ZYXI,MBT';
a1 = str.split(',');
console.log(a1.length);

str = 'FLWS,TWOU,MMM,JOBS,EGHT,AOS,AIR,AAN,ABT,ABBV,ABMD,ACIA,ACAD,XLRN,ACN,ATVI,AYI,ADUS,ADBE,ATGE,AAP,AEIS,ASIX,ACM,AERI,AJRD,AVAV,AMG,AFL,AGCO,A,AGIO,AIMT,APD,AKAM,ALRM,ALK,ALB,AA,ARE,ALXN,BABA,ALGN,ALLK,Y,ALGT,ALLE,AGN,ADS,LNT,ALSN,ALLO,MDRX,ALNY,GOOGL,ALTR,AYX,ATUS,MO,ACH,AMZN,AMCX,AMD,AMED,AEE,CRMT,AAL,AXP,AIG,AOBC,APEI,AWR,AMT,AMWD,AMP,AME,AMGN,AMN,APH,APC,ADI,PLAN,ANAB,ANDE,ANGI,BUD,ANIP,ANIK,AXE,ANSS,ANTM,AON,APA,AIV,APY,APPF,APPN,AAPL,AMAT,APTV,ARMK,ADM,ARNC,ARNA,ANET,AWI,ARW,ARWR,AJG,ABG,ASGN,ASH,AZPN,AIZ,ATRO,T,ATRA,ATKR,ATRI,BOLD,ADSK,ADP,AN,AZO,AVLR,AVB,AVNS,AVDR,AVY,AVP,AXGN,AAXN,AX,AXSM,BMI,BIDU,BKR,BCPC,BLL,BAND,BAC,BK,BZUN,BBSI,BAX,BECN,BDX,BBBY,BDC,BRK.B,BERY,BBY,BIG,BH,BILI,BIO,BIIB,BMRN,BEAT,BJRI,BKI,BLKB,BL,BLK,BLUE,BMCH,BA,BKNG,BOOT,BAH,BWA,SAM,BXP,BSX,EPAY,BFAM,BHF,BCO,BMY,BTI,AVGO,BR,BF.B,BRKR,BC,BLDR,BURL,CHRW,COG,WHD,CDNS,CALM,CVGW,CBM,CPB,COF,CPRI,CARA,CAH,CSII,CRCM,CDNA,CARG,CSL,KMX,CCL,CRS,CARS,CRI,CASY,CTLT,CAT,CVCO,CBRE,CE,CELG,CNC,CNP,CENT,CENTA,CTL,CERN,CF,CYOU,CRL,GTLS,CHTR,CHEF,CHGG,CHE,CHK,CVX,PLCE,CBPO,CEA,LFC,CHL,ZNH,CHA,CMG,CB,CHD,CHDN,CIEN,CI,XEC,CINF,CNK,CTAS,CRUS,CSCO,C,CFG,CTXS,CLH,CLF,CME,CMS,KO,CGNX,CTSH,COHR,CFX,CL,COLM,CMCO,CMCSA,CMA,CVLT,CAG,CXO,COP,ED,STZ,CBPX,CLR,CTB,CPS,CPRT,CORT,CLGX,CSOD,GLW,CTVA,CRVL,CSGP,COST,COTY,COUP,CVET,CBRL,CR,CACC,CREE,CROX,CCI,CCK,CSWI,CMI,CVS,CY,DHI,DHR,DRI,DAR,PLAY,DVA,DECK,DE,DK,DLPH,DAL,DLX,DNLI,XRAY,DVN,DXCM,FANG,DKS,DLR,DDS,DIOD,DFS,DISCA,DISCB,DISCK,DOCU,DLB,DG,DLTR,D,UFS,DORM,DOV,DOW,RDY,DRQ,DLTH,DD,DXC,DY,ETFC,EXP,EGRX,EMN,ETN,EBAY,ECHO,ECL,EPC,EIX,EDIT,EW,EHTH,ELAN,EA,LLY,EBS,EMR,ENTA,ECPG,ENDP,ET,ENV,EOG,EPAM,PLUS,EQT,EFX,EQIX,ETRN,ERIE,ESPR,ESS,ETSY,EEFT,EVBG,RE,ES,EVH,EXAS,EXEL,EXC,EXLS,EXPE,EXPD,EXR,XOM,FFIV,FB,FDS,FICO,FARO,FAST,FATE,FDX,RACE,FOE,FIS,FITB,FSLR,FISV,FIVN,FLT,FLIR,FND,FLS,FLR,FMC,FOCS,FL,F,FSCT,FORM,FORR,FTNT,FTV,FBHS,FOXF,BEN,FCX,FTR,FRPH,FCN,FNKO,GTHX,GPS,GRMN,GTX,IT,GCP,GNRC,GD,GE,GIS,GM,GCO,GWR,THRM,GPC,ROCK,GILD,GKOS,GBT,GPN,GL,GMED,GMS,GDDY,GS,GT,GOOG,GOSS,GHC,LOPE,GVA,GTN,GDOT,GBX,GSKY,GEF,GPI,GRUB,GSH,GH,GWRE,HRB,HAE,HAIN,HAL,HALO,HBI,HOG,HSC,HIG,HAS,HA,FUL,HCA,HIIQ,HCSG,HQY,PEAK,HP,HSIC,HCCI,MLHR,HRTX,HSY,HSKA,HES,HPE,HXL,HIBB,HLT,HGV,HFC,HOLX,HON,HRL,HST,TWNK,HHC,HPQ,HNP,HTHT,HUBG,HUBS,HUM,HBAN,HII,HURN,H,IAC,IBM,IBN,ICUI,IDXX,INFO,IIVI,ITW,ILMN,IMMU,INCY,IR,NGVT,INGR,INGN,IPHI,NSP,INSP,IBP,INST,PODD,ITGR,IART,INTC,NTLA,IPAR,ICE,IDCC,IFF,IP,INTU,ISRG,IVZ,IONS,IOVA,IPG,IPGP,IQV,IRTC,IRBT,IRM,ITRI,JCOM,JKHY,J,JBHT,JD,JEF,JELD,SJM,JBSS,JNJ,JCI,JOUT,JLL,YY,JPM,JNPR,LRN,KALU,KSU,K,KMT,KDP,KEY,KEYS,KMB,KIM,KMI,KEX,KLAC,KNX,KTB,KEP,KFY,KHC,KR,LB,LLL,LHX,LH,LRCX,LNTH,LVS,LEA,LEGH,LM,LEG,TREE,LEN,LII,LEVI,LPL,LGIH,LHCG,LGND,LECO,LIN,LAD,LYV,LTHM,LPSN,RAMP,LKQ,LMT,L,LOGM,LOW,LULU,LITE,LYB,MTB,MHO,MAC,M,MSG,MDGL,MGLN,MGY,MBUU,MNK,MANU,MANH,MAN,MANT,MRO,MPC,MMI,MKL,MKTX,MAR,MMC,MLM,MAS,MASI,MA,MTCH,MTRN,MATX,MAT,MXIM,MMS,MXL,MCD,MKC,MCK,MDSO,MD,MEDP,MDT,MLCO,MELI,MRK,MMSI,MTH,MTOR,MEI,MET,MTD,MTG,MFGP,MCHP,MU,MSFT,MSTR,MAA,MIDD,MRTX,MINI,MRNA,MHK,TAP,MOMO,MCRI,MDLZ,MDB,MNST,MCO,MS,MOS,MSI,MOV,MRC,MSM,MSCI,MSGN,MTSC,MUR,MUSA,MYL,MYOK,MYRG,MYGN,NDAQ,FIZZ,NOV,EYE,NTCO,NTUS,NAVI,NCR,NKTR,NEOG,NEO,NTAP,NTES,NFLX,NTGR,NTCT,NBIX,NJR,NEWR,NWL,NEU,NEM,NWS,NWSA,NXST,NEE,NLSN,NKE,LASR,NMIH,NBL,NOK,NDSN,JWN,NSC,NTRS,NOC,NLOK,DNOW,NRG,NUS,NUE,NTNX,NUVA,NVEE,NVDA,NVR,ORLY,OI,OXY,OII,OIS,OKTA,ODFL,OLLI,OMCL,OMC,ON,OKE,ONTO,ORCL,OSUR,OFIX,OSK,OSIS,OVV,OC,PCAR,PCRX,PKG,PD,PAGS,PANW,PZZA,PH,PATK,PDCO,PAYC,PCTY,PYPL,PBF,CNXN,PEGA,PNTG,PEN,PBCT,PEP,PRFT,PFGC,PKI,PRSP,PETQ,PTR,PFE,PCG,PGTI,PM,PSX,PPC,PXD,PBI,PLNT,PLXS,PS,PNC,PII,POL,POOL,POST,POWI,PPG,PPL,PRAA,PRAH,PINC,PBH,PFG,PG,PRGS,PGR,PLD,PFPT,PUMP,PRLB,PRSC,PRU,PTC,PEG,PSA,PHM,PSTG,PVH,QTWO,QADA,QRVO,QCOM,QLYS,PWR,QTNA,DGX,QDEL,QNST,QUOT,QRTEA,RARX,RL,RRC,RPD,RAVN,RJF,RYN,RTN,ROLL,RP,O,RETA,RHT,RRGB,RDFN,REG,REGN,RGNX,RF,RS,REGI,RGEN,RSG,REZI,RMD,REX,RXN,RH,RYTM,RNG,RHI,ROK,ROG,ROL,ROP,ROST,RCL,RDS.A,RPM,R,SPGI,SAGE,SAIA,SAIL,CRM,SBH,SAFM,SNY,SRPT,SCSC,SLB,SMG,SBCF,STX,SEE,SGEN,SEIC,WTTR,SRE,SMTC,SXT,SERV,NOW,SHAK,SHEN,SHW,SWAV,SSTK,SIG,SLAB,SPG,SMPL,SSD,SINA,SBGI,SHI,SITE,SKM,SKX,SWKS,SLG,SNBR,SMAR,SNA,SOHU,SEDG,SWI,SONO,BID,SO,SCCO,LUV,SWN,SP,SPR,SAVE,SPLK,SFM,SPSC,FLOW,SQ,SSNC,STAA,SXI,SWK,SBUX,STT,STLD,SRCL,SFIX,SRI,STRA,SYK,RGR,SUPN,SRDX,SIVB,SWCH,SYKE,SYNA,SYF,SYNH,SNX,SNPS,SYY,TROW,TCMD,TSM,TAL,TNDM,TPR,TGT,TTM,TMHC,TCRR,TCS,TEL,TECD,FTI,TGNA,TDY,TFX,TDS,TPX,TENB,TDC,TER,TSLA,TCBI,TXN,TXRH,TXT,AES,ALL,SCHW,CLX,COO,EL,HD,WMB,TMO,THO,TIF,TKR,TJX,TOL,BLD,TOT,TSS,TPIC,TSCO,TTD,TDG,RIG,TRU,TRV,THS,TREX,TPH,TRMB,TNET,TRIP,TFC,TRUP,TTMI,TCX,HEAR,FOX,FOXA,TWTR,TYL,TSN,UI,UDR,ULTA,UCTT,RARE,UAA,UA,UNF,UNP,UAL,UPS,URI,USM,UTX,UTHR,UNH,UNVR,OLED,UFPI,UHS,UNM,UPWK,URBN,USB,USFD,USNA,MTN,VALE,VLO,VNDA,VREX,VAR,VRNS,VEEV,VTR,VEON,VNE,VCYT,VCEL,VRNT,VRSN,VRSK,VRTV,VZ,VRTX,VFC,VIAC,VICR,VIPS,VRTU,V,VPG,VC,VCRA,VG,VNO,VMC,WBC,WAB,WMT,WBA,DIS,WM,WAT,WSO,WTS,W,WEC,WB,WCG,WFC,WELL,WERN,WCC,WAL,WDC,WU,WLK,WRK,WEX,WY,WHR,WLH,WSM,WLTW,WING,WGO,WWW,WWD,WDAY,WK,WRLD,WOR,GRA,GWW,WYND,WH,WYNN,XEL,XNCR,XRX,XLNX,XPO,XYL,YELP,YEXT,YUM,ZBRA,ZEN,ZG,Z,ZBH,ZION,ZTS,ZGNX,ZS,ZUMZ,ZUO,ZYNE,ZYXI,MBT';
a2 = str.split(',');
console.log(a2.length);

a1.filter(i => !a2.includes(i)).concat(a2.filter(i => !a1.includes(i)));