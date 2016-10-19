# Setting up OBS

This is a guide on how to set up Open Brodcaster Software for live broadcast of Node.js meetings.

## Prerequisites

##### OBS (Open Broadcaster Software)

OBS is a free, open-source encoder. This guide will focus on it.
OBS can be downloaded from https://obsproject.com/ and its repo is at
https://github.com/jp9000/obs-studio.

Make sure to download the newer OBS "Studio" edition.
(Available for multiple operating systems.)

_**Notes for macOS**_

By default, macOS does not have any APIs capable of monitoring desktop audio.
As such, a driver is required.

Commercial options such as https://rogueamoeba.com/loopback/ come with a
certified driver for this.

If compiling a custom driver is reasonable,
the OBS project suggests [WavTap](https://github.com/pje/WavTap), and
has detailed instructions
[here](https://obsproject.com/forum/resources/setting-up-mac-desktop-sound-capture-with-wavtap.79/).

Note: WavTap does not work on OS X El Capitan. In that case,
[Soundflower](https://github.com/mattingalls/Soundflower) may be a better
option.

### Stream key

Usually a single key identifier is used to verify with the service the channel
being streamed to.

Getting one for youtube is described in [Streaming-To-Youtube](Streaming-To-Youtube.md).

## Profile Setup & Settings

On the menu bar, select `Profile` and then `Rename`. Call the previously
"untitled" profile `Node.js`.
(Or create a new profile if existing profiles are present.)

On the right side of OBS's interface, click the `Settings` button.
(Or open settings/preference the default way on your operating system.)

An interface will appear with several window tabs on the left side.
The following headers will refer to those tabs by name.

### Stream Settings

Under the `Stream` tab, click the `Service` dropdown and select
`YouTube / YouTube Gaming`.

Enter in the `Stream key` as described in the prerequisites.

### Output Settings

Ensure the `Output Mode` is `simple` and the `Video Bitrate` is `2500`.

Set the `Audio Bitrate` to `160` if it is not already.

### Audio Settings

Set the `Sample Rate` to `48khz`.

### Video Settings

Set the `Output (Scaled) Resolution` to `1280x720` (720p).

## Scene Setup

On the menu bar, select `Scene Collection` and then `Rename`. Call the
previously "untitled" scene `Node.js`.
(Or create a new scene if existing scenes are present.)

Under the `Sources` window, click the `+` symbol and select "Image".
Call it `White Background`.
Set the `Image File` to any pure-white `.png` file.

Click on the white image in the preview so that a red boarder with control
points appears. Expand the image to, or beyond, the preview border.

Under the `Sources` window, click the `+` symbol and select `Image`.
Call it `Node Logo`.
Set the `Image File` to a Node.js `.png` logo file at least 1280x720 in size.

Expand the Node.js logo to about two-thirds of the preview.
Then, right-click the logo image and select `Transform` and next,
`Center to screen`.

## Audio setup

Change the volume slider on the `Desktop Audio` channel to be `-4.5 dB`.

Click the gear icon on the right of the `Desktop Audio` volume slider.
Select `Filters`. In the new window, click the `+` symbol and select
`Noise Gate`. Once created, set the following properties:
- `Close Threshold (dB)`: `-50.00`.
- `Open Threshold (dB)`: `-45.00`.
- `Attack Time (milliseconds)`: `10`.
- `Hold Time (milliseconds)`: `200`.
- `Release Time (milliseconds)`: `150`.

If you are joining the meeting from a different computer, mute the `Mic/Aux`
channel by clicking on the speaker icon.

#### macOS Audio

Desktop audio capture does not work be default on macOS. Please see the above "Notes for macOS" section for more information.

## Going live

Starting a livestream is as simple as clicking the `Start Streaming` button in the lower-right corner of OBS. Clicking the button again will stop the livestream.

Avoid streaming to an official Node.js account unless there is an actual meeting. Only one such stream may be live at a time.

If testing is necessary, please use a personal account on the appropriate streaming service with a separate OBS profile.
