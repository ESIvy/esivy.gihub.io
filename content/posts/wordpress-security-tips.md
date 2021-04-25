---
title: "WordPress Security Tips for the Beginner"
date: '2015-06-09T13:25:20-05:00'
status: publish
path: /wordpress-security-tips
author: 'ES Ivy'
excerpt: ''
type: post
id: 3209
category:
    - 'Tech Tutorials'
    - 'Wordpress tutorial'
tag: []
post_format: []
---
![Blogging basics - WordPress tutorial, WordPress Security Tips](/uploads/2014/01/wordpress-tutorial-esivy-logo-300-x-150.jpg)Yesterday I attended a WordPress Meetup about basic security presented by [Nick Batik.](http://pleiadesservices.com/about-us/nicholas-r-batik/) WordPress Meetups are awesome free gatherings where developers volunteer to teach others all about WordPress and I’ve been to quite a few. I’m working on a whole series about making a WordPress site (my [How to Install a Favicon on WordPress tutorial](http://192.168.1.34:4945/install-favicon-wordpress/) will also be part of that series), but this security information is too important to keep to myself until I get this site moved and the series completed.

If your site gets hacked, to add to all the other headaches you can get blacklisted by Google. ([Understand Google Website Blacklists](https://sucuri.net/website-security/google-blacklisted-my-website)) You can see Nick’s slides from the presentation on the WPAustin blog, [Revisting WordPress Security.](http://wpaustin.com/2015/06/revisiting-wordpress-security/) There are links to lots of authoritative sites to learn more information. (Note: Currently, the slide program only works in Firefox for me, I can only see the first slide when I use Chrome.) When you’re searching around the web, it’s really helpful to learn where the sites are that you can really trust. That’s one of the things I love about going to these WordPress meetups. But below are are some basic WordPress security tips, practices that even a beginner can easily tackle, that were my take-away from the discussion.

If you’re taking money on your site — for example, setting up an ecommerce site or the like — then it would be a good idea to pay for a monthly security plan from someone like [Sucuri](https://sucuri.net/) as well, and/or use a paid security plugin like the pro versions of the security plugins I cover below.

WordPress Security Tips for the Beginner
========================================

### 1. Choose difficult passwords for your WordPress admin and other users, and change them regularly.

### 2. Blog as an editor, not as an administrator of your site.

If you login to WordPress anywhere someone could be “watching,” it’s best to usually login as someone other than the administrator. Most people have probably heard that random “free wifi” that’s publicly accessible may have been set up by a hacker. But places vulnerable to hackers include public wifi like at a coffee house or even your own wifi if you live or work somewhere that others can “see” that you have wifi available. Every time you login as admin in a vulnerable location is an opportunity for someone to scrape your password.

### 3. Maintain your site, or hire someone to maintain it for you.

Unfortunately, after you set up your site, it’s not going to stay done. This is the most frustrating part of software for me. (I hate it when my phone updates to such an extent that it’s like learning a new phone all over again. Sometimes I long for the days when all twelve buttons stayed in one place, on every phone, and you could always find your phone because it was attached to the wall. And then I take a picture outside with my smart phone and instantly send it to someone with a few clicks, and wonder how I lived without it!) In a perfect world, we wouldn’t have to update our software as much. If all the software engineers were really smart, then old versions would always work with the new, but that’s not always true. And unfortunately there are people out there just looking for ways to hack any software that’s out there. So when holes are found, they continually need to be fixed.

When software is improved or security issues are discovered, new versions of WordPress and plugins will be released and someone will have to update them on your site. This is called maintenance of your site.

If you set up your site, then the maintenance person is you. If you hired someone to make your site, check and see if you can hire them for maintenance. If you don’t have maintenance agreement with them, you’ll either need to do it yourself or hire someone else to do it.

(Is it just me that needed to have this spelled out, or is it too basic? I know that early on I saw something about maintenance of websites, and admit it just kind of slipped right past me. I wasn’t too concerned with keeping my site updated with the latest bells and whistles. And somehow I didn’t think there would be many security updates. I think mostly because I always like to think the best of people and that hackers aren’t as prevalent as they are. But when I moved from wordpress.com to wordpress.org and would be paying for my own hosting, I recognized that I would have to become more pay more attention about security.)

### 4. Install the latest version of WordPress and keep it updated.

Basic, I know. But it doesn’t hurt to be reminded. If you usually write posts on your site as “editor” or another user, don’t forget to login as administrator on a regular schedule and check for updates.

### 5. Update Plugins

Plugins are even more likely to have security cracks that the main WordPress install. Be sure to update them. If you installed your plugin from the [WordPress Plugins Directory](https://wordpress.org/plugins/) (which you can access from Dashboard &gt; Plugins &gt; Add New &gt; *type on the “Search Plugins” box*) then WordPress will keep the admin user up to date on available updates. However, if you purchase any premium plugins, you may need to check for updates back at the developer’s site! For beginners, it seems like a really good idea to just stick to things you find available through WordPress.

And I’m sure you’ve heard it before, but if you deactivate a plugin, then delete it. Otherwise the code is still sitting on your site, waiting to be exploited.

### 6. Backup your Site on a Regular Schedule

I use [Updraft Plus Backup and Restoration Plugin,](https://wordpress.org/plugins/updraftplus/) available through your WordPress Plugin dashboard. There are also some good paid options.

### 7. Install a basic security plugin.

Free plugins, available from the [WordPress Plugins Directory](https://wordpress.org/plugins/) include[ Sucuri Security – Auditing, Malware Scanner and Hardening](https://wordpress.org/plugins/sucuri-scanner/), [iThemes Security](https://wordpress.org/plugins/better-wp-security/), and [Wordfence Security.](https://wordpress.org/plugins/wordfence/) They all have paid pro-versions available if you need more security.

### 8. If you want to use free themes or plugins, only use ones approved by WordPress and available to you through your WordPress dashboard.

There’s a ton of free stuff out there, and most of it is by good, honest software writers who just want to share their work. Anyone can write a plugin or a free theme, so quality varies. If you know code and can check it, then it’s a great resource. But it’s easy for hackers to install malware or vulnerabilities in free themes and plugins, so if you don’t know code it’s best to stick with themes and plugins approved by WordPress.

### 9. If you buy themes or plugins, stick to well-known names.

Well known developers include StudioPress – they make Genesis which I’m working on installing – and ithemes. Again, don’t forget to check on updates regularly if they aren’t available from your WordPress dashboard.

### 10. If you’re not an a monthly security plan, manually scan your site for malware at a trusted site like https://sitecheck.sucuri.net/ on a regular schedule.

It’s free.

### Optional Tip: use .htaccess to protect your WordPress site.

Actually, this is an advanced technique that you really need to be experience with code to do, so it’s probably only a method for beginning WordPress users who already know how to code. I’m not sure why it was mentioned as a beginner best practice, but probably if you know what you’re doing, it’s a really good idea.

### 11. Change the WordPress default database prefix when you install WordPress.

Now, this was not something that made it onto the developer’s list; it was something I ran across in my searches and asked about. It’s so basic that the developer didn’t think to include it in his presentation. That’s part of the disconnect between developers and people new to WordPress or coding; there are things that are just so basic to a developer that they don’t think anyone needs to be told again.

You can read more about why you would want to change your database prefix, what a database prefix is, and how a hacker would exploit it at the post [Is WordPress More Secure with a Changed Database Prefix?](http://www.wpwhitesecurity.com/wordpress-security/change-wordpress-database-prefix/)

Here’s the roadblock I ran into in my research – the best time to do this is during your install. But it’s so basic to the install, that all the developers writing about this assume that you know how to do it, and all they’re writing about is how to change the prefix on a site that’s already running, like in the post [How to Change the WordPress Database Prefix to Improve Security](http://www.wpbeginner.com/wp-tutorials/how-to-change-the-wordpress-database-prefix-to-improve-security/).

When I first asked about this at the MeetUp, Nick very patiently explained where to find the box to do this on my install, after I entered my admin name and password. Yeah. Sounds pretty basic, I know. But here’s the thing. As we discussed it more and we looked around a little on the web, we discovered that if you use the one-button WordPress install available on your host, the option might not be there! So when I did my one button install this last time for a test site, I probably didn’t see a place to change the WordPress database prefix. Developers who teach courses like this aren’t using the one-button install, so they don’t know the option has disappeared.

Somewhere in the recesses of my memory, I seem to remember that this option might have been there when I did my first WordPress install a year or two ago, and I think my techie teenager instructed me to change it. So, I’m off to hunt around for a way to install WordPress that this option still exists! And hopefully, I’ll get done with all this research soon and manage to get up my new sites.

### UPDATE 12. MAKE SURE YOUR MEMBERSHIP REGISTRATION IS TURNED OFF

Another thing I just learned from [Daniel Bishop](http://bishless.com/category/wordpress/) in the [Everything But the Posts’](http://www.amazon.com/gp/product/B00IEM7BYO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00IEM7BYO&linkCode=as2&tag=esiv-20&linkId=ID2Z7PW5HPKG3CSH) Facebook group : after your WordPress install, on your Dashboard &gt; Settings &gt; Membership – make sure “Anyone can register” is NOT checked.

\* How do you know if you’ve been hacked? Signs to look for that you’ve been hacked include a new user showing up in your dashboard that you didn’t add, and SPAM ads appearing on your site. For more information and steps to take if you have been hacked, check out [Your Website Hacked but No Signs of Infection. ](https://blog.sucuri.net/2015/06/your-website-hacked-but-no-signs-of-infection.html)

\*\* For more information on WordPress Security tips, slides for this WordPress Meetup will be posted on [wpaustin.com](http://wpaustin.com/).