---
sidebar_position: 1
title: Anonymous Confessions
description: Confess your feelings, secrets or opinions anonymously to each other. 
slug: /confessions/
tags: [Confessions]
---

# Confessions
Confess your feelings, secrets or opinions anonymously to each other.

## For Members
### The Experience
Via Bot uses Discord's buttons and forms feature to create a seamless confessions experience for everyone.

![Confessions with Via Bot](/img/docs/confessions.gif)

In the above image,
- `#general` is the confessions channel
- `#104` is the ID of the confession
- `my dream` is what the confession is about
- `I wish ... dance all alone` is the confession

### How To Confess
To confess, simply use the `/confess` slash command in any channel. 

Alternatively, you can go to the server's confessions channel and click on the `Confess` button. You will be prompted to enter the confession.

### Your Privacy
Your confessions are anonymous. No member will know who you are. However, to prevent abuse of the confessions feature, certain moderators may be able to access the confession's user info. **You will be informed when a moderator accesses your confession's information**. 

The message will look like this:

![Confession User Info](/img/docs/confessor_reveal_alert.png)


## For Staff

### Setup Confessions
To setup confessions, follow the steps below:
1. Via Bot needs the following permissions to function properly:
- `VIEW CHANNELS`
- `READ MESSAGES`
- `SEND MESSAGES` 
- `EMBED LINKS` 

2. Create a channel for confessions. This channel will be used to display all confessions. `#confessions` is recommended.

3. Run the `/settings confessions` slash command in your server's bot commands channel.

| Option | Type | Description | Example Value |
|---|---|---|---|
| confession_channel | Channel | The channel to be used to display all confessions. | #confessions |
| moderator_role | Role | The moderator role for managing confessions. Members with this role can see the information of the members who confessed. | @Staff |


### Managing Confessions
Via Bot allows staff to view the information of the members who confessed. This is useful for staff to take action against members who are breaking the rules. 

Go to the confession message you would like to view the user info of and follow the steps below to view a confession's user info:

:::danger It is your responsibility to respect the privacy of your members.
This feature is only for staff to take action against members who are breaking the rules. Do not use this feature to stalk your members or for your personal benifits. Do not share the user info of a confession with anyone who is not a staff member. By following the steps below, you agree to use the feature with good faith.
:::

![Confession User Info](/img/docs/reveal_confessor.png)
#### On Windows/Linux/MacOS
1. Right click on the confession message and hover your mouse over the `Apps` option. A menu will appear beside it.
2. Click on the `Reveal Confessor` option with the via bot icon. A message will appear in the channel with the user info of the member who confessed.

#### On Mobile
1. Long press on the confession message and a menu will appear.
2. Click on the `Apps` option. A menu with application commands will appear.
3. Click on the `Reveal Confessor` option with the via bot icon. A message will appear in the channel with the user info of the member who confessed.

The user info will look like this:

![Confession User Info](/img/docs/confession_user_info.png)

