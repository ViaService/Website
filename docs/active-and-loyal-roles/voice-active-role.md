---
sidebar_position: 3
title: Voice Active Role
description: Award a special role to members in voice channels
slug: /active-roles/voice
tags: [Active Roles]
---

# Voice Active Role
This role is awarded to members who join the voice channels in your server. 

![Voice Active Role with Via Bot](/img/docs/VR.gif)

## How it works
1. When a member joins a voice channel that Via Bot has access to, the bot will give them the active role. 
2. They will have the role as long as they stay in the voice channel.
3. The bot will remove the role as soon as they leave the voice channel.
*In case of an overload, the bot may take upto 5 minutes to remove the role.*

## Requirements
1. Make sure you have followed all the steps in the **[Get Started](/docs/active-and-loyal-roles/get-started) guide**.
2. **Create a new role** for the voice active role. 
   - Place it just below the bot's role.
   - **Enable** the "*Display role members separately from online members*" toggle

## Setup
Type `/settings active_roles` and configure the voice active role

| Option | Type | Description | Example Value |
|---|---|---|---|
| voice_active_role | Role | Set the role that the bot should give to members in voice channels | @Hanging Out |
| maximum_users | Integer (1-30) | The maximum number of members who can have the active role at the same time (still in development) | 40 |

## FAQ
We will add content here after members ask us questions in our support server.