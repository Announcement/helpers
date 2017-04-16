.txt document to be able to be anywhere close to efficient at coding JS later and not have to constantly take 10-minute breaks to hunt for how to do this and that.
[00:02] == ironfroggy [~ironfrogg@python/site-packages/ironfroggy] has quit [Ping timeout: 256 seconds]
[00:02] <Success> what order should i be running: eslint, babel, istanbul, mocha, rollup (assuming if one fails i stop there)
[00:03] <Havvy> No wait, I'm experiencing it.
[00:03] <zetlen> BigFatMooCow: that just sounds like being new at something
[00:03] <zetlen> sounds like you're doing it right
[00:03] <BigFatMooCow> Havvy: Yes, still happens after reload. It only allows horizontal scrolling with middle mouse for some reason.
[00:03] <ljharb> Success: that seems right

[00:04] <Success> what does it mean to instrument my javascript
[00:04] <Success> i dont get it
[00:05] == plutoniix [~q@159.192.250.94] has joined ##javascript
[00:05] <kiki`> use it?
[00:05] <kiki`> context @ Success?
[00:06] <ljharb> Success: for code coverage? that's what istanbul does
[00:07] <Havvy> Success: A tool that looks at your JavaScript code to do something.
[00:07] <Success> Like I'm trying to figure out how to get istanbul to run on my es2017 in a clean manor
[00:07] <Havvy> For analogy, when you use a thermometer on a bowl of soup, you are instrumenting the soup.
[00:08] <Success> Havvy: ahhh that makes sense. Yeah i was greatly overcomplicating it lol. I thought "Instrumenting" was like whole process compiling the AST's and injecting necessary functions and what not :o

<polyponyamory> Havvy Success: "implement, tool, instrument, appliance, utensil mean a relatively simple device for performing work. implement may apply to anything necessary to perform a task (crude stone implements) (farm implements). tool suggests an implement adapted to facilitate a definite kind or stage of work and suggests the need of skill more strongly than implement (a carpenter's tools). instrument suggests a device
[00:53] <polyponyamory>  capable of delicate or precise work (the dentist's instruments). appliance refers to a tool or instrument utilizing a power source and suggests portability or temporary attachment (household appliances). utensil applies to a device used in domestic work or some routine unskilled activity (kitchen utensils)."
[00:54] == jaxdev [~jax@c-50-139-72-194.hsd1.or.comcast.net] has quit [Remote host closed the connection]
[00:54] <polyponyamory> implement, tool, instrument, appliance, utensil mean a relatively simple device for performing work. implement may apply to anything necessary to perform a task (crude stone implements) (farm implements). tool suggests an implement adapted to facilitate a definite kind or stage of work and suggests the need of skill more strongly than implement (a carpenter's tools). instrument suggests a device capable of delicate
[00:54] <polyponyamory>  or precise work (the dentist's instruments). appliance refers to a tool or instrument utilizing a power source and suggests portability or temporary attachment (household appliances). utensil applies to a device used in domestic work or some routine unskilled activity (kitchen utensils). « .. bonus appendix @ havvy bigfatmoocow
[00:55] <polyponyamory>  https://www.merriam-webster.com/dictionary/instrument .. nice features here
[00:55] == phutchins1 [~philip@c-76-105-115-32.hsd1.ga.comcast.net] has joined ##javascript
[00:56] == django_ [~jonathan@58.247.241.72] has joined ##javascript
[00:56] <polyponyamory> i wanted it api'ed
