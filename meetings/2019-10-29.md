# Node.js Foundation Build WorkGroup Meeting 2019-10-29

## Links

* **Recording**:  https://www.youtube.com/watch?v=GPScrh3EHDU
* **GitHub Issue**: https://github.com/nodejs/build/issues/1990
## Present

* Rod Vagg
* Michael Dawson (@mhdawson)
* Sam Roberts
* Ashely Cripps
* Richard Lau
* Myles Borrins

## Agenda


## Announcements
 
*Extracted from **build-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

No items on agenda adhoc coverage of

* Definition of role to capture what we need in terms of additional WG build members. Working
  session to refine:  https://docs.google.com/document/d/1a2iLuj1Ga2FkdKHdGPAJUld1ibRkd-shl7lQJTD1KIw/edit
  * Next steps:
     * Michael will circulat to build WG members for additional comments
     * Once we have additional feedback (1-2 days hopefully) Myles/Michael will get feedback from 
       managers at Google to validate it has info that larger companies will need
     * Michael to take back to the board

* Discussion of OSX work
  * Need for OSX 14/xcode 10 for 13.x/master. 
    * Sam/Ashley are working on this but complications in getting newer version at macstadium and
      older versions at NearForm
      * Ashley mentioned that we need a developer account to get ISO’s for older versions, Rod
        mentioned that we should already have one. Michael to help Sam/Ashley get access to our
        developer account to see if we can get what we need.
  * Signing required for Catalina
    * Currently it is possible to click through but unsure what will happen in Jan when Apple 
      tightens things further
    * Will affect older versions as well. Signing requires newer version of xcode though so it
      would mean a toolchain upgrade for older releases which is not something we’d typically 
      do.  Michael -> might be ok that if you run latest OSX version you can only run latest 
      Node.js binaries. All -> good idea to open TSC issue as we currently don’t have a
      Volunteer who has time to pick up this work and there are the larger questions (like is is
      ok if we just leave it as 10.x and 8.x not running on latest OSX and only 12.x and later do?)
      * Next step is Sam will open TSC issue


  * Joyent migration
    * We need to migrate machines at Joyent from one datacenter to another. Work is covered
      so far as:
        * Joao -> cross compilation machines
        * Michael/Sam -> smartos machines
        * Rod -> linting, infra machines and a couple other stragglers.

     * At this point still work to but looks manageable.


## Q&A, Other

## Upcoming Meetings


* **Node.js Foundation Calendar**: https://nodejs.org/calendar


Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
