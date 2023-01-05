







# /Users/re4388/project/personal/experiment/cronjobs/src/remove_duplicate_screenshot.sh
this file use crontab to run

to check 
```
crontab -l
```

to edit
```
crontab -e
```

to see how often it run:
```
cat  ~/cron-job-output.log
```


# TODO?



try this method
https://fjolt.com/article/javascript-setting-up-a-cron-job

this method enable me to have cronjob logic "AT CODE"
and just use PM2 to treat the whole code in one piece and keep it running



todo
use node to use bash run below line to get all exts:
code --list-extensions
maybe append to a file and copy that file into dotfiles




1
see if we can no need to always remember this,
and make below command in config? like package.json?
create another repo for my cron job?
pm2 start /Users/re4388/project/personal/experiment/node-12-22-0-commonJS/src/cron-job/backup_dotfiles.js --no-autorestart --cron "* 3 * * *"


2
change remove duplicate to cron job as well