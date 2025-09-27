# Firefox Advanced Configuration

This repository provides a customizable `user.js` file for Firefox, containing advanced preferences that can affect browser performance and privacy.  
**Note:** These settings reflect personal preferences—feel free to modify them to fit your needs.

## How to Use

1. Open Firefox.
2. Type `about:support` in the address bar and hit Enter.
3. Scroll down to the **Profile Folder** section and click **Open Directory**.
4. Copy the provided `user.js` file into this folder.
5. Restart Firefox. The settings will be applied automatically.

> **Note:** If you change settings in `about:config`, they may be overridden by `user.js` the next time Firefox starts. To make permanent changes, edit your `user.js` file directly.

---

## Editing the `user.js` File

1. Locate `user.js` in your Firefox profile folder (see above for how to find it).
2. Open it with your favorite text editor.
3. Add or edit preferences using the following format:
    ```js
    user_pref("preference.name", value);
    ```
    Example:
    ```js
    user_pref("privacy.resistFingerprinting", true);
    ```
    - Values can be `true`, `false`, numbers, or strings (in quotes).
4. Save the file and restart Firefox for changes to take effect.

---

## Contributions

Feel free to suggest or add new preferences!

---

## Disclaimer

Changing advanced Firefox settings can affect browser behavior and stability. Always back up your profile and settings before making changes.
