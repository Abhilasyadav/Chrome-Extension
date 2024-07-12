const url = 'https://google-news13.p.rapidapi.com/business?lr=en-US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '42374dbbe2msh52da13620b1435dp146e8ejsn13696d83a268',
		'x-rapidapi-host': 'google-news13.p.rapidapi.com'
	}
};

// const orgdata = {
//     "status": "success",
//     "items": [
//         {
//             "title": "The best long-term plan for Thames Water is to get it back on the stock market",
//             "snippet": "The discipline of being a listed company should mean an end to the days of ultra-high leverage and opaque corporate structures.",
//             "publisher": "The Guardian",
//             "timestamp": "1720733340000",
//             "newsUrl": "https://www.theguardian.com/business/nils-pratley-on-finance/article/2024/jul/11/the-best-long-term-plan-for-thames-water-is-to-get-it-back-on-the-stock-market",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNVZNSGwzTjJGV01uRlhYM1YxVFJDUkF4ajhCU2dLTWdzUlFvQ21LaWhOS2dxVEZn=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iMkNnNVZNSGwzTjJGV01uRlhYM1YxVFJDUkF4ajhCU2dLTWdzUlFvQ21LaWhOS2dxVEZn"
//             },
//             "hasSubnews": true,
//             "subnews": [
//                 {
//                     "title": "Explainer: How bad is the crisis at Thames Water?",
//                     "snippet": "Thames Water is in trouble. Britain's biggest water utility, which provides essential water and sewerage services to around a quarter of the population in ...",
//                     "publisher": "Financial Times",
//                     "timestamp": "1720756929000",
//                     "newsUrl": "https://www.ft.com/content/6087dea0-6ec0-40bd-831e-6a0f9ca91cd0",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUlia2N0U0RWWWNXVm5iRTlxVFJDZkF4ampCU2dLTWdrSkFvNmxJdWsxSVFN=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUlia2N0U0RWWWNXVm5iRTlxVFJDZkF4ampCU2dLTWdrSkFvNmxJdWsxSVFN"
//                     }
//                 },
//                 {
//                     "title": "Britain's largest water utility placed under special measures as it grapples with $20 billion debt pile",
//                     "snippet": "Regulators gave Thames Water permission to raise customer bills by an average £99 annually over the next five years, nearly half of what it asked for.",
//                     "publisher": "CNBC",
//                     "timestamp": "1720701158000",
//                     "newsUrl": "https://www.cnbc.com/2024/07/11/britains-largest-water-utility-grapples-with-15-billion-debt-pile.html",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUxTMVZLY25CNFRYQkpPRmw1VFJDZkF4ampCU2dLTWdrQkFJb2lEQ29sVEFJ=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUxTMVZLY25CNFRYQkpPRmw1VFJDZkF4ampCU2dLTWdrQkFJb2lEQ29sVEFJ"
//                     }
//                 },
//                 {
//                     "title": "Water bills: Thames closer to end game as UK pays high price for failure of industry oversight",
//                     "snippet": "Sky's Paul Kelso writes there are no winners from Ofwat's draft verdicts on water firm business plans, with the largest supplier now tipped to find it even ...",
//                     "publisher": "Sky News",
//                     "timestamp": "1720700847000",
//                     "newsUrl": "https://news.sky.com/story/water-bills-thames-closer-to-end-game-as-uk-pays-high-price-for-failure-of-industry-oversight-13176463",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHpOakV3V1RWNmJrUTBUVFZ4VFJDZkF4ampCU2dLTWdrQkFKWmdBV2xOS1FJ=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNHpOakV3V1RWNmJrUTBUVFZ4VFJDZkF4ampCU2dLTWdrQkFKWmdBV2xOS1FJ"
//                     }
//                 },
//                 {
//                     "title": "Thames Water says it has enough cash until May next year",
//                     "snippet": "Debt-laden Thames Water has said it has enough cash to fund its operations until the end of May next year but that efforts to raise new money are continuing ...",
//                     "publisher": "BBC",
//                     "timestamp": "1720507460000",
//                     "newsUrl": "https://www.bbc.co.uk/news/articles/c51ypwj0214o",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXJlbVpyYm5oRldVWjZaSGRvVFJDZkF4ampCU2dLTWdZTlFKQjRvQWc=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJlbVpyYm5oRldVWjZaSGRvVFJDZkF4ampCU2dLTWdZTlFKQjRvQWc"
//                     }
//                 },
//                 {
//                     "title": "Thames Water is paying the price for years of greed and incompetence",
//                     "snippet": "The accusation so often levelled against Britain's water regulator is that it has been asleep at the wheel while the industry sinks into the seas that ...",
//                     "publisher": "The Telegraph",
//                     "timestamp": "1720702200000",
//                     "newsUrl": "https://www.telegraph.co.uk/business/2024/07/11/thames-water-paying-price-years-greed-incompetence/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUtaMnRwYkhadGJUSlRNR3hHVFJDUUF4ai1CU2dLTWdrMUFJeDNET1pMaGdJ=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUtaMnRwYkhadGJUSlRNR3hHVFJDUUF4ai1CU2dLTWdrMUFJeDNET1pMaGdJ"
//                     }
//                 },
//                 {
//                     "title": "Thames Water Faces Breakup as Ofwat Rejects Full Bill Hike",
//                     "snippet": "The UK's biggest water and sewage company could be broken up, listed on the stock exchange, or forced to cap its debt under special measures set out by the ...",
//                     "publisher": "Bloomberg",
//                     "timestamp": "1720678260000",
//                     "newsUrl": "https://www.bloomberg.com/news/articles/2024-07-11/thames-water-put-in-special-measures-regime-by-industry-watchdog",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUxXbFoxYzBacmVHZEZMV1pYVFJDb0FSaXNBaWdCTWdiQk1aVFZwQWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUxXbFoxYzBacmVHZEZMV1pYVFJDb0FSaXNBaWdCTWdiQk1aVFZwQWM"
//                     }
//                 }
//             ]
//         },
//         {
//             "title": "Ofwat accused of showing ‘contempt’ to customers over water bill price rises",
//             "snippet": "Politicians and campaigners condemn charging proposals, as regulator puts Thames Water into special measures.",
//             "publisher": "The Guardian",
//             "timestamp": "1720747860000",
//             "newsUrl": "https://www.theguardian.com/business/article/2024/jul/11/ofwat-accused-of-showing-contempt-to-customers-over-water-bill-price-rises",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNU5iVzUyVG5aRVVHVXlUbGc0VFJDUkF4ajhCU2dLTWdzTm9ZUUZ2YVl0bHpqUlZB=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iMkNnNU5iVzUyVG5aRVVHVXlUbGc0VFJDUkF4ajhCU2dLTWdzTm9ZUUZ2YVl0bHpqUlZB"
//             },
//             "hasSubnews": true,
//             "subnews": [
//                 {
//                     "title": "How can you save money on water bills?",
//                     "snippet": "With water bills set to rise, BBC Wales' Felicity Evans gives her tips for cutting bills.",
//                     "publisher": "BBC.com",
//                     "timestamp": "1720732664000",
//                     "newsUrl": "https://www.bbc.com/news/videos/cd1r3prz6lzo",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXZhRE5ZTVU5QlVHZzRUVlJDVFJDb0FSaXNBaWdCTWdZdGhaQ3ZNUWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXZhRE5ZTVU5QlVHZzRUVlJDVFJDb0FSaXNBaWdCTWdZdGhaQ3ZNUWM"
//                     }
//                 },
//                 {
//                     "title": "Compensation for boil notices among new water company rules announced by environment secretary",
//                     "snippet": "More compensation, possible refunds and new customer panels have been announced as part of the government's \"initial steps\" towards ending what it describes ...",
//                     "publisher": "Sky News",
//                     "timestamp": "1720650946000",
//                     "newsUrl": "https://news.sky.com/story/compensation-for-boil-notices-among-new-water-company-rules-announced-by-environment-secretary-13176253",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVhZMlpXTFhVNFFqaG9NbEZKVFJDZkF4ampCU2dLTWdhdEZaVE5sUW8=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVhZMlpXTFhVNFFqaG9NbEZKVFJDZkF4ampCU2dLTWdhdEZaVE5sUW8"
//                     }
//                 },
//                 {
//                     "title": "Government announces first steps to reform water sector",
//                     "snippet": "Environment Secretary Steve Reed has announced a series of initial steps towards ending the crisis in the water sector.",
//                     "publisher": "GOV.UK",
//                     "timestamp": "1720652400000",
//                     "newsUrl": "https://www.gov.uk/government/news/government-announces-first-steps-to-reform-water-sector",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNXVjbFZYU0Uwd01sTlVPRTV2VFJDMUFSaVhBaWdCTWdNQnNBdw=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXVjbFZYU0Uwd01sTlVPRTV2VFJDMUFSaVhBaWdCTWdNQnNBdw"
//                     }
//                 },
//                 {
//                     "title": "Starmer vows to make underperforming water bosses ‘personally responsible’",
//                     "snippet": "Sir Keir Starmer has vowed to make utility bosses personally responsible for sewage failings after it was announced that Thames Water was being put into ...",
//                     "publisher": "The Telegraph",
//                     "timestamp": "1720718460000",
//                     "newsUrl": "https://www.telegraph.co.uk/business/2024/07/11/thames-water-bills-rise-by-99-year/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNW5lR2hFZEZFeldXVllaVEZCVFJDUUF4ai1CU2dLTWdrVmdJN29OR2NXVVFF=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNW5lR2hFZEZFeldXVllaVEZCVFJDUUF4ai1CU2dLTWdrVmdJN29OR2NXVVFF"
//                     }
//                 },
//                 {
//                     "title": "Say NO to a shareholder bailout: stop the water bill hikes!",
//                     "snippet": "The water regulator Ofwat has JUST called for bills to rise by 21% in real-terms to save water companies from financial collapse. It's outrageous!",
//                     "publisher": "We Own It",
//                     "timestamp": "1720697367000",
//                     "newsUrl": "https://weownit.org.uk/act-now/stop-the-shareholder-bailout-no-bill-hikes",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTNhRU10VmtJMVpHOUVURVJMVFJDM0FSaVRBaWdCTWdZQkVJcnp1QWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTNhRU10VmtJMVpHOUVURVJMVFJDM0FSaVRBaWdCTWdZQkVJcnp1QWM"
//                     }
//                 },
//                 {
//                     "title": "UK plans to put failing water companies into ‘special measures’",
//                     "snippet": "Proposals come as South East Water warns it needs investors to put more money into the business.",
//                     "publisher": "Financial Times",
//                     "timestamp": "1720647199000",
//                     "newsUrl": "https://www.ft.com/content/e9c3af76-8ae0-4830-b53b-ef9b426285ae",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXZZVmRSUkZGb1ZFOWhaMEpWVFJDS0F4aThCU2dLTWdrQlVJanFxYWl4aVFJ=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXZZVmRSUkZGb1ZFOWhaMEpWVFJDS0F4aThCU2dLTWdrQlVJanFxYWl4aVFJ"
//                     }
//                 }
//             ]
//         },
//         {
//             "title": "Pioneering UK microchip maker bought by Japanese conglomerate",
//             "snippet": "British artificial intelligence (AI) chip firm Graphcore - once considered a potential rival to market leader Nvidia - has been bought by a Japanese ...",
//             "publisher": "BBC",
//             "timestamp": "1720738977000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/c3gd1n5kmy5o",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXNVMnhKYW04MFNtbDFkbGxTVFJDZkF4ampCU2dLTWdZUlJZeXZJUWc=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXNVMnhKYW04MFNtbDFkbGxTVFJDZkF4ampCU2dLTWdZUlJZeXZJUWc"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "UK economy grew faster than expected in May",
//             "snippet": "The UK economy grew faster than expected in May helped by a strong performance from retailers and the construction industry. The economy expanded by 0.4%, ...",
//             "publisher": "BBC.com",
//             "timestamp": "1720707101000",
//             "newsUrl": "https://www.bbc.com/news/articles/cp682nprlw7o",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXpTV1ZaVW5FeFlYWkxVVFJRVFJDZkF4ampCU2dLTWdhUk1vb1RwUWc=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXpTV1ZaVW5FeFlYWkxVVFJRVFJDZkF4ampCU2dLTWdhUk1vb1RwUWc"
//             },
//             "hasSubnews": true,
//             "subnews": [
//                 {
//                     "title": "Surprise growth boost for Labour as GDP rises by 0.4% in May",
//                     "snippet": "The UK economy returned to growth in May after a washout month in April when activity flatlined, resuming the recovery from last year's recession.",
//                     "publisher": "The Guardian",
//                     "timestamp": "1720677780000",
//                     "newsUrl": "https://www.theguardian.com/uk-news/article/2024/jul/11/uk-economy-returned-to-growth-in-may",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNXJhRGhhTmxCWlNUZERVMUV5VFJDUkF4ajhCU2dLTWdB=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iI0NnNXJhRGhhTmxCWlNUZERVMUV5VFJDUkF4ajhCU2dLTWdB"
//                     }
//                 },
//                 {
//                     "title": "Why Starmer might be about to inherit an economic boom",
//                     "snippet": "Labour leader is beginning his premiership against the best economic backdrop in years.",
//                     "publisher": "The Telegraph",
//                     "timestamp": "1720703100000",
//                     "newsUrl": "https://www.telegraph.co.uk/business/2024/07/11/starmer-labour-uk-economy-growth-boom-inherit/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW5jakYzZEdFd2NFUm1hRlF5VFJDUUF4ai1CU2dLTWdZeFZKS3ZyUWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNW5jakYzZEdFd2NFUm1hRlF5VFJDUUF4ai1CU2dLTWdZeFZKS3ZyUWM"
//                     }
//                 },
//                 {
//                     "title": "Healthier economy may delay interest rate cuts in a blow for borrowers",
//                     "snippet": "The UK economy grew quicker than expected in May but this could lead to a further delay in the Bank of England cutting interest rates in another blow to ...",
//                     "publisher": "The Independent",
//                     "timestamp": "1720694907000",
//                     "newsUrl": "https://www.independent.co.uk/news/uk/home-news/interest-rates-mortgages-borrowing-economy-b2577993.html",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWpjMjFOU3pnM1NGQm9TVkJPVFJERUF4aW1CU2dLTWdtVlFZYTFuR21TS2dJ=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWpjMjFOU3pnM1NGQm9TVkJPVFJERUF4aW1CU2dLTWdtVlFZYTFuR21TS2dJ"
//                     }
//                 },
//                 {
//                     "title": "Wall Street mixed as US inflation falls while FTSE 100 rises and pound hits one-year high",
//                     "snippet": "The FTSE 100 (^FTSE) and European stocks pushed higher on Thursday as the UK economy grew by 0.4% in May. According to figures from the Office for National ...",
//                     "publisher": "Yahoo Finance UK",
//                     "timestamp": "1720711740000",
//                     "newsUrl": "https://uk.finance.yahoo.com/news/live/ftse-100-live-european-us-stock-markets-uk-economy-081230985.html",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNTFXR3hDV0dsc1ZsSlVjVlpUVFJERUF4aW1CU2dLTWdzQkFJQ1dBS3VDU0JtMk5R=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iMkNnNTFXR3hDV0dsc1ZsSlVjVlpUVFJERUF4aW1CU2dLTWdzQkFJQ1dBS3VDU0JtMk5R"
//                     }
//                 },
//                 {
//                     "title": "Economy records better than expected 0.4% growth in May after earlier hit from wet weather",
//                     "snippet": "The Office for National Statistics (ONS) recorded gross domestic product growth of 0.4% in the month following zero growth during April.",
//                     "publisher": "Sky News",
//                     "timestamp": "1720679625000",
//                     "newsUrl": "https://news.sky.com/story/economy-records-0-4-growth-in-may-after-hit-from-wet-weather-13175943",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXhlVzFHYVZoQ04yUkhaM0p6VFJDZkF4ampCU2dLTWdrWkE0cHJtV1pVTXdF=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXhlVzFHYVZoQ04yUkhaM0p6VFJDZkF4ampCU2dLTWdrWkE0cHJtV1pVTXdF"
//                     }
//                 },
//                 {
//                     "title": "UK economy returns to growth in May, beating expectations as British pound hits four-month high",
//                     "snippet": "UK gross domestic product figures for May were published Thursday.",
//                     "publisher": "CNBC",
//                     "timestamp": "1720678014000",
//                     "newsUrl": "https://www.cnbc.com/2024/07/11/uk-economic-growth-may-2024.html",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNWphelJEUlMxNVQwMWtNbk5FVFJDZkF4ampCU2dLTWdNQlF3dw=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNWphelJEUlMxNVQwMWtNbk5FVFJDZkF4ampCU2dLTWdNQlF3dw"
//                     }
//                 }
//             ]
//         },
//         {
//             "title": "UK is top destination in Europe for tech sector venture capital investment",
//             "snippet": "UK technology companies raised more than their peers in France and Germany combined.",
//             "publisher": "Sky News",
//             "timestamp": "1720724309000",
//             "newsUrl": "https://news.sky.com/story/uk-is-top-destination-in-europe-for-tech-sector-venture-capital-investment-13176727",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNDBjVFEwV1dSWUxYbDRYMFpNVFJDZkF4ampCU2dLTWdNQm9BQQ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNDBjVFEwV1dSWUxYbDRYMFpNVFJDZkF4ampCU2dLTWdNQm9BQQ"
//             },
//             "hasSubnews": true,
//             "subnews": [
//                 {
//                     "title": "UK sweeps a third of European tech funding in 2024 as London and Cambridge boom",
//                     "snippet": "UK firms have received nearly a third of European venture capital tech funding so far this year, new data shows.",
//                     "publisher": "City A.M.",
//                     "timestamp": "1720674000000",
//                     "newsUrl": "https://www.cityam.com/uk-sweeps-a-third-of-european-tech-funding-in-2024-as-london-and-cambridge-boom/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXdPWEUzUWpGSFpsQnBhSGxoVFJERUF4aW5CU2dLTWdZQkVJb0NHd2c=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXdPWEUzUWpGSFpsQnBhSGxoVFJERUF4aW5CU2dLTWdZQkVJb0NHd2c"
//                     }
//                 },
//                 {
//                     "title": "UK overtakes India as world’s third biggest venture capital market",
//                     "snippet": "The UK has overtaken India as the world's third largest venture capital market amid an industry slump in which investment and deal numbers dropped markedly ...",
//                     "publisher": "The Times",
//                     "timestamp": "1720674000000",
//                     "newsUrl": "https://www.thetimes.com/business-money/economics/article/uk-overtakes-india-as-worlds-third-biggest-venture-capital-market-6r22rk3q7",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNU1SSGhSVDFRM2NuaGpUMGRNVFJDZkF4ampCU2dLTWdhVmNvNFZMUWc=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNU1SSGhSVDFRM2NuaGpUMGRNVFJDZkF4ampCU2dLTWdhVmNvNFZMUWc"
//                     }
//                 },
//                 {
//                     "title": "U.K. tech overtakes China, cementing its position as the world’s second-largest ecosystem by funding",
//                     "snippet": "China may be the world's second-largest economy, but when it comes to startup funding, the U.K. is punching above its weight. Startups in the U.K. raised ...",
//                     "publisher": "Fortune",
//                     "timestamp": "1720181911000",
//                     "newsUrl": "https://fortune.com/europe/2024/07/05/uk-tech-overtakes-china-cementing-position-worlds-second-largest-ecosystem-funding/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXlSbTl5YkhodWQzVmtjMjAxVFJESEF4aWlCU2dLTWdhdGRaTE9MUWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXlSbTl5YkhodWQzVmtjMjAxVFJESEF4aWlCU2dLTWdhdGRaTE9MUWM"
//                     }
//                 },
//                 {
//                     "title": "AI and energy boost Europe’s VC funding to $30bn this year",
//                     "snippet": "A Dealroom report suggests that energy remains the top sector for VC funding in Europe, while generative AI represented 10pc of the continent's VC funding ...",
//                     "publisher": "SiliconRepublic.com",
//                     "timestamp": "1720688861000",
//                     "newsUrl": "https://www.siliconrepublic.com/start-ups/europe-vc-funding-2024-ai-energy-dealroom-report",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVJXazl1VTFaYUxWOXpkRkJpVFJEZ0F4aUFCU2dLTWdZUk1vek1zUWM=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVJXazl1VTFaYUxWOXpkRkJpVFJEZ0F4aUFCU2dLTWdZUk1vek1zUWM"
//                     }
//                 },
//                 {
//                     "title": "The European tech ecosystem: H1 2024 Report",
//                     "snippet": "Throughout the year we track various data points across the European tech ecosystem, and the mid-year mark is a great time to review numbers and highlight ...",
//                     "publisher": "Tech.eu",
//                     "timestamp": "1720512312000",
//                     "newsUrl": "https://tech.eu/2024/07/09/h1-2024/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHRVSGh1VUZSQmNITjBhMk5OVFJDb0FSaXNBaWdCTWdZVmdwRHNyQVk=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHRVSGh1VUZSQmNITjBhMk5OVFJDb0FSaXNBaWdCTWdZVmdwRHNyQVk"
//                     }
//                 },
//                 {
//                     "title": "GenAI and energy investments propel European VC to $30B in H1 2024: Dealroom",
//                     "snippet": "In H1 2024, European tech investment has propelled to nearly $30B, driven by mega rounds for energy and Generative AI companies, reveals data from Dealroom.",
//                     "publisher": "Silicon Canals",
//                     "timestamp": "1720682321000",
//                     "newsUrl": "https://siliconcanals.com/european-vc-raised-30b-in-h1-2024/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXJZbmh1V1ZWellYZG1jRGxRVFJDUUF4ai1CU2dLTWdZQm9KTGt2Z1k=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJZbmh1V1ZWellYZG1jRGxRVFJDUUF4ai1CU2dLTWdZQm9KTGt2Z1k"
//                     }
//                 }
//             ]
//         },
//         {
//             "title": "India's wildly popular payments system attracts scammers",
//             "snippet": "Fast and free, India's UPI payments system has been a big success, but has attracted scammers.",
//             "publisher": "BBC",
//             "timestamp": "1720732498000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/c288m1km01po",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUJaa0ZLWldsa1lXNXJMWGR1VFJDZkF4ampCU2dLTWdhVlpKRE5NUWM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUJaa0ZLWldsa1lXNXJMWGR1VFJDZkF4ampCU2dLTWdhVlpKRE5NUWM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "FTSE 100 Live: Stocks close in green, water bill debate erupts, British Airways slips",
//             "snippet": "FTSE 100 up 29.8 points to 8223 Thames Water bills to rise UK economy grows more than expected 4.51pm: Water companies and housebuilders lead gains ...",
//             "publisher": "Proactive Investors UK",
//             "timestamp": "1720713060000",
//             "newsUrl": "https://www.proactiveinvestors.co.uk/companies/news/1051670/ftse-100-live-uk-economy-pulls-forward-water-bill-debate-erupts-pound-rallies-1051670.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW1USEptTkVkYVV6aFVOREZPVFJEREFSaWtBeWdLTWdZQkFJQ2hWUUk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNW1USEptTkVkYVV6aFVOREZPVFJEREFSaWtBeWdLTWdZQkFJQ2hWUUk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "UK announces biggest overhaul of listings regime in decades",
//             "snippet": "Regulators have approved the biggest overhaul of rules for London-listed companies in three decades as the UK attempts to revive its capital markets, ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720652531000",
//             "newsUrl": "https://www.ft.com/content/a990dfd6-ef99-40ca-b382-276f9f811d00",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUlZbWN0YkRKeWREVkhZWE53VFJDS0F4aThCU2dLTWdrQllJempybVVleVFF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUlZbWN0YkRKeWREVkhZWE53VFJDS0F4aThCU2dLTWdrQllJempybVVleVFF"
//             },
//             "hasSubnews": true,
//             "subnews": [
//                 {
//                     "title": "London stock market rules shaken up in attempt to stop firms moving overseas",
//                     "snippet": "Changes will allow companies to skip shareholder votes on takeovers, which critics say risk 'diluting the quality' of the UK market.",
//                     "publisher": "The Guardian",
//                     "timestamp": "1720674000000",
//                     "newsUrl": "https://www.theguardian.com/business/article/2024/jul/11/london-stock-market-rules-shaken-up-fca-regulations",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW1aaTFUVVZWVVZXRldNMFJPVFJDUkF4ajhCU2dLTWdaSndJQ1dYQUk=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNW1aaTFUVVZWVVZXRldNMFJPVFJDUkF4ajhCU2dLTWdaSndJQ1dYQUk"
//                     }
//                 },
//                 {
//                     "title": "Britain fast-tracks biggest company listings shake-up in decades",
//                     "snippet": "LONDON, July 11 (Reuters) - Britain's markets watchdog on Thursday paved the way for the biggest shake-up in three decades of rules for companies listing on ...",
//                     "publisher": "Reuters",
//                     "timestamp": "1720690320000",
//                     "newsUrl": "https://www.reuters.com/markets/europe/britain-fast-tracks-biggest-company-listings-shake-up-decades-2024-07-10/",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXRja3hET0hjdGNHOW9ZakJmVFJES0F4aWRCU2dLTWdtQnNJWUd6aU5FTkFF=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXRja3hET0hjdGNHOW9ZakJmVFJES0F4aWRCU2dLTWdtQnNJWUd6aU5FTkFF"
//                     }
//                 },
//                 {
//                     "title": "Britain makes biggest overhaul of listing regime in decades",
//                     "snippet": "The U.K.'s Financial Conduct Authority outlined its new listing rules with a view to reinvigorating the country's troubled capital markets via the biggest.",
//                     "publisher": "MarketWatch",
//                     "timestamp": "1720681560000",
//                     "newsUrl": "https://www.marketwatch.com/story/britain-makes-biggest-overhaul-of-listing-regime-in-decades-981c9599",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHlSR2wyVW5wTmJITnJkak5GVFJDM0FSaVRBaWdCTWdrTm9KUmFzS2Q2endF=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNHlSR2wyVW5wTmJITnJkak5GVFJDM0FSaVRBaWdCTWdrTm9KUmFzS2Q2endF"
//                     }
//                 },
//                 {
//                     "title": "UK stock market rules shake-up not universally popular",
//                     "snippet": "Chief among the changes is a removal of the need for shareholders to vote on significant transactions and so-called 'related party transactions' where a ...",
//                     "publisher": "Sky News",
//                     "timestamp": "1720691722000",
//                     "newsUrl": "https://news.sky.com/story/uk-stock-market-rules-shake-up-not-universally-popular-13176470",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTVWVXhvY0VWbFp6WXhhVVpJVFJDZkF4ampCU2dLTWdZQkFJUVN5UUk=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTVWVXhvY0VWbFp6WXhhVVpJVFJDZkF4ampCU2dLTWdZQkFJUVN5UUk"
//                     }
//                 },
//                 {
//                     "title": "Hargreaves warns of diluted investor rights under new listing regime",
//                     "snippet": "The Financial Conduct Authority today announced an overhaul of the UK listing regime, aimed at making London's struggling capital markets a more attractive.",
//                     "publisher": "Proactive Investors UK",
//                     "timestamp": "1720691640000",
//                     "newsUrl": "https://www.proactiveinvestors.co.uk/companies/news/1051695/hargreaves-warns-of-diluted-investor-rights-under-new-listing-regime-1051695.html",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDNZbEJ0YTJGMWJrYzFZVFpGVFJEREFSaWtBeWdLTWdZRlVvU3NTUU0=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDNZbEJ0YTJGMWJrYzFZVFpGVFJEREFSaWtBeWdLTWdZRlVvU3NTUU0"
//                     }
//                 },
//                 {
//                     "title": "UK Overhauls Listing Rules in Bid to Lure IPOs to London",
//                     "snippet": "UK regulators overhauled their rules for companies looking to make their public debut in London, part of a concerted effort to draw more initial public ...",
//                     "publisher": "Bloomberg",
//                     "timestamp": "1720652460000",
//                     "newsUrl": "https://www.bloomberg.com/news/articles/2024-07-10/uk-overhauls-listing-rules-in-bid-to-lure-more-ipos-to-london",
//                     "images": {
//                         "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNU9UekUxYjFWRVVubHFla2R2VFJERUF4aW1CU2dLTWdPQlVBZw=-w280-h168-p-df-rw",
//                         "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNU9UekUxYjFWRVVubHFla2R2VFJERUF4aW1CU2dLTWdPQlVBZw"
//                     }
//                 }
//             ]
//         },
//         {
//             "title": "Sterling surges to one-year high after UK growth and US inflation surprises",
//             "snippet": "Sterling rose to its highest level against the dollar in almost a year on Thursday after the UK economy grew more than expected in May while lower than ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720716734000",
//             "newsUrl": "https://www.ft.com/content/ae169e6a-3533-44f0-a00d-af62dfb3b7cb",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXBkVE5CYW5rM1IzQjBNMFJsVFJDS0F4aThCU2dLTWdrSklvNEhzbVV0Q0FJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXBkVE5CYW5rM1IzQjBNMFJsVFJDS0F4aThCU2dLTWdrSklvNEhzbVV0Q0FJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Microsoft drops observer seat on OpenAI board amid regulator scrutiny",
//             "snippet": "Microsoft has withdrawn its observer seat on the OpenAI board and Apple will no longer be able to appoint an executive to a similar role, amid regulatory ...",
//             "publisher": "The Guardian",
//             "timestamp": "1720661400000",
//             "newsUrl": "https://www.theguardian.com/technology/article/2024/jul/10/microsoft-drops-observer-seat-on-openai-board-amid-regulator-scrutiny",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWZSRlpuYlZsUmVrRnBjMkowVFJDUkF4ajhCU2dLTWdhdHNZUlFPUVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWZSRlpuYlZsUmVrRnBjMkowVFJDUkF4ajhCU2dLTWdhdHNZUlFPUVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Visa and Mastercard users raise alarm about major issue with bank cards",
//             "snippet": "Visa and Mastercard users have been hit by an unusual problem with making payments.",
//             "publisher": "The Independent",
//             "timestamp": "1720699717000",
//             "newsUrl": "https://www.independent.co.uk/tech/visa-mastercard-down-not-working-payment-issue-b2577990.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDBRbUZ6TkZWaWRUQk1UR0p4VFJERUF4aW1CU2dLTWdZQkFLVG5qQXM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDBRbUZ6TkZWaWRUQk1UR0p4VFJERUF4aW1CU2dLTWdZQkFLVG5qQXM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Antitrust",
//             "snippet": "The European Commission has made commitments offered by Apple legally binding under EU antitrust rules. The commitments address the Commission's competition ...",
//             "publisher": "European Commission",
//             "timestamp": "1720666759000",
//             "newsUrl": "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_3706",
//             "hasSubnews": false
//         },
//         {
//             "title": "US Dollar Slumps After Inflation Eases Further - Stocks, Gold, and Silver Rally",
//             "snippet": "The US dollar fell sharply after the latest US CPI data showed inflation easing by more than forecast. US stocks and gold are rallying into the US open.",
//             "publisher": "DailyFX",
//             "timestamp": "1720702790000",
//             "newsUrl": "https://www.dailyfx.com/news/us-dollar-slumps-after-inflation-eases-further-stocks-gold-and-silver-rally-20240711.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDRYemxmUmxoM2NHNVRVbk0xVFJDTEF4aThCU2dLTWdZdEFweFFDUXM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDRYemxmUmxoM2NHNVRVbk0xVFJDTEF4aThCU2dLTWdZdEFweFFDUXM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Ex-Top Gear star weighs in as fans accuse Ford of ‘ruining’ iconic Capri with new EV",
//             "snippet": "Former Top Gear host Quentin Wilson has admitted Ford's latest car is “not a Capri” after motorists attacked the American manufacturer for using the iconic ...",
//             "publisher": "Express",
//             "timestamp": "1720699800000",
//             "newsUrl": "https://www.express.co.uk/life-style/cars/1921868/top-gear-quentin-wilson-ford-capri",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDNaRzV5VFY5U2VGTTFTelJEVFJDUkF4ajhCU2dLTWdZaGs0NXN0UVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDNaRzV5VFY5U2VGTTFTelJEVFJDUkF4ajhCU2dLTWdZaGs0NXN0UVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Wetherspoons names 'all' 36 pubs in England set to close - full list of locations",
//             "snippet": "The pub giant, which operates pubs and boozers across Birmingham, is set to swing the door shut on a whopping 36 sites as it puts boozers up for sale up and ...",
//             "publisher": "Birmingham Live",
//             "timestamp": "1720717320000",
//             "newsUrl": "https://www.birminghammail.co.uk/whats-on/food-drink-news/wetherspoons-names-all-36-pubs-29525299",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWhiVE15YVc5NmMwUkhZMlJpVFJEZ0F4aUFCU2dLTWdZSmtKQ0hPQVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiVE15YVc5NmMwUkhZMlJpVFJEZ0F4aUFCU2dLTWdZSmtKQ0hPQVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Heat pump warning as 3millions homes must have installations this Parliament",
//             "snippet": "According to an analysis, one in 10 households approximately three million homes need to install heat pumps or other low carbon heating during this ...",
//             "publisher": "Express",
//             "timestamp": "1720607700000",
//             "newsUrl": "https://www.express.co.uk/finance/personalfinance/1921292/three-million-homes-must-install-clean-heating-heat-pumps-parliament",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTNialZEYWxkcE0zcE5TV3hvVFJDUkF4ajhCU2dLTWdZNVk1UXlLUWc=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTNialZEYWxkcE0zcE5TV3hvVFJDUkF4ajhCU2dLTWdZNVk1UXlLUWc"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Labour will boost UK shares, says BlackRock - and these funds could profit",
//             "snippet": "The investment giant has backed UK stocks to outperform, with foreign investors pulled in by 'relative political stability'.",
//             "publisher": "This is Money",
//             "timestamp": "1720686048000",
//             "newsUrl": "https://www.thisismoney.co.uk/money/investing/article-13620335/BlackRock-tips-UK-stocks-outperform-post-election-political-stability.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXJNRE40U0c5SFJtaG1aRzVKVFJELUFoajhCQ2dLTWdZQm9JQlRVUVE=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJNRE40U0c5SFJtaG1aRzVKVFJELUFoajhCQ2dLTWdZQm9JQlRVUVE"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Wealth manager takes legal action against fund house for ‘unacceptable performance’",
//             "snippet": "Financial planning firm Tavistock and investment manager Titan have descended into a legal spat over Titan's model portfolio service (MPS).",
//             "publisher": "City A.M.",
//             "timestamp": "1720694300000",
//             "newsUrl": "https://www.cityam.com/titan-and-tavistock-descend-into-legal-spat-over-sustained-period-of-unacceptable-performance/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNDFjMmQxTFdGNlJVRkhkR3h1VFJERUF4aW1CU2dLTWdrQmNJYnRMV2hjendF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNDFjMmQxTFdGNlJVRkhkR3h1VFJERUF4aW1CU2dLTWdrQmNJYnRMV2hjendF"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "USD/JPY update, having a Freaky Friday",
//             "snippet": "FX dealers got no time to listen to Biden's presser, too busy with JPY.",
//             "publisher": "ForexLive",
//             "timestamp": "1720743180000",
//             "newsUrl": "https://www.forexlive.com/news/usdjpy-update-having-a-freaky-friday-20240712/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNTFSVkpSUmpCWWRuQnVRVXQ2VFJES0F4aWVCU2dLTWdrcFlKRE5KS1VlYndF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNTFSVkpSUmpCWWRuQnVRVXQ2VFJES0F4aWVCU2dLTWdrcFlKRE5KS1VlYndF"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Citigroup’s new head of banking granted $40mn in stock",
//             "snippet": "Citigroup's recently hired head of banking is receiving more than $40mn worth of shares from his new employer. The grant, enormous even by Wall Street ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720735511000",
//             "newsUrl": "https://www.ft.com/content/62f1f2cc-1e9e-4eb2-b28f-2a4064f47572",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUxXVWxrVG5oQlFtMVdhVGczVFJDS0F4aThCU2dLTWdZNUJLQnhFUXM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUxXVWxrVG5oQlFtMVdhVGczVFJDS0F4aThCU2dLTWdZNUJLQnhFUXM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Gold extends gain to $50, nears all-time record close",
//             "snippet": "Rate cuts? Failing growth? Huge deficits? Political instability? Geopolitical fears? Take your pick, gold has them all. The week started off with a slump on ...",
//             "publisher": "ForexLive",
//             "timestamp": "1720711620000",
//             "newsUrl": "https://www.forexlive.com/news/gold-extends-gain-to-50-nears-all-time-record-close-20240711/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNU9lR016YlVFMldHeFZiV0ZWVFJDakF4amJCU2dLTWdZUlFKem9JQWs=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNU9lR016YlVFMldHeFZiV0ZWVFJDakF4amJCU2dLTWdZUlFKem9JQWs"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Heathrow has its busiest-ever day as 268,000 passengers travel in 24 hours - just days after British Airways I",
//             "snippet": "Heathrow Airport has recorded its busiest ever day for passengers turning 268000 people through its terminals in 24 hours as Brits head to and from the ...",
//             "publisher": "Daily Mail",
//             "timestamp": "1720701639000",
//             "newsUrl": "https://www.dailymail.co.uk/news/article-13623589/Heathrow-busiest-day-268-000-passengers-travel-24-hours-just-days-British-Airways-meltdown-left-flyers-stranded-planes.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTRYelZDTVhKR1NXWmtiRXgxVFJDZkF4ampCU2dLTWdZQmNKRGhzQVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTRYelZDTVhKR1NXWmtiRXgxVFJDZkF4ampCU2dLTWdZQmNKRGhzQVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Crest Nicholson set to accept revised Bellway bid",
//             "snippet": "Crest Nicholson directors said they are “minded to recommend” an improved bid for the house builder by rival Bellway. Both firms confirmed today that a ...",
//             "publisher": "Construction Enquirer",
//             "timestamp": "1720602858000",
//             "newsUrl": "https://www.constructionenquirer.com/2024/07/10/crest-nicholson-set-to-accept-revised-bellway-bid/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDFjV1JhYTFGRlZtUlhja3RUVFJETUF4aWJCU2dLTWdaRklKUzFHQWM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDFjV1JhYTFGRlZtUlhja3RUVFJETUF4aWJCU2dLTWdaRklKUzFHQWM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Why a lack of train drivers is causing a problem for ScotRail",
//             "snippet": "The introduction of a temporary timetable by ScotRail highlights a big long-term problem - it simply does not have enough drivers.",
//             "publisher": "BBC",
//             "timestamp": "1720607789000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/c9r3lze1pllo",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVhSRjk1YjIxTE5EZG1iMnN6VFJDZkF4ampCU2dLTWdhWmxZcnN0UVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVhSRjk1YjIxTE5EZG1iMnN6VFJDZkF4ampCU2dLTWdhWmxZcnN0UVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "New MG HS on sale now with 75-mile PHEV for sub-£32,000",
//             "snippet": "MG has revealed the second generation of its popular HS SUV at the Goodwood Festival of Speed, ahead of the first customer deliveries getting under way by ...",
//             "publisher": "Autocar",
//             "timestamp": "1720710000000",
//             "newsUrl": "https://www.autocar.co.uk/car-news/new-cars/new-mg-hs-sale-now-75-mile-phev-sub-%C2%A332000",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWhjek4xT0VOWmRGQnNNbVJVVFJDM0FSaVVBaWdCTWdhTlVwRHByUVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhjek4xT0VOWmRGQnNNbVJVVFJDM0FSaVVBaWdCTWdhTlVwRHByUVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Britain likely to lose nearly one in six millionaires by 2028, report says",
//             "snippet": "Britain is likely to lose nearly one in six of its U.S. dollar millionaires by 2028, but their number is set to grow in other countries including the United ...",
//             "publisher": "Reuters UK",
//             "timestamp": "1720609680000",
//             "newsUrl": "https://www.reuters.com/world/uk/britain-likely-lose-nearly-one-six-millionaires-by-2028-report-says-2024-07-10/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHhiV3hRVmtobVEzTTNlR05SVFJEZ0F4al9CQ2dLTWdZQndJWXNTUVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHhiV3hRVmtobVEzTTNlR05SVFJEZ0F4al9CQ2dLTWdZQndJWXNTUVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "BP predicts global oil demand will peak in 2025, bringing to end rising emissions",
//             "snippet": "Report says peak will bring to end to rising emissions as wind and solar capacity surges, but gas forecasts likely to cause concern.",
//             "publisher": "The Guardian",
//             "timestamp": "1720661400000",
//             "newsUrl": "https://www.theguardian.com/business/article/2024/jul/10/bp-predicts-global-oil-demand-will-peak-in-2025-emissions-wind-solar-gas",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTJNMGgyUlVaVGNsQmlSVFJsVFJDUkF4ajhCU2dLTWdZZFFZSFg2QUU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTJNMGgyUlVaVGNsQmlSVFJsVFJDUkF4ajhCU2dLTWdZZFFZSFg2QUU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Tata Steel starts voluntary redundancy process",
//             "snippet": "Firm starts asking employees if they would accept voluntary redundancy.",
//             "publisher": "BBC.com",
//             "timestamp": "1720715646000",
//             "newsUrl": "https://www.bbc.com/news/articles/c97dg99vj3go",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXRiVW81Y2tkMWQzWjRTWGxpVFJDZkF4ampCU2dLTWdZTlVvQ1JKUVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRiVW81Y2tkMWQzWjRTWGxpVFJDZkF4ampCU2dLTWdZTlVvQ1JKUVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Couple win six-year legal battle for pay-out after cancelled flight",
//             "snippet": "A couple whose flight was cancelled after a pilot fell ill off-duty has won their six-year legal battle for compensation. Ken and Linda Lipton, ...",
//             "publisher": "Kent Online",
//             "timestamp": "1720623600000",
//             "newsUrl": "https://www.kentonline.co.uk/sevenoaks/news/couple-win-six-year-legal-battle-for-pay-out-after-cancelled-309609/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHhZbWxzU0hJeFl6TTBSVlJsVFJETEF4aWNCU2dLTWdtVllveUlwaWhGTVFF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNHhZbWxzU0hJeFl6TTBSVlJsVFJETEF4aWNCU2dLTWdtVllveUlwaWhGTVFF"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Met Office verdict on August heatwave as hot temperatures look set to return",
//             "snippet": "The weather agency's long-range forecast brings hope for a brighter August.",
//             "publisher": "Manchester Evening News",
//             "timestamp": "1720719240000",
//             "newsUrl": "https://www.manchestereveningnews.co.uk/news/uk-news/met-office-verdict-august-heatwave-29523625",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVdWRGhNWkRGNFMydG9hVkpIVFJEZ0F4aUFCU2dLTWdZQm9Jb2x3Z00=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVdWRGhNWkRGNFMydG9hVkpIVFJEZ0F4aUFCU2dLTWdZQm9Jb2x3Z00"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Europe prepares for a mighty trade war",
//             "snippet": "Will it be able to stick to its rule-abiding principles? | Finance & economics.",
//             "publisher": "The Economist",
//             "timestamp": "1720690614000",
//             "newsUrl": "https://www.economist.com/finance-and-economics/2024/07/11/europe-prepares-for-a-mighty-trade-war",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWFaa1kwWTBaNFlqSjNjV0l3VFJDZkF4ampCU2dLTWdrQkVvYkZsU1BZUmdJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWFaa1kwWTBaNFlqSjNjV0l3VFJDZkF4ampCU2dLTWdrQkVvYkZsU1BZUmdJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Andy Burnham wants a Greater Manchester tube network as he gives update on new Metrolink lines",
//             "snippet": "Mr Burnham said he hoped work on new tram lines to Stockport, Heywood, Middleton and Bolton would begin during his current term in office.",
//             "publisher": "Manchester Evening News",
//             "timestamp": "1720695360000",
//             "newsUrl": "https://www.manchestereveningnews.co.uk/news/greater-manchester-news/andy-burnham-wants-greater-manchester-29520675",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTBjbVpKUmpGclZIazBTSFJOVFJEZ0F4aUFCU2dLTWdhQlFZd05LUVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTBjbVpKUmpGclZIazBTSFJOVFJEZ0F4aUFCU2dLTWdhQlFZd05LUVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Morning Coffee: Bad luck to bankers hoping for big bonuses. Deutsche Bank’s most critical ex-employee gets a payout",
//             "snippet": "While the Great Deal Drought of 2023 seems to have been a mercifully short phenomenon, sensible bankers won't be spending too much time with supercar or ...",
//             "publisher": "eFinancialCareers",
//             "timestamp": "1720680956000",
//             "newsUrl": "https://www.efinancialcareers.com/news/banking-bonuses-bad-luck",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUtjRmRNY3paVWREZHFjbTA0VFJDeUFSaXNBaWdLTWdrQllJNlByR2ZCREFJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUtjRmRNY3paVWREZHFjbTA0VFJDeUFSaXNBaWdLTWdrQllJNlByR2ZCREFJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Traffic filters launch now 'in question' due to Botley Road delays",
//             "snippet": "The launch of Oxford's traffic filters is now 'in question' following Network Rail's announcement that the Botley Road will not reopen in October.",
//             "publisher": "Oxford Mail",
//             "timestamp": "1720695600000",
//             "newsUrl": "https://www.oxfordmail.co.uk/news/24445148.traffic-filters-start-in-question-botley-road-delay/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHljWGRTV1ZwRGJtUkhkM1ZDVFJERUF4aW1CU2dLTWdhQllvWkhyZ00=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHljWGRTV1ZwRGJtUkhkM1ZDVFJERUF4aW1CU2dLTWdhQllvWkhyZ00"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Sadiq Khan charges drivers £8 a day to use Blackwall Tunnel",
//             "snippet": "Drivers face paying up to £177 a week to drive into central London after Sadiq Khan announced an £8 daily charge to use two tunnels under the Thames.",
//             "publisher": "The Telegraph",
//             "timestamp": "1720633140000",
//             "newsUrl": "https://www.telegraph.co.uk/business/2024/07/10/sadiq-khan-charges-drivers-day-use-blackwall-tunnel/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVlRa0ZhVGpaNE1YZFlZM0JLVFJDcEF4aW9CU2dLTWdhcFJaYnRwUWc=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVlRa0ZhVGpaNE1YZFlZM0JLVFJDcEF4aW9CU2dLTWdhcFJaYnRwUWc"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Royal Mail to ditch train fleet as part of major shake-up to delivering post",
//             "snippet": "The postal service said its almost 30-year-old freight trains are at the end of their operational lives.",
//             "publisher": "STV News",
//             "timestamp": "1720684712000",
//             "newsUrl": "https://news.stv.tv/scotland/royal-mail-to-ditch-train-fleet-as-part-of-major-shake-up-to-delivering-post",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNVpWWEl4TkhKb1MxSk9aSEJPVFJEWUFSakVBaWdLTWdPQmtCUQ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNVpWWEl4TkhKb1MxSk9aSEJPVFJEWUFSakVBaWdLTWdPQmtCUQ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Dyson: Wiltshire Council frustration over no warning for job cuts",
//             "snippet": "The firm said up to a third of the company's workforce is set to be cut.",
//             "publisher": "BBC",
//             "timestamp": "1720597478000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/cevwdrpkn17o",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUhTR3gwVHpKSVVsQndPSEpFVFJDZkF4ampCU2dLTWdZQmdZWXp0UVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUhTR3gwVHpKSVVsQndPSEpFVFJDZkF4ampCU2dLTWdZQmdZWXp0UVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "New pay-per-mile car tax system 'unavoidable' and will come into force sooner than thought",
//             "snippet": "Road users and motorists up and down the country have been warned the controversial system and policy is \"unavoidable\" as the new Labour Party government ...",
//             "publisher": "Birmingham Live",
//             "timestamp": "1720710840000",
//             "newsUrl": "https://www.birminghammail.co.uk/news/midlands-news/new-pay-per-mile-car-29524265",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXFWbEpPUWtkUVNVcE5kVWRWVFJEZ0F4aUFCU2dLTWdZRmdJcU10UVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXFWbEpPUWtkUVNVcE5kVWRWVFJEZ0F4aUFCU2dLTWdZRmdJcU10UVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Terrifying moment American Airlines Boeing plane's tire explodes and catches fire during take-off - two days a",
//             "snippet": "An emergency response team was dispatched to Tampa International Airport just before 8am Wednesday after the Boeing 737 plane's tire exploded.",
//             "publisher": "Daily Mail",
//             "timestamp": "1720713472000",
//             "newsUrl": "https://www.dailymail.co.uk/news/article-13623809/Boeing-American-Airlines-tire-explode-fire-Tampa.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWFOVXBvT1ZkS0xWRnRNRzVrVFJDZkF4ampCU2dLTWdtUmtvcFJPYVY2TkFF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWFOVXBvT1ZkS0xWRnRNRzVrVFJDZkF4ampCU2dLTWdtUmtvcFJPYVY2TkFF"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Axel Springer and KKR in talks to break up media empire",
//             "snippet": "German billionaire Mathias Döpfner and private equity group KKR are negotiating a break-up of media conglomerate Axel Springer, in a deal that would ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720722214000",
//             "newsUrl": "https://www.ft.com/content/1d09ac2b-2521-47ec-a6d2-16b52d88167f",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTRkV1l4ZEV4WGNISm9TWEEyVFJDS0F4aThCU2dLTWdhdEZaYk9sUW8=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTRkV1l4ZEV4WGNISm9TWEEyVFJDS0F4aThCU2dLTWdhdEZaYk9sUW8"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Jet2 customers face ‘modest’ price rises this summer as it adjusts to late-bookings trend",
//             "snippet": "Leeds-based travel firm says annual profits soared by 43% and passenger numbers rose 9% to record 17.7m.",
//             "publisher": "The Guardian",
//             "timestamp": "1720695840000",
//             "newsUrl": "https://www.theguardian.com/business/article/2024/jul/11/jet2-customers-price-rises-airline-late-bookings",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWliV1YyYkU1aFdTMUlNM1ZHVFJDUkF4ajhCU2dLTWdZdEFZTzE0QUU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWliV1YyYkU1aFdTMUlNM1ZHVFJDUkF4ajhCU2dLTWdZdEFZTzE0QUU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Shock MG Cyberster four-seat coupe tipped for sale in 2025",
//             "snippet": "MG has channelled the spirit of the MG B GT to create a four-seat coupé version of the Cyberster - which could be in showrooms as soon as next year.",
//             "publisher": "Autocar",
//             "timestamp": "1720710042000",
//             "newsUrl": "https://www.autocar.co.uk/car-news/new-cars/shock-mg-cyberster-four-seat-coupe-tipped-sale-2025",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXJXVTVGWmxGeFpVZzBNMEkzVFJDM0FSaVVBaWdCTWdrQllKQ3N1ZVlkS3dJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXJXVTVGWmxGeFpVZzBNMEkzVFJDM0FSaVVBaWdCTWdrQllKQ3N1ZVlkS3dJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "The Washington Metro Loop explained: Map, new stations, and what it will cost",
//             "snippet": "North East mayor Kim McGuinness announced this week that she will put more than £8 million into efforts to extend the Metro and restore the mothballed ...",
//             "publisher": "Chronicle Live",
//             "timestamp": "1720632120000",
//             "newsUrl": "https://www.chroniclelive.co.uk/news/north-east-news/washington-metro-loop-explained-map-29517209",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTNWRGxGUldWa016azRhVlZyVFJEZ0F4aUFCU2dLTWdhaEJKU0xEUXM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTNWRGxGUldWa016azRhVlZyVFJEZ0F4aUFCU2dLTWdhaEJKU0xEUXM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Twelfth of July Belfast bin collection and recycling centre details",
//             "snippet": "Bin collection days and recycling centre hours will change over the next few days for the holiday period.",
//             "publisher": "Belfast Live",
//             "timestamp": "1720641720000",
//             "newsUrl": "https://www.belfastlive.co.uk/news/belfast-news/twelfth-july-belfast-bin-collection-29511931",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWlZakpHT1ZsSWFuVlZVRkkyVFJEZ0F4aUFCU2dLTWdhZFVJanN0UVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWlZakpHT1ZsSWFuVlZVRkkyVFJEZ0F4aUFCU2dLTWdhZFVJanN0UVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Mum, 52, left suicidal after rogue trader leaves home looking like building site",
//             "snippet": "A single mum has told how she was left feeling suicidal - after falling victim to a rogue trader. Lesley Barlow paid £16,683.83 for a new kitchen and ...",
//             "publisher": "Stoke-on-Trent Live",
//             "timestamp": "1720670100000",
//             "newsUrl": "https://www.stokesentinel.co.uk/news/stoke-on-trent-news/mum-52-left-suicidal-after-9397083",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW5MV2RCWjJOTlkxSmFkMFUyVFJEZ0F4aUFCU2dLTWdhbEpvZ01sZ28=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNW5MV2RCWjJOTlkxSmFkMFUyVFJEZ0F4aUFCU2dLTWdhbEpvZ01sZ28"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Barratt Developments to build fewer homes in coming year",
//             "snippet": "Labour's ambitious plans to “get Britain building again” have been dealt a blow after one of the country's biggest developers warned it would build fewer ...",
//             "publisher": "The Times",
//             "timestamp": "1720627800000",
//             "newsUrl": "https://www.thetimes.com/business-money/companies/article/barratt-developments-to-build-fewer-homes-in-coming-year-v6srwjx2t",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUtaRGhsYVVSR01USlJjbE5MVFJES0FSam9BaWdLTWdhUms0aU9OUVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUtaRGhsYVVSR01USlJjbE5MVFJES0FSam9BaWdLTWdhUms0aU9OUVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Tesla’s share of US EV sales falls below 50% for the first time",
//             "snippet": "Tesla's share of US electric vehicle sales slid below 50 per cent for the first time, as the world's largest EV maker faced increased competition in its ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720721812000",
//             "newsUrl": "https://www.ft.com/content/12483ddd-245c-4ddd-b605-224720aa30c7",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNDNSRWhJYjFnelFUaElZVzVLVFJDS0F4aThCU2dLTWdrQlVJekdzZVFseUFJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNDNSRWhJYjFnelFUaElZVzVLVFJDS0F4aThCU2dLTWdrQlVJekdzZVFseUFJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Fiat primes sub-£30k Duster and Puma rivals with ICE and EV power",
//             "snippet": "Fiat will launch a Dacia Duster-rivalling SUV and a Ford Puma-like rakish compact crossover as part of a push towards a new affordable line-up of models.",
//             "publisher": "Autocar",
//             "timestamp": "1720713885000",
//             "newsUrl": "https://www.autocar.co.uk/car-news/new-cars/fiat-primes-sub-%C2%A330k-duster-and-puma-rivals-ice-and-ev-power",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWtiVlJCVFZBNVNYWlJUREZJVFJDM0FSaVVBaWdCTWdZQmtZN1dPQVk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWtiVlJCVFZBNVNYWlJUREZJVFJDM0FSaVVBaWdCTWdZQmtZN1dPQVk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Ineos shows V8, eight-seat and rally-raid versions of Grenadier",
//             "snippet": "Ineos has hinted at future variants of its Grenadier 4x4 with a collection of prototypes at this year's Goodwood Festival of Speed.",
//             "publisher": "Autocar",
//             "timestamp": "1720692397000",
//             "newsUrl": "https://www.autocar.co.uk/car-news/new-cars/ineos-shows-v8-eight-seat-and-rally-raid-versions-grenadier",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUljR2hVYjFndFVESTFSRzlLVFJDM0FSaVVBaWdCTWdZQnc0NVB3UVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUljR2hVYjFndFVESTFSRzlLVFJDM0FSaVVBaWdCTWdZQnc0NVB3UVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Harland & Wolff crisis is first test of Labour’s industrial policy",
//             "snippet": "The Labour government is under pressure to sign off a rescue deal for the beleaguered Belfast shipbuilder Harland & Wolff within weeks, in an early test of ...",
//             "publisher": "Financial Times",
//             "timestamp": "1720670447000",
//             "newsUrl": "https://www.ft.com/content/c6899332-6d64-4954-b7b0-4b3b9cbdfe35",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHplR3cwWmxoS1pGVkpOa1YwVFJDS0F4aThCU2dLTWdhSklvQ3FQUU0=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHplR3cwWmxoS1pGVkpOa1YwVFJDS0F4aThCU2dLTWdhSklvQ3FQUU0"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "As Bitcoin [BTC] dominance drops below 55%, is altcoin season here?",
//             "snippet": "AMBCrypto's analysis revealed that the Bitcoin [BTC] dominance chart has been decreasing. On the 10th of July, the dominance was 55.10%.",
//             "publisher": "AMBCrypto News",
//             "timestamp": "1720738895000",
//             "newsUrl": "https://ambcrypto.com/as-bitcoin-btc-dominance-drops-below-55-is-altcoin-season-here/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXFjelpPYzNjNE1rSnNZMHhJVFJDdEF4akxCU2dLTWdtQkVJSkhNU1Y3aHdJ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXFjelpPYzNjNE1rSnNZMHhJVFJDdEF4akxCU2dLTWdtQkVJSkhNU1Y3aHdJ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Pub speaks out after 'tragic accident' leaves man fighting for his life",
//             "snippet": "A pub in Cornwall has spoken out after an incident left a young man fighting for his life. The Royal Inn pub in Par was the scene of an dramatic incident ...",
//             "publisher": "Cornwall Live",
//             "timestamp": "1720731258000",
//             "newsUrl": "https://www.cornwalllive.com/news/cornwall-news/pub-speaks-out-after-tragic-9404162",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXVkM0kzTlZZMVpIQm5hV1IxVFJEZ0F4aUFCU2dLTWdZWllJcUt2QVE=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXVkM0kzTlZZMVpIQm5hV1IxVFJEZ0F4aUFCU2dLTWdZWllJcUt2QVE"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Outpouring of support for couple fined £1,200 for clearing up rubbish outside their house",
//             "snippet": "A couple who were fined for cleaning up rubbish outside their home have received an outpouring of support.",
//             "publisher": "LBC",
//             "timestamp": "1720702685000",
//             "newsUrl": "https://www.lbc.co.uk/news/outpouring-support-couple-fined-1-200-clearing-up-rubbish/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUJlUzFGYjE5VFlYWTJTRTUwVFJEekFoaVVCU2dLTWdhQmg0eENOZ1k=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUJlUzFGYjE5VFlYWTJTRTUwVFJEekFoaVVCU2dLTWdhQmg0eENOZ1k"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Use less energy and pay less — the plan to cut ‘unfair’ charges",
//             "snippet": "Households that use less electricity and gas are to have their energy bills cut under new plans to reduce fixed-rate charges. Ed Miliband, the energy ...",
//             "publisher": "The Times",
//             "timestamp": "1720725300000",
//             "newsUrl": "https://www.thetimes.com/uk/politics/article/use-less-energy-and-pay-less-the-plan-to-cut-unfair-charges-fnhtwsjwp",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNVJjRVJJU0VoVFlXOW1kRkkzVFJDZkF4ampCU2dLTWdNTjhBWQ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNVJjRVJJU0VoVFlXOW1kRkkzVFJDZkF4ampCU2dLTWdNTjhBWQ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "M&S release new dress less than £30 and it's 'lightweight, pretty and flattering'",
//             "snippet": "Marks and Spencer has released a new dress for less than £30 and it's ideal for the summer months. The Pure Cotton Printed Mini Waisted Dress is new to the ...",
//             "publisher": "Birmingham Live",
//             "timestamp": "1720605360000",
//             "newsUrl": "https://www.birminghammail.co.uk/whats-on/shopping/ms-release-new-dress-less-29512790",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVRSRkZDVlZKdllYaERNbGRWVFJEZ0F4aUFCU2dLTWdZQlFZNFZ3UVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVRSRkZDVlZKdllYaERNbGRWVFJEZ0F4aUFCU2dLTWdZQlFZNFZ3UVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Scots easyJet flight cancelled moments before take-off with all passengers already on board",
//             "snippet": "The EZY3283 from Edinburgh to Bodrum in Turkey was preparing for take-off when a passenger took unwell on Wednesday.",
//             "publisher": "Daily Record",
//             "timestamp": "1720720320000",
//             "newsUrl": "https://www.dailyrecord.co.uk/news/scottish-news/scots-easyjet-flight-cancelled-moments-33223853",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNVNkVEJQTFZKUVEwNTVWblE0VFJEZ0F4aUFCU2dLTWdrQlFJcUZJR2xjVkFF=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNVNkVEJQTFZKUVEwNTVWblE0VFJEZ0F4aUFCU2dLTWdrQlFJcUZJR2xjVkFF"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Daily Mail owner pulls out of race to buy Telegraph as Labour takes power",
//             "snippet": "Threat of increased red tape in wake of election scuppers Lord Rothermere's takeover plans.",
//             "publisher": "The Telegraph",
//             "timestamp": "1720688460000",
//             "newsUrl": "https://www.telegraph.co.uk/business/2024/07/11/daily-mail-owner-pulls-out-race-buy-telegraph-labour-power/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVhaRkU1TkVoQ1MxSXRTbE51VFJDcEF4aW9CU2dLTWdhaGdJd01PUVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVhaRkU1TkVoQ1MxSXRTbE51VFJDcEF4aW9CU2dLTWdhaGdJd01PUVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Speed limiters arrive for all new cars in the European Union",
//             "snippet": "It was a big week for road safety campaigners in the European Union as Intelligent Speed Assistance (ISA) technology became mandatory on all new cars.",
//             "publisher": "The Register",
//             "timestamp": "1720686900000",
//             "newsUrl": "https://www.theregister.com/2024/07/11/speed_limiters_arrive_for_all/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXpVakZ6TUY5d0xUSnpkamhsVFJDM0FSaVRBaWdCTWdhWlU1S3JKUWc=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXpVakZ6TUY5d0xUSnpkamhsVFJDM0FSaVRBaWdCTWdhWlU1S3JKUWc"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Construction swings from weakest to strongest sector",
//             "snippet": "Construction output rebounds by 1.9% in May after three months of decline.",
//             "publisher": "Construction Enquirer",
//             "timestamp": "1720697406000",
//             "newsUrl": "https://www.constructionenquirer.com/2024/07/11/construction-swings-from-weakest-to-strongest-uk-sector/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpUV2d3VVZGbldHYzFVMDlEVFJDZUF4allCQ2dLTWdZcE1JS1dIQUk=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpUV2d3VVZGbldHYzFVMDlEVFJDZUF4allCQ2dLTWdZcE1JS1dIQUk"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Congham Bridge to remain infilled by concrete following inquiry",
//             "snippet": "A historical railway bridge will remain infilled by concrete after planning inspectors quashed an enforcement notice to have the concrete removed.",
//             "publisher": "BBC",
//             "timestamp": "1720676606000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/cydvjpr27ydo",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNXhlVFJqUW5CbVozUlpiVlZSVFJDZkF4ampCU2dLTWdPVmNBNA=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXhlVFJqUW5CbVozUlpiVlZSVFJDZkF4ampCU2dLTWdPVmNBNA"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Costain appoints new commercial director",
//             "snippet": "Morris has been with the contractor since 2011 and has held a number of leadership roles across the organisation, most recently as commercial services ...",
//             "publisher": "Construction Enquirer",
//             "timestamp": "1720711363000",
//             "newsUrl": "https://www.constructionenquirer.com/2024/07/11/costain-appoints-new-commercial-director/",
//             "hasSubnews": false
//         },
//         {
//             "title": "Plans for 'one of Europe's biggest' hydro energy plants at famous Scottish loch",
//             "snippet": "A Scottish energy storage company has lodged plans for a major hydro facility at a famous Scottish loch. The move is described as a “pivotal step” as a firm ...",
//             "publisher": "HeraldScotland",
//             "timestamp": "1720674095000",
//             "newsUrl": "https://www.heraldscotland.com/news/24443813.plans-huge-hydro-energy-plant-famous-scottish-loch/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNUZWa2R5TjFwSU1tNW5NakJTVFJERUF4aW1CU2dLTWdNQmdCZw=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNUZWa2R5TjFwSU1tNW5NakJTVFJERUF4aW1CU2dLTWdNQmdCZw"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "What do you see FIRST? Brain teaser reveals the most respected part of your personality",
//             "snippet": "The image you see first in a new brain teaser means you are either a natural-born leader, a problem solver or have a strong sense of conviction.",
//             "publisher": "Daily Mail",
//             "timestamp": "1720713472000",
//             "newsUrl": "https://www.dailymail.co.uk/sciencetech/article-13624365/Brain-teaser-reveals-personality.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXNSM2t5WVZFd2NFWmhPRGRuVFJDZkF4ampCU2dLTWdZcFZJelBzUWM=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXNSM2t5WVZFd2NFWmhPRGRuVFJDZkF4ampCU2dLTWdZcFZJelBzUWM"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "This supermarket is launching 'middle aisle' style discounts to rival Aldi and Lidl",
//             "snippet": "A popular supermarket is launching 'middle aisle' style discounts section, hoping to rival discount giants like Aldi and Lidl.",
//             "publisher": "Metro.co.uk",
//             "timestamp": "1720710180000",
//             "newsUrl": "https://metro.co.uk/2024/07/11/this-supermarket-launching-middle-aisle-style-discounts-rival-aldi-lidl-21208415/",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTZSSEo2V0ZWb1FqSmZkWFF6VFJERUF4aW1CU2dLTWdZQkFJcXNuUVU=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTZSSEo2V0ZWb1FqSmZkWFF6VFJERUF4aW1CU2dLTWdZQkFJcXNuUVU"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Metrolink staff call three day strike this month over 'woeful' pay offer",
//             "snippet": "Our community members are treated to special offers, promotions and adverts from us and our partners. You can check out at any time.",
//             "publisher": "Manchester Evening News",
//             "timestamp": "1720687500000",
//             "newsUrl": "https://www.manchestereveningnews.co.uk/news/greater-manchester-news/breaking-metrolink-staff-call-three-29519598",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVBhQzFoZEhCWk1WbHVSbFkzVFJEZ0F4aUFCU2dLTWdhQmNZZ1NTUVE=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVBhQzFoZEhCWk1WbHVSbFkzVFJEZ0F4aUFCU2dLTWdhQmNZZ1NTUVE"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "South East Water says it needs cash injection to stay afloat",
//             "snippet": "Struggling firm, which serves 2.3 million people, is 'in discussions with lenders and shareholders regarding additional liquidity'",
//             "publisher": "The Guardian",
//             "timestamp": "1720661400000",
//             "newsUrl": "https://www.theguardian.com/business/article/2024/jul/10/south-east-water-says-it-needs-cash-injection-to-stay-afloat",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNXpSbWhwTXpCaE4xY3pNMDlSVFJDUkF4ajhCU2dLTWdNTlFRRQ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXpSbWhwTXpCaE4xY3pNMDlSVFJDUkF4ajhCU2dLTWdNTlFRRQ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Slugs and snails will ‘instantly turn away’ from plants when smelling cheap homemade spray",
//             "snippet": "To rid a garden of pesky slugs and snails, gardeners can turn to homemade solutions - one of which can provide 'instant' results, according to one woman.",
//             "publisher": "Express",
//             "timestamp": "1720598040000",
//             "newsUrl": "https://www.express.co.uk/life-style/garden/1921169/how-to-deter-slugs-snails-fast",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXRWMWRoWVU4emIwWjNjalEzVFJDUkF4ajhCU2dLTWdZQkFZU3FGUU0=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRWMWRoWVU4emIwWjNjalEzVFJDUkF4ajhCU2dLTWdZQkFZU3FGUU0"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Gatwick Airport: July strikes called off as new pay offers made",
//             "snippet": "Unite the Union says it has called off the strikes to allow workers to be balloted on pay offers.",
//             "publisher": "BBC",
//             "timestamp": "1720615709000",
//             "newsUrl": "https://www.bbc.co.uk/news/articles/czd9yde01w7o",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNWZURXhDTXpBdFNFWkdTbTUxVFJDZkF4ampCU2dLTWdNRmlRQQ=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNWZURXhDTXpBdFNFWkdTbTUxVFJDZkF4ampCU2dLTWdNRmlRQQ"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "'I need them!' Nestlé launches brand new treat with nostalgic nod to British 'staple' dessert",
//             "snippet": "Nestlé's Milkybar Jelly & Ice Cream sharing bags are available now and Britons can't wait to try it.",
//             "publisher": "GB News",
//             "timestamp": "1720734300000",
//             "newsUrl": "https://www.gbnews.com/lifestyle/food/nestle-new-product-milky-bar-jelly-ice-cream-sharing-bag",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNTFZMmxhUkhOVlozRjFiRTlFVFJERUF4aW1CU2dLTWdB=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iI0NnNTFZMmxhUkhOVlozRjFiRTlFVFJERUF4aW1CU2dLTWdB"
//             },
//             "hasSubnews": false
//         },
//         {
//             "title": "Hurricane Beryl may have caused $32bn losses to US, as small islands brace for economic punch",
//             "snippet": "Hurricane Beryl may have caused up to $32bn worth of damages and losses in the United States, according to preliminary figures by an independent ...",
//             "publisher": "The Independent",
//             "timestamp": "1720603049000",
//             "newsUrl": "https://www.independent.co.uk/climate-change/news/hurricane-beryl-damage-aftermath-texas-caribbean-mexico-b2577215.html",
//             "images": {
//                 "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXpObFJyV1dsMFZtTTNWVTlLVFJDckF4aUFCU2dLTWdZWmNwSUtyZ1k=-w280-h168-p-df-rw",
//                 "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXpObFJyV1dsMFZtTTNWVTlLVFJDckF4aUFCU2dLTWdZWmNwSUtyZ1k"
//             },
//             "hasSubnews": false
//         }
//     ]
// }

    async function getNews() {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const data = JSON.parse(result);
            // console.log(result);

            if(data.status != "success")return;
            const newsHeading = data.items[0].title;
            const newsElement = document.getElementById('newsElement');
            newsElement.innerHTML = newsHeading;
            console.log(newsHeading);
        } catch (error) {
            console.error(error);
        }
    }
      

    getNews()

