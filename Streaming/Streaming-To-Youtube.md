# Streaming Meetings to Youtube

We publicly live stream our meetings to YouTube using [Zoom](https://zoom.us/).

## Prerequisites

You need the Foundation login credentials for Zoom in order to host the meeting.
The Zoom user ID is `zoom-nodejs@openjsf.org`, the password needs
to be communicated privately, ask the TSC Chair.

Your YouTube Account must be a manager of the
[Node.js YouTube account](https://www.youtube.com/channel/UCQPYJluYC_sn_Qz_XE-YbTQ).
Ask the TSC Chair or foundation managers (Amanda Ennis, Brian Warner, Rachel
Romoff) to make your account a manager. To add managers or verify an account
is a manager:

1. Go to <https://youtube.com>
2. Click on the node.js icon on the right top.
3. Select settings, select "Add or remove managers", select "Manage permissions"
4. On that page you can use the +people at the top right of the popup to add
  people. It also lists all current managers.

## Live streaming a meeting

### Start and Stop the stream

1. Login to <https://zoom.us> using the Foundation credentials.
2. Go to <https://zoom.us/webinar/list>, find the meeting.
3. Press "Start", it should open the meeting in the Zoom application.
4. Go to "Participants" panel, check Attendees, promote them to panelists.
5. Go to "... More" in toolbar, choose "Live on YouTube", it will open in
  browser.
6. Choose to login to <https://youtube.com> with Node.js account, accept
  Zoom usage agreement (on first use)
7. On the Streaming page, edit the webinar title to include the meeting date,
  then press the red "Go Live!" button. Troubleshooting note: at least one
  person has found that "Go Live!" errored with a message "Please grant
  necessary privilege for live streaming". Copying the link from the default
  browser to a different browser may work around this issue.

Every participant can choose whether to participate with or without video.

YouTube records the live stream. Recordings are made available on the
[Node.js channel](https://www.youtube.com/channel/UCQPYJluYC_sn_Qz_XE-YbTQ/videos).

The stream title is set automatically from the information in Zoom. We usually
set it to `Node.js Technical Steering Committee meeting` for TSC meetings,
other WGs use appropriate titles.

The description should be a link to the meeting issue.

You can edit title and description on YouTube at a later time if needed.

![YouTube Basic Info example text](youtube-stream-title-description.png)

### Share the meeting once you've gone live

The meeting link should be `http://www.youtube.com/c/nodejs-foundation/live`.

Send it in a tweet such as:

```text
.@nodejs Technical Steering Committee meeting live now: http://www.youtube.com/c/nodejs-foundation/live
```

Adjust the `Technical Steering Committee` part as necessary and remove the
`.@nodejs` if tweeting from the official twitter account.

![YouTube Share input box](youtube-stream-share.png)

## Check stream status

This should say online when you are streaming, and usually be green.

However, it may turn yellow and issue a warning in a "stream health" section below. Since we usually stream with static images for the video, there will often be warnings that the video bitrate is low. This is a not a problem and should almost always be ignored.

![YouTube Stream Status showing Offline](youtube-stream-status.png)

## Check how many people are watching

![YouTube Analytics graph](youtube-stream-analytics.png)

## Moderate the chat and solicit questions

Moderation follows the [Moderation Policy](../Moderation-Policy.md). Messages can be moderated right-clicking and selecting the necessary action, such as `remove`.

If you participate in the chat while logged in as Node.js, it's good practice to append your initials to your messages.

During TSC meetings, there is a section of public Q&A at the end.
It is important to solicit for questions **well in advance** of public Q&A sections so that people have time to think of and type questions.
