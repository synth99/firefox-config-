# firefox Config
advance preferences of firefox which can affect the performance of the browser

before everything else this configuration is purely based on the preferences of the user it highly depends what are the things are important and can be configure by yourself.Feel free to add something if there are things that i missed or forgot. 

the user.js is the pre configured file that i created feel free to change it of your likings.

to use the file 
1.Open Firefox.

2.Type about:support in the address bar.

3.Scroll down → find Profile Folder → click Open Directory.

4.paste the file user.js inside that folder.

5.Restart Firefox → all settings auto-apply.

done....

PS 

If you edit something in about:config, it might get overridden by user.js next time Firefox starts.
To tweak permanently, just edit your user.js file instead.

Now if you want to edit the file heres what you need to do.

1. Locate the file in the firefox folder usally named:user.js
   you can also open firefox and go to about:support and find the profile folder and click that to quickly navigate to the file manager.
2. Ones you find the file you can now edit with your favorite text editor.
3. to edit follow this
4. user_pref("preference.name", value); -this is the format.
5. user_pref("privacy.resistFingerprinting", true); -like this example.
   there are 2 types of variables which true/false,1-any value.
6. if you're satisfied with the changes you can save the file.
7. restart firefox then done.
