## Appium + Node Foundation = <3

This document serves as the application for the [Appium](https://appium.io)
open source mobile automation tool to join the Node Foundation as a [Top-Level
Project](https://github.com/nodejs/TSC/blob/master/Project-Lifecycle.md#top-level-project-and-working-group-requirements).

### Introduction to the Appium Project

Appium is a Node.js server that exposes a REST API used for automating mobile
applications (native, hybrid, and web) on iOS, Android, and more (Windows Phone
coming soon). The most common reason someone would want to automate a mobile
application is to test it, and Appium has become the world's most popular
open-source mobile testing tool. Testers use Appium via a client library
written in the tester's preferred language (thus differentiating Appium from
other testing tools---it is language-agnostic). Happily, the API that Appium
exposes is simply an extension of the API used for
[Selenium](https://seleniumhq.org), the extremely popular browser automation
tool, and so clients are easy to come by.

Over the last few years of its existence, Appium has grown from a small entrant
in the mobile testing space to the standard in mobile automation, used by many
of the world's largest companies as part of their mobile CI, and offered as
part of cloud testing offerings from Sauce Labs, Amazon.com, Testdroid,
Perfecto Mobile, and others. Given its wide appeal to non-Node.js users, but
its adoption of the very latest in Node.js technologies (recently entirely
rewritten in ES2015), we believe that Appium is an excellent candidate for
adoption into the Node Foundation as a top-level project. The time has come for
Appium to formally grow up as an open source project, and Node.js leads the
pack in open source organization and governance. We want to take advantage of
this accumulated wisdom and join forces with the Node Foundation for a better
future for our project.

### History of the Appium Project

Appium's story is well-outlined on [the project's history
page](http://appium.io/history.html?lang=en). Most recently, we have completely
rewritten the project in ES2015 + `async/await` with the goal of making the
project easier to understand, more modular, and more friendly, especially for
new contributors.

### Scope of the Appium Project

The Appium project's purpose is to make testing apps easier. That means a few
things for us:

* Use a standard automation API that everyone is already familiar with.
* Allow users to write test scripts in any language.
* As far as possible, don't modify the app in order to test it.
* Appium should be open source! Community > technology.

We chose the Selenium WebDriver [JSON Wire
Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol) (JSONWP) as
our foundational API (this is soon going to be superseded by the
[WebDriver](https://www.w3.org/TR/webdriver/) Standard, a W3C draft, but the
differences are fairly minor). Our goal is thus to provide a translation layer
between fundamental automation technologies (like those Apple and Google
provide for automating iOS and Android apps) and the JSONWP, so that users can
write test scripts for any platform taking advantage of the awesome HTTP
architecture of the JSONWP API.

For now Appium's platform support includes iOS and Android mobile devices, but
the future is wide open---we want to build a giant ecosystem of Appium
"drivers" that add support for automating whatever the apps of tomorrow look
like. And we want to do all of this in Node.js (except for when we are forced
to write some other language to connect to another technology, as when we use
Java in Android's UiAutomator context).

In terms of the scope of the Appium TLP's responsibilities specifically, they
basically include all aspects of running the Appium open source project. This
includes:

* Setting the project roadmap
* Setting release dates
* Managing the development process, the style guide and code quality
* Helping contributors with pull requests
* Determining who can become a committer or a TC member
* Maintaining infrastructure necessary for the community to operate well, e.g., the GitHub project, our discussion forum, any mailing lists or Slack channels, etc...
* Maintaining technical infrastructure (CI, for example)
* General project management for specific endeavors
* Mediating technical conflicts that may arise
* Handling conduct violations and ensuring the community remains healthy
* Organizing and accepting corporate sponsorship

Essentially, the Appium TLP is more or less the Appium project itself--the goal
is for the project as a whole to come under the umbrella of the Node
Foundation; of course this scope of responsibility does not extend to Appium's
use specifically or in general, forks, people giving talks at meetups or
conferences, or other kinds of community self-organization (though we may want
to officially recognize or support meetups or conferences).

### User Base, Community, and Ecosystem

* Basic stats (via GitHub) across the Appium org, as of 1/2016:
	* Over 160 unique contributors
	* Over 90 releases
	* Over 8,000 commits
	* Over 3,200 issues closed
	* Over 2,000 pull requests merged
	* Over 3,000 stars
	* Over 1,900 forks
* Usage stats:
	* Over 20,000 NPM downloads of the Appium server in the last month (10/2015). Appium is not an NPM dependency of other projects so this number refers to it being used in an end-user scenario.
	* New versions of the Appium.app GUI wrapper are downloaded on the order of ~500/day ([source](https://bitbucket.org/appium/appium.app/downloads/))
	* Supported Appium clients exist in 6 languages and these are downloaded frequently as well
* Appium has several regularly-occurring meetups around the world, organized independently by community members:
	* [San Francisco, USA](http://www.meetup.com/Appium-SF/)
	* [London, UK](http://www.meetup.com/Appium-London/)
	* [New York City, USA](http://www.meetup.com/Appium-New-York/)
	* [Bangalore, IN](http://www.meetup.com/Bangalore-Appium-Meetup/)
* An [Appium Book](https://www.packtpub.com/application-development/appium-essentials) has been written and published.
* Many tools have been created and maintained by the community, for example a desktop app [GUI](https://github.com/appium/appium-dot-app) wrapper for the server, or a [REPL](https://github.com/Jonahss/AppiumRepl).
* Many highly-viewed tutorials have been created by the community, even on commercial e-learning sites (like [this one on Udemy](https://www.udemy.com/appium-selendroid-tutorials/)).
* Dozens of conference talks have been given at conferences and meetups around the world, for example at [LXJS 2013](https://www.youtube.com/watch?v=zsbNVkayYRQ).
* Appium has become an integral part of many testers' careers. For example, [indeed.com](http://www.indeed.co.uk/jobs?q=appium&l=London) [searches](http://www.indeed.com/jobs?limit=10&as_not=&sort=&jt=all&as_any=&l=San+Francisco%2C+CA&fromage=any&as_cmp=&psf=advsrch&as_phr=&as_ttl=&st=&salary=&as_and=appium&radius=50) for SF, CA and London, UK each show > 100 open jobs with "appium" in the job requirements.

### Contribution Process

Our
[CONTRIBUTING.md](https://github.com/appium/appium/blob/master/CONTRIBUTING.md)
formalizes the various kinds of contributions and the processes necessary for
each. More contribution resources are available:

* [Style Guide](https://github.com/appium/appium/blob/master/docs/en/contributing-to-appium/style-guide-2.0.md)
* [Developer's Overview](https://github.com/appium/appium/blob/1.5/docs/en/contributing-to-appium/developers-overview.md)
* [Run-down of Appium packages and organization](https://github.com/appium/appium/blob/1.5/docs/en/contributing-to-appium/appium-packages.md)
* [How to run Appium from source](https://github.com/appium/appium/blob/master/docs/en/contributing-to-appium/appium-from-source.md)


### Governance Process

* Our project's roles and procedures are documented on our [GOVERNANCE.md](https://github.com/appium/appium/blob/1.5/GOVERNANCE.md).

### Organizational Tools

* Website: [appium.io](http://appium.io)
* [Docs](http://appium.io/slate/en/master) (Jekyll + Slate)
* Source code management: [GitHub](https://github.com/appium/appium)
	* Appium is split up into dozens of smaller repos and operates as an independent GitHub organization
* Issue tracking: [GitHub](https://github.com/appium/appium/issues)
* Milestone tracking: [GitHub](https://github.com/appium/appium/milestones)
* Releases: [GitHub](https://github.com/appium/appium/releases) and [NPM](https://npmjs.org/package/appium)
* User discussion forums: [discuss.appium.io](https://discuss.appium.io)
* User chat: [gitter.im/appium](https://gitter.im/orgs/appium/rooms) (#appium on Freenode is mostly abandoned)
* Developer/contributor chat: [appium.slack.com](https://appium.slack.com)
* Developer mailing list: [appium-developers@googlegroups.com](https://groups.google.com/forum/#!forum/appium-developers)

### Intellectual Property and Other Assets

Some assets would need to be released to the Foundation:

* Sauce Labs holds Appium's copyright in general.
* Sauce Labs owns the [appium.io](https://appium.io) domain name.
* A Sauce Labs designer made the Appium logo/logomark on company time.

### Initial Technical Committee Members

The Appium TC will initially consist of:

|Name|GitHub profile|Company|Location|
|----|--------------|-------|--------|
|Jonathan Lipps|[@jlipps](https://github.com/jlipps)|Sauce Labs|San Francisco, USA|
|Matthew Edwards|[@bootstraponline](https://github.com/bootstraponline)|Instructure, Inc.|Salt Lake City, USA|
|Dan Cuellar|[@penguinho](https://github.com/penguinho)|FOODit, Inc.|London, UK|
|Dan Doveralba|[@dandoveralba](https://github.com/dandoveralba)|FitBit|San Francisco, USA|

### Initial Working Groups

Initially, Appium will only need one working group, responsible for Appium's
continued development and supporting the various needs of the community.
Eventually we will want to consider adding working groups based on the
underlying automation technology (e.g., one group to manage direction for iOS
testing, another for Android testing, etc...). As the time becomes ripe for
large Appium community events (conferences, etc...), we will likely also want
a working group to plan and run such events.

### Important Documents

* [Code of Conduct](https://github.com/appium/appium/blob/master/CONDUCT.md)
* [License](https://github.com/appium/appium/blob/master/LICENSE)
* [CLA](https://docs.google.com/forms/d/1lOfXRw_0VCk7gYzjj4WLetGu7yelDVo5LWh0z7pGftE/viewform) (copyright will be transferred to Node/Linux Foundation when appropriate)


### TODO

* some of the linked documents are linked to the `1.5` branch since that is where development is currently taking place. Soon we will rename 1.5 to master so we will need to update this document with that change.
